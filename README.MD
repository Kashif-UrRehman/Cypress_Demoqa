# Cypress DemoQA Assignment

## Introduction

This repository contains a Cypress test suite for the DemoQA website. The suite covers various scenarios to validate the functionality of the application.

This also repository contains Cypress tests for API testing. The tests cover scenarios related to user account creation, adding a list of books, and removing one of the added books.

## Web Test Scenarios

1. **Verify user can enter new data into table**

   This test verifies that a user can add new data into a table and asserts the correctness of the entered data.

2. **Verify user can edit the row in a table**

   This test checks if a user can edit a specific row in the table and asserts the correctness of the edited data.

3. **Verify broken images**

   This test navigates to the broken links section and verifies the presence of broken images.

4. **Verify user can submit the form**

   This test covers the form submission process, entering valid data, and verifying the success of the submission.

5. **Verify the Progress Bar**

   This test navigates to the Widgets section and verifies the behavior of a progress bar.

6. **Verify the Tooltip**

   This test checks the functionality of tooltips, including hovering over a button and verifying tooltip content.

7. **Verify user can drag and drop**

   This test navigates to the Interactions section and verifies the drag-and-drop functionality.

## API Test Scenarios

1. **Creation of user account:**

   - Endpoint: `POST /Account/v1/User`
   - Description: Verify the successful creation of a user account.
   - Assertions: Check the HTTP status code (201) and the username in the response.

2. **Add a list of books:**

   - Endpoint: `POST /BookStore/v1/Books`
   - Description: Verify the ability to add a list of books.
   - Assertions: Check the HTTP status code (201) for successful addition.

3. **Remove one of the added books:**
   - Endpoint: `DELETE /BookStore/v1/Book`
   - Description: Verify the successful removal of one of the added books.
   - Assertions: Check the HTTP status code (204) for successful removal.

## Test Data

Test data is stored in the `cypress/fixtures/userdata.json` file for web and `cypress/fixtures/api_data.json` for API test. Update this file with relevant data for your tests.

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Kashif-Rehman/Cypress_Demoqa_Assignment.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Cypress_Demoqa_Assignment
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Tests

1. **Run the entire test suite:**
   ```bash
   npm test
   ```
