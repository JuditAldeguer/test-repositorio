import react from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import MenuItem from './MenuItem.js';

describe('Testando componente MenuItem', () => {
    test('chequear que si recibe _blank como props', () => {
      // preparación: renderizo el componente
      render(<MenuItem text="Blog" href="https://adalab.es/blog" openInNewTab />);
      // actuación: ejecuto la función a testear
      const menuItem = screen.getByText("Blog");
      console.log(prettyDOM(menuItem));
      const targetAttribute  = menuItem.getAttribute("target");
      // aserción: compruebo si el valor devuelto es _blank
      expect(targetAttribute).toBe("_blank");
    });
    test('chequear que no recibe _blank como props', () => {
      // preparación: renderizo el componente
      render(<MenuItem text="Blog" href="https://adalab.es/blog"/>);
      // actuación: ejecuto la función a testear
      const menuItem = screen.getByText("Blog");
      console.log(prettyDOM(menuItem));
      const targetAttribute  = menuItem.getAttribute("target");
      // aserción: compruebo si el valor devuelto es""
      expect(targetAttribute).toBe("");
    });
});