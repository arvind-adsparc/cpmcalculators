// import { getCPMResult } from "./calculatorResult";
export const validateFn = (impressions, cpm, campaignCost) => {
  const inputs = [impressions, cpm, campaignCost];
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

  const getResult = () => {
    if (impressions === "") {
      let totalimpressions = (campaignCost / cpm) * 1000;
      return `On $${campaignCost} Campaign Cost if the cpm is $${cpm}  then the total Impressions would be ${totalimpressions} .`;
    } else if (cpm === "") {
      let totalcpm = (campaignCost / impressions) * 1000;
      return `On $${campaignCost} Campaign Cost if the Impressions are ${impressions}  then the total CPM would be $${totalcpm} .`;
    } else if (campaignCost === "") {
      let totalcampaigncost = (cpm * impressions) / 1000;
      return `On ${impressions} Impressions if the CPM is $${cpm} then the Campaign Cost would be $${totalcampaigncost} .`;
    }
  };

  return {
    status: true,
    message: getResult(),
  };
};