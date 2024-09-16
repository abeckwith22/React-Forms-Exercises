import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = {
        message: "",
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
        addTodo({...formData});
        setFormData(INITIAL_STATE);
    }
    
    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            {/* message */}
            <label htmlFor="message">Todo:</label>
            <input 
                id="message"
                type="text"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
            />
            <button>Add New Todo</button>
        </form>
    )
}

export default NewTodoForm;