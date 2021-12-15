import { render, screen } from '@testing-library/react';
import MenuItem from '../js/MenuItem';

describe('Testando componente MenuItem', () => {
    test('chequear si recibe _blank como props', () => {
      // preparación: pido un número aleatorio entre 0 y 100
      render(<MenuItem text="Blog" href="https://adalab.es/blog" openInNewTab />);
      // actuación: ejecuto la función a testear
      const divElement = screen.getByText("Blog");
      console.log(divElement);
      // aserción: compruebo si el valor devuelto es mayor o igual que 0
      expect(divElement.target).toBeGreaterThanOrEqual("_blank");
    });
});