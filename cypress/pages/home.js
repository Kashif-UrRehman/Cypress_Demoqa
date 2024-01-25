class MainPage {
  clickElement() {
    this.clickCard(0);
  }

  clickForms() {
    this.clickCard(1);
  }

  clickWidgets() {
    this.clickCard(3);
  }

  clickInteractions() {
    this.clickCard(4);
  }

  clickCard(index) {
    cy.get('div[class="card mt-4 top-card"]:eq(' + index + ")").click();
  }
}

export default MainPage;
