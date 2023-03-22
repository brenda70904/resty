import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import App from '../App';

describe("App component", () => {
  it("allows form use and render result as expected", () => {
    render(<App />);

    let inputUrl = screen.getByTestId("inputUrl");
    let button = screen.getByTestId("button");
    let getMethod  = screen.getByTestId("get-method");

    fireEvent.change(inputUrl,{target:{value:"test.com"}});
    fireEvent.click(getMethod);
    expect(inputUrl).toHaveTextContent('test.com');
  });
});