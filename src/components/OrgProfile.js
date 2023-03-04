import { useState } from "react";
import { orgProfileRules } from "../utils/rules";
import { validate } from "../utils/validate";
import { useNavigate } from "react-router-dom";

export function OrgProfile() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    orgName: "",
    taxNumber: "",
    ssn: "",
  });
  const [errorMessages, setErrorMessages] = useState({});

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setFormValues({ ...formValues, [name]: value });
    const validatingErrorMessage = validate(orgProfileRules[name], value);
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
            <p>Org Name</p>
            <input
              name="orgName"
              value={formValues.orgName}
              onChange={onChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Tax Number</p>
            <input
              name="taxNumber"
              value={formValues.taxNumber}
              onChange={onChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>SSN</p>
            <input name="ssn" value={formValues.ssn} onChange={onChange} />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      {JSON.stringify(errorMessages, 10)}
    </>
  );
}
