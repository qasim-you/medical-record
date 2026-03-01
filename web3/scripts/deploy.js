import hre from "hardhat";

async function main() {
    console.log("Starting deployment for Healthcare smart contract...");

    const Healthcare = await hre.ethers.getContractFactory("Healthcare");

    console.log("Deploying contract...");
    const healthcare = await Healthcare.deploy();

    await healthcare.waitForDeployment();

    const address = await healthcare.getAddress();

    import("fs").then((fs) => {
        import("path").then((path) => {
            const configDir = path.join(process.cwd(), "../client/config");
            if (!fs.existsSync(configDir)) {
                fs.mkdirSync(configDir, { recursive: true });
            }

            const abiPath = path.join(process.cwd(), "artifacts/contracts/Healthcare.sol/Healthcare.json");
            const abiFile = JSON.parse(fs.readFileSync(abiPath, "utf8"));

            fs.writeFileSync(
                path.join(configDir, "Healthcare.json"),
                JSON.stringify(abiFile, null, 2)
            );

            const indexConfigPath = path.join(configDir, "index.js");
            let indexContent = fs.readFileSync(indexConfigPath, "utf8");
            indexContent = indexContent.replace(
                /export const CONTRACT_ADDRESS = ".*";/,
                `export const CONTRACT_ADDRESS = "${address}";`
            );
            fs.writeFileSync(indexConfigPath, indexContent);
        });
    });

    console.log(`\n================================`);
    console.log(`✅ Healthcare DApp Contract deployed to: ${address}`);
    console.log(`✅ ABI and Address updated in client/config!`);
    console.log(`================================\n`);
}

main().catch((error) => {
    console.error("Error during deployment:", error);
    process.exitCode = 1;
});
