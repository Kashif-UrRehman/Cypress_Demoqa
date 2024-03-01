import "@4tw/cypress-drag-drop";
import { ELEMENT } from "../framework/elements";

const selectors = {
  droppableTab: ".btn:contains('Droppable')",
  draggableElement: "#draggable",
  targetDrop: "#droppable",
};

export class Interactions {
  clickDroppable(): void {
    ELEMENT.click(selectors.droppableTab);
  }

  dragDrop(): void {
    ELEMENT.dragAndDrop(selectors.draggableElement, selectors.targetDrop, {
      force: true,
    });
  }

  dragWithoutLibrary(): void {
    ELEMENT.dragDropWithoutPlugin(
      selectors.draggableElement,
      cy.get(selectors.targetDrop)
    );
  }

  verifyDropBoxColor(color: string): void {
    ELEMENT.verifyElementCss(selectors.targetDrop, "background-color", color);
  }
}
