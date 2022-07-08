export const getCPMResult = (impressions, cpm, campaignCost) => {
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

export const getRPMResult = () => {
  var totalRPM = (totalrevenue / totalpageviews) * 1000;

  var totaltotalrevenue = (RPM * totalpageviews) / 1000;

  var totaltotalpageviews = (totalrevenue / RPM) * 1000;
};

export const getECPMResult = () => {
  var totaleCPM = (totalrevenue / totalimpressions) * 1000;

  var totaltotalrevenue = (eCPM * totalimpressions) / 1000;

  var totaltotalimpressions = (totalrevenue / eCPM) * 1000;
};

export const getEPMVResult = () => {
  var totalEPMV = (monthlyrevenue / monthlyvisitors) * 1000;

  var totalmonthlyvisitors = (monthlyrevenue / EPMV) * 1000;

  var totalmonthlyrevenue = (EPMV * monthlyvisitors) / 1000;
};
