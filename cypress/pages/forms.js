class Forms {
  clickPracticeForm() {
    cy.contains(".btn", "Practice Form").click();
  }
  setFirstName(firstName) {
    cy.get("#firstName").type(firstName);
  }
  setLastName(lastName) {
    cy.get("#lastName").type(lastName);
  }

  setEmail(email) {
    cy.get("#userEmail").type(email);
  }

  setGenderMale() {
    cy.get("#gender-radio-1").check({ force: true });
  }

  setUserNumber(number) {
    cy.get("#userNumber").type(number);
  }

  setDateOfBirth(date) {
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

  setSubject(subject) {
    cy.get(".subjects-auto-complete__value-container").type(
      `${subject}{enter}`
    );
  }

  setHobbies() {
    cy.get("#hobbies-checkbox-2").check({ force: true });
  }

  uploadPicture(path) {
    cy.get("#uploadPicture").selectFile(path);
  }

  setAddress(address) {
    cy.get("#currentAddress").type(address);
  }

  setState(state) {
    cy.get("#state").click(); // Click on the dropdown to open the options

    cy.get("#react-select-3-input").type(`${state}{enter}`);
  }

  setCity(city) {
    cy.get("#city").click();

    cy.get("#react-select-4-input").type(`${city}{enter}`);
  }

  clickSubmit() {
    cy.get("#submit").click();
  }

  verification() {
    cy.get("#example-modal-sizes-title-lg").should("contain", "Thanks");
  }
}

export default Forms;
