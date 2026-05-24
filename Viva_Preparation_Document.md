# 🎓 Final Year Project (FYP) - Viva Preparation Document
**Project Name:** HealthChain (Decentralized Healthcare Record Management System)

This document is designed to help you prepare for your Final Year Project Viva. It contains the core functional and non-functional requirements, followed by the most important conceptual and technical questions an external examiner might ask, along with comprehensive answers.

---

## 📋 Part 1: System Requirements

### 🔹 Functional Requirements (FR)
*These are the specific behaviors and functions the system must perform.*
1. **User Registration & Roles:** The system must allow users to register as either a Patient or a Doctor.
2. **Admin Verification:** The Admin must have the authority to verify registered doctors before they can interact with patients or the system.
3. **Decentralized Storage:** Patients must be able to upload their medical records, which the system will encrypt and store on IPFS.
4. **Appointment Management:** Patients must be able to search for verified doctors and request appointments.
5. **Access Control Management:** Patients must be able to grant or revoke access to their medical records for specific doctors mathematically via smart contracts.
6. **Prescription Issuance:** Verified doctors must be able to write and save permanent, tamper-proof prescriptions for patients.
7. **AI Chatbot Assistance:** The system must provide an AI-powered assistant (using Groq SDK) to answer basic health queries and guide users.

### 🔹 Non-Functional Requirements (NFR)
*These dictate how the system should behave (performance, security, usability).*
1. **Security & Privacy:** Medical files must be encrypted before being uploaded to IPFS. The blockchain should only store the file hash (CID), never the actual personal data.
2. **Immutability:** Once an audit log (like a prescription or access grant) is written to the blockchain, it cannot be altered or deleted.
3. **Availability:** Since the backend logic is deployed on Ethereum and storage on IPFS, the system should not have a single point of failure.
4. **Usability:** The Next.js frontend must be highly responsive, user-friendly, and accessible on both desktop and mobile devices.
5. **Transparency:** All access logs (who viewed which record and when) must be transparently verifiable on the blockchain by the patient.

---

## 🗣️ Part 2: Viva Questions & Answers

### 🟢 Category 1: Conceptual & "Why Blockchain?"

**Q1: Why did you use Blockchain for a Healthcare system instead of a traditional centralized database (like MySQL or MongoDB)?**
**Answer:** Centralized databases have a single point of failure and are prone to hacks, ransomware, and data manipulation. If a hospital's server is hacked, all data is compromised. Blockchain provides **decentralization** (no central server), **immutability** (records cannot be secretly altered by a malicious admin), and **transparency** (patients can see exactly who accessed their data). It gives true data ownership back to the patient.

**Q2: Why use IPFS? Why didn't you store the medical images/files directly on the Blockchain?**
**Answer:** Storing large files (like PDFs, X-Rays) directly on the Ethereum blockchain is incredibly expensive (costs thousands of dollars in gas fees) and inefficient because every node in the network would have to download that large file. **IPFS (InterPlanetary File System)** is designed for decentralized file storage. We upload the file to IPFS, get a lightweight cryptographic hash (CID), and only store that short string (hash) on the blockchain. This keeps gas fees low while maintaining decentralization.

**Q3: If the blockchain is a public ledger, isn't patient privacy compromised? Anyone can see the blockchain data!**
**Answer:** Excellent question. We do not store plain-text patient names or medical files on the blockchain. 
1. The blockchain only stores Ethereum wallet addresses and IPFS hashes. 
2. The actual medical files stored on IPFS are **encrypted**. Even if someone finds the IPFS hash on the blockchain and downloads the file, they cannot read it without the decryption key, which is only granted to authorized doctors through the smart contract.

---

### 🔵 Category 2: Smart Contracts & Web3

**Q4: What is a Smart Contract and what is its role in your project?**
**Answer:** A smart contract is a self-executing program stored on the blockchain that runs when predetermined conditions are met. In my project, `Healthcare.sol` acts as the backend logic. It enforces Role-Based Access Control (ensuring only the Admin can verify doctors), logs appointments, and securely stores the IPFS hashes of prescriptions and records so they can never be forged.

**Q5: How does your frontend (Next.js) communicate with the Blockchain?**
**Answer:** The frontend uses a library called **Ethers.js**. It connects to the user's **MetaMask** wallet, which acts as the bridge to the Ethereum network. When a user wants to book an appointment or upload a record, Ethers.js takes the ABI (Application Binary Interface) of our deployed smart contract and asks MetaMask to sign and send the transaction to the blockchain.

**Q6: What happens if there is a bug in your Smart Contract after deployment? Can you update it?**
**Answer:** Once a standard smart contract is deployed to Ethereum, its code is immutable (cannot be changed). If there's a bug, we would have to deploy a brand new contract and migrate the data. *(Note: In advanced scenarios, Proxy Contracts can be used for upgradability, but for this FYP scope, it is deployed as an immutable contract).*

---

### 🟡 Category 3: System Architecture & Technologies

**Q7: Explain the 3-Tier architecture of your system.**
**Answer:** 
1. **Presentation Tier (Client):** Next.js and Tailwind CSS handle the UI, taking inputs and displaying data.
2. **Logic Tier (Web3/Middleware):** Ethers.js and the Smart Contract handle the business logic (authentication, permissions, executing transactions).
3. **Data Tier (Storage):** IPFS handles the heavy file storage, while the Blockchain acts as a secure, immutable database for access logs and file hashes.

**Q8: Why did you integrate an AI Chatbot (Groq SDK) into a blockchain project?**
**Answer:** While blockchain handles security and data integrity, healthcare systems can be complex for average users to navigate. The AI Chatbot is a value-added feature that improves **Accessibility and User Experience**. It helps patients understand medical jargon, guides them on how to use the DApp, and can provide preliminary health information, bridging the gap between complex Web3 technology and user-friendliness.

---

### 🔴 Category 4: Limitations & Future Work

**Q9: What are the main limitations of your project?**
**Answer:** 
1. **Gas Fees:** Every transaction (booking appointment, adding record) requires gas fees (ETH). In a real-world scenario, this can be expensive for patients.
2. **Key Management:** If a user loses their MetaMask private key or seed phrase, they permanently lose access to their medical records. There is no "Forgot Password" in Web3.

**Q10: If gas fees are a problem, how would you make this system practical for real-world hospitals?**
**Answer:** In the future, instead of deploying on the Ethereum Mainnet, we could deploy the project on a **Layer 2 scaling solution** (like Polygon or Arbitrum) where transaction fees are fractions of a cent. Alternatively, hospitals could run a **Private/Consortium Blockchain** (like Hyperledger Fabric) where transactions are free and entirely controlled by a network of trusted hospitals.
