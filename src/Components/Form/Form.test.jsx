import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Form from '.';

describe('Form components', () => {
  it('can grab user input', () => {
    render(<Form />);

    const input = screen.getByTestId('input');
    const button = screen.getByTestId('button');

    fireEvent.change(input, { target: { value: 'test' }});
  expect(input).toHaveTextContent('test');
});
})