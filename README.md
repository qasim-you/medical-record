# Medical Record Blockchain Project Guide

Welcome to the Medical Record Blockchain Application. This guide will walk you through the complete process of setting up, running the project, and using the application as a Doctor and a Patient.

---

## 1. Prerequisites (Setup Before Running)

Before starting the project, make sure you have the following installed on your computer:
1. **Node.js**: Download and install from [Node.js Official Website](https://nodejs.org/).
2. **MetaMask Extension**: Install the MetaMask extension in your Google Chrome or Brave browser and create a wallet.
3. **Git**: (Optional but recommended) for version control.

---

## 2. How to Run the Project (Complete Setup)

The project consists of two main parts: the **Smart Contracts (web3)** and the **Frontend (client)**.

### Step 2.1: Run the Blockchain Network (Backend)
Open your terminal (Command Prompt, PowerShell, or VS Code Terminal) and follow these steps:

1. **Go to the `web3` folder:**
   ```bash
   cd web3
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Start the Local Blockchain Network (Hardhat):**
   ```bash
   npx hardhat node
   ```
   *Note: This will start a local blockchain and give you 20 fake accounts with 10000 ETH each. Keep this terminal open!*

4. **Deploy Smart Contracts:**
   Open a **new** terminal window, go to the `web3` folder again, and deploy the contracts:
   ```bash
   cd web3
   npx hardhat run scripts/deploy.js --network localhost
   ```
   *(Adjust the script name if your deployment script is named differently, like `deploy.js` or `deploy.ts`)*

### Step 2.2: Run the Frontend App (Client)
Open a **new** terminal window and follow these steps:

1. **Go to the `client` folder:**
   ```bash
   cd client
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Start the Next.js Development Server:**
   ```bash
   npm run dev
   ```
4. **Open the Application:**
   Go to your browser and open [http://localhost:3000](http://localhost:3000).

---

## 3. How to Connect MetaMask to Local Network

To interact with the application, you need to connect your MetaMask wallet to the local Hardhat network.

1. Open **MetaMask**.
2. Click on the **Network Dropdown** at the top.
3. Click on **Add Network** -> **Add a network manually**.
4. Fill in the details:
   - **Network Name:** Hardhat Localhost
   - **New RPC URL:** `http://127.0.0.1:8545/`
   - **Chain ID:** `31337`
   - **Currency Symbol:** `ETH`
5. Click **Save** and switch to this network.

**Importing Accounts:**
Copy the Private Key of `Account #0` and `Account #1` from the terminal where `npx hardhat node` is running. In MetaMask, click on your profile -> **Import Account** -> Paste the Private Key. 
*Use Account #0 as the Admin/Doctor and Account #1 as the Patient.*

---

## 4. How to Use the Application (Registration & Workflow)

### Doctor Registration & Usage

1. **Connect Wallet**: On the website (localhost:3000), click the "Connect Wallet" button to connect your MetaMask (Make sure you select the Doctor's account).
2. **Register as a Doctor**: 
   - Navigate to the "Registration" or "Doctor Registration" page.
   - Fill in your details (Name, Specialization, Hospital, etc.).
   - Submit the transaction via MetaMask (it will cost fake gas fees).
3. **Doctor Dashboard**:
   - Once registered, you will be redirected to the Doctor Dashboard.
   - Here, you can view patients who have granted you access to their medical records.
   - You can add new medical records (prescriptions, diagnosis, test results) to a patient's file.

### Patient Registration & Usage

1. **Connect Wallet**: Switch your account in MetaMask to the Patient's account and connect it to the website.
2. **Register as a Patient**:
   - Navigate to the "Patient Registration" page.
   - Fill in your details (Name, Age, Blood Group, etc.).
   - Submit the transaction.
3. **Patient Dashboard**:
   - Once registered, you will see your Medical Dashboard.
   - **View Records**: You can view all medical records added by different doctors.
   - **Grant Access**: You have the power to grant or revoke access to your records. Enter a Doctor's Ethereum Address to grant them permission to view and add records.
   - **Revoke Access**: Remove permission from doctors who no longer need access.

---

## Troubleshooting

- **Transaction Failed / Nonce Error**: If you restart the `npx hardhat node`, you must reset your MetaMask accounts. Go to MetaMask Settings -> Advanced -> Clear activity tab data.
- **Contract Not Found**: Make sure you copied the deployed contract address from the deployment terminal and pasted it into your frontend `client/config` or `.env.local` files.
- **Connection Refused**: Ensure `npx hardhat node` is running in the background.

Enjoy testing and developing your Healthcare DApp!
