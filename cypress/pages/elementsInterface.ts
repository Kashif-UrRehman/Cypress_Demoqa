export interface ElementsInterface {
  click(): void;

  check(options?: CheckOptions): void;

  type(text: string): void;

  clear(): void;

  shouldHaveText(text: string): void;

  verifyImageProperties(): void;

  selectFile(path: string): void;

  assertElementContains(selector: string, expectedText: string): void;

  dragAndDrop(targetSelector: string, options?: CheckOptions): void;

  dragDropWithoutPlugin(
    targetSelector: Cypress.Chainable<JQuery<HTMLElement>>
  ): void;

  triggerMouseOver(): void;

  assertTooltipVisible(): void;

  assertTooltipContent(expectedContent: string, customLocator?: string): void;

  assertElementExists(): void;

  assertElementCss(propertyName: string, expectedValue: string): void;

  clickElementAtIndex(index: number): void;

  // assertTableRowContent(rowIndex: number, expectedData: string[]): void;
}

export interface CheckOptions {
  force?: boolean;
}
