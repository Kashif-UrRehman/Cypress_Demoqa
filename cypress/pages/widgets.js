class Widgets {
  clickProgressBarTab() {
    cy.contains(".btn", "Progress Bar").click();
  }
  clickToolTipsTab() {
    cy.contains(".btn", "Tool Tips").click();
  }

  hoverButton() {
    // Hover over the button
    cy.get("#toolTipButton").trigger("mouseover");
  }

  checkToolTip() {
    // Wait for the tooltip to appear (adjust the timeout if needed)
    cy.get('[role="tooltip"]').should("be.visible");
  }

  verifyTipContent() {
    // Assert the tooltip content
    cy.get('[role="tooltip"]').should(
      "have.text",
      "You hovered over the Button"
    );
  }

  verifyProgressBar() {
    cy.get(".progress-bar").should("exist");
  }

  clickStartButton() {
    cy.get(".mt-3").click();
  }

  verifyBarColor(color) {
    cy.get(".progress-bar")
      .should("have.css", "background-color")
      .and("equal", color);
  }
}

export default Widgets;
