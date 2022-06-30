import { message } from "antd";

export const validateFn = (impressions, cpm, campaignCost) => {
  console.log("getting this far");
  const inputs = [impressions, cpm, campaignCost];
  const validation = inputs.filter((info) => info).length;

  if (validation === 0) {
    message.error("Please input any two fields to calculate the third field.");
    return false;
  } else if (validation === 1) {
    message.error("Please input one more field.");
    return false;
  } else if (validation === 3) {
    message.error("Please input only two fields.");
    return false;
  }

  return true;
};
