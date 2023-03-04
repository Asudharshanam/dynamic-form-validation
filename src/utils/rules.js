// rules should only have minLength, maxLength and regex
// errorMessage keys should be minLength, maxLength and regex
export const userProfileRules = {
  // ***key is always input name
  firstName: {
    minLength: 1,
    errorMessage: {
      minLength: "First Name is required",
    },
  },
  lastName: {
    minLength: 5,
    errorMessage: {
      minLength: "Last Name is should not be less than 5 characters",
    },
  },
  email: {
    minLength: 1,
    regex:
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    errorMessage: {
      minLength: "Email is required",
      regex: "Email should be in test@test.com format",
    },
  },
};

export const orgProfileRules = {
  // ***key is always input name
  orgName: {
    minLength: 1,
    errorMessage: {
      minLength: "Organization Name is required",
    },
  },
  taxNumber: {
    minLength: 12,
    errorMessage: {
      minLength: "Tax Number is required and should not be less than 12 digits",
    },
  },
  ssn: {
    minLength: 9,
    maxLength: 9,
    errorMessage: {
      minLength: "SSN is required and should be 9 digits",
      maxLength: "SSN should not be more than 9 digits",
    },
  },
};
