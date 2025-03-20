import { useState } from "react";

// Oceanian Countries
import AustraliaLogo from "./assets/Flags/Oceania/Australia.webp";
import NewZealandLogo from "./assets/Flags/Oceania/New-Zealand.png";

// North American Countries
import CanadaLogo from "./assets/Flags/North-America/Canada.png";
import USALogo from "./assets/Flags/North-America/USA.webp";

// European Countries
import FranceLogo from "./assets/Flags/European/France.png";
import GermanyLogo from "./assets/Flags/European/Germany.png";
import UKLogo from "./assets/Flags/European/UK.webp";

// Country Data (with image paths for flags)
const countries = [
  { name: "USA", flag: USALogo },
  { name: "Canada", flag: CanadaLogo },
  { name: "UK", flag: UKLogo },
  { name: "Australia", flag: AustraliaLogo },
  { name: "France", flag: FranceLogo },
  { name: "Germany", flag: GermanyLogo },
  { name: "New_Zealand", flag: NewZealandLogo },
];

// Tools with their available countries and input fields
const tools = [
  {
    name: "Mortgage-Calculator",
    countries: ["USA", "Canada", "UK", "Australia", "France", "Germany", "New_Zealand"],
    inputs: ["Home Price", "Down Payment", "Interest Rate", "Loan Term"],
  },
  {
    name: "Loan-EMI-Calculator",
    countries: ["USA", "Canada", "UK", "Australia", "France", "Germany", "New_Zealand"],
    inputs: ["Loan Amount", "Interest Rate", "Loan Term"],
  },
  {
    name: "Sales-Tax-Calculator",
    countries: ["USA", "Canada", "UK", "Australia", "Germany", "New_Zealand"],
    inputs: ["Price",  "Tax Rate"],
  },
  {
    name: "Retirement-Savings-Estimator",
    countries: ["USA", "Canada", "UK", "Australia", "Germany", "New_Zealand"],
    inputs: ["Current Age", "Retirement Age", "Savings Amount", "Expected Returns", "Monthly Contribution"],
  },
  {
    name: "Stock-Profit/Loss-Calculator",
    countries: ["USA", "Canada", "UK", "Australia", "France", "Germany", "New_Zealand"],
    inputs: ["Buy Price", "Sell Price", "Shares", "Brokerage Fees"],
  },
  {
    name: "Crypto-Tax-Calculator",
    countries: ["USA", "Canada", "UK", "Australia", "Germany", "New_Zealand"],
    inputs: ["Buy Price", "Sell Price", "Quantity",  "Transaction Fees"],
  },
  {
    name: "Budget-Planner",
    countries: ["USA", "Canada", "UK", "Australia", "France", "Germany", "New_Zealand"],
    inputs: ["Income", "Rent", "Utilities", "Groceries", "Transport", "Entertainment", "Savings"],
  },
  {
    name: "Fuel-Cost-Calculator",
    countries: ["USA", "Canada", "UK", "Australia", "France", "Germany", "New_Zealand"],
    inputs: ["Distance", "Fuel Efficiency", "Fuel Price per Liter/Gallon"],
  },
  {
    name: "Credit-Score",
    countries: ["USA", "Canada", "UK", "Australia", "Germany", "New_Zealand"],
    inputs: ["Current Credit Score", "Credit Card Balance", "Payment History", "New Loans"],
  },
  {
    name: "Hourly-to-Salary-Converter",
    countries: ["USA", "Canada", "UK", "Australia", "France", "Germany", "New_Zealand"],
    inputs: ["Hourly Rate", "Work Hours Per Week", "Work Weeks Per Year", "Tax Bracket"],
  },
  {
    name: "VAT-Calculator",
    countries: ["UK", "France", "Germany", "Australia", "New_Zealand"],
    inputs: ["Amount", "VAT Rate (Standard/Reduced/Exempt)"],
  },
  {
    name: "Paycheck-Calculator",
    countries: ["USA", "Canada", "UK", "Australia", "Germany", "New_Zealand"],
    inputs: ["Gross Salary", "Deductions", "Tax Rate", "Pay Frequency (Weekly/Monthly)"],
  },
  {
    name: "Savings-Goal-Calculator",
    countries: ["USA", "Canada", "UK", "Australia", "France", "Germany", "New_Zealand"],
    inputs: ["Goal Amount", "Monthly Savings", "Interest Rate", "Time Period"],
  },
];



const toolDescriptions = {
  "Budget-Planner": 
    "The Budget Planner helps you track and manage your income and expenses efficiently. By entering your total income and listing essential expenses such as rent, utilities, groceries, and savings, you can determine how much money remains for discretionary spending. This tool is ideal for financial planning, reducing unnecessary expenses, and achieving savings goals effectively.",

  "Mortgage-Calculator": 
    "The Mortgage Calculator estimates your monthly mortgage payments based on the loan amount, interest rate, and term duration. It takes into account principal and interest payments, helping you understand the total cost of homeownership. This tool is useful for first-time homebuyers and property investors looking to plan their finances before making a real estate purchase.",

  "Fuel-Cost-Calculator": 
    "The Fuel Cost Calculator helps you estimate how much you’ll spend on fuel for a given trip based on the distance traveled, fuel efficiency of your vehicle, and fuel price per liter or gallon. It’s useful for budgeting travel expenses, comparing fuel costs for different vehicles, and planning road trips more efficiently.",

  "Credit-Score": 
    "This calculator provides an estimate of how financial actions impact your credit score. It considers factors such as your current credit score, outstanding credit card balances, payment history, and new loans. By adjusting these values, you can see how improving payment habits or reducing debt could positively affect your score. It’s a great tool for financial planning and improving creditworthiness.",

  "Hourly-to-Salary-Converter": 
    "The Hourly to Salary Converter helps you calculate your annual salary based on your hourly wage, weekly work hours, and work weeks per year. You can also factor in taxes to get an estimate of your take-home pay. This tool is beneficial for freelancers, hourly employees, and those considering switching between hourly and salaried jobs.",

  "Crypto-Tax-Calculator": 
    "The Crypto Tax Calculator estimates your profit or loss from cryptocurrency transactions. By entering the buy price, sell price, quantity, and transaction fees, it calculates the total gains or losses. This tool is useful for crypto traders and investors to determine taxable income and potential tax liabilities for their trades.",

  "VAT-Calculator": 
    "The VAT Calculator helps you determine the Value-Added Tax (VAT) for a given amount based on the country-specific VAT rate. It calculates both the VAT amount and the total cost including VAT. This tool is useful for businesses, freelancers, and consumers who need to understand tax-inclusive pricing.",

  "Paycheck-Calculator": 
    "The Paycheck Calculator computes your net salary after tax and deductions. It considers your gross income, applicable tax rates, deductions, and pay frequency (weekly or monthly). This tool is useful for employees and job seekers who want to estimate their take-home pay and better manage their finances.",

  "Savings-Goal-Calculator": 
    "The Savings Goal Calculator helps you determine how much you need to save each month to reach a financial goal within a specific timeframe. It factors in monthly savings, interest rates, and time periods to project the total future savings. This tool is ideal for individuals saving for a house, vacation, emergency fund, or retirement planning.",
  
  "Loan-EMI-Calculator": "The Loan EMI Calculator helps you estimate your monthly loan repayments based on the loan amount, interest rate, loan term, and extra payments. It provides a clear breakdown of how much you’ll pay in principal and interest each month, helping you manage your debt efficiently. This tool is useful for personal loans, auto loans, and other types of installment-based borrowing.",

  "Sales-Tax-Calculator" : "The Sales Tax Calculator helps you determine the total price of a product after applying sales tax based on your location. By entering the base price, state/province, and applicable tax rate, you can calculate the final cost of your purchase. This tool is helpful for consumers and businesses to ensure accurate tax-inclusive pricing.",

  "Retirement-Savings-Estimator" : "The Retirement Savings Estimator helps you plan for a secure financial future by calculating the growth of your savings over time. By entering details such as your current age, expected retirement age, savings amount, expected returns, and monthly contributions, you can project how much you'll have at retirement. This tool is ideal for long-term financial planning and investment strategy.",

  "Stock-Profit/Loss-Calculator" : "The Stock Profit/Loss Calculator helps traders and investors determine the potential gains or losses from stock transactions. By inputting the buy price, sell price, number of shares, and brokerage fees, the tool calculates the net profit or loss. This is useful for making informed investment decisions and evaluating stock trading strategies.",
  };



export default function MultiCalculator() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedTool, setSelectedTool] = useState(null);
  const [inputValues, setInputValues] = useState({});
  const [result, setResult] = useState(null);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSelectedTool(null);
    setInputValues({});
    setResult(null);
  };

  const handleToolSelect = (tool) => {
    setSelectedTool(tool);
    setInputValues({});
    setResult(null);
  };

  const handleInputChange = (e, field) => {
    setInputValues({ ...inputValues, [field]: e.target.value });
  };

  // Calculation Logic
  const handleCalculate = () => {
    if (!selectedTool) return;

    let res = "";
    switch (selectedTool) {
      case "Mortgage-Calculator": {
        const price = parseFloat(inputValues["Home Price"] || 0);
        const downPayment = parseFloat(inputValues["Down Payment"] || 0);
        const interestRate = parseFloat(inputValues["Interest Rate"] || 0) / 100 / 12;
        const loanTerm = parseFloat(inputValues["Loan Term"] || 0) * 12;
        const loanAmount = price - downPayment;
        const monthlyPayment =
          (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
        res = `Estimated Monthly Payment: $${monthlyPayment.toFixed(2)}`;
        break;
      }

      case "Loan-EMI-Calculator": {
        const loanAmount = parseFloat(inputValues["Loan Amount"] || 0);
        const interestRate = parseFloat(inputValues["Interest Rate"] || 0) / 100 / 12;
        const loanTerm = parseFloat(inputValues["Loan Term"] || 0) * 12;

        const emi = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
        res = `Your Monthly EMI: $${emi.toFixed(2)}`;
        break;
      }
      case "Sales-Tax-Calculator": {
        const price = parseFloat(inputValues["Price"] || 0);
        const taxRate = parseFloat(inputValues["Tax Rate"] || 0) / 100;
        const salesTax = price * taxRate;
        const totalPrice = price + salesTax;
        res = `Sales Tax: $${salesTax.toFixed(2)}, Total Price: $${totalPrice.toFixed(2)}`;
        break;
      }
    
      case "Retirement-Savings-Estimator": {
        const currentAge = parseFloat(inputValues["Current Age"] || 0);
        const retirementAge = parseFloat(inputValues["Retirement Age"] || 0);
        const savings = parseFloat(inputValues["Savings Amount"] || 0);
        const expectedReturns = parseFloat(inputValues["Expected Returns"] || 0) / 100 / 12;
        const monthlyContribution = parseFloat(inputValues["Monthly Contribution"] || 0);
        const months = (retirementAge - currentAge) * 12;
        let futureValue = savings * Math.pow(1 + expectedReturns, months);
        for (let i = 0; i < months; i++) {
          futureValue += monthlyContribution * Math.pow(1 + expectedReturns, months - i);
        }
        res = `Estimated Retirement Savings: $${futureValue.toFixed(2)}`;
        break;
      }
    
      case "Stock-Profit/Loss-Calculator": {
        const buyPrice = parseFloat(inputValues["Buy Price"] || 0);
        const sellPrice = parseFloat(inputValues["Sell Price"] || 0);
        const shares = parseFloat(inputValues["Shares"] || 0);
        const brokerageFees = parseFloat(inputValues["Brokerage Fees"] || 0);
        const profitLoss = (sellPrice - buyPrice) * shares - brokerageFees;
        res = `Stock Profit/Loss: $${profitLoss.toFixed(2)}`;
        break;
      }

      case "Budget-Planner": {
        const income = parseFloat(inputValues["Income"] || 0);
        const expenses = [
          "Rent",
          "Utilities",
          "Groceries",
          "Transport",
          "Entertainment",
          "Savings"
        ].reduce((total, key) => total + parseFloat(inputValues[key] || 0), 0);
        res = `Remaining Balance: $${(income - expenses).toFixed(2)}`;
        break;
      }

      case "Fuel-Cost-Calculator": {
        const distance = parseFloat(inputValues["Distance"] || 0);
        const efficiency = parseFloat(inputValues["Fuel Efficiency"] || 1);
        const fuelPrice = parseFloat(inputValues["Fuel Price per Liter/Gallon"] || 0);
        res = `Total Fuel Cost: $${((distance / efficiency) * fuelPrice).toFixed(2)}`;
        break;
      }
  
      case "Credit-Score": {
        const creditScore = parseFloat(inputValues["Current Credit Score"] || 0);
        const cardBalance = parseFloat(inputValues["Credit Card Balance"] || 0);
        const paymentHistory = parseFloat(inputValues["Payment History"] || 0);
        const newLoans = parseFloat(inputValues["New Loans"] || 0);
        const newCreditScore = creditScore + (paymentHistory * 5) - (cardBalance * 0.1) - (newLoans * 2);
        res = `Estimated New Credit Score: ${Math.max(300, Math.min(newCreditScore, 850))}`;
        break;
      }
  
      case "Hourly-to-Salary-Converter": {
        const hourlyRate = parseFloat(inputValues["Hourly Rate"] || 0);
        const hoursPerWeek = parseFloat(inputValues["Work Hours Per Week"] || 0);
        const weeksPerYear = parseFloat(inputValues["Work Weeks Per Year"] || 0);
        const taxBracket = parseFloat(inputValues["Tax Bracket"] || 0) / 100;
        const annualSalary = hourlyRate * hoursPerWeek * weeksPerYear;
        const afterTaxSalary = annualSalary * (1 - taxBracket);
        res = `Annual Salary (Before Tax): $${annualSalary.toFixed(2)} | After Tax: $${afterTaxSalary.toFixed(2)}`;
        break;
      }
  
      case "Crypto-Tax-Calculator": {
        const buyPriceCrypto = parseFloat(inputValues["Buy Price"] || 0);
        const sellPriceCrypto = parseFloat(inputValues["Sell Price"] || 0);
        const quantity = parseFloat(inputValues["Quantity"] || 0);
        const transactionFees = parseFloat(inputValues["Transaction Fees"] || 0);
        const profitLossCrypto = (sellPriceCrypto - buyPriceCrypto) * quantity - transactionFees;
        res = `Crypto Profit/Loss: $${profitLossCrypto.toFixed(2)}`;
        break;
      }
  
      case "VAT-Calculator": {
        const amount = parseFloat(inputValues["Amount"] || 0);
        const vatRate = inputValues["VAT Rate (Standard/Reduced/Exempt)"];
        const country = inputValues["Country"];
        const vatRates = {
          UK: { standard: 0.20, reduced: 0.05, exempt: 0.00 },
          France: { standard: 0.20, reduced: 0.055, exempt: 0.00 },
          Germany: { standard: 0.19, reduced: 0.07, exempt: 0.00 },
          Australia: { standard: 0.10, reduced: 0.00, exempt: 0.00 },
          New_Zealand: { standard: 0.15, reduced: 0.00, exempt: 0.00 }
        };
        const rate = vatRates[country]?.[vatRate] || 0;
        const vatAmount = amount * rate;
        const total = amount + vatAmount;
        res = `VAT Amount: $${vatAmount.toFixed(2)}, Total Amount: $${total.toFixed(2)}`;
        break;
      }
  
      case "Paycheck-Calculator": {
        const grossSalary = parseFloat(inputValues["Gross Salary"] || 0);
        const deductions = parseFloat(inputValues["Deductions"] || 0);
        const taxRate = parseFloat(inputValues["Tax Rate"] || 0);
        const payFrequency = inputValues["Pay Frequency (Weekly/Monthly)"];
        const tax = grossSalary * (taxRate / 100);
        const netSalary = grossSalary - tax - deductions;
        const frequencyMultiplier = payFrequency === "Weekly" ? 52 : 12;
        const paycheck = netSalary / frequencyMultiplier;
        res = `Net ${payFrequency} Paycheck: $${paycheck.toFixed(2)}`;
        break;
      }
  
      case "Savings-GoalCalculator": {
        const goalAmount = parseFloat(inputValues["Goal Amount"] || 0);
        const monthlySavings = parseFloat(inputValues["Monthly Savings"] || 0);
        const interestRate = parseFloat(inputValues["Interest Rate"] || 0) / 100;
        const timePeriod = parseFloat(inputValues["Time Period"] || 0);
        const months = timePeriod * 12;
        const monthlyInterestRate = interestRate / 12;
        let futureValue = 0;
        for (let i = 0; i < months; i++) {
          futureValue = (futureValue + monthlySavings) * (1 + monthlyInterestRate);
        }
        res = `Total Savings After ${timePeriod} Years: $${futureValue.toFixed(2)}`;
        break;
      }

      default:
        res = "Calculation not implemented for this tool.";
    }

    setResult(res);
  };


  const currencySymbols = {
    // Europe
    Austria: "€",
    Belgium: "€",
    Denmark: "kr",
    France: "€",
    Germany: "€",
    Italy: "€",
    Netherlands: "€",
    Poland: "zł",
    Portugal: "€",
    Spain: "€",
    Sweden: "kr",
    UK: "£",
  
    // Asia
    China: "¥",
    India: "₹",
    Indonesia: "Rp",
    Israel: "₪",
    Japan: "¥",
    Malaysia: "RM",
    Philippines: "₱",
    South_Korea: "₩",
    Thailand: "฿",
    Turkey: "₺",
    UAE: "AED",
  
    // North America
    Canada: "C$",
    Mexico: "Mex$",
    USA: "$",
  
    // South America
    Argentina: "ARS$",
    Bolivia: "Bs",
    Brazil: "R$",
    Chile: "CLP$",
    Colombia: "COP$",
    Ecuador: "$", // Uses USD
    Paraguay: "₲",
    Peru: "S/",
    Uruguay: "$U",
    Venezuela: "Bs",
  
    // Oceania
    Australia: "A$",
    New_Zealand: "NZ$",
  };
  
  return (
    <div className="calculator-container">
      <h1>Multi-Tool Finance & Tax Calculator</h1>
  
      {/* Country Selection */}
      <div className="country-container">
        {countries.map(({ name, flag }) => (
          <button
            key={name}
            className={`country-btn ${selectedCountry === name ? "active" : ""}`}
            onClick={() => handleCountrySelect(name)}
          >
            <img src={flag} alt={name} />
            {name}
          </button>
        ))}
      </div>
  
      {/* Tools */}
      {selectedCountry && (
        <div className="tools-container">
          {tools
            .filter((tool) => tool.countries.includes(selectedCountry))
            .map(({ name }) => (
              <button
                key={name}
                className={`tool-btn ${selectedTool === name ? "active" : ""}`}
                onClick={() => handleToolSelect(name)}
              >
                {name}
              </button>
            ))}
        </div>
      )}
  
      {/* Inputs & Calculation */}
      {selectedTool && (
        <div className="tool-result">
          <h2>Calculator for {selectedTool}</h2>
  
          {/* Display additional information about the selected calculator */}
          <p>{toolDescriptions[selectedTool] || "This calculator helps you with financial calculations."}</p>
  
          {tools.find((tool) => tool.name === selectedTool)?.inputs.map((field) => (
            <input key={field} placeholder={field} onChange={(e) => handleInputChange(e, field)} />
          ))}
  
          <button onClick={handleCalculate}>Calculate</button>
  
          {result && <p>Result: {result}</p>}
        </div>
      )}
    </div>
  );
}  