import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer Component', ()=>{
  test('render footer as expected', ()=>{
    render(<Footer />);
    let footer = screen.getByTestId('footer');
    expect(footer).toHaveTextContent('© 2018');
  });
});
