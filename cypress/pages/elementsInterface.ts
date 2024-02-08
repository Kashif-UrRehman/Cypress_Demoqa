export interface ElementsInterface {
  getElement(): Cypress.Chainable<JQuery<HTMLElement>>;

  setElementValue(value: string): void;

  click(): void;

  check(options?: CheckOptions): void;

  type(text: string): void;

  clear(): void;

  shouldHaveText(text: string): boolean;

  verifyImageProperties(): void;

  selectFile(path: string): void;

  verifyElementContains(selector: string, expectedText: string): boolean;

  dragAndDrop(targetSelector: string, options?: CheckOptions): void;

  dragDropWithoutPlugin(
    targetSelector: Cypress.Chainable<JQuery<HTMLElement>>
  ): void;

  triggerMouseOver(): void;

  verifyTooltipVisible(): void;

  verifyTooltipContent(expectedContent: string, customLocator?: string): void;

  verifyElementExists(): void;

  verifyElementCss(propertyName: string, expectedValue: string): void;

  clickElementAtIndex(index: number): void;

  verifyTableRowContent(rowIndex: number, expectedData: string[]): void;
}

export interface CheckOptions {
  force?: boolean;
}
