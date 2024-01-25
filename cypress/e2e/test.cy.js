///<reference types="cypress"/>

import MainPage from "../pages/home";
import Elements from "../pages/elements";
import Forms from "../pages/forms";
import Widgets from "../pages/widgets";
import Interactions from "../pages/interactions";

describe("Assignment", () => {
  const url = "https://demoqa.com";
  const home = new MainPage();
  const elements = new Elements();
  const forms = new Forms();
  const widgets = new Widgets();
  const interactions = new Interactions();

  let userData;

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  beforeEach(() => {
    cy.visit(url);
    cy.viewport(1920, 1080);
    cy.fixture("userdata").then((data) => {
      userData = data;
    });
  });

  it("Verify user can enter new data into table", () => {
    home.clickElement();
    elements.clickWebTables();
    elements.clickAdd();
    elements.setFirstName(userData.firstName);
    elements.setLsatName(userData.lastName);
    elements.setEmail(userData.email);
    elements.setAge(userData.age);
    elements.setSalary(userData.salary);
    elements.setDepartment(userData.department);
    elements.clickSubmit();

    //helper method for assertions
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
    elements.setLsatName(userData.editLastName);
    elements.clickSubmit();

    //helper method for assertions
    elements.assertTableRowContent(1, [
      userData.editFirstName,
      userData.editLastName,
    ]);
  });

  it("verify broken images", () => {
    home.clickElement();
    elements.clickBrokenLinks();
    elements.verifyBrokenImages();
  });

  it("Verify user can submit the form", () => {
    home.clickForms();
    forms.clickPracticeForm();

    forms.setFirstName(userData.formFirstName);
    forms.setLastName(userData.formLastName);
    forms.setEmail(userData.email);

    forms.setGenderMale();
    forms.setUserNumber(userData.userNumber);
    forms.setDateOFBirth(userData.dateOfBirth);
    forms.setSubject(userData.subjects);
    forms.setHobbies();
    forms.uploadPicture("cypress\\fixtures\\id.jpg");
    forms.setAddress(userData.currentAddress);
    forms.setState(userData.state);
    forms.setCity(userData.city);
    forms.clickSubmit();

    forms.verification();
  });

  it("Verify the Progress Bar", () => {
    home.clickWidgets();
    widgets.clickProgressBarTab();

    widgets.verifyProgressBar();
    widgets.clickStartButton();
    cy.wait(19000);

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
    cy.wait(5000);
    interactions.dragDrop();
  });
});
