function validate(schema, dataToValidate) {
  const { error } = schema.validate(dataToValidate);
  if (error) {
    return error.message;
  }
  return null;
}

module.exports = { validate };
