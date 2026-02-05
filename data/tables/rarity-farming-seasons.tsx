

// Enums for rarity farming
enum RarityFarmingCategory {
  Rarity = "Rarity",
  Kinship = "Kinship",
  XP = "XP",
  RookieKinship = "Rookie Kinship",
  RookieXP = "Rookie XP",
  GotchiBattler = "Gotchi Battler",
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
function createSeasonEntry(
  category: string,
  ...seasonValues: string[]
): string[] {
  return [category, ...seasonValues];
}

function createBattlerRankEntry(
  rank: string,
  tournament10k: string,
  tournament40k: string,
  tournament100k: string
): string[] {
  return [rank, tournament10k, tournament40k, tournament100k];
}

// Constants
const RARITY_FARMING_HEADERS = [
  "Category",
  "Season 1",
  "Season 2", 
  "Season 3",
  "Season 4",
  "Season 5",
  "Season 6",
  "Season 7",
  "Season 8",
  "Season 9",
];

const GOTCHI_BATTLER_HEADERS = [
  "Rank",
  "10K GHST Tournament",
  "40K GHST Tournament", 
  "100K GHST Tournament",
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
      data
    }
  };
}

export const tables = [
  // Rarity Farming Seasons
  createTable(
    "rarityFarmingSeasons",
    "",
    [
      createSeasonEntry(
        "Rarity",
        "980,000 GHST",
        "1,200,000 GHST",
        "1,050,000 GHST",
        "1,050,000 GHST",
        "1,050,000 GHST",
        "1,050,000 GHST",
        "1,050,000 GHST",
        "900,000 GHST",
        "750,000 GHST"
      ),
      createSeasonEntry(
        "Kinship",
        "280,000 GHST",
        "200,000 GHST",
        "300,000 GHST",
        "300,000 GHST",
        "300,000 GHST",
        "300,000 GHST",
        "300,000 GHST",
        "300,000 GHST",
        "300,000 GHST"
      ),
      createSeasonEntry(
        "XP",
        "140,000 GHST",
        "200,000 GHST",
        "150,000 GHST",
        "150,000 GHST",
        "150,000 GHST",
        "150,000 GHST",
        "150,000 GHST",
        "150,000 GHST",
        "150,000 GHST"
      ),
      createSeasonEntry(
        "Rookie Kinship",
        "-",
        "200,000 GHST",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ),
      createSeasonEntry(
        "Rookie XP",
        "-",
        "200,000 GHST",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ),
      createSeasonEntry(
        "Gotchi Battler",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "100,000 GHST",
        "150,000 GHST",
        "300,000 GHST"
      ),
    ],
    RARITY_FARMING_HEADERS
  ),

  // Gotchi Battler Season 8 Rewards
  createTable(
    "gotchiBattlerSeason8",
    "",
    [
      createBattlerRankEntry("1", "1000", "4000", "10000"),
      createBattlerRankEntry("2", "640", "2560", "6400"),
      createBattlerRankEntry("3", "360", "1440", "3600"),
      createBattlerRankEntry("4", "240", "960", "2400"),
      createBattlerRankEntry("5-6", "152", "608", "1520"),
      createBattlerRankEntry("7-8", "104", "416", "1040"),
      createBattlerRankEntry("9-12", "80", "320", "800"),
      createBattlerRankEntry("13-16", "66", "264", "660"),
      createBattlerRankEntry("17-24", "54", "216", "540"),
      createBattlerRankEntry("25-32", "45", "180", "450"),
      createBattlerRankEntry("33-48", "38", "152", "380"),
      createBattlerRankEntry("49-64", "31", "124", "310"),
      createBattlerRankEntry("65-96", "25", "100", "250"),
      createBattlerRankEntry("97-128", "20", "80", "200"),
      createBattlerRankEntry("129-192", "15", "60", "150"),
      createBattlerRankEntry("193-256", "11", "44", "110"),
      createBattlerRankEntry("257-384", "8", "32", "80"),
      createBattlerRankEntry("385-512", "5", "20", "50"),
    ],
    GOTCHI_BATTLER_HEADERS
  ),
];
