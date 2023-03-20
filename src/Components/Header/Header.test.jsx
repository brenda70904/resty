import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header Component', ()=>{
  test('render footer as expected', ()=>{
    render(<Header />);
    let header = screen.getByTestId('headerH1');
    expect(header).toHaveTextContent('RESTy');
  });
});
