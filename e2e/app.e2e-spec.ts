import { ExerciciosAngularPage } from './app.po';

describe('exercicios-angular App', function() {
  let page: ExerciciosAngularPage;

  beforeEach(() => {
    page = new ExerciciosAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
