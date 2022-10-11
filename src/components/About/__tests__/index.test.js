import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);
//first test
it('renders', () => {
    
})

//second test


describe('About component', () => {

it('matches a snapshot DOM node structure', () => {
    const { asFragment} = render(<About />);
    expect(asFragment()).toMatchSnapshot();

})
    
})

