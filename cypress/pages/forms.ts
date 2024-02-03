import BasePage from "./basePage";

class Forms extends BasePage {
  clickPracticeForm(): void {
    cy.contains(".btn", "Practice Form").click();
  }

  setFirstName(firstName: string): void {
    cy.get("#firstName").type(firstName);
  }

  setLastName(lastName: string): void {
    cy.get("#lastName").type(lastName);
  }

  setEmail(email: string): void {
    cy.get("#userEmail").type(email);
  }

  setGenderMale(): void {
    cy.get("#gender-radio-1").check({ force: true });
  }

  setUserNumber(number: string): void {
    cy.get("#userNumber").type(number);
  }

  setDateOfBirth(date: string): void {
    // Assuming the input field is associated with react-datepicker
    const dateToSet = date;

    // Click on the input field to open the date picker
    cy.get("#dateOfBirthInput").click();

    // Clear the existing value using invoke
    cy.get("#dateOfBirthInput").invoke("val", "");

    // Type the desired date
    cy.get("#dateOfBirthInput").type(dateToSet);

    cy.get("body").click();
  }

  setSubject(subject: string): void {
    cy.get(".subjects-auto-complete__value-container").type(
      `${subject}{enter}`
    );
  }

  setHobbies(): void {
    cy.get("#hobbies-checkbox-2").check({ force: true });
  }

  uploadPicture(path: string): void {
    cy.get("#uploadPicture").selectFile(path);
  }

  setAddress(address: string): void {
    cy.get("#currentAddress").type(address);
  }

  setState(state: string): void {
    cy.get("#state").click(); // Click on the dropdown to open the options

    cy.get("#react-select-3-input").type(`${state}{enter}`);
  }

  setCity(city: string): void {
    cy.get("#city").click();

    cy.get("#react-select-4-input").type(`${city}{enter}`);
  }

  clickSubmit(): void {
    cy.get("#submit").click();
  }

  verification(): void {
    cy.get("#example-modal-sizes-title-lg").should("contain", "Thanks");
  }
}

export default Forms;
