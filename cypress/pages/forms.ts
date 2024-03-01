import { ELEMENT } from "../framework/elements";

const selectors = {
  practiceForm: ".btn:contains('Practice Form')",
  firstNameField: "#firstName",
  lastNameField: "#lastName",
  userEmailField: "#userEmail",
  maleRadio: "#gender-radio-1",
  userNumberField: "#userNumber",
  dobField: "#dateOfBirthInput",
  subjectField: ".subjects-auto-complete__value-container",
  readingHobbies: "#hobbies-checkbox-2",
  chooseFileBtn: "#uploadPicture",
  currentAddressField: "#currentAddress",
  stateDropdown: "#state",
  stateField: "#react-select-3-input",
  cityDropdown: "#city",
  cityField: "#react-select-4-input",
  submitBtn: "#submit",
  assertionElement: "#example-modal-sizes-title-lg",
};

export class Forms {
  clickPracticeForm(): void {
    ELEMENT.click(selectors.practiceForm);
  }

  setFirstName(firstName: string): void {
    ELEMENT.type(selectors.firstNameField, firstName);
  }

  setLastName(lastName: string): void {
    ELEMENT.type(selectors.lastNameField, lastName);
  }

  setEmail(email: string): void {
    ELEMENT.type(selectors.userEmailField, email);
  }

  setGenderMale(): void {
    ELEMENT.check(selectors.maleRadio, { force: true });
  }

  setUserNumber(number: string): void {
    ELEMENT.type(selectors.userNumberField, number);
  }

  setDateOfBirth(date: string): void {
    // Assuming the input field is associated with react-datepicker
    const dateToSet = date;

    // Click on the input field to open the date picker
    ELEMENT.click(selectors.dobField);

    // Clear the existing value using invoke
    ELEMENT.setElementValue(selectors.dobField, "");

    // Type the desired date

    ELEMENT.type(selectors.dobField, dateToSet);
  }

  setSubject(subject: string): void {
    ELEMENT.type(selectors.subjectField, `${subject}{enter}`);
  }

  setHobbies(): void {
    ELEMENT.check(selectors.readingHobbies, { force: true });
  }

  uploadPicture(path: string): void {
    ELEMENT.selectFile(selectors.chooseFileBtn, path);
  }

  setAddress(address: string): void {
    ELEMENT.type(selectors.currentAddressField, address);
  }

  setState(state: string): void {
    // Click on the dropdown to open the options

    ELEMENT.click(selectors.stateDropdown);
    ELEMENT.type(selectors.stateField, `${state}{enter}`);
  }

  setCity(city: string): void {
    ELEMENT.click(selectors.cityDropdown);
    ELEMENT.type(selectors.cityField, `${city}{enter}`);
  }

  clickSubmit(): void {
    ELEMENT.click(selectors.submitBtn);
  }

  verification(string: string): void {
    ELEMENT.verifyElementContains(selectors.assertionElement, string);
  }
}
