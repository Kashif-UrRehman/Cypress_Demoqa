import { ELEMENT } from "../framework/elements";

const selectors = {
  webTables: ".btn:contains('Web Tables')",
  brokenLinks: ".btn:contains('Broken Links - Images')",
  addRecordBtn: "#addNewRecordButton",
  firstNameField: "#firstName",
  lastNameField: "#lastName",
  userEmailField: "#userEmail",
  ageField: "#age",
  salaryField: "#salary",
  departmentField: "#department",
  submitField: "#submit",
  imageElement: '[src="/images/Toolsqa_1.jpg"]',
  tableRow: ".rt-tr-group",
};

export class ElementsPage {
  clickWebTables(): void {
    ELEMENT.click(selectors.webTables);
  }

  clickBrokenLinks(): void {
    ELEMENT.click(selectors.brokenLinks);
  }

  clickAdd(): void {
    ELEMENT.click(selectors.addRecordBtn);
  }

  setFirstName(firstName: string): void {
    ELEMENT.clear(selectors.firstNameField);
    ELEMENT.type(selectors.firstNameField, firstName);
  }

  setLastName(lastName: string): void {
    ELEMENT.clear(selectors.lastNameField);
    ELEMENT.type(selectors.lastNameField, lastName);
  }

  setEmail(email: string): void {
    ELEMENT.clear(selectors.userEmailField);
    ELEMENT.type(selectors.userEmailField, email);
  }

  setAge(age: string): void {
    ELEMENT.type(selectors.ageField, age);
  }

  setSalary(salary: string): void {
    ELEMENT.type(selectors.salaryField, salary);
  }

  setDepartment(department: string): void {
    ELEMENT.type(selectors.departmentField, department);
  }

  clickSubmit(): void {
    ELEMENT.click(selectors.submitField);
  }

  clickEditRow(rowNo: number): void {
    cy.get(`#edit-record-${rowNo}`).click();
  }

  verifyBrokenImages(): boolean {
    const result = ELEMENT.verifyImageProperties(selectors.imageElement);
    return result;
  }

  assertTableRowContent(rowIndex: number, expectedData: string[]): void {
    ELEMENT.verifyTableRowContent(selectors.tableRow, rowIndex, expectedData);
  }
}
