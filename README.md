<div align="center">
  <h1>🏥 HealthChain</h1>
  <h3>Decentralized Healthcare Record Management System</h3>
  <p>A highly secure, blockchain-powered platform for managing medical records, ensuring patient data ownership, privacy, and seamless doctor-patient interactions.</p>
</div>

<br />

```mermaid
graph TD
    User([User: Patient / Doctor / Admin]) --> |Interacts via Browser| Frontend
    subgraph "Next.js Frontend (Client)"
        UI[UI Components]
        Web3[Ethers.js / Web3Context]
        UI --- Web3
    end
    Frontend --> |Uploads/Downloads Files| IPFS[(IPFS Network)]
    Frontend --> |Signs & Sends Transactions| BC[(Ethereum Blockchain)]
    subgraph "Smart Contracts (Backend)"
        BC --> |Healthcare.sol| Contract[Core Logic & Access Control]
    end
    Frontend --> |API Requests| Groq[Groq AI SDK]
```

---

## 🌟 Executive Summary

**HealthChain** solves the critical problems of modern centralized healthcare systems—such as data breaches, unauthorized access, and fragmented patient histories. Built as a Final Year Project (FYP), it integrates **Blockchain (Ethereum)** for tamper-proof access control and **IPFS** for decentralized, encrypted file storage. The system empowers patients to truly own their medical data while giving verified doctors the tools to access records, prescribe medications, and manage appointments securely.

---

## 🛠️ Technology Stack

The project utilizes a modern, robust, and highly scalable stack across all 3 tiers of its architecture.

| Category | Technology | Purpose in Project |
| :--- | :--- | :--- |
| **Frontend Framework** | **Next.js (React)** | Server-side rendering, routing, and building the core user interface. |
| **Styling & UI Components** | **Tailwind CSS & Shadcn/UI** | Highly responsive, accessible, and premium UI components. |
| **Blockchain Platform** | **Ethereum (Solidity)** | Writing the `Healthcare.sol` smart contract for core logic and access logs. |
| **Web3 Integration** | **Ethers.js** | Connecting the Next.js frontend to MetaMask and the Blockchain network. |
| **Decentralized Storage** | **IPFS** | Storing encrypted medical records securely off-chain to save gas fees. |
| **Smart Contract Tooling**| **Hardhat** | Compiling, testing, and deploying the Ethereum smart contracts. |
| **AI Integration** | **Groq SDK** | Powering the integrated virtual AI Healthcare Assistant. |

---

## ⚙️ How the System Works (Workflow)

The system operates on a Role-Based Access Control (RBAC) model. Below is the step-by-step lifecycle of how data flows through HealthChain.

### **1. Registration & Verification**
* **Actors:** Patients, Doctors, Admin.
* **Flow:** Users register via the Next.js frontend. Their Ethereum wallet address is mapped to their profile. **Doctors must be verified by the Admin** before they can access the platform or view any patient data.

### **2. Appointment & Access Granting**
* **Actors:** Patient & Doctor.
* **Flow:** A patient searches for a verified doctor and requests an appointment. The patient mathematically grants the doctor temporary access to their IPFS-stored medical history via a Smart Contract transaction.

### **3. Medical Consultation & Prescriptions**
* **Actors:** Doctor.
* **Flow:** The doctor views the patient's decrypted records. Post-consultation, the doctor writes a prescription which is cryptographically signed and stored permanently on the blockchain.

```mermaid
sequenceDiagram
    participant P as Patient
    participant F as Next.js Frontend
    participant SC as Smart Contract
    participant IPFS as IPFS Storage
    participant D as Doctor

    P->>F: Request Appointment & Upload Data
    F->>IPFS: Encrypt & Store Medical File
    IPFS-->>F: Return IPFS Hash (CID)
    F->>SC: Transaction: Book Appointment & Grant Access (Hash)
    SC-->>F: Transaction Confirmed
    D->>F: View Patient Data
    F->>SC: Verify Access Permissions
    SC-->>F: Access Granted (Returns Hash)
    F->>IPFS: Fetch File using Hash
    IPFS-->>F: Return File
    F-->>D: Decrypt & Display Record
    D->>F: Write Prescription
    F->>SC: Transaction: Save Prescription
```

---

## 📦 Core System Modules

| Module Name | Description | Access Level |
| :--- | :--- | :--- |
| **Admin Panel** | Verifies doctors' credentials to prevent fraud. Views platform statistics and manages global settings. | **Admin Only** |
| **Patient Portal** | Patients can upload records to IPFS, view their timeline, book appointments, and manage which doctors have access to their files. | **Patients** |
| **Doctor Portal** | Doctors can manage appointments, decrypt and view granted patient records, and issue immutable prescriptions. | **Verified Doctors** |
| **AI Assistant** | A conversational Chatbot powered by Groq SDK that assists users with navigation and preliminary health queries. | **All Users** |

---

## 🧩 Visualizing the System

### Use Case Diagram
This diagram outlines the primary actions that each user role can perform within the DApp.

```mermaid
flowchart LR
    subgraph System
        R1[Register & Verify]
        A1[Book Appointment]
        R2[Manage Records]
        P1[Write Prescription]
        C1[AI Chatbot]
    end

    Admin([Admin]) --> R1
    Patient([Patient]) --> A1
    Patient --> R2
    Patient --> C1
    Doctor([Verified Doctor]) --> P1
    Doctor --> A1
    Doctor --> C1
```

### Entity Relationship (Data Flow)
Shows how Blockchain state maps to off-chain IPFS storage.

```mermaid
erDiagram
    PATIENT ||--o{ APPOINTMENT : books
    PATIENT ||--o{ RECORD : owns
    DOCTOR ||--o{ APPOINTMENT : manages
    DOCTOR ||--o{ PRESCRIPTION : issues
    PATIENT ||--o{ PRESCRIPTION : receives
    
    PATIENT {
        address walletAddress
        string name
        string email
    }
    DOCTOR {
        address walletAddress
        string name
        string specialization
        bool isVerified
    }
    RECORD {
        string ipfsHash
        string fileName
        uint256 timestamp
    }
    PRESCRIPTION {
        uint256 id
        string details
        uint256 timestamp
    }
```

---

## 📂 Project Structure

The repository is organized into distinct environments to separate the Web3 logic from the Client interface:

```text
fyp-blockchain/
├── client/                     # 🌐 Next.js Frontend
│   ├── app/                    # App Router (Pages: /admin, /doctor, /patient)
│   ├── components/             # Reusable UI components (Shadcn/UI, Layouts)
│   ├── contexts/ & hooks/      # Web3Context (Ethers.js state management)
│   ├── utils/                  # ipfs.js (File encryption & upload logic)
│   └── package.json            
├── web3/                       # ⛓️ Blockchain Backend
│   ├── contracts/              # Healthcare.sol (The main Smart Contract)
│   ├── scripts/                # Hardhat deployment scripts
│   └── hardhat.config.js       # Blockchain network configuration
├── diagrams/                   # 📊 Architecture and Flow diagrams
└── README.md                   
```

---

## 🚀 Getting Started (Local Development)

Follow these steps to run the complete DApp locally on your machine.

### Prerequisites
* Node.js (v18+)
* MetaMask Browser Extension

### 1. Boot up the Blockchain (Web3)
```bash
cd web3
npm install
# Start a local Ethereum network
npx hardhat node
```
*In a new terminal window, deploy the contract to your local network:*
```bash
cd web3
npx hardhat run scripts/deploy.js --network localhost
```
*(This script will automatically copy the generated ABI to `client/config/Healthcare.json`)*

### 2. Run the Frontend (Client)
```bash
cd client
npm install
# Ensure .env.local is configured with your API keys (Groq, IPFS)
npm run dev
```
Open `http://localhost:3000` in your browser. Configure your MetaMask to connect to `Localhost 8545`.

---

## 🎓 Evaluation & Academic Significance
* **Data Security & Privacy:** Centralized databases are a single point of failure. HealthChain distributes this risk using cryptographic hashing and IPFS.
* **Immutability:** Once a prescription or audit log is written to the blockchain, it cannot be altered or forged.
* **Modern Web Standards:** Demonstrates full-stack proficiency by combining Web 2.0 UX standards (Next.js/Tailwind) with Web 3.0 backend infrastructure.
