// Enums for ugotchi
enum UgotchiType {
  TerenceMckenna = "terenceMckenna",
  MachineElf = "machineElf",
  StonedApe = "stonedApe",
  Ayahuasca = "ayahuasca",
  ClockworkElf = "clockworkElf",
  Valuation = "valuation",
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
function createUgotchiPocketEntry(wearableImages: string[]): string[] {
  return wearableImages;
}

function createValuationEntry(
  name: string,
  tokenId: string,
  ethValue: string,
  usdValue: string
): string[] {
  return [name, tokenId, ethValue, usdValue];
}

// Constants
const GOTCHI_POCKET_HEADERS: string[] = [];
const VALUATION_HEADERS = [
  "Name",
  "Token ID",
  "Appraised Value (ETH)",
  "Appraised Value (USD)",
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
  // Terence McKenna Gotchi Pocket
  createTable(
    "terenceMckenna",
    "Gotchi Pocket",
    [
      [
        `<img src="/wearables/50.svg" alt="aavegotchi GldnXross Robe" title="GldnXross Robe" />`,
        `<img src="/wearables/13.svg" alt="aavegotchi Sergey Beard" title="Sergey Beard" />`,
        `<img src="/wearables/53.svg" alt="aavegotchi All Seeing Eyes" title="All Seeing Eyes" />`,
        `<img src="/wearables/52.svg" alt="aavegotchi Galaxy Brain" title="Galaxy Brain" />`,
        `<img src="/wearables/51.svg" alt="aavegotchi Mudgen Diamond" title="Mudgen Diamond" />`,
        `<img src="/wearables/51.svg" alt="aavegotchi Mudgen Diamond" title="Mudgen Diamond" />`,
        `<img src="/wearables/155.svg" alt="aavegotchi Mythical Rofl" title="Mythical Rofl" />`,
      ],
    ],
    GOTCHI_POCKET_HEADERS
  ),

  // Machine Elf Gotchi Pocket
  createTable(
    "machineElf",
    "Gotchi Pocket",
    [
      [
        `<img src="/wearables/140.svg" alt="aavegotchi Elf Ears" title="Elf Ears" />`,
        `<img src="/wearables/49.svg" alt="aavegotchi Coderdan Shades" title="Coderdan Shades" />`,
        `<img src="/wearables/48.svg" alt="aavegotchi Xibot Mohawk" title="Xibot Mohawk" />`,
        `<img src="/wearables/116.svg" alt="aavegotchi Coconut" title="Coconut" />`,
        `<img src="/wearables/89.svg" alt="aavegotchi Pickaxe" title="Pickaxe" />`,
      ],
    ],
    GOTCHI_POCKET_HEADERS
  ),

  // Stoned Ape Gotchi Pocket
  createTable(
    "stonedApe",
    "Gotchi Pocket",
    [
      [
        `<img src="/wearables/91.svg" alt="aavegotchi Pajama Shirt" title="Pajama Shirt" />`,
        `<img src="/wearables/14.svg" alt="aavegotchi Sergey Eyes" title="Sergey Eyes" />`,
        `<img src="/wearables/45.svg" alt="aavegotchi Ape Mask" title="Ape Mask" />`,
        `<img src="/wearables/130.svg" alt="aavegotchi Fireball" title="Fireball" />`,
        `<img src="/wearables/116.svg" alt="aavegotchi Coconut" title="Coconut" />`,
        `<img src="/wearables/110.svg" alt="aavegotchi Jamaican Flag" title="Jamaican Flag" />`,
      ],
    ],
    GOTCHI_POCKET_HEADERS
  ),

  // Ayahuasca Gotchi Pocket
  createTable(
    "ayahuasca",
    "Gotchi Pocket",
    [
      [
        `<img src="/wearables/85.svg" alt="aavegotchi Gentleman Coat" title="Gentleman Coat" />`,
        `<img src="/wearables/33.svg" alt="aavegotchi Stani Hair" title="Stani Hair" />`,
        `<img src="/wearables/44.svg" alt="aavegotchi DAO Egg" title="DAO Egg" />`,
        `<img src="/wearables/96.svg" alt="aavegotchi Water Bottle" title="Water bottle" />`,
        `<img src="/wearables/22.svg" alt="aavegotchi Captain Aave Suit" title="Captain Aave Suit" />`,
        `<img src="/wearables/66.svg" alt="aavegotchi Wizard Visor" title="Wizard Visor" />`,
        `<img src="/wearables/104.svg" alt="aavegotchi Portal Mage Helmet" title="Portal Mage Helmet" />`,
        `<img src="/wearables/23.svg" alt="aavegotchi Captain Aave Shield" title="Captain Aave Shield" />`,
      ],
    ],
    GOTCHI_POCKET_HEADERS
  ),

  // Clockwork Elf Gotchi Pocket
  createTable(
    "clockworkElf",
    "Gotchi Pocket",
    [
      [
        `<img src="/wearables/140.svg" alt="aavegotchi Elf Ears" title="Elf Ears" />`,
        `<img src="/wearables/49.svg" alt="aavegotchi Coderdan Shades" title="Coderdan Shades" />`,
        `<img src="/wearables/161.svg" alt="aavegotchi Lil Pump Dreads" title="Lil Pump Dreads" />`,
        `<img src="/wearables/51.svg" alt="aavegotchi Mudgen Diamond" title="Mudgen Diamond" />`,
        `<img src="/wearables/32.svg" alt="aavegotchi Aave Flag" title="Aave Flag" />`,
      ],
    ],
    GOTCHI_POCKET_HEADERS
  ),

  // Valuation Table
  createTable(
    "valuation",
    "",
    [
      createValuationEntry("Terence Mckenna", "1549", "90", "$319,500.00"),
      createValuationEntry("Machine Elf", "8062", "11.27", "$40,008.50"),
      createValuationEntry("Stoned Ape", "4479", "7", "$24,850.00"),
      createValuationEntry("Ayahuasca", "9106", "15.77", "$55,983.50"),
      createValuationEntry("Clockwork Elf", "1306", "57", "$202,350.00"),
      createValuationEntry("Unopened Portal 2", "2", "77", "$273,350.00"),
    ],
    VALUATION_HEADERS
  ),
];
