import BasePage from "./basePage";

class MainPage extends BasePage {
    clickElement(): void {
      this.clickCard(0);
    }
  
    clickForms(): void {
      this.clickCard(1);
    }
  
    clickWidgets(): void {
      this.clickCard(3);
    }
  
    clickInteractions(): void {
      this.clickCard(4);
    }
  
    private clickCard(index: number): void {
      cy.get(`div[class="card mt-4 top-card"]:eq(${index})`).click();
    }
  }
  
  export default MainPage;
  