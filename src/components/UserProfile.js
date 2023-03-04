import { useState } from "react";
import { userProfileRules } from "../utils/rules";
import { validate } from "../utils/validate";
import { useNavigate } from "react-router-dom";

export function UserProfile() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [errorMessages, setErrorMessages] = useState({});

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setFormValues({ ...formValues, [name]: value });
    const validatingErrorMessage = validate(userProfileRules[name], value);
    setErrorMessages(() => {
      return { ...errorMessages, ...{ [name]: validatingErrorMessage } };
    });
  };

  const removeUndefinedProps = Object.keys(errorMessages).reduce((acc, key) => {
    const _acc = acc;
    if (errorMessages[key] !== undefined) _acc[key] = errorMessages[key];
    return _acc;
  }, {});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Object.values(removeUndefinedProps).length) {
      alert("You have submitted the form.");
    }
  };

  return (
    <>
      <button onClick={() => navigate("/")}>Home</button>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>First Name</p>
            <input
              name="firstName"
              value={formValues.firstName}
              onChange={onChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Last Name</p>
            <input
              name="lastName"
              value={formValues.lastName}
              onChange={onChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Email</p>
            <input name="email" value={formValues.email} onChange={onChange} />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      {JSON.stringify(errorMessages, 10)}
    </>
  );
}
