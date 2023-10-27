# gov.pl - Website Automation Project Documentation


## Table of Contents
1. Introduction

- Project Purpose
- Project Scope
- Project Participants

2. Test Environment

- Environment Configuration
- System Requirements
- Testing Tools

3. Tested Features

- List of Features to Be Tested

4. Test Scenarios

- Description of Test Scenarios
- Test Steps
- Expected Results

5. Reports and Test Results

- Report Format
- Testing Criteria
- Bug Tracking

6. Test Management

- Test Schedule
- Bug Management
- Documentation of Changes

## 1. Introduction
1.1 Project Purpose
The purpose of the gov.pl website automation project is to test and ensure the quality of key functions on the gov.pl website. The project aims to automate testing to facilitate the testing process and maintain test consistency as changes are introduced to the website.

1.2 Project Scope
The project scope includes testing selected functions on the gov.pl website, including search engine tests on the website, verification of tab functionality. The project does not cover unit testing or performance testing.

1.3 Project Participants

- Artiom Lebec

## 2. Test Environment
2.1 Environment Configuration
The test environment will be configured on the following platforms:

- laptop, win11, intel core i5, Geforce GTX 1050
- website: Google Chrome

2.2 System Requirements
To run automated tests, the system must meet the following minimum requirements:

- For Windows:

Processor: Intel Pentium 4 processor or equivalent
RAM: At least 2 GB of RAM
Disk Space: At least 16 GB of free disk space
Operating System: Windows 7 or newer
Graphics Card: Graphics card compatible with DirectX 9 or newer

- For macOS:

Processor: Intel Core 2 Duo or newer
RAM: At least 2 GB of RAM
Disk Space: At least 16 GB of free disk space
Operating System: macOS 10.11 (El Capitan) or newer

- For Linux:

Processor: Intel Pentium 4 processor or equivalent
RAM: At least 2 GB of RAM
Disk Space: At least 16 GB of free disk space
Operating System: Linux distribution that supports Chrome


2.3 Testing Tools
The following tools will be used for test automation:

- Playwright
- Version 1.39.0

## 3. Tested Features
The list of features on the gov.pl website to be tested includes:

- search engine on the gov.pl website
- tabs:
    - Dla Obywatela
    - Dla Przedsiębiorcy
    - Dla Urzędnika
    - Dla Rolnika
- login

## 4. Test Scenarios
4.1 Description of Test Scenarios

Test scenarios will be developed for each of the tested features. Each scenario will include test steps and expected results.

4.2 Sample Test Scenario

- Description: Open the Chrome browser, navigate to the gov.pl domain, and verify that you are on the homepage.

- Scenario: Open Chrome Browser, Navigate to gov.pl Domain, and Verify You Are on the Homepage

- Test Steps:

I. Launch the Google Chrome web browser.

II. In the browser's address bar, type "gov.pl" and press Enter.

III. Wait for the page to load.

IV. Verify that the current URL is "https://www.gov.pl/" to confirm that you are on the homepage of the gov.pl website.

- Expected Results:

At step 4, the current URL should match "https://www.gov.pl/," indicating that you have successfully landed on the homepage of the gov.pl website. 

### 4.3 Explanation for written tests
Currently, 23 tests have been written, grouped for the main page, tabs, and login. 

On the main page, I verified whether entering the gov.pl address correctly opens the page.

 Next, I checked if the tabs "For Citizen," "For Entrepreneur," "For Official," and "For Farmer" are visible and functioning correctly. I also verified if the links available there correctly redirect to the next page. 
 
 I encountered an issue with the attachment test. I wonder if there might be some security measures preventing the test, or if I simply lack the knowledge to complete this test within the allotted time. 
 
 Each test is independent of the others, and each can be executed separately, not depending on the previous one. Collectively, they serve as a reliable source of confirmation that these functionalities are working correctly.

## 5. Reports and Test Results
5.1 Report Format
Test result reports will be prepared in HTML format and will contain detailed information about the test progress and any encountered issues.

5.2 Testing Criteria
Tests will be considered successful if the following criteria are met:

Each test concludes with success (all steps are successfully completed).

### 5.3 The report is available in the folder: test-results

## 6. Test Management
6.1 Test Schedule

6.2 Bug Management


6.3 Documentation of Changes
