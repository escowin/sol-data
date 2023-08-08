import "../css/styles.css";
const { displayData } = require("./displayData");
const { fluctuate, currentDistance } = require("./helper");
const { calculateDuration, ...time } = require("./time");
const { mockCME, mockFLR } = require("./mockData");

const stats = {
  temp: fluctuate(5772),
  spectral: "G2V",
  metallicity: "Z = 0.0122",
  luminosity: "L⊙ = 4πkI⊙A2",
  distance: currentDistance(time.now, time.perihelion),
  lm: () =>
    `${(stats.distance / 17987547.48).toLocaleString("en-US")} light minutes`,
};

// javascript functions handle data before the dom
console.log(`
   \u00A9 ${time.year} Edwin M. Escobar
   https://github.com/escowin/sun-tracker
   `);

// returns API data through promises
async function apiCalls() {
  // variables used to dynamically create URL for fetch requests
  const api = {
    base: "https://api.nasa.gov/DONKI/",
    key: "UJO2NYWIRwCuDl6l431qKvjZviS8TPLUatA1E0xd",
    endpoints: ["CME", "FLR"],
    start: time.apiStart,
    end: time.apiEnd,
    path: function (param) {
      return `${this.base}${param}?startDate=${this.start}&endDate=${this.end}&api_key=${this.key}`;
    },
  };

  try {
    // creates an array of promises by mapping endpoints as fetch arguments
    const promises = api.endpoints.map((endpoint) =>
      getSunActivity(api.path(endpoint), endpoint)
    );
    // awaits to resolve promises. results assigned to corresponding variables
    const [cmeData, flrData] = await Promise.all(promises);

    // retrieved data is handled in jquery function for dom manipulation
    displayData(cmeData, flrData, stats);
  } catch (err) {
    console.error(err);
  }
}

// makes fetch requests to NASA API for specified endpoints
function getSunActivity(url, endpoint) {
  // selects appropriate fetch & data handling functions
  switch (endpoint) {
    case "CME":
      return fetch(url).then((res) => res.json().then((data) => getCME(data)));
    case "FLR":
      return fetch(url).then((res) => res.json().then((data) => getFLR(data)));
    default:
      return Promise.reject("failed fetch request");
  }
}

async function getCME(CME) {
  // selects last object in CME array to get the most recent data
  const latestCME = CME[CME.length - 1];
  // retrieves relevant variables through object destructuring
  const { startTime, note, cmeAnalyses } = latestCME;
  const { latitude, longitude, halfAngle, speed, type } = cmeAnalyses[0];
  // CME object is
  const cmeObj = {
    startTime: startTime,
    note: note,
    latitude: longitude,
    longitude: latitude,
    halfAngle: halfAngle,
    speed: speed,
    type: type,
  };

  return cmeObj;
}

async function getFLR(FLR) {
  // get latest solar flare data
  const latestFLR = FLR[FLR.length - 1];

  const duration = calculateDuration(
    latestFLR.beginTime,
    latestFLR.endTime,
    "minute"
  );

  const flrObj = {
    beginTime: latestFLR.beginTime,
    peakTime: latestFLR.peakTime,
    endTime: latestFLR.endTime,
    duration: duration,
    activeRegionNum: latestFLR.activeRegionNum,
    sourceLocation: latestFLR.sourceLocation,
    classType: latestFLR.classType,
  };

  return flrObj;
}

// calls
// apiCalls();

// DEVELOPMENT
async function development() {
  try {
    const cmeData = await getCME(mockCME);
    const flrData = await getFLR(mockFLR);

    console.log(cmeData)
    displayData(cmeData, flrData, stats);
  } catch (err) {
    console.error(err);
  }
}

development();
