import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {

    const INITIAL_STATE = { backgroundColor: "", width: 0, height: 0 };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = evt => {
        evt.preventDefault();
        addBox(formData);
        setFormData(INITIAL_STATE);
    };

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            
            <label htmlFor="backgroundColor">Background Color:</label>
            <input
                id="backgroundColor"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
            />

            <label htmlFor="width">Width:</label>
            <input
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />
            
            <label htmlFor="height">Height:</label>
            <input
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />

            <button>Add a new Color Box!</button>
        </form>
    );
};

export default NewBoxForm;