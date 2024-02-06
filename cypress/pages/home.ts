import BasePage from "./basePage";
import Elements from "./elements";

const elements = new Elements('div[class="card mt-4 top-card"]');
class MainPage extends BasePage {
  clickElement(): void {
    elements.clickElementAtIndex(0);
  }

  clickForms(): void {
    elements.clickElementAtIndex(1);
  }

  clickWidgets(): void {
    elements.clickElementAtIndex(3);
  }

  clickInteractions(): void {
    elements.clickElementAtIndex(4);
  }
}

export default MainPage;
