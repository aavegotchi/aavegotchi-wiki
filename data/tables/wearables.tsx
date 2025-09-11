// Enums for better type safety
enum WearableRarity {
  Common = "Common",
  Uncommon = "Uncommon",
  Rare = "Rare",
  Legendary = "Legendary",
  Mythical = "Mythical",
  Godlike = "Godlike",
}

enum WearableSlot {
  Head = "head",
  Face = "face",
  Eyes = "eyes",
  Body = "body",
  Hands = "hands",
  Hand = "hand",
  LeftHand = "left hand",
  RightHand = "right hand",
  Pet = "pet",
}

// Specific interfaces for wearables
interface WearableItem {
  image: string;
  id: string;
  name: string;
  rarity: WearableRarity;
  stats: string;
  quantity: string;
  slot: WearableSlot;
}

interface ConsumableItem {
  image: string;
  id: string;
  name: string;
  stats: string;
  quantity: string;
}

interface WearableTable {
  tableName: string;
  tableCaption: string;
  tableData: {
    headers: string[];
    data: (string | WearableItem | ConsumableItem)[][];
  };
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

// Helper functions to reduce duplication
function createWearableImage(src: string, alt: string, title: string): string {
  return `<img src="${src}" alt="${alt}" title="${title}"/>`;
}

function createForgeWearableImage(
  src: string,
  alt: string,
  title: string
): string {
  return `<img style="object-fit:contain" src="${src}" alt="${alt}" title="${title}"/>`;
}

function createWearableEntry(
  id: string,
  name: string,
  rarity: WearableRarity,
  stats: string,
  quantity: string,
  slot: WearableSlot,
  useForgeStyle: boolean = false
): string[] {
  const altText = `aavegotchi ${name}`;
  const imagePath = `/wearables/${id}.svg`;
  const imageFunc = useForgeStyle
    ? createForgeWearableImage
    : createWearableImage;

  return [
    imageFunc(imagePath, altText, name),
    id,
    name,
    rarity,
    stats,
    quantity,
    slot,
  ];
}

function createConsumableEntry(
  id: string,
  name: string,
  stats: string,
  quantity: string
): string[] {
  const altText = `aavegotchi ${name}`;
  const imagePath = `/wearables/${id}.svg`;

  return [
    createWearableImage(imagePath, altText, name),
    id,
    name,
    stats,
    quantity,
  ];
}

// Constants for common headers
const WEARABLE_HEADERS = [
  "Image",
  "ID",
  "Name",
  "Rarity",
  "Stats",
  "Quantity",
  "Slot",
];
const CONSUMABLE_HEADERS = ["Image", "ID", "Name", "Stats", "Quantity"];
const BRS_HEADERS = ["Rarity Type", "Quantity", "BRS Bonus"];
const VOTING_POWER_HEADERS = ["Rarity Type", "Voting Power"];

// Factory function for creating tables
function createWearableTable(
  tableName: string,
  tableCaption: string,
  data: string[][],
  headers: string[] = WEARABLE_HEADERS
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
  // Link-Themed Wearables
  createWearableTable("linkWearablesTable", "Link-Themed Wearables", [
    createWearableEntry(
      "1",
      "Camo Hat",
      WearableRarity.Common,
      "AGG +1",
      "1000",
      WearableSlot.Head
    ),
    createWearableEntry(
      "2",
      "Camo Pants",
      WearableRarity.Common,
      "AGG +1",
      "1000",
      WearableSlot.Body
    ),
    createWearableEntry(
      "3",
      "MK2 Grenade",
      WearableRarity.Common,
      "AGG +1",
      "1000",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "4",
      "Snow Camo Hat",
      WearableRarity.Uncommon,
      "AGG +1, SPK +1",
      "500",
      WearableSlot.Head
    ),
    createWearableEntry(
      "5",
      "Snow Camo Pants",
      WearableRarity.Uncommon,
      "AGG +1, SPK +1",
      "500",
      WearableSlot.Body
    ),
    createWearableEntry(
      "6",
      "M67 Grenade",
      WearableRarity.Uncommon,
      "AGG +2",
      "500",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "7",
      "Marine Cap",
      WearableRarity.Rare,
      "AGG +2, BRN +1",
      "300",
      WearableSlot.Head
    ),
    createWearableEntry(
      "8",
      "Marine Jacket",
      WearableRarity.Rare,
      "AGG +2, BRN +1",
      "300",
      WearableSlot.Body
    ),
    createWearableEntry(
      "9",
      "Walkie Talkie",
      WearableRarity.Rare,
      "NRG +1, SPK +1, BRN +1",
      "300",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "10",
      "Link White Hat",
      WearableRarity.Legendary,
      "AGG +2, BRN +2",
      "150",
      WearableSlot.Head
    ),
    createWearableEntry(
      "11",
      "Link Mess Dress",
      WearableRarity.Legendary,
      "AGG +2, BRN +2",
      "150",
      WearableSlot.Body
    ),
    createWearableEntry(
      "12",
      "Link Bubbly",
      WearableRarity.Legendary,
      "NRG +2, BRN -2",
      "150",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "13",
      "Sergey Beard",
      WearableRarity.Mythical,
      "NRG -1, AGG +1, BRN +3",
      "50",
      WearableSlot.Face
    ),
    createWearableEntry(
      "14",
      "Sergey Eyes",
      WearableRarity.Mythical,
      "SPK +1, BRN +4",
      "50",
      WearableSlot.Eyes
    ),
    createWearableEntry(
      "15",
      "Red Plaid",
      WearableRarity.Mythical,
      "NRG +3, AGG +2",
      "50",
      WearableSlot.Body
    ),
    createWearableEntry(
      "16",
      "Blue Plaid",
      WearableRarity.Godlike,
      "NRG -4, AGG -2",
      "5",
      WearableSlot.Body
    ),
    createWearableEntry(
      "17",
      "LINK Cube",
      WearableRarity.Godlike,
      "BRN +6",
      "5",
      WearableSlot.Hands
    ),
  ]),

  // Aave-Themed Wearables
  createWearableTable("aaveWearablesTable", "Aave-Themed Wearables", [
    createWearableEntry(
      "18",
      "Aave Hero Mask",
      WearableRarity.Common,
      "SPK +1",
      "1000",
      WearableSlot.Face
    ),
    createWearableEntry(
      "19",
      "Aave Hero Shirt",
      WearableRarity.Common,
      "SPK +1",
      "1000",
      WearableSlot.Body
    ),
    createWearableEntry(
      "20",
      "Aave Plush Toy",
      WearableRarity.Common,
      "SPK +1",
      "1000",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "21",
      "Captain Aave Mask",
      WearableRarity.Uncommon,
      "NRG +1, SPK +1",
      "500",
      WearableSlot.Head
    ),
    createWearableEntry(
      "22",
      "Captain Aave Suit",
      WearableRarity.Uncommon,
      "NRG +1, SPK +1",
      "500",
      WearableSlot.Body
    ),
    createWearableEntry(
      "23",
      "Captain Aave Shield",
      WearableRarity.Uncommon,
      "NRG +2",
      "500",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "24",
      "Thaave Helmet",
      WearableRarity.Rare,
      "NRG +2, SPK +1",
      "250",
      WearableSlot.Head
    ),
    createWearableEntry(
      "25",
      "Thaave Suit",
      WearableRarity.Rare,
      "NRG +2, SPK +1",
      "250",
      WearableSlot.Body
    ),
    createWearableEntry(
      "26",
      "Thaave Hammer",
      WearableRarity.Rare,
      "NRG +3, BRN +1",
      "250",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "27",
      "Marc Hair",
      WearableRarity.Legendary,
      "NRG +2, AGG +2",
      "100",
      WearableSlot.Head
    ),
    createWearableEntry(
      "28",
      "Marc Outfit",
      WearableRarity.Legendary,
      "NRG +2, AGG +2",
      "100",
      WearableSlot.Body
    ),
    createWearableEntry(
      "29",
      "REKT Sign",
      WearableRarity.Legendary,
      "BRN -4",
      "100",
      WearableSlot.RightHand
    ),
    createWearableEntry(
      "30",
      "Jordan Hair",
      WearableRarity.Mythical,
      "AGG -2, SPK +3",
      "50",
      WearableSlot.Head
    ),
    createWearableEntry(
      "31",
      "Jordan Suit",
      WearableRarity.Mythical,
      "NRG -3, SPK +1, BRN +1",
      "50",
      WearableSlot.Body
    ),
    createWearableEntry(
      "32",
      "Aave Flag",
      WearableRarity.Mythical,
      "AGG -2, SPK +3",
      "50",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "33",
      "Stani Hair",
      WearableRarity.Godlike,
      "AGG -3, BRN +3",
      "5",
      WearableSlot.Head
    ),
    createWearableEntry(
      "34",
      "Stani Lifejacket",
      WearableRarity.Godlike,
      "NRG +3, AGG -3",
      "5",
      WearableSlot.Body
    ),
    createWearableEntry(
      "35",
      "Aave Boat",
      WearableRarity.Godlike,
      "AGG -6",
      "5",
      WearableSlot.Pet
    ),
  ]),

  // Ethereum-Themed Wearables
  createWearableTable("ethereumWearablesTable", "Ethereum-Themed Wearables", [
    createWearableEntry(
      "36",
      "ETH Logo Glasses",
      WearableRarity.Common,
      "BRN -1",
      "1000",
      WearableSlot.Eyes
    ),
    createWearableEntry(
      "37",
      "ETH TShirt",
      WearableRarity.Common,
      "BRN -1",
      "1000",
      WearableSlot.Body
    ),
    createWearableEntry(
      "38",
      "32 ETH Coin",
      WearableRarity.Common,
      "BRN -1",
      "1000",
      WearableSlot.RightHand
    ),
    createWearableEntry(
      "39",
      "Foxy Mask",
      WearableRarity.Uncommon,
      "AGG -2",
      "500",
      WearableSlot.Head
    ),
    createWearableEntry(
      "40",
      "Foxy Tail",
      WearableRarity.Uncommon,
      "AGG -1, SPK -1",
      "500",
      WearableSlot.Pet
    ),
    createWearableEntry(
      "41",
      "Trezor Wallet",
      WearableRarity.Uncommon,
      "NRG -1, AGG -1",
      "500",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "42",
      "Eagle Mask",
      WearableRarity.Rare,
      "NRG +1, SPK +2",
      "250",
      WearableSlot.Head
    ),
    createWearableEntry(
      "43",
      "Nogara Armor",
      WearableRarity.Rare,
      "NRG +2, SPK +1",
      "250",
      WearableSlot.Body
    ),
    createWearableEntry(
      "44",
      "DAO Egg",
      WearableRarity.Rare,
      "NRG +1, BRN +2",
      "250",
      WearableSlot.RightHand
    ),
    createWearableEntry(
      "45",
      "Ape Mask",
      WearableRarity.Legendary,
      "AGG +1, BRN -3",
      "100",
      WearableSlot.Head
    ),
    createWearableEntry(
      "46",
      "Half Rekt Shirt",
      WearableRarity.Legendary,
      "NRG +1, AGG +1, BRN -2",
      "100",
      WearableSlot.Body
    ),
    createWearableEntry(
      "47",
      "Waifu Pillow",
      WearableRarity.Legendary,
      "BRN -4",
      "100",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "48",
      "Xibot Mohawk",
      WearableRarity.Mythical,
      "NRG +5",
      "50",
      WearableSlot.Head
    ),
    createWearableEntry(
      "49",
      "Coderdan Shades",
      WearableRarity.Mythical,
      "AGG +5",
      "50",
      WearableSlot.Eyes
    ),
    createWearableEntry(
      "50",
      "GldnXross Robe",
      WearableRarity.Mythical,
      "SPK +5",
      "50",
      WearableSlot.Body
    ),
    createWearableEntry(
      "51",
      "Mudgen Diamond",
      WearableRarity.Mythical,
      "BRN +5",
      "50",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "52",
      "Galaxy Brain",
      WearableRarity.Godlike,
      "BRN +6",
      "5",
      WearableSlot.Head
    ),
    createWearableEntry(
      "53",
      "All Seeing Eyes",
      WearableRarity.Godlike,
      "NRG -6",
      "5",
      WearableSlot.Eyes
    ),
    createWearableEntry(
      "54",
      "Llamacorn Shirt",
      WearableRarity.Godlike,
      "NRG -3, AGG -3",
      "5",
      WearableSlot.Body
    ),
  ]),

  // Aagent Set Wearables
  createWearableTable("aagentWearablesTable", "Aagent Set Wearables", [
    createWearableEntry(
      "55",
      "Aagent Headset",
      WearableRarity.Rare,
      "AGG +1, SPK +1, BRN +1",
      "308",
      WearableSlot.Face
    ),
    createWearableEntry(
      "56",
      "Aagent Shirt",
      WearableRarity.Rare,
      "NRG -1, AGG +1, SPK +1",
      "308",
      WearableSlot.Body
    ),
    createWearableEntry(
      "57",
      "Aagent Shades",
      WearableRarity.Rare,
      "NRG -1, SPK +2",
      "308",
      WearableSlot.Eyes
    ),
    createWearableEntry(
      "58",
      "Aagent Pistol",
      WearableRarity.Rare,
      "AGG +3",
      "308",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "59",
      "Aagent Fedora Hat",
      WearableRarity.Rare,
      "NRG -2, SPK +1",
      "308",
      WearableSlot.Head
    ),
  ]),

  // Wizard Set Wearables
  createWearableTable("wizardWearablesTable", "Wizard Set Wearables", [
    createWearableEntry(
      "60",
      "Common Wizard Hat",
      WearableRarity.Common,
      "BRN +1",
      "1000",
      WearableSlot.Head
    ),
    createWearableEntry(
      "61",
      "Legendary Wizard Hat",
      WearableRarity.Legendary,
      "SPK +2, BRN +2",
      "125",
      WearableSlot.Head
    ),
    createWearableEntry(
      "62",
      "Mythical Wizard Hat",
      WearableRarity.Mythical,
      "SPK +2, BRN +3",
      "50",
      WearableSlot.Head
    ),
    createWearableEntry(
      "63",
      "Godlike Wizard Hat",
      WearableRarity.Godlike,
      "SPK +2, BRN +4",
      "5",
      WearableSlot.Head
    ),
    createWearableEntry(
      "64",
      "Common Wizard Staff",
      WearableRarity.Common,
      "NRG +1",
      "1000",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "65",
      "Legendary Wizard Staff",
      WearableRarity.Legendary,
      "NRG +2, BRN +2",
      "125",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "66",
      "Wizard Visor",
      WearableRarity.Common,
      "NRG +1",
      "1000",
      WearableSlot.Eyes
    ),
  ]),

  // Farmer Set Wearables
  createWearableTable("farmerWearablesTable", "Farmer Set Wearables", [
    createWearableEntry(
      "67",
      "Straw Hat",
      WearableRarity.Common,
      "NRG -1",
      "1000",
      WearableSlot.Head
    ),
    createWearableEntry(
      "68",
      "Farmer Jeans",
      WearableRarity.Common,
      "BRN -1",
      "1000",
      WearableSlot.Body
    ),
    createWearableEntry(
      "69",
      "Pitchfork",
      WearableRarity.Common,
      "AGG +1",
      "1000",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "70",
      "Handsaw",
      WearableRarity.Mythical,
      "AGG +3, BRN -2",
      "50",
      WearableSlot.Hands
    ),
  ]),

  // Santa Set Wearables
  createWearableTable("santaWearablesTable", "Santa Set Wearables", [
    createWearableEntry(
      "71",
      "Red Santa Hat",
      WearableRarity.Rare,
      "AGG -1, SPK -2",
      "250",
      WearableSlot.Head
    ),
  ]),

  // OKex Set Wearables
  createWearableTable("okexWearablesTable", "OKex Set Wearables", [
    createWearableEntry(
      "72",
      "Jaay Hairpiece",
      WearableRarity.Mythical,
      "BRN -5",
      "30",
      WearableSlot.Head
    ),
    createWearableEntry(
      "73",
      "Jaay Glasses",
      WearableRarity.Mythical,
      "NRG -2, AGG -2, BRN -1",
      "10",
      WearableSlot.Eyes
    ),
    createWearableEntry(
      "74",
      "Jaay Suit",
      WearableRarity.Mythical,
      "NRG -2, BRN -3",
      "20",
      WearableSlot.Body
    ),
    createWearableEntry(
      "75",
      "OKex Sign",
      WearableRarity.Mythical,
      "NRG -5",
      "40",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "76",
      "Big GHST Token",
      WearableRarity.Common,
      "BRN +1",
      "1000",
      WearableSlot.RightHand
    ),
  ]),

  // Skater Set Wearables
  createWearableTable("skaterWearablesTable", "Skater Set Wearables", [
    createWearableEntry(
      "77",
      "Bitcoin Beanie",
      WearableRarity.Uncommon,
      "NRG +1, BRN -1",
      "500",
      WearableSlot.Head
    ),
    createWearableEntry(
      "78",
      "Black Jeans",
      WearableRarity.Uncommon,
      "AGG +1, BRN -1",
      "500",
      WearableSlot.Body
    ),
    createWearableEntry(
      "79",
      "Skateboard",
      WearableRarity.Rare,
      "NRG +1, BRN -2",
      "250",
      WearableSlot.Hands
    ),
  ]),

  // Sushi Set Wearables
  createWearableTable("sushiWearablesTable", "Sushi Set Wearables", [
    createWearableEntry(
      "80",
      "Sushi Bandana",
      WearableRarity.Rare,
      "NRG -1, AGG +2",
      "250",
      WearableSlot.Head
    ),
    createWearableEntry(
      "81",
      "Sushi Coat",
      WearableRarity.Rare,
      "NRG -2, AGG +1",
      "250",
      WearableSlot.Body
    ),
    createWearableEntry(
      "82",
      "Sushi Piece",
      WearableRarity.Legendary,
      "SPK -4",
      "125",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "83",
      "Sushi Knife",
      WearableRarity.Rare,
      "AGG +3",
      "250",
      WearableSlot.Hands
    ),
  ]),

  // Gentleman Set Wearables
  createWearableTable("gentlemanWearablesTable", "Gentleman Set Wearables", [
    createWearableEntry(
      "84",
      "Gentleman Hat",
      WearableRarity.Legendary,
      "NRG -1, AGG -3",
      "125",
      WearableSlot.Head
    ),
    createWearableEntry(
      "85",
      "Gentleman Coat",
      WearableRarity.Legendary,
      "NRG -1, AGG -3",
      "125",
      WearableSlot.Body
    ),
    createWearableEntry(
      "86",
      "Monocle",
      WearableRarity.Mythical,
      "AGG -2, BRN +3",
      "50",
      WearableSlot.Eyes
    ),
  ]),

  // Miner Set Wearables
  createWearableTable("minerWearablesTable", "Miner Set Wearables", [
    createWearableEntry(
      "87",
      "Miner Helmet",
      WearableRarity.Uncommon,
      "NRG +1, BRN -1",
      "500",
      WearableSlot.Head
    ),
    createWearableEntry(
      "88",
      "Miner Jeans",
      WearableRarity.Uncommon,
      "NRG +1, BRN -1",
      "500",
      WearableSlot.Body
    ),
    createWearableEntry(
      "89",
      "Pickaxe",
      WearableRarity.Rare,
      "NRG +1, AGG +2",
      "250",
      WearableSlot.Hands
    ),
  ]),

  // Pajamas Set Wearables
  createWearableTable("pajamasWearablesTable", "Pajamas Set Wearables", [
    createWearableEntry(
      "90",
      "Pajama Hat",
      WearableRarity.Common,
      "SPK -1",
      "1000",
      WearableSlot.Head
    ),
    createWearableEntry(
      "91",
      "Pajama Shirt",
      WearableRarity.Uncommon,
      "AGG -1, SPK -1",
      "500",
      WearableSlot.Body
    ),
    createWearableEntry(
      "92",
      "Bedtime Milk",
      WearableRarity.Rare,
      "AGG -2, SPK -1",
      "250",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "93",
      "Fluffy Pillow",
      WearableRarity.Legendary,
      "SPK -4",
      "125",
      WearableSlot.Hands
    ),
  ]),

  // Runner Set Wearables
  createWearableTable("runnerWearablesTable", "Runner Set Wearables", [
    createWearableEntry(
      "94",
      "Sweatband",
      WearableRarity.Uncommon,
      "NRG +2",
      "500",
      WearableSlot.Head
    ),
    createWearableEntry(
      "95",
      "Track Shorts",
      WearableRarity.Uncommon,
      "NRG +1, BRN -1",
      "500",
      WearableSlot.Body
    ),
    createWearableEntry(
      "96",
      "Water bottle",
      WearableRarity.Uncommon,
      "NRG +2",
      "500",
      WearableSlot.Hands
    ),
  ]),

  // Lady Set Wearables
  createWearableTable("ladyWearablesTable", "Lady Set Wearables", [
    createWearableEntry(
      "97",
      "Pillbox Hat",
      WearableRarity.Legendary,
      "NRG +1, AGG -1, SPK -2",
      "125",
      WearableSlot.Head
    ),
    createWearableEntry(
      "98",
      "Day Dress",
      WearableRarity.Legendary,
      "NRG +1, AGG -1, SPK -2",
      "125",
      WearableSlot.Body
    ),
    createWearableEntry(
      "99",
      "Parasol",
      WearableRarity.Mythical,
      "NRG +1, AGG -1, SPK -3",
      "50",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "100",
      "Clutch",
      WearableRarity.Legendary,
      "NRG +1, AGG -2, SPK -2",
      "125",
      WearableSlot.Hands
    ),
  ]),

  // Witchy Set Wearables
  createWearableTable("witchyWearablesTable", "Witchy Set Wearables", [
    createWearableEntry(
      "101",
      "Witchy Hat",
      WearableRarity.Legendary,
      "AGG +1, SPK +3",
      "125",
      WearableSlot.Head
    ),
    createWearableEntry(
      "102",
      "Witchy Cloak",
      WearableRarity.Legendary,
      "AGG +1, SPK +3",
      "125",
      WearableSlot.Body
    ),
    createWearableEntry(
      "103",
      "Witchy Wand",
      WearableRarity.Mythical,
      "AGG +2, SPK +2, BRN +1",
      "50",
      WearableSlot.Hands
    ),
  ]),

  // Portal Set Wearables
  createWearableTable("portalWearablesTable", "Portal Set Wearables", [
    createWearableEntry(
      "104",
      "Portal Mage Helmet",
      WearableRarity.Legendary,
      "NRG +2, AGG +1, SPK +1",
      "125",
      WearableSlot.Head
    ),
    createWearableEntry(
      "105",
      "Portal Mage Armor",
      WearableRarity.Legendary,
      "NRG +1, AGG +2, SPK +2",
      "125",
      WearableSlot.Body
    ),
    createWearableEntry(
      "106",
      "Portal Mage Axe",
      WearableRarity.Legendary,
      "AGG +4",
      "125",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "107",
      "Portal Mage Black Axe",
      WearableRarity.Godlike,
      "AGG +6",
      "5",
      WearableSlot.Hands
    ),
  ]),

  // Rasta Set Wearables
  createWearableTable("rastaWearablesTable", "Rasta Set Wearables", [
    createWearableEntry(
      "108",
      "Rasta Hat",
      WearableRarity.Uncommon,
      "NRG -1, AGG -1",
      "500",
      WearableSlot.Head
    ),
    createWearableEntry(
      "109",
      "Rasta Shirt",
      WearableRarity.Uncommon,
      "NRG -1, AGG -1",
      "500",
      WearableSlot.Body
    ),
    createWearableEntry(
      "110",
      "Jamaican Flag",
      WearableRarity.Rare,
      "NRG -1, AGG -2",
      "250",
      WearableSlot.Hands
    ),
  ]),

  // Hazmat Set Wearables
  createWearableTable("hazmatWearablesTable", "Hazmat Set Wearables", [
    createWearableEntry(
      "111",
      "Hazmat Hood",
      WearableRarity.Legendary,
      "NRG +1, AGG -1, SPK +2",
      "125",
      WearableSlot.Head
    ),
    createWearableEntry(
      "112",
      "Hazmat Suit",
      WearableRarity.Legendary,
      "NRG +2, AGG -1, SPK +1",
      "125",
      WearableSlot.Body
    ),
    createWearableEntry(
      "113",
      "Uranium Rod",
      WearableRarity.Godlike,
      "NRG +6",
      "5",
      WearableSlot.Hands
    ),
  ]),

  // Vacation Set Wearables
  createWearableTable("vacationWearablesTable", "Vacation Set Wearables", [
    createWearableEntry(
      "114",
      "Red Hawaiian Shirt",
      WearableRarity.Mythical,
      "NRG -3, AGG -2",
      "50",
      WearableSlot.Body
    ),
    createWearableEntry(
      "115",
      "Blue Hawaiian Shirt",
      WearableRarity.Legendary,
      "NRG -2, AGG -2",
      "125",
      WearableSlot.Body
    ),
    createWearableEntry(
      "116",
      "Coconut",
      WearableRarity.Rare,
      "SPK -3",
      "250",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "117",
      "Cool Shades",
      WearableRarity.Common,
      "BRN -1",
      "1000",
      WearableSlot.Eyes
    ),
  ]),

  // Independent Drink Items
  createWearableTable("independentDrinksTable", "Independent Drink Items", [
    createWearableEntry(
      "118",
      "Water Jug",
      WearableRarity.Legendary,
      "NRG +2, BRN +2",
      "125",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "119",
      "Baby Bottle",
      WearableRarity.Legendary,
      "AGG -1, SPK -3",
      "125",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "120",
      "Martini",
      WearableRarity.Legendary,
      "NRG -1, BRN -3",
      "125",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "121",
      "Wine",
      WearableRarity.Rare,
      "BRN -3",
      "250",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "122",
      "Milkshake",
      WearableRarity.Mythical,
      "SPK -5",
      "50",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "123",
      "Apple Juice",
      WearableRarity.Uncommon,
      "SPK -2",
      "500",
      WearableSlot.Hands
    ),
  ]),

  // Independent Head Items
  createWearableTable("independentHeadTable", "Independent Head Items", [
    createWearableEntry(
      "124",
      "Beer Helmet",
      WearableRarity.Mythical,
      "BRN -5",
      "50",
      WearableSlot.Head
    ),
  ]),

  // Independent Body Items
  createWearableTable("independentBodyTable", "Independent Body Items", [
    createWearableEntry(
      "125",
      "Track Suit",
      WearableRarity.Legendary,
      "NRG +2, AGG +2",
      "125",
      WearableSlot.Body
    ),
  ]),

  // Consumables
  createWearableTable(
    "consumablesTable",
    "Consumables",
    [
      createConsumableEntry("126", "Kinship Potion", "+2 to Kinship", "500"),
      createConsumableEntry(
        "127",
        "Greater Kinship Potion",
        "+10 to Kinship",
        "250"
      ),
      createConsumableEntry("128", "XP Potion", "+20 to XP", "500"),
      createConsumableEntry("129", "Greater XP Potion", "+50 to XP", "250"),
    ],
    CONSUMABLE_HEADERS
  ),

  // Layer 2-Themed Wearables
  createWearableTable("layer2WearablesTable", "Layer 2-Themed Wearables", [
    createWearableEntry(
      "130",
      "Fireball",
      WearableRarity.Common,
      "AGG +1",
      "1000",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "131",
      "Dragon Horns",
      WearableRarity.Uncommon,
      "AGG +1, SPK +1",
      "500",
      WearableSlot.Head
    ),
    createWearableEntry(
      "132",
      "Dragon Wings",
      WearableRarity.Rare,
      "AGG +2, SPK +1",
      "250",
      WearableSlot.Body
    ),
    createWearableEntry(
      "133",
      "Pointy Horns",
      WearableRarity.Legendary,
      "AGG +2, SPK +2",
      "100",
      WearableSlot.Head
    ),
    createWearableEntry(
      "134",
      "L2 Sign",
      WearableRarity.Common,
      "BRN +1",
      "1000",
      WearableSlot.RightHand
    ),
    createWearableEntry(
      "135",
      "Polygon Shirt",
      WearableRarity.Uncommon,
      "BRN +2",
      "500",
      WearableSlot.Body
    ),
    createWearableEntry(
      "136",
      "Polygon Cap",
      WearableRarity.Rare,
      "AGG -1, BRN +2",
      "250",
      WearableSlot.Head
    ),
    createWearableEntry(
      "137",
      "Vote Sign",
      WearableRarity.Common,
      "AGG -1",
      "1000",
      WearableSlot.RightHand
    ),
    createWearableEntry(
      "138",
      "Snapshot Shirt",
      WearableRarity.Uncommon,
      "AGG -2",
      "500",
      WearableSlot.Body
    ),
    createWearableEntry(
      "139",
      "Snapshot Cap",
      WearableRarity.Rare,
      "AGG -3",
      "250",
      WearableSlot.Head
    ),
    createWearableEntry(
      "140",
      "Elf Ears",
      WearableRarity.Common,
      "SPK -1",
      "1000",
      WearableSlot.Face
    ),
    createWearableEntry(
      "141",
      "Gemstone Ring",
      WearableRarity.Uncommon,
      "SPK -1, BRN +1",
      "500",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "142",
      "Princess Tiara",
      WearableRarity.Rare,
      "SPK -2, BRN +1",
      "250",
      WearableSlot.Head
    ),
    createWearableEntry(
      "143",
      "Gold Necklace",
      WearableRarity.Legendary,
      "NRG +2, AGG +2",
      "100",
      WearableSlot.Body
    ),
    createWearableEntry(
      "144",
      "Princess Hair",
      WearableRarity.Mythical,
      "SPK -3, BRN +2",
      "50",
      WearableSlot.Head
    ),
    createWearableEntry(
      "145",
      "Godli Locks",
      WearableRarity.Godlike,
      "SPK -4, BRN +2",
      "5",
      WearableSlot.Head
    ),
    createWearableEntry(
      "146",
      "Imperial Moustache",
      WearableRarity.Common,
      "NRG -1",
      "1000",
      WearableSlot.Face
    ),
    createWearableEntry(
      "147",
      "Tiny Crown",
      WearableRarity.Uncommon,
      "NRG -1, BRN -1",
      "500",
      WearableSlot.Head
    ),
    createWearableEntry(
      "148",
      "Royal Scepter",
      WearableRarity.Rare,
      "NRG -2, BRN -1",
      "250",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "149",
      "Royal Crown",
      WearableRarity.Legendary,
      "NRG -2, BRN -2",
      "100",
      WearableSlot.Head
    ),
    createWearableEntry(
      "150",
      "Royal Robes",
      WearableRarity.Mythical,
      "NRG -3, BRN -2",
      "50",
      WearableSlot.Body
    ),
    createWearableEntry(
      "151",
      "Common Rofl",
      WearableRarity.Common,
      "BRN -1",
      "1000",
      WearableSlot.Pet
    ),
    createWearableEntry(
      "152",
      "Uncommon Rofl",
      WearableRarity.Uncommon,
      "NRG -1, BRN -1",
      "500",
      WearableSlot.Pet
    ),
    createWearableEntry(
      "153",
      "Rare Rofl",
      WearableRarity.Rare,
      "NRG -1, BRN -2",
      "250",
      WearableSlot.Pet
    ),
    createWearableEntry(
      "154",
      "Legendary Rofl",
      WearableRarity.Legendary,
      "NRG -2, BRN -2",
      "100",
      WearableSlot.Pet
    ),
    createWearableEntry(
      "155",
      "Mythical Rofl",
      WearableRarity.Mythical,
      "NRG -2, BRN -3",
      "50",
      WearableSlot.Pet
    ),
    createWearableEntry(
      "156",
      "Royal Rofl",
      WearableRarity.Godlike,
      "NRG -3, BRN -3",
      "5",
      WearableSlot.Pet
    ),
    createWearableEntry(
      "157",
      "Lil Pump Goatee",
      WearableRarity.Uncommon,
      "BRS +2, NRG +1, AGG +1",
      "500",
      WearableSlot.Face
    ),
    createWearableEntry(
      "158",
      "Lil Pump Drank",
      WearableRarity.Rare,
      "BRS +5, NRG +1, AGG +2",
      "250",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "159",
      "Lil Pump Shades",
      WearableRarity.Legendary,
      "BRS +10, AGG +3, SPK +1",
      "100",
      WearableSlot.Eyes
    ),
    createWearableEntry(
      "160",
      "Lil Pump Threads",
      WearableRarity.Mythical,
      "BRS +20, NRG +5",
      "50",
      WearableSlot.Body
    ),
    createWearableEntry(
      "161",
      "Lil Pump Dreads",
      WearableRarity.Godlike,
      "BRS +50, NRG +4, AGG +2",
      "5",
      WearableSlot.Head
    ),
  ]),

  // Auction Wearables
  createWearableTable("auctionWearablesTable", "Auction Wearables", [
    createWearableEntry(
      "199",
      "Steampunk Goggles",
      WearableRarity.Rare,
      "SPK +3",
      "250",
      WearableSlot.Eyes
    ),
    createWearableEntry(
      "200",
      "Steampunk Trousers",
      WearableRarity.Uncommon,
      "SPK +2",
      "500",
      WearableSlot.Body
    ),
    createWearableEntry(
      "201",
      "Mechanical Claw",
      WearableRarity.Legendary,
      "AGG +2, SPK +2",
      "100",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "202",
      "VR Headset",
      WearableRarity.Mythical,
      "NRG +2, AGG +3",
      "50",
      WearableSlot.Eyes
    ),
    createWearableEntry(
      "203",
      "Gamer Jacket",
      WearableRarity.Rare,
      "NRG +1, AGG +2",
      "250",
      WearableSlot.Body
    ),
    createWearableEntry(
      "204",
      "Game Controller",
      WearableRarity.Uncommon,
      "NRG +1, AGG +1",
      "500",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "205",
      "Gotchi Mug",
      WearableRarity.Common,
      "NRG +1",
      "1000",
      WearableSlot.Hands
    ),
  ]),

  // Aavegotchi x Venly Wearables
  createWearableTable("venlyWearablesTable", "Aavegotchi x Venly Wearables", [
    createWearableEntry(
      "206",
      "Biker Helmet",
      WearableRarity.Rare,
      "AGG +2, BRN +1",
      "250",
      WearableSlot.Head
    ),
    createWearableEntry(
      "207",
      "Biker Jacket",
      WearableRarity.Uncommon,
      "AGG +2",
      "500",
      WearableSlot.Body
    ),
    createWearableEntry(
      "208",
      "Aviators",
      WearableRarity.Uncommon,
      "SPK +2",
      "500",
      WearableSlot.Eyes
    ),
    createWearableEntry(
      "209",
      "Horseshoe Mustache",
      WearableRarity.Legendary,
      "NRG -2, SPK +2",
      "100",
      WearableSlot.Face
    ),
  ]),

  // Haunt 2 Wearables
  createWearableTable("haunt2Table", "Haunt 2 Wearables", [
    createWearableEntry(
      "211",
      "Guy Fawkes Mask",
      WearableRarity.Common,
      "SPK +1",
      "1000",
      WearableSlot.Head
    ),
    createWearableEntry(
      "212",
      "1337 Laptop",
      WearableRarity.Mythical,
      "NRG -2, BRN +3",
      "50",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "213",
      "H4xx0r Shirt",
      WearableRarity.Legendary,
      "NRG -4",
      "100",
      WearableSlot.Body
    ),
    createWearableEntry(
      "214",
      "Matrix Eyes",
      WearableRarity.Godlike,
      "NRG -3, AGG -3",
      "5",
      WearableSlot.Eyes
    ),
    createWearableEntry(
      "215",
      "Cyborg Eye",
      WearableRarity.Legendary,
      "NRG +2, AGG +2",
      "100",
      WearableSlot.Eyes
    ),
    createWearableEntry(
      "216",
      "Rainbow Vomit",
      WearableRarity.Mythical,
      "SPK -5",
      "50",
      WearableSlot.Face
    ),
    createWearableEntry(
      "217",
      "Energy Gun",
      WearableRarity.Mythical,
      "NRG +2, AGG +3",
      "50",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "218",
      "Mohawk",
      WearableRarity.Uncommon,
      "NRG +1, AGG +1",
      "500",
      WearableSlot.Head
    ),
    createWearableEntry(
      "219",
      "Mutton Chops",
      WearableRarity.Rare,
      "SPK +2, BRN -1",
      "250",
      WearableSlot.Face
    ),
    createWearableEntry(
      "220",
      "Punk Shirt",
      WearableRarity.Legendary,
      "NRG +1, AGG +3",
      "100",
      WearableSlot.Body
    ),
    createWearableEntry(
      "221",
      "Pirate Hat",
      WearableRarity.Common,
      "BRN -1",
      "1000",
      WearableSlot.Head
    ),
    createWearableEntry(
      "222",
      "Pirate Coat",
      WearableRarity.Uncommon,
      "SPK +1, BRN -1",
      "500",
      WearableSlot.Body
    ),
    createWearableEntry(
      "223",
      "Hook Hand",
      WearableRarity.Uncommon,
      "SPK +1, BRN -1",
      "500",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "224",
      "Pirate Patch",
      WearableRarity.Rare,
      "SPK +2, BRN -1",
      "250",
      WearableSlot.Eyes
    ),
    createWearableEntry(
      "225",
      "Basketball",
      WearableRarity.Common,
      "NRG +1",
      "1000",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "226",
      "Red Headband",
      WearableRarity.Rare,
      "NRG +2, AGG -1",
      "250",
      WearableSlot.Head
    ),
    createWearableEntry(
      "227",
      "23 Jersey",
      WearableRarity.Rare,
      "NRG +1, AGG -2",
      "250",
      WearableSlot.Body
    ),
    createWearableEntry(
      "228",
      "10 Gallon Hat",
      WearableRarity.Common,
      "BRN +1",
      "1000",
      WearableSlot.Head
    ),
    createWearableEntry(
      "229",
      "Lasso",
      WearableRarity.Uncommon,
      "AGG +1, BRN +1",
      "500",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "230",
      "Wraangler Jeans",
      WearableRarity.Common,
      "AGG +1",
      "1000",
      WearableSlot.Body
    ),
    createWearableEntry(
      "231",
      "Comfy Poncho",
      WearableRarity.Uncommon,
      "NRG -2",
      "500",
      WearableSlot.Body
    ),
    createWearableEntry(
      "232",
      "Poncho Hoodie",
      WearableRarity.Common,
      "NRG -1",
      "1000",
      WearableSlot.Head
    ),
    createWearableEntry(
      "233",
      "Uncommon Cacti",
      WearableRarity.Uncommon,
      "SPK -1, BRN +1",
      "500",
      WearableSlot.Pet
    ),
    createWearableEntry(
      "234",
      "Shaaman Poncho",
      WearableRarity.Mythical,
      "NRG -5",
      "50",
      WearableSlot.Body
    ),
    createWearableEntry(
      "235",
      "Shaaman Hoodie",
      WearableRarity.Legendary,
      "NRG -4",
      "100",
      WearableSlot.Head
    ),
    createWearableEntry(
      "236",
      "Blue Cacti",
      WearableRarity.Rare,
      "SPK -1, BRN +2",
      "250",
      WearableSlot.Pet
    ),
    createWearableEntry(
      "237",
      "Mythical Cacti",
      WearableRarity.Mythical,
      "SPK -2, BRN +3",
      "50",
      WearableSlot.Pet
    ),
    createWearableEntry(
      "238",
      "Godlike Cacti",
      WearableRarity.Godlike,
      "SPK -3, BRN +3",
      "5",
      WearableSlot.Pet
    ),
    createWearableEntry(
      "239",
      "Wagie Cap",
      WearableRarity.Uncommon,
      "AGG -2",
      "500",
      WearableSlot.Head
    ),
    createWearableEntry(
      "240",
      "Headphones",
      WearableRarity.Uncommon,
      "AGG -2",
      "500",
      WearableSlot.Face
    ),
    createWearableEntry(
      "241",
      "WGMI Shirt",
      WearableRarity.Rare,
      "AGG -3",
      "250",
      WearableSlot.Body
    ),
    createWearableEntry(
      "242",
      "Yellow Manbun",
      WearableRarity.Legendary,
      "NRG -2, AGG -2",
      "100",
      WearableSlot.Head
    ),
    createWearableEntry(
      "243",
      "Tinted Shades",
      WearableRarity.Rare,
      "AGG -3",
      "250",
      WearableSlot.Eyes
    ),
    createWearableEntry(
      "244",
      "V-Neck Shirt",
      WearableRarity.Rare,
      "AGG -3",
      "250",
      WearableSlot.Body
    ),
  ]),

  // Partnerships Wearables
  createWearableTable("partnershipsTable", "Partnerships Wearables", [
    createWearableEntry(
      "245",
      "Gecko Hat",
      WearableRarity.Rare,
      "SPK -3",
      "250",
      WearableSlot.Head
    ),
    createWearableEntry(
      "246",
      "APY Shades",
      WearableRarity.Uncommon,
      "NRG +1, BRN +1",
      "500",
      WearableSlot.Eyes
    ),
    createWearableEntry(
      "247",
      "Up Arrow",
      WearableRarity.Uncommon,
      "NRG +1, BRN +1",
      "500",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "248",
      "Up Only Shirt",
      WearableRarity.Uncommon,
      "NRG +1, BRN +1",
      "500",
      WearableSlot.Body
    ),
    createWearableEntry(
      "249",
      "Gecko Eyes",
      WearableRarity.Rare,
      "SPK -2, BRN -1",
      "250",
      WearableSlot.Eyes
    ),
    createWearableEntry(
      "250",
      "CoinGecko Tee",
      WearableRarity.Rare,
      "SPK -2, BRN -1",
      "250",
      WearableSlot.Body
    ),
    createWearableEntry(
      "251",
      "Candy Jaar",
      WearableRarity.Rare,
      "SPK -1, BRN -2",
      "250",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "252",
      "Aastronaut Helmet",
      WearableRarity.Common,
      "SPK +1",
      "1000",
      WearableSlot.Head
    ),
    createWearableEntry(
      "253",
      "Aastronaut Suit",
      WearableRarity.Common,
      "SPK +1",
      "1000",
      WearableSlot.Body
    ),
    createWearableEntry(
      "254",
      "uGOTCHI Token",
      WearableRarity.Common,
      "SPK +1",
      "1000",
      WearableSlot.RightHand
    ),
    createWearableEntry(
      "255",
      "Space Helmet",
      WearableRarity.Legendary,
      "NRG +2, AGG -2",
      "100",
      WearableSlot.Head
    ),
    createWearableEntry(
      "256",
      "Lil Bubble Space Suit",
      WearableRarity.Legendary,
      "NRG +2, AGG -2",
      "100",
      WearableSlot.Body
    ),
    createWearableEntry(
      "257",
      "Bitcoin Guitar",
      WearableRarity.Legendary,
      "NRG +4",
      "100",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "258",
      "Taoist Robe",
      WearableRarity.Godlike,
      "NRG -3, BRN +3",
      "5",
      WearableSlot.Body
    ),
    createWearableEntry(
      "259",
      "Bushy Eyebrows",
      WearableRarity.Godlike,
      "NRG -3, BRN +3",
      "5",
      WearableSlot.Eyes
    ),
    createWearableEntry(
      "260",
      "Beard of Wisdom",
      WearableRarity.Godlike,
      "NRG -2, BRN +4",
      "5",
      WearableSlot.Face
    ),
    createWearableEntry(
      "261",
      "Aantenna Bot",
      WearableRarity.Mythical,
      "AGG -2, BRN +3",
      "50",
      WearableSlot.Pet
    ),
    createWearableEntry(
      "262",
      "Radar Eyes",
      WearableRarity.Mythical,
      "AGG -2, BRN +3",
      "50",
      WearableSlot.Eyes
    ),
    createWearableEntry(
      "263",
      "Signal Headset",
      WearableRarity.Mythical,
      "AGG -2, BRN +3",
      "50",
      WearableSlot.Face
    ),
  ]),
  // DeFi RPG Wearables
  createWearableTable("DeFiRPGTable", "DeFi RPG Wearables", [
    createWearableEntry(
      "292",
      "Brunette Ponytail",
      WearableRarity.Common,
      "AGG -1",
      "1000",
      WearableSlot.Head
    ),
    createWearableEntry(
      "293",
      "Leather Tunic",
      WearableRarity.Common,
      "NRG -1",
      "1000",
      WearableSlot.Body
    ),
    createWearableEntry(
      "294",
      "Bow and Arrow",
      WearableRarity.Common,
      "AGG -1",
      "1000",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "295",
      "Forked Beard",
      WearableRarity.Common,
      "AGG +1",
      "1000",
      WearableSlot.Face
    ),
    createWearableEntry(
      "296",
      "Double-sided Axe",
      WearableRarity.Uncommon,
      "AGG +1, BRN -1",
      "500",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "297",
      "Animal Skins",
      WearableRarity.Uncommon,
      "AGG +2",
      "500",
      WearableSlot.Body
    ),
    createWearableEntry(
      "298",
      "Horned Helmet",
      WearableRarity.Common,
      "BRN -1",
      "1000",
      WearableSlot.Head
    ),
    createWearableEntry(
      "299",
      "Longbow",
      WearableRarity.Uncommon,
      "AGG -1, BRN +1",
      "500",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "300",
      "Feathered Cap",
      WearableRarity.Uncommon,
      "NRG -1, SPK -1",
      "500",
      WearableSlot.Head
    ),
    createWearableEntry(
      "301",
      "Alluring Eyes",
      WearableRarity.Rare,
      "AGG -2, BRN +1",
      "250",
      WearableSlot.Eyes
    ),
    createWearableEntry(
      "302",
      "Geisha Headpiece",
      WearableRarity.Rare,
      "NRG -2, AGG -1",
      "250",
      WearableSlot.Head
    ),
    createWearableEntry(
      "303",
      "Kimono",
      WearableRarity.Rare,
      "NRG -1, AGG -2",
      "250",
      WearableSlot.Body
    ),
    createWearableEntry(
      "304",
      "Paper Fan",
      WearableRarity.Rare,
      "AGG -3",
      "250",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "305",
      "Sus Butterfly",
      WearableRarity.Legendary,
      "AGG +4",
      "100",
      WearableSlot.Pet
    ),
    createWearableEntry(
      "306",
      "Flower Studs",
      WearableRarity.Legendary,
      "NRG -2, SPK -2",
      "100",
      WearableSlot.Face
    ),
    createWearableEntry(
      "307",
      "Fairy Wings",
      WearableRarity.Legendary,
      "NRG -2, SPK -2",
      "100",
      WearableSlot.Body
    ),
    createWearableEntry(
      "308",
      "Red Hair",
      WearableRarity.Legendary,
      "NRG -2, SPK -2",
      "100",
      WearableSlot.Head
    ),
    createWearableEntry(
      "309",
      "Citaadel Helm",
      WearableRarity.Mythical,
      "NRG +3, AGG -2",
      "50",
      WearableSlot.Head
    ),
    createWearableEntry(
      "310",
      "Plate Armor",
      WearableRarity.Mythical,
      "NRG +3, AGG -2",
      "50",
      WearableSlot.Body
    ),
    createWearableEntry(
      "311",
      "Spirit Sword",
      WearableRarity.Mythical,
      "NRG +2, AGG -3",
      "50",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "312",
      "Plate Shield",
      WearableRarity.Mythical,
      "AGG -5",
      "50",
      WearableSlot.Hands
    ),
    createWearableEntry(
      "313",
      "Kabuto Helmet",
      WearableRarity.Godlike,
      "AGG +3, SPK +3",
      "5",
      WearableSlot.Head
    ),
    createWearableEntry(
      "314",
      "Yoroi Armor",
      WearableRarity.Godlike,
      "AGG +3, SPK +3",
      "5",
      WearableSlot.Body
    ),
    createWearableEntry(
      "315",
      "Haanzo Katana",
      WearableRarity.Godlike,
      "AGG +2, SPK +4",
      "5",
      WearableSlot.Hands
    ),
  ]),

  // Forge Wearables
  createWearableTable("forgeWearablesTable", "Forge Wearables", [
    createWearableEntry(
      "350",
      "Pixelcraft Tee",
      WearableRarity.Common,
      "NRG +1",
      "1000",
      WearableSlot.Body,
      true
    ),
    createWearableEntry(
      "351",
      "3D Glasses",
      WearableRarity.Common,
      "BRN +1",
      "1000",
      WearableSlot.Eyes,
      true
    ),
    createWearableEntry(
      "352",
      "Pixelcraft Square",
      WearableRarity.Common,
      "SPK -1",
      "1000",
      WearableSlot.Hands,
      true
    ),
    createWearableEntry(
      "353",
      "Nimbus",
      WearableRarity.Common,
      "AGG -1",
      "1000",
      WearableSlot.Pet,
      true
    ),
    createWearableEntry(
      "354",
      "Alchemica Apron",
      WearableRarity.Uncommon,
      "NRG +1, BRN -1",
      "500",
      WearableSlot.Body,
      true
    ),
    createWearableEntry(
      "355",
      "Safety Glasses",
      WearableRarity.Rare,
      "NRG +1, AGG +2",
      "250",
      WearableSlot.Eyes,
      true
    ),
    createWearableEntry(
      "356",
      "Bandage",
      WearableRarity.Uncommon,
      "SPK +1, BRN -1",
      "500",
      WearableSlot.Face,
      true
    ),
    createWearableEntry(
      "357",
      "Nail Gun",
      WearableRarity.Rare,
      "NRG +1, SPK +2",
      "250",
      WearableSlot.Hands,
      true
    ),
    createWearableEntry(
      "358",
      "Flaming Apron",
      WearableRarity.Legendary,
      "NRG -2, AGG -2",
      "100",
      WearableSlot.Body,
      true
    ),
    createWearableEntry(
      "359",
      "Forge Goggles",
      WearableRarity.Legendary,
      "NRG -1, AGG -3",
      "100",
      WearableSlot.Eyes,
      true
    ),
    createWearableEntry(
      "360",
      "Geode Smasher",
      WearableRarity.Legendary,
      "SPK +2, BRN +2",
      "100",
      WearableSlot.Hands,
      true
    ),
    createWearableEntry(
      "361",
      "Geo",
      WearableRarity.Legendary,
      "AGG -2, SPK +2",
      "100",
      WearableSlot.Pet,
      true
    ),
    createWearableEntry(
      "362",
      "FAKE Shirt",
      WearableRarity.Mythical,
      "SPK -4, BRN -1",
      "50",
      WearableSlot.Body,
      true
    ),
    createWearableEntry(
      "363",
      "FAKE Beret",
      WearableRarity.Mythical,
      "NRG -3, BRN -2",
      "50",
      WearableSlot.Head,
      true
    ),
    createWearableEntry(
      "364",
      "Paint Brush",
      WearableRarity.Mythical,
      "NRG -3, SPK -2",
      "50",
      WearableSlot.Hands,
      true
    ),
    createWearableEntry(
      "365",
      "Paint Palette",
      WearableRarity.Mythical,
      "SPK -1, BRN -4",
      "50",
      WearableSlot.Hands,
      true
    ),
    createWearableEntry(
      "366",
      "Heavenly Robes",
      WearableRarity.Godlike,
      "NRG +4, BRN -2",
      "5",
      WearableSlot.Body,
      true
    ),
    createWearableEntry(
      "367",
      "Eyes of Devotion",
      WearableRarity.Godlike,
      "SPK -3, BRN -3",
      "5",
      WearableSlot.Eyes,
      true
    ),
    createWearableEntry(
      "368",
      "Beard of Divinity",
      WearableRarity.Godlike,
      "SPK -3, BRN -3",
      "5",
      WearableSlot.Face,
      true
    ),
    createWearableEntry(
      "369",
      "Staff of Creation",
      WearableRarity.Godlike,
      "SPK -3, BRN -3",
      "5",
      WearableSlot.Hands,
      true
    ),
  ]),

  // Forge Wearables 2
  createWearableTable("forgeWearables2Table", "Forge Wearables 2", [
    createWearableEntry(
      "370",
      "Wavy Hair",
      WearableRarity.Common,
      "NRG +1",
      "1000",
      WearableSlot.Head,
      true
    ),
    createWearableEntry(
      "371",
      "Plastic Earrings",
      WearableRarity.Common,
      "NRG +1",
      "1000",
      WearableSlot.Face,
      true
    ),
    createWearableEntry(
      "372",
      "Party Dress",
      WearableRarity.Common,
      "BRN +1",
      "1000",
      WearableSlot.Body,
      true
    ),
    createWearableEntry(
      "373",
      "Overalls",
      WearableRarity.Uncommon,
      "SPK -2",
      "500",
      WearableSlot.Body,
      true
    ),
    createWearableEntry(
      "374",
      "Lens n Frens Plant",
      WearableRarity.Rare,
      "NRG +2, BRN -1",
      "250",
      WearableSlot.Pet,
      true
    ),
    createWearableEntry(
      "375",
      "GM Seeds",
      WearableRarity.Common,
      "SPK -1",
      "1000",
      WearableSlot.LeftHand,
      true
    ),
    createWearableEntry(
      "376",
      "Lick Brain",
      WearableRarity.Rare,
      "AGG +2, BRN -1",
      "250",
      WearableSlot.Head,
      true
    ),
    createWearableEntry(
      "377",
      "Lick Eyes",
      WearableRarity.Uncommon,
      "SPK -2",
      "500",
      WearableSlot.Eyes,
      true
    ),
    createWearableEntry(
      "378",
      "Lick Tongue",
      WearableRarity.Rare,
      "SPK -3",
      "250",
      WearableSlot.Face,
      true
    ),
    createWearableEntry(
      "379",
      "Lick Tentacle",
      WearableRarity.Rare,
      "NRG -3",
      "250",
      WearableSlot.Hand,
      true
    ),
    createWearableEntry(
      "380",
      "Sebastien Hair",
      WearableRarity.Legendary,
      "NRG +2, SPK -2",
      "100",
      WearableSlot.Head,
      true
    ),
    createWearableEntry(
      "381",
      "Voxel Eyes",
      WearableRarity.Legendary,
      "NRG +1, AGG -3",
      "100",
      WearableSlot.Eyes,
      true
    ),
    createWearableEntry(
      "382",
      "GOAT-ee",
      WearableRarity.Legendary,
      "NRG +1, AGG -3",
      "100",
      WearableSlot.Face,
      true
    ),
    createWearableEntry(
      "383",
      "Sandbox Hoodie",
      WearableRarity.Legendary,
      "NRG +3, AGG -1",
      "100",
      WearableSlot.Body,
      true
    ),
    createWearableEntry(
      "384",
      "Faangs",
      WearableRarity.Mythical,
      "SPK +5",
      "50",
      WearableSlot.Face,
      true
    ),
    createWearableEntry(
      "385",
      "Block Scanners",
      WearableRarity.Godlike,
      "NRG +6",
      "5",
      WearableSlot.Eyes,
      true
    ),
    createWearableEntry(
      "386",
      "Staff of Charming",
      WearableRarity.Godlike,
      "NRG -4, BRN -2",
      "5",
      WearableSlot.Hands,
      true
    ),
    createWearableEntry(
      "387",
      "Roflnoggin",
      WearableRarity.Godlike,
      "BRN -6",
      "5",
      WearableSlot.Head,
      true
    ),
  ]),

  // Gotchigang Wearables
  createWearableTable("gotchigangWearablesTable", "Gotchigang Wearables", [
    createWearableEntry(
      "404",
      "Granny Glasses",
      WearableRarity.Common,
      "NRG -1",
      "1000",
      WearableSlot.Eyes,
      true
    ),
    createWearableEntry(
      "405",
      "Freckles",
      WearableRarity.Common,
      "AGG -1",
      "1000",
      WearableSlot.Face,
      true
    ),
    createWearableEntry(
      "406",
      "Common Stohn",
      WearableRarity.Common,
      "BRN +1",
      "1000",
      WearableSlot.Pet,
      true
    ),
    createWearableEntry(
      "407",
      "Based Shades",
      WearableRarity.Uncommon,
      "AGG +2",
      "500",
      WearableSlot.Eyes,
      true
    ),
    createWearableEntry(
      "408",
      "Rasta Glasses",
      WearableRarity.Uncommon,
      "AGG -2",
      "500",
      WearableSlot.Eyes,
      true
    ),
    createWearableEntry(
      "409",
      "Braces",
      WearableRarity.Uncommon,
      "NRG -1, AGG +1",
      "500",
      WearableSlot.Face,
      true
    ),
    createWearableEntry(
      "410",
      "Uncommon Stohn",
      WearableRarity.Uncommon,
      "SPK +1, BRN +1",
      "500",
      WearableSlot.Pet,
      true
    ),
    createWearableEntry(
      "411",
      "Aloha Flower",
      WearableRarity.Rare,
      "NRG -3",
      "250",
      WearableSlot.Face,
      true
    ),
    createWearableEntry(
      "412",
      "Baable Gum",
      WearableRarity.Rare,
      "NRG +3",
      "250",
      WearableSlot.Face,
      true
    ),
    createWearableEntry(
      "413",
      "Rare Stohn",
      WearableRarity.Rare,
      "SPK +2, BRN +1",
      "250",
      WearableSlot.Pet,
      true
    ),
    createWearableEntry(
      "414",
      "Cheap Mask",
      WearableRarity.Legendary,
      "NRG +2, AGG +2",
      "100",
      WearableSlot.Face,
      true
    ),
    createWearableEntry(
      "415",
      "Wild Fungi",
      WearableRarity.Legendary,
      "AGG -2, SPK -2",
      "100",
      WearableSlot.Pet,
      true
    ),
    createWearableEntry(
      "416",
      "Kawaii Mouth",
      WearableRarity.Mythical,
      "BRN -5",
      "50",
      WearableSlot.Face,
      true
    ),
    createWearableEntry(
      "417",
      "Baby Licky",
      WearableRarity.Mythical,
      "NRG +2, BRN -3",
      "50",
      WearableSlot.Pet,
      true
    ),
  ]),

  createWearableTable("baseWearablesTable", "Base Wearables", [
    createWearableEntry(
      "418",
      "Based Shirt",
      WearableRarity.Common,
      "AGG -1",
      "1000",
      WearableSlot.Body,
      true
    ),
    createWearableEntry(
      "419",
      "Base App",
      WearableRarity.Rare,
      "BRN +3",
      "250",
      WearableSlot.Hands,
      true
    ),
    createWearableEntry(
      "420",
      "Jesse Pollak Hair",
      WearableRarity.Legendary,
      "NRG +2, AGG -2",
      "100",
      WearableSlot.Head,
      true
    ),
  ]),

  // Wearable Rarity and BRS Bonus
  createWearableTable(
    "wearablesBRStable",
    "Wearable Rarity and BRS Bonus",
    [
      ["Common", "1000", "+1"],
      ["Uncommon", "500", "+2"],
      ["Rare", "250-308", "+5"],
      ["Legendary", "100-150", "+10"],
      ["Mythical", "10-50", "+20"],
      ["Godlike", "5", "+50"],
    ],
    BRS_HEADERS
  ),

  // Wearables Voting Power
  createWearableTable(
    "wearablesVotingPower",
    "Wearables Voting Power",
    [
      ["Common", "5 GHST"],
      ["Uncommon", "10 GHST"],
      ["Rare", "100 GHST"],
      ["Legendary", "300 GHST"],
      ["Mythical", "2000 GHST"],
      ["Godlike", "10000 GHST"],
    ],
    VOTING_POWER_HEADERS
  ),
];
