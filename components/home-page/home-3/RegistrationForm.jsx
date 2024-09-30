"use client";

import React, { useState } from "react";
import TermsModal from "./TermsAndConditionsModal";

const RegistrationForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [otherInput, setOtherInput] = useState("");
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    gender: "",
    participantType: "",
    age: "",
    category: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
    setFormValues({ ...formValues, category: e.target.value });
  };

  const handleOtherInputChange = (e) => {
    setOtherInput(e.target.value);
    // errors.category = "";
    setFormValues({ ...formValues, category: e.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, category: "" }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // errors[name] = "";
    setFormValues({ ...formValues, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validate = () => {
    let newErrors = {};

    if (formValues.firstName.length < 3) {
      newErrors.firstName = "First name must be at least 3 characters.";
    }

    if (formValues.lastName.length < 3) {
      newErrors.lastName = "Last name must be at least 3 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formValues.location.length < 2) {
      newErrors.location = "Location must be at least 2 characters.";
    }

    if (isNaN(formValues.age) || formValues.age < 18 || formValues.age > 150) {
      newErrors.age = "Age must be a number between 1 and 150.";
    }

    if (!formValues.category) {
      newErrors.category = "Please select a category.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      alert("Please fill the form appropriately before submitting");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/competition/submit-entry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      })

      const data = await res.json();
      setLoading(false);

      if (res.status === 201) {
        setMessage(data.message || "Registration successful!");
        alert("Form submitted successfully!");

        setFormValues({
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
          age: '',
          location: '',
          participantType: '',
          category: ''
        });

        setSelectedOption("");
        setOtherInput("");
      } else {
        setMessage(data.message || "Something went wrong!");
        alert("Something went wrong, please try again.");
      }
      
    } catch (error) {
      setLoading(false);
      setErrors({ apiError: "Internal server error" });
      alert("Internal server error, please try again later.");
    }
    
  };

  return (
    <>
      {" "}
      <form action="#" className="registration-form  text-black " onSubmit={handleSubmit}>
        <h3 className="text-black mb-4">Enlist here</h3>
        <div className="messages" />
        <div className="row ">
          <div className="  form-container">
            <div className="row controls splitted-form">
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block" htmlFor="firstName">First name*</label>
                  <input
                    type="text"
                    placeholder=""
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                    className={`w-100 ${errors.firstName ? "input-error" : ""}`}
                  />
                  {errors.firstName && (
                    <small className="error-message">{errors.firstName}</small>
                  )}
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block" htmlFor="lastName">Last name*</label>
                  <input
                    type="text"
                    placeholder=""
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                    className={`w-100 ${
                      errors.lastName ? "input-error" : "border-red"
                    }`}
                  />
                  {errors.lastName && (
                    <small className="error-message">{errors.lastName}</small>
                  )}
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block" htmlFor="email">Email*</label>
                  <input
                    type="email"
                    placeholder="audacious@yourekaa.com"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    className={`w-100 ${errors.email ? "input-error" : ""}`}
                  />
                  {errors.email && (
                    <small className="error-message">{errors.email}</small>
                  )}
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block" htmlFor="location">Location (city)*</label>
                  <input
                    type="text"
                    placeholder=""
                    name="location"
                    value={formValues.location}
                    onChange={handleInputChange}
                    className={`w-100 ${errors.location ? "input-error" : ""}`}
                  />
                  {errors.location && (
                    <small className="error-message">{errors.location}</small>
                  )}
                </div>
              </div>
            </div>

            <div className="row controls splitted-form">
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block">Gender*</label>
                  <select
                    name="gender"
                    id="gender"
                    value={formValues.gender}
                    onChange={handleInputChange}
                    className="w-100"
                  >
                    <option value="" disabled selected>
                      Select a gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    {/* <option value="">Rather not say</option> */}
                  </select>
                  {errors.gender && (
                    <small className="error-message">{errors.gender}</small>
                  )}
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block">Solo or team*</label>
                  <select
                    name="participantType"
                    value={formValues.participantType}
                    onChange={handleInputChange}
                    className="w-100"
                  >
                    <option value="" disabled selected>
                      Select an option
                    </option>
                    <option value="Solo">Solo</option>
                    <option value="Team">Team</option>
                  </select>
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block">Age*</label>
                  <input
                    type="number"
                    placeholder=""
                    min={1}
                    max={150}
                    name="age"
                    value={formValues.age}
                    onChange={handleInputChange}
                    className={`w-100 ${errors.age ? "input-error" : ""}`}
                  />
                  {errors.age && (
                    <small className="error-message">{errors.age}</small>
                  )}
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label htmlFor="artType">Category*</label>
                  <select
                    id="artType"
                    value={selectedOption}
                    onChange={handleDropdownChange}
                    className="dropdownSelect w-100"
                  >
                    <option value="" disabled selected>
                      Select a category
                    </option>
                    <option value="Visual arts">Visual arts</option>
                    <option value="Performing arts">Performing arts</option>
                    <option value="Literary arts">Literary arts</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Craftsmanship">Craftsmanship</option>
                    <option value="Fashion Design">Fashion Design</option>
                    <option value="Digital media">Digital media</option>
                    <option value="Unconventional materials">
                      Unconventional materials
                    </option>
                    <option value="Other">Other</option>
                  </select>
                  {selectedOption === "Other" && (
                    <div className="otherInputContainer input-group-meta form-group mb-20 mt-20">
                      <label htmlFor="otherArtType">Please specify:</label>
                      <input
                        type="text"
                        id="otherArtType"
                        value={otherInput}
                        onChange={handleOtherInputChange}
                        placeholder="Type your art category"
                        className="otherInputField w-100 "
                      />
                    </div>
                  )}
                  {errors.category && (
                    <small className="error-message">{errors.category}</small>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 mx-auto mt-4">
            <button
              type="submit"
              className="reg-submit-btn btn-one fw-500 w-100 text-uppercase fs-14 d-block"
            >
              Enlist
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
