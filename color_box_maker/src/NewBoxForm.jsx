import React, { useState } from "react";
import "./NewBoxForm.css"

const NewBoxForm = ({ addBox, removeBox }) => {
    const INITIAL_STATE = {
        width: "",
        height: "",
        backgroundColor: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    
    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value,
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        addBox({...formData});
        setFormData(INITIAL_STATE);
    }
    
    return (
        <form className="NewBoxForm" onSubmit={handleSubmit}>
            {/* Width */}
            <label htmlFor="width">Width:</label>
            <input 
                id="width"
                type="number"
                name="width"
                placeholder="Box Width"
                value={FormData.width}
                onChange={handleChange}
            />
            {/* Height */}
            <label htmlFor="height">Height:</label>
            <input 
                id="height"
                type="number"
                name="height"
                placeholder="Box Height"
                value={FormData.height}
                onChange={handleChange}
            />
            {/* Background Color */}
            <label htmlFor="backgroundColor">Background Color:</label>
            <input 
                id="backgroundColor"
                type="text"
                name="backgroundColor"
                placeholder="Background Color"
                value={FormData.backgroundColor}
                onChange={handleChange}
            />
            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm;