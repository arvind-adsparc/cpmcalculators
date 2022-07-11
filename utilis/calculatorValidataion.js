// import { getCPMResult } from "./calculatorResult";
export const validateFn = (valueOne, valueTwo, valueThree) => {
  const inputs = [valueOne, valueTwo, valueThree];
  const validation = inputs.filter((info) => info).length;

  if (validation === 0) {
    return {
      status: false,
      message: "Please input any two fields to calculate the third field.",
    };
  } else if (validation === 1) {
    return {
      status: false,
      message: "Please input one more field.",
    };
  } else if (validation === 3) {
    return {
      status: false,
      message: "Please input only two fields",
    };
  }

  return {
    status: true,
    // message: getResult(),
  };
};
