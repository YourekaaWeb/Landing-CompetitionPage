import React from "react";

const RegistrationForm = () => {
  return (
    <>
      {" "}
      <form action="#" className="registration-form  text-black p-5">
        <h3 className="text-black mb-4">Register here</h3>
        <div className="messages" />
        <div className="row ">
          <div className="d-flex gap-4 form-container">
            <div className="row controls">
              {" "}
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block">First name*</label>
                  <input
                    type="text"
                    placeholder=""
                    name="first-name"
                    required="required"
                    className="w-100"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block">Last name*</label>
                  <input
                    type="text"
                    placeholder=""
                    name="last-name"
                    required="required"
                    className="w-100"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block">Email*</label>
                  <input
                    type="email"
                    placeholder="audacious@yourekaa.com"
                    name="email"
                    required="required"
                    className="w-100"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block">Location (city)*</label>
                  <input
                    type="text"
                    placeholder=""
                    name="location"
                    required="required"
                    className="w-100"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
            </div>

            <div className="row controls">
              {" "}
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block">Location (city)*</label>
                  <select name="location" id="location" className="w-100">
                    <option value="" disabled selected>
                      Select a gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="">Rather not say</option>
                  </select>
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block">Solo or team*</label>
                  <select name="" id="" className="w-100">
                    <option value="" disabled selected>
                      Select an option
                    </option>
                    <option value="solo">Solo</option>
                    <option value="team">Team</option>
                  </select>
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block">Age</label>
                  <input
                    type="number"
                    placeholder=""
                    name="age"
                    required="required"
                    className="w-100"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  <label className="d-block">Category*</label>
                  <input
                    type="text"
                    placeholder=""
                    name="category"
                    required="required"
                    className="w-100"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mt-4">
            <button className="btn-one fw-500 w-100 text-uppercase fs-14 d-block">
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
