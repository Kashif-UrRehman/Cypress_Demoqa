///<reference types="cypress"/>

import { MainPage } from "../pages/home";
import { ElementsPage } from "../pages/elementsPage";
import { Forms } from "../pages/forms";
import { Widgets } from "../pages/widgets";
import { Interactions } from "../pages/interactions";

describe("Assignment", () => {
  /* eslint-disable cypress/no-unnecessary-waiting */
  const url: string = "https://demoqa.com";
  const home: MainPage = new MainPage();
  const elements: ElementsPage = new ElementsPage();
  const forms: Forms = new Forms();
  const widgets: Widgets = new Widgets();
  const interactions: Interactions = new Interactions();

  let userData: any; // Use a more specific type if possible

  Cypress.on("uncaught:exception", (_err, _runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });

  beforeEach(() => {
    cy.visit(url);
    cy.viewport(1920, 1080);
    cy.fixture("userdata").then((data: any) => {
      userData = data;
    });
  });

  it("Verify user can enter new data into table", () => {
    home.clickElement();
    elements.clickWebTables();
    elements.clickAdd();
    elements.setFirstName(userData.firstName);
    elements.setLastName(userData.lastName);
    elements.setEmail(userData.email);
    elements.setAge(userData.age);
    elements.setSalary(userData.salary);
    elements.setDepartment(userData.department);
    elements.clickSubmit();

    // helper method for assertions
    elements.assertTableRowContent(3, [
      userData.firstName,
      userData.lastName,
      userData.age,
      userData.email,
      userData.salary,
      userData.department,
    ]);
  });

  it("Verify user can edit the row in a table", () => {
    home.clickElement();
    elements.clickWebTables();
    elements.clickEditRow(2);

    elements.setFirstName(userData.editFirstName);
    elements.setLastName(userData.editLastName);
    elements.clickSubmit();

    // helper method for assertions
    elements.assertTableRowContent(1, [
      userData.editFirstName,
      userData.editLastName,
    ]);
  });

  it("verify broken images", () => {
    home.clickElement();
    elements.clickBrokenLinks();
    //assertions
    cy.wrap(elements.verifyBrokenImages()).should("be.true");
  });

  it("Verify user can submit the form", () => {
    home.clickForms();
    forms.clickPracticeForm();

    forms.setFirstName(userData.formFirstName);
    forms.setLastName(userData.formLastName);
    forms.setEmail(userData.email);

    forms.setGenderMale();
    forms.setUserNumber(userData.userNumber);
    forms.setDateOfBirth(userData.dateOfBirth);
    forms.setSubject(userData.subjects);
    forms.setHobbies();
    forms.uploadPicture("cypress/fixtures/id.jpg");
    forms.setAddress(userData.currentAddress);
    forms.setState(userData.state);
    forms.setCity(userData.city);
    forms.clickSubmit();

    //assertions
    forms.verification("Thanks");
  });

  it("Verify the Progress Bar", () => {
    home.clickWidgets();
    widgets.clickProgressBarTab();

    widgets.verifyProgressBar();
    widgets.clickStartButton();

    widgets.verifyBarFullProgress();
    widgets.verifyBarColor(userData.greenColor);
  });

  it("Verify the Tooltip", () => {
    home.clickWidgets();
    widgets.clickToolTipsTab();

    // Hover over the button
    widgets.hoverButton();

    // Wait for the tooltip to appear (adjust the timeout if needed)
    widgets.checkToolTip();

    // Assert the tooltip content or any other properties
    widgets.verifyTipContent();
  });

  it("Verify user can drag and drop", () => {
    home.clickInteractions();
    interactions.clickDroppable();
    interactions.dragDrop();
    // assertions
    interactions.verifyDropBoxColor(userData.dropBoxColor);
  });

  it("Drag and drop without library", () => {
    home.clickInteractions();
    interactions.clickDroppable();
    interactions.dragWithoutLibrary();
  });

  it("Verify user can enter multiple records into table", () => {
    cy.fixture("formData").then((formData) => {
      home.clickElement();
      elements.clickWebTables();

      // Iterate over each data entry
      formData.forEach((data: any, index: any) => {
        // test logic here using the 'data' object

        elements.clickAdd();
        elements.setFirstName(data.firstName);
        elements.setLastName(data.lastName);
        elements.setEmail(data.email);
        elements.setAge(data.age);
        elements.setSalary(data.salary);
        elements.setDepartment(data.department);
        elements.clickSubmit();

        // cy.log(`Test iteration ${index + 1}`);
        // helper method for assertions

        elements.assertTableRowContent(index + 3, [
          data.firstName,
          data.lastName,
          data.age,
          data.email,
          data.salary,
          data.department,
        ]);
      });
    });
  });
});
