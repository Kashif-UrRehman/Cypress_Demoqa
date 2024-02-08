import BasePage from "./basePage";
import Elements from "./elements";

const practiceForm = new Elements(".btn:contains('Practice Form')");
const firstNameField = new Elements("#firstName");
const lastNameField = new Elements("#lastName");
const userEmailField = new Elements("#userEmail");
const maleRadio = new Elements("#gender-radio-1");
const userNumberField = new Elements("#userNumber");
const dobField = new Elements("#dateOfBirthInput");
const subjectField = new Elements(".subjects-auto-complete__value-container");
const readingHobbies = new Elements("#hobbies-checkbox-2");
const chooseFileBtn = new Elements("#uploadPicture");
const currentAddressField = new Elements("#currentAddress");
const stateDropdown = new Elements("#state");
const stateField = new Elements("#react-select-3-input");
const cityDropdown = new Elements("#city");
const cityField = new Elements("#react-select-4-input");
const submitBtn = new Elements("#submit");
const assertionElement = new Elements("#example-modal-sizes-title-lg");

class Forms extends BasePage {
  clickPracticeForm(): void {
    practiceForm.click();
  }

  setFirstName(firstName: string): void {
    firstNameField.type(firstName);
  }

  setLastName(lastName: string): void {
    lastNameField.type(lastName);
  }

  setEmail(email: string): void {
    userEmailField.type(email);
  }

  setGenderMale(): void {
    maleRadio.check({ force: true });
  }

  setUserNumber(number: string): void {
    userNumberField.type(number);
  }

  setDateOfBirth(date: string): void {
    // Assuming the input field is associated with react-datepicker
    const dateToSet = date;

    // Click on the input field to open the date picker
    dobField.click();

    // Clear the existing value using invoke
    dobField.setElementValue("");

    // Type the desired date
    dobField.type(dateToSet);
  }

  setSubject(subject: string): void {
    subjectField.type(`${subject}{enter}`);
  }

  setHobbies(): void {
    readingHobbies.check({ force: true });
  }

  uploadPicture(path: string): void {
    chooseFileBtn.selectFile(path);
  }

  setAddress(address: string): void {
    currentAddressField.type(address);
  }

  setState(state: string): void {
    // Click on the dropdown to open the options
    stateDropdown.click();
    stateField.type(`${state}{enter}`);
  }

  setCity(city: string): void {
    cityDropdown.click();
    cityField.type(`${city}{enter}`);
  }

  clickSubmit(): void {
    submitBtn.click();
  }

  verification(string: string): void {
    assertionElement.verifyElementContains(string);
  }
}

export default Forms;
