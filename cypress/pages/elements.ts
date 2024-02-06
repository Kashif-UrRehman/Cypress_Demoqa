import { ElementsInterface, CheckOptions } from "./elementsInterface";
import BasePage from "./basePage";

class Elements extends BasePage implements ElementsInterface {
  private element: string;

  constructor(selector: string) {
    super();
    this.element = selector;
  }

  getElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.element);
  }

  setElementValue(value: string): void {
    try {
      this.getElement().invoke("val", value);
    } catch (error) {
      console.error(
        `Failed to set value for element with selector ${this.element}:`,
        (error as Error).message
      );
    }
  }

  click(): void {
    try {
      this.getElement().click();
    } catch (error) {
      console.error("Failed to click element:", error);
    }
  }

  check(options?: CheckOptions): void {
    try {
      this.getElement().check(options);
    } catch (error) {
      console.error("Failed to check element:", (error as Error).message);
    }
  }

  type(text: string) {
    try {
      this.getElement().type(text);
    } catch (error) {
      console.error("Failed to type text into element:", error);
    }
  }

  clear() {
    try {
      this.getElement().clear();
    } catch (error) {
      console.error("Failed to clear element text:", error);
    }
  }

  shouldHaveText(text: string) {
    try {
      this.getElement().should("have.text", text);
    } catch (error: any) {
      console.error(`Element did not have expected text "${text}":`, error);
    }
  }

  verifyImageProperties(): void {
    try {
      this.getElement().each(($img: any) => {
        cy.get($img)
          .should("have.prop", "naturalWidth", 0)
          .and("have.prop", "naturalHeight", 0);
      });
    } catch (error) {
      console.error("Failed:", error);
    }
  }
  selectFile(path: string): void {
    try {
      this.getElement().selectFile(path);
    } catch (error) {
      console.error(
        `Failed to select file for element with selector ${this.element}:`,
        (error as Error).message
      );
    }
  }

  assertElementContains(expectedText: string): void {
    try {
      this.getElement().should("contain", expectedText);
    } catch (error) {
      console.error(
        `Assertion failed: Element with selector ${this.element} does not contain "${expectedText}":`,
        (error as Error).message
      );
    }
  }

  dragAndDrop(targetSelector: string, options?: CheckOptions): void {
    try {
      this.getElement().drag(targetSelector, options);
    } catch (error) {
      console.error(
        `Drag-and-drop failed: Element with selector ${this.element} could not be dragged to ${targetSelector}:`,
        (error as Error).message
      );
    }
  }

  dragDropWithoutPlugin(
    targetSelector: Cypress.Chainable<JQuery<HTMLElement>>
  ): void {
    try {
      this.getElement().trigger("mousedown", { which: 1 });

      // Extract the HTML element from the Cypress.Chainable<JQuery<HTMLElement>>
      targetSelector.then((targetElement) => {
        cy.wrap(targetElement).trigger("mousemove");
        cy.wrap(targetElement).trigger("mouseup", { force: true });
      });
    } catch (error) {
      console.error(
        `Drag-and-drop failed: Element with selector ${this.element} could not be dragged to ${targetSelector}:`,
        (error as Error).message
      );
    }
  }

  triggerMouseOver(): void {
    try {
      this.getElement().trigger("mouseover");
    } catch (error) {
      console.error(
        `Mouseover failed for element with selector ${this.element}:`,
        (error as Error).message
      );
    }
  }

  assertTooltipVisible(customLocator?: string): void {
    try {
      const locator = customLocator || '[role="tooltip"]';
      cy.get(locator).should("be.visible");
    } catch (error) {
      console.error(
        `Assertion failed: Tooltip for element with selector ${this.element} is not visible:`,
        (error as Error).message
      );
    }
  }

  assertTooltipContent(expectedContent: string, customLocator?: string): void {
    try {
      const locator = customLocator || '[role="tooltip"]';
      cy.get(locator).should("have.text", expectedContent);
    } catch (error) {
      console.error(
        `Assertion failed: Tooltip content for element with selector ${this.element} does not match:`,
        (error as Error).message
      );
    }
  }

  assertElementExists(): void {
    try {
      this.getElement().should("exist");
    } catch (error) {
      console.error(
        `Assertion failed: Element does not exist:`,
        (error as Error).message
      );
    }
  }

  assertElementCss(propertyName: string, expectedValue: string): void {
    try {
      this.getElement()
        .should("have.css", propertyName)
        .and("equal", expectedValue);
    } catch (error) {
      console.error(
        `CSS property assertion failed: ${propertyName} for element with selector does not match:`,
        (error as Error).message
      );
    }
  }

  clickElementAtIndex(index: number): void {
    try {
      const selector = `${this.element}:eq(${index})`;
      cy.get(selector).click();
    } catch (error) {
      console.error(
        `Click action failed for element at index ${index} with selector ${this.element}:`,
        (error as Error).message
      );
    }
  }

  // private getTableCells(rowIndex: number, numberOfCellsToAssert: number) {
  //   return cy.get(
  //     `${this.element} .rt-tr-group:eq(${rowIndex}) .rt-td:lt(${numberOfCellsToAssert})`
  //   );
  // }

  // assertTableRowContent(rowIndex: number, expectedData: string[]): void {
  //   const numberOfCellsToAssert = Math.min(expectedData.length, 6);

  //   this.getTableCells(rowIndex, numberOfCellsToAssert).each(($td, index) => {
  //     cy.wrap($td).should("contain", expectedData[index]);
  //   });
  // }
}

export default Elements;
