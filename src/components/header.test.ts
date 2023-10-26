import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    document.body.innerHTML = '<header></header>';
    const header = new Header('.container', 'My Title');
    test('Then it should be instance of Header', () => {
      expect(header).toBeInstanceOf(Header);
    });
    test('Then it should be text "My Title" of Header', () => {
      expect(header).toStrictEqual(header.title);
    });
    test('Then it should be template "<header class=..." Header', () => {
      const templateTest = `<header class="main-header">
              <h1 class="main-title">My Title</h1>
            </header>`;
      expect(header.createTemplate).toBe(templateTest);
    });
    test('Then it should be in the document', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
