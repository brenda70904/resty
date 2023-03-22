import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Results from '.';

describe('Results components', ()=>{

  it('display the results appropriately', ()=>{
    render(<Results/>);

    let data = screen.getByTestId('data');
    
  });

});
