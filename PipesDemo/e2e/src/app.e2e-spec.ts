import { AppPage } from './app.po';
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    element(by.model('name')).sendKeys("keyur");    
    expect(page.getParagraphText()).toEqual('PIPES DEMO');
  });
});
