import BasePage from "./basePage";
import "@4tw/cypress-drag-drop";
import Elements from "./elements";

const droppableTab = new Elements(".btn:contains('Droppable')");
const draggableElement = new Elements("#draggable");
const targetDrop = "#droppable";
class Interactions extends BasePage {
  clickDroppable(): void {
    droppableTab.click();
  }

  dragDrop(): void {
    draggableElement.dragAndDrop(targetDrop, { force: true });
  }

  dragWithoutLibrary(): void {
    draggableElement.dragDropWithoutPlugin(cy.get(targetDrop));
  }
}

export default Interactions;
