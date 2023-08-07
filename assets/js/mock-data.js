// development call
// DEVELOPMENT
async function development() {
  try {
    const cmeData = await getCME(mockCME)
    const flrData = await getFLR(mockFLR)

    displayData(cmeData, flrData)
  } catch (err) {
    console.error(err)
  }
}

development();

// mock data
const mockFLR = [
  {
    flrID: "2023-07-28T15:39:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-07-28T15:39Z",
    peakTime: "2023-07-28T15:58Z",
    endTime: "2023-07-28T16:13Z",
    classType: "M4.1",
    sourceLocation: "N25W99",
    activeRegionNum: 13376,
    linkedEvents: [
      {
        activityID: "2023-07-28T15:53:00-CME-001",
      },
      {
        activityID: "2023-07-28T18:12:00-SEP-001",
      },
      {
        activityID: "2023-07-28T19:05:00-SEP-001",
      },
      {
        activityID: "2023-07-28T19:19:00-SEP-001",
      },
      {
        activityID: "2023-07-28T19:23:00-SEP-001",
      },
      {
        activityID: "2023-07-28T23:50:00-SEP-001",
      },
      {
        activityID: "2023-07-29T00:53:00-SEP-001",
      },
    ],
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26212/-1",
  },
  {
    flrID: "2023-07-29T06:55:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-07-29T06:55Z",
    peakTime: "2023-07-29T07:34Z",
    endTime: "2023-07-29T08:12Z",
    classType: "C6.7",
    sourceLocation: "N15E88",
    activeRegionNum: null,
    linkedEvents: [
      {
        activityID: "2023-07-29T07:53:00-CME-001",
      },
    ],
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26240/-1",
  },
  {
    flrID: "2023-07-29T16:11:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-07-29T16:11Z",
    peakTime: "2023-07-29T16:24Z",
    endTime: "2023-07-29T16:37Z",
    classType: "M1.4",
    sourceLocation: "S10W10",
    activeRegionNum: 13380,
    linkedEvents: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26248/-1",
  },
  {
    flrID: "2023-07-30T08:01:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-07-30T08:01Z",
    peakTime: "2023-07-30T08:14Z",
    endTime: "2023-07-30T08:18Z",
    classType: "M1.8",
    sourceLocation: "S18E57",
    activeRegionNum: 13390,
    linkedEvents: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26265/-1",
  },
  {
    flrID: "2023-07-30T08:18:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-07-30T08:18Z",
    peakTime: "2023-07-30T08:22Z",
    endTime: "2023-07-30T08:26Z",
    classType: "M1.8",
    sourceLocation: "S18E57",
    activeRegionNum: 13390,
    linkedEvents: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26257/-1",
  },
  {
    flrID: "2023-07-31T08:42:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-07-31T08:42Z",
    peakTime: "2023-07-31T09:00Z",
    endTime: "2023-07-31T09:13Z",
    classType: "M1.6",
    sourceLocation: "S20E43",
    activeRegionNum: 13390,
    linkedEvents: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26266/-1",
  },
  {
    flrID: "2023-08-01T01:38:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-08-01T01:38Z",
    peakTime: "2023-08-01T01:56Z",
    endTime: "2023-08-01T01:58Z",
    classType: "M1.0",
    sourceLocation: "S10W40",
    activeRegionNum: 13380,
    linkedEvents: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26269/-1",
  },
  {
    flrID: "2023-08-01T01:58:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-08-01T01:58Z",
    peakTime: "2023-08-01T02:03Z",
    endTime: "2023-08-01T02:07Z",
    classType: "M1.2",
    sourceLocation: "S10W40",
    activeRegionNum: 13380,
    linkedEvents: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26270/-1",
  },
  {
    flrID: "2023-08-01T04:27:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-08-01T04:27Z",
    peakTime: "2023-08-01T04:47Z",
    endTime: "2023-08-01T05:07Z",
    classType: "M2.2",
    sourceLocation: "S10W45",
    activeRegionNum: 13380,
    linkedEvents: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26271/-1",
  },
  {
    flrID: "2023-08-01T05:30:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-08-01T05:30Z",
    peakTime: "2023-08-01T05:37Z",
    endTime: "2023-08-01T05:43Z",
    classType: "M1.3",
    sourceLocation: "S10W45",
    activeRegionNum: 13380,
    linkedEvents: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26272/-1",
  },
  {
    flrID: "2023-08-01T06:28:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-08-01T06:28Z",
    peakTime: "2023-08-01T06:57Z",
    endTime: "2023-08-01T07:19Z",
    classType: "M3.6",
    sourceLocation: "S10W47",
    activeRegionNum: 13380,
    linkedEvents: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26275/-1",
  },
  {
    flrID: "2023-08-01T09:03:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-08-01T09:03Z",
    peakTime: "2023-08-01T09:09Z",
    endTime: "2023-08-01T09:16Z",
    classType: "M1.5",
    sourceLocation: "S08W42",
    activeRegionNum: 13380,
    linkedEvents: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26276/-1",
  },
  {
    flrID: "2023-08-01T14:03:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-08-01T14:03Z",
    peakTime: "2023-08-01T14:09Z",
    endTime: "2023-08-01T14:27Z",
    classType: "M1.4",
    sourceLocation: "S10W47",
    activeRegionNum: 13380,
    linkedEvents: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26280/-1",
  },
  {
    flrID: "2023-08-01T19:48:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-08-01T19:48Z",
    peakTime: "2023-08-01T20:08Z",
    endTime: "2023-08-01T20:43Z",
    classType: "C5.2",
    sourceLocation: "N17E60",
    activeRegionNum: null,
    linkedEvents: [
      {
        activityID: "2023-08-01T20:36:00-CME-001",
      },
    ],
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26306/-1",
  },
  {
    flrID: "2023-08-01T21:39:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-08-01T21:39Z",
    peakTime: "2023-08-01T21:51Z",
    endTime: "2023-08-01T21:58Z",
    classType: "M1.0",
    sourceLocation: "S10W51",
    activeRegionNum: 13380,
    linkedEvents: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26291/-1",
  },
  {
    flrID: "2023-08-02T08:03:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-08-02T08:03Z",
    peakTime: "2023-08-02T08:12Z",
    endTime: "2023-08-02T08:21Z",
    classType: "M1.3",
    sourceLocation: "S14W60",
    activeRegionNum: 13380,
    linkedEvents: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26292/-1",
  },
  {
    flrID: "2023-08-02T10:44:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-08-02T10:44Z",
    peakTime: "2023-08-02T10:50Z",
    endTime: "2023-08-02T10:54Z",
    classType: "M1.2",
    sourceLocation: "S10W61",
    activeRegionNum: 13380,
    linkedEvents: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26293/-1",
  },
  {
    flrID: "2023-08-02T14:46:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-08-02T14:46Z",
    peakTime: "2023-08-02T14:52Z",
    endTime: "2023-08-02T14:56Z",
    classType: "M1.6",
    sourceLocation: "S10W63",
    activeRegionNum: 13380,
    linkedEvents: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26297/-1",
  },
  {
    flrID: "2023-08-02T16:13:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-08-02T16:13Z",
    peakTime: "2023-08-02T16:22Z",
    endTime: "2023-08-02T16:26Z",
    classType: "M1.3",
    sourceLocation: "S10W63",
    activeRegionNum: 13380,
    linkedEvents: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26302/-1",
  },
  {
    flrID: "2023-08-02T19:09:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-08-02T19:09Z",
    peakTime: "2023-08-02T19:14Z",
    endTime: "2023-08-02T19:21Z",
    classType: "M1.1",
    sourceLocation: "S10W66",
    activeRegionNum: 13380,
    linkedEvents: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26309/-1",
  },
  {
    flrID: "2023-08-03T11:47:00-FLR-001",
    instruments: [
      {
        displayName: "GOES-P: EXIS 1.0-8.0",
      },
    ],
    beginTime: "2023-08-03T11:47Z",
    peakTime: "2023-08-03T11:55Z",
    endTime: "2023-08-03T11:59Z",
    classType: "M2.0",
    sourceLocation: "S10W72",
    activeRegionNum: 13380,
    linkedEvents: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26313/-1",
  },
];

const mockCME = [
  {
    activityID: "2023-07-28T15:53:00-CME-001",
    catalog: "M2M_CATALOG",
    startTime: "2023-07-28T15:53Z",
    sourceLocation: "N25W99",
    activeRegionNum: 13376,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CME/26214/-1",
    note: "Fast CME in the NW following the associated M-class flare from AR3376 (N25W99) and the associated bright magnificent eruption seen just behind the limb in AIA 131/304/193 in the NW starting around 2023-07-28T15:45Z. We can see the rotating flux rope in coronagraph. This CME is measured with an approximated longitude due to a lack of stereoscopic viewpoints.",
    instruments: [
      {
        displayName: "STEREO A: SECCHI/COR2",
      },
      {
        displayName: "SOHO: LASCO/C2",
      },
      {
        displayName: "SOHO: LASCO/C3",
      },
    ],
    cmeAnalyses: [
      {
        time21_5: "2023-07-28T17:35Z",
        latitude: 40,
        longitude: 110,
        halfAngle: 43,
        speed: 2000,
        type: "R",
        isMostAccurate: true,
        note: "Analysis of the bulk/leading edge of the CME.",
        levelOfData: 1,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26223/-1",
        enlilList: [
          {
            modelCompletionTime: "2023-07-28T19:32Z",
            au: 2,
            estimatedShockArrivalTime: null,
            estimatedDuration: null,
            rmin_re: null,
            kp_18: null,
            kp_90: null,
            kp_135: null,
            kp_180: null,
            isEarthGB: false,
            link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/WSA-ENLIL/26222/-1",
            impactList: [
              {
                isGlancingBlow: false,
                location: "Solar Orbiter",
                arrivalTime: "2023-07-30T20:00Z",
              },
            ],
            cmeIDs: ["2023-07-28T15:53:00-CME-001"],
          },
          {
            modelCompletionTime: "2023-07-28T20:46Z",
            au: 5.5,
            estimatedShockArrivalTime: null,
            estimatedDuration: null,
            rmin_re: null,
            kp_18: null,
            kp_90: null,
            kp_135: null,
            kp_180: null,
            isEarthGB: false,
            link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/WSA-ENLIL/26229/-1",
            impactList: [
              {
                isGlancingBlow: false,
                location: "Solar Orbiter",
                arrivalTime: "2023-07-30T20:00Z",
              },
              {
                isGlancingBlow: true,
                location: "Juno",
                arrivalTime: "2023-08-12T12:00Z",
              },
            ],
            cmeIDs: ["2023-07-28T15:53:00-CME-001"],
          },
        ],
      },
      {
        time21_5: "2023-07-28T17:41Z",
        latitude: 43,
        longitude: 99,
        halfAngle: 44,
        speed: 1934,
        type: "O",
        isMostAccurate: false,
        note: "A very preliminary analysis with few initial timewstamps, mostly from STEREO A COR2.",
        levelOfData: 0,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26215/-1",
        enlilList: null,
      },
      {
        time21_5: "2023-07-28T17:16Z",
        latitude: 14,
        longitude: 156,
        halfAngle: 45,
        speed: 2458,
        type: "R",
        isMostAccurate: false,
        note: "Analysis of a wider fainter partial halo shock front. We assume that the shock is backsided since the eruption is behind the limb and we do not see an EUVI wave on the Earth-facing disk, nor any other lower coronal signatures (such as dimming).",
        levelOfData: 0,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26219/-1",
        enlilList: null,
      },
    ],
    linkedEvents: [
      {
        activityID: "2023-07-28T15:39:00-FLR-001",
      },
      {
        activityID: "2023-07-28T18:12:00-SEP-001",
      },
      {
        activityID: "2023-07-28T19:05:00-SEP-001",
      },
      {
        activityID: "2023-07-28T19:19:00-SEP-001",
      },
      {
        activityID: "2023-07-28T19:23:00-SEP-001",
      },
      {
        activityID: "2023-07-28T23:50:00-SEP-001",
      },
      {
        activityID: "2023-07-29T00:53:00-SEP-001",
      },
    ],
  },
  {
    activityID: "2023-07-28T22:36:00-CME-001",
    catalog: "M2M_CATALOG",
    startTime: "2023-07-28T22:36Z",
    sourceLocation: "N25E25",
    activeRegionNum: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CME/26236/-1",
    note: "Asymmetric partial halo CME seen directed primarily towards the east in SOHO LASCO C2/C3 and STEREO A COR2. Source is a filament eruption centered around N25E25 with liftoff starting around 2023-07-28T21:10Z in SDO AIA 304. Dimming can be seen in SDO AIA 193. This eruption is also seen in STEREO A EUV and COR2 imagery after a data gap from 2023-07-28T20:05Z to 2023-07-29T01:05Z.",
    instruments: [
      {
        displayName: "SOHO: LASCO/C2",
      },
      {
        displayName: "SOHO: LASCO/C3",
      },
      {
        displayName: "STEREO A: SECCHI/COR2",
      },
    ],
    cmeAnalyses: [
      {
        time21_5: "2023-07-29T04:38Z",
        latitude: -3,
        longitude: -27,
        halfAngle: 42,
        speed: 589,
        type: "C",
        isMostAccurate: true,
        note: "Longitude is based on where the eruption was centered in EUV imagery. No SOHO LASCO C2 imagery was used for this measurement due to lack of available imagery.",
        levelOfData: 0,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26237/-1",
        enlilList: [
          {
            modelCompletionTime: "2023-07-29T13:43Z",
            au: 2,
            estimatedShockArrivalTime: "2023-07-31T23:41Z",
            estimatedDuration: 19.4,
            rmin_re: 6,
            kp_18: null,
            kp_90: 4,
            kp_135: 5,
            kp_180: 6,
            isEarthGB: false,
            link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/WSA-ENLIL/26238/-1",
            impactList: [
              {
                isGlancingBlow: false,
                location: "OSIRIS-REx",
                arrivalTime: "2023-08-01T13:41Z",
              },
              {
                isGlancingBlow: false,
                location: "Parker Solar Probe",
                arrivalTime: "2023-07-31T03:54Z",
              },
              {
                isGlancingBlow: false,
                location: "STEREO A",
                arrivalTime: "2023-07-31T19:15Z",
              },
            ],
            cmeIDs: ["2023-07-28T22:36:00-CME-001"],
          },
        ],
      },
    ],
    linkedEvents: [
      {
        activityID: "2023-08-01T06:00:00-IPS-001",
      },
      {
        activityID: "2023-08-01T10:08:00-IPS-001",
      },
    ],
  },
  {
    activityID: "2023-07-29T07:53:00-CME-001",
    catalog: "M2M_CATALOG",
    startTime: "2023-07-29T07:53Z",
    sourceLocation: "N15E90",
    activeRegionNum: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CME/26241/-1",
    note: "CME visible in the NE of SOHO LASCO C2/C3 and STEREO A COR2. Source is likely a C6.7 flare peaking at 2023-07-29T07:34Z on the NE limb. Eruption is not clearly visible in SDO AIA imagery due to a data gap from an eclipse from approximately 2023-07-29T06:45Z-07:50Z, but can be seen in GOES SUVI 195 as opening field lines, EUV wave, and post eruption arcades, opening field lines and post eruption arcades in GOES SUVI 171, and an eruption of material in GOES SUVI 304. The eruption is also seen on the NE limb in STEREO A EUV 195 imagery.",
    instruments: [
      {
        displayName: "STEREO A: SECCHI/COR2",
      },
      {
        displayName: "SOHO: LASCO/C2",
      },
      {
        displayName: "SOHO: LASCO/C3",
      },
    ],
    cmeAnalyses: [
      {
        time21_5: "2023-07-29T14:07Z",
        latitude: 9,
        longitude: -88,
        halfAngle: 32,
        speed: 526,
        type: "C",
        isMostAccurate: true,
        note: "Longitude based on location of flare and eruption on the east limb.",
        levelOfData: 0,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26242/-1",
        enlilList: [
          {
            modelCompletionTime: "2023-07-29T15:12Z",
            au: 2,
            estimatedShockArrivalTime: null,
            estimatedDuration: null,
            rmin_re: null,
            kp_18: null,
            kp_90: null,
            kp_135: null,
            kp_180: null,
            isEarthGB: false,
            link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/WSA-ENLIL/26246/-1",
            impactList: [
              {
                isGlancingBlow: true,
                location: "Mars",
                arrivalTime: "2023-08-04T14:00Z",
              },
            ],
            cmeIDs: ["2023-07-29T07:53:00-CME-001"],
          },
          {
            modelCompletionTime: "2023-07-29T15:25Z",
            au: 5.5,
            estimatedShockArrivalTime: null,
            estimatedDuration: null,
            rmin_re: null,
            kp_18: null,
            kp_90: null,
            kp_135: null,
            kp_180: null,
            isEarthGB: false,
            link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/WSA-ENLIL/26247/-1",
            impactList: [
              {
                isGlancingBlow: true,
                location: "Mars",
                arrivalTime: "2023-08-04T14:00Z",
              },
            ],
            cmeIDs: ["2023-07-29T07:53:00-CME-001"],
          },
        ],
      },
    ],
    linkedEvents: [
      {
        activityID: "2023-07-29T06:55:00-FLR-001",
      },
    ],
  },
  {
    activityID: "2023-07-29T16:38:00-CME-001",
    catalog: "M2M_CATALOG",
    startTime: "2023-07-29T16:38Z",
    sourceLocation: "S15E45",
    activeRegionNum: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CME/26250/-1",
    note: "Faint, slow CME visible in the SE of STEREO A COR2. CME start is not seen in SOHO LASCO C2/C3 in real time due to a data gap. The potential source is a filament eruption starting around 2023-07-29T13:00Z centered around S15E45 as seen in SDO AIA 193/304 and STEREO A EUVI 195/304.",
    instruments: [
      {
        displayName: "STEREO A: SECCHI/COR2",
      },
    ],
    cmeAnalyses: [
      {
        time21_5: "2023-07-30T05:16Z",
        latitude: -28,
        longitude: null,
        halfAngle: 24,
        speed: 280,
        type: "S",
        isMostAccurate: true,
        note: "Plane of sky measurement. Limited STEREO A COR2 imagery is seen for this faint, slow CME. SOHO LASCO C2/C3 imagery was not available at the time of this measuremment.",
        levelOfData: 0,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26251/-1",
        enlilList: null,
      },
      {
        time21_5: "2023-07-30T04:04Z",
        latitude: -19,
        longitude: -49,
        halfAngle: 19,
        speed: 297,
        type: "S",
        isMostAccurate: false,
        note: "Measurement based on a possible source location near S15E45 starting around 2023-07-29T13:00Z. These parameters are uncertain due to uncertainty of the source location but measure similarly to the plane-of-sky measurement.",
        levelOfData: 0,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26264/-1",
        enlilList: null,
      },
    ],
    linkedEvents: null,
  },
  {
    activityID: "2023-07-29T22:24:00-CME-001",
    catalog: "M2M_CATALOG",
    startTime: "2023-07-29T22:24Z",
    sourceLocation: "",
    activeRegionNum: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CME/26255/-1",
    note: "This CME is visible to the SE in SOHO LASCO C2/C3 and STEREO A COR2 imagery for a few frames preceding a data gap. The source is uncertain, but may be related to an eruption from Active Region 13386 (N10E25) starting around 2023-07-29T20:10Z in SDO AIA 131, 171, 193 and 304 imagery.",
    instruments: [
      {
        displayName: "SOHO: LASCO/C2",
      },
      {
        displayName: "SOHO: LASCO/C3",
      },
      {
        displayName: "STEREO A: SECCHI/COR2",
      },
    ],
    cmeAnalyses: [
      {
        time21_5: "2023-07-30T07:55Z",
        latitude: -24,
        longitude: null,
        halfAngle: 17,
        speed: 348,
        type: "S",
        isMostAccurate: false,
        note: "A plane-of-sky measurement using a longitude of -90 degrees was taken due to uncertainty in source location. Another measurement based on a possible source location used a longitude of -26 degrees which resulted in a speed of 900 km/s.",
        levelOfData: 0,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26256/-1",
        enlilList: null,
      },
    ],
    linkedEvents: null,
  },
  {
    activityID: "2023-07-30T15:26:00-CME-001",
    catalog: "M2M_CATALOG",
    startTime: "2023-07-30T15:26Z",
    sourceLocation: "",
    activeRegionNum: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CME/26258/-1",
    note: "This CME is visible to the west in SOHO LASCO C2/C3 and STEREO A COR2 imagery. The source is likely far-sided as there are no clear source signatures on the Earth-facing disk.",
    instruments: [
      {
        displayName: "SOHO: LASCO/C2",
      },
      {
        displayName: "SOHO: LASCO/C3",
      },
      {
        displayName: "STEREO A: SECCHI/COR2",
      },
    ],
    cmeAnalyses: [
      {
        time21_5: "2023-07-30T23:48Z",
        latitude: 5,
        longitude: null,
        halfAngle: 11,
        speed: 414,
        type: "S",
        isMostAccurate: false,
        note: "A plane-of-sky measurement using a longitude of 90 degrees was taken due to the lack of a source location. It is possible the source is just beyond the western limb, so the longitude may vary +/- 10 degrees.",
        levelOfData: 0,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26259/-1",
        enlilList: null,
      },
    ],
    linkedEvents: null,
  },
  {
    activityID: "2023-07-30T17:12:00-CME-001",
    catalog: "M2M_CATALOG",
    startTime: "2023-07-30T17:12Z",
    sourceLocation: "",
    activeRegionNum: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CME/26262/-1",
    note: "This CME is visible to the SW in SOHO LASCO C2/C3 and STEREO A COR2 imagery. The source is an eruption and opening of field lines visible just beyond the SW limb in SDO AIA 131, 171, 193 and 304 imagery which start to open around 2023-07-30T16:20Z.",
    instruments: [
      {
        displayName: "SOHO: LASCO/C2",
      },
      {
        displayName: "SOHO: LASCO/C3",
      },
      {
        displayName: "STEREO A: SECCHI/COR2",
      },
    ],
    cmeAnalyses: [
      {
        time21_5: "2023-07-30T23:36Z",
        latitude: -52,
        longitude: 99,
        halfAngle: 31,
        speed: 549,
        type: "C",
        isMostAccurate: true,
        note: "Measurement based on approximate source location and best fit between SOHO LASCO C2 and STEREO A CO2 imagery. As the source is beyond the SW limb the exact source location is unknown and the longitude may vary +/-10 degrees.",
        levelOfData: 0,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26263/-1",
        enlilList: null,
      },
    ],
    linkedEvents: null,
  },
  {
    activityID: "2023-07-31T23:12:00-CME-001",
    catalog: "M2M_CATALOG",
    startTime: "2023-07-31T23:12Z",
    sourceLocation: "",
    activeRegionNum: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CME/26278/-1",
    note: "Faint CME seen as a partial halo to the SW in SOHO LASCO C2, C3, and STEREO A COR2 imagery. This feature overlaps multiple CME fronts to the SW. The source appears to be the southern portion of a large North-South s-shaped filament eruption along the central meridian of the Earth-facing disk. The southern portion of this filament appears to potentially lift off at about 2023-07-31T19:05Z roughly centered around S22E02. The northern portion of the filament eruption may be associated with another CME feature seen in the coronagraphs to the East.",
    instruments: [
      {
        displayName: "SOHO: LASCO/C2",
      },
      {
        displayName: "SOHO: LASCO/C3",
      },
      {
        displayName: "STEREO A: SECCHI/COR2",
      },
    ],
    cmeAnalyses: [
      {
        time21_5: "2023-08-01T08:08Z",
        latitude: -13,
        longitude: 4,
        halfAngle: 45,
        speed: 429,
        type: "S",
        isMostAccurate: true,
        note: "These parameters track the front seen to the SW in SOHO LASCO C2, C3, and STEREO A COR2 imagery. There are many overlapping parts in the coronagraphs making it difficult to associate coronagraph features with potential corresponding solar disk eruptions. This CME is measured with an approximated longitude due to a lack of stereoscopic viewpoints.",
        levelOfData: 0,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26279/-1",
        enlilList: [
          {
            modelCompletionTime: "2023-08-01T19:45Z",
            au: 2,
            estimatedShockArrivalTime: "2023-08-04T05:27Z",
            estimatedDuration: 27.5,
            rmin_re: 6,
            kp_18: null,
            kp_90: 4,
            kp_135: 5,
            kp_180: 5,
            isEarthGB: false,
            link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/WSA-ENLIL/26285/-1",
            impactList: [
              {
                isGlancingBlow: false,
                location: "OSIRIS-REx",
                arrivalTime: "2023-08-05T02:42Z",
              },
              {
                isGlancingBlow: false,
                location: "Parker Solar Probe",
                arrivalTime: "2023-08-03T14:36Z",
              },
              {
                isGlancingBlow: false,
                location: "STEREO A",
                arrivalTime: "2023-08-04T00:01Z",
              },
            ],
            cmeIDs: [
              "2023-07-31T23:36:00-CME-001",
              "2023-08-01T00:12:00-CME-001",
              "2023-07-31T23:12:00-CME-001",
            ],
          },
        ],
      },
    ],
    linkedEvents: null,
  },
  {
    activityID: "2023-07-31T23:36:00-CME-001",
    catalog: "M2M_CATALOG",
    startTime: "2023-07-31T23:36Z",
    sourceLocation: "N10E05",
    activeRegionNum: 13386,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CME/26283/-1",
    note: "This CME is first seen to the NE in SOHO LASCO C2 at 2023-07-31T23:36Z in both white light and difference imagery. The source of this CME is likely the northern portion (from N15 to S10) of a filament which erupted at central meridian and seems to have deflected to the NE as seen in UV imagery. The northern portion of the filament seems to lift off at about 2023-07-31T17:30Z, as seen in SDO AIA 304 (though, it is difficult to discern exact time due to having only a face-on view of the solar disk). This CME overlaps with a prior CME which likely has a source on the far side of the solar disk.",
    instruments: [
      {
        displayName: "SOHO: LASCO/C2",
      },
      {
        displayName: "SOHO: LASCO/C3",
      },
    ],
    cmeAnalyses: [
      {
        time21_5: "2023-08-01T04:05Z",
        latitude: 10,
        longitude: -23,
        halfAngle: 19,
        speed: 636,
        type: "C",
        isMostAccurate: true,
        note: "This CME is measured using an estimate of the source location based on UV imagery. The eruption of the northern portion of filament stretches from N15-S10 and at E05 on the solar disk. This CME is S-shaped and difficult to track in later frames of difference imagery due to overlapping with other CMEs. Data gap in STEREO A difference imagery from 2023-07-31T21:53Z to 2023-08-01T05:23Z restricts measurement to two frames before leading edge of CME exits the STEREO A COR2 field of view.",
        levelOfData: 0,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26284/-1",
        enlilList: [
          {
            modelCompletionTime: "2023-08-01T19:45Z",
            au: 2,
            estimatedShockArrivalTime: "2023-08-04T05:27Z",
            estimatedDuration: 27.5,
            rmin_re: 6,
            kp_18: null,
            kp_90: 4,
            kp_135: 5,
            kp_180: 5,
            isEarthGB: false,
            link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/WSA-ENLIL/26285/-1",
            impactList: [
              {
                isGlancingBlow: false,
                location: "OSIRIS-REx",
                arrivalTime: "2023-08-05T02:42Z",
              },
              {
                isGlancingBlow: false,
                location: "Parker Solar Probe",
                arrivalTime: "2023-08-03T14:36Z",
              },
              {
                isGlancingBlow: false,
                location: "STEREO A",
                arrivalTime: "2023-08-04T00:01Z",
              },
            ],
            cmeIDs: [
              "2023-07-31T23:36:00-CME-001",
              "2023-08-01T00:12:00-CME-001",
              "2023-07-31T23:12:00-CME-001",
            ],
          },
        ],
      },
    ],
    linkedEvents: null,
  },
  {
    activityID: "2023-08-01T00:12:00-CME-001",
    catalog: "M2M_CATALOG",
    startTime: "2023-08-01T00:12Z",
    sourceLocation: "N21E16",
    activeRegionNum: 13387,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CME/26281/-1",
    note: "Faint possibly partial halo CME seen to the NE in SOHO LASCO not seen in STEREO COR2A as it is fully covered by the nighttime STEREO data gap. A possible source could be what is likely a filament eruption near Active Region 13387, marked by dimming in AIA 193 but with rising post-eruptive arcades seen in AIA 94/335.",
    instruments: [
      {
        displayName: "SOHO: LASCO/C2",
      },
      {
        displayName: "SOHO: LASCO/C3",
      },
    ],
    cmeAnalyses: [
      {
        time21_5: "2023-08-01T06:40Z",
        latitude: 5,
        longitude: -32,
        halfAngle: 37,
        speed: 564,
        type: "C",
        isMostAccurate: true,
        note: "Uncertain one coronagraph analysis with SOHO LASCO only, assuming the source location is the dimming associated with a likely filament eruption SE of AR 13387.",
        levelOfData: 0,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26282/-1",
        enlilList: [
          {
            modelCompletionTime: "2023-08-01T19:45Z",
            au: 2,
            estimatedShockArrivalTime: "2023-08-04T05:27Z",
            estimatedDuration: 27.5,
            rmin_re: 6,
            kp_18: null,
            kp_90: 4,
            kp_135: 5,
            kp_180: 5,
            isEarthGB: false,
            link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/WSA-ENLIL/26285/-1",
            impactList: [
              {
                isGlancingBlow: false,
                location: "OSIRIS-REx",
                arrivalTime: "2023-08-05T02:42Z",
              },
              {
                isGlancingBlow: false,
                location: "Parker Solar Probe",
                arrivalTime: "2023-08-03T14:36Z",
              },
              {
                isGlancingBlow: false,
                location: "STEREO A",
                arrivalTime: "2023-08-04T00:01Z",
              },
            ],
            cmeIDs: [
              "2023-07-31T23:36:00-CME-001",
              "2023-08-01T00:12:00-CME-001",
              "2023-07-31T23:12:00-CME-001",
            ],
          },
        ],
      },
    ],
    linkedEvents: null,
  },
  {
    activityID: "2023-08-01T12:36:00-CME-001",
    catalog: "M2M_CATALOG",
    startTime: "2023-08-01T12:36Z",
    sourceLocation: "N10W11",
    activeRegionNum: 13386,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CME/26288/-1",
    note: "Faint and fast narrow CME in the NW. No definitive source has been found but it could be a relatively minor eruption in Active Region 13386 (N10W11) starting ~2023-08-01T10:30Z, with dimming and high post eruptive arcades seen in AIA 193 imagery.",
    instruments: [
      {
        displayName: "SOHO: LASCO/C2",
      },
      {
        displayName: "SOHO: LASCO/C3",
      },
      {
        displayName: "STEREO A: SECCHI/COR2",
      },
    ],
    cmeAnalyses: [
      {
        time21_5: "2023-08-01T14:30Z",
        latitude: 17,
        longitude: 22,
        halfAngle: 11,
        speed: 1369,
        type: "O",
        isMostAccurate: true,
        note: "A very uncertain analysis assuming the source is the relatively minor eruption NW of Active Region 13386 marked by high rising post-eruptive arcades and dimming. This source is not certain since it is relatively minor, however no alternative source has been found.",
        levelOfData: 0,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26290/-1",
        enlilList: [
          {
            modelCompletionTime: "2023-08-01T20:48Z",
            au: 2,
            estimatedShockArrivalTime: "2023-08-04T22:00Z",
            estimatedDuration: null,
            rmin_re: null,
            kp_18: null,
            kp_90: 2,
            kp_135: 3,
            kp_180: 3,
            isEarthGB: true,
            link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/WSA-ENLIL/26295/-1",
            impactList: [
              {
                isGlancingBlow: false,
                location: "OSIRIS-REx",
                arrivalTime: "2023-08-05T16:00Z",
              },
              {
                isGlancingBlow: false,
                location: "Parker Solar Probe",
                arrivalTime: "2023-08-03T16:00Z",
              },
              {
                isGlancingBlow: true,
                location: "STEREO A",
                arrivalTime: "2023-08-04T20:00Z",
              },
            ],
            cmeIDs: ["2023-08-01T12:36:00-CME-001"],
          },
        ],
      },
      {
        time21_5: "2023-08-01T18:13Z",
        latitude: 26,
        longitude: null,
        halfAngle: 23,
        speed: 606,
        type: "C",
        isMostAccurate: false,
        note: "",
        levelOfData: 0,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26289/-1",
        enlilList: null,
      },
    ],
    linkedEvents: null,
  },
  {
    activityID: "2023-08-01T20:36:00-CME-001",
    catalog: "M2M_CATALOG",
    startTime: "2023-08-01T20:36Z",
    sourceLocation: "N17E60",
    activeRegionNum: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CME/26304/-1",
    note: "This CME is visible to the NE in SOHO LASCO C2, C3, COR2A. It has an asymmetrical front with a portion in the north further ahead than the rest of the CME. The source is a C5.2 class flare from an unnumbered region around N17E60 starting at 2023-08-01T19:48Z. The flare is associated with moving/opening field lines above the main source location best seen in GOES SUVI 131 with associated dimming in GOES SUVI 195 starting around 2023-08-01T20:24Z. There are also some short post-eruptive arcades seen following the eruption.",
    instruments: [
      {
        displayName: "SOHO: LASCO/C2",
      },
      {
        displayName: "SOHO: LASCO/C3",
      },
      {
        displayName: "STEREO A: SECCHI/COR2",
      },
    ],
    cmeAnalyses: [
      {
        time21_5: "2023-08-02T07:13Z",
        latitude: 20,
        longitude: -60,
        halfAngle: 30,
        speed: 323,
        type: "S",
        isMostAccurate: true,
        note: "This CME is measured with an approximated longitude based on the apparent source due to a lack of stereoscopic viewpoints.",
        levelOfData: 0,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26305/-1",
        enlilList: null,
      },
    ],
    linkedEvents: [
      {
        activityID: "2023-08-01T19:48:00-FLR-001",
      },
    ],
  },
  {
    activityID: "2023-08-02T05:36:00-CME-001",
    catalog: "M2M_CATALOG",
    startTime: "2023-08-02T05:36Z",
    sourceLocation: "",
    activeRegionNum: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CME/26307/-1",
    note: "Faint CME seen to the East in SOHO LASCO C2, C3, and STEREO A COR2. The source is a filament eruption best seen in GOES SUVI 304 starting around 2023-08-02T04:56Z along the eastern limb. There are associated moving/opening field lines visible in GOES SUVI 284 as well. It is unclear exactly where the footpoint of the filament is due to the limited view points of the Sun.",
    instruments: [
      {
        displayName: "SOHO: LASCO/C2",
      },
      {
        displayName: "SOHO: LASCO/C3",
      },
      {
        displayName: "STEREO A: SECCHI/COR2",
      },
    ],
    cmeAnalyses: [
      {
        time21_5: "2023-08-02T15:22Z",
        latitude: -4,
        longitude: null,
        halfAngle: 32,
        speed: 372,
        type: "S",
        isMostAccurate: true,
        note: "This CME is measured using the plane-of-sky method due to a lack of stereoscopic viewpoints.",
        levelOfData: 0,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26308/-1",
        enlilList: null,
      },
    ],
    linkedEvents: null,
  },
  {
    activityID: "2023-08-02T09:12:00-CME-001",
    catalog: "M2M_CATALOG",
    startTime: "2023-08-02T09:12Z",
    sourceLocation: "",
    activeRegionNum: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CME/26298/-1",
    note: "This CME is seen as a halo CME with a bulk portion seen more predominantly to the west in SOHO LASCO C2, C3, and STEREO A COR2 imagery. The more full halo portion is fairly faint in coronagraph imagery. The source of this CME is an S-shaped filament eruption stretching from roughly N10 to S15. There is clear dimming associated with this source as seen in SDO/AIA 193 starting around 2023-08-02T08:00Z. This dimming stretches from W10 to W30 within the N10 to S15 latitudes.",
    instruments: [
      {
        displayName: "SOHO: LASCO/C2",
      },
      {
        displayName: "SOHO: LASCO/C3",
      },
      {
        displayName: "STEREO A: SECCHI/COR2",
      },
    ],
    cmeAnalyses: [
      {
        time21_5: "2023-08-02T13:43Z",
        latitude: -4,
        longitude: 26,
        halfAngle: 42,
        speed: 759,
        type: "C",
        isMostAccurate: true,
        note: "These parameters are based on the best fit of the bulk portion of the CME seen predominantly to the west in coronagraphs. Measured speeds ranged between 750 km/s to 850 km/s. This CME is measured with an approximated longitude due to a lack of stereoscopic viewpoints. Potential measured longitudes ranged between 20 to 30 degrees with ranges from 0 to -5 degrees in latitude.",
        levelOfData: 0,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26299/-1",
        enlilList: [
          {
            modelCompletionTime: "2023-08-02T16:18Z",
            au: 2,
            estimatedShockArrivalTime: "2023-08-05T03:50Z",
            estimatedDuration: 28.7,
            rmin_re: 5.8,
            kp_18: null,
            kp_90: 3,
            kp_135: 5,
            kp_180: 5,
            isEarthGB: false,
            link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/WSA-ENLIL/26300/-1",
            impactList: [
              {
                isGlancingBlow: false,
                location: "OSIRIS-REx",
                arrivalTime: "2023-08-05T17:38Z",
              },
              {
                isGlancingBlow: false,
                location: "Parker Solar Probe",
                arrivalTime: "2023-08-04T07:22Z",
              },
              {
                isGlancingBlow: false,
                location: "STEREO A",
                arrivalTime: "2023-08-05T00:30Z",
              },
            ],
            cmeIDs: ["2023-08-02T09:12:00-CME-001"],
          },
        ],
      },
      {
        time21_5: "2023-08-02T13:47Z",
        latitude: 4,
        longitude: -3,
        halfAngle: 45,
        speed: 759,
        type: "C",
        isMostAccurate: false,
        note: "Parameters are based off of the best fit of the faint halo shock feature seen in SOHO LASCO C3 and STEREO A COR2. This CME is measured with an approximated longitude due to a lack of stereoscopic viewpoints.",
        levelOfData: 0,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26303/-1",
        enlilList: null,
      },
    ],
    linkedEvents: null,
  },
  {
    activityID: "2023-08-02T18:48:00-CME-001",
    catalog: "M2M_CATALOG",
    startTime: "2023-08-02T18:48Z",
    sourceLocation: "",
    activeRegionNum: null,
    link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CME/26315/-1",
    note: "CME going East in coronagraphs, bright (especially in COR2A but partially covered by night time data gap in STEREO). Source is the opening of field lines behind SE limb/post-eruptive arcades in AIA 171/193 starting at 18:33Z.",
    instruments: [
      {
        displayName: "SOHO: LASCO/C2",
      },
      {
        displayName: "SOHO: LASCO/C3",
      },
      {
        displayName: "STEREO A: SECCHI/COR2",
      },
    ],
    cmeAnalyses: [
      {
        time21_5: "2023-08-03T03:43Z",
        latitude: -14,
        longitude: -100,
        halfAngle: 36,
        speed: 410,
        type: "S",
        isMostAccurate: true,
        note: "Analysis based on the assumption that the source of this backsided CME is the long-duration flare likely in AR 3394 closely behind the SE limb at the time. Longitude is approximate.",
        levelOfData: 0,
        link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/26317/-1",
        enlilList: [
          {
            modelCompletionTime: "2023-08-03T19:30Z",
            au: 2,
            estimatedShockArrivalTime: null,
            estimatedDuration: null,
            rmin_re: null,
            kp_18: null,
            kp_90: null,
            kp_135: null,
            kp_180: null,
            isEarthGB: false,
            link: "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/WSA-ENLIL/26319/-1",
            impactList: [
              {
                isGlancingBlow: false,
                location: "Mars",
                arrivalTime: "2023-08-09T02:00Z",
              },
            ],
            cmeIDs: ["2023-08-02T18:48:00-CME-001"],
          },
        ],
      },
    ],
    linkedEvents: null,
  },
];

module.exports = { mockCME, mockFLR };
