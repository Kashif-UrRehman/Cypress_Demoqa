import Elements from "../framework/elements";

const selector = 'div[class="card mt-4 top-card"]';

const elements = new Elements();

export class MainPage {
  protected getHeaderElement() {
    return cy.get("header");
  }

  protected getFooterElement() {
    return cy.get("footer");
  }

  clickElement(): void {
    elements.clickElementAtIndex(selector, 0);
  }

  clickForms(): void {
    elements.clickElementAtIndex(selector, 1);
  }

  clickWidgets(): void {
    elements.clickElementAtIndex(selector, 3);
  }

  clickInteractions(): void {
    elements.clickElementAtIndex(selector, 4);
  }
}
