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

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Figure No.</th>
      <th>Description</th>
      <th>Reference File</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Figure 3.1</td>
      <td>Use Case Diagram — HealthChain DApp</td>
      <td>diagrams/01_use_case_diagram.drawio</td>
    </tr>
    <tr>
      <td>Figure 4.1</td>
      <td>Architecture Diagram — Three-Layer Stack</td>
      <td>diagrams/06_deployment_architecture_diagram.drawio</td>
    </tr>
    <tr>
      <td>Figure 4.2</td>
      <td>Entity Relationship (ER) Diagram</td>
      <td>diagrams/05_er_diagram.drawio</td>
    </tr>
    <tr>
      <td>Figure 4.3</td>
      <td>Data Flow Diagram — Level 0</td>
      <td>diagrams/07_data_flow_diagram_level0.drawio</td>
    </tr>
    <tr>
      <td>Figure 4.4</td>
      <td>Data Flow Diagram — Level 1</td>
      <td>diagrams/07_data_flow_diagram_level1.drawio</td>
    </tr>
    <tr>
      <td>Figure 4.5</td>
      <td>Class Diagram — Smart Contract Data Model</td>
      <td>diagrams/02_class_diagram.drawio</td>
    </tr>
    <tr>
      <td>Figure 4.6</td>
      <td>Object Diagram — Runtime State Snapshot</td>
      <td>diagrams/11_object_diagram.drawio</td>
    </tr>
    <tr>
      <td>Figure 4.7</td>
      <td>Sequence Diagram — Appointment Booking Flow</td>
      <td>diagrams/03_sequence_diagram_overall.drawio</td>
    </tr>
    <tr>
      <td>Figure 4.8</td>
      <td>Activity Diagram — Registration Workflow</td>
      <td>diagrams/04_activity_diagram_overall.drawio</td>
    </tr>
    <tr>
      <td>Figure 4.9</td>
      <td>Collaboration Diagram — Object Interaction</td>
      <td>diagrams/12_collaboration_diagram.drawio</td>
    </tr>
    <tr>
      <td>Figure 5.1</td>
      <td>Component Diagram — Frontend Modules</td>
      <td>diagrams/09_component_diagram.drawio</td>
    </tr>
    <tr>
      <td>Figure 5.2</td>
      <td>Deployment Diagram — Infrastructure Nodes</td>
      <td>diagrams/13_deployment_diagram.drawio</td>
    </tr>
  </tbody>
</table>


---

## LIST OF TABLES

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Table No.</th>
      <th>Description</th>
      <th>Chapter</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table 1.1</td>
      <td>Project Objectives</td>
      <td>Chapter 1 — Introduction</td>
    </tr>
    <tr>
      <td>Table 1.2</td>
      <td>Intended Audience and Reading Suggestions</td>
      <td>Chapter 1 — Introduction</td>
    </tr>
    <tr>
      <td>Table 1.3</td>
      <td>Document Conventions</td>
      <td>Chapter 1 — Introduction</td>
    </tr>
    <tr>
      <td>Table 2.1</td>
      <td>Product Features</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.2</td>
      <td>Design and Implementation Constraints</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.3</td>
      <td>Assumptions and Dependencies</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.4</td>
      <td>Stimulus/Response Sequences — Wallet Authentication (Feature 1)</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.5</td>
      <td>Functional Requirements — Feature 1: Wallet-Based Authentication</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.6</td>
      <td>Stimulus/Response Sequences — Doctor Registration (Feature 2)</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.7</td>
      <td>Functional Requirements — Feature 2: Doctor Registration</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.8</td>
      <td>Stimulus/Response Sequences — Patient Registration (Feature 3)</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.9</td>
      <td>Functional Requirements — Feature 3: Patient Registration</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.10</td>
      <td>Stimulus/Response Sequences — Appointment Booking (Feature 4)</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.11</td>
      <td>Functional Requirements — Feature 4: Appointment Booking</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.12</td>
      <td>Stimulus/Response Sequences — Medical Record Management (Feature 5)</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.13</td>
      <td>Functional Requirements — Feature 5: Medical Record Management</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.14</td>
      <td>Stimulus/Response Sequences — Digital Prescription (Feature 6)</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.15</td>
      <td>Functional Requirements — Feature 6: Digital Prescription Issuance</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.16</td>
      <td>Stimulus/Response Sequences — Medicine Marketplace (Feature 7)</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.17</td>
      <td>Functional Requirements — Feature 7: Decentralized Medicine Marketplace</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.18</td>
      <td>Stimulus/Response Sequences — On-Chain Messaging (Feature 8)</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.19</td>
      <td>Functional Requirements — Feature 8: On-Chain Messaging</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.20</td>
      <td>Stimulus/Response Sequences — Admin Dashboard (Feature 9)</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.21</td>
      <td>Functional Requirements — Feature 9: Admin Dashboard</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.22</td>
      <td>Stimulus/Response Sequences — AI HealthBot (Feature 10)</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.23</td>
      <td>Functional Requirements — Feature 10: AI HealthBot</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.24</td>
      <td>HealthBot Component Architecture</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.25</td>
      <td>Software Interfaces</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.26</td>
      <td>Performance Requirements</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.27</td>
      <td>Safety Requirements</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 2.28</td>
      <td>Security Requirements</td>
      <td>Chapter 2 — SRS</td>
    </tr>
    <tr>
      <td>Table 3.1</td>
      <td>Identified Actors</td>
      <td>Chapter 3 — Analysis</td>
    </tr>
    <tr>
      <td>Table 3.2</td>
      <td>Event Flow — Book Appointment (Pay ETH)</td>
      <td>Chapter 3 — Analysis</td>
    </tr>
    <tr>
      <td>Table 3.3</td>
      <td>Event Flow — Register as Doctor</td>
      <td>Chapter 3 — Analysis</td>
    </tr>
    <tr>
      <td>Table 3.4</td>
      <td>Event Flow — Get AI Guidance (HealthBot)</td>
      <td>Chapter 3 — Analysis</td>
    </tr>
    <tr>
      <td>Table 4.1</td>
      <td>Architecture Layers</td>
      <td>Chapter 4 — Design</td>
    </tr>
    <tr>
      <td>Table 4.2</td>
      <td>Data Dictionary — All Entities</td>
      <td>Chapter 4 — Design</td>
    </tr>
    <tr>
      <td>Table 4.3</td>
      <td>Data Flows at Level 0</td>
      <td>Chapter 4 — Design</td>
    </tr>
    <tr>
      <td>Table 4.4</td>
      <td>Sub-Processes at Level 1</td>
      <td>Chapter 4 — Design</td>
    </tr>
    <tr>
      <td>Table 4.5</td>
      <td>Entity Relationships (Class Diagram)</td>
      <td>Chapter 4 — Design</td>
    </tr>
    <tr>
      <td>Table 4.6</td>
      <td>Runtime Object Snapshot</td>
      <td>Chapter 4 — Design</td>
    </tr>
    <tr>
      <td>Table 4.7</td>
      <td>Sequence of Messages — Appointment Booking</td>
      <td>Chapter 4 — Design</td>
    </tr>
    <tr>
      <td>Table 4.8</td>
      <td>Activity Steps — Doctor Registration Workflow</td>
      <td>Chapter 4 — Design</td>
    </tr>
    <tr>
      <td>Table 4.9</td>
      <td>Collaboration Messages</td>
      <td>Chapter 4 — Design</td>
    </tr>
    <tr>
      <td>Table 5.1</td>
      <td>Frontend Package Components</td>
      <td>Chapter 5 — Implementation</td>
    </tr>
    <tr>
      <td>Table 5.2</td>
      <td>Blockchain Package Components</td>
      <td>Chapter 5 — Implementation</td>
    </tr>
    <tr>
      <td>Table 5.3</td>
      <td>External Services</td>
      <td>Chapter 5 — Implementation</td>
    </tr>
    <tr>
      <td>Table 5.4</td>
      <td>1-Tier Architecture Characteristics</td>
      <td>Chapter 5 — Implementation</td>
    </tr>
    <tr>
      <td>Table 5.5</td>
      <td>2-Tier Architecture Layers</td>
      <td>Chapter 5 — Implementation</td>
    </tr>
    <tr>
      <td>Table 5.6</td>
      <td>3-Tier Architecture Mapping</td>
      <td>Chapter 5 — Implementation</td>
    </tr>
    <tr>
      <td>Table 6.1</td>
      <td>Black Box Test Cases — Boundary Value Analysis (BVA)</td>
      <td>Chapter 6 — Testing</td>
    </tr>
    <tr>
      <td>Table 6.2</td>
      <td>Black Box Test Cases — Equivalence Class Partitioning</td>
      <td>Chapter 6 — Testing</td>
    </tr>
    <tr>
      <td>Table 6.3</td>
      <td>State Transition Testing — Doctor Lifecycle</td>
      <td>Chapter 6 — Testing</td>
    </tr>
    <tr>
      <td>Table 6.4</td>
      <td>State Transition Testing — Appointment Lifecycle</td>
      <td>Chapter 6 — Testing</td>
    </tr>
    <tr>
      <td>Table 6.5</td>
      <td>Decision Table Testing — Appointment Booking Logic</td>
      <td>Chapter 6 — Testing</td>
    </tr>
    <tr>
      <td>Table 6.6</td>
      <td>Graph Based Testing — Patient Registration and Booking</td>
      <td>Chapter 6 — Testing</td>
    </tr>
    <tr>
      <td>Table 6.7</td>
      <td>White Box — Statement Coverage (bookAppointment)</td>
      <td>Chapter 6 — Testing</td>
    </tr>
    <tr>
      <td>Table 6.8</td>
      <td>White Box — Branch Coverage (bookAppointment)</td>
      <td>Chapter 6 — Testing</td>
    </tr>
    <tr>
      <td>Table 6.9</td>
      <td>White Box — Branch Coverage (verifyDoctor)</td>
      <td>Chapter 6 — Testing</td>
    </tr>
    <tr>
      <td>Table 6.10</td>
      <td>White Box — Path Coverage (bookAppointment)</td>
      <td>Chapter 6 — Testing</td>
    </tr>
    <tr>
      <td>Table 6.11</td>
      <td>White Box — Path Coverage (buyMedicine)</td>
      <td>Chapter 6 — Testing</td>
    </tr>
    <tr>
      <td>Table 7.1</td>
      <td>Programming Languages Summary</td>
      <td>Chapter 7 — Tools & Technologies</td>
    </tr>
    <tr>
      <td>Table 7.2</td>
      <td>Development Environment — Tools and Versions</td>
      <td>Chapter 7 — Tools & Technologies</td>
    </tr>
    <tr>
      <td>Table 7.3</td>
      <td>Minimum Hardware Requirements</td>
      <td>Chapter 7 — Tools & Technologies</td>
    </tr>
  </tbody>
</table>


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

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Obj. No.</th>
      <th>Objective</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>O-01</td>
      <td>To design and deploy a Solidity smart contract encoding all core healthcare management logic on the Ethereum blockchain.</td>
    </tr>
    <tr>
      <td>O-02</td>
      <td>To implement wallet-based authentication using the MetaMask browser extension, replacing password-based access control.</td>
    </tr>
    <tr>
      <td>O-03</td>
      <td>To develop a role-based Next.js frontend that renders appropriate interfaces for Administrator, Doctor, and Patient roles.</td>
    </tr>
    <tr>
      <td>O-04</td>
      <td>To integrate IPFS via the Pinata pinning service for decentralized storage of medical certificates and profile images.</td>
    </tr>
    <tr>
      <td>O-05</td>
      <td>To implement a transparent on-chain economic model governing consultation fees, medicine purchases, and platform revenue.</td>
    </tr>
    <tr>
      <td>O-06</td>
      <td>To enable permanent, verifiable peer-to-peer messaging between physicians and patients stored on the blockchain.</td>
    </tr>
    <tr>
      <td>O-07</td>
      <td>To provide an AI-powered conversational assistant (HealthBot) to reduce the onboarding barrier for non-technical users.</td>
    </tr>
    <tr>
      <td>O-08</td>
      <td>To evaluate the system through structured black box and white box testing against defined test cases.</td>
    </tr>
  </tbody>
</table>


## 1.6 Intended Audience and Reading Suggestions

This document is intended for the following audiences:

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Audience</th>
      <th>Relevant Sections</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Academic Evaluators and Project Supervisors</td>
      <td>All chapters — particularly Chapters 2, 3, 4, and 6</td>
    </tr>
    <tr>
      <td>Software Developers and Technical Reviewers</td>
      <td>Chapters 4, 5, 7, and Appendix B (Source Code)</td>
    </tr>
    <tr>
      <td>Healthcare Domain Experts</td>
      <td>Chapters 1, 2, and 3</td>
    </tr>
    <tr>
      <td>Non-Technical Readers</td>
      <td>Chapter 1, Appendix A (User Documentation)</td>
    </tr>
  </tbody>
</table>


It is recommended that academic evaluators read chapters sequentially. Developers may refer directly to Chapter 4 (Design) and Chapter 5 (Implementation) after reviewing the SRS in Chapter 2. Non-technical readers should consult Appendix A for a simplified guide to the platform.

## 1.7 Document Convention

This document follows the IEEE 830 Software Requirements Specification standard for the structure of Chapter 2. The following conventions are used throughout:

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Convention</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>**SHALL**</td>
      <td>Mandatory requirement — the system must implement this without exception</td>
    </tr>
    <tr>
      <td>**SHOULD**</td>
      <td>Recommended requirement — preferred but not strictly mandatory</td>
    </tr>
    <tr>
      <td>**MAY**</td>
      <td>Optional feature — may be implemented at the developer's discretion</td>
    </tr>
    <tr>
      <td>FR-x.y</td>
      <td>Functional Requirement identifier (Feature number . Requirement number)</td>
    </tr>
    <tr>
      <td>NFR-x.y</td>
      <td>Non-Functional Requirement identifier</td>
    </tr>
    <tr>
      <td>[Figure x.y]</td>
      <td>Reference to a diagram listed in the List of Figures</td>
    </tr>
    <tr>
      <td>italics</td>
      <td>Technical terms introduced for the first time</td>
    </tr>
    <tr>
      <td>`code font`</td>
      <td>Source code identifiers, function names, and file paths</td>
    </tr>
  </tbody>
</table>


All monetary values in the system are denominated in Ether (ETH) and wei (1 ETH = 10^18 wei). All timestamps are recorded as Unix epoch values by the Ethereum block timestamp.

---
# CHAPTER NO 2: SOFTWARE REQUIREMENT SPECIFICATION

## 2.1 Overall Description

### 2.1.1 Product Perspectives

HealthChain is a standalone decentralized application (DApp) built on the Ethereum blockchain. Unlike conventional healthcare software that depends on centralized servers and institutional databases, HealthChain functions as a fully on-chain system in which the deployed smart contract serves simultaneously as the application server, authorization engine, and permanent data store. No backend web server maintains application state.

The system integrates with two external decentralized services. The Ethereum blockchain, accessed through the MetaMask wallet extension via the JSON-RPC protocol, serves as the execution environment for all business logic. The InterPlanetary File System (IPFS), accessed through the Pinata cloud gateway, provides content-addressed decentralized storage for binary files including profile photographs and medical certificates. The frontend is a Next.js web application communicating with the smart contract exclusively through the ethers.js v6 library. (Refer to Figure 4.1 — Architecture Diagram)

### 2.1.2 Product Features

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Feature No.</th>
      <th>Feature Name</th>
      <th>Roles Involved</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>F-01</td>
      <td>Wallet-Based Authentication and Role Detection</td>
      <td>All Users</td>
    </tr>
    <tr>
      <td>F-02</td>
      <td>Doctor Registration with IPFS Credential Upload</td>
      <td>Doctor, Admin</td>
    </tr>
    <tr>
      <td>F-03</td>
      <td>Patient Registration with Consultant Assignment</td>
      <td>Patient</td>
    </tr>
    <tr>
      <td>F-04</td>
      <td>Appointment Booking with ETH Payment Distribution</td>
      <td>Patient, Doctor, Admin</td>
    </tr>
    <tr>
      <td>F-05</td>
      <td>Medical Record Management</td>
      <td>Doctor, Patient</td>
    </tr>
    <tr>
      <td>F-06</td>
      <td>Digital Prescription Issuance</td>
      <td>Doctor, Patient</td>
    </tr>
    <tr>
      <td>F-07</td>
      <td>Decentralized Medicine Marketplace</td>
      <td>Patient, Admin</td>
    </tr>
    <tr>
      <td>F-08</td>
      <td>On-Chain Peer-to-Peer Messaging</td>
      <td>Doctor, Patient</td>
    </tr>
    <tr>
      <td>F-09</td>
      <td>Administrative Dashboard and Platform Management</td>
      <td>Admin</td>
    </tr>
    <tr>
      <td>F-10</td>
      <td>AI HealthBot — Conversational Onboarding Assistant</td>
      <td>All Users</td>
    </tr>
  </tbody>
</table>


### 2.1.3 Design and Implementation Constraints

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Constraint ID</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>C-01</td>
      <td>All business logic must be encoded in Solidity ^0.8.20. No floating-point arithmetic is available; all monetary values are expressed in wei.</td>
    </tr>
    <tr>
      <td>C-02</td>
      <td>On-chain storage is expensive. Binary data (images, PDFs) is stored only as IPFS content identifiers (CIDs) on-chain.</td>
    </tr>
    <tr>
      <td>C-03</td>
      <td>All system access requires the MetaMask browser extension. The system must detect its absence and display guidance.</td>
    </tr>
    <tr>
      <td>C-04</td>
      <td>Deployment targets the Hardhat local network (Chain ID: 31337, localhost:8545). Public testnet deployment requires environment reconfiguration.</td>
    </tr>
    <tr>
      <td>C-05</td>
      <td>The administrator role is permanently bound to the contract deployer address. No transfer mechanism exists.</td>
    </tr>
    <tr>
      <td>C-06</td>
      <td>Once written to the blockchain, data cannot be deleted or modified. This is a deliberate design choice for auditability.</td>
    </tr>
    <tr>
      <td>C-07</td>
      <td>The frontend is designed for modern Chromium-based browsers with MetaMask installed.</td>
    </tr>
  </tbody>
</table>


### 2.1.4 Assumptions and Dependencies

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Assumption ID</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A-01</td>
      <td>All users possess a device with a modern web browser, internet connection, and MetaMask installed.</td>
    </tr>
    <tr>
      <td>A-02</td>
      <td>The Hardhat local node is running on localhost:8545 and MetaMask is configured for Chain ID 31337.</td>
    </tr>
    <tr>
      <td>A-03</td>
      <td>Pinata IPFS credentials configured in environment variables are valid and the service is operational.</td>
    </tr>
    <tr>
      <td>A-04</td>
      <td>The Groq Cloud API is operational when HealthBot is used. Groq API failure does not affect core functionality.</td>
    </tr>
    <tr>
      <td>A-05</td>
      <td>The system does not assume medical domain knowledge from patient users.</td>
    </tr>
  </tbody>
</table>


---

## 2.2 System Features

### 2.2.1 System Feature 1: Wallet-Based Authentication and Role Detection

**Description and Priority:** HIGH

MetaMask wallet authentication is the sole access control mechanism of HealthChain. Rather than maintaining a username/password database, the system relies on Ethereum public key cryptography. Each user's address is a persistent globally unique identity, and access rights are determined by querying the smart contract state for that address.

**Stimulus / Response Sequences:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Seq.</th>
      <th>Stimulus</th>
      <th>System Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>User visits the platform without MetaMask installed</td>
      <td>System detects absence of window.ethereum and displays MetaMask installation guidance.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>User clicks "Connect Wallet"</td>
      <td>MetaMask opens a connection dialog. On approval, the user's address is read and role-detection begins.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Address is the contract deployer</td>
      <td>System sets role = "admin" and routes to the Admin Dashboard.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Address matches a verified Doctor record</td>
      <td>System sets role = "doctor" and routes to the Doctor Panel.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Address matches a registered Patient record</td>
      <td>System sets role = "patient" and routes to the Patient Portal.</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Address has no registration</td>
      <td>System presents the Registration Selection screen.</td>
    </tr>
    <tr>
      <td>7</td>
      <td>User switches accounts in MetaMask</td>
      <td>System detects accountsChanged event and re-executes role detection for the new address.</td>
    </tr>
  </tbody>
</table>


**Functional Requirements:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Req. ID</th>
      <th>Requirement</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FR-1.1</td>
      <td>The system SHALL detect the MetaMask wallet provider on page load.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-1.2</td>
      <td>The system SHALL request wallet connection only upon explicit user action.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-1.3</td>
      <td>Upon connection, the system SHALL query the contract to determine user role.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-1.4</td>
      <td>The system SHALL auto-switch MetaMask to Chain ID 31337, adding the network if absent.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-1.5</td>
      <td>The system SHALL listen for MetaMask account change events and update session state.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-1.6</td>
      <td>Each role SHALL be routed to its designated interface immediately after authentication.</td>
      <td>High</td>
    </tr>
  </tbody>
</table>


---

### 2.2.2 System Feature 2: Doctor Registration and Admin Verification

**Description and Priority:** HIGH

Doctor registration implements a two-stage onboarding process: self-registration followed by administrative verification. The smart contract enforces that unverified doctors cannot access clinical features.

**Stimulus / Response Sequences:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Seq.</th>
      <th>Stimulus</th>
      <th>System Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Unregistered wallet selects "Register as Doctor"</td>
      <td>System presents a registration form: name, age, gender, specialization, MBBS status, experience, description.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Doctor uploads medical certificate</td>
      <td>Frontend uploads the file to IPFS via Pinata and stores the returned CID.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Doctor submits form and pays registration fee</td>
      <td>MetaMask confirms the transaction. registerDoctor() stores the doctor struct on-chain.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Admin opens verification panel</td>
      <td>Dashboard lists all doctors where isRegistered=true and isVerified=false.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Admin approves doctor</td>
      <td>verifyDoctor() is called; isVerified is set to true. Doctor can now accept appointments.</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Admin rejects doctor</td>
      <td>rejectDoctor() is called; registration fee is refunded per contract logic.</td>
    </tr>
  </tbody>
</table>


**Functional Requirements:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Req. ID</th>
      <th>Requirement</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FR-2.1</td>
      <td>The system SHALL collect name, age, gender, specialization, experience, MBBS status, and description.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-2.2</td>
      <td>The system SHALL support medical certificate file upload via the Pinata IPFS API.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-2.3</td>
      <td>The registration transaction SHALL include payment of the platform-defined registration fee in ETH.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-2.4</td>
      <td>The contract SHALL prevent the same address from registering more than once as a doctor.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-2.5</td>
      <td>An unverified doctor SHALL NOT access clinical features or patient data.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-2.6</td>
      <td>The Admin SHALL be able to approve or reject any pending registration.</td>
      <td>High</td>
    </tr>
  </tbody>
</table>


---

### 2.2.3 System Feature 3: Patient Registration

**Description and Priority:** HIGH

Patient registration allows any unregistered wallet address to enroll as a healthcare consumer. Upon registration, the contract automatically assigns the patient to a general consultant doctor if one is available.

**Stimulus / Response Sequences:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Seq.</th>
      <th>Stimulus</th>
      <th>System Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Unregistered wallet selects "Register as Patient"</td>
      <td>System presents a form: name, age, gender, blood group, optional profile image.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Patient submits the form</td>
      <td>MetaMask confirms the transaction. registerPatient() stores patient data on-chain.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Contract checks for available general consultant</td>
      <td>If a verified doctor with general availability exists, that doctor is assigned automatically.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Registration completes</td>
      <td>Patient is redirected to the Patient Portal.</td>
    </tr>
  </tbody>
</table>


**Functional Requirements:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Req. ID</th>
      <th>Requirement</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FR-3.1</td>
      <td>The system SHALL collect name, age, gender, and blood group for patient registration.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-3.2</td>
      <td>The contract SHALL prevent the same address registering as both doctor and patient.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-3.3</td>
      <td>Upon registration, the contract SHALL automatically assign a general consultant if one is available.</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td>FR-3.4</td>
      <td>The system SHALL redirect the patient to the Patient Portal after successful registration.</td>
      <td>High</td>
    </tr>
  </tbody>
</table>


---

### 2.2.4 System Feature 4: Appointment Booking with Automated Payment Distribution

**Description and Priority:** HIGH

When a patient books an appointment, the total fee is sent with the transaction. The smart contract distributes funds automatically: the doctor receives their share directly, and the platform fee is retained for administrative withdrawal.

**Stimulus / Response Sequences:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Seq.</th>
      <th>Stimulus</th>
      <th>System Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Patient selects a doctor and clicks "Book Appointment"</td>
      <td>System displays the appointment form with date and time fields.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Patient confirms booking with ETH payment</td>
      <td>MetaMask confirms the transaction showing total ETH.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>bookAppointment() executes</td>
      <td>Contract validates payment, creates Appointment struct, transfers doctor's share, records platform fee.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Doctor views the new appointment</td>
      <td>Appointment appears in Doctor Panel under pending appointments.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Doctor marks appointment complete</td>
      <td>completeAppointment() updates appointment status on-chain.</td>
    </tr>
  </tbody>
</table>


**Functional Requirements:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Req. ID</th>
      <th>Requirement</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FR-4.1</td>
      <td>The patient SHALL select a doctor and specify appointment date and time.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-4.2</td>
      <td>The booking transaction SHALL include the full fee (doctor fee + platform fee) in ETH.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-4.3</td>
      <td>The contract SHALL automatically transfer the doctor's fee share upon booking.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-4.4</td>
      <td>The contract SHALL retain the platform share for administrative withdrawal.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-4.5</td>
      <td>Only the target doctor SHALL mark an appointment as complete.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-4.6</td>
      <td>The appointment record SHALL be immutably stored on-chain with a block timestamp.</td>
      <td>High</td>
    </tr>
  </tbody>
</table>


---

### 2.2.5 System Feature 5: Medical Record Management

**Description and Priority:** HIGH

Medical records are created exclusively by verified doctors for their patients. All records are permanently stored on the Ethereum blockchain, making them immutable, timestamped, and accessible to both the treating physician and the patient.

**Stimulus / Response Sequences:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Seq.</th>
      <th>Stimulus</th>
      <th>System Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Doctor selects a patient from the patient list</td>
      <td>System displays the patient's existing medical history.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Doctor submits a new record entry</td>
      <td>addMedicalRecord() appends the record (diagnosis, symptoms, treatment) on-chain.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Patient navigates to medical history</td>
      <td>System retrieves all records for the patient's address and displays them chronologically.</td>
    </tr>
  </tbody>
</table>


**Functional Requirements:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Req. ID</th>
      <th>Requirement</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FR-5.1</td>
      <td>Only verified doctors SHALL be permitted to create medical records.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-5.2</td>
      <td>A medical record SHALL contain: diagnosis, symptoms, treatment notes, and timestamp.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-5.3</td>
      <td>Medical records SHALL be immutably stored; deletion or modification is not permitted.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-5.4</td>
      <td>Both the treating doctor and the patient SHALL be able to retrieve the full record history.</td>
      <td>High</td>
    </tr>
  </tbody>
</table>


---

### 2.2.6 System Feature 6: Digital Prescription Issuance

**Description and Priority:** HIGH

Verified doctors may issue digital prescriptions referencing medicines in the on-chain marketplace. This creates a verifiable link between the clinical decision and the available medication.

**Stimulus / Response Sequences:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Seq.</th>
      <th>Stimulus</th>
      <th>System Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Doctor opens prescription form for a patient</td>
      <td>System presents active medicines from the marketplace in a selectable list.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Doctor selects medicine and submits</td>
      <td>prescribeMedicine() creates a Prescription struct linked to patient address and medicine ID.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Patient views prescriptions</td>
      <td>System retrieves and displays medicine name, dosage instructions, and issuing doctor details.</td>
    </tr>
  </tbody>
</table>


**Functional Requirements:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Req. ID</th>
      <th>Requirement</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FR-6.1</td>
      <td>Only verified doctors SHALL be permitted to issue prescriptions.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-6.2</td>
      <td>A prescription SHALL reference a valid, active medicine from the on-chain marketplace.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-6.3</td>
      <td>Prescriptions SHALL be immutably stored with doctor address and block timestamp.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-6.4</td>
      <td>Patients SHALL be able to view all prescriptions issued in their name.</td>
      <td>High</td>
    </tr>
  </tbody>
</table>


---

### 2.2.7 System Feature 7: Decentralized Medicine Marketplace

**Description and Priority:** MEDIUM-HIGH

The medicine marketplace is an on-chain catalogue administered by the platform Admin. Patients purchase medicines directly through smart contract transactions. The system applies conditional discount pricing when a patient holds a valid prescription for the selected medicine.

**Stimulus / Response Sequences:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Seq.</th>
      <th>Stimulus</th>
      <th>System Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Admin adds a new medicine</td>
      <td>addMedicine() creates a Medicine struct with name, description, price, IPFS image CID, and active status.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Patient browses the marketplace</td>
      <td>System retrieves all active medicines and displays them with pricing.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Patient purchases a medicine</td>
      <td>buyMedicine() validates payment, applies discount if prescription exists, transfers funds, records sale.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Admin deactivates a medicine</td>
      <td>Medicine is marked inactive and no longer appears to patients.</td>
    </tr>
  </tbody>
</table>


**Functional Requirements:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Req. ID</th>
      <th>Requirement</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FR-7.1</td>
      <td>Only the Admin SHALL be able to add, edit, or deactivate medicines.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-7.2</td>
      <td>The contract SHALL validate that purchase payment equals the medicine price.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-7.3</td>
      <td>A discount SHALL be applied automatically if the patient holds a valid prescription.</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td>FR-7.4</td>
      <td>Purchase records SHALL be stored on-chain with patient address, medicine ID, and timestamp.</td>
      <td>Medium</td>
    </tr>
  </tbody>
</table>


---

### 2.2.8 System Feature 8: On-Chain Messaging Between Doctors and Patients

**Description and Priority:** MEDIUM

Direct asynchronous messaging between verified doctors and their registered patients is supported. All messages are stored on the blockchain, providing a permanent tamper-proof record of clinical communications.

**Stimulus / Response Sequences:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Seq.</th>
      <th>Stimulus</th>
      <th>System Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Patient or doctor opens the messaging interface</td>
      <td>System retrieves all messages between the two parties from the blockchain.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>User sends a message</td>
      <td>sendMessage() stores message content, sender address, recipient address, and timestamp on-chain.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Recipient opens the conversation</td>
      <td>All messages are displayed in chronological order.</td>
    </tr>
  </tbody>
</table>


**Functional Requirements:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Req. ID</th>
      <th>Requirement</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FR-8.1</td>
      <td>Messaging SHALL only be permitted between a registered patient and a verified doctor.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-8.2</td>
      <td>Each message SHALL be stored on-chain with sender, recipient, content, and block timestamp.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-8.3</td>
      <td>Messages SHALL be immutable once sent.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-8.4</td>
      <td>Messages SHALL be displayed in chronological order.</td>
      <td>Medium</td>
    </tr>
  </tbody>
</table>


---

### 2.2.9 System Feature 9: Admin Dashboard and Platform Management

**Description and Priority:** HIGH

The administrative interface provides the platform operator with tools for doctor verification, medicine catalogue management, and revenue management. The Admin role is bound to the contract deployer address and cannot be transferred.

**Stimulus / Response Sequences:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Seq.</th>
      <th>Stimulus</th>
      <th>System Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Admin connects wallet</td>
      <td>System detects deployer address and renders the Admin Dashboard with platform statistics.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Admin views pending doctors</td>
      <td>Dashboard lists all pending registrations with credentials and IPFS certificate links.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Admin verifies or rejects a doctor</td>
      <td>The corresponding function updates the doctor's verification status on-chain.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Admin adds a medicine</td>
      <td>addMedicine() is called with medicine details and IPFS image CID.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Admin withdraws platform revenue</td>
      <td>withdrawRevenue() transfers accumulated platform fees from the contract to the admin wallet.</td>
    </tr>
  </tbody>
</table>


**Functional Requirements:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Req. ID</th>
      <th>Requirement</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FR-9.1</td>
      <td>The Admin Dashboard SHALL display: total doctors, patients, medicines, and revenue.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-9.2</td>
      <td>The Admin SHALL be able to approve or reject pending doctor registrations.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-9.3</td>
      <td>The Admin SHALL be able to add, edit, activate, and deactivate medicines.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-9.4</td>
      <td>Only the admin address SHALL be permitted to call withdrawRevenue().</td>
      <td>High</td>
    </tr>
  </tbody>
</table>


---

### 2.2.10 System Feature 10: AI HealthBot — Intelligent Platform Guide

**Description and Priority:** MEDIUM-HIGH

HealthBot is an AI-powered conversational assistant embedded as a floating widget on every page. It addresses the usability barrier that blockchain applications present to first-time users unfamiliar with wallet connection, gas fees, and transaction confirmation. It uses the LLaMA 3.1 8B Instant model via the Groq Cloud API, with all inference calls handled server-side to protect API credentials.

**Stimulus / Response Sequences:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Seq.</th>
      <th>Stimulus</th>
      <th>System Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>User clicks the HealthBot floating button</td>
      <td>Chat window opens with a pre-composed welcome message and three quick-reply chips.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>User selects a chip or types a query</td>
      <td>Message is sent via HTTP POST to /api/groq-chat. The server injects the system prompt, calls Groq SDK, returns the AI reply.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>User asks about doctor onboarding</td>
      <td>HealthBot explains the four-step process: form submission, certificate upload, fee payment, admin verification.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>User asks about wallet connection</td>
      <td>HealthBot provides step-by-step MetaMask installation and connection instructions.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Groq API is unreachable</td>
      <td>HealthBot displays a graceful fallback message. Core application is unaffected.</td>
    </tr>
  </tbody>
</table>


**Functional Requirements:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Req. ID</th>
      <th>Requirement</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FR-10.1</td>
      <td>The HealthBot toggle button SHALL be visible on every page.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-10.2</td>
      <td>HealthBot SHALL display a welcome message on first open without any API call.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-10.3</td>
      <td>All user messages SHALL be sent to /api/groq-chat (server-side Next.js route).</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-10.4</td>
      <td>The GROQ_API_KEY SHALL reside only in server-side environment variables.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-10.5</td>
      <td>The AI model SHALL be constrained to HealthChain platform topics via a system-level prompt.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-10.6</td>
      <td>HealthBot SHALL handle API failures gracefully without affecting core system functions.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>FR-10.7</td>
      <td>HealthBot SHALL NOT require wallet connection or blockchain interaction.</td>
      <td>High</td>
    </tr>
  </tbody>
</table>


**Component Architecture:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Component</th>
      <th>File Location</th>
      <th>Responsibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Chatbot.jsx</td>
      <td>client/components/Chatbot.jsx</td>
      <td>Floating chat widget UI</td>
    </tr>
    <tr>
      <td>route.js</td>
      <td>client/app/api/groq-chat/route.js</td>
      <td>Server-side Groq API call</td>
    </tr>
    <tr>
      <td>layout.js</td>
      <td>client/app/layout.js</td>
      <td>Global rendering on every page</td>
    </tr>
  </tbody>
</table>


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

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Interface</th>
      <th>Type</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MetaMask Browser Extension</td>
      <td>External Software</td>
      <td>Ethereum key management and transaction signing</td>
    </tr>
    <tr>
      <td>Ethereum JSON-RPC (Hardhat)</td>
      <td>Network Protocol</td>
      <td>Smart contract read and write operations</td>
    </tr>
    <tr>
      <td>ethers.js v6</td>
      <td>JavaScript Library</td>
      <td>Frontend-to-blockchain communication</td>
    </tr>
    <tr>
      <td>Pinata REST API</td>
      <td>External HTTP API</td>
      <td>IPFS file upload and CID retrieval</td>
    </tr>
    <tr>
      <td>Groq Cloud API</td>
      <td>External HTTP API</td>
      <td>LLaMA 3.1 8B Instant inference for HealthBot</td>
    </tr>
    <tr>
      <td>Next.js App Router</td>
      <td>Framework</td>
      <td>Server-side rendering, API routes, navigation</td>
    </tr>
  </tbody>
</table>


### 2.3.4 Communication Interfaces

All frontend-to-contract communications use the Ethereum JSON-RPC protocol over HTTP (http://localhost:8545). IPFS file operations use HTTPS to the Pinata API endpoint ## 2.4 Other Non-Functional Requirements

### 2.4.1 Performance Requirements
For HealthChain to be practical for daily medical use, it must operate efficiently:
* **Frontend Speed:** The Next.js interface MUST fully render and become interactive within 3 seconds on a standard broadband connection.
* **Read Operations (On-Chain):** Data retrieval operations (using Solidity `view` functions like fetching patient history) MUST return results within 2 seconds since they do not require blockchain consensus or gas fees.
* **Write Operations (On-Chain):** State-changing transactions (like booking appointments or adding records) depend on block mining times. The system MUST provide immediate visual feedback (loading spinners) and reflect the final confirmation within 5-10 seconds on the local network.
* **IPFS File Uploads:** Uploading medical certificates or profile pictures via the Pinata API SHOULD complete within 15 seconds for files up to 5 MB.
* **Scalability:** The system architecture MUST support smooth iteration over dynamically growing arrays (like `doctorAddresses`). Efficient memory allocation in the smart contract ensures performance does not degrade exponentially as the user base grows.

### 2.4.2 Safety & Reliability Requirements
Patient data integrity and fund safety are critical:
* **Data Immutability:** Medical records and prescriptions are stored in append-only arrays on the blockchain. Once written, they CANNOT be deleted, overwritten, or secretly modified, ensuring a 100% trustworthy clinical history.
* **Transaction Reverts (Failsafes):** The smart contract MUST use `require()` statements to validate all state changes (e.g., checking user authorization and ETH amounts). If any condition fails, the transaction MUST instantly revert, ensuring the system state remains uncorrupted.
* **Automated Refunds:** If a patient inadvertently sends excess ETH for a consultation or medicine, the contract logic MUST automatically calculate the exact fee and refund the surplus ETH in the same transaction.
* **High Availability:** Because the backend is a decentralized smart contract on Ethereum and storage is on IPFS, the system MUST NOT have a single point of failure. It remains operational as long as the blockchain network is active.

### 2.4.3 Security Requirements
HealthChain replaces traditional database security with cryptographic security:
* **Keyless Architecture:** The application server MUST NOT store private keys or seed phrases. All cryptographic signing occurs securely inside the user's MetaMask wallet.
* **On-Chain Access Control:** Sensitive functions MUST use custom modifiers (e.g., `onlyAdmin`, `onlyVerifiedDoctor`). For instance, `getPatientMedicalHistory()` MUST block access if the caller is not the specific patient or an authorized doctor.
* **Immutable Admin Rights:** The Admin role is cryptographically bound to the contract deployer's address. It CANNOT be transferred, preventing malicious takeovers.
* **Protected Revenue:** The accumulated platform fees MUST be withdrawable strictly by the Admin address via the `withdrawRevenue()` function.
* **Environment Variable Security:** External API keys (e.g., Pinata JWT, Groq API Key) MUST be stored strictly in server-side environment variables (`.env.local`) and NEVER exposed to the client-side bundle.

### 2.4.4 Maintainability & Portability
* **Modular Codebase:** The frontend MUST follow a component-driven architecture using React/Next.js, ensuring easy updates and maintenance.
* **Browser Compatibility:** The DApp MUST be fully functional on modern Chromium-based browsers (Chrome, Edge, Brave) and Firefox, provided the MetaMask extension is installed.
* **Contract Upgradability Limitations:** As a standard smart contract, `Healthcare.sol` is immutable post-deployment. Any future major system upgrades WILL require deploying a new contract and migrating state data, ensuring strict version control.

### 2.4.5 Regulatory & Ethical Considerations
* **Patient Data Ownership:** The system architecture MUST ensure that patients have full cryptographic ownership of their medical histories.
* **Anonymity vs. Accountability:** While Ethereum provides pseudonymity, the platform requires Admin verification for doctors to ensure accountability and prevent medical fraud.

---
# CHAPTER 3: ANALYSIS (USE CASE MODEL)

## 3.1 Identifying Actors and use cases using Textual Analysis

Textual analysis of the HealthChain system requirements identifies the following actors and candidate use cases:

**Actors Identified:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Actor</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Admin</td>
      <td>Primary</td>
      <td>The Ethereum account that deployed the smart contract. Responsible for platform governance, doctor verification, medicine management, and revenue withdrawal.</td>
    </tr>
    <tr>
      <td>Doctor</td>
      <td>Primary</td>
      <td>A registered and verified medical professional. Interacts with patients through appointments, medical records, prescriptions, and messaging.</td>
    </tr>
    <tr>
      <td>Patient</td>
      <td>Primary</td>
      <td>A registered healthcare consumer. Books appointments, views medical history, purchases medicines, and communicates with doctors.</td>
    </tr>
    <tr>
      <td>Ethereum Blockchain</td>
      <td>Secondary</td>
      <td>The execution environment for all smart contract logic. Validates transactions, stores on-chain data, and enforces access control.</td>
    </tr>
    <tr>
      <td>IPFS Storage</td>
      <td>Secondary</td>
      <td>The decentralized file storage system. Receives file uploads from the frontend and returns content identifiers (CIDs).</td>
    </tr>
    <tr>
      <td>Groq AI (LLaMA 3.1)</td>
      <td>Secondary</td>
      <td>The external AI inference service that powers the HealthBot conversational assistant.</td>
    </tr>
  </tbody>
</table>


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

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Use Case Name</td>
      <td>Book Appointment (Pay ETH)</td>
    </tr>
    <tr>
      <td>Actor</td>
      <td>Patient</td>
    </tr>
    <tr>
      <td>Precondition</td>
      <td>The patient's wallet is connected and their address is registered on the platform. A verified doctor is available for booking.</td>
    </tr>
    <tr>
      <td>Postcondition</td>
      <td>A new appointment record is stored on the blockchain. The doctor's fee share has been transferred to the doctor's wallet.</td>
    </tr>
  </tbody>
</table>


<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Step</th>
      <th>Actor Action</th>
      <th>System Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Patient navigates to the "Find Doctors" page</td>
      <td>System retrieves the list of verified doctors from the smart contract and displays them with consultation fees.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Patient selects a doctor and clicks "Book Appointment"</td>
      <td>System displays the appointment form with date and time input fields.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Patient fills in the appointment details and clicks "Confirm"</td>
      <td>MetaMask opens a transaction dialog showing the total ETH amount required.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Patient approves the transaction in MetaMask</td>
      <td>The bookAppointment() function is called on the smart contract with the ETH value attached.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Contract validates the payment amount</td>
      <td>If the payment is incorrect, the contract reverts the transaction and returns an error.</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Contract executes the booking</td>
      <td>An Appointment struct is created, the doctor's fee is transferred directly, the platform fee is retained, and an event is emitted.</td>
    </tr>
    <tr>
      <td>7</td>
      <td>System confirms success</td>
      <td>The patient's appointment list is updated and a success notification is displayed.</td>
    </tr>
  </tbody>
</table>


**Alternative Flow:** If the patient's MetaMask wallet has insufficient ETH balance, MetaMask rejects the transaction before it is submitted to the network.

---

**Use Case: Register as Doctor**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Use Case Name</td>
      <td>Register as Doctor</td>
    </tr>
    <tr>
      <td>Actor</td>
      <td>Doctor, Admin (for verification step)</td>
    </tr>
    <tr>
      <td>Precondition</td>
      <td>The wallet address attempting registration is not already registered as a doctor or patient on the platform.</td>
    </tr>
    <tr>
      <td>Postcondition</td>
      <td>A Doctor struct is stored on the blockchain with isRegistered=true and isVerified=false.</td>
    </tr>
  </tbody>
</table>


<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Step</th>
      <th>Actor Action</th>
      <th>System Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>User selects "Register as Doctor" from the landing page</td>
      <td>System displays the doctor registration form.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Doctor fills in profile details (name, specialization, experience, etc.)</td>
      <td>System validates all required fields are populated.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Doctor uploads medical certificate file</td>
      <td>System uploads the file to IPFS via Pinata and stores the returned CID.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Doctor clicks "Submit Registration"</td>
      <td>MetaMask opens a transaction dialog showing the registration fee in ETH.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Doctor approves the transaction</td>
      <td>registerDoctor() is called, storing the Doctor struct on-chain with the IPFS CID.</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Admin views pending registrations</td>
      <td>The Admin Dashboard lists the new registration under the pending verification queue.</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Admin reviews credentials and clicks "Verify"</td>
      <td>verifyDoctor() is called; isVerified is set to true on the Doctor struct.</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Doctor reconnects wallet</td>
      <td>System now detects the verified doctor role and routes to the Doctor Panel.</td>
    </tr>
  </tbody>
</table>


---

**Use Case: Get AI Guidance (HealthBot)**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Use Case Name</td>
      <td>Get AI Guidance (HealthBot)</td>
    </tr>
    <tr>
      <td>Actor</td>
      <td>Any User (wallet connection not required)</td>
    </tr>
    <tr>
      <td>Precondition</td>
      <td>The HealthChain frontend is loaded in the browser.</td>
    </tr>
    <tr>
      <td>Postcondition</td>
      <td>The user has received guidance relevant to their query about the HealthChain platform.</td>
    </tr>
  </tbody>
</table>


<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Step</th>
      <th>Actor Action</th>
      <th>System Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>User clicks the HealthBot floating button</td>
      <td>Chat window expands and displays the pre-composed welcome message with three quick-reply chips.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>User clicks a chip or types a question</td>
      <td>The message is appended to the conversation state and sent via HTTP POST to /api/groq-chat.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Next.js server receives the request</td>
      <td>The server prepends the HealthChain system prompt and calls the Groq SDK using the server-side API key.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Groq Cloud processes the message</td>
      <td>LLaMA 3.1 8B generates a contextually appropriate response.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Server returns the response</td>
      <td>The AI reply is displayed in the chat window with markdown formatting applied.</td>
    </tr>
  </tbody>
</table>


**Alternative Flow:** If the Groq API returns an error, the system displays a fallback message: "Sorry, I'm having trouble connecting. Please try again." The core application remains fully operational.

---
# CHAPTER NO 4: DESIGN

## 4.1 Architecture Diagram

The HealthChain system architecture follows a three-tier decentralized model. Unlike conventional three-tier systems, HealthChain replaces the centralized application server and database tiers with the Ethereum smart contract. The three architectural layers are described in the table below:

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Layer</th>
      <th>Component</th>
      <th>Technology</th>
      <th>Responsibility</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Presentation Layer</td>
      <td>Next.js Web Frontend</td>
      <td>Next.js 16, React 19, Tailwind CSS v4, ethers.js v6</td>
      <td>Renders role-based interfaces for Admin, Doctor, and Patient; handles user input and displays blockchain data</td>
    </tr>
    <tr>
      <td>Logic and State Layer</td>
      <td>Healthcare.sol Smart Contract</td>
      <td>Solidity ^0.8.20, Hardhat (localhost:8545)</td>
      <td>Enforces all business rules, manages on-chain access control, processes ETH transactions, stores structured data in Solidity mappings</td>
    </tr>
    <tr>
      <td>External Services Layer</td>
      <td>IPFS (Pinata) + Groq Cloud API</td>
      <td>Pinata REST API, Groq SDK</td>
      <td>Decentralized file storage for binary assets; AI inference for HealthBot assistant via Next.js server-side route</td>
    </tr>
  </tbody>
</table>


**(Refer to Figure 4.1 — Architecture Diagram: diagrams/06_deployment_architecture_diagram.drawio)**

## 4.2 ERD with Data Dictionary

The Entity Relationship Diagram models the on-chain data structures of the HealthChain smart contract. The primary entities are: Doctor, Patient, Appointment, Medicine, Prescription, and Message.

**(Refer to Figure 4.2 — Entity Relationship Diagram: diagrams/05_er_diagram.drawio)**

**Data Dictionary:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Entity</th>
      <th>Attribute</th>
      <th>Data Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Doctor</td>
      <td>walletAddress</td>
      <td>address</td>
      <td>Unique Ethereum address (primary key)</td>
    </tr>
    <tr>
      <td>Doctor</td>
      <td>name</td>
      <td>string</td>
      <td>Full name of the doctor</td>
    </tr>
    <tr>
      <td>Doctor</td>
      <td>age</td>
      <td>uint</td>
      <td>Age in years</td>
    </tr>
    <tr>
      <td>Doctor</td>
      <td>gender</td>
      <td>string</td>
      <td>Gender identifier</td>
    </tr>
    <tr>
      <td>Doctor</td>
      <td>specialization</td>
      <td>string</td>
      <td>Medical specialization field</td>
    </tr>
    <tr>
      <td>Doctor</td>
      <td>experience</td>
      <td>uint</td>
      <td>Years of clinical experience</td>
    </tr>
    <tr>
      <td>Doctor</td>
      <td>isMBBS</td>
      <td>bool</td>
      <td>Flag indicating MBBS qualification</td>
    </tr>
    <tr>
      <td>Doctor</td>
      <td>isRegistered</td>
      <td>bool</td>
      <td>Registration status flag</td>
    </tr>
    <tr>
      <td>Doctor</td>
      <td>isVerified</td>
      <td>bool</td>
      <td>Admin verification status flag</td>
    </tr>
    <tr>
      <td>Doctor</td>
      <td>ipfsCID</td>
      <td>string</td>
      <td>IPFS content identifier for medical certificate</td>
    </tr>
    <tr>
      <td>Patient</td>
      <td>walletAddress</td>
      <td>address</td>
      <td>Unique Ethereum address (primary key)</td>
    </tr>
    <tr>
      <td>Patient</td>
      <td>name</td>
      <td>string</td>
      <td>Full name of the patient</td>
    </tr>
    <tr>
      <td>Patient</td>
      <td>age</td>
      <td>uint</td>
      <td>Age in years</td>
    </tr>
    <tr>
      <td>Patient</td>
      <td>gender</td>
      <td>string</td>
      <td>Gender identifier</td>
    </tr>
    <tr>
      <td>Patient</td>
      <td>bloodGroup</td>
      <td>string</td>
      <td>Blood group identifier</td>
    </tr>
    <tr>
      <td>Patient</td>
      <td>isRegistered</td>
      <td>bool</td>
      <td>Registration status flag</td>
    </tr>
    <tr>
      <td>Patient</td>
      <td>assignedDoctor</td>
      <td>address</td>
      <td>Wallet address of the assigned doctor</td>
    </tr>
    <tr>
      <td>Appointment</td>
      <td>appointmentId</td>
      <td>uint</td>
      <td>Unique auto-incremented identifier</td>
    </tr>
    <tr>
      <td>Appointment</td>
      <td>patientAddress</td>
      <td>address</td>
      <td>Foreign key to Patient entity</td>
    </tr>
    <tr>
      <td>Appointment</td>
      <td>doctorAddress</td>
      <td>address</td>
      <td>Foreign key to Doctor entity</td>
    </tr>
    <tr>
      <td>Appointment</td>
      <td>dateTime</td>
      <td>string</td>
      <td>Scheduled appointment date and time</td>
    </tr>
    <tr>
      <td>Appointment</td>
      <td>fee</td>
      <td>uint</td>
      <td>Total fee paid in wei</td>
    </tr>
    <tr>
      <td>Appointment</td>
      <td>isCompleted</td>
      <td>bool</td>
      <td>Completion status flag</td>
    </tr>
    <tr>
      <td>Medicine</td>
      <td>medicineId</td>
      <td>uint</td>
      <td>Unique auto-incremented identifier</td>
    </tr>
    <tr>
      <td>Medicine</td>
      <td>name</td>
      <td>string</td>
      <td>Medicine name</td>
    </tr>
    <tr>
      <td>Medicine</td>
      <td>description</td>
      <td>string</td>
      <td>Medicine description and usage</td>
    </tr>
    <tr>
      <td>Medicine</td>
      <td>price</td>
      <td>uint</td>
      <td>Price in wei</td>
    </tr>
    <tr>
      <td>Medicine</td>
      <td>imageCID</td>
      <td>string</td>
      <td>IPFS CID for medicine image</td>
    </tr>
    <tr>
      <td>Medicine</td>
      <td>isActive</td>
      <td>bool</td>
      <td>Availability status flag</td>
    </tr>
    <tr>
      <td>Prescription</td>
      <td>prescriptionId</td>
      <td>uint</td>
      <td>Unique auto-incremented identifier</td>
    </tr>
    <tr>
      <td>Prescription</td>
      <td>patientAddress</td>
      <td>address</td>
      <td>Foreign key to Patient entity</td>
    </tr>
    <tr>
      <td>Prescription</td>
      <td>doctorAddress</td>
      <td>address</td>
      <td>Foreign key to Doctor entity</td>
    </tr>
    <tr>
      <td>Prescription</td>
      <td>medicineId</td>
      <td>uint</td>
      <td>Foreign key to Medicine entity</td>
    </tr>
    <tr>
      <td>Prescription</td>
      <td>timestamp</td>
      <td>uint</td>
      <td>Block timestamp of issuance</td>
    </tr>
    <tr>
      <td>Message</td>
      <td>sender</td>
      <td>address</td>
      <td>Sender Ethereum address</td>
    </tr>
    <tr>
      <td>Message</td>
      <td>recipient</td>
      <td>address</td>
      <td>Recipient Ethereum address</td>
    </tr>
    <tr>
      <td>Message</td>
      <td>content</td>
      <td>string</td>
      <td>Message content</td>
    </tr>
    <tr>
      <td>Message</td>
      <td>timestamp</td>
      <td>uint</td>
      <td>Block timestamp of message</td>
    </tr>
  </tbody>
</table>


## 4.3 Data Flow Diagram (Level 0 and Level 1)

### 4.3.1 Data Flow Diagram for Level 0

The Level 0 DFD (Context Diagram) presents the HealthChain system as a single process interacting with its external entities. External entities are: Admin, Doctor, Patient, Ethereum Blockchain, and IPFS Storage.

**Data Flows at Level 0:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Direction</th>
      <th>External Entity</th>
      <th>Data Flow Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input to System</td>
      <td>Admin</td>
      <td>Verification decisions, medicine catalogue data, revenue withdrawal requests</td>
    </tr>
    <tr>
      <td>Input to System</td>
      <td>Doctor</td>
      <td>Registration profile data, medical record entries, prescription issuance, messages</td>
    </tr>
    <tr>
      <td>Input to System</td>
      <td>Patient</td>
      <td>Registration data, appointment booking requests (with ETH), medicine purchase requests (with ETH), messages</td>
    </tr>
    <tr>
      <td>Output from System</td>
      <td>Admin</td>
      <td>Platform aggregate statistics, pending doctor registration list, revenue balance</td>
    </tr>
    <tr>
      <td>Output from System</td>
      <td>Doctor</td>
      <td>Assigned patient list, appointment schedule, message history</td>
    </tr>
    <tr>
      <td>Output from System</td>
      <td>Patient</td>
      <td>Personal medical history, prescription list, medicine catalogue, message history</td>
    </tr>
    <tr>
      <td>Bidirectional</td>
      <td>Ethereum Blockchain</td>
      <td>Transaction submission (write); event and state reading (read)</td>
    </tr>
    <tr>
      <td>Bidirectional</td>
      <td>IPFS / Pinata</td>
      <td>File upload (write); CID retrieval (read)</td>
    </tr>
  </tbody>
</table>


**(Refer to Figure 4.3 — Data Flow Diagram Level 0: diagrams/07_data_flow_diagram_level0.drawio)**

### 4.3.2 Data Flow Diagram for Level 1

The Level 1 DFD decomposes the system process into four major sub-processes:

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Process No.</th>
      <th>Process Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1.0</td>
      <td>Authenticate and Register Users</td>
      <td>Handles wallet connection, role detection, doctor registration, and patient registration</td>
    </tr>
    <tr>
      <td>2.0</td>
      <td>Manage Appointments</td>
      <td>Handles appointment booking, payment distribution, and appointment completion</td>
    </tr>
    <tr>
      <td>3.0</td>
      <td>Manage Medical Records</td>
      <td>Handles medical record creation, prescription issuance, and history retrieval</td>
    </tr>
    <tr>
      <td>4.0</td>
      <td>Manage Pharmacy</td>
      <td>Handles medicine catalogue display, purchases, and discount application</td>
    </tr>
  </tbody>
</table>


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

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Object Name</th>
      <th>Class</th>
      <th>Attribute</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>doctor1</td>
      <td>Doctor</td>
      <td>walletAddress</td>
      <td>0xABCD...1234</td>
    </tr>
    <tr>
      <td>doctor1</td>
      <td>Doctor</td>
      <td>name</td>
      <td>Dr. Ahmed</td>
    </tr>
    <tr>
      <td>doctor1</td>
      <td>Doctor</td>
      <td>specialization</td>
      <td>Cardiology</td>
    </tr>
    <tr>
      <td>doctor1</td>
      <td>Doctor</td>
      <td>isVerified</td>
      <td>true</td>
    </tr>
    <tr>
      <td>patient1</td>
      <td>Patient</td>
      <td>walletAddress</td>
      <td>0x1234...ABCD</td>
    </tr>
    <tr>
      <td>patient1</td>
      <td>Patient</td>
      <td>name</td>
      <td>Sara Khan</td>
    </tr>
    <tr>
      <td>patient1</td>
      <td>Patient</td>
      <td>bloodGroup</td>
      <td>O+</td>
    </tr>
    <tr>
      <td>patient1</td>
      <td>Patient</td>
      <td>assignedDoctor</td>
      <td>0xABCD...1234</td>
    </tr>
    <tr>
      <td>appointment1</td>
      <td>Appointment</td>
      <td>appointmentId</td>
      <td>1</td>
    </tr>
    <tr>
      <td>appointment1</td>
      <td>Appointment</td>
      <td>patientAddress</td>
      <td>0x1234...ABCD</td>
    </tr>
    <tr>
      <td>appointment1</td>
      <td>Appointment</td>
      <td>doctorAddress</td>
      <td>0xABCD...1234</td>
    </tr>
    <tr>
      <td>appointment1</td>
      <td>Appointment</td>
      <td>fee</td>
      <td>0.05 ETH</td>
    </tr>
    <tr>
      <td>appointment1</td>
      <td>Appointment</td>
      <td>isCompleted</td>
      <td>false</td>
    </tr>
  </tbody>
</table>


**(Refer to Figure 4.6 — Object Diagram: diagrams/11_object_diagram.drawio)**

## 4.6 Sequence Diagram

The Sequence Diagram illustrates the time-ordered interaction between system participants for the appointment booking process, which represents the most complex transactional flow in the HealthChain system.

**Participants:** Patient Browser, Next.js Frontend, ethers.js, MetaMask, Hardhat Node, Healthcare.sol

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Step</th>
      <th>From</th>
      <th>To</th>
      <th>Message / Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Patient Browser</td>
      <td>Next.js Frontend</td>
      <td>User clicks "Book Appointment" button</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Next.js Frontend</td>
      <td>ethers.js</td>
      <td>Prepare bookAppointment() transaction with ETH value</td>
    </tr>
    <tr>
      <td>3</td>
      <td>ethers.js</td>
      <td>MetaMask</td>
      <td>Request transaction signature from user</td>
    </tr>
    <tr>
      <td>4</td>
      <td>MetaMask</td>
      <td>Patient</td>
      <td>Display confirmation dialog: "Confirm transaction (0.05 ETH)?"</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Patient</td>
      <td>MetaMask</td>
      <td>Approve transaction</td>
    </tr>
    <tr>
      <td>6</td>
      <td>MetaMask</td>
      <td>Hardhat Node</td>
      <td>Submit signed transaction to the network</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Hardhat Node</td>
      <td>Healthcare.sol</td>
      <td>Execute bookAppointment() function</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Healthcare.sol</td>
      <td>Healthcare.sol</td>
      <td>Validate payment amount; create Appointment struct</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Healthcare.sol</td>
      <td>Doctor Wallet</td>
      <td>Transfer doctor fee share in ETH</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Healthcare.sol</td>
      <td>Event Log</td>
      <td>Emit AppointmentBooked event</td>
    </tr>
    <tr>
      <td>11</td>
      <td>Hardhat Node</td>
      <td>ethers.js</td>
      <td>Return transaction receipt</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Next.js Frontend</td>
      <td>Patient Browser</td>
      <td>Update UI with success notification</td>
    </tr>
  </tbody>
</table>


**(Refer to Figure 4.7 — Sequence Diagram: diagrams/03_sequence_diagram_overall.drawio)**

## 4.7 Activity Diagram

The Activity Diagram illustrates the workflow for the Doctor Registration and Verification process, representing the multi-party sequential activities from initial registration to verified platform access.

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Step</th>
      <th>Activity</th>
      <th>Actor</th>
      <th>Decision / Outcome</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Open registration form</td>
      <td>Doctor</td>
      <td>—</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Fill in profile details (name, specialization, experience, MBBS status)</td>
      <td>Doctor</td>
      <td>—</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Upload medical certificate file</td>
      <td>Doctor</td>
      <td>File sent to IPFS via Pinata</td>
    </tr>
    <tr>
      <td>4</td>
      <td>IPFS returns content identifier (CID)</td>
      <td>System</td>
      <td>CID stored for inclusion in transaction</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Confirm MetaMask transaction (pay registration fee in ETH)</td>
      <td>Doctor</td>
      <td>—</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Validate transaction</td>
      <td>Smart Contract</td>
      <td>Success: Doctor struct stored (isVerified=false); Failure: Revert, display error</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Receive pending registration notification</td>
      <td>Admin</td>
      <td>—</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Review credentials and decide</td>
      <td>Admin</td>
      <td>Verify: isVerified=true set on-chain; Reject: Registration reverted, fee refunded</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Reconnect wallet after verification</td>
      <td>Doctor</td>
      <td>—</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Detect verified doctor role</td>
      <td>System</td>
      <td>—</td>
    </tr>
    <tr>
      <td>11</td>
      <td>Render Doctor Panel</td>
      <td>System</td>
      <td>[End]</td>
    </tr>
  </tbody>
</table>


**(Refer to Figure 4.8 — Activity Diagram: diagrams/04_activity_diagram_overall.drawio)**

## 4.8 Collaboration Diagram

The Collaboration Diagram (Communication Diagram) emphasizes the structural relationships and numbered interactions between objects collaborating to perform the core blockchain transaction flow in HealthChain.

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Message No.</th>
      <th>From Object</th>
      <th>To Object</th>
      <th>Message / Collaboration</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Next.js Frontend</td>
      <td>ethers.js Provider</td>
      <td>Prepare and encode smart contract transaction</td>
    </tr>
    <tr>
      <td>2</td>
      <td>ethers.js Provider</td>
      <td>MetaMask Wallet</td>
      <td>Request cryptographic transaction signature</td>
    </tr>
    <tr>
      <td>3</td>
      <td>MetaMask Wallet</td>
      <td>Hardhat Blockchain Node</td>
      <td>Submit signed raw transaction to the network</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Hardhat Blockchain Node</td>
      <td>Healthcare.sol</td>
      <td>Execute the target contract function</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Healthcare.sol</td>
      <td>Hardhat Blockchain Node</td>
      <td>Emit event and return execution result</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Hardhat Blockchain Node</td>
      <td>ethers.js Provider</td>
      <td>Return transaction receipt</td>
    </tr>
    <tr>
      <td>7</td>
      <td>ethers.js Provider</td>
      <td>Next.js Frontend</td>
      <td>Return result; trigger UI state update</td>
    </tr>
  </tbody>
</table>


**(Refer to Figure 4.9 — Collaboration Diagram: diagrams/12_collaboration_diagram.drawio)**

---
# CHAPTER NO 5: IMPLEMENTATION

## 5.1 Component Diagram

The Component Diagram illustrates the modular structure of the HealthChain system, showing how software components are organized and how they depend on one another.

**(Refer to Figure 5.1 — Component Diagram: diagrams/09_component_diagram.drawio)**

The system is organized into three major packages:

**Frontend Package (client/):** Contains all Next.js application code.

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Component</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DynamicSidebar</td>
      <td>Role-aware sidebar navigation component</td>
    </tr>
    <tr>
      <td>DynamicHeader</td>
      <td>Role-aware page header with wallet connection status</td>
    </tr>
    <tr>
      <td>PageLayout</td>
      <td>Root layout wrapper applied to all authenticated pages</td>
    </tr>
    <tr>
      <td>Shadcn/UI Components</td>
      <td>Accessible primitive components (Button, Dialog, Badge, Card)</td>
    </tr>
    <tr>
      <td>Toaster and Toast Hooks</td>
      <td>Notification system for transaction feedback</td>
    </tr>
    <tr>
      <td>Framer Motion</td>
      <td>Animation library for page transitions and UI effects</td>
    </tr>
    <tr>
      <td>Chatbot.jsx</td>
      <td>HealthBot floating chat widget component</td>
    </tr>
    <tr>
      <td>Web3Context</td>
      <td>React context providing contract instance, account, and role state</td>
    </tr>
    <tr>
      <td>config/index.js</td>
      <td>Stores contract ABI and deployed contract address</td>
    </tr>
  </tbody>
</table>


**Pages (app/):** Role-specific page components including Landing Page, Admin Dashboard, Doctor Panel, Patient Portal, Marketplace, Chat, Prescribe Medicine, Register Doctor, and Register Patient.

**Blockchain Package (web3/):** Contains the Solidity smart contract and Hardhat configuration.

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Component</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Healthcare.sol</td>
      <td>Main smart contract encoding all business logic</td>
    </tr>
    <tr>
      <td>hardhat.config.js</td>
      <td>Network configuration (localhost:8545, Chain ID 31337)</td>
    </tr>
    <tr>
      <td>deploy.js</td>
      <td>Deployment script that deploys the contract and updates the frontend config</td>
    </tr>
    <tr>
      <td>ABI Artifacts</td>
      <td>Compiled contract artifacts (artifacts/contracts/)</td>
    </tr>
  </tbody>
</table>


**External Services:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Service</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MetaMask Wallet</td>
      <td>Browser extension handling key management and transaction signing</td>
    </tr>
    <tr>
      <td>IPFS / Pinata</td>
      <td>Decentralized file storage</td>
    </tr>
    <tr>
      <td>Groq Cloud API</td>
      <td>LLaMA 3.1 8B AI inference for HealthBot</td>
    </tr>
  </tbody>
</table>


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

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>TC ID</th>
      <th>Test Case</th>
      <th>Input</th>
      <th>Expected Output</th>
      <th>Actual Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>BVA-01</td>
      <td>Book appointment with exact fee</td>
      <td>ETH value = exact consultation fee</td>
      <td>Transaction succeeds; appointment created</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>BVA-02</td>
      <td>Book appointment with fee minus 1 wei</td>
      <td>ETH value = (fee - 1 wei)</td>
      <td>Transaction reverted: "Insufficient payment"</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>BVA-03</td>
      <td>Book appointment with fee plus 1 wei</td>
      <td>ETH value = (fee + 1 wei)</td>
      <td>Transaction reverted: "Incorrect payment amount"</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>BVA-04</td>
      <td>Register doctor with age = 0</td>
      <td>age = 0</td>
      <td>Registration rejected: "Invalid age"</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>BVA-05</td>
      <td>Register doctor with age = 100</td>
      <td>age = 100</td>
      <td>Registration accepted</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>BVA-06</td>
      <td>Register doctor with age = 101</td>
      <td>age = 101</td>
      <td>Registration rejected: "Age out of range"</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>BVA-07</td>
      <td>Buy medicine with exact price</td>
      <td>ETH = medicine.price</td>
      <td>Purchase succeeds; sale recorded</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>BVA-08</td>
      <td>Buy medicine with price minus 1 wei</td>
      <td>ETH = (price - 1 wei)</td>
      <td>Transaction reverted: "Incorrect payment"</td>
      <td>Pass</td>
    </tr>
  </tbody>
</table>


### 6.2.2 Equivalence Class Partitioning

Equivalence Class Partitioning divides input data into valid and invalid partitions. One representative value from each partition is tested.

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>TC ID</th>
      <th>Partition</th>
      <th>Test Input</th>
      <th>Expected Output</th>
      <th>Actual Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ECP-01</td>
      <td>Valid: Registered patient booking appointment</td>
      <td>Registered patient address</td>
      <td>Appointment booked successfully</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>ECP-02</td>
      <td>Invalid: Unregistered address booking appointment</td>
      <td>Unregistered wallet address</td>
      <td>Transaction reverted: "Not a registered patient"</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>ECP-03</td>
      <td>Valid: Verified doctor submitting medical record</td>
      <td>Verified doctor address</td>
      <td>Record created and stored on-chain</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>ECP-04</td>
      <td>Invalid: Unverified doctor submitting medical record</td>
      <td>Unverified doctor address</td>
      <td>Transaction reverted: "Doctor not verified"</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>ECP-05</td>
      <td>Valid: Admin calling withdrawRevenue()</td>
      <td>Deployer address</td>
      <td>ETH transferred to admin wallet</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>ECP-06</td>
      <td>Invalid: Non-admin calling withdrawRevenue()</td>
      <td>Non-deployer address</td>
      <td>Transaction reverted: "Not authorized"</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>ECP-07</td>
      <td>Valid: Patient purchasing active medicine</td>
      <td>Active medicine ID</td>
      <td>Purchase recorded; ETH transferred</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>ECP-08</td>
      <td>Invalid: Patient purchasing inactive medicine</td>
      <td>Inactive medicine ID</td>
      <td>Transaction reverted: "Medicine not available"</td>
      <td>Pass</td>
    </tr>
  </tbody>
</table>


### 6.2.3 State Transition Testing

State Transition Testing verifies system behavior as entities move through defined states. The Doctor lifecycle has three states: Unregistered, Registered (pending), and Verified.

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>TC ID</th>
      <th>From State</th>
      <th>Transition</th>
      <th>To State</th>
      <th>Expected Behavior</th>
      <th>Actual Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>STT-01</td>
      <td>Unregistered</td>
      <td>registerDoctor() called with valid data</td>
      <td>Registered (Pending)</td>
      <td>isRegistered=true, isVerified=false</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>STT-02</td>
      <td>Registered (Pending)</td>
      <td>verifyDoctor() called by Admin</td>
      <td>Verified</td>
      <td>isVerified=true; doctor can accept appointments</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>STT-03</td>
      <td>Registered (Pending)</td>
      <td>rejectDoctor() called by Admin</td>
      <td>Unregistered</td>
      <td>Doctor struct removed; fee refunded</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>STT-04</td>
      <td>Verified</td>
      <td>Doctor attempts to re-register</td>
      <td>Verified (unchanged)</td>
      <td>Transaction reverted: "Already registered"</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>STT-05</td>
      <td>Unregistered</td>
      <td>Appointment booking attempted</td>
      <td>Unregistered (unchanged)</td>
      <td>Transaction reverted: "Not a patient"</td>
      <td>Pass</td>
    </tr>
  </tbody>
</table>


**Appointment Lifecycle States:** Pending, Completed.

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>TC ID</th>
      <th>From State</th>
      <th>Transition</th>
      <th>To State</th>
      <th>Expected Behavior</th>
      <th>Actual Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>STT-06</td>
      <td>Pending</td>
      <td>completeAppointment() by assigned doctor</td>
      <td>Completed</td>
      <td>isCompleted=true; timestamp recorded</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>STT-07</td>
      <td>Pending</td>
      <td>completeAppointment() by different doctor</td>
      <td>Pending (unchanged)</td>
      <td>Transaction reverted: "Not your appointment"</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>STT-08</td>
      <td>Completed</td>
      <td>completeAppointment() called again</td>
      <td>Completed (unchanged)</td>
      <td>Transaction reverted: "Already completed"</td>
      <td>Pass</td>
    </tr>
  </tbody>
</table>


### 6.2.4 Decision Table Testing

Decision Table Testing covers combinations of conditions and their corresponding actions. The following table covers the appointment booking decision logic.

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Condition/Action</th>
      <th>TC-DT-01</th>
      <th>TC-DT-02</th>
      <th>TC-DT-03</th>
      <th>TC-DT-04</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>**Conditions**</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Caller is registered patient</td>
      <td>Yes</td>
      <td>No</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Target is verified doctor</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>No</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>ETH value equals required fee</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>No</td>
    </tr>
    <tr>
      <td>**Actions**</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Appointment created</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Doctor fee transferred</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Platform fee recorded</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Transaction reverted</td>
      <td>No</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>**Expected Result**</td>
      <td>Success</td>
      <td>Revert</td>
      <td>Revert</td>
      <td>Revert</td>
    </tr>
    <tr>
      <td>**Actual Result**</td>
      <td>Pass</td>
      <td>Pass</td>
      <td>Pass</td>
      <td>Pass</td>
    </tr>
  </tbody>
</table>


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

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>TC ID</th>
      <th>Path Tested</th>
      <th>Description</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GBT-01</td>
      <td>N1 - N2 - N3 - N4 - N5 - N6</td>
      <td>New patient registration flow</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>GBT-02</td>
      <td>N1 - N2 - N6</td>
      <td>Returning patient direct login</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>GBT-03</td>
      <td>N6 - N7 - N8 - N9 - N10</td>
      <td>Full appointment booking after login</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>GBT-04</td>
      <td>N4 - N5 (rejected by MetaMask)</td>
      <td>Registration transaction declined</td>
      <td>Pass</td>
    </tr>
  </tbody>
</table>


---

## 6.3 White Box Testing

White Box testing examines the internal structure of the code. Test cases are designed to execute specific code paths, branches, and statements within the Healthcare.sol smart contract.

### 6.3.1 Statement Coverage

Statement Coverage requires that every executable statement in the source code is executed at least once during testing.

Target function: ookAppointment(address _doctorAddress, string memory _dateTime)

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Statement</th>
      <th>Covered By Test Case</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
    </tr>
  </tbody>
</table>

equire(patients[msg.sender].isRegistered, ...) | ECP-02 (false path), ECP-01 (true path) | Covered |
<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th></th>
    </tr>
  </thead>
</table>

equire(doctors[_doctorAddress].isVerified, ...) | ECP-04 (false), ECP-03 (true) | Covered |
<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th></th>
    </tr>
  </thead>
</table>

equire(msg.value == appointmentFee, ...) | BVA-02 (false), BVA-01 (true) | Covered |
<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>ppointmentCount++</th>
      <th>BVA-01</th>
      <th>Covered</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>payable(_doctorAddress).transfer(doctorShare)</td>
      <td>BVA-01</td>
      <td>Covered</td>
    </tr>
    <tr>
      <td>platformRevenue += platformShare</td>
      <td>BVA-01</td>
      <td>Covered</td>
    </tr>
    <tr>
      <td>emit AppointmentBooked(...)</td>
      <td>BVA-01</td>
      <td>Covered</td>
    </tr>
  </tbody>
</table>


**Statement Coverage Achieved: 100% for bookAppointment()**

### 6.3.2 Branch Coverage

Branch Coverage requires that every conditional branch (both true and false outcomes of every condition) is executed at least once.

Target function: ookAppointment()

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Branch</th>
      <th>True Path Test</th>
      <th>False Path Test</th>
      <th>Coverage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>patients[msg.sender].isRegistered</td>
      <td>ECP-01</td>
      <td>ECP-02</td>
      <td>Covered</td>
    </tr>
    <tr>
      <td>doctors[_doctorAddress].isVerified</td>
      <td>ECP-03</td>
      <td>ECP-04</td>
      <td>Covered</td>
    </tr>
    <tr>
      <td>msg.value == appointmentFee</td>
      <td>BVA-01</td>
      <td>BVA-02</td>
      <td>Covered</td>
    </tr>
  </tbody>
</table>


Target function: erifyDoctor(address _doctorAddress)

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Branch</th>
      <th>True Path Test</th>
      <th>False Path Test</th>
      <th>Coverage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>msg.sender == admin</td>
      <td>TC-DT-01</td>
      <td>ECP-06</td>
      <td>Covered</td>
    </tr>
    <tr>
      <td>doctors[_doctorAddress].isRegistered</td>
      <td>STT-02</td>
      <td>STT-04</td>
      <td>Covered</td>
    </tr>
  </tbody>
</table>


**Branch Coverage Achieved: 100% for tested functions**

### 6.3.3 Path Coverage

Path Coverage requires that every unique execution path through a function is tested. For ookAppointment(), three distinct paths exist:

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Path ID</th>
      <th>Path Description</th>
      <th>Test Case</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>P-01</td>
      <td>All requires pass; appointment created; ETH transferred</td>
      <td>BVA-01</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>P-02</td>
      <td>First require fails (not a registered patient)</td>
      <td>ECP-02</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>P-03</td>
      <td>Second require fails (doctor not verified)</td>
      <td>ECP-04</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>P-04</td>
      <td>Third require fails (incorrect ETH value)</td>
      <td>BVA-02</td>
      <td>Pass</td>
    </tr>
  </tbody>
</table>


For uyMedicine(), two additional paths cover the discount logic:

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Path ID</th>
      <th>Path Description</th>
      <th>Test Case</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>P-05</td>
      <td>Patient has prescription; discount applied</td>
      <td>BVA-07 with prescription</td>
      <td>Pass</td>
    </tr>
    <tr>
      <td>P-06</td>
      <td>Patient has no prescription; full price charged</td>
      <td>BVA-07 without prescription</td>
      <td>Pass</td>
    </tr>
  </tbody>
</table>


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

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Language</th>
      <th>Version</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Solidity</td>
      <td>^0.8.20</td>
      <td>Smart contract logic and on-chain data storage</td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td>ES2022+</td>
      <td>Frontend components, API routes, Web3 integration</td>
    </tr>
    <tr>
      <td>CSS / Tailwind</td>
      <td>Tailwind v4</td>
      <td>Application styling and responsive layout</td>
    </tr>
  </tbody>
</table>


## 7.2 Operating Environment

The HealthChain system operates within the following software and hardware environment:

**Development Environment:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Component</th>
      <th>Technology</th>
      <th>Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Smart Contract Framework</td>
      <td>Hardhat</td>
      <td>^2.28.6</td>
    </tr>
    <tr>
      <td>Frontend Framework</td>
      <td>Next.js</td>
      <td>^16.2.4</td>
    </tr>
    <tr>
      <td>Blockchain Library</td>
      <td>ethers.js</td>
      <td>^6.16.0</td>
    </tr>
    <tr>
      <td>UI Animation</td>
      <td>Framer Motion</td>
      <td>^12.34.3</td>
    </tr>
    <tr>
      <td>UI Components</td>
      <td>Radix UI / Shadcn</td>
      <td>Latest</td>
    </tr>
    <tr>
      <td>Form Validation</td>
      <td>React Hook Form + Zod</td>
      <td>Latest</td>
    </tr>
    <tr>
      <td>File Storage SDK</td>
      <td>Pinata (REST API)</td>
      <td>v1</td>
    </tr>
    <tr>
      <td>AI SDK</td>
      <td>Groq SDK</td>
      <td>^0.x</td>
    </tr>
    <tr>
      <td>AI Model</td>
      <td>LLaMA 3.1 8B Instant</td>
      <td>Via Groq Cloud</td>
    </tr>
    <tr>
      <td>Icons</td>
      <td>Lucide React</td>
      <td>^1.8.0</td>
    </tr>
    <tr>
      <td>Package Manager</td>
      <td>npm</td>
      <td>^10.x</td>
    </tr>
    <tr>
      <td>Node.js Runtime</td>
      <td>Node.js</td>
      <td>^20.x</td>
    </tr>
  </tbody>
</table>


**Operating System:** Microsoft Windows 10/11 (64-bit) or Ubuntu 20.04 LTS or later. The system is operating-system agnostic at the application level, as all runtime dependencies (Node.js, npm, Hardhat) are cross-platform.

**Browser Requirement:** Google Chrome (version 100+) or any Chromium-based browser (Microsoft Edge, Brave) with the MetaMask extension installed and configured. Firefox with MetaMask is also supported.

**Network Requirements:** A stable internet connection is required for IPFS file uploads via Pinata and for HealthBot AI inference via the Groq Cloud API. The core blockchain functionality (smart contract interaction) operates entirely on localhost and does not require internet access.

**Minimum Hardware Requirements:**

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th>Component</th>
      <th>Minimum Specification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Processor</td>
      <td>Intel Core i5 (8th generation) or equivalent</td>
    </tr>
    <tr>
      <td>RAM</td>
      <td>4 GB (8 GB recommended for simultaneous Hardhat + Next.js)</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>10 GB available disk space for Node.js dependencies and blockchain data</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1280 x 720 resolution minimum</td>
    </tr>
    <tr>
      <td>Network</td>
      <td>Broadband internet connection (for IPFS and Groq API calls)</td>
    </tr>
  </tbody>
</table>


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
