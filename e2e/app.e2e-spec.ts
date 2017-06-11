import { NgDeploySamplePage } from './app.po';

describe('ng-deploy-sample App', () => {
  let page: NgDeploySamplePage;

  beforeEach(() => {
    page = new NgDeploySamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
