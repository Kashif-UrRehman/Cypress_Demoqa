import { ELEMENT } from "../framework/elements";

const selectors = {
  progressBarTab: ".btn:contains('Progress Bar')",
  toolTipsTab: ".btn:contains('Tool Tips')",
  hoverBtn: "#toolTipButton",
  progressBar: ".progress-bar",
  startBarBtn: ".mt-3",
};

export class Widgets {
  clickProgressBarTab(): void {
    ELEMENT.click(selectors.progressBarTab);
  }

  clickToolTipsTab(): void {
    ELEMENT.click(selectors.toolTipsTab);
  }

  hoverButton(): void {
    ELEMENT.triggerMouseOver(selectors.hoverBtn);
  }

  checkToolTip(): void {
    ELEMENT.verifyTooltipVisible(selectors.hoverBtn);
  }

  verifyTipContent(): void {
    const tipText = "You hovered over the Button";
    ELEMENT.verifyTooltipContent(selectors.hoverBtn, tipText);
  }

  verifyProgressBar(): void {
    ELEMENT.verifyElementExists(selectors.progressBar);
  }

  clickStartButton(): void {
    ELEMENT.click(selectors.startBarBtn);
  }

  verifyBarFullProgress() {
    cy.get(".progress-bar", { timeout: 22000 }).should("contain", "100%");
  }

  verifyBarColor(color: string): void {
    ELEMENT.verifyElementCss(selectors.progressBar, "background-color", color);
  }
}
