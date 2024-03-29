# Cypress DemoQA

## Introduction

This repository contains a Cypress test suite for the DemoQA website. The suite covers various scenarios to validate the functionality of the application.

This repository also contains Cypress tests for API testing. The tests cover scenarios related to get token, user account creation, adding a list of books, and removing one of the added books.

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

7. **Verify user can drag and drop with Plugin**

   This test navigates to the Interactions section and verifies the drag-and-drop functionality with the help of Plugin.

8. **Verify user can drag and drop without Plugin**

   This test navigates to the Interactions section and verifies the drag-and-drop functionality without Plugin.

9. **Verify user can enter multiple records into table**

   This test verifies that a user can multiple new records into a table and asserts the correctness of the entered data.

## API Test Scenarios

1. **Get Token**

   - Description: This test verifies the generation of an authentication token by sending a POST request to the specified endpoint.
   - Endpoint: `https://demoqa.com/Account/v1/GenerateToken`
   - Expected Behavior:
     - Response status is `Success`.
     - Authentication token is received and stored for future requests.

2. **Creation of User Account**

   - Description: This test verifies the creation of a user account by sending a POST request to the specified endpoint.
   - Endpoint: `https://demoqa.com/Account/v1/User`
   - Expected Behavior:
     - If the user account is successfully created, the response status is `201` and the username matches the provided user.
     - If the user already exists, the response status is `406` and an appropriate error message is received.

3. **Add a List of Books**

   - Description: This test verifies the addition of books to the bookstore by sending a POST request to the specified endpoint.
   - Endpoint: `https://demoqa.com/BookStore/v1/Books`
   - Expected Behavior:
     - The response status is `201`, indicating successful addition of books to the bookstore.

4. **Remove One of the Added Books**
   - Description: This test verifies the removal of a book from the bookstore by sending a DELETE request to the specified endpoint.
   - Endpoint: `https://demoqa.com/BookStore/v1/Book`
   - Expected Behavior:
     - The response status is `204`, indicating successful removal of the book from the bookstore.

### Environment Variables

- `USER`: Username for authentication.
- `PASSWORD`: Password for authentication.

## Test Data

Test data is stored in the `cypress/fixtures/userdata.json` file for web and `cypress/fixtures/api_data.json` for API test. Update this file with relevant data for your tests.

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Kashif-UrRehman/Cypress_Demoqa.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Cypress_Demoqa
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Create .env file from .env.sample**

## Running the Tests

1. **Run the entire test suite:**
   ```bash
   npm test
   ```
