export const getCPMResult = (impressions, cpm, grossEarning) => {
  if (impressions === "") {
    let totalimpressions = (grossEarning / cpm) * 1000;
    return `On $${grossEarning} Gross Earning if the CPM is $${cpm}  then the total Impressions would be ${totalimpressions} .`;
  } else if (cpm === "") {
    let totalcpm = (grossEarning / impressions) * 1000;
    return `On $${grossEarning} Gross Earning if the Impressions are ${impressions}  then the total CPM would be $${totalcpm} .`;
  } else if (grossEarning === "") {
    let totalGrossEarning = (cpm * impressions) / 1000;
    return `On ${impressions} Impressions if the CPM is $${cpm} then the Gross Earning would be $${totalGrossEarning} .`;
  }
};

export const getRPMResult = (rpm, revenue, pageviews) => {
  if (rpm === "") {
    let totalRPM = (revenue / totalpageviews) * 1000;
    return `On $${revenue} total revenue if the total page views are ${pageviews}  then the total RPM would be ${totalRPM} .`;
  } else if (revenue === "") {
    let totalrevenue = (rpm * pageviews) / 1000;
    return `On ${rpm} RPM if the total page views are $${pageviews}  then the total revenue would be ${totalrevenue} .`;
  } else if (pageviews === "") {
    let totalpageviews = (revenue / rpm) * 1000;
    return `On ${rpm} RPM if the total revenue  is $${revenue}  then the total page views would be ${totalpageviews} .`;
  }
};

export const getECPMResult = (eCPM, revenue, impressions) => {
  if (eCPM === "") {
    let totaleCPM = (revenue / impressions) * 1000;
    return `On $${revenue} total revenue if the total impressions are ${impressions}  then the total eCPM would be ${totaleCPM} .`;
  } else if (revenue === "") {
    let totalrevenue = (eCPM * impressions) / 1000;
    return `On ${eCPM} eCPM  if the total impressions are ${impressions}  then the total revenue would be ${totalrevenue} .`;
  } else if (impressions === "") {
    let totalimpressions = (revenue / eCPM) * 1000;
    return `On ${revenue} revenue if the total eCPM  is $${eCPM}  then the total impressions would be ${totalimpressions} .`;
  }
};

export const getEPMVResult = (epmv, monthlyvisitors, monthlyrevenue) => {
  if (epmv === "") {
    let totalEPMV = (monthlyrevenue / monthlyvisitors) * 1000;
    return `On $${monthlyrevenue} monthly revenue if the total monthly visitors are ${monthlyvisitors}  then the total EPMV would be ${totalEPMV} .`;
  } else if (monthlyvisitors === "") {
    let totalmonthlyvisitors = (monthlyrevenue / epmv) * 1000;
    return `On $${monthlyrevenue} monthly revenue if the EPMV is ${epmv}  then the monthly visitors would be ${totalmonthlyvisitors} .`;
  } else if (monthlyrevenue === "") {
    let totalmonthlyrevenue = (epmv * monthlyvisitors) / 1000;
    return `On ${monthlyvisitors} monthly visitors if the EPMV is ${epmv}  then the monthly revenue would be $${totalmonthlyrevenue} .`;
  }
};
