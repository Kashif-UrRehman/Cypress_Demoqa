import BasePage from "./basePage";
import Elements from "./elements";

const progressBarTab = new Elements(".btn:contains('Progress Bar')");
const toolTipsTab = new Elements(".btn:contains('Tool Tips')");
const hoverBtn = new Elements("#toolTipButton");
const progressBar = new Elements(".progress-bar");
const startBarBtn = new Elements(".mt-3");

class Widgets extends BasePage {
  clickProgressBarTab(): void {
    progressBarTab.click();
  }

  clickToolTipsTab(): void {
    toolTipsTab.click();
  }

  hoverButton(): void {
    hoverBtn.triggerMouseOver();
  }

  checkToolTip(): void {
    hoverBtn.assertTooltipVisible();
  }

  verifyTipContent(): void {
    const tipText = "You hovered over the Button";
    hoverBtn.assertTooltipContent(tipText);
  }

  verifyProgressBar(): void {
    progressBar.assertElementExists();
  }

  clickStartButton(): void {
    startBarBtn.click();
  }

  verifyBarFullProgress() {
    cy.get(".progress-bar").should("contain", "100%");
  }

  verifyBarColor(color: string): void {
    progressBar.assertElementCss("background-color", color);
  }
}

export default Widgets;
