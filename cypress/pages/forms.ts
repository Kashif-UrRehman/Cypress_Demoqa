import Elements from "../framework/elements";

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

const element = new Elements();

export class Forms {
  clickPracticeForm(): void {
    element.click(selectors.practiceForm);
  }

  setFirstName(firstName: string): void {
    element.type(selectors.firstNameField, firstName);
  }

  setLastName(lastName: string): void {
    element.type(selectors.lastNameField, lastName);
  }

  setEmail(email: string): void {
    element.type(selectors.userEmailField, email);
  }

  setGenderMale(): void {
    element.check(selectors.maleRadio, { force: true });
  }

  setUserNumber(number: string): void {
    element.type(selectors.userNumberField, number);
  }

  setDateOfBirth(date: string): void {
    // Assuming the input field is associated with react-datepicker
    const dateToSet = date;

    // Click on the input field to open the date picker
    element.click(selectors.dobField);

    // Clear the existing value using invoke
    element.setElementValue(selectors.dobField, "");

    // Type the desired date

    element.type(selectors.dobField, dateToSet);
  }

  setSubject(subject: string): void {
    element.type(selectors.subjectField, `${subject}{enter}`);
  }

  setHobbies(): void {
    element.check(selectors.readingHobbies, { force: true });
  }

  uploadPicture(path: string): void {
    element.selectFile(selectors.chooseFileBtn, path);
  }

  setAddress(address: string): void {
    element.type(selectors.currentAddressField, address);
  }

  setState(state: string): void {
    // Click on the dropdown to open the options

    element.click(selectors.stateDropdown);
    element.type(selectors.stateField, `${state}{enter}`);
  }

  setCity(city: string): void {
    element.click(selectors.cityDropdown);
    element.type(selectors.cityField, `${city}{enter}`);
  }

  clickSubmit(): void {
    element.click(selectors.submitBtn);
  }

  verification(string: string): void {
    element.verifyElementContains(selectors.assertionElement, string);
  }
}
