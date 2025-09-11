// Enums for traits
enum TraitRarity {
  Common = "Common",
  Uncommon = "Uncommon",
  Rare = "Rare",
  Mythical = "Mythical",
}

enum SpiritForce {
  ADAI = "aDAI",
  AETH = "aETH",
  AAAVE = "aAAVE",
  ALINK = "aLINK",
  AUSDT = "aUSDT",
  AUSDC = "aUSDC",
  ATUSD = "aTUSD",
  AUNI = "aUNI",
  AYFI = "aYFI",
  AWBTC = "aWBTC",
  AMWMATIC = "amWMATIC",
}

interface Table {
  tableName: string;
  tableCaption?: string;
  tableData: TableData;
}

interface TableData {
  headers: string[];
  data: string[][];
}

// Helper functions
function createSpiritForceEntry(
  tokenName: SpiritForce,
  modifier: string,
  imagePath?: string
): string[] {
  const defaultPath = `/spirit-force/${tokenName}.svg`;
  const path = imagePath || defaultPath;
  const altText = `${tokenName} token`;

  return [`<img class="atoken" src="${path}" alt="${altText}">`, modifier];
}

// Constants
const TRAIT_PROBABILITY_HEADERS = [
  "Rarity Type",
  "Range (Low)",
  "Range (High)",
  "Percentage",
];
const SPIRIT_FORCE_HEADERS = ["Spirit Force", "Modifier"];
const TRAITS_BY_RARITY_HEADERS_1 = [
  "Trait",
  "Mythical(L)",
  "Rare(L)",
  "Uncommon(L)",
  "Common",
];
const TRAITS_BY_RARITY_HEADERS_2 = [
  "Trait",
  "Common",
  "Uncommon(H)",
  "Rare(H)",
  "Mythical(H)",
];

function createTable(
  tableName: string,
  tableCaption: string,
  data: string[][],
  headers: string[]
): Table {
  return {
    tableName,
    tableCaption,
    tableData: {
      headers,
      data,
    },
  };
}

export const tables = [
  {
    tableName: "TraitsProbabilities",
    tableCaption: "Trait Range and Rarity Probabilities",
    tableData: {
      headers: ["Rarity Type", "Range (Low)", "Range (High)", "Percentage"],
      data: [
        ["Common", "25-74", "25-74", "50%"],
        ["Uncommon", "10-24", "75-90", "30%"],
        ["Rare", "2-9", "91-97", "16%"],
        ["Mythical", "0-1", "98-99", "4%"],
      ],
    },
  },

  {
    tableName: "spiritForceModifiers",
    tableCaption: "",
    tableData: {
      headers: ["Spirit Force", "Modifier"],
      data: [
        [
          `<img class="atoken" src="/spirit-force/aDAI.svg" alt = "aDAI token">`,
          "NRG +1",
        ],
        [
          `<img class="atoken" src="/spirit-force/aETH.svg" alt = "aETH token">`,
          "AGG +1",
        ],
        [
          `<img class="atoken" src="/spirit-force/aAAVE.svg" alt = "aAAVE token">`,
          "SPK +1",
        ],
        [
          `<img class="atoken" src="/spirit-force/aLINK.svg" alt = "aLINK token">`,
          "BRN +1",
        ],
        [
          `<img class="atoken" src="/spirit-force/aUSDT.svg" alt = "aUSDT token">`,
          "AGG -1",
        ],
        [
          `<img class="atoken" src="/spirit-force/aUSDC.svg" alt = "aUSDC token">`,
          "SPK -1",
        ],
        [
          `<img class="atoken" src="/spirit-force/aTUSD.svg" alt = "aTUSD token">`,
          "SPK -1",
        ],
        [
          `<img class="atoken" src="/spirit-force/aUNI.svg" alt = "aUNI token">`,
          "SPK -1",
        ],
        [
          `<img class="atoken" src="/spirit-force/aYFI.svg" alt = "aYFI token">`,
          "BRN +1",
        ],
        [
          `<img class="atoken" src="/spirit-force/aWBTC.svg" alt = "aWBTC token">`,
          "AGG +1",
        ],
        [`amWMATIC (Pending Image from Polygon)`, "BRN +1"],
      ],
    },
  },

  {
    tableName: "TraitsByRarity1",
    tableCaption: "Aavegotchi Personal Traits by Rarity",
    tableData: {
      headers: ["Trait", "Mythical(L)", "Rare(L)", "Uncommon(L)", "Common"],
      data: [
        ["Energy", "Zen", "Serene", "Sleepy", "Calm"],
        ["Aggressiveness", "Nonviolent", "Peaceful", "Gentle", "Neutral"],
        ["Spookiness", "Cuddly", "Impish", "Unnerving", "Scary"],
        ["Brain Size", "Smol", "Tiny", "Small", "Normal"],
        ["Eye Shape", "Single Dot", "Flat Line", "T Eyes", "Round Eyes"],
        [
          "Eye Color",
          `<img src="/traits/eye-colour/mythical_low.svg" />`,
          `<img src="/traits/eye-colour/rare_low.svg" />`,
          `<img src="/traits/eye-colour/uncommon_low.svg" />`,
          "*Collateral Colour",
        ],
      ],
    },
  },

  {
    tableName: "TraitsByRarity2",
    tableCaption: "Aavegotchi Personal Traits by Rarity (Continued)",
    tableData: {
      headers: ["Trait", "Common", "Uncommon(H)", "Rare(H)", "Mythical(H)"],
      data: [
        ["Energy", "Calm", "Energetic", "Hyper", "Turnt"],
        ["Aggressiveness", "Neutral", "Combative", "Warlike", "Based"],
        ["Spookiness", "Scary", "Creepy", "Terrifying", "Ghastly"],
        ["Brain Size", "Normal", "Big", "Huge", "Galaxy"],
        ["Eye Shape", "Round Eyes", "Anime Eyes", "Awesome Eyes", "Collateral"],
        [
          "Eye Color",
          "*Collateral Colour",
          `<img src="/traits/eye-colour/uncommon_high.svg" />`,
          `<img src="/traits/eye-colour/rare_high.svg" />`,
          `<img src="/traits/eye-colour/mythical_high.svg" />`,
        ],
      ],
    },
  },
];
