import React from "react";
import NewBoxForm from "./NewBoxForm";
import { render } from '@testing-library/react';

// smoke test
it('renders app component', function(){
    render(<NewBoxForm/>);
});

// snapshot test
it('matches snapshot', function(){
    const { asFragment } = render(<NewBoxForm/>);
    expect(asFragment).toMatchSnapshot();
});
