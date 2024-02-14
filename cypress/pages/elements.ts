import { ElementsInterface, CheckOptions } from "./elementsInterface";
import BasePage from "./basePage";

class Elements extends BasePage implements ElementsInterface {
  setElementValue(locator: string, value: string): boolean {
    try {
      cy.get(locator).invoke("val", value);
      return true;
    } catch (error) {
      console.error(
        `Failed to set value for element with selector ${locator}:`,
        (error as Error).message
      );
      return false;
    }
  }

  click(locator: string): boolean {
    try {
      cy.get(locator).click();
      return true;
    } catch (error) {
      const errorMessage = (error as Error).message || "Unknown error";
      console.error(`Failed to click element: ${errorMessage}`);
      return false;
    }
  }

  check(locator: string, options?: CheckOptions): boolean {
    try {
      cy.get(locator).check(options);
      return true;
    } catch (error) {
      console.error("Failed to check element:", (error as Error).message);
      return false;
    }
  }

  type(locator: string, text: string): boolean {
    try {
      cy.get(locator).type(text);
      return true;
    } catch (error) {
      console.error("Failed to type text into element:", error);
      return false;
    }
  }

  clear(locator: string): boolean {
    try {
      cy.get(locator).clear();
      return true;
    } catch (error) {
      console.error("Failed to clear element text:", error);
      return false;
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

  verifyImageProperties(locator: string): boolean {
    try {
      cy.get(locator).each(($img: any) => {
        cy.get($img)
          .should("have.prop", "naturalWidth", 0)
          .and("have.prop", "naturalHeight", 0);
      });
      return true;
    } catch (error) {
      console.error("Failed:", error);
      return false;
    }
  }
  selectFile(locator: string, path: string): boolean {
    try {
      cy.get(locator).selectFile(path);
      return true;
    } catch (error) {
      console.error(
        `Failed to select file for element with selector ${locator}:`,
        (error as Error).message
      );
      return false;
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
  ): boolean {
    try {
      cy.get(locator).drag(targetSelector, options);

      return true;
    } catch (error) {
      console.error(
        `Drag-and-drop failed: Element with selector ${locator} could not be dragged to ${targetSelector}:`,
        (error as Error).message
      );
      return false;
    }
  }

  dragDropWithoutPlugin(
    locator: string,
    targetSelector: Cypress.Chainable<JQuery<HTMLElement>>
  ): boolean {
    try {
      cy.get(locator).trigger("mousedown", { which: 1 });

      // Extract the HTML element from the Cypress.Chainable<JQuery<HTMLElement>>
      targetSelector.then((targetElement) => {
        cy.wrap(targetElement).trigger("mousemove");
        cy.wrap(targetElement).trigger("mouseup", { force: true });
      });
      return true;
    } catch (error) {
      console.error(
        `Drag-and-drop failed: Element with selector ${locator} could not be dragged to ${targetSelector}:`,
        (error as Error).message
      );
      return false;
    }
  }

  triggerMouseOver(locator: string): boolean {
    try {
      cy.get(locator).trigger("mouseover");
      return true;
    } catch (error) {
      console.error(
        `Mouseover failed for element with selector ${locator}:`,
        (error as Error).message
      );
      return false;
    }
  }

  verifyTooltipVisible(locator: string, customLocator?: string): boolean {
    try {
      const locator1 = customLocator || '[role="tooltip"]';
      cy.get(locator1).should("be.visible");

      return true;
    } catch (error) {
      console.error(
        `Assertion failed: Tooltip for element with selector ${locator} is not visible:`,
        (error as Error).message
      );

      return false;
    }
  }

  verifyTooltipContent(
    locator: string,
    expectedContent: string,
    customLocator?: string
  ): boolean {
    try {
      const locator1 = customLocator || '[role="tooltip"]';
      cy.get(locator1).should("have.text", expectedContent);
      return true;
    } catch (error) {
      console.error(
        `Assertion failed: Tooltip content for element with selector ${locator} does not match:`,
        (error as Error).message
      );
      return false;
    }
  }

  verifyElementExists(locator: string): boolean {
    try {
      cy.get(locator).should("exist");
      return true;
    } catch (error) {
      console.error(
        `Assertion failed: Element does not exist:`,
        (error as Error).message
      );
      return false;
    }
  }

  verifyElementCss(
    locator: string,
    propertyName: string,
    expectedValue: string
  ): boolean {
    try {
      cy.get(locator)
        .should("have.css", propertyName)
        .and("equal", expectedValue);
      return true;
    } catch (error) {
      console.error(
        `CSS property assertion failed: ${propertyName} for element with selector ${locator} does not match:`,
        (error as Error).message
      );
      return false;
    }
  }

  clickElementAtIndex(locator: string, index: number): boolean {
    try {
      const selector = `${locator}:eq(${index})`;
      cy.get(selector).click();
      return true;
    } catch (error) {
      console.error(
        `Click action failed for element at index ${index} with selector ${locator}:`,
        (error as Error).message
      );
      return false;
    }
  }

  verifyTableRowContent(
    locator: string,
    rowIndex: number,
    expectedData: string[]
  ): boolean {
    try {
      const numberOfCellsToAssert = Math.min(expectedData.length, 6);

      cy.get(`${locator}:eq(${rowIndex}) .rt-td:lt(${numberOfCellsToAssert})`, {
        timeout: 3000,
      }).each(($td, index) => {
        cy.wrap($td).should("contain", expectedData[index]);
      });
      return true;
    } catch (error) {
      console.error(
        `Assertion failed: Error occurred while asserting table row content:`,
        (error as Error).message
      );
      return false;
    }
  }
}

export default Elements;
