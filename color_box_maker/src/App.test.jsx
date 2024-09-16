import React from "react";
import App from "./App";
import { render } from '@testing-library/react';

// smoke test
it('renders app component', function(){
    render(<App/>);
});

// snapshot test
it('matches snapshot', function(){
    const { asFragment } = render(<App/>);
    expect(asFragment).toMatchSnapshot();
});