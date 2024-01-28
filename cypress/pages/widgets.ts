import BasePage from "./basePage";

class Widgets extends BasePage {
  clickProgressBarTab(): void {
    cy.contains(".btn", "Progress Bar").click();
  }

  clickToolTipsTab(): void {
    cy.contains(".btn", "Tool Tips").click();
  }

  hoverButton(): void {
    // Hover over the button
    cy.get("#toolTipButton").trigger("mouseover");
  }

  checkToolTip(): void {
    // Wait for the tooltip to appear (adjust the timeout if needed)
    cy.get('[role="tooltip"]').should("be.visible");
  }

  verifyTipContent(): void {
    // Assert the tooltip content
    cy.get('[role="tooltip"]').should(
      "have.text",
      "You hovered over the Button"
    );
  }

  verifyProgressBar(): void {
    cy.get(".progress-bar").should("exist");
  }

  clickStartButton(): void {
    cy.get(".mt-3").click();
  }

  verifyBarColor(color: string): void {
    cy.get(".progress-bar")
      .should("have.css", "background-color")
      .and("equal", color);
  }
}

export default Widgets;
