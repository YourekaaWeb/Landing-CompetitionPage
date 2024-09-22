"use client";

import React from "react";
import TermsModal from "./TermsAndConditionsModal";
import { useState } from 'react';

const RegistrationForm = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    age: '',
    location: '',
    participantType: '',
    category: '',
  });

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData ({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/competition/submit-entry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));

      const data = await res.json();
      setLoading(false);

      if (res.status === 201) {
        setMessage(data.message);

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
          age: '',
          location: '',
          participantType: '',
          category: ''
        });
      } else {
        setMessage(data.message || 'Something went wrong!');
      }
    } catch (error) {
      setLoading(false);
      setMessage('Internal server error');
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
              {" "}
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block" htmlFor="firstName">First name*</label>
                  <input
                    type="text"
                    placeholder=""
                    name="firstName"
                    id="firstName"
                    required="required"
                    className="w-100"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block" htmlFor="lastName">Last name*</label>
                  <input
                    type="text"
                    placeholder=""
                    name="lastName"
                    id="lastName"
                    required="required"
                    className="w-100"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block" htmlFor="email">Email*</label>
                  <input
                    type="email"
                    placeholder="audacious@yourekaa.com"
                    name="email"
                    id="email"
                    required="required"
                    className="w-100"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block" htmlFor="location">Location (city)*</label>
                  <input
                    type="text"
                    placeholder=""
                    name="location"
                    id="location"
                    required="required"
                    className="w-100"
                    value={formData.location}
                    onChange={handleChange}
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
            </div>

            <div className="row controls splitted-form">
              {" "}
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block" htmlFor="gender">Gender*</label>
                  <select name="gender" id="gender" className="w-100" value={formData.gender} onChange={handleChange} required>
                    <option value="" disabled selected>
                      Select a gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    {/* <option value="">Rather not say</option> */}
                  </select>
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block" htmlFor="participantType">Solo or team*</label>
                  <select name="participantType" id="participantType" className="w-100" value={formData.participantType} onChange={handleChange} required>
                    <option value="" disabled selected>
                      Select an option
                    </option>
                    <option value="Solo">Solo</option>
                    <option value="Team">Team</option>
                  </select>
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block" htmlFor="age">Age</label>
                  <input
                    type="number"
                    placeholder=""
                    name="age"
                    id="age"
                    required="required"
                    className="w-100"
                    value={formData.age}
                    onChange={handleChange}
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block" htmlFor="category">Category*</label>
                  <input
                    type="text"
                    placeholder=""
                    name="category"
                    id="category"
                    required="required"
                    className="w-100"
                    value={formData.category}
                    onChange={handleChange}
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mt-4">
            <button className="reg-submit-btn btn-one fw-500 w-100 text-uppercase fs-14 d-block" type="submit" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
              {/* Register */}
            </button>
          </div>
        </div>

        {/* <TermsModal /> */}
      </form>
    </>
  );
};

export default RegistrationForm;
