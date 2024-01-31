export default class BasePage {
  protected getHeaderElement() {
    return cy.get("header");
  }

  protected getFooterElement() {
    return cy.get("footer");
  }
}
