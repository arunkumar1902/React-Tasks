import React, { useState } from 'react';

const HocDemo = (UpdatedComponent) => {
  return (props) => {
    const [data, setData] = useState({
      email: '',
      password: '',
    });

    const [errors, setErrors] = useState({
      email: '',
      password: '',
    });

    const validate = () => {
      let valid = true;
      const newErrors = {};

      const emailPattern = new RegExp(/^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,}$/);
      const passwordPattern = new RegExp(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,}$/);

      if (!data.email) {
        newErrors.email = 'Email is required';
        valid = false;
      } else if (!emailPattern.test(data.email)) {
        newErrors.email = 'Email is not valid';
        valid = false;
      }

      if (!data.password) {
        newErrors.password = 'Password is required';
        valid = false;
      } else if (!passwordPattern.test(data.password)) {
        newErrors.password = 'Password is not valid';
        valid = false;
      }

      setErrors(newErrors);
      return valid;
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (validate()) {
        console.log('Form Submitted:', data);
        setData({
          email: '',
          password: ''
        });
        alert("Form Submitted");
      }
    };

    return (
      <UpdatedComponent
        {...props}
        data={data}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    );
  };
};

export default HocDemo;
