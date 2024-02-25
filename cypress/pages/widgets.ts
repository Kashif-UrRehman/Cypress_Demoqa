import Elements from "../framework/elements";

const selectors = {
  progressBarTab: ".btn:contains('Progress Bar')",
  toolTipsTab: ".btn:contains('Tool Tips')",
  hoverBtn: "#toolTipButton",
  progressBar: ".progress-bar",
  startBarBtn: ".mt-3",
};

const elements = new Elements();

export class Widgets {
  clickProgressBarTab(): void {
    elements.click(selectors.progressBarTab);
  }

  clickToolTipsTab(): void {
    elements.click(selectors.toolTipsTab);
  }

  hoverButton(): void {
    elements.triggerMouseOver(selectors.hoverBtn);
  }

  checkToolTip(): void {
    elements.verifyTooltipVisible(selectors.hoverBtn);
  }

  verifyTipContent(): void {
    const tipText = "You hovered over the Button";
    elements.verifyTooltipContent(selectors.hoverBtn, tipText);
  }

  verifyProgressBar(): void {
    elements.verifyElementExists(selectors.progressBar);
  }

  clickStartButton(): void {
    elements.click(selectors.startBarBtn);
  }

  verifyBarFullProgress() {
    cy.get(".progress-bar", { timeout: 22000 }).should("contain", "100%");
  }

  verifyBarColor(color: string): void {
    elements.verifyElementCss(selectors.progressBar, "background-color", color);
  }
}
