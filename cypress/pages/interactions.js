class Interactions {
  clickDroppable() {
    cy.contains(".btn", "Droppable").click();
  }

  dragDrop() {
    cy.get("#draggable").drag('.drop-box:contains("Drop here")', {
      force: true,
    });
  }

  dragWithoutLibrary() {
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  }
}

export default Interactions;