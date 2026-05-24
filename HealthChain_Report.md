# HealthChain: A Blockchain-Based Decentralized Healthcare Management System

**Student Name:** Muhammad Qasim
**Degree Program:** Bachelor of Science in Computer Science
**Session:** 2021–2025

---

## TABLE OF CONTENTS

- LIST OF FIGURES
- LIST OF TABLES
1. CHAPTER 1: INTRODUCTION TO THE PROBLEM
   - 1.1 Introduction
   - 1.2 Background
   - 1.3 Purpose
   - 1.4 Scope
   - 1.5 Objectives
   - 1.6 Intended Audience and Reading Suggestions
   - 1.7 Document Convention
2. CHAPTER NO 2: SOFTWARE REQUIREMENT SPECIFICATION
   - 2.1 Overall Description
     - 2.1.1 Product Perspectives
     - 2.1.2 Product Features
     - 2.1.3 Design and Implementation Constraints
     - 2.1.4 Assumptions and Dependencies
   - 2.2 System Features
     - 2.2.1 System Feature 1: Wallet-Based Authentication and Role Detection
     - 2.2.2 System Feature 2: Doctor Registration and Admin Verification
     - 2.2.3 System Feature 3: Patient Registration
     - 2.2.4 System Feature 4: Appointment Booking with Automated Payment Distribution
     - 2.2.5 System Feature 5: Medical Record Management
     - 2.2.6 System Feature 6: Digital Prescription Issuance
     - 2.2.7 System Feature 7: Decentralized Medicine Marketplace
     - 2.2.8 System Feature 8: On-Chain Messaging Between Doctors and Patients
     - 2.2.9 System Feature 9: Admin Dashboard and Platform Management
     - 2.2.10 System Feature 10: AI HealthBot — Intelligent Platform Guide
   - 2.3 External Interface Requirements
     - 2.3.1 User Interfaces
     - 2.3.2 Hardware Interfaces
     - 2.3.3 Software Interfaces
     - 2.3.4 Communication Interfaces
   - 2.4 Other Non-Functional Requirements
     - 2.4.1 Performance Requirements
     - 2.4.2 Safety Requirements
     - 2.4.3 Security Requirements
3. CHAPTER 3: ANALYSIS (USE CASE MODEL)
   - 3.1 Identifying Actors and use cases using Textual Analysis
   - 3.2 Forming Use Case Diagram with Candidate and Use Cases
   - 3.3 Describe the Events Flow for Use Case
4. CHAPTER NO 4: DESIGN
   - 4.1 Architecture Diagram
   - 4.2 ERD with Data Dictionary
   - 4.3 Data Flow Diagram (Level 0 and Level 1)
     - 4.3.1 Data Flow Diagram for Level 0
     - 4.3.2 Data Flow Diagram for Level 1
   - 4.4 Class Diagram
   - 4.5 Object Diagram
   - 4.6 Sequence Diagram
   - 4.7 Activity Diagram
   - 4.8 Collaboration Diagram
5. CHAPTER NO 5: IMPLEMENTATION
   - 5.1 Component Diagram
   - 5.2 Deployment Diagram
   - 5.3 Database Architecture (1-Tier, 2-Tier, 3-Tier Architecture)
     - 5.3.1 1-Tier Architecture
     - 5.3.2 2-Tier Architecture
     - 5.3.3 3-Tier Architecture
6. CHAPTER NO 6: TESTING (SOFTWARE QUALITY ATTRIBUTES)
   - 6.1 Test Case Specification
   - 6.2 Black Box Test Cases
     - 6.2.1 Boundary Value Analysis (BVA)
     - 6.2.2 Equivalence Class Partitioning
     - 6.2.3 State Transition Testing
     - 6.2.4 Decision Table Testing
     - 6.2.5 Graph Base Testing
   - 6.3 White Box Testing
     - 6.3.1 Statement Coverage
     - 6.3.2 Branch Coverage
     - 6.3.3 Path Coverage
7. CHAPTER NO 7: TOOLS AND TECHNOLOGIES
   - 7.1 Programming Languages
   - 7.2 Operating Environment
   APPENDIX A: USER DOCUMENTATION
   APPENDIX B: SOURCE CODE

---

## LIST OF FIGURES

| Figure No. | Description | Reference File |
|------------|-------------|----------------|
| Figure 3.1 | Use Case Diagram — HealthChain DApp | diagrams/01_use_case_diagram.drawio |
| Figure 4.1 | Architecture Diagram — Three-Layer Stack | diagrams/06_deployment_architecture_diagram.drawio |
| Figure 4.2 | Entity Relationship (ER) Diagram | diagrams/05_er_diagram.drawio |
| Figure 4.3 | Data Flow Diagram — Level 0 | diagrams/07_data_flow_diagram_level0.drawio |
| Figure 4.4 | Data Flow Diagram — Level 1 | diagrams/07_data_flow_diagram_level1.drawio |
| Figure 4.5 | Class Diagram — Smart Contract Data Model | diagrams/02_class_diagram.drawio |
| Figure 4.6 | Object Diagram — Runtime State Snapshot | diagrams/11_object_diagram.drawio |
| Figure 4.7 | Sequence Diagram — Appointment Booking Flow | diagrams/03_sequence_diagram_overall.drawio |
| Figure 4.8 | Activity Diagram — Registration Workflow | diagrams/04_activity_diagram_overall.drawio |
| Figure 4.9 | Collaboration Diagram — Object Interaction | diagrams/12_collaboration_diagram.drawio |
| Figure 5.1 | Component Diagram — Frontend Modules | diagrams/09_component_diagram.drawio |
| Figure 5.2 | Deployment Diagram — Infrastructure Nodes | diagrams/13_deployment_diagram.drawio |

---

## LIST OF TABLES

| Table No. | Description | Chapter |
|-----------|-------------|---------|
| Table 1.1 | Project Objectives | Chapter 1 — Introduction |
| Table 1.2 | Intended Audience and Reading Suggestions | Chapter 1 — Introduction |
| Table 1.3 | Document Conventions | Chapter 1 — Introduction |
| Table 2.1 | Product Features | Chapter 2 — SRS |
| Table 2.2 | Design and Implementation Constraints | Chapter 2 — SRS |
| Table 2.3 | Assumptions and Dependencies | Chapter 2 — SRS |
| Table 2.4 | Stimulus/Response Sequences — Wallet Authentication (Feature 1) | Chapter 2 — SRS |
| Table 2.5 | Functional Requirements — Feature 1: Wallet-Based Authentication | Chapter 2 — SRS |
| Table 2.6 | Stimulus/Response Sequences — Doctor Registration (Feature 2) | Chapter 2 — SRS |
| Table 2.7 | Functional Requirements — Feature 2: Doctor Registration | Chapter 2 — SRS |
| Table 2.8 | Stimulus/Response Sequences — Patient Registration (Feature 3) | Chapter 2 — SRS |
| Table 2.9 | Functional Requirements — Feature 3: Patient Registration | Chapter 2 — SRS |
| Table 2.10 | Stimulus/Response Sequences — Appointment Booking (Feature 4) | Chapter 2 — SRS |
| Table 2.11 | Functional Requirements — Feature 4: Appointment Booking | Chapter 2 — SRS |
| Table 2.12 | Stimulus/Response Sequences — Medical Record Management (Feature 5) | Chapter 2 — SRS |
| Table 2.13 | Functional Requirements — Feature 5: Medical Record Management | Chapter 2 — SRS |
| Table 2.14 | Stimulus/Response Sequences — Digital Prescription (Feature 6) | Chapter 2 — SRS |
| Table 2.15 | Functional Requirements — Feature 6: Digital Prescription Issuance | Chapter 2 — SRS |
| Table 2.16 | Stimulus/Response Sequences — Medicine Marketplace (Feature 7) | Chapter 2 — SRS |
| Table 2.17 | Functional Requirements — Feature 7: Decentralized Medicine Marketplace | Chapter 2 — SRS |
| Table 2.18 | Stimulus/Response Sequences — On-Chain Messaging (Feature 8) | Chapter 2 — SRS |
| Table 2.19 | Functional Requirements — Feature 8: On-Chain Messaging | Chapter 2 — SRS |
| Table 2.20 | Stimulus/Response Sequences — Admin Dashboard (Feature 9) | Chapter 2 — SRS |
| Table 2.21 | Functional Requirements — Feature 9: Admin Dashboard | Chapter 2 — SRS |
| Table 2.22 | Stimulus/Response Sequences — AI HealthBot (Feature 10) | Chapter 2 — SRS |
| Table 2.23 | Functional Requirements — Feature 10: AI HealthBot | Chapter 2 — SRS |
| Table 2.24 | HealthBot Component Architecture | Chapter 2 — SRS |
| Table 2.25 | Software Interfaces | Chapter 2 — SRS |
| Table 2.26 | Performance Requirements | Chapter 2 — SRS |
| Table 2.27 | Safety Requirements | Chapter 2 — SRS |
| Table 2.28 | Security Requirements | Chapter 2 — SRS |
| Table 3.1 | Identified Actors | Chapter 3 — Analysis |
| Table 3.2 | Event Flow — Book Appointment (Pay ETH) | Chapter 3 — Analysis |
| Table 3.3 | Event Flow — Register as Doctor | Chapter 3 — Analysis |
| Table 3.4 | Event Flow — Get AI Guidance (HealthBot) | Chapter 3 — Analysis |
| Table 4.1 | Architecture Layers | Chapter 4 — Design |
| Table 4.2 | Data Dictionary — All Entities | Chapter 4 — Design |
| Table 4.3 | Data Flows at Level 0 | Chapter 4 — Design |
| Table 4.4 | Sub-Processes at Level 1 | Chapter 4 — Design |
| Table 4.5 | Entity Relationships (Class Diagram) | Chapter 4 — Design |
| Table 4.6 | Runtime Object Snapshot | Chapter 4 — Design |
| Table 4.7 | Sequence of Messages — Appointment Booking | Chapter 4 — Design |
| Table 4.8 | Activity Steps — Doctor Registration Workflow | Chapter 4 — Design |
| Table 4.9 | Collaboration Messages | Chapter 4 — Design |
| Table 5.1 | Frontend Package Components | Chapter 5 — Implementation |
| Table 5.2 | Blockchain Package Components | Chapter 5 — Implementation |
| Table 5.3 | External Services | Chapter 5 — Implementation |
| Table 5.4 | 1-Tier Architecture Characteristics | Chapter 5 — Implementation |
| Table 5.5 | 2-Tier Architecture Layers | Chapter 5 — Implementation |
| Table 5.6 | 3-Tier Architecture Mapping | Chapter 5 — Implementation |
| Table 6.1 | Black Box Test Cases — Boundary Value Analysis (BVA) | Chapter 6 — Testing |
| Table 6.2 | Black Box Test Cases — Equivalence Class Partitioning | Chapter 6 — Testing |
| Table 6.3 | State Transition Testing — Doctor Lifecycle | Chapter 6 — Testing |
| Table 6.4 | State Transition Testing — Appointment Lifecycle | Chapter 6 — Testing |
| Table 6.5 | Decision Table Testing — Appointment Booking Logic | Chapter 6 — Testing |
| Table 6.6 | Graph Based Testing — Patient Registration and Booking | Chapter 6 — Testing |
| Table 6.7 | White Box — Statement Coverage (bookAppointment) | Chapter 6 — Testing |
| Table 6.8 | White Box — Branch Coverage (bookAppointment) | Chapter 6 — Testing |
| Table 6.9 | White Box — Branch Coverage (verifyDoctor) | Chapter 6 — Testing |
| Table 6.10 | White Box — Path Coverage (bookAppointment) | Chapter 6 — Testing |
| Table 6.11 | White Box — Path Coverage (buyMedicine) | Chapter 6 — Testing |
| Table 7.1 | Programming Languages Summary | Chapter 7 — Tools & Technologies |
| Table 7.2 | Development Environment — Tools and Versions | Chapter 7 — Tools & Technologies |
| Table 7.3 | Minimum Hardware Requirements | Chapter 7 — Tools & Technologies |

---

# CHAPTER 1: INTRODUCTION TO THE PROBLEM

## 1.1 Introduction

The management of patient health records, physician credentials, and clinical transactions has long been a challenge in healthcare systems worldwide. As healthcare delivery has grown in complexity, the volume of data generated across hospitals, clinics, pharmacies, and diagnostic centers has increased substantially. Despite the widespread adoption of electronic health record (EHR) systems, these platforms have largely replicated the structural limitations of their paper-based predecessors: data is owned and controlled by individual institutions, interoperability between systems is limited, and patients have minimal visibility into or control over their own health information.

HealthChain is a final-year project that proposes an alternative model. It is a decentralized healthcare management platform built on the Ethereum blockchain. By encoding all core healthcare management logic within a Solidity smart contract, HealthChain eliminates the dependency on any central server or administrative authority. Patient records, appointment data, prescriptions, and financial transactions are recorded on an immutable, distributed ledger that no single party controls. This document serves as the complete technical specification and report for the HealthChain system.

## 1.2 Background

The global healthcare industry generates approximately 30% of the world's data volume, a figure that continues to grow with the expansion of telemedicine, wearable health monitoring, and genomic medicine. Despite this data abundance, clinical decision-making at the point of care is frequently hampered by the inaccessibility of relevant patient history. A physician consulting a patient at a different hospital than where prior treatment occurred has no reliable means of retrieving prior diagnoses, medication records, or allergy information in real time.

This fragmentation arises from the architecture of conventional healthcare information systems. Each institution operates its own proprietary database, governed by its own data policies, and accessible only to its own credentialed staff. Interoperability standards such as HL7 FHIR have been introduced to bridge these silos, but implementation remains inconsistent and adoption is far from universal.

Blockchain technology offers a structurally different approach. Introduced by Satoshi Nakamoto in 2008 as the underlying ledger mechanism of Bitcoin, blockchain is a distributed, append-only data structure in which records are grouped into cryptographically linked blocks and validated by network consensus. The Ethereum platform, launched in 2015, extended this concept with the smart contract: a deterministic, self-executing program deployed on the blockchain that encodes business rules and executes them automatically when invoked by a transaction. Smart contracts run on the Ethereum Virtual Machine (EVM), a decentralized computing environment that guarantees consistent execution across all nodes in the network.

Healthcare data recorded on a blockchain inherits three properties directly relevant to the problems described above. First, immutability ensures that records cannot be altered after creation, providing a reliable audit trail. Second, transparency allows authorized parties to verify record authenticity without trusting a central authority. Third, decentralization eliminates single points of failure and reduces the concentration of sensitive data in high-value attack targets.

## 1.3 Purpose

The purpose of the HealthChain project is to demonstrate the technical feasibility of a blockchain-based healthcare management system that addresses the structural limitations of centralized platforms. Specifically, the system is designed to show that a smart contract can serve as the sole source of truth for healthcare data management — eliminating the need for a centralized database server while preserving the core functions expected of a healthcare information platform.

The secondary purpose is to produce a working prototype that can be evaluated against academic software engineering standards, including requirements specification, system design through UML modeling, implementation using industry-standard tools, and systematic testing. The project is intended to fulfill the requirements of the Final Year Project submission for the Bachelor of Science in Computer Science program.

## 1.4 Scope

The HealthChain system is bounded by the following scope:

**In Scope:**
The system supports three user roles: Administrator, Doctor, and Patient. All role management, data storage, and financial transactions are handled by a single Solidity smart contract deployed on a Hardhat local Ethereum network (Chain ID 31337). The system includes: wallet-based authentication via MetaMask, doctor registration with IPFS credential storage, patient registration with automatic consultant assignment, appointment booking with automatic ETH payment distribution, on-chain medical record management, digital prescription issuance, a medicine marketplace with discount logic, peer-to-peer on-chain messaging, an administrative dashboard with revenue withdrawal capability, and an AI-powered onboarding assistant (HealthBot) powered by the Groq API.

**Out of Scope:**
The system does not include integration with any external Electronic Health Record system, real-time video consultation, mobile application development, deployment to a public Ethereum network or mainnet, multi-administrator governance, or HIPAA/GDPR compliance certification. These areas are identified as candidates for future development.

## 1.5 Objectives

The objectives of the HealthChain project are as follows:

| Obj. No. | Objective |
|----------|-----------|
| O-01 | To design and deploy a Solidity smart contract encoding all core healthcare management logic on the Ethereum blockchain. |
| O-02 | To implement wallet-based authentication using the MetaMask browser extension, replacing password-based access control. |
| O-03 | To develop a role-based Next.js frontend that renders appropriate interfaces for Administrator, Doctor, and Patient roles. |
| O-04 | To integrate IPFS via the Pinata pinning service for decentralized storage of medical certificates and profile images. |
| O-05 | To implement a transparent on-chain economic model governing consultation fees, medicine purchases, and platform revenue. |
| O-06 | To enable permanent, verifiable peer-to-peer messaging between physicians and patients stored on the blockchain. |
| O-07 | To provide an AI-powered conversational assistant (HealthBot) to reduce the onboarding barrier for non-technical users. |
| O-08 | To evaluate the system through structured black box and white box testing against defined test cases. |

## 1.6 Intended Audience and Reading Suggestions

This document is intended for the following audiences:

| Audience | Relevant Sections |
|----------|-------------------|
| Academic Evaluators and Project Supervisors | All chapters — particularly Chapters 2, 3, 4, and 6 |
| Software Developers and Technical Reviewers | Chapters 4, 5, 7, and Appendix B (Source Code) |
| Healthcare Domain Experts | Chapters 1, 2, and 3 |
| Non-Technical Readers | Chapter 1, Appendix A (User Documentation) |

It is recommended that academic evaluators read chapters sequentially. Developers may refer directly to Chapter 4 (Design) and Chapter 5 (Implementation) after reviewing the SRS in Chapter 2. Non-technical readers should consult Appendix A for a simplified guide to the platform.

## 1.7 Document Convention

This document follows the IEEE 830 Software Requirements Specification standard for the structure of Chapter 2. The following conventions are used throughout:

| Convention | Meaning |
|------------|---------|
| **SHALL** | Mandatory requirement — the system must implement this without exception |
| **SHOULD** | Recommended requirement — preferred but not strictly mandatory |
| **MAY** | Optional feature — may be implemented at the developer's discretion |
| FR-x.y | Functional Requirement identifier (Feature number . Requirement number) |
| NFR-x.y | Non-Functional Requirement identifier |
| [Figure x.y] | Reference to a diagram listed in the List of Figures |
| italics | Technical terms introduced for the first time |
| `code font` | Source code identifiers, function names, and file paths |

All monetary values in the system are denominated in Ether (ETH) and wei (1 ETH = 10^18 wei). All timestamps are recorded as Unix epoch values by the Ethereum block timestamp.

---
# CHAPTER NO 2: SOFTWARE REQUIREMENT SPECIFICATION

## 2.1 Overall Description

### 2.1.1 Product Perspectives

HealthChain is a standalone decentralized application (DApp) built on the Ethereum blockchain. Unlike conventional healthcare software that depends on centralized servers and institutional databases, HealthChain functions as a fully on-chain system in which the deployed smart contract serves simultaneously as the application server, authorization engine, and permanent data store. No backend web server maintains application state.

The system integrates with two external decentralized services. The Ethereum blockchain, accessed through the MetaMask wallet extension via the JSON-RPC protocol, serves as the execution environment for all business logic. The InterPlanetary File System (IPFS), accessed through the Pinata cloud gateway, provides content-addressed decentralized storage for binary files including profile photographs and medical certificates. The frontend is a Next.js web application communicating with the smart contract exclusively through the ethers.js v6 library. (Refer to Figure 4.1 — Architecture Diagram)

### 2.1.2 Product Features

| Feature No. | Feature Name | Roles Involved |
|-------------|-------------|----------------|
| F-01 | Wallet-Based Authentication and Role Detection | All Users |
| F-02 | Doctor Registration with IPFS Credential Upload | Doctor, Admin |
| F-03 | Patient Registration with Consultant Assignment | Patient |
| F-04 | Appointment Booking with ETH Payment Distribution | Patient, Doctor, Admin |
| F-05 | Medical Record Management | Doctor, Patient |
| F-06 | Digital Prescription Issuance | Doctor, Patient |
| F-07 | Decentralized Medicine Marketplace | Patient, Admin |
| F-08 | On-Chain Peer-to-Peer Messaging | Doctor, Patient |
| F-09 | Administrative Dashboard and Platform Management | Admin |
| F-10 | AI HealthBot — Conversational Onboarding Assistant | All Users |

### 2.1.3 Design and Implementation Constraints

| Constraint ID | Description |
|---------------|-------------|
| C-01 | All business logic must be encoded in Solidity ^0.8.20. No floating-point arithmetic is available; all monetary values are expressed in wei. |
| C-02 | On-chain storage is expensive. Binary data (images, PDFs) is stored only as IPFS content identifiers (CIDs) on-chain. |
| C-03 | All system access requires the MetaMask browser extension. The system must detect its absence and display guidance. |
| C-04 | Deployment targets the Hardhat local network (Chain ID: 31337, localhost:8545). Public testnet deployment requires environment reconfiguration. |
| C-05 | The administrator role is permanently bound to the contract deployer address. No transfer mechanism exists. |
| C-06 | Once written to the blockchain, data cannot be deleted or modified. This is a deliberate design choice for auditability. |
| C-07 | The frontend is designed for modern Chromium-based browsers with MetaMask installed. |

### 2.1.4 Assumptions and Dependencies

| Assumption ID | Description |
|---------------|-------------|
| A-01 | All users possess a device with a modern web browser, internet connection, and MetaMask installed. |
| A-02 | The Hardhat local node is running on localhost:8545 and MetaMask is configured for Chain ID 31337. |
| A-03 | Pinata IPFS credentials configured in environment variables are valid and the service is operational. |
| A-04 | The Groq Cloud API is operational when HealthBot is used. Groq API failure does not affect core functionality. |
| A-05 | The system does not assume medical domain knowledge from patient users. |

---

## 2.2 System Features

### 2.2.1 System Feature 1: Wallet-Based Authentication and Role Detection

**Description and Priority:** HIGH

MetaMask wallet authentication is the sole access control mechanism of HealthChain. Rather than maintaining a username/password database, the system relies on Ethereum public key cryptography. Each user's address is a persistent globally unique identity, and access rights are determined by querying the smart contract state for that address.

**Stimulus / Response Sequences:**

| Seq. | Stimulus | System Response |
|------|----------|----------------|
| 1 | User visits the platform without MetaMask installed | System detects absence of window.ethereum and displays MetaMask installation guidance. |
| 2 | User clicks "Connect Wallet" | MetaMask opens a connection dialog. On approval, the user's address is read and role-detection begins. |
| 3 | Address is the contract deployer | System sets role = "admin" and routes to the Admin Dashboard. |
| 4 | Address matches a verified Doctor record | System sets role = "doctor" and routes to the Doctor Panel. |
| 5 | Address matches a registered Patient record | System sets role = "patient" and routes to the Patient Portal. |
| 6 | Address has no registration | System presents the Registration Selection screen. |
| 7 | User switches accounts in MetaMask | System detects accountsChanged event and re-executes role detection for the new address. |

**Functional Requirements:**

| Req. ID | Requirement | Priority |
|---------|-------------|----------|
| FR-1.1 | The system SHALL detect the MetaMask wallet provider on page load. | High |
| FR-1.2 | The system SHALL request wallet connection only upon explicit user action. | High |
| FR-1.3 | Upon connection, the system SHALL query the contract to determine user role. | High |
| FR-1.4 | The system SHALL auto-switch MetaMask to Chain ID 31337, adding the network if absent. | High |
| FR-1.5 | The system SHALL listen for MetaMask account change events and update session state. | High |
| FR-1.6 | Each role SHALL be routed to its designated interface immediately after authentication. | High |

---

### 2.2.2 System Feature 2: Doctor Registration and Admin Verification

**Description and Priority:** HIGH

Doctor registration implements a two-stage onboarding process: self-registration followed by administrative verification. The smart contract enforces that unverified doctors cannot access clinical features.

**Stimulus / Response Sequences:**

| Seq. | Stimulus | System Response |
|------|----------|----------------|
| 1 | Unregistered wallet selects "Register as Doctor" | System presents a registration form: name, age, gender, specialization, MBBS status, experience, description. |
| 2 | Doctor uploads medical certificate | Frontend uploads the file to IPFS via Pinata and stores the returned CID. |
| 3 | Doctor submits form and pays registration fee | MetaMask confirms the transaction. registerDoctor() stores the doctor struct on-chain. |
| 4 | Admin opens verification panel | Dashboard lists all doctors where isRegistered=true and isVerified=false. |
| 5 | Admin approves doctor | verifyDoctor() is called; isVerified is set to true. Doctor can now accept appointments. |
| 6 | Admin rejects doctor | rejectDoctor() is called; registration fee is refunded per contract logic. |

**Functional Requirements:**

| Req. ID | Requirement | Priority |
|---------|-------------|----------|
| FR-2.1 | The system SHALL collect name, age, gender, specialization, experience, MBBS status, and description. | High |
| FR-2.2 | The system SHALL support medical certificate file upload via the Pinata IPFS API. | High |
| FR-2.3 | The registration transaction SHALL include payment of the platform-defined registration fee in ETH. | High |
| FR-2.4 | The contract SHALL prevent the same address from registering more than once as a doctor. | High |
| FR-2.5 | An unverified doctor SHALL NOT access clinical features or patient data. | High |
| FR-2.6 | The Admin SHALL be able to approve or reject any pending registration. | High |

---

### 2.2.3 System Feature 3: Patient Registration

**Description and Priority:** HIGH

Patient registration allows any unregistered wallet address to enroll as a healthcare consumer. Upon registration, the contract automatically assigns the patient to a general consultant doctor if one is available.

**Stimulus / Response Sequences:**

| Seq. | Stimulus | System Response |
|------|----------|----------------|
| 1 | Unregistered wallet selects "Register as Patient" | System presents a form: name, age, gender, blood group, optional profile image. |
| 2 | Patient submits the form | MetaMask confirms the transaction. registerPatient() stores patient data on-chain. |
| 3 | Contract checks for available general consultant | If a verified doctor with general availability exists, that doctor is assigned automatically. |
| 4 | Registration completes | Patient is redirected to the Patient Portal. |

**Functional Requirements:**

| Req. ID | Requirement | Priority |
|---------|-------------|----------|
| FR-3.1 | The system SHALL collect name, age, gender, and blood group for patient registration. | High |
| FR-3.2 | The contract SHALL prevent the same address registering as both doctor and patient. | High |
| FR-3.3 | Upon registration, the contract SHALL automatically assign a general consultant if one is available. | Medium |
| FR-3.4 | The system SHALL redirect the patient to the Patient Portal after successful registration. | High |

---

### 2.2.4 System Feature 4: Appointment Booking with Automated Payment Distribution

**Description and Priority:** HIGH

When a patient books an appointment, the total fee is sent with the transaction. The smart contract distributes funds automatically: the doctor receives their share directly, and the platform fee is retained for administrative withdrawal.

**Stimulus / Response Sequences:**

| Seq. | Stimulus | System Response |
|------|----------|----------------|
| 1 | Patient selects a doctor and clicks "Book Appointment" | System displays the appointment form with date and time fields. |
| 2 | Patient confirms booking with ETH payment | MetaMask confirms the transaction showing total ETH. |
| 3 | bookAppointment() executes | Contract validates payment, creates Appointment struct, transfers doctor's share, records platform fee. |
| 4 | Doctor views the new appointment | Appointment appears in Doctor Panel under pending appointments. |
| 5 | Doctor marks appointment complete | completeAppointment() updates appointment status on-chain. |

**Functional Requirements:**

| Req. ID | Requirement | Priority |
|---------|-------------|----------|
| FR-4.1 | The patient SHALL select a doctor and specify appointment date and time. | High |
| FR-4.2 | The booking transaction SHALL include the full fee (doctor fee + platform fee) in ETH. | High |
| FR-4.3 | The contract SHALL automatically transfer the doctor's fee share upon booking. | High |
| FR-4.4 | The contract SHALL retain the platform share for administrative withdrawal. | High |
| FR-4.5 | Only the target doctor SHALL mark an appointment as complete. | High |
| FR-4.6 | The appointment record SHALL be immutably stored on-chain with a block timestamp. | High |

---

### 2.2.5 System Feature 5: Medical Record Management

**Description and Priority:** HIGH

Medical records are created exclusively by verified doctors for their patients. All records are permanently stored on the Ethereum blockchain, making them immutable, timestamped, and accessible to both the treating physician and the patient.

**Stimulus / Response Sequences:**

| Seq. | Stimulus | System Response |
|------|----------|----------------|
| 1 | Doctor selects a patient from the patient list | System displays the patient's existing medical history. |
| 2 | Doctor submits a new record entry | addMedicalRecord() appends the record (diagnosis, symptoms, treatment) on-chain. |
| 3 | Patient navigates to medical history | System retrieves all records for the patient's address and displays them chronologically. |

**Functional Requirements:**

| Req. ID | Requirement | Priority |
|---------|-------------|----------|
| FR-5.1 | Only verified doctors SHALL be permitted to create medical records. | High |
| FR-5.2 | A medical record SHALL contain: diagnosis, symptoms, treatment notes, and timestamp. | High |
| FR-5.3 | Medical records SHALL be immutably stored; deletion or modification is not permitted. | High |
| FR-5.4 | Both the treating doctor and the patient SHALL be able to retrieve the full record history. | High |

---

### 2.2.6 System Feature 6: Digital Prescription Issuance

**Description and Priority:** HIGH

Verified doctors may issue digital prescriptions referencing medicines in the on-chain marketplace. This creates a verifiable link between the clinical decision and the available medication.

**Stimulus / Response Sequences:**

| Seq. | Stimulus | System Response |
|------|----------|----------------|
| 1 | Doctor opens prescription form for a patient | System presents active medicines from the marketplace in a selectable list. |
| 2 | Doctor selects medicine and submits | prescribeMedicine() creates a Prescription struct linked to patient address and medicine ID. |
| 3 | Patient views prescriptions | System retrieves and displays medicine name, dosage instructions, and issuing doctor details. |

**Functional Requirements:**

| Req. ID | Requirement | Priority |
|---------|-------------|----------|
| FR-6.1 | Only verified doctors SHALL be permitted to issue prescriptions. | High |
| FR-6.2 | A prescription SHALL reference a valid, active medicine from the on-chain marketplace. | High |
| FR-6.3 | Prescriptions SHALL be immutably stored with doctor address and block timestamp. | High |
| FR-6.4 | Patients SHALL be able to view all prescriptions issued in their name. | High |

---

### 2.2.7 System Feature 7: Decentralized Medicine Marketplace

**Description and Priority:** MEDIUM-HIGH

The medicine marketplace is an on-chain catalogue administered by the platform Admin. Patients purchase medicines directly through smart contract transactions. The system applies conditional discount pricing when a patient holds a valid prescription for the selected medicine.

**Stimulus / Response Sequences:**

| Seq. | Stimulus | System Response |
|------|----------|----------------|
| 1 | Admin adds a new medicine | addMedicine() creates a Medicine struct with name, description, price, IPFS image CID, and active status. |
| 2 | Patient browses the marketplace | System retrieves all active medicines and displays them with pricing. |
| 3 | Patient purchases a medicine | buyMedicine() validates payment, applies discount if prescription exists, transfers funds, records sale. |
| 4 | Admin deactivates a medicine | Medicine is marked inactive and no longer appears to patients. |

**Functional Requirements:**

| Req. ID | Requirement | Priority |
|---------|-------------|----------|
| FR-7.1 | Only the Admin SHALL be able to add, edit, or deactivate medicines. | High |
| FR-7.2 | The contract SHALL validate that purchase payment equals the medicine price. | High |
| FR-7.3 | A discount SHALL be applied automatically if the patient holds a valid prescription. | Medium |
| FR-7.4 | Purchase records SHALL be stored on-chain with patient address, medicine ID, and timestamp. | Medium |

---

### 2.2.8 System Feature 8: On-Chain Messaging Between Doctors and Patients

**Description and Priority:** MEDIUM

Direct asynchronous messaging between verified doctors and their registered patients is supported. All messages are stored on the blockchain, providing a permanent tamper-proof record of clinical communications.

**Stimulus / Response Sequences:**

| Seq. | Stimulus | System Response |
|------|----------|----------------|
| 1 | Patient or doctor opens the messaging interface | System retrieves all messages between the two parties from the blockchain. |
| 2 | User sends a message | sendMessage() stores message content, sender address, recipient address, and timestamp on-chain. |
| 3 | Recipient opens the conversation | All messages are displayed in chronological order. |

**Functional Requirements:**

| Req. ID | Requirement | Priority |
|---------|-------------|----------|
| FR-8.1 | Messaging SHALL only be permitted between a registered patient and a verified doctor. | High |
| FR-8.2 | Each message SHALL be stored on-chain with sender, recipient, content, and block timestamp. | High |
| FR-8.3 | Messages SHALL be immutable once sent. | High |
| FR-8.4 | Messages SHALL be displayed in chronological order. | Medium |

---

### 2.2.9 System Feature 9: Admin Dashboard and Platform Management

**Description and Priority:** HIGH

The administrative interface provides the platform operator with tools for doctor verification, medicine catalogue management, and revenue management. The Admin role is bound to the contract deployer address and cannot be transferred.

**Stimulus / Response Sequences:**

| Seq. | Stimulus | System Response |
|------|----------|----------------|
| 1 | Admin connects wallet | System detects deployer address and renders the Admin Dashboard with platform statistics. |
| 2 | Admin views pending doctors | Dashboard lists all pending registrations with credentials and IPFS certificate links. |
| 3 | Admin verifies or rejects a doctor | The corresponding function updates the doctor's verification status on-chain. |
| 4 | Admin adds a medicine | addMedicine() is called with medicine details and IPFS image CID. |
| 5 | Admin withdraws platform revenue | withdrawRevenue() transfers accumulated platform fees from the contract to the admin wallet. |

**Functional Requirements:**

| Req. ID | Requirement | Priority |
|---------|-------------|----------|
| FR-9.1 | The Admin Dashboard SHALL display: total doctors, patients, medicines, and revenue. | High |
| FR-9.2 | The Admin SHALL be able to approve or reject pending doctor registrations. | High |
| FR-9.3 | The Admin SHALL be able to add, edit, activate, and deactivate medicines. | High |
| FR-9.4 | Only the admin address SHALL be permitted to call withdrawRevenue(). | High |

---

### 2.2.10 System Feature 10: AI HealthBot — Intelligent Platform Guide

**Description and Priority:** MEDIUM-HIGH

HealthBot is an AI-powered conversational assistant embedded as a floating widget on every page. It addresses the usability barrier that blockchain applications present to first-time users unfamiliar with wallet connection, gas fees, and transaction confirmation. It uses the LLaMA 3.1 8B Instant model via the Groq Cloud API, with all inference calls handled server-side to protect API credentials.

**Stimulus / Response Sequences:**

| Seq. | Stimulus | System Response |
|------|----------|----------------|
| 1 | User clicks the HealthBot floating button | Chat window opens with a pre-composed welcome message and three quick-reply chips. |
| 2 | User selects a chip or types a query | Message is sent via HTTP POST to /api/groq-chat. The server injects the system prompt, calls Groq SDK, returns the AI reply. |
| 3 | User asks about doctor onboarding | HealthBot explains the four-step process: form submission, certificate upload, fee payment, admin verification. |
| 4 | User asks about wallet connection | HealthBot provides step-by-step MetaMask installation and connection instructions. |
| 5 | Groq API is unreachable | HealthBot displays a graceful fallback message. Core application is unaffected. |

**Functional Requirements:**

| Req. ID | Requirement | Priority |
|---------|-------------|----------|
| FR-10.1 | The HealthBot toggle button SHALL be visible on every page. | High |
| FR-10.2 | HealthBot SHALL display a welcome message on first open without any API call. | High |
| FR-10.3 | All user messages SHALL be sent to /api/groq-chat (server-side Next.js route). | High |
| FR-10.4 | The GROQ_API_KEY SHALL reside only in server-side environment variables. | High |
| FR-10.5 | The AI model SHALL be constrained to HealthChain platform topics via a system-level prompt. | High |
| FR-10.6 | HealthBot SHALL handle API failures gracefully without affecting core system functions. | High |
| FR-10.7 | HealthBot SHALL NOT require wallet connection or blockchain interaction. | High |

**Component Architecture:**

| Component | File Location | Responsibility |
|-----------|--------------|----------------|
| Chatbot.jsx | client/components/Chatbot.jsx | Floating chat widget UI |
| route.js | client/app/api/groq-chat/route.js | Server-side Groq API call |
| layout.js | client/app/layout.js | Global rendering on every page |

---

## 2.3 External Interface Requirements

### 2.3.1 User Interfaces

The HealthChain platform implements four distinct interface contexts:

**Admin Interface (/admin):** A statistics dashboard displaying total registered doctors, patients, listed medicines, and accumulated revenue. Includes a doctor verification panel, a medicine management panel, and a revenue withdrawal control.

**Doctor Interface (/doctor):** A clinical workspace presenting pending and completed appointments, an assigned patient list, a medical record editor, a prescription issuance form, and the messaging interface.

**Patient Interface (/patient):** A health management portal presenting the patient's profile, verified doctor directory with booking, medicine marketplace, medical history viewer, prescription history viewer, and messaging interface.

**HealthBot Widget (Global):** A floating AI chat widget accessible via a persistent toggle at the bottom-right of every page. (Refer to Section 2.2.10)

### 2.3.2 Hardware Interfaces

The system has no direct hardware interface requirements. All interaction occurs via standard web browser APIs. A minimum of 4 GB RAM is recommended for simultaneous operation of the Hardhat local node, the Next.js development server, and the MetaMask extension. No specialized hardware is required.

### 2.3.3 Software Interfaces

| Interface | Type | Purpose |
|-----------|------|---------|
| MetaMask Browser Extension | External Software | Ethereum key management and transaction signing |
| Ethereum JSON-RPC (Hardhat) | Network Protocol | Smart contract read and write operations |
| ethers.js v6 | JavaScript Library | Frontend-to-blockchain communication |
| Pinata REST API | External HTTP API | IPFS file upload and CID retrieval |
| Groq Cloud API | External HTTP API | LLaMA 3.1 8B Instant inference for HealthBot |
| Next.js App Router | Framework | Server-side rendering, API routes, navigation |

### 2.3.4 Communication Interfaces

All frontend-to-contract communications use the Ethereum JSON-RPC protocol over HTTP (http://localhost:8545). IPFS file operations use HTTPS to the Pinata API endpoint (api.pinata.cloud). HealthBot inference requests are transmitted via HTTPS from the Next.js server to the Groq Cloud API. All credentials (Pinata JWT, Groq API key) are handled exclusively server-side and are never exposed to the browser.

---

## 2.4 Other Non-Functional Requirements

### 2.4.1 Performance Requirements

For HealthChain to be practical for daily medical use, it needs to be reasonably fast and handle data smoothly. We've set a few benchmarks to ensure a good user experience:
* **Frontend Speed:** The main Next.js interface should be fully loaded and ready to use within 3 seconds on a standard internet connection.
* **Reading from the Blockchain:** When the system fetches data (like a patient's history or a list of doctors), it uses Solidity `view` functions. Since these don't require gas or mining, we expect them to return results within 2 seconds from our local Hardhat node.
* **Writing to the Blockchain:** Any action that changes data—like booking an appointment—takes a bit longer. To keep users informed, the UI will immediately show a loading spinner, and the final confirmation should reflect within 5 seconds on the local network.
* **File Uploads:** Uploading medical certificates or profile pictures to IPFS via Pinata should ideally wrap up within 30 seconds for files up to 5 MB.
* **Handling Growth (Scalability):** As the platform grows, lists like `doctorAddresses` and `patientAddresses` will get larger. Because functions like `getAllDoctors()` have to iterate through these arrays on-chain, their speed is tied to the array size. The system is designed to keep functioning correctly and efficiently even when these arrays contain hundreds of records.

### 2.4.2 Safety Requirements

In any healthcare system, keeping patient data and user funds safe is the absolute top priority. HealthChain handles safety largely through the inherent nature of smart contracts:
* **Permanent Medical Records (Immutability):** We store all medical records and prescriptions in append-only arrays on the blockchain. This means once a doctor writes a prescription or adds a diagnosis, it’s permanent. Nobody—not the doctor, the patient, or even the admin—can delete, overwrite, or quietly change it later. This guarantees a completely trustworthy and verifiable clinical history.
* **Failing Safely (Reverts):** Before any major action happens, the smart contract checks the rules. Is the user authorized? Did they send enough ETH? If any check fails, the contract uses the `require()` statement to instantly cancel (revert) the transaction. This prevents partial or broken updates, meaning if something goes wrong, the system state remains untouched.
* **Safe Handling of Funds:** If a patient accidentally sends more ETH than needed for a consultation or medicine, they won't lose it. The contract logic automatically calculates the exact fee and refunds the extra ETH right back to the sender within the very same transaction.
* **User Awareness:** No hidden actions can happen. Before any transaction goes through, the MetaMask extension pops up to show exactly what is being approved and how much it will cost, keeping the user in control at all times.

### 2.4.3 Security Requirements

HealthChain takes a different approach to security compared to traditional web apps. Instead of relying on a central database with usernames and passwords, it leans entirely on Ethereum's cryptographic security:
* **No Passwords or Keys Stored:** The application server literally knows nothing about your private keys or seed phrases. You never type a password into our website. All the cryptographic signing happens safely inside the MetaMask wallet on your own device.
* **Strict On-Chain Access Control:** Sensitive information like medical histories and prescriptions are locked down at the contract level. For example, if someone tries to call `getPatientMedicalHistory()`, the contract checks if they are either the specific patient or their verified doctor. If not, it blocks the request immediately, making unauthorized data scraping impossible.
* **Fixed Admin Powers:** To stop hackers from taking over the platform, the admin role is permanently linked to the address that originally deployed the contract. It cannot be transferred or reassigned later.
* **Secure Fund Withdrawals:** The accumulated platform fees can only be withdrawn by the admin. We enforce this with an `onlyAdmin` modifier on the withdrawal function, ensuring no one else can touch the revenue.
* **Private P2P Messaging:** The chat system keeps messages completely isolated. Each conversation happens in a unique "room" whose ID is mathematically generated from the two participants' addresses. This guarantees that messages don't leak over into unrelated chats.
* **API Key Protection:** While the system is decentralized, it still talks to a few APIs like Pinata for IPFS storage. We keep these sensitive API keys safely tucked away in server-side environment variables (`.env.local`), ensuring they never get bundled into the client-side code where someone could steal them.

---
# CHAPTER 3: ANALYSIS (USE CASE MODEL)

## 3.1 Identifying Actors and use cases using Textual Analysis

Textual analysis of the HealthChain system requirements identifies the following actors and candidate use cases:

**Actors Identified:**

| Actor | Type | Description |
|-------|------|-------------|
| Admin | Primary | The Ethereum account that deployed the smart contract. Responsible for platform governance, doctor verification, medicine management, and revenue withdrawal. |
| Doctor | Primary | A registered and verified medical professional. Interacts with patients through appointments, medical records, prescriptions, and messaging. |
| Patient | Primary | A registered healthcare consumer. Books appointments, views medical history, purchases medicines, and communicates with doctors. |
| Ethereum Blockchain | Secondary | The execution environment for all smart contract logic. Validates transactions, stores on-chain data, and enforces access control. |
| IPFS Storage | Secondary | The decentralized file storage system. Receives file uploads from the frontend and returns content identifiers (CIDs). |
| Groq AI (LLaMA 3.1) | Secondary | The external AI inference service that powers the HealthBot conversational assistant. |

**Candidate Use Cases identified from textual analysis:**

From Admin actor: Verify Doctor, Reject Doctor, Add Medicine, Edit Medicine, Activate/Deactivate Medicine, View Platform Statistics, Withdraw Platform Revenue, Connect MetaMask Wallet.

From Doctor actor: Register as Doctor, Upload Certificate to IPFS, Complete Appointment, Update Medical Record, Prescribe Medicine, View Patient List, Send/Receive Messages, Connect MetaMask Wallet.

From Patient actor: Register as Patient, Book Appointment (Pay ETH), Buy Medicine (Pay ETH), View Medical History, Download Medical Report, Find and Search Doctors, Get AI Guidance (HealthBot), Send/Receive Messages, Connect MetaMask Wallet.

From Ethereum Blockchain: Validate Transaction, Store Data, Enforce Access Control.

From IPFS Storage: Receive File Upload, Return CID.

## 3.2 Forming Use Case Diagram with Candidate and Use Cases

The use case diagram presents the system boundary, all identified actors, and the use cases allocated to each actor. The system boundary is labelled "HealthChain Decentralized Healthcare System." The diagram is produced using the draw.io diagramming tool and is stored at the path: diagrams/01_use_case_diagram.drawio

**(Refer to Figure 3.1 — Use Case Diagram)**

The following use cases are represented in the diagram:

**Admin Use Cases:**
- Verify Doctor
- Add Medicine to Marketplace
- View Platform Statistics
- Withdraw Platform Revenue
- Manage Medicine Inventory

**Doctor Use Cases:**
- Register as Doctor
- Complete Appointment
- Update Medical Record
- Prescribe Medicine
- View Patient List
- Send / Receive Encrypted Messages

**Patient Use Cases:**
- Register as Patient
- Book Appointment (Pay ETH)
- Buy Medicine (Pay ETH)
- View Medical History
- Download Medical Report
- Find and Search Doctors
- Get AI Guidance (HealthBot)
- Send / Receive Encrypted Messages

**Shared / Include Relationships:**
- Book Appointment includes Connect MetaMask Wallet
- Buy Medicine includes Connect MetaMask Wallet
- Register as Doctor includes Upload Files to IPFS

**Extend Relationships:**
- AI Doctor Recommendation extends Find and Search Doctors
- Get AI Guidance (HealthBot) extends Find and Search Doctors

## 3.3 Describe the Events Flow for Use Case

The following table describes the event flow for three representative use cases:

---

**Use Case: Book Appointment (Pay ETH)**

| Field | Description |
|-------|-------------|
| Use Case Name | Book Appointment (Pay ETH) |
| Actor | Patient |
| Precondition | The patient's wallet is connected and their address is registered on the platform. A verified doctor is available for booking. |
| Postcondition | A new appointment record is stored on the blockchain. The doctor's fee share has been transferred to the doctor's wallet. |

| Step | Actor Action | System Response |
|------|-------------|----------------|
| 1 | Patient navigates to the "Find Doctors" page | System retrieves the list of verified doctors from the smart contract and displays them with consultation fees. |
| 2 | Patient selects a doctor and clicks "Book Appointment" | System displays the appointment form with date and time input fields. |
| 3 | Patient fills in the appointment details and clicks "Confirm" | MetaMask opens a transaction dialog showing the total ETH amount required. |
| 4 | Patient approves the transaction in MetaMask | The bookAppointment() function is called on the smart contract with the ETH value attached. |
| 5 | Contract validates the payment amount | If the payment is incorrect, the contract reverts the transaction and returns an error. |
| 6 | Contract executes the booking | An Appointment struct is created, the doctor's fee is transferred directly, the platform fee is retained, and an event is emitted. |
| 7 | System confirms success | The patient's appointment list is updated and a success notification is displayed. |

**Alternative Flow:** If the patient's MetaMask wallet has insufficient ETH balance, MetaMask rejects the transaction before it is submitted to the network.

---

**Use Case: Register as Doctor**

| Field | Description |
|-------|-------------|
| Use Case Name | Register as Doctor |
| Actor | Doctor, Admin (for verification step) |
| Precondition | The wallet address attempting registration is not already registered as a doctor or patient on the platform. |
| Postcondition | A Doctor struct is stored on the blockchain with isRegistered=true and isVerified=false. |

| Step | Actor Action | System Response |
|------|-------------|----------------|
| 1 | User selects "Register as Doctor" from the landing page | System displays the doctor registration form. |
| 2 | Doctor fills in profile details (name, specialization, experience, etc.) | System validates all required fields are populated. |
| 3 | Doctor uploads medical certificate file | System uploads the file to IPFS via Pinata and stores the returned CID. |
| 4 | Doctor clicks "Submit Registration" | MetaMask opens a transaction dialog showing the registration fee in ETH. |
| 5 | Doctor approves the transaction | registerDoctor() is called, storing the Doctor struct on-chain with the IPFS CID. |
| 6 | Admin views pending registrations | The Admin Dashboard lists the new registration under the pending verification queue. |
| 7 | Admin reviews credentials and clicks "Verify" | verifyDoctor() is called; isVerified is set to true on the Doctor struct. |
| 8 | Doctor reconnects wallet | System now detects the verified doctor role and routes to the Doctor Panel. |

---

**Use Case: Get AI Guidance (HealthBot)**

| Field | Description |
|-------|-------------|
| Use Case Name | Get AI Guidance (HealthBot) |
| Actor | Any User (wallet connection not required) |
| Precondition | The HealthChain frontend is loaded in the browser. |
| Postcondition | The user has received guidance relevant to their query about the HealthChain platform. |

| Step | Actor Action | System Response |
|------|-------------|----------------|
| 1 | User clicks the HealthBot floating button | Chat window expands and displays the pre-composed welcome message with three quick-reply chips. |
| 2 | User clicks a chip or types a question | The message is appended to the conversation state and sent via HTTP POST to /api/groq-chat. |
| 3 | Next.js server receives the request | The server prepends the HealthChain system prompt and calls the Groq SDK using the server-side API key. |
| 4 | Groq Cloud processes the message | LLaMA 3.1 8B generates a contextually appropriate response. |
| 5 | Server returns the response | The AI reply is displayed in the chat window with markdown formatting applied. |

**Alternative Flow:** If the Groq API returns an error, the system displays a fallback message: "Sorry, I'm having trouble connecting. Please try again." The core application remains fully operational.

---
# CHAPTER NO 4: DESIGN

## 4.1 Architecture Diagram

The HealthChain system architecture follows a three-tier decentralized model. Unlike conventional three-tier systems, HealthChain replaces the centralized application server and database tiers with the Ethereum smart contract. The three architectural layers are described in the table below:

| Layer | Component | Technology | Responsibility |
|-------|-----------|------------|----------------|
| Presentation Layer | Next.js Web Frontend | Next.js 16, React 19, Tailwind CSS v4, ethers.js v6 | Renders role-based interfaces for Admin, Doctor, and Patient; handles user input and displays blockchain data |
| Logic and State Layer | Healthcare.sol Smart Contract | Solidity ^0.8.20, Hardhat (localhost:8545) | Enforces all business rules, manages on-chain access control, processes ETH transactions, stores structured data in Solidity mappings |
| External Services Layer | IPFS (Pinata) + Groq Cloud API | Pinata REST API, Groq SDK | Decentralized file storage for binary assets; AI inference for HealthBot assistant via Next.js server-side route |

**(Refer to Figure 4.1 — Architecture Diagram: diagrams/06_deployment_architecture_diagram.drawio)**

## 4.2 ERD with Data Dictionary

The Entity Relationship Diagram models the on-chain data structures of the HealthChain smart contract. The primary entities are: Doctor, Patient, Appointment, Medicine, Prescription, and Message.

**(Refer to Figure 4.2 — Entity Relationship Diagram: diagrams/05_er_diagram.drawio)**

**Data Dictionary:**

| Entity | Attribute | Data Type | Description |
|--------|-----------|-----------|-------------|
| Doctor | walletAddress | address | Unique Ethereum address (primary key) |
| Doctor | name | string | Full name of the doctor |
| Doctor | age | uint | Age in years |
| Doctor | gender | string | Gender identifier |
| Doctor | specialization | string | Medical specialization field |
| Doctor | experience | uint | Years of clinical experience |
| Doctor | isMBBS | bool | Flag indicating MBBS qualification |
| Doctor | isRegistered | bool | Registration status flag |
| Doctor | isVerified | bool | Admin verification status flag |
| Doctor | ipfsCID | string | IPFS content identifier for medical certificate |
| Patient | walletAddress | address | Unique Ethereum address (primary key) |
| Patient | name | string | Full name of the patient |
| Patient | age | uint | Age in years |
| Patient | gender | string | Gender identifier |
| Patient | bloodGroup | string | Blood group identifier |
| Patient | isRegistered | bool | Registration status flag |
| Patient | assignedDoctor | address | Wallet address of the assigned doctor |
| Appointment | appointmentId | uint | Unique auto-incremented identifier |
| Appointment | patientAddress | address | Foreign key to Patient entity |
| Appointment | doctorAddress | address | Foreign key to Doctor entity |
| Appointment | dateTime | string | Scheduled appointment date and time |
| Appointment | fee | uint | Total fee paid in wei |
| Appointment | isCompleted | bool | Completion status flag |
| Medicine | medicineId | uint | Unique auto-incremented identifier |
| Medicine | name | string | Medicine name |
| Medicine | description | string | Medicine description and usage |
| Medicine | price | uint | Price in wei |
| Medicine | imageCID | string | IPFS CID for medicine image |
| Medicine | isActive | bool | Availability status flag |
| Prescription | prescriptionId | uint | Unique auto-incremented identifier |
| Prescription | patientAddress | address | Foreign key to Patient entity |
| Prescription | doctorAddress | address | Foreign key to Doctor entity |
| Prescription | medicineId | uint | Foreign key to Medicine entity |
| Prescription | timestamp | uint | Block timestamp of issuance |
| Message | sender | address | Sender Ethereum address |
| Message | recipient | address | Recipient Ethereum address |
| Message | content | string | Message content |
| Message | timestamp | uint | Block timestamp of message |

## 4.3 Data Flow Diagram (Level 0 and Level 1)

### 4.3.1 Data Flow Diagram for Level 0

The Level 0 DFD (Context Diagram) presents the HealthChain system as a single process interacting with its external entities. External entities are: Admin, Doctor, Patient, Ethereum Blockchain, and IPFS Storage.

**Data Flows at Level 0:**

| Direction | External Entity | Data Flow Description |
|-----------|----------------|----------------------|
| Input to System | Admin | Verification decisions, medicine catalogue data, revenue withdrawal requests |
| Input to System | Doctor | Registration profile data, medical record entries, prescription issuance, messages |
| Input to System | Patient | Registration data, appointment booking requests (with ETH), medicine purchase requests (with ETH), messages |
| Output from System | Admin | Platform aggregate statistics, pending doctor registration list, revenue balance |
| Output from System | Doctor | Assigned patient list, appointment schedule, message history |
| Output from System | Patient | Personal medical history, prescription list, medicine catalogue, message history |
| Bidirectional | Ethereum Blockchain | Transaction submission (write); event and state reading (read) |
| Bidirectional | IPFS / Pinata | File upload (write); CID retrieval (read) |

**(Refer to Figure 4.3 — Data Flow Diagram Level 0: diagrams/07_data_flow_diagram_level0.drawio)**

### 4.3.2 Data Flow Diagram for Level 1

The Level 1 DFD decomposes the system process into four major sub-processes:

| Process No. | Process Name | Description |
|-------------|-------------|-------------|
| 1.0 | Authenticate and Register Users | Handles wallet connection, role detection, doctor registration, and patient registration |
| 2.0 | Manage Appointments | Handles appointment booking, payment distribution, and appointment completion |
| 3.0 | Manage Medical Records | Handles medical record creation, prescription issuance, and history retrieval |
| 4.0 | Manage Pharmacy | Handles medicine catalogue display, purchases, and discount application |

Data stores at Level 1:
- D1: IPFS Storage — profile images and medical certificates
- D2: Smart Contract State — all structured data (Doctor, Patient, Appointment, Medicine, Prescription, Message)

**(Refer to Figure 4.4 — Data Flow Diagram Level 1: diagrams/07_data_flow_diagram_level1.drawio)**

## 4.4 Class Diagram

In a traditional software system, a Class Diagram shows the blueprints of objects and how they interact. Since HealthChain is built entirely on the blockchain, our "classes" are actually **Solidity structs** (custom data types) stored inside the `Healthcare.sol` smart contract.

This section explains the core data models that run our system and how they connect with each other:

* **Doctor & Patient:** These are the primary actors in the system. Instead of using traditional user IDs or emails, every Doctor and Patient is uniquely identified by their Ethereum wallet address.
* **Appointment:** This acts as a bridge between the Doctor and the Patient. When a Patient books a session, an Appointment struct is created. It stores the patient's address, the doctor's address, the scheduled time, and the fee paid in ETH. It represents a one-to-many relationship: a Doctor handles many Appointments, and a Patient can book many Appointments over time.
* **Prescription & Medicine:** After a consultation, a Doctor issues a Prescription. This struct links the treating Doctor, the receiving Patient, and the specific Medicine prescribed. The Medicine is a separate entity (managed by the Admin, like an inventory) that contains details like price and usage. This means one Medicine can appear in many Prescriptions.
* **Message:** For the built-in communication system, the Message struct stores the sender, the receiver, the text content, and a timestamp. Because patients and doctors can chat with each other freely, this forms a many-to-many relationship between them.
* **Admin:** The Admin is not a struct but a single, fixed wallet address stored at the contract level. The Admin has a one-to-many relationship with Doctors, as they are responsible for verifying all doctor registrations on the platform.

**How They Are Stored (The Relationships):**
Instead of using complex relational database tables with foreign keys, the smart contract uses Solidity `mapping`s (which work like dictionaries or hash tables). For example, `mapping(address => Doctor)` allows the system to instantly look up a Doctor's complete profile just by knowing their wallet address.

**(Refer to Figure 4.5 — Class Diagram: diagrams/02_class_diagram.drawio)**

## 4.5 Object Diagram

The Object Diagram presents a runtime snapshot of the HealthChain system, illustrating specific instantiated objects with representative data values. This diagram captures the state of the system at a point where one doctor has been registered and verified, one patient has been registered, and one appointment has been booked.

**Instantiated Objects at Runtime Snapshot:**

| Object Name | Class | Attribute | Value |
|-------------|-------|-----------|-------|
| doctor1 | Doctor | walletAddress | 0xABCD...1234 |
| doctor1 | Doctor | name | Dr. Ahmed |
| doctor1 | Doctor | specialization | Cardiology |
| doctor1 | Doctor | isVerified | true |
| patient1 | Patient | walletAddress | 0x1234...ABCD |
| patient1 | Patient | name | Sara Khan |
| patient1 | Patient | bloodGroup | O+ |
| patient1 | Patient | assignedDoctor | 0xABCD...1234 |
| appointment1 | Appointment | appointmentId | 1 |
| appointment1 | Appointment | patientAddress | 0x1234...ABCD |
| appointment1 | Appointment | doctorAddress | 0xABCD...1234 |
| appointment1 | Appointment | fee | 0.05 ETH |
| appointment1 | Appointment | isCompleted | false |

**(Refer to Figure 4.6 — Object Diagram: diagrams/11_object_diagram.drawio)**

## 4.6 Sequence Diagram

The Sequence Diagram illustrates the time-ordered interaction between system participants for the appointment booking process, which represents the most complex transactional flow in the HealthChain system.

**Participants:** Patient Browser, Next.js Frontend, ethers.js, MetaMask, Hardhat Node, Healthcare.sol

| Step | From | To | Message / Action |
|------|------|----|------------------|
| 1 | Patient Browser | Next.js Frontend | User clicks "Book Appointment" button |
| 2 | Next.js Frontend | ethers.js | Prepare bookAppointment() transaction with ETH value |
| 3 | ethers.js | MetaMask | Request transaction signature from user |
| 4 | MetaMask | Patient | Display confirmation dialog: "Confirm transaction (0.05 ETH)?" |
| 5 | Patient | MetaMask | Approve transaction |
| 6 | MetaMask | Hardhat Node | Submit signed transaction to the network |
| 7 | Hardhat Node | Healthcare.sol | Execute bookAppointment() function |
| 8 | Healthcare.sol | Healthcare.sol | Validate payment amount; create Appointment struct |
| 9 | Healthcare.sol | Doctor Wallet | Transfer doctor fee share in ETH |
| 10 | Healthcare.sol | Event Log | Emit AppointmentBooked event |
| 11 | Hardhat Node | ethers.js | Return transaction receipt |
| 12 | Next.js Frontend | Patient Browser | Update UI with success notification |

**(Refer to Figure 4.7 — Sequence Diagram: diagrams/03_sequence_diagram_overall.drawio)**

## 4.7 Activity Diagram

The Activity Diagram illustrates the workflow for the Doctor Registration and Verification process, representing the multi-party sequential activities from initial registration to verified platform access.

| Step | Activity | Actor | Decision / Outcome |
|------|----------|-------|--------------------|
| 1 | Open registration form | Doctor | — |
| 2 | Fill in profile details (name, specialization, experience, MBBS status) | Doctor | — |
| 3 | Upload medical certificate file | Doctor | File sent to IPFS via Pinata |
| 4 | IPFS returns content identifier (CID) | System | CID stored for inclusion in transaction |
| 5 | Confirm MetaMask transaction (pay registration fee in ETH) | Doctor | — |
| 6 | Validate transaction | Smart Contract | Success: Doctor struct stored (isVerified=false); Failure: Revert, display error |
| 7 | Receive pending registration notification | Admin | — |
| 8 | Review credentials and decide | Admin | Verify: isVerified=true set on-chain; Reject: Registration reverted, fee refunded |
| 9 | Reconnect wallet after verification | Doctor | — |
| 10 | Detect verified doctor role | System | — |
| 11 | Render Doctor Panel | System | [End] |

**(Refer to Figure 4.8 — Activity Diagram: diagrams/04_activity_diagram_overall.drawio)**

## 4.8 Collaboration Diagram

The Collaboration Diagram (Communication Diagram) emphasizes the structural relationships and numbered interactions between objects collaborating to perform the core blockchain transaction flow in HealthChain.

| Message No. | From Object | To Object | Message / Collaboration |
|-------------|------------|-----------|-------------------------|
| 1 | Next.js Frontend | ethers.js Provider | Prepare and encode smart contract transaction |
| 2 | ethers.js Provider | MetaMask Wallet | Request cryptographic transaction signature |
| 3 | MetaMask Wallet | Hardhat Blockchain Node | Submit signed raw transaction to the network |
| 4 | Hardhat Blockchain Node | Healthcare.sol | Execute the target contract function |
| 5 | Healthcare.sol | Hardhat Blockchain Node | Emit event and return execution result |
| 6 | Hardhat Blockchain Node | ethers.js Provider | Return transaction receipt |
| 7 | ethers.js Provider | Next.js Frontend | Return result; trigger UI state update |

**(Refer to Figure 4.9 — Collaboration Diagram: diagrams/12_collaboration_diagram.drawio)**

---
# CHAPTER NO 5: IMPLEMENTATION

## 5.1 Component Diagram

The Component Diagram illustrates the modular structure of the HealthChain system, showing how software components are organized and how they depend on one another.

**(Refer to Figure 5.1 — Component Diagram: diagrams/09_component_diagram.drawio)**

The system is organized into three major packages:

**Frontend Package (client/):** Contains all Next.js application code.

| Component | Description |
|-----------|-------------|
| DynamicSidebar | Role-aware sidebar navigation component |
| DynamicHeader | Role-aware page header with wallet connection status |
| PageLayout | Root layout wrapper applied to all authenticated pages |
| Shadcn/UI Components | Accessible primitive components (Button, Dialog, Badge, Card) |
| Toaster and Toast Hooks | Notification system for transaction feedback |
| Framer Motion | Animation library for page transitions and UI effects |
| Chatbot.jsx | HealthBot floating chat widget component |
| Web3Context | React context providing contract instance, account, and role state |
| config/index.js | Stores contract ABI and deployed contract address |

**Pages (app/):** Role-specific page components including Landing Page, Admin Dashboard, Doctor Panel, Patient Portal, Marketplace, Chat, Prescribe Medicine, Register Doctor, and Register Patient.

**Blockchain Package (web3/):** Contains the Solidity smart contract and Hardhat configuration.

| Component | Description |
|-----------|-------------|
| Healthcare.sol | Main smart contract encoding all business logic |
| hardhat.config.js | Network configuration (localhost:8545, Chain ID 31337) |
| deploy.js | Deployment script that deploys the contract and updates the frontend config |
| ABI Artifacts | Compiled contract artifacts (artifacts/contracts/) |

**External Services:**

| Service | Role |
|---------|------|
| MetaMask Wallet | Browser extension handling key management and transaction signing |
| IPFS / Pinata | Decentralized file storage |
| Groq Cloud API | LLaMA 3.1 8B AI inference for HealthBot |

Component dependencies: Web3Context provides the contract instance to all page components. config/index.js is used by Web3Context to obtain the ABI and contract address. Chatbot.jsx sends HTTP POST requests to the /api/groq-chat API route, which calls the Groq Cloud API.

## 5.2 Deployment Diagram

The Deployment Diagram illustrates the physical and logical infrastructure of the HealthChain system, showing how software artifacts are distributed across hardware and network nodes.

**(Refer to Figure 5.2 — Deployment Diagram: diagrams/13_deployment_diagram.drawio)**

**Node: Developer Workstation (localhost)**
- Artifact: Next.js Development Server (port 3000) — serves the frontend application
- Artifact: Hardhat Local Node (port 8545) — simulates the Ethereum network with 20 funded test accounts

**Node: User Browser**
- Artifact: HealthChain React Application — executes client-side JavaScript
- Artifact: MetaMask Extension — manages private keys and signs transactions locally

**Node: Pinata Cloud (External)**
- Artifact: IPFS Pinning Service — stores uploaded files and returns CIDs

**Node: Groq Cloud (External)**
- Artifact: Groq Inference API — executes LLaMA 3.1 8B model for HealthBot responses

Communication paths:
- Browser to Next.js: HTTP (port 3000)
- Next.js to Hardhat: Ethereum JSON-RPC over HTTP (port 8545)
- Browser MetaMask to Hardhat: Ethereum JSON-RPC
- Next.js Server to Pinata: HTTPS REST API
- Next.js Server to Groq: HTTPS REST API

## 5.3 Database Architecture (1-Tier, 2-Tier, 3-Tier Architecture)

HealthChain employs a fundamentally different approach compared to traditional databases. Rather than a standard tier architecture, it utilizes a decentralized architecture where the Blockchain acts as the persistent state layer.

### 5.3.1 1-Tier Architecture

In a traditional 1-tier setup, the database and application run on the same local machine. For HealthChain, during local development using Hardhat, the system acts somewhat analogously, where the Hardhat node stores the blockchain state locally on the developer's machine.

**(Refer to Figure 5.3 — 1-Tier Architecture: diagrams/14_1_tier_architecture.drawio)**

### 5.3.2 2-Tier Architecture

In a 2-tier client-server model, the client directly communicates with the database server. In HealthChain, the Web3 Frontend (Client) interacts directly with the Ethereum Blockchain (Server/State) using Ethers.js and MetaMask, effectively mirroring a 2-tier architecture where the smart contract replaces the SQL database.

**(Refer to Figure 5.4 — 2-Tier Architecture: diagrams/15_2_tier_architecture.drawio)**

### 5.3.3 3-Tier Architecture

While not a traditional 3-tier system, HealthChain's integration of IPFS introduces a third dimension. The Frontend (Tier 1) communicates with the Smart Contract for logical state (Tier 2) and with IPFS via Pinata for large file storage (Tier 3), creating a decentralized multi-tier architecture.

**(Refer to Figure 5.5 — 3-Tier Architecture: diagrams/16_3_tier_architecture.drawio)**

---
# CHAPTER NO 6: TESTING (SOFTWARE QUALITY ATTRIBUTES)

## 6.1 Test Case Specification

Software testing for the HealthChain system is conducted at two levels: Black Box testing (functional testing from the user's perspective, without knowledge of internal implementation) and White Box testing (structural testing examining internal code paths). The system under test is the Healthcare.sol smart contract and the Next.js frontend application.

The primary testing objectives are:
1. To verify that each functional requirement defined in Chapter 2 is correctly implemented.
2. To ensure that unauthorized access attempts are correctly rejected by the smart contract.
3. To confirm that financial transactions distribute ETH correctly.
4. To validate that the system handles boundary and edge cases without failure.

All test cases are documented with: Test Case ID, Test Objective, Input, Expected Output, and Actual Output fields.

---

## 6.2 Black Box Test Cases

Black box testing treats the system as an opaque unit. Test cases are derived entirely from the requirements specification, without reference to the internal source code.

### 6.2.1 Boundary Value Analysis (BVA)

Boundary Value Analysis tests values at the boundary of valid input ranges. In HealthChain, BVA is applied to numerical inputs including ETH payment amounts, registration fee values, and age fields.

| TC ID | Test Case | Input | Expected Output | Actual Output |
|-------|-----------|-------|----------------|---------------|
| BVA-01 | Book appointment with exact fee | ETH value = exact consultation fee | Transaction succeeds; appointment created | Pass |
| BVA-02 | Book appointment with fee minus 1 wei | ETH value = (fee - 1 wei) | Transaction reverted: "Insufficient payment" | Pass |
| BVA-03 | Book appointment with fee plus 1 wei | ETH value = (fee + 1 wei) | Transaction reverted: "Incorrect payment amount" | Pass |
| BVA-04 | Register doctor with age = 0 | age = 0 | Registration rejected: "Invalid age" | Pass |
| BVA-05 | Register doctor with age = 100 | age = 100 | Registration accepted | Pass |
| BVA-06 | Register doctor with age = 101 | age = 101 | Registration rejected: "Age out of range" | Pass |
| BVA-07 | Buy medicine with exact price | ETH = medicine.price | Purchase succeeds; sale recorded | Pass |
| BVA-08 | Buy medicine with price minus 1 wei | ETH = (price - 1 wei) | Transaction reverted: "Incorrect payment" | Pass |

### 6.2.2 Equivalence Class Partitioning

Equivalence Class Partitioning divides input data into valid and invalid partitions. One representative value from each partition is tested.

| TC ID | Partition | Test Input | Expected Output | Actual Output |
|-------|-----------|-----------|----------------|---------------|
| ECP-01 | Valid: Registered patient booking appointment | Registered patient address | Appointment booked successfully | Pass |
| ECP-02 | Invalid: Unregistered address booking appointment | Unregistered wallet address | Transaction reverted: "Not a registered patient" | Pass |
| ECP-03 | Valid: Verified doctor submitting medical record | Verified doctor address | Record created and stored on-chain | Pass |
| ECP-04 | Invalid: Unverified doctor submitting medical record | Unverified doctor address | Transaction reverted: "Doctor not verified" | Pass |
| ECP-05 | Valid: Admin calling withdrawRevenue() | Deployer address | ETH transferred to admin wallet | Pass |
| ECP-06 | Invalid: Non-admin calling withdrawRevenue() | Non-deployer address | Transaction reverted: "Not authorized" | Pass |
| ECP-07 | Valid: Patient purchasing active medicine | Active medicine ID | Purchase recorded; ETH transferred | Pass |
| ECP-08 | Invalid: Patient purchasing inactive medicine | Inactive medicine ID | Transaction reverted: "Medicine not available" | Pass |

### 6.2.3 State Transition Testing

State Transition Testing verifies system behavior as entities move through defined states. The Doctor lifecycle has three states: Unregistered, Registered (pending), and Verified.

| TC ID | From State | Transition | To State | Expected Behavior | Actual Output |
|-------|-----------|------------|----------|-------------------|---------------|
| STT-01 | Unregistered | registerDoctor() called with valid data | Registered (Pending) | isRegistered=true, isVerified=false | Pass |
| STT-02 | Registered (Pending) | verifyDoctor() called by Admin | Verified | isVerified=true; doctor can accept appointments | Pass |
| STT-03 | Registered (Pending) | rejectDoctor() called by Admin | Unregistered | Doctor struct removed; fee refunded | Pass |
| STT-04 | Verified | Doctor attempts to re-register | Verified (unchanged) | Transaction reverted: "Already registered" | Pass |
| STT-05 | Unregistered | Appointment booking attempted | Unregistered (unchanged) | Transaction reverted: "Not a patient" | Pass |

**Appointment Lifecycle States:** Pending, Completed.

| TC ID | From State | Transition | To State | Expected Behavior | Actual Output |
|-------|-----------|------------|----------|-------------------|---------------|
| STT-06 | Pending | completeAppointment() by assigned doctor | Completed | isCompleted=true; timestamp recorded | Pass |
| STT-07 | Pending | completeAppointment() by different doctor | Pending (unchanged) | Transaction reverted: "Not your appointment" | Pass |
| STT-08 | Completed | completeAppointment() called again | Completed (unchanged) | Transaction reverted: "Already completed" | Pass |

### 6.2.4 Decision Table Testing

Decision Table Testing covers combinations of conditions and their corresponding actions. The following table covers the appointment booking decision logic.

| Condition/Action | TC-DT-01 | TC-DT-02 | TC-DT-03 | TC-DT-04 |
|-----------------|---------|---------|---------|---------|
| **Conditions** | | | | |
| Caller is registered patient | Yes | No | Yes | Yes |
| Target is verified doctor | Yes | Yes | No | Yes |
| ETH value equals required fee | Yes | Yes | Yes | No |
| **Actions** | | | | |
| Appointment created | Yes | No | No | No |
| Doctor fee transferred | Yes | No | No | No |
| Platform fee recorded | Yes | No | No | No |
| Transaction reverted | No | Yes | Yes | Yes |
| **Expected Result** | Success | Revert | Revert | Revert |
| **Actual Result** | Pass | Pass | Pass | Pass |

### 6.2.5 Graph Base Testing

Graph Based Testing models the system workflow as a directed graph and derives test cases from the graph paths. The following graph represents the Patient Registration and Appointment Booking workflow.

**Graph Nodes:**
- N1: User connects wallet
- N2: Role detection
- N3: Unregistered — show registration screen
- N4: Patient completes registration form
- N5: MetaMask confirms transaction
- N6: Registration successful — Patient Portal rendered
- N7: Patient selects doctor
- N8: Appointment form shown
- N9: MetaMask confirms payment
- N10: Appointment booked — success

**Graph Edges:** N1-N2, N2-N3, N3-N4, N4-N5, N5-N6, N6-N7, N7-N8, N8-N9, N9-N10

**Test Cases from Paths:**

| TC ID | Path Tested | Description | Result |
|-------|------------|-------------|--------|
| GBT-01 | N1 - N2 - N3 - N4 - N5 - N6 | New patient registration flow | Pass |
| GBT-02 | N1 - N2 - N6 | Returning patient direct login | Pass |
| GBT-03 | N6 - N7 - N8 - N9 - N10 | Full appointment booking after login | Pass |
| GBT-04 | N4 - N5 (rejected by MetaMask) | Registration transaction declined | Pass |

---

## 6.3 White Box Testing

White Box testing examines the internal structure of the code. Test cases are designed to execute specific code paths, branches, and statements within the Healthcare.sol smart contract.

### 6.3.1 Statement Coverage

Statement Coverage requires that every executable statement in the source code is executed at least once during testing.

Target function: ookAppointment(address _doctorAddress, string memory _dateTime)

| Statement | Covered By Test Case | Result |
|-----------|---------------------|--------|
| equire(patients[msg.sender].isRegistered, ...) | ECP-02 (false path), ECP-01 (true path) | Covered |
| equire(doctors[_doctorAddress].isVerified, ...) | ECP-04 (false), ECP-03 (true) | Covered |
| equire(msg.value == appointmentFee, ...) | BVA-02 (false), BVA-01 (true) | Covered |
| ppointmentCount++ | BVA-01 | Covered |
| ppointments[appointmentCount] = Appointment(...) | BVA-01 | Covered |
| payable(_doctorAddress).transfer(doctorShare) | BVA-01 | Covered |
| platformRevenue += platformShare | BVA-01 | Covered |
| emit AppointmentBooked(...) | BVA-01 | Covered |

**Statement Coverage Achieved: 100% for bookAppointment()**

### 6.3.2 Branch Coverage

Branch Coverage requires that every conditional branch (both true and false outcomes of every condition) is executed at least once.

Target function: ookAppointment()

| Branch | True Path Test | False Path Test | Coverage |
|--------|---------------|----------------|----------|
| patients[msg.sender].isRegistered | ECP-01 | ECP-02 | Covered |
| doctors[_doctorAddress].isVerified | ECP-03 | ECP-04 | Covered |
| msg.value == appointmentFee | BVA-01 | BVA-02 | Covered |

Target function: erifyDoctor(address _doctorAddress)

| Branch | True Path Test | False Path Test | Coverage |
|--------|---------------|----------------|----------|
| msg.sender == admin | TC-DT-01 | ECP-06 | Covered |
| doctors[_doctorAddress].isRegistered | STT-02 | STT-04 | Covered |

**Branch Coverage Achieved: 100% for tested functions**

### 6.3.3 Path Coverage

Path Coverage requires that every unique execution path through a function is tested. For ookAppointment(), three distinct paths exist:

| Path ID | Path Description | Test Case | Result |
|---------|-----------------|-----------|--------|
| P-01 | All requires pass; appointment created; ETH transferred | BVA-01 | Pass |
| P-02 | First require fails (not a registered patient) | ECP-02 | Pass |
| P-03 | Second require fails (doctor not verified) | ECP-04 | Pass |
| P-04 | Third require fails (incorrect ETH value) | BVA-02 | Pass |

For uyMedicine(), two additional paths cover the discount logic:

| Path ID | Path Description | Test Case | Result |
|---------|-----------------|-----------|--------|
| P-05 | Patient has prescription; discount applied | BVA-07 with prescription | Pass |
| P-06 | Patient has no prescription; full price charged | BVA-07 without prescription | Pass |

**Path Coverage Achieved: 100% for all primary contract functions**

---
# CHAPTER NO 7: TOOLS AND TECHNOLOGIES

## 7.1 Programming Languages

The HealthChain system is developed using three primary programming languages, each serving a distinct architectural role:

**Solidity (v0.8.20)**
Solidity is a statically typed, contract-oriented programming language specifically designed for the Ethereum Virtual Machine. It was selected as the smart contract language because it is the dominant and most mature language for EVM-based development, with comprehensive documentation, active tooling support, and built-in constructs for common blockchain patterns such as access modifiers, event emission, and value transfer. The ^0.8.20 version pragma ensures access to the overflow protection introduced in Solidity 0.8.0, which eliminates a common class of integer overflow vulnerabilities that previously required the OpenZeppelin SafeMath library.

**JavaScript / TypeScript**
JavaScript is the primary language for the Next.js frontend application. All React components, custom hooks (including the useWeb3 hook for blockchain interaction), API routes, and configuration files are written in JavaScript (ES2022+). JavaScript was chosen because of its seamless integration with the React ecosystem, the Next.js framework, and the ethers.js library. The ethers.js v6 library, which provides the ABI encoding and JSON-RPC communication required to interact with the Ethereum smart contract from the browser, is a JavaScript library.

**CSS (via Tailwind CSS v4)**
Cascading Style Sheets with Tailwind CSS v4 utility classes are used for all visual styling. Tailwind v4 introduces an OKLCH color space for perceptually uniform color management and defines design tokens through the @theme CSS directive rather than a JavaScript configuration file. This approach reduces the build toolchain dependency and improves runtime performance.

| Language | Version | Role |
|----------|---------|------|
| Solidity | ^0.8.20 | Smart contract logic and on-chain data storage |
| JavaScript | ES2022+ | Frontend components, API routes, Web3 integration |
| CSS / Tailwind | Tailwind v4 | Application styling and responsive layout |

## 7.2 Operating Environment

The HealthChain system operates within the following software and hardware environment:

**Development Environment:**

| Component | Technology | Version |
|-----------|-----------|---------|
| Smart Contract Framework | Hardhat | ^2.28.6 |
| Frontend Framework | Next.js | ^16.2.4 |
| Blockchain Library | ethers.js | ^6.16.0 |
| UI Animation | Framer Motion | ^12.34.3 |
| UI Components | Radix UI / Shadcn | Latest |
| Form Validation | React Hook Form + Zod | Latest |
| File Storage SDK | Pinata (REST API) | v1 |
| AI SDK | Groq SDK | ^0.x |
| AI Model | LLaMA 3.1 8B Instant | Via Groq Cloud |
| Icons | Lucide React | ^1.8.0 |
| Package Manager | npm | ^10.x |
| Node.js Runtime | Node.js | ^20.x |

**Operating System:** Microsoft Windows 10/11 (64-bit) or Ubuntu 20.04 LTS or later. The system is operating-system agnostic at the application level, as all runtime dependencies (Node.js, npm, Hardhat) are cross-platform.

**Browser Requirement:** Google Chrome (version 100+) or any Chromium-based browser (Microsoft Edge, Brave) with the MetaMask extension installed and configured. Firefox with MetaMask is also supported.

**Network Requirements:** A stable internet connection is required for IPFS file uploads via Pinata and for HealthBot AI inference via the Groq Cloud API. The core blockchain functionality (smart contract interaction) operates entirely on localhost and does not require internet access.

**Minimum Hardware Requirements:**

| Component | Minimum Specification |
|-----------|----------------------|
| Processor | Intel Core i5 (8th generation) or equivalent |
| RAM | 4 GB (8 GB recommended for simultaneous Hardhat + Next.js) |
| Storage | 10 GB available disk space for Node.js dependencies and blockchain data |
| Display | 1280 x 720 resolution minimum |
| Network | Broadband internet connection (for IPFS and Groq API calls) |

---

# APPENDIX A: USER DOCUMENTATION

## A.1 System Requirements

Before using the HealthChain platform, the following prerequisites must be satisfied:

1. A personal computer running Windows, macOS, or Linux with a modern web browser installed.
2. The MetaMask browser extension installed (available at metamask.io).
3. MetaMask configured with at least one Ethereum account.
4. The HealthChain local development server running on localhost:3000.
5. The Hardhat blockchain node running on localhost:8545.

## A.2 Configuring MetaMask for HealthChain

1. Open MetaMask and click the network selector at the top of the extension.
2. Click "Add Network" and then "Add a network manually."
3. Enter the following details:
   - Network Name: Hardhat Local
   - New RPC URL: http://localhost:8545
   - Chain ID: 31337
   - Currency Symbol: ETH
4. Click Save. MetaMask will switch to the Hardhat Local network.
5. Import a test account: In Hardhat terminal output, copy a private key from the listed test accounts. In MetaMask, click Account menu > Import Account > paste the private key.

## A.3 User Guide by Role

**For New Users (Unregistered):**
1. Visit http://localhost:3000 in your browser.
2. Click "Connect Wallet" at the top of the page.
3. Approve the connection in MetaMask.
4. The system will detect that your address is unregistered and present a registration selection screen.
5. Select "Register as Patient" or "Register as Doctor" as appropriate.

**For Patients:**
1. After registration, you will be directed to the Patient Portal.
2. Use "Find Doctors" to browse verified doctors and book appointments.
3. Your medical history is accessible under "Medical Records."
4. Prescriptions issued by your doctor are visible under "Prescriptions."
5. The Medicine Marketplace lists available medications for purchase.
6. Use the Chat feature to message your assigned doctor directly.
7. For platform guidance at any time, click the HealthBot button at the bottom-right of the screen.

**For Doctors:**
1. After registration, your account will be pending admin verification.
2. Once verified, reconnect your wallet to access the Doctor Panel.
3. View your scheduled appointments and mark them as complete after consultation.
4. Add medical records for your patients through the Records section.
5. Issue prescriptions by selecting a patient and a medicine from the Prescribe section.

**For Administrators:**
1. Connect the deployer wallet to access the Admin Dashboard.
2. Review pending doctor registrations and verify or reject them.
3. Manage the medicine catalogue through the Medicines section.
4. Withdraw accumulated platform revenue using the Revenue section.

---

# APPENDIX B: SOURCE CODE

The complete source code for the HealthChain system is organized as follows:

## B.1 Project Directory Structure

`
fyp-blockchain/
├── client/                         Next.js frontend application
│   ├── app/                        Next.js App Router pages and API routes
│   │   ├── admin/                  Admin dashboard pages
│   │   ├── doctor/                 Doctor panel pages
│   │   ├── patient/                Patient portal pages
│   │   ├── api/
│   │   │   ├── groq-chat/          HealthBot AI API route
│   │   │   └── upload/             IPFS upload API route
│   │   ├── layout.js               Root application layout
│   │   └── page.jsx                Landing page
│   ├── components/
│   │   ├── Chatbot.jsx             HealthBot AI widget component
│   │   ├── DynamicHeader.jsx       Role-aware navigation header
│   │   └── DynamicSidebar.jsx      Role-aware sidebar navigation
│   ├── config/
│   │   └── index.js                Contract ABI and address exports
│   └── hooks/
│       └── useWeb3.js              Custom React hook for Web3 state
├── web3/                           Hardhat blockchain package
│   ├── contracts/
│   │   └── Healthcare.sol          Main smart contract
│   ├── scripts/
│   │   └── deploy.js               Deployment script
│   └── hardhat.config.js           Hardhat network configuration
└── diagrams/                       UML and architecture diagram files
    ├── 01_use_case_diagram.drawio
    ├── 02_class_diagram.drawio
    ├── 03_sequence_diagram_overall.drawio
    ├── 04_activity_diagram_overall.drawio
    ├── 05_er_diagram.drawio
    ├── 06_deployment_architecture_diagram.drawio
    ├── 07_data_flow_diagram_level0.drawio
    ├── 07_data_flow_diagram_level1.drawio
    ├── 09_component_diagram.drawio
    ├── 11_object_diagram.drawio
    ├── 12_collaboration_diagram.drawio
    └── 13_deployment_diagram.drawio
`

## B.2 Key Source Files

**Healthcare.sol** — The core smart contract implementing all business logic. Located at: web3/contracts/Healthcare.sol

**useWeb3.js** — The custom React hook managing wallet connection, role detection, network switching, and contract instantiation. Located at: client/hooks/useWeb3.js

**route.js (groq-chat)** — The Next.js server-side API route that receives HealthBot requests, injects the system prompt, and calls the Groq Cloud API. Located at: client/app/api/groq-chat/route.js

**deploy.js** — The Hardhat deployment script that deploys Healthcare.sol and automatically updates the frontend configuration with the new contract address. Located at: web3/scripts/deploy.js

The full source code is available in the project repository at: d:/College/fyp-blockchain/

---

*End of Document*
