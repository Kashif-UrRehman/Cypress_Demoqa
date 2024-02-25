import "@4tw/cypress-drag-drop";
import Elements from "../framework/elements";

const selectors = {
  droppableTab: ".btn:contains('Droppable')",
  draggableElement: "#draggable",
  targetDrop: "#droppable",
};

const elements = new Elements();

export class Interactions {
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

  verifyDropBoxColor(color: string): void {
    elements.verifyElementCss(selectors.targetDrop, "background-color", color);
  }
}
