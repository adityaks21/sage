import React, { useState } from "react";

// European Countries
import AustriaLogo from "./assets/Flags/European/Austria.png";
import BelgiumLogo from "./assets/Flags/European/Belgium.png";
import DenmarkLogo from "./assets/Flags/European/Denmark.png";
import FranceLogo from "./assets/Flags/European/France.png";
import GermanyLogo from "./assets/Flags/European/Germany.png";
import ItalyLogo from "./assets/Flags/European/Italy.png";
import NetherlandsLogo from "./assets/Flags/European/Netherlands.png";
import PolandLogo from "./assets/Flags/European/Poland.png";
import PortugalLogo from "./assets/Flags/European/Portugal.png";
import SpainLogo from "./assets/Flags/European/Spain.png";
import SwedenLogo from "./assets/Flags/European/Sweden.png";
import UKLogo from "./assets/Flags/European/UK.webp";

// Asian Countries
import ChinaLogo from "./assets/Flags/Asian/China.png";
import IndiaLogo from "./assets/Flags/Asian/India.webp";
import IndonesiaLogo from "./assets/Flags/Asian/Indonesia.png";
import IsraelLogo from "./assets/Flags/Asian/Israel.png";
import JapanLogo from "./assets/Flags/Asian/Japan.png";
import MalaysiaLogo from "./assets/Flags/Asian/Malaysia.png";
import PhilippinesLogo from "./assets/Flags/Asian/Philippines.png";
import SouthKoreaLogo from "./assets/Flags/Asian/South-Korea.png";
import ThailandLogo from "./assets/Flags/Asian/Thailand.png";
import TurkeyLogo from "./assets/Flags/Asian/Turkey.png";
import UAELogo from "./assets/Flags/Asian/UAE.png";

// North American Countries
import CanadaLogo from "./assets/Flags/North-America/Canada.png";
import MexicoLogo from "./assets/Flags/North-America/Mexico.png";
import USALogo from "./assets/Flags/North-America/USA.webp";

// South American Countries
import ArgentinaLogo from "./assets/Flags/South-America/Argentina.png";
import BoliviaLogo from "./assets/Flags/South-America/Bolivia.png";
import BrazilLogo from "./assets/Flags/South-America/Brazil.png";
import ChileLogo from "./assets/Flags/South-America/Chile.png";
import ColombiaLogo from "./assets/Flags/South-America/Colombia.png";
import EcuadorLogo from "./assets/Flags/South-America/Ecuador.png";
import ParaguayLogo from "./assets/Flags/South-America/Paraguay.png";
import PeruLogo from "./assets/Flags/South-America/Peru.png";
import UruguayLogo from "./assets/Flags/South-America/Uruguay.png";
import VenezuelaLogo from "./assets/Flags/South-America/Venezuela.png";

// Oceanian Countries
import AustraliaLogo from "./assets/Flags/Oceania/Australia.webp";
import NewZealandLogo from "./assets/Flags/Oceania/New-Zealand.png";

const continents = [
  {
    name: "Europe",
    countries: [
      { name: "Austria", logo: AustriaLogo},
      { name: "Belgium", logo: BelgiumLogo },
      { name: "Denmark", logo: DenmarkLogo},
      { name: "France", logo: FranceLogo },
      { name: "Germany", logo: GermanyLogo  },
      { name: "Italy", logo: ItalyLogo },
      { name: "Netherlands", logo: NetherlandsLogo},
      { name: "Poland", logo: PolandLogo },
      { name: "Portugal", logo: PortugalLogo},
      { name: "Spain", logo: SpainLogo},
      { name: "Sweden", logo: SwedenLogo },
      { name: "UK", logo: UKLogo },
    ],
  },
  {
    name: "Asia",
    countries: [
      { name: "China", logo: ChinaLogo },
      { name: "India", logo: IndiaLogo },
      { name: "Indonesia", logo: IndonesiaLogo },
      { name: "Israel", logo: IsraelLogo },
      { name: "Japan", logo: JapanLogo },
      { name: "Malaysia", logo: MalaysiaLogo},
      { name: "Philippines", logo: PhilippinesLogo  },
      { name: "South_Korea", logo: SouthKoreaLogo },
      { name: "Thailand", logo: ThailandLogo },
      { name: "Turkey", logo: TurkeyLogo },
      // { name: "UAE", logo: UAELogo },
    ],
  },
  {
    name: "North America",
    countries: [
      { name: "Canada", logo: CanadaLogo },
      { name: "Mexico", logo: MexicoLogo },
      { name: "USA", logo: USALogo}
    ],
  },
  {
    name: "South America",
    countries: [
      { name: "Argentina", logo: ArgentinaLogo },
      { name: "Bolivia", logo: BoliviaLogo},
      { name: "Brazil", logo: BrazilLogo },
      { name: "Chile", logo: ChileLogo },
      { name: "Colombia", logo: ColombiaLogo },
      { name: "Ecuador", logo: EcuadorLogo },
      { name: "Paraguay", logo: ParaguayLogo },
      { name: "Peru", logo: PeruLogo },
      { name: "Uruguay", logo: UruguayLogo },
      { name: "Venezuela", logo: VenezuelaLogo }
    ],
  },
  {
    name: "Oceania",
    countries: [
      { name: "Australia", logo: AustraliaLogo},
      { name: "New_Zealand", logo: NewZealandLogo},
    ],
  },
];

const taxCalculators = {
  Austria: (income) => {
    if (income <= 11000) return 0;
    if (income <= 18000) return (income - 11000) * 0.2;
    if (income <= 31000) return 1400 + (income - 18000) * 0.3;
    if (income <= 60000) return 5300 + (income - 31000) * 0.42;
    if (income <= 90000) return 17300 + (income - 60000) * 0.48;
    if (income <= 1000000) return 31700 + (income - 90000) * 0.5;
    return 505700 + (income - 1000000) * 0.55;
},
Belgium: (income) => {
  if (income <= 13870) return 0;
  if (income <= 24480) return (income - 13870) * 0.25;
  if (income <= 42870) return 2652.5 + (income - 24480) * 0.40;
  if (income <= 74370) return 10022.5 + (income - 42870) * 0.45;
  return 23835 + (income - 74370) * 0.50;
},

Denmark: (income) => {
  if (income <= 50000) return income * 0.08; // Labor Market Contribution (AM-bidrag)
  if (income <= 568900) return (income - 50000) * 0.3767 + 4000; // Bottom tax + AM-bidrag
  return (income - 568900) * 0.5267 + 196896; // Top tax + Bottom tax + AM-bidrag
},

France: (income) => {
  if (income <= 10_777) return 0;
  if (income <= 27_478) return (income - 10_777) * 0.11;
  if (income <= 78_570) return (income - 27_478) * 0.30 + 1_839.11;
  if (income <= 168_994) return (income - 78_570) * 0.41 + 17_181.71;
  return (income - 168_994) * 0.45 + 50_390.11;
},

Germany: (income) => {
  if (income <= 10_908) return 0;
  if (income <= 61_972) return ((income - 10_908) * 0.14) + 1_400;
  if (income <= 277_826) return (income - 61_972) * 0.42 + 8_780.90;
  return (income - 277_826) * 0.45 + 87_298.56;
},

Italy: (income) => {
  if (income <= 28_000) return income * 0.23;
  if (income <= 50_000) return (income - 28_000) * 0.35 + 6_440;
  return (income - 50_000) * 0.43 + 14_240;
},

  // Netherlands Tax Calculator
  Netherlands: (income) => {
    if (income <= 38,441) {
      return income * 0.3582;
    } else if (income <= 76,817) {
      return (38,441 * 0.3582) + ((income - 38,441) * 0.3748);
    } else {
      return (38,441 * 0.3582) + ((76,817 - 38,441) * 0.3748) + ((income - 76,817) * 0.495);
    }
  },

  // Poland Tax Calculator
  Poland: (income) => {
    if (income <= 120000) {
      return income * 0.12;
    } else {
      return (120000 * 0.12) + ((income - 120000) * 0.32);
    }
  },

  // Portugal Tax Calculator
  Portugal: (income) => {
    if (income <= 7,479) {
      return income * 0.145;
    } else if (income <= 11,284) {
      return (7,479 * 0.145) + ((income - 7,479) * 0.23);
    } else if (income <= 15,992) {
      return (7,479 * 0.145) + ((11,284 - 7,479) * 0.23) + ((income - 11,284) * 0.265);
    } else if (income <= 20,700) {
      return (7,479 * 0.145) + ((11,284 - 7,479) * 0.23) + ((15,992 - 11,284) * 0.265) + ((income - 15,992) * 0.285);
    } else if (income <= 26,355) {
      return (7,479 * 0.145) + ((11,284 - 7,479) * 0.23) + ((15,992 - 11,284) * 0.265) + ((20,700 - 15,992) * 0.285) + ((income - 20,700) * 0.35);
    } else if (income <= 38,632) {
      return (7,479 * 0.145) + ((11,284 - 7,479) * 0.23) + ((15,992 - 11,284) * 0.265) + ((20,700 - 15,992) * 0.285) + ((26,355 - 20,700) * 0.35) + ((income - 26,355) * 0.37);
    } else if (income <= 50,483) {
      return (7,479 * 0.145) + ((11,284 - 7,479) * 0.23) + ((15,992 - 11,284) * 0.265) + ((20,700 - 15,992) * 0.285) + ((26,355 - 20,700) * 0.35) + ((38,632 - 26,355) * 0.37) + ((income - 38,632) * 0.435);
    } else if (income <= 78,834) {
      return (7,479 * 0.145) + ((11,284 - 7,479) * 0.23) + ((15,992 - 11,284) * 0.265) + ((20,700 - 15,992) * 0.285) + ((26,355 - 20,700) * 0.35) + ((38,632 - 26,355) * 0.37) + ((50,483 - 38,632) * 0.435) + ((income - 50,483) * 0.45);
    } else {
      return (7,479 * 0.145) + ((11,284 - 7,479) * 0.23) + ((15,992 - 11,284) * 0.265) + ((20,700 - 15,992) * 0.285) + ((26,355 - 20,700) * 0.35) + ((38,632 - 26,355) * 0.37) + ((50,483 - 38,632) * 0.435) + ((78,834 - 50,483) * 0.45) + ((income - 78,834) * 0.48);
    }
  },

  // Spain Tax Calculator
  Spain: (income) => {
    if (income <= 12,450) {
      return income * 0.19;
    } else if (income <= 20,200) {
      return (12,450 * 0.19) + ((income - 12,450) * 0.24);
    } else if (income <= 35,200) {
      return (12,450 * 0.19) + ((20,200 - 12,450) * 0.24) + ((income - 20,200) * 0.3);
    } else if (income <= 60000) {
      return (12,450 * 0.19) + ((20,200 - 12,450) * 0.24) + ((35,200 - 20,200) * 0.3) + ((income - 35,200) * 0.37);
    } else {
      return (12,450 * 0.19) + ((20,200 - 12,450) * 0.24) + ((35,200 - 20,200) * 0.3) + ((60000 - 35,200) * 0.37) + ((income - 60000) * 0.45);
    }
  },

  Sweden: (income) => {
    // Municipal and regional taxes
    const averageLocalTaxRate = 0.3241; // 32.41%
    let tax = income * averageLocalTaxRate;

    // State tax
    const stateTaxThreshold = 625800; // SEK
    if (income > stateTaxThreshold) {
      tax += (income - stateTaxThreshold) * 0.20; // 20% state tax
    }

    return tax;
  },

  China: (income) => {
    // Progressive tax rates as of 2025
    if (income <= 36000) return income * 0.03;
    if (income <= 144000) return 36000 * 0.03 + (income - 36000) * 0.10;
    if (income <= 300000) return 36000 * 0.03 + 108000 * 0.10 + (income - 144000) * 0.20;
    if (income <= 420000) return 36000 * 0.03 + 108000 * 0.10 + 156000 * 0.20 + (income - 300000) * 0.25;
    if (income <= 660000) return 36000 * 0.03 + 108000 * 0.10 + 156000 * 0.20 + 120000 * 0.25 + (income - 420000) * 0.30;
    if (income <= 960000) return 36000 * 0.03 + 108000 * 0.10 + 156000 * 0.20 + 120000 * 0.25 + 240000 * 0.30 + (income - 660000) * 0.35;
    return 36000 * 0.03 + 108000 * 0.10 + 156000 * 0.20 + 120000 * 0.25 + 240000 * 0.30 + 300000 * 0.35 + (income - 960000) * 0.45;
  },

  India: (income) => {
    // Progressive tax rates as of FY 2025
    if (income <= 250000) return 0;
    if (income <= 500000) return (income - 250000) * 0.05;
    if (income <= 1000000) return 12500 + (income - 500000) * 0.20;
    return 112500 + (income - 1000000) * 0.30;
  },

  Indonesia: (income) => {
    // Progressive tax rates
    if (income <= 50000000) return income * 0.05;
    if (income <= 250000000) return 50000000 * 0.05 + (income - 50000000) * 0.15;
    if (income <= 500000000) return 50000000 * 0.05 + 200000000 * 0.15 + (income - 250000000) * 0.25;
    return 50000000 * 0.05 + 200000000 * 0.15 + 250000000 * 0.25 + (income - 500000000) * 0.30;
  },
  Israel: (income) => {
    // Progressive tax rates as of 2025
    if (income <= 77440) return income * 0.10;
    if (income <= 110880) return 77440 * 0.10 + (income - 77440) * 0.14;
    if (income <= 178080) return 77440 * 0.10 + 33440 * 0.14 + (income - 110880) * 0.20;
    if (income <= 247440) return 77440 * 0.10 + 33440 * 0.14 + 67200 * 0.20 + (income - 178080) * 0.31;
    if (income <= 514920) return 77440 * 0.10 + 33440 * 0.14 + 67200 * 0.20 + 69360 * 0.31 + (income - 247440) * 0.35;
    if (income <= 663240) return 77440 * 0.10 + 33440 * 0.14 + 67200 * 0.20 + 69360 * 0.31 + 267480 * 0.35 + (income - 514920) * 0.47;
    return 77440 * 0.10 + 33440 * 0.14 + 67200 * 0.20 + 69360 * 0.31 + 267480 * 0.35 + 148320 * 0.47 + (income - 663240) * 0.50;
  },

  Japan: (income) => {
    // Progressive tax rates as of 2025
    if (income <= 1950000) return income * 0.05;
    if (income <= 3300000) return 1950000 * 0.05 + (income - 1950000) * 0.10;
    if (income <= 6950000) return 1950000 * 0.05 + 1350000 * 0.10 + (income - 3300000) * 0.20;
    if (income <= 9000000) return 1950000 * 0.05 + 1350000 * 0.10 + 3650000 * 0.20 + (income - 6950000) * 0.23;
    if (income <= 18000000) return 1950000 * 0.05 + 1350000 * 0.10 + 3650000 * 0.20 + 2050000 * 0.23 + (income - 9000000) * 0.33;
    if (income <= 40000000) return 1950000 * 0.05 + 1350000 * 0.10 + 3650000 * 0.20 + 2050000 * 0.23 + 9000000 * 0.33 + (income - 18000000) * 0.40;
    return 1950000 * 0.05 + 1350000 * 0.10 + 3650000 * 0.20 + 2050000 * 0.23 + 9000000 * 0.33 + 22000000 * 0.40 + (income - 40000000) * 0.45;
  },

  Malaysia: (income) => {
    // Progressive tax rates as of 2025
    if (income <= 5000) return income * 0;
    if (income <= 20000) return (income - 5000) * 0.01;
    if (income <= 35000) return 15000 * 0.01 + (income - 20000) * 0.03;
    if (income <= 50000) return 15000 * 0.01 + 15000 * 0.03 + (income - 35000) * 0.06;
    if (income <= 70000) return 15000 * 0.01 + 15000 * 0.03 + 15000 * 0.06 + (income - 50000) * 0.11;
    if (income <= 100000) return 15000 * 0.01 + 15000 * 0.03 + 15000 * 0.06 + 20000 * 0.11 + (income - 70000) * 0.19;
    return 15000 * 0.01 + 15000 * 0.03 + 15000 * 0.06 + 20000 * 0.11 + 30000 * 0.19 + (income - 100000) * 0.25;
  },

  Philippines: (income) => {
    // Progressive tax rates as of 2025
    if (income <= 250000) return 0;
    if (income <= 400000) return (income - 250000) * 0.15;
    if (income <= 800000) return 150000 * 0.15 + (income - 400000) * 0.20;
    if (income <= 2000000) return 150000 * 0.15 + 400000 * 0.20 + (income - 800000) * 0.25;
    if (income <= 8000000) return 150000 * 0.15 + 400000 * 0.20 + 1200000 * 0.25 + (income - 2000000) * 0.30;
    return 150000 * 0.15 + 400000 * 0.20 + 1200000 * 0.25 + 6000000 * 0.30 + (income - 8000000) * 0.35;
  },
  South_Korea: (income) => {
    // Progressive tax rates as of 2025
    if (income <= 14000000) return income * 0.06;
    if (income <= 50000000) return 14000000 * 0.06 + (income - 14000000) * 0.15;
    if (income <= 88000000) return 14000000 * 0.06 + 36000000 * 0.15 + (income - 50000000) * 0.24;
    if (income <= 150000000) return 14000000 * 0.06 + 36000000 * 0.15 + 38000000 * 0.24 + (income - 88000000) * 0.35;
    if (income <= 300000000) return 14000000 * 0.06 + 36000000 * 0.15 + 38000000 * 0.24 + 62000000 * 0.35 + (income - 150000000) * 0.38;
    if (income <= 500000000) return 14000000 * 0.06 + 36000000 * 0.15 + 38000000 * 0.24 + 62000000 * 0.35 + 150000000 * 0.38 + (income - 300000000) * 0.40;
    return 14000000 * 0.06 + 36000000 * 0.15 + 38000000 * 0.24 + 62000000 * 0.35 + 150000000 * 0.38 + 200000000 * 0.40 + (income - 500000000) * 0.45;
  },

  Thailand: (income) => {
    // Progressive tax rates as of 2025
    if (income <= 150000) return 0;
    if (income <= 500000) return (income - 150000) * 0.10;
    if (income <= 1000000) return 350000 * 0.10 + (income - 500000) * 0.15;
    if (income <= 2000000) return 350000 * 0.10 + 500000 * 0.15 + (income - 1000000) * 0.20;
    if (income <= 5000000) return 350000 * 0.10 + 500000 * 0.15 + 1000000 * 0.20 + (income - 2000000) * 0.25;
    return 350000 * 0.10 + 500000 * 0.15 + 1000000 * 0.20 + 3000000 * 0.25 + (income - 5000000) * 0.35;
  },

  Turkey: (income) => {
    // Progressive tax rates as of 2025
    if (income <= 110000) return income * 0.15;
    if (income <= 230000) return 110000 * 0.15 + (income - 110000) * 0.20;
    if (income <= 580000) return 110000 * 0.15 + 120000 * 0.20 + (income - 230000) * 0.27;
    if (income <= 3000000) return 110000 * 0.15 + 120000 * 0.20 + 350000 * 0.27 + (income - 580000) * 0.35;
    return 110000 * 0.15 + 120000 * 0.20 + 350000 * 0.27 + 2420000 * 0.35 + (income - 3000000) * 0.40;
  },

  UAE: () => {
    return 0;  // Explicit return (correct)
  },// No personal income tax in the UAE

  // North American Countries

  Canada : (income) => {
    if (income <= 55000) return income * 0.15;
    if (income <= 110000) return 55000 * 0.15 + (income - 55000) * 0.205;
    if (income <= 177000) return 55000 * 0.15 + 55000 * 0.205 + (income - 110000) * 0.26;
    if (income <= 246000) return 55000 * 0.15 + 55000 * 0.205 + 67000 * 0.26 + (income - 177000) * 0.29;
    return 55000 * 0.15 + 55000 * 0.205 + 67000 * 0.26 + 69000 * 0.29 + (income - 246000) * 0.33;
  },
  Mexico : (income) => {
    if (income <= 80000) return income * 0.0192;
    if (income <= 200000) return 80000 * 0.0192 + (income - 80000) * 0.064;
    if (income <= 350000) return 80000 * 0.0192 + 120000 * 0.064 + (income - 200000) * 0.1088;
    if (income <= 700000) return 80000 * 0.0192 + 120000 * 0.064 + 150000 * 0.1088 + (income - 350000) * 0.16;
    return 80000 * 0.0192 + 120000 * 0.064 + 150000 * 0.1088 + 350000 * 0.16 + (income - 700000) * 0.35;
},

USA : (income) => {
  if (income <= 11000) return income * 0.10;
  if (income <= 44725) return 11000 * 0.10 + (income - 11000) * 0.12;
  if (income <= 95375) return 11000 * 0.10 + 33725 * 0.12 + (income - 44725) * 0.22;
  if (income <= 182100) return 11000 * 0.10 + 33725 * 0.12 + 50650 * 0.22 + (income - 95375) * 0.24;
  if (income <= 231250) return 11000 * 0.10 + 33725 * 0.12 + 50650 * 0.22 + 86725 * 0.24 + (income - 182100) * 0.32;
  if (income <= 578125) return 11000 * 0.10 + 33725 * 0.12 + 50650 * 0.22 + 86725 * 0.24 + 49150 * 0.32 + (income - 231250) * 0.35;
  return 11000 * 0.10 + 33725 * 0.12 + 50650 * 0.22 + 86725 * 0.24 + 49150 * 0.32 + 346875 * 0.35 + (income - 578125) * 0.37;
},


// South American Countries

Argentina: (income) => {
  if (income <= 250000) return income * 0.05;
  if (income <= 500000) return 250000 * 0.05 + (income - 250000) * 0.09;
  if (income <= 750000) return 250000 * 0.05 + 250000 * 0.09 + (income - 500000) * 0.12;
  return 250000 * 0.05 + 250000 * 0.09 + 250000 * 0.12 + (income - 750000) * 0.15;
},

Bolivia: (income) => {
  return income * 0.13; // Flat tax rate of 13%
},

Brazil: (income) => {
  if (income <= 22847) return 0;
  if (income <= 33919) return (income - 22847) * 0.075;
  if (income <= 45012) return 11072 * 0.075 + (income - 33919) * 0.15;
  if (income <= 55976) return 11072 * 0.075 + 11093 * 0.15 + (income - 45012) * 0.225;
  return 11072 * 0.075 + 11093 * 0.15 + 10964 * 0.225 + (income - 55976) * 0.275;
},

Chile: (income) => {
  if (income <= 8000000) return income * 0.04;
  if (income <= 17800000) return 8000000 * 0.04 + (income - 8000000) * 0.08;
  if (income <= 29700000) return 8000000 * 0.04 + 9800000 * 0.08 + (income - 17800000) * 0.135;
  return 8000000 * 0.04 + 9800000 * 0.08 + 11900000 * 0.135 + (income - 29700000) * 0.23;
},

Colombia: (income) => {
  if (income <= 50000000) return income * 0.19;
  if (income <= 100000000) return 50000000 * 0.19 + (income - 50000000) * 0.28;
  return 50000000 * 0.19 + 50000000 * 0.28 + (income - 100000000) * 0.33;
},

Ecuador: (income) => {
  if (income <= 11722) return 0;
  if (income <= 14935) return (income - 11722) * 0.05;
  if (income <= 19335) return 3213 * 0.05 + (income - 14935) * 0.10;
  return 3213 * 0.05 + 4400 * 0.10 + (income - 19335) * 0.20;
},

Paraguay: (income) => {
  return income * 0.10; // Flat tax rate of 10%
},

Peru: (income) => {
  if (income <= 25000) return income * 0.08;
  if (income <= 50000) return 25000 * 0.08 + (income - 25000) * 0.14;
  if (income <= 100000) return 25000 * 0.08 + 25000 * 0.14 + (income - 50000) * 0.17;
  return 25000 * 0.08 + 25000 * 0.14 + 50000 * 0.17 + (income - 100000) * 0.30;
},

Uruguay: (income) => {
  if (income <= 444000) return income * 0.10;
  if (income <= 888000) return 444000 * 0.10 + (income - 444000) * 0.15;
  return 444000 * 0.10 + 444000 * 0.15 + (income - 888000) * 0.20;
},

Venezuela: (income) => {
  if (income <= 300000) return income * 0.06;
  if (income <= 600000) return 300000 * 0.06 + (income - 300000) * 0.09;
  return 300000 * 0.06 + 300000 * 0.09 + (income - 600000) * 0.12;
},

// Oceania Countries
Australia: (income) => {
  if (income <= 18200) return 0;
  if (income <= 45000) return (income - 18200) * 0.19;
  if (income <= 120000) return (45000 - 18200) * 0.19 + (income - 45000) * 0.325;
  if (income <= 180000) return (45000 - 18200) * 0.19 + (120000 - 45000) * 0.325 + (income - 120000) * 0.37;
  return (45000 - 18200) * 0.19 + (120000 - 45000) * 0.325 + (180000 - 120000) * 0.37 + (income - 180000) * 0.45;
},

New_Zealand: (income) => {
  if (income <= 14000) return income * 0.105;
  if (income <= 48000) return 14000 * 0.105 + (income - 14000) * 0.175;
  if (income <= 70000) return 14000 * 0.105 + 34000 * 0.175 + (income - 48000) * 0.30;
  if (income <= 180000) return 14000 * 0.105 + 34000 * 0.175 + 22000 * 0.30 + (income - 70000) * 0.33;
  return 14000 * 0.105 + 34000 * 0.175 + 22000 * 0.30 + 110000 * 0.33 + (income - 180000) * 0.39;
},
};



const countryInfo = {
  Austria: "Austria has a progressive personal income tax system, with rates ranging from 0% to 55%, depending on income. The highest rate applies to income above €1 million. Corporate tax is set at 24% in 2024 and is expected to decrease to 23% in 2025. Austria also imposes a 27.5% tax on capital gains and dividends. Social security contributions are relatively high, with both employees and employers contributing a significant percentage of salaries. The VAT rate is 20%, with reduced rates of 10% and 13% applying to certain goods and services. Austria has a well-developed welfare system, offering extensive healthcare, education, and pension benefits.",
  
  Belgium: "Belgium's tax system includes high social security contributions and progressive personal income tax rates from 25% to 50% for income above €46,440. Corporate tax is 25%, but small businesses can benefit from a reduced 20% rate on the first €100,000 of taxable income. Belgium also has a VAT of 21% and a withholding tax of 30% on dividends. Employers and employees contribute significantly to social security, covering pensions, unemployment, and healthcare benefits. Wealth taxes do not exist, but Belgium has a tax on securities accounts exceeding €1 million. The country also has various tax incentives for research and development (R&D) and investment in innovation.",
  
  Denmark: "Denmark has one of the highest personal income tax rates globally, with a progressive system that reaches up to 52.07% (including local and national taxes). Capital gains are taxed at 27% or 42%, depending on income. Corporate tax is 22%, and VAT is 25%. Denmark also has a high social security system but is primarily funded by income tax rather than direct social contributions. Social security contributions are relatively low compared to other European countries, as public services such as healthcare and education are funded primarily through income taxation. Denmark also has a wealth tax on real estate, known as property tax, and a high inheritance tax for non-direct descendants. The country is known for its strong welfare state, which provides comprehensive healthcare, education, and unemployment benefits.",
  
  France: "France imposes income tax on a progressive scale from 0% to 45%, with an additional 3-4% surtax for high earners (above €250,000 for individuals and €500,000 for couples). Social security contributions are substantial, often exceeding 20% of gross salary, with both employees and employers contributing significantly. Corporate tax is 25%, and VAT is 20%, with reduced rates of 10% and 5.5% for certain goods and services. France also has a real estate wealth tax (IFI) for property holdings above €1.3 million. Additionally, capital gains on investments are generally taxed at a flat 30%, including both income tax and social charges. The country has numerous tax incentives for R&D and investment in innovation, along with deductions for certain household expenses.",
  
  Germany: "Germany has a progressive tax system with rates from 0% to 45%, with the top rate applying to income above €277,826. A 5.5% solidarity surcharge applies on income tax, originally introduced to support reunification. Corporate tax is around 30%, including a national rate of 15%, the solidarity surcharge, and local trade tax (ranging from 7% to 17%, depending on municipality). VAT is 19%, with a reduced rate of 7% on essential goods such as food and books. Capital gains tax is typically 25%, plus the solidarity surcharge, though exemptions apply in certain cases. Social security contributions are relatively high, covering pensions, healthcare, and unemployment insurance, with contributions split between employers and employees. Inheritance tax in Germany ranges from 7% to 50%, depending on the relationship between the deceased and the beneficiary.",
  
  Italy: "Italy has a progressive income tax system ranging from 23% to 43%, with additional regional and municipal taxes that can increase the total burden. The regional tax varies from 1.23% to 3.33%, while municipal taxes range up to 0.9%. Corporate tax is 24%, with an additional regional tax (IRAP) of around 3.9%, bringing the effective rate higher. Italy also has a VAT of 22%, with reduced rates of 10% and 5% on certain goods. Capital gains taxes range from 12.5% to 26%, depending on the asset type, with a lower rate applying to government bonds. Property taxes vary by municipality, and Italy has an inheritance tax ranging from 4% to 8%, depending on the beneficiary's relationship with the deceased. Social security contributions are substantial, often exceeding 30% of gross salary, and are primarily borne by employers.",
  
  Netherlands: "The Netherlands has a progressive income tax system with two brackets: 36.97% for income up to €73,031 and 49.5% for higher income. Corporate tax is 25.8%, with a reduced rate of 19% on profits up to €200,000. VAT is 21%, with a reduced rate of 9% on essential goods such as food and medicines. The Netherlands does not have a traditional wealth tax but instead imposes a tax on deemed investment income, assuming a notional return on wealth, which is taxed at rates ranging from 32% to 36%. Capital gains tax generally follows the deemed return system rather than a direct capital gains tax. Social security contributions are relatively high, covering pensions, unemployment benefits, and disability insurance. Inheritance and gift taxes range from 10% to 40%, depending on the beneficiary's relationship to the deceased or donor. The country also offers various tax incentives for entrepreneurs and foreign workers, such as the 30% ruling for highly skilled migrants.",
  
  Poland: "Poland has a progressive income tax system with two rates: 12% for income up to PLN 120,000 and 32% for income exceeding that. There is also a lump-sum tax option for certain professionals and small businesses. Corporate tax is 19%, with a reduced rate of 9% for small businesses with annual revenue below EUR 2 million. Poland’s VAT rate is 23%, with reduced rates of 8% and 5% for specific goods and services. A flat-rate health insurance contribution adds to the overall tax burden, particularly for entrepreneurs. Social security contributions are significant, covering pensions, healthcare, and unemployment, with both employers and employees making contributions. Poland does not have a wealth tax but does impose inheritance and gift taxes, with rates depending on the relationship between the giver and the recipient.",
  
  Portugal: "Portugal's income tax rates range from 14.5% to 48%, with additional solidarity surcharges of up to 5% for high earners. The country offers the Non-Habitual Resident (NHR) regime, which provides significant tax benefits, including a flat 10% tax on foreign pensions and exemptions on foreign-sourced income for 10 years. Corporate tax is 21%, with reduced rates of 14.7% in some regions like Madeira and the Azores. VAT is 23%, with reduced rates of 13% and 6% for essential goods and services. Portugal also has a capital gains tax rate of 28% for individuals and a lower 25% rate for companies. Social security contributions are relatively high, covering pensions, healthcare, and unemployment benefits. There is no general wealth tax, but Portugal does impose an additional property tax on high-value real estate above €600,000.",
  
  Spain: "Spain has a progressive income tax system with rates ranging from 19% to 47%, varying by region, as autonomous communities impose additional taxes. Corporate tax is generally 25%, though startups and small businesses can benefit from reduced rates. VAT is 21%, with lower rates of 10% and 4% for essential goods. Spain also has wealth taxes in some regions, with rates ranging from 0.2% to 3.5% on net assets above €700,000, although primary residences have a tax-free allowance. Inheritance tax varies widely by region, with some areas offering significant exemptions. Social security contributions are high, with employers paying up to 30% of an employee's salary. Capital gains tax rates range from 19% to 28%, depending on the amount gained. Spain also has a 'Beckham Law,' allowing expatriates to pay a flat 24% income tax rate for six years under certain conditions.",
  
  Sweden: "Sweden has one of the highest tax burdens globally, with a progressive income tax system where the top rate exceeds 50% when local municipal taxes are included. There is no national-level wealth tax, but high property taxes and other levies contribute to the overall tax burden. Corporate tax is 20.6%, and VAT is 25%, with reduced rates of 12% and 6% for specific goods and services. Capital gains tax is generally 30%, applied to the sale of stocks and real estate. Social security contributions are substantial, with employers contributing around 31.42% of an employee’s salary towards pension, healthcare, and unemployment insurance. Inheritance and gift taxes were abolished in 2005, making Sweden one of the few European countries without such taxes. The country provides extensive social welfare benefits, including free healthcare and education, which are largely funded through high taxation.",
  
  UK: "The UK has a progressive income tax system with rates of 20%, 40%, and 45%, depending on income levels. National Insurance contributions (NICs) add to the overall tax burden, with both employees and employers contributing to social security. Corporate tax is 25%, with a lower rate of 19% for small businesses earning less than £50,000 in profit. VAT is 20%, with reduced rates of 5% for certain goods and services and 0% for essentials like food and children's clothing. The UK also has capital gains tax rates of 10% for basic-rate taxpayers and 20% for higher-rate taxpayers, with different rates for property sales (18% and 28%). There is no general wealth tax, but inheritance tax is levied at 40% on estates above £325,000, with exemptions for spouses and charities. The UK also offers various tax reliefs for businesses, including R&D credits and the Enterprise Investment Scheme (EIS) for startups.",

  // Asia

  China: "China has a progressive individual income tax system with rates ranging from 3% to 45%, depending on income levels. Social security contributions are mandatory for both employees and employers, covering pensions, healthcare, and unemployment insurance, with rates varying by region. Corporate tax is 25%, but high-tech enterprises and small businesses may qualify for lower rates of 15% and 20%, respectively. VAT rates are 13% for most goods, with reduced rates of 9% and 6% for specific sectors. China also imposes a 10% withholding tax on dividends paid to foreign investors. There is no nationwide wealth tax, but property taxes are being tested in some cities. Capital gains tax is generally incorporated into corporate income tax, while individuals are taxed at progressive rates on gains from real estate and securities transactions.",

  India: "India has a progressive income tax system, with rates ranging from 5% to 30%, plus applicable surcharges for high earners (10% on income above ₹50 lakh and 37% on income above ₹5 crore). The new tax regime offers lower rates (ranging from 5% to 30%) with fewer deductions. Corporate tax is 25.17% for domestic companies, with a reduced 15% rate for new manufacturing firms. India’s Goods and Services Tax (GST) varies from 5% to 28%, depending on the product category. Long-term capital gains from equities exceeding ₹1 lakh are taxed at 10%, while short-term gains are taxed at 15%. Social security contributions include provident fund deductions (12% each from employees and employers). India does not impose a wealth tax, but inheritance and gift taxes apply in certain cases.",
  
  Indonesia:"Indonesia has a progressive personal income tax system, with rates ranging from 5% to 35% based on income levels. Corporate tax is 22%, with a reduced rate of 19% for small businesses earning up to IDR 50 billion annually. VAT is 11%, with a planned increase to 12% in 2025. Capital gains tax is generally 10%, while dividends are subject to a 10% withholding tax unless reinvested. Indonesia also imposes luxury goods tax (LST) on high-value items. Social security contributions include mandatory employer and employee payments for pensions and healthcare. The country does not have a general wealth tax, but real estate and inheritance taxes apply.",

  Israel:"Israel has a progressive income tax system with rates ranging from 10% to 50%, depending on income levels. National Insurance contributions add to the overall tax burden. Corporate tax is 23%, with incentives for tech companies and foreign investors reducing the rate to as low as 6% in some cases. VAT is 17%, with exemptions for specific industries. Capital gains tax is 25% for individuals and 30% for significant shareholders. Israel does not have a wealth tax, but real estate purchase taxes and inheritance taxes apply in certain situations. Social security contributions are mandatory, covering healthcare, pensions, and unemployment benefits. The country offers tax incentives for new immigrants and returning residents, including 10-year tax exemptions on foreign income.",

  Japan:"Japan has a progressive income tax system with rates ranging from 5% to 45%, plus a local inhabitant tax of around 10%. Social security contributions, including pension, health, and employment insurance, add to the tax burden. Corporate tax is around 23.2%, with additional local taxes bringing the effective rate to approximately 30%. Japan imposes a 10% consumption tax (VAT), with a reduced 8% rate for certain essential goods. Capital gains and dividend income are generally taxed at 20.315%. There is no nationwide wealth tax, but inheritance and gift taxes can be high, reaching up to 55%.",

  Malaysia:"Malaysia has a progressive income tax system with rates ranging from 0% to 30%, depending on income levels. There is no capital gains tax on equities, but real property gains tax (RPGT) applies to property sales at rates between 5% and 30%. Corporate tax is 24%, with a reduced rate of 17% for small and medium enterprises (SMEs) on the first MYR 600,000 of taxable income. Malaysia does not impose VAT but has a Sales and Service Tax (SST) at 5% to 10% on goods and 6% on services. The country has no inheritance or wealth tax, and social security contributions are relatively low.",

  Philippines:"The Philippines has a progressive personal income tax system with rates ranging from 0% to 35%. Corporate tax is 25%, but small businesses with net taxable income below PHP 5 million pay a reduced 20% rate. VAT is 12%, with exemptions for essential goods and services. Capital gains tax on the sale of stocks is 0.6%, while real estate gains are taxed at 6%. Social security contributions are mandatory for employees, covering pensions, health insurance, and other benefits. The Philippines does not impose a general wealth tax, but estate tax applies at a flat rate of 6%.",

  South_Korea:"South Korea has a progressive income tax system with rates ranging from 6% to 45%, plus a local income tax of 10% of the national tax. Corporate tax is 22%, with additional local taxes bringing the effective rate to around 24.2%. Small businesses pay a reduced rate of 10% on profits up to KRW 200 million. VAT is 10%, with exemptions for certain goods and services. Capital gains tax varies based on asset type and holding period, with rates ranging from 10% to 45%. South Korea does not impose a general wealth tax but has high inheritance and gift taxes, with top rates reaching 50%. Social security contributions include pension, health, employment, and long-term care insurance.",

  Thailand:"Thailand has a progressive income tax system with rates ranging from 0% to 35%. Social security contributions are relatively low, with both employers and employees contributing 5% of salary, capped at THB 750 per month. Corporate tax is 20%, but small businesses may qualify for reduced rates. VAT is 7%, with exemptions for essential goods and services. Capital gains are generally taxed as regular income, except for stock market investments, which are exempt for individual investors. Thailand does not have a wealth tax but does impose a property and inheritance tax of up to 10%.",

  Turkey:"Turkey has a progressive income tax system with rates from 15% to 40%. Social security contributions are mandatory, with employees contributing around 14% of their salary. Corporate tax is 25% (reduced to 20% in 2024), and VAT ranges from 1% to 20%, depending on the product or service. Capital gains tax applies at rates from 15% to 40%, depending on the asset type. Inheritance and gift taxes range from 1% to 30%. Turkey offers tax incentives for foreign investors, including free zones with exemptions from VAT and corporate tax.",

  UAE:"The UAE has no personal income tax, making it an attractive destination for expatriates and investors. There are also no capital gains, inheritance, or wealth taxes. Corporate tax is set at 9% for businesses earning more than AED 375,000 annually, but companies operating in free zones can still benefit from exemptions. VAT is 5%, among the lowest globally. The UAE does impose municipal fees and excise duties on certain goods, such as tobacco and sugary drinks. Social security contributions apply only to UAE nationals, while expatriates are not required to contribute.",

  // North America

  Canada:"Canada has a progressive income tax system with federal rates ranging from 15% to 33%, plus provincial taxes that vary by region. Social security contributions include Canada Pension Plan (CPP) and Employment Insurance (EI), adding around 10% to employee costs. Corporate tax is 15% at the federal level, with provincial rates bringing the total to 25%-30%. Small businesses benefit from a reduced 9% federal rate. GST (VAT) is 5%, with additional provincial sales taxes (PST/HST) ranging from 0% to 10%. Capital gains are taxed at 50% of the marginal tax rate. There is no national wealth tax, but property taxes and inheritance taxes vary by province.",

  Mexico:"Mexico has a progressive income tax system with rates ranging from 1.92% to 35%. Corporate tax is 30%, and VAT is 16%, with reduced rates or exemptions for certain goods and services. Capital gains are generally taxed at 10% for individuals and 30% for corporations. Social security contributions are mandatory and add approximately 10% to employee costs. Mexico does not impose a general wealth tax, but there are property taxes and inheritance taxes, which vary by region. Foreign residents are taxed only on Mexican-sourced income, and tax treaties help avoid double taxation.",

  USA:"The US has a progressive federal income tax system with rates from 10% to 37%. State income taxes range from 0% to 13.3%, depending on the state. Social security and Medicare contributions (FICA) total 15.3% (split between employers and employees). Corporate tax is a flat 21%, though state-level corporate taxes can increase the total burden. Sales tax (equivalent to VAT) varies by state, typically between 0% and 10%. Capital gains tax rates are 0%, 15%, or 20%, depending on income. The US has no national wealth tax, but estate tax applies to inheritances above $13.61 million (as of 2024). Some states impose additional estate or inheritance taxes.",

  // South America

  Argentina:"Argentina has a progressive income tax system with rates ranging from 5% to 35%. Social security contributions are high, with employees contributing around 17% and employers up to 25.5%. Corporate tax is 25% for profits up to ARS 2.6 million and 35% for higher amounts. VAT is 21%, with reduced rates of 10.5% for essential goods. Capital gains tax is generally 15%, and Argentina imposes a wealth tax (Impuesto sobre los Bienes Personales) ranging from 0.5% to 2.25% on assets exceeding ARS 3 million. There are strict currency controls, including taxes on foreign currency purchases.",

  Bolivia:"Bolivia has a flat income tax rate of 13% for individuals. Social security contributions are mandatory, with employees contributing around 12.7% of their salary. Corporate tax is 25%, and VAT is 13%. Capital gains are taxed at the same rate as corporate income (25%). There is no wealth tax, but there are property taxes and transaction taxes on financial movements. Bolivia offers tax incentives for foreign investors in specific industries, such as mining and agriculture.",

  Brazil:"Brazil has a progressive income tax system with rates ranging from 7.5% to 27.5%. Social security contributions are high, with employees paying up to 14% and employers up to 28%. Corporate tax is around 34%, including a 15% base rate, a 10% surtax on profits over BRL 20,000 per month, and a social contribution tax of 9%. VAT varies by state but is generally between 17% and 25%. Capital gains tax ranges from 15% to 22.5%. Brazil does not have a wealth tax but imposes high import duties and financial transaction taxes.",

  Chile:"Chile has a progressive income tax system, with rates ranging from 0% to 40%. Social security contributions add around 20% to employee costs. Corporate tax is 25% for small businesses and 27% for larger companies. VAT is 19%. Capital gains are generally taxed at 10%, but some exemptions apply. Chile does not have a wealth tax, but there are property and inheritance taxes. The country offers a 'Pro-Investment' tax regime to attract foreign investors, including tax incentives for technology and innovation sectors.",

  Colombia:"Colombia has a progressive income tax system with rates from 0% to 39% for individuals. Social security contributions are mandatory, with employees contributing around 8% and employers up to 30%. Corporate tax is 35%, with reduced rates for small businesses. VAT is 19%, with exemptions for essential goods. Capital gains tax is 10%, and a wealth tax applies to individuals with assets exceeding COP 3 billion (around $750,000). Colombia also has a financial transaction tax of 0.4% on bank withdrawals and transfers.",

  Ecuador:"Ecuador has a progressive income tax system ranging from 0% to 37% for individuals. Social security contributions are around 9.45% for employees and 12.15% for employers. Corporate tax is 25%, with a 3% surcharge on companies earning over $1 million. VAT is 12%, with some essential goods exempt. Capital gains are taxed at 10%. Ecuador does not impose a wealth tax but has property and inheritance taxes. The government offers tax incentives for investments in priority sectors, such as renewable energy and technology.",

  Paraguay:"Paraguay has a flat income tax rate of 10% for individuals and a corporate tax rate of 10%. Social security contributions are low, with employees contributing 9% and employers 16.5%. VAT is 10%, one of the lowest in the region, with some goods taxed at 5%. Capital gains are also taxed at 10%. Paraguay does not impose a wealth tax, and foreign-sourced income is tax-exempt, making it an attractive destination for investors. The country offers tax incentives for businesses in export and manufacturing sectors.",

  Peru:"Peru has a progressive income tax system, with rates from 8% to 30% for individuals. Social security contributions total around 13% for employees. Corporate tax is 29.5%, with lower rates for small businesses. VAT is 18%. Capital gains are taxed at 5% for individuals and 30% for businesses. Peru does not have a wealth tax but has property and inheritance taxes. The government offers tax benefits for companies in sectors like agriculture, mining, and technology.",

  Uruguay:"Uruguay has a progressive income tax system with rates ranging from 0% to 36%. Social security contributions are mandatory, with employees contributing around 18% and employers up to 22.5%. Corporate tax is 25%, but companies can benefit from incentives in free trade zones. VAT is 22%, with a reduced rate of 10% for essential goods. Capital gains tax is 12%. Uruguay does not have a wealth tax, but it does impose property and inheritance taxes. The country is known for its territorial tax system, meaning foreign income is generally not taxed.",

  Venezuela:"Venezuela has a progressive income tax system with rates from 6% to 34%. Social security contributions are relatively low, with employees contributing 4% and employers up to 9%. Corporate tax is 34%. VAT is 16%, with exemptions for basic goods. Capital gains tax varies depending on the asset type. Venezuela has strict currency controls and high inflation, which impact taxation and financial stability. There are also wealth and property taxes, along with various economic restrictions affecting businesses.",

  // Oceania

  Australia:"Australia has a progressive income tax system with rates ranging from 0% to 45%, with an additional 2% Medicare levy. Social security contributions are covered through income tax rather than direct deductions. Superannuation contributions are mandatory for employers at 11% of an employee's salary. Corporate tax is 30% for large businesses and 25% for small businesses. VAT (Goods and Services Tax, GST) is 10%. Capital gains tax applies at the individual’s marginal tax rate, with a 50% discount for assets held over a year. Australia does not impose a wealth tax but has property and inheritance taxes.",

  New_Zealand:"New Zealand has a progressive income tax system, with rates from 10.5% to 39%. There are no social security contributions, but employers must contribute 3% to the KiwiSaver retirement scheme. Corporate tax is 28%. New Zealand has a 15% VAT (Goods and Services Tax, GST). Unlike many countries, New Zealand does not have capital gains tax (except on property trading and short-term sales). There is no wealth tax, inheritance tax, or payroll tax, making it a relatively business-friendly tax environment.",

};


// Currency mapping for different countries
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


const IncomeTaxCalculator = () => {
  
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [availableTools, setAvailableTools] = useState([]);
  const [income, setIncome] = useState(0);
  const [calculatedTax, setCalculatedTax] = useState(null);

  const handleCountryClick = (country) => {
    setSelectedCountry(country.name);
    setAvailableTools(country.tools);
    setIncome(0);
    setCalculatedTax(null);
  };

  const handleTaxCalculation = () => {
    const estimatedTax = income * 0.2; // Example: 20% tax rate
    setCalculatedTax(estimatedTax);
  };

  return (
    <div className="containerIncome">
      <h1>Global Income Tax Calculator</h1>

      <div className="continents-grid">
        {continents.map((continent) => (
          <div key={continent.name} className="continent-columnIncome">
            <h2 className="continent-titleIncome">{continent.name}</h2>
            <div className="countries-listIncome">
              {continent.countries.map((country) => (
                <button
                  key={country.name}
                  onClick={() => handleCountryClick(country)}
                  className="country-buttonIncome"
                >
                  <img src={country.logo} alt={country.name} className="country-logoIncome" />
                  <span className="country-nameIncome">{country.name}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>

      {selectedCountry && (
  <div className="tax-calculatorIncome">
    <h2>Tax Calculator for {selectedCountry} FY 2025</h2>
    <p>Enter your annual income to calculate the estimated tax:</p>

    {/* Income Input Field */}
    <div className="income-input-containerIncome">
      <input
        type="number"
        placeholder="Enter income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        className="income-inputIncome"
      />
    </div>

          {/* Income Slider (Moved Below Input Box) */}
          <input
            type="range"
            min="0"
            max="5000000"
            step="100"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="income-sliderIncome"
          />
         
         <p>Selected Income: {currencySymbols[selectedCountry]} {income.toLocaleString()}</p>

{/* Calculate Button */}
<button onClick={handleTaxCalculation} className="calculate-buttonIncome">
  Calculate Tax
</button>

          {/* Display Estimated Tax */}
          {calculatedTax !== null && (
  <div>
    <p className="estimated-taxIncome">
      <strong>Estimated Annual Tax in {selectedCountry}:</strong> 
      {currencySymbols[selectedCountry]} {calculatedTax.toLocaleString()}
    </p>

    {/* Monthly Income Breakdown */}
    <p className="monthly-incomeIncome">
      <strong>Monthly Income Before Tax:</strong>  
      {currencySymbols[selectedCountry]} {(income / 12).toLocaleString()}
    </p>

    <p className="monthly-income-after-taxIncome">
      <strong>Monthly Income After Tax:</strong>  
      {currencySymbols[selectedCountry]} {((income - calculatedTax) / 12).toLocaleString()}
    </p>
  </div>
)}

          {/* Country Info Section */}
          <div className="country-infoIncome">
            <h3>About {selectedCountry} Tax</h3>
            <p>{countryInfo[selectedCountry] || "Information coming soon..."}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IncomeTaxCalculator;
