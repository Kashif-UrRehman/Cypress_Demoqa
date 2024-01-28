import { any } from "cypress/types/bluebird";
import BasePage from "./basePage";

class Elements extends BasePage {
  clickWebTables(): void {
    cy.contains(".btn", "Web Tables").click();
  }

  clickBrokenLinks(): void {
    cy.contains(".btn", "Broken Links - Images").click();
  }

  clickAdd(): void {
    cy.get("#addNewRecordButton").click();
  }

  setFirstName(firstName: string): void {
    cy.get("#firstName").clear().type(firstName);
  }

  setLastName(lastName: string): void {
    cy.get("#lastName").clear().type(lastName);
  }

  setEmail(email: string): void {
    cy.get("#userEmail").type(email);
  }

  setAge(age: string): void {
    cy.get("#age").type(age);
  }

  setSalary(salary: string): void {
    cy.get("#salary").type(salary);
  }

  setDepartment(department: string): void {
    cy.get("#department").type(department);
  }

  clickSubmit(): void {
    cy.get("#submit").click();
  }

  clickEditRow(rowNo: number): void {
    cy.get(`#edit-record-${rowNo}`).click();
  }

  verifyBrokenImages(): void {
    cy.get('[src="/images/Toolsqa_1.jpg"]').each(($img: any) => {
      cy.get($img)
        .should("have.prop", "naturalWidth", 0)
        .and("have.prop", "naturalHeight", 0);
    });
  }

  assertTableRowContent(rowIndex: number, expectedData: string[]): void {
    const numberOfCellsToAssert = Math.min(expectedData.length, 6);

    cy.get(
      `.rt-tr-group:eq(${rowIndex}) .rt-td:lt(${numberOfCellsToAssert})`
    ).each(($td, index) => {
      cy.wrap($td).should("contain", expectedData[index]);
    });
  }
}

export default Elements;
