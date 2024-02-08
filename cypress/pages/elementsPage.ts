import BasePage from "./basePage";
import Elements from "./elements";

const webTables = new Elements(".btn:contains('Web Tables')");
const brokenLinks = new Elements(".btn:contains('Broken Links - Images')");
const addRecordBtn = new Elements("#addNewRecordButton");
const firstNameField = new Elements("#firstName");
const lastNameField = new Elements("#lastName");
const userEmailField = new Elements("#userEmail");
const ageField = new Elements("#age");
const salaryField = new Elements("#salary");
const departmentField = new Elements("#department");
const submitField = new Elements("#submit");
const imageElement = new Elements('[src="/images/Toolsqa_1.jpg"]');

const tableRow = new Elements(".rt-tr-group");

class ElementsPage extends BasePage {
  clickWebTables(): void {
    webTables.click();
  }

  clickBrokenLinks(): void {
    brokenLinks.click();
  }

  clickAdd(): void {
    addRecordBtn.click();
  }

  setFirstName(firstName: string): void {
    firstNameField.clear();
    firstNameField.type(firstName);
  }

  setLastName(lastName: string): void {
    lastNameField.clear();
    lastNameField.type(lastName);
  }

  setEmail(email: string): void {
    userEmailField.clear();
    userEmailField.type(email);
  }

  setAge(age: string): void {
    ageField.type(age);
  }

  setSalary(salary: string): void {
    salaryField.type(salary);
  }

  setDepartment(department: string): void {
    departmentField.type(department);
  }

  clickSubmit(): void {
    submitField.click();
  }

  clickEditRow(rowNo: number): void {
    cy.get(`#edit-record-${rowNo}`).click();
  }

  verifyBrokenImages(): void {
    imageElement.verifyImageProperties();
  }

  assertTableRowContent(rowIndex: number, expectedData: string[]): void {
    tableRow.verifyTableRowContent(rowIndex, expectedData);
  }
}

export default ElementsPage;
