export interface ElementsInterface {
  getElement(locator: string): Cypress.Chainable<JQuery<HTMLElement>>;

  setElementValue(locator: string, value: string): boolean;

  click(locator: string): boolean;

  check(locator: string, options?: CheckOptions): boolean;

  type(locator: string, text: string): boolean;

  clear(locator: string): boolean;

  shouldHaveText(locator: string, text: string): boolean;

  verifyImageProperties(locator: string): boolean;

  selectFile(locator: string, path: string): boolean;

  verifyElementContains(selector: string, expectedText: string): boolean;

  dragAndDrop(
    locator: string,
    targetSelector: string,
    options?: CheckOptions
  ): boolean;

  dragDropWithoutPlugin(
    locator: string,
    targetSelector: Cypress.Chainable<JQuery<HTMLElement>>
  ): boolean;

  triggerMouseOver(locator: string): boolean;

  verifyTooltipVisible(locator: string): boolean;

  verifyTooltipContent(
    locator: string,
    expectedContent: string,
    customLocator?: string
  ): boolean;

  verifyElementExists(locator: string): boolean;

  verifyElementCss(
    locator: string,
    propertyName: string,
    expectedValue: string
  ): boolean;

  clickElementAtIndex(locator: string, index: number): boolean;

  verifyTableRowContent(
    locator: string,
    rowIndex: number,
    expectedData: string[]
  ): boolean;
}

export interface CheckOptions {
  force?: boolean;
}
