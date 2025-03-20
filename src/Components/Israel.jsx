import { useState } from "react";

const Israel = () => {
  const [selectedTax, setSelectedTax] = useState(null);

  const taxCalculators = {
    "Income Tax": () => <IncomeTax />,
    "Wealth Tax": () => <WealthTax />,
    "GST": () => <GST />,
    "Property Tax": () => <PropertyTax />,
    "Luxury Tax": () => <LuxuryTax />,
    "Social Security Tax": () => <SocialSecurityTax />,
  };

  return (
    <div className="country-container">
      <h2>Israel Tax Calculators</h2>
      <div className="tax-buttons">
        {Object.keys(taxCalculators).map((tax) => (
          <button key={tax} onClick={() => setSelectedTax(tax)}>
            {tax}
          </button>
        ))}
      </div>
      <hr />
      <div className="tax-calculator-container">
        {selectedTax ? taxCalculators[selectedTax]() : <p>Select a tax type.</p>}
      </div>
    </div>
  );
};

// Individual tax calculators
const IncomeTax = () => {
  const [income, setIncome] = useState("");
  const [tax, setTax] = useState(null);

  const calculateTax = () => {
    const taxAmount = income * 0.35; // Example Israel tax rate
    setTax(taxAmount);
  };

  return (
    <div>
      <h3>Income Tax Calculator (Israel)</h3>
      <input type="number" placeholder="Enter income" onChange={(e) => setIncome(e.target.value)} />
      <button onClick={calculateTax}>Calculate</button>
      {tax !== null && <p>Tax: ${tax.toFixed(2)}</p>}
    </div>
  );
};

const WealthTax = () => <h3>Wealth Tax for Israel (Coming Soon)</h3>;
const GST = () => <h3>GST Calculator for Israel (Coming Soon)</h3>;
const PropertyTax = () => <h3>Property Tax for Israel (Coming Soon)</h3>;
const LuxuryTax = () => <h3>Luxury Tax for Israel (Coming Soon)</h3>;
const SocialSecurityTax = () => <h3>Social Security Tax for Israel (Coming Soon)</h3>;

export default Israel;
