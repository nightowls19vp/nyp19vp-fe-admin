import {
  faGoogle,
  faTwitter,
  faYahoo,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";

// import USAFlag from "../assets/img/flags/united-states-of-america.svg";
// import CanadaFlag from "../assets/img/flags/canada.svg";
// import GermanyFlag from "../assets/img/flags/germany.svg";
// import FranceFlag from "../assets/img/flags/france.svg";
// import JapanFlag from "../assets/img/flags/japan.svg";
// import ItalyFlag from "../assets/img/flags/italy.svg";

const pageVisits = [
  {
    id: 1,
    views: 4.525,
    returnValue: 255,
    bounceRate: 42.55,
    pageName: "/demo/admin/index.html",
  },
  {
    id: 2,
    views: 2.987,
    returnValue: 139,
    bounceRate: -43.52,
    pageName: "/demo/admin/forms.html",
  },
  {
    id: 3,
    views: 2.844,
    returnValue: 124,
    bounceRate: -32.35,
    pageName: "/demo/admin/util.html",
  },
  {
    id: 4,
    views: 1.22,
    returnValue: 55,
    bounceRate: 15.78,
    pageName: "/demo/admin/validation.html",
  },
  {
    id: 5,
    views: 505,
    returnValue: 3,
    bounceRate: -75.12,
    pageName: "/demo/admin/modals.html",
  },
];

const pageTraffic = [
  {
    id: 1,
    source: "Direct",
    sourceType: "Direct",
    trafficShare: 51,
    change: 2.45,
    sourceIcon: faGlobeEurope,
    sourceIconColor: "gray",
  },
  {
    id: 2,
    source: "Google Search",
    sourceType: "Search / Organic",
    trafficShare: 18,
    change: 17.67,
    sourceIcon: faGoogle,
    sourceIconColor: "info",
  },
  {
    id: 3,
    source: "youtube.com",
    sourceType: "Social",
    category: "Arts and Entertainment",
    rank: 2,
    trafficShare: 27,
    sourceIcon: faYoutube,
    sourceIconColor: "danger",
  },
  {
    id: 4,
    source: "yahoo.com",
    sourceType: "Referral",
    category: "News and Media",
    rank: 11,
    trafficShare: 8,
    change: -9.3,
    sourceIcon: faYahoo,
    sourceIconColor: "purple",
  },
  {
    id: 5,
    source: "twitter.com",
    sourceType: "Social",
    category: "Social Networks",
    rank: 4,
    trafficShare: 4,
    sourceIcon: faTwitter,
    sourceIconColor: "info",
  },
];

const pageRanking = [
  {
    id: 1,
    country: "United States",
    countryImage: "USAFlag",
    overallRank: 76,
    overallRankChange: -5,
    travelRank: 3,
    widgetsRank: 32,
    widgetsRankChange: 3,
  },
  {
    id: 2,
    country: "Canada",
    countryImage: "CanadaFlag",
    overallRank: 106,
    overallRankChange: 17,
    travelRank: 4,
    widgetsRank: 30,
    widgetsRankChange: 3,
  },
  {
    id: 4,
    country: "France",
    countryImage: "FranceFlag",
    overallRank: 112,
    overallRankChange: 10,
    travelRank: 5,
    widgetsRank: 34,
    widgetsRankChange: 7,
  },
  {
    id: 5,
    country: "Japan",
    countryImage: "JapanFlag",
    overallRank: 115,
    overallRankChange: 3,
    travelRank: 7,
    travelRankChange: 1,
    widgetsRank: 39,
    widgetsRankChange: -2,
  },
  {
    id: 3,
    country: "Germany",
    countryImage: "GermanyFlag",
    overallRank: 147,
    overallRankChange: -12,
    travelRank: 10,
    travelRankChange: -1,
    widgetsRank: 12,
    widgetsRankChange: -5,
  },
  {
    id: 6,
    country: "Italy",
    countryImage: "ItalyFlag",
    overallRank: 220,
    overallRankChange: -56,
    travelRank: 11,
    travelRankChange: -3,
    widgetsRank: 89,
    widgetsRankChange: 2,
  },
];

const invoiceItems = [
  {
    id: 1,
    item: "Origin License",
    description: "Extended License",
    price: "999,00",
    quantity: 1,
  },
  {
    id: 2,
    item: "Custom Services",
    description: "Instalation and Customization (cost per hour)",
    price: "150,00",
    quantity: 20,
  },
  {
    id: 3,
    item: "Hosting",
    description: "1 year subcription",
    price: "499,00",
    quantity: 1,
  },
  {
    id: 4,
    item: "Platinum Support",
    description: "1 year subcription 24/7",
    price: "3999,00",
    quantity: 1,
  },
];

const users = [
  {
    date: "March 28, 2022",
    location: "Saturn",
    name: "Aaren",
    score: 1,
    status: "Active",
    username: "aaren-50",
  },
  {
    date: "February 04, 2022",
    location: "Earth",
    name: "Adriana",
    score: 2,
    status: "Inactive",
    username: "adriana-3",
  },
  {
    date: "February 23, 2022",
    location: "Jupyter",
    name: "Alisha",
    score: 3,
    status: "Inactive",
    username: "alisha-18",
  },
  {
    date: "February 09, 2022",
    location: "Venus",
    name: "Andeee",
    score: 4,
    status: "unknown",
    username: "andeee-57",
  },
  {
    date: "March 29, 2022",
    location: "Jupyter",
    name: "Annabela",
    score: 5,
    status: "Active",
    username: "annabela-45",
  },
  {
    date: "February 16, 2022",
    location: "Mars",
    name: "Aryn",
    score: 6,
    status: "Inactive",
    username: "aryn-53",
  },
  {
    date: "March 30, 2022",
    location: "Jupyter",
    name: "Basia",
    score: 7,
    status: "Inactive",
    username: "basia-66",
  },
  {
    date: "February 28, 2022",
    location: "Mars",
    name: "Bernardine",
    score: 8,
    status: "Active",
    username: "bernardine-93",
  },
  {
    date: "March 04, 2022",
    location: "Mars",
    name: "Bobbi",
    score: 9,
    status: "Active",
    username: "bobbi-38",
  },
  {
    date: "March 14, 2022",
    location: "Jupyter",
    name: "Cam",
    score: 10,
    status: "Inactive",
    username: "cam-59",
  },
  {
    date: "March 22, 2022",
    location: "Jupyter",
    name: "Carlie",
    score: 11,
    status: "Active",
    username: "carlie-25",
  },
  {
    date: "March 15, 2022",
    location: "Mars",
    name: "Cecile",
    score: 12,
    status: "Active",
    username: "cecile-9",
  },
  {
    date: "March 13, 2022",
    location: "Venus",
    name: "Christal",
    score: 13,
    status: "Active",
    username: "christal-78",
  },
  {
    date: "February 16, 2022",
    location: "Earth",
    name: "Clarice",
    score: 14,
    status: "Active",
    username: "clarice-68",
  },
  {
    date: "March 13, 2022",
    location: "Saturn",
    name: "Corly",
    score: 15,
    status: "Active",
    username: "corly-99",
  },
  {
    date: "February 12, 2022",
    location: "Saturn",
    name: "Danny",
    score: 16,
    status: "Inactive",
    username: "danny-28",
  },
  {
    date: "March 28, 2022",
    location: "Earth",
    name: "Dawn",
    score: 17,
    status: "Active",
    username: "dawn-85",
  },
  {
    date: "March 23, 2022",
    location: "Earth",
    name: "Diena",
    score: 18,
    status: "Inactive",
    username: "diena-93",
  },
  {
    date: "March 22, 2022",
    location: "Venus",
    name: "Drucie",
    score: 19,
    status: "Inactive",
    username: "drucie-38",
  },
  {
    date: "March 21, 2022",
    location: "Jupyter",
    name: "Edith",
    score: 20,
    status: "Inactive",
    username: "edith-32",
  },
  {
    date: "March 25, 2022",
    location: "Mars",
    name: "Elyssa",
    score: 21,
    status: "Inactive",
    username: "elyssa-56",
  },
  {
    date: "March 18, 2022",
    location: "Venus",
    name: "Eugine",
    score: 22,
    status: "Inactive",
    username: "eugine-41",
  },
  {
    date: "February 15, 2022",
    location: "Venus",
    name: "Fina",
    score: 23,
    status: "Active",
    username: "fina-26",
  },
  {
    date: "March 21, 2022",
    location: "Mars",
    name: "Fred",
    score: 24,
    status: "Inactive",
    username: "fred-59",
  },
  {
    date: "March 04, 2022",
    location: "Jupyter",
    name: "Gertrud",
    score: 25,
    status: "Inactive",
    username: "gertrud-35",
  },
  {
    date: "March 08, 2022",
    location: "Earth",
    name: "Gui",
    score: 26,
    status: "Active",
    username: "gui-63",
  },
  {
    date: "February 18, 2022",
    location: "Jupyter",
    name: "Hannis",
    score: 27,
    status: "Inactive",
    username: "hannis-0",
  },
  {
    date: "February 15, 2022",
    location: "Saturn",
    name: "Hyacinthe",
    score: 28,
    status: "Inactive",
    username: "hyacinthe-81",
  },
  {
    date: "February 26, 2022",
    location: "Earth",
    name: "Jacquetta",
    score: 29,
    status: "Inactive",
    username: "jacquetta-77",
  },
  {
    date: "February 09, 2022",
    location: "Mars",
    name: "Jany",
    score: 30,
    status: "Inactive",
    username: "jany-58",
  },
  {
    date: "March 24, 2022",
    location: "Venus",
    name: "Joane",
    score: 31,
    status: "Active",
    username: "joane-26",
  },
  {
    date: "February 11, 2022",
    location: "Jupyter",
    name: "Juliane",
    score: 32,
    status: "Inactive",
    username: "juliane-80",
  },
  {
    date: "February 20, 2022",
    location: "Venus",
    name: "Kamilah",
    score: 33,
    status: "Active",
    username: "kamilah-14",
  },
  {
    date: "February 09, 2022",
    location: "Earth",
    name: "Katuscha",
    score: 34,
    status: "Inactive",
    username: "katuscha-23",
  },
  {
    date: "March 08, 2022",
    location: "Mars",
    name: "Konstance",
    score: 35,
    status: "Active",
    username: "konstance-84",
  },
  {
    date: "March 09, 2022",
    location: "Jupyter",
    name: "Lacie",
    score: 36,
    status: "Active",
    username: "lacie-21",
  },
  {
    date: "March 23, 2022",
    location: "Jupyter",
    name: "Leona",
    score: 37,
    status: "Inactive",
    username: "leona-26",
  },
  {
    date: "March 16, 2022",
    location: "Jupyter",
    name: "Lita",
    score: 38,
    status: "Active",
    username: "lita-55",
  },
  {
    date: "February 26, 2022",
    location: "Earth",
    name: "Lorie",
    score: 39,
    status: "Inactive",
    username: "lorie-34",
  },
  {
    date: "March 22, 2022",
    location: "Saturn",
    name: "Madeleine",
    score: 40,
    status: "Active",
    username: "madeleine-34",
  },
  {
    date: "February 12, 2022",
    location: "Saturn",
    name: "Margette",
    score: 41,
    status: "Active",
    username: "margette-4",
  },
  {
    date: "February 03, 2022",
    location: "Venus",
    name: "Mary",
    score: 42,
    status: "Active",
    username: "mary-13",
  },
  {
    date: "February 12, 2022",
    location: "Earth",
    name: "Maye",
    score: 43,
    status: "Inactive",
    username: "maye-7",
  },
  {
    date: "March 08, 2022",
    location: "Mars",
    name: "Micheline",
    score: 44,
    status: "Inactive",
    username: "micheline-17",
  },
  {
    date: "March 13, 2022",
    location: "Jupyter",
    name: "Mureil",
    score: 45,
    status: "Active",
    username: "mureil-18",
  },
  {
    date: "February 11, 2022",
    location: "Earth",
    name: "Nariko",
    score: 46,
    status: "Active",
    username: "nariko-12",
  },
  {
    date: "February 12, 2022",
    location: "Mars",
    name: "Nollie",
    score: 47,
    status: "Active",
    username: "nollie-50",
  },
  {
    date: "March 13, 2022",
    location: "Saturn",
    name: "Paola",
    score: 48,
    status: "Inactive",
    username: "paola-66",
  },
  {
    date: "March 05, 2022",
    location: "Earth",
    name: "Perry",
    score: 49,
    status: "Active",
    username: "perry-26",
  },
  {
    date: "March 02, 2022",
    location: "Mars",
    name: "Raquela",
    score: 50,
    status: "Active",
    username: "raquela-90",
  },
  {
    date: "February 03, 2022",
    location: "Saturn",
    name: "Robinia",
    score: 51,
    status: "Inactive",
    username: "robinia-57",
  },
  {
    date: "March 08, 2022",
    location: "Mars",
    name: "Rosanne",
    score: 52,
    status: "Active",
    username: "rosanne-34",
  },
  {
    date: "March 19, 2022",
    location: "Earth",
    name: "Sara-Ann",
    score: 53,
    status: "Inactive",
    username: "sara-ann-69",
  },
  {
    date: "March 08, 2022",
    location: "Mars",
    name: "Shel",
    score: 54,
    status: "Inactive",
    username: "shel-44",
  },
  {
    date: "February 24, 2022",
    location: "Venus",
    name: "Sidoney",
    score: 55,
    status: "Active",
    username: "sidoney-95",
  },
  {
    date: "March 08, 2022",
    location: "Mars",
    name: "Suzette",
    score: 56,
    status: "Inactive",
    username: "suzette-4",
  },
  {
    date: "February 17, 2022",
    location: "Venus",
    name: "Thalia",
    score: 57,
    status: "Active",
    username: "thalia-90",
  },
  {
    date: "February 15, 2022",
    location: "Saturn",
    name: "Tobe",
    score: 58,
    status: "Inactive",
    username: "tobe-79",
  },
  {
    date: "March 20, 2022",
    location: null,
    name: "Vanessa",
    score: 59,
    status: "Active",
    username: "vanessa-80",
  },
  {
    date: "February 12, 2022",
    location: "Mars",
    name: "Wileen",
    score: 60,
    status: "Inactive",
    username: "wileen-55",
  },
];

export { pageVisits, pageTraffic, pageRanking, invoiceItems, users };