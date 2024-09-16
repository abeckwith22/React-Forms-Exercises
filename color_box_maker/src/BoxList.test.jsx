import React from "react";
import BoxList from "./BoxList";
import { render, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from "@testing-library/jest-dom"
import Box from "./Box";

function addBox(boxList, height = "10", width = "10", backgroundColor = "red"){
    const heightInput = boxList.getByLabelText("Height:");
    const widthInput = boxList.getByLabelText("Width:");
    const colorInput = boxList.getByLabelText("Background Color:");

    // change form data to match width, height, and color
    fireEvent.change(heightInput, { target: { value: height }});
    fireEvent.change(widthInput , { target: { value: width}});
    fireEvent.change(colorInput, { target: { value: backgroundColor}});

    // submit to DOM
    const button = boxList.getByText("Add Box");
    fireEvent.click(button);
}

// smoke test
it('renders app component', function(){
    render(<BoxList/>);
});

// snapshot test
it('matches snapshot', function(){
    const { asFragment } = render(<BoxList/>);
    expect(asFragment).toMatchSnapshot();
});

it("can add a new box", function() {
    const boxList = render(<BoxList/>);
    expect(boxList.queryByText("Remove Box")).not.toBeInTheDocument();

    addBox(boxList);

    expect(boxList.queryByText("Remove Box")).toBeInTheDocument();

});

it("can remove a new box", function() {
    const boxList = render(<BoxList/>);

    // There shouldn't be any boxes in the boxList
    expect(boxList.queryByText("Remove Box")).not.toBeInTheDocument();

    // create a box that we can remove
    addBox(boxList);
    expect(boxList.queryByText("Remove Box")).toBeInTheDocument();

    // grab button to remove
    const removeBtn = boxList.queryByText("Remove Box");
    fireEvent.click(removeBtn);

    // check to see if button is still in BoxList
    expect(boxList.queryByText("Remove Box")).not.toBeInTheDocument();
})