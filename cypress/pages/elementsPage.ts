import Elements from "../framework/elements";

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

const element = new Elements();

export class ElementsPage {
  clickWebTables(): void {
    element.click(selectors.webTables);
  }

  clickBrokenLinks(): void {
    element.click(selectors.brokenLinks);
  }

  clickAdd(): void {
    element.click(selectors.addRecordBtn);
  }

  setFirstName(firstName: string): void {
    element.clear(selectors.firstNameField);
    element.type(selectors.firstNameField, firstName);
  }

  setLastName(lastName: string): void {
    element.clear(selectors.lastNameField);
    element.type(selectors.lastNameField, lastName);
  }

  setEmail(email: string): void {
    element.clear(selectors.userEmailField);
    element.type(selectors.userEmailField, email);
  }

  setAge(age: string): void {
    element.type(selectors.ageField, age);
  }

  setSalary(salary: string): void {
    element.type(selectors.salaryField, salary);
  }

  setDepartment(department: string): void {
    element.type(selectors.departmentField, department);
  }

  clickSubmit(): void {
    element.click(selectors.submitField);
  }

  clickEditRow(rowNo: number): void {
    cy.get(`#edit-record-${rowNo}`).click();
  }

  verifyBrokenImages(): boolean {
    const result = element.verifyImageProperties(selectors.imageElement);
    return result;
  }

  assertTableRowContent(rowIndex: number, expectedData: string[]): void {
    element.verifyTableRowContent(selectors.tableRow, rowIndex, expectedData);
  }
}
