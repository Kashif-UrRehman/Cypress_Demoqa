import BasePage from "./basePage";
import "@4tw/cypress-drag-drop";

class Interactions extends BasePage {
  clickDroppable(): void {
    cy.contains(".btn", "Droppable").click();
  }

  dragDrop(): void {
    cy.get("#draggable").drag('.drop-box:contains("Drop here")', {
      force: true,
    });
  }

  dragWithoutLibrary(): void {
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  }
}

export default Interactions;
