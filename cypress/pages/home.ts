import { ELEMENT } from "../framework/elements";

const selector = 'div[class="card mt-4 top-card"]';

export class MainPage {
  protected getHeaderElement() {
    return cy.get("header");
  }

  protected getFooterElement() {
    return cy.get("footer");
  }

  clickElement(): void {
    ELEMENT.clickElementAtIndex(selector, 0);
  }

  clickForms(): void {
    ELEMENT.clickElementAtIndex(selector, 1);
  }

  clickWidgets(): void {
    ELEMENT.clickElementAtIndex(selector, 3);
  }

  clickInteractions(): void {
    ELEMENT.clickElementAtIndex(selector, 4);
  }
}
