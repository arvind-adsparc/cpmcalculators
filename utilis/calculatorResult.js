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

export const getRPMResult = (rpm, revenue, pageviews) => {
  if (rpm === "") {
    let totalRPM = (revenue / totalpageviews) * 1000;
    return `On $${revenue} total revenue if the total page views are $${pageviews}  then the total RPM would be ${totalRPM} .`;
  } else if (revenue === "") {
    let totalrevenue = (rpm * pageviews) / 1000;
    return `On ${rpm} RPM if the total page views are $${pageviews}  then the total revenue would be ${totalrevenue} .`;
  } else if (pageviews === "") {
    let totalpageviews = (revenue / rpm) * 1000;
    return `On ${rpm} RPM if the total revenue  is $${revenue}  then the total page views would be ${totalpageviews} .`;
  }
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
