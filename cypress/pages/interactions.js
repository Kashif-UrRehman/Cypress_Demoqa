class Interactions {
  clickDroppable() {
    cy.contains(".btn", "Droppable").click();
  }

  dragDrop() {
    cy.get("#draggable").drag('.drop-box:contains("Drop here")', {
      force: true,
    });
  }
}

export default Interactions;
