const companyDetails = [
  {
    calendarYear: "2000",
    cik: "2",
    costAndExpenses: "Mission 1 description",
    costOfRevenue: 223546000000,
    depreciationAndAmortization: 11104000000,
    ebitda: 130541000000,
    ebitdaratio: 0.3310467428,
    eps: 6.15,
    epsdiluted: 6.11,
    generalAndAdministrativeExpenses: 0,
    grossProfit: 170782000000,
    grossProfitRatio: 0.4330963056,
    incomeBeforeTax: 119103000000,
    incomeBeforeTaxRatio: 0.3020404333,
    incomeTaxExpense: 19300000000,
    interestExpense: 2931000000,
    interestIncome: 2825000000,
    netIncome: 99803000000,
    netIncomeRatio: 0.2530964071,
    operatingExpenses: 51345000000,
    operatingIncome: 119437000000,
    operatingIncomeRatio: 0.302887444,
    otherExpenses: -334000000,
    period: "FY",
    reportedCurrency: "USD",
    researchAndDevelopmentExpenses: 26251000000,
    revenue: 394328000000,
    sellingAndMarketingExpenses: 0,
    sellingGeneralAndAdministrativeExpenses: 25094000000,
    symbol: "AAPL",
    totalOtherIncomeExpensesNet: -334000000,
    weightedAverageShsOut: 16215963000,
    weightedAverageShsOutDil: 16325819000,
  },
  {
    calendarYear: "2000",
    cik: "2",
    costAndExpenses: "Mission 1 description",
    costOfRevenue: 223546000000,
    depreciationAndAmortization: 11104000000,
    ebitda: 130541000000,
    ebitdaratio: 0.3310467428,
    eps: 6.15,
    epsdiluted: 6.11,
    generalAndAdministrativeExpenses: 0,
    grossProfit: 170782000000,
    grossProfitRatio: 0.4330963056,
    incomeBeforeTax: 119103000000,
    incomeBeforeTaxRatio: 0.3020404333,
    incomeTaxExpense: 19300000000,
    interestExpense: 2931000000,
    interestIncome: 2825000000,
    netIncome: 99803000000,
    netIncomeRatio: 0.2530964071,
    operatingExpenses: 51345000000,
    operatingIncome: 119437000000,
    operatingIncomeRatio: 0.302887444,
    otherExpenses: -334000000,
    period: "FY",
    reportedCurrency: "USD",
    researchAndDevelopmentExpenses: 26251000000,
    revenue: 394328000000,
    sellingAndMarketingExpenses: 0,
    sellingGeneralAndAdministrativeExpenses: 25094000000,
    symbol: "AAPL",
    totalOtherIncomeExpensesNet: -334000000,
    weightedAverageShsOut: 16215963000,
    weightedAverageShsOutDil: 16325819000,
  },
];

const companiesProfiles = {
  rockets: [
    {
      companyName: "Company 1",
      fullTimeEmployees: "4",
      image: "company.jpg",
      industry: "industry",
    },
    {
      companyName: "Company 2",
      fullTimeEmployees: "5",
      image: "company2.jpg",
      industry: "industry",
    },
  ],
};

const get = (url) => {
  if (url === "https://financialmodelingprep.com/api/v3/profile/") {
    return Promise.resolve({
      data: companiesProfiles,
    });
  }

  if (url === "https://financialmodelingprep.com/api/v3/income-statement/") {
    return Promise.resolve({
      data: companyDetails,
    });
  }

  return Promise.resolve({
    data: {},
  });
};

export default { get };
