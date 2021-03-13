import {$$, browser, by, element} from 'protractor';

export class AppPage {
  async navigateTo(path): Promise<unknown> {
    return browser.get(browser.baseUrl + path);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root mat-label')).getText();
  }

  async getTitleCard(): Promise<string> {
    return element(by.css('mat-card-title')).getText();
  }

  async getPoster(): Promise<string> {
    return element(by.css('.poster img')).getAttribute('src');
  }

  async waitByNumElement(selector): Promise<unknown>{
    const presenceOfAll = (elements, n) => {
      return () => {
        return elements.count((count) => {
          return count >= n;
        });
      };
    };
    return browser.wait(presenceOfAll($$(selector), 3), 10000);
  }
}
