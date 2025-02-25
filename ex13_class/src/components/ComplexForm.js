import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function ComplexForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agree, setAgree] = useState(false);

  const [nameValid, setNameValid] = useState(true);
  const [genderValid, setGenderValid] = useState(true);
  const [countryValid, setCountryValid] = useState(true);
  const [agreeValid, setAgreeValid] = useState(true);

  useEffect(() => {
    setNameValid(name.length >= 3 || name.length === 0);
    setGenderValid(gender !== "" || gender.length === 0);
    setCountryValid(country !== "" || country.length === 0);
    setAgreeValid(agree || !agree);
  }, [name, gender, country, agree]);

  const isFormValid =
    nameValid &&
    genderValid &&
    countryValid &&
    agreeValid &&
    name.length > 0 &&
    gender.length > 0 &&
    country.length > 0 &&
    agree;

  return (
    <Form className="form-container">
      <Form.Group className="form-group" controlId="name">
        <Form.Label className="form-label">Name</Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isValid={nameValid && name.length > 0}
          isInvalid={!nameValid && name.length > 0}
        />
        <Form.Control.Feedback
          type="invalid"
          className="invalid-feedback"
        ></Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-group">
        <Form.Label className="form-label">Gender</Form.Label>
        <Form.Check
          className="form-check"
          type="radio"
          label="Male"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
          isValid={gender === "male" && genderValid}
          isInvalid={gender !== "male" && !genderValid && gender.length > 0}
        />
        <Form.Check
          className="form-check"
          type="radio"
          label="Female"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
          isValid={gender === "female" && genderValid}
          isInvalid={gender !== "female" && !genderValid && gender.length > 0}
        />
        <Form.Control.Feedback
          type="invalid"
          className="invalid-feedback"
        ></Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-group" controlId="country">
        <Form.Label className="form-label">Country</Form.Label>
        <Form.Control
          as="select"
          className="form-control"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          isValid={countryValid && country.length > 0}
          isInvalid={!countryValid && country.length > 0}
        >
          <option value="">Select a country</option>
          <option value="vn">Vietnam</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
        </Form.Control>
        <Form.Control.Feedback
          type="invalid"
          className="invalid-feedback"
        ></Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-group" controlId="agree">
        <Form.Check
          className="form-check"
          type="checkbox"
          label="I agree to the terms and conditions"
          checked={agree}
          onChange={() => setAgree(!agree)}
          isValid={agreeValid && agree}
          isInvalid={!agreeValid && agree}
        />
        <Form.Control.Feedback
          type="invalid"
          className="invalid-feedback"
        ></Form.Control.Feedback>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        disabled={!isFormValid}
        className="btn-primary"
      >
        Submit
      </Button>
    </Form>
  );
}

export default ComplexForm;
