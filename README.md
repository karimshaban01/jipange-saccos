Project Plan: Sacco / Village Savings Management System
1. Project Overview

Name: Jipange Sacco (suggested Swahili name, meaning "organize yourself")
Goal: To digitize and simplify financial management for community savings groups (VSLAs, SACCOs), including tracking contributions, loans, interest, and balances.

Target Users:

    Rural community savings groups (informal and semi-formal)

    Sacco treasurers and secretaries

    Members without smartphones

2. Key Features

    Member Registration: Name, phone, group role, start date.

    Savings Tracking: Regular contributions, penalties, missed payments.

    Loan Management: Loan issuance, repayment tracking, interest calculations.

    Interest & Dividends: Periodic interest earnings and group profit sharing.

    Balance Reports: View individual and group-level balances.

    USSD/SMS Interface: Access savings info without internet or smartphones.

    Audit Logs: Transparent change history for accountability.

    Offline Support: Offline mobile app for agents/field officers.

3. Timeline
Phase	Description	Duration
Research & Requirements	Interviews with real SACCOs & VSLA groups	1 week
UI/UX Design	Simple interface for semi-literate users	1 week
Backend Development	Database, API for USSD/SMS	2 weeks
Frontend Dev	Web + offline-capable mobile app (PWA)	2 weeks
USSD/SMS Setup	Integration with local SMS/USSD aggregator	1 week
Testing & Pilot	Pilot in one village with real users	1 week
Launch	Scale to more groups & regions	Ongoing
4. Tools & Technologies

    Frontend: React, React Native / Flutter

    Backend: Django / Node.js

    Database: PostgreSQL / SQLite for offline mode

    SMS/USSD Gateway: Africa’s Talking, Twilio, or Tanzanian telcos

    Hosting: DigitalOcean / AWS (lightweight VPS)

📄 Software Requirements Specification (SRS)
1. Introduction
1.1 Purpose

To enable rural savings groups to digitally manage contributions, loans, and member records, while supporting low-tech users via SMS and USSD.
1.2 Scope

The system will:

    Record savings and loan transactions.

    Automate interest calculations.

    Support member queries via USSD/SMS.

    Provide treasurer/admin dashboards.

2. System Features
2.1 Group & Member Management

    Add/edit/delete groups and members.

    Assign roles (Chairperson, Treasurer, Member).

2.2 Contribution Tracking

    Record weekly/monthly contributions.

    Apply penalties for missed payments.

2.3 Loan Issuance & Repayment

    Issue loans with set interest and repayment schedule.

    Track installments and calculate outstanding balances.

2.4 Reports & Statements

    Member balances, group cash position, interest earned.

    Exportable in PDF and CSV.

2.5 USSD/SMS Interface

    USSD Menu:

        Check Balance

        View Loan Status

        Submit Savings

        Request Loan

    SMS Commands:
    Example: SAV 5000 to submit 5,000 TZS savings

2.6 Admin Dashboard

    Add new groups, manage users, approve loans.

    View transaction logs and send bulk SMS notifications.

3. Non-Functional Requirements

    Availability: 24/7 with offline syncing support.

    Security: PIN-protected USSD sessions, encrypted database.

    Scalability: Capable of handling 10,000+ users.

    Localization: Swahili and English support.

    Resilience: Can function on low-end Android devices.

4. Architecture Overview

    Web/Mobile App: For SACCO managers and agents.

    API Layer: RESTful APIs to connect web/app/USSD/SMS.

    USSD Gateway: Africa’s Talking / telco direct integration.

    Database: PostgreSQL with periodic backups.

5. Constraints

    Many users are not literate or tech-savvy.

    Power and internet reliability may be low.

    Telco integration (USSD) requires approval and licensing.

6. Assumptions

    At least one tech-savvy leader or field officer per group.

    Groups will be willing to standardize basic data entry.

    SMS/USSD costs will be covered by the organization or donors.
