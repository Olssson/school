import React, { useState } from "react";

function Input({ label, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}: </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </div>
  );
}

function JoiInput(props) {
  const { label, name, value, onChange, schema } = props;
  const [error, setError] = useState("");

  const validateField = (value) => {
    const { error } = schema.validate(value, { abortEarly: false });
    setError(error ? error.details[0].message : "");
  };

  const handleInputChange = (name, value) => {
    const newValue = { ...formState, [name]: value };
    validateField(newValue);
    setFormState(newValue);
  };

  const [formState, setFormState] = useState({ email: "", password: "", text: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    validateField(formState);
    if (error) {
      console.log(error);
      return;
    }
    console.log("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label={label} name={name} value={value} onChange={handleInputChange} />
      {error && <div>{error}</div>}
    </form>
  );
}

export default JoiInput;
