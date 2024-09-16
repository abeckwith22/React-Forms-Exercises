import React from "react";
import Box from "./Box"
import { render } from '@testing-library/react';

// smoke test
it('renders app component', function(){
    render(<Box/>);
});

// snapshot test
it('matches snapshot', function(){
    const { asFragment } = render(<Box/>);
    expect(asFragment).toMatchSnapshot();
});