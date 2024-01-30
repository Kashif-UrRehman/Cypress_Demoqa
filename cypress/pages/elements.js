class Elements {
  clickWebTables() {
    cy.contains(".btn", "Web Tables").click();
  }
  clickBrokenLinks() {
    cy.contains(".btn", "Broken Links - Images").click();
  }

  clickAdd() {
    cy.get("#addNewRecordButton").click();
  }
  setFirstName(firstName) {
    cy.get("#firstName").clear();
    cy.get("#firstName").type(firstName);
  }
  setLastName(lastName) {
    cy.get("#lastName").clear();
    cy.get("#lastName").type(lastName);
  }
  setEmail(email) {
    cy.get("#userEmail").type(email);
  }
  setAge(age) {
    cy.get("#age").type(age);
  }
  setSalary(salary) {
    cy.get("#salary").type(salary);
  }
  setDepartment(department) {
    cy.get("#department").type(department);
  }
  clickSubmit() {
    cy.get("#submit").click();
  }

  clickEditRow(rowNo) {
    cy.get(`#edit-record-${rowNo}`).click();
  }

  verifyBrokenImages() {
    cy.get('[src="/images/Toolsqa_1.jpg"]').each(($img) => {
      cy.get($img)
        .should("have.prop", "naturalWidth", 0)
        .and("have.prop", "naturalHeight", 0);
    });
  }

  assertTableRowContent(rowIndex, expectedData) {
    const numberOfCellsToAssert = Math.min(expectedData.length, 6);

    cy.get(
      `.rt-tr-group:eq(${rowIndex}) .rt-td:lt(${numberOfCellsToAssert})`
    ).each(($td, index) => {
      cy.wrap($td).should("contain", expectedData[index]);
    });
  }
}

export default Elements;
