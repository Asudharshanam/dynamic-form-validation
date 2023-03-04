export function validate(ruleSet, value) {
  const minLengthReq = ruleSet.minLength;
  const maxLengthReq = ruleSet.maxLength;
  const regexReq = ruleSet.regex;
  if (minLengthReq && value.length < minLengthReq) {
    return ruleSet.errorMessage["minLength"];
  }

  if (maxLengthReq && value.length > maxLengthReq) {
    return ruleSet.errorMessage["maxLength"];
  }

  if (regexReq && !regexReq.test(value)) {
    return ruleSet.errorMessage["regex"];
  }
}
