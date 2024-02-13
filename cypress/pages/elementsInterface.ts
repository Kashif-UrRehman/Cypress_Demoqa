export interface ElementsInterface {
  setElementValue(locator: string, value: string): void;

  click(locator: string): void;

  check(locator: string, options?: CheckOptions): void;

  type(locator: string, text: string): void;

  clear(locator: string): void;

  shouldHaveText(locator: string, text: string): boolean;

  verifyImageProperties(locator: string): void;

  selectFile(locator: string, path: string): void;

  verifyElementContains(selector: string, expectedText: string): boolean;

  dragAndDrop(
    locator: string,
    targetSelector: string,
    options?: CheckOptions
  ): void;

  dragDropWithoutPlugin(
    locator: string,
    targetSelector: Cypress.Chainable<JQuery<HTMLElement>>
  ): void;

  triggerMouseOver(locator: string): void;

  verifyTooltipVisible(locator: string): void;

  verifyTooltipContent(
    locator: string,
    expectedContent: string,
    customLocator?: string
  ): void;

  verifyElementExists(locator: string): void;

  verifyElementCss(
    locator: string,
    propertyName: string,
    expectedValue: string
  ): void;

  clickElementAtIndex(locator: string, index: number): void;

  verifyTableRowContent(
    locator: string,
    rowIndex: number,
    expectedData: string[]
  ): void;
}

export interface CheckOptions {
  force?: boolean;
}
