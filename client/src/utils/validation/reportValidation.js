import validator from "../validator";

const validateReportsData = data => {
  const tooShort = title =>
    `^${title} is too short (minimum is %{count} characters)`;
  const tooLong = title =>
    `^${title} is too long (maximum is %{count} characters)`;

  const constraints = {
    reportTitle: {
      length: {
        minimum: 3,
        maximum: 100,
        tooShort: tooShort("Report Title"),
        tooLong: tooLong("Report Title"),
      },
    },
    reportText: {
      length: {
        minimum: 3,
        maximum: 1500,
        tooShort: tooShort("Report Text"),
        tooLong: tooLong("Report Text"),
      },
    },
  };

  let { isValid, errors } = validator({ ...data }, constraints);

  return {
    isValid,
    errors,
  };
};

export default validateReportsData;
