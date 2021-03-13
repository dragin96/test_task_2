import {browser, by, element, logging} from 'protractor';
import {AppPage} from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display search', async () => {
    await page.navigateTo('/');
    expect(await page.getTitleText()).toEqual('Поиск фильма');
    const search = element.all(by.css('[data-testid="searchInput"]'));
    search.sendKeys('two');
    await page.waitByNumElement('[data-testid="result"] mat-list-item');
  });

  it('should page mobie', async () => {
    await page.navigateTo('/movie/tt4986830');
    expect(await page.getTitleCard()).toEqual('Chun jie xin ling: Zhu meng yan yi quan (2015)');
    expect((await page.getPoster()).length).toBeGreaterThan(10);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
