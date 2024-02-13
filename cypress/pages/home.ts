import BasePage from "./basePage";
import Elements from "./elements";

const selector = 'div[class="card mt-4 top-card"]';

const elements = new Elements();

class MainPage extends BasePage {
  clickElement(): void {
    elements.clickElementAtIndex(selector, 0);
  }

  clickForms(): void {
    elements.clickElementAtIndex(selector, 1);
  }

  clickWidgets(): void {
    elements.clickElementAtIndex(selector, 3);
  }

  clickInteractions(): void {
    elements.clickElementAtIndex(selector, 4);
  }
}

export default MainPage;
