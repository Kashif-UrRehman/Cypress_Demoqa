import BasePage from "./basePage";
import "@4tw/cypress-drag-drop";
import Elements from "./elements";

const selectors = {
  droppableTab: ".btn:contains('Droppable')",
  draggableElement: "#draggable",
  targetDrop: "#droppable",
};

const elements = new Elements();

class Interactions extends BasePage {
  clickDroppable(): void {
    elements.click(selectors.droppableTab);
  }

  dragDrop(): void {
    elements.dragAndDrop(selectors.draggableElement, selectors.targetDrop, {
      force: true,
    });
  }

  dragWithoutLibrary(): void {
    elements.dragDropWithoutPlugin(
      selectors.draggableElement,
      cy.get(selectors.targetDrop)
    );
  }
}

export default Interactions;
