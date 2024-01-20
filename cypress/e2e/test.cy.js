///<reference types="cypress"/>
import "@4tw/cypress-drag-drop";
describe("Assignment spec", () => {
  const url = "https://demoqa.com";
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  beforeEach(() => {
    cy.visit(url);
    cy.viewport(1920, 1080);
  });

  it("Verify user can enter new data into table", () => {
    cy.get(".category-cards > :nth-child(1)").click();
    cy.get(":nth-child(1) > .element-list > .menu-list > #item-3").click();
    cy.get("#addNewRecordButton").click();
    cy.get("#firstName").type("Alden");
    cy.get("#lastName").type("Cantrell");
    cy.get("#userEmail").type("test@test.com");
    cy.get("#age").type(32);
    cy.get("#salary").type(12345);
    cy.get("#department").type("QA");
    cy.get("#submit").click();

    cy.get(".rt-tr-group:eq(3) .rt-td:eq(0)").should("contain", "Alden");
    cy.get(".rt-tr-group:eq(3) .rt-td:eq(1)").should("contain", "Cantrell");
    cy.get(".rt-tr-group:eq(3) .rt-td:eq(2)").should("contain", "32");
    cy.get(".rt-tr-group:eq(3) .rt-td:eq(3)").should(
      "contain",
      "test@test.com"
    );
    cy.get(".rt-tr-group:eq(3) .rt-td:eq(4)").should("contain", "12345");
    cy.get(".rt-tr-group:eq(3) .rt-td:eq(5)").should("contain", "QA");
  });

  it("Verify user can edit the row in a table", () => {
    cy.get(".category-cards > :nth-child(1)").click();
    cy.get(":nth-child(1) > .element-list > .menu-list > #item-3").click();
    cy.get("#edit-record-2").click();

    cy.get("#firstName").clear().type("Aldren");
    cy.get("#lastName").clear().type("BV");
    cy.get("#submit").click();

    cy.get(".rt-tr-group:eq(1) .rt-td:eq(0)").should("contain", "Aldren");
    cy.get(".rt-tr-group:eq(1) .rt-td:eq(1)").should("contain", "BV");
  });

  it("verify broken images", () => {
    cy.get(".category-cards > :nth-child(1)").click();
    cy.get(":nth-child(1) > .element-list > .menu-list > #item-6").click();

    cy.get('[src="/images/Toolsqa_1.jpg"]').each(($img) => {
      cy.get($img)
        .should("have.prop", "naturalWidth", 0)
        .and("have.prop", "naturalHeight", 0);
    });
  });

  it("Verify user can submit the form", () => {
    cy.get(".category-cards > :nth-child(2)").click();
    cy.get(":nth-child(2) > .element-list > .menu-list > #item-0").click();
    cy.get("#firstName").type("Gerimedica");
    cy.get("#lastName").type("BV");
    cy.get("#userEmail").type("test@test.com");

    // Gender

    cy.get(
      "#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label"
    ).click();

    cy.get("#userNumber").type("0123456789");

    // Assuming the input field is associated with react-datepicker
    const dateToSet = "15 Jan 1990";

    // Click on the input field to open the date picker
    cy.get("#dateOfBirthInput").click();

    // Clear the existing value using invoke
    cy.get("#dateOfBirthInput").invoke("val", "");

    // Type the desired date
    cy.get("#dateOfBirthInput").type(dateToSet);

    cy.get("body").click();

    cy.get(".subjects-auto-complete__value-container").type(
      "computer science{enter}"
    );

    cy.get("body").click();

    cy.get(
      "#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label"
    ).click();

    cy.get("#uploadPicture").selectFile("cypress\\fixtures\\id.jpg");

    cy.get("#currentAddress").type("Netherlands");

    cy.get("#state").click(); // Click on the dropdown to open the options

    // select "NCR"
    cy.get("#react-select-3-input").type("NCR{enter}");

    cy.get("#city").click();

    cy.get("#react-select-4-input").type("Delhi{enter}");
    cy.get("#submit").click();

    cy.get("#example-modal-sizes-title-lg").should("contain", "Thanks");
  });

  it("Verify the Progress Bar", () => {
    cy.get(".category-cards > :nth-child(4)").click();
    cy.get(":nth-child(4) > .element-list > .menu-list > #item-4").click();

    cy.get(".progress-bar").should("exist");
    cy.get(".mt-3").click();
    cy.wait(15000);

    const color = "rgb(40, 167, 69)";

    cy.get(".progress-bar")
      .should("have.css", "background-color")
      .and("equal", color);
    // cy.get(".progress-bar")
    //   .invoke("css", "background-color")
    //   .then((color) => {
    //     console.log("Progress bar color:", color);
    //   });
  });

  it("Verify the Tooltip", () => {
    cy.get(".category-cards > :nth-child(4)").click();
    cy.get(":nth-child(4) > .element-list > .menu-list > #item-6").click();

    // Hover over the button
    cy.get("#toolTipButton").trigger("mouseover");

    // Wait for the tooltip to appear (adjust the timeout if needed)
    cy.get('[role="tooltip"]').should("be.visible");

    // Assert the tooltip content or any other properties
    cy.get('[role="tooltip"]').should(
      "have.text",
      "You hovered over the Button"
    );
  });

  it.only("Verify user can drag and drop", () => {
    cy.get(".category-cards > :nth-child(5)").click();
    cy.get(":nth-child(5) > .element-list > .menu-list > #item-3").click();
    cy.wait(5000);
    cy.get("#draggable").drag("#simpleDropContainer > #droppable", {
      force: true,
    });
  });
});
