import { ElementsInterface, CheckOptions } from "./elementsInterface";
import BasePage from "./basePage";

class Elements extends BasePage implements ElementsInterface {
  setElementValue(locator: string, value: string): void {
    try {
      cy.get(locator).invoke("val", value);
    } catch (error) {
      console.error(
        `Failed to set value for element with selector ${locator}:`,
        (error as Error).message
      );
    }
  }

  click(locator: string): void {
    try {
      cy.get(locator).click();
    } catch (error) {
      const errorMessage = (error as Error).message || "Unknown error";
      console.error(`Failed to click element: ${errorMessage}`);
    }
  }

  check(locator: string, options?: CheckOptions): void {
    try {
      cy.get(locator).check(options);
    } catch (error) {
      console.error("Failed to check element:", (error as Error).message);
    }
  }

  type(locator: string, text: string) {
    try {
      cy.get(locator).type(text);
    } catch (error) {
      console.error("Failed to type text into element:", error);
    }
  }

  clear(locator: string) {
    try {
      cy.get(locator).clear();
    } catch (error) {
      console.error("Failed to clear element text:", error);
    }
  }

  shouldHaveText(locator: string, text: string): boolean {
    let isTextPresent = false;
    try {
      cy.get(locator).should("have.text", text);
      isTextPresent = true;
    } catch (error) {
      console.error(`Element did not have expected text "${text}":`, error);
    }
    return isTextPresent;
  }

  verifyImageProperties(locator: string): void {
    try {
      cy.get(locator).each(($img: any) => {
        cy.get($img)
          .should("have.prop", "naturalWidth", 0)
          .and("have.prop", "naturalHeight", 0);
      });
    } catch (error) {
      console.error("Failed:", error);
    }
  }
  selectFile(locator: string, path: string): void {
    try {
      cy.get(locator).selectFile(path);
    } catch (error) {
      console.error(
        `Failed to select file for element with selector ${locator}:`,
        (error as Error).message
      );
    }
  }

  verifyElementContains(locator: string, expectedText: string): boolean {
    let isTextPresent = false;
    try {
      cy.get(locator).should("contain", expectedText);
      isTextPresent = true;
    } catch (error) {
      console.error(
        `Assertion failed: Element with selector ${locator} does not contain "${expectedText}":`,
        (error as Error).message
      );
    }
    return isTextPresent;
  }
  dragAndDrop(
    locator: string,
    targetSelector: string,
    options?: CheckOptions
  ): void {
    try {
      cy.get(locator).drag(targetSelector, options);
    } catch (error) {
      console.error(
        `Drag-and-drop failed: Element with selector ${locator} could not be dragged to ${targetSelector}:`,
        (error as Error).message
      );
    }
  }

  dragDropWithoutPlugin(
    locator: string,
    targetSelector: Cypress.Chainable<JQuery<HTMLElement>>
  ): void {
    try {
      cy.get(locator).trigger("mousedown", { which: 1 });

      // Extract the HTML element from the Cypress.Chainable<JQuery<HTMLElement>>
      targetSelector.then((targetElement) => {
        cy.wrap(targetElement).trigger("mousemove");
        cy.wrap(targetElement).trigger("mouseup", { force: true });
      });
    } catch (error) {
      console.error(
        `Drag-and-drop failed: Element with selector ${locator} could not be dragged to ${targetSelector}:`,
        (error as Error).message
      );
    }
  }

  triggerMouseOver(locator: string): void {
    try {
      cy.get(locator).trigger("mouseover");
    } catch (error) {
      console.error(
        `Mouseover failed for element with selector ${locator}:`,
        (error as Error).message
      );
    }
  }

  verifyTooltipVisible(locator: string, customLocator?: string): void {
    try {
      const locator1 = customLocator || '[role="tooltip"]';
      cy.get(locator1).should("be.visible");
    } catch (error) {
      console.error(
        `Assertion failed: Tooltip for element with selector ${locator} is not visible:`,
        (error as Error).message
      );
    }
  }

  verifyTooltipContent(
    locator: string,
    expectedContent: string,
    customLocator?: string
  ): void {
    try {
      const locator1 = customLocator || '[role="tooltip"]';
      cy.get(locator1).should("have.text", expectedContent);
    } catch (error) {
      console.error(
        `Assertion failed: Tooltip content for element with selector ${locator} does not match:`,
        (error as Error).message
      );
    }
  }

  verifyElementExists(locator: string): void {
    try {
      cy.get(locator).should("exist");
    } catch (error) {
      console.error(
        `Assertion failed: Element does not exist:`,
        (error as Error).message
      );
    }
  }

  verifyElementCss(
    locator: string,
    propertyName: string,
    expectedValue: string
  ): void {
    try {
      cy.get(locator)
        .should("have.css", propertyName)
        .and("equal", expectedValue);
    } catch (error) {
      console.error(
        `CSS property assertion failed: ${propertyName} for element with selector ${locator} does not match:`,
        (error as Error).message
      );
    }
  }

  clickElementAtIndex(locator: string, index: number): void {
    try {
      const selector = `${locator}:eq(${index})`;
      cy.get(selector).click();
    } catch (error) {
      console.error(
        `Click action failed for element at index ${index} with selector ${locator}:`,
        (error as Error).message
      );
    }
  }

  verifyTableRowContent(
    locator: string,
    rowIndex: number,
    expectedData: string[]
  ): void {
    try {
      const numberOfCellsToAssert = Math.min(expectedData.length, 6);

      cy.get(`${locator}:eq(${rowIndex}) .rt-td:lt(${numberOfCellsToAssert})`, {
        timeout: 3000,
      }).each(($td, index) => {
        cy.wrap($td).should("contain", expectedData[index]);
      });
    } catch (error) {
      console.error(
        `Assertion failed: Error occurred while asserting table row content:`,
        (error as Error).message
      );
    }
  }
}

export default Elements;
