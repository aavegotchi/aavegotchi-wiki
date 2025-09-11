// Enums for better type safety
enum WearableRarity {
  Common = "common",
  Uncommon = "uncommon",
  Rare = "rare",
  Legendary = "legendary",
  Mythical = "mythical",
  Godlike = "godlike",
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
function createWearableImage(
  tokenId: string,
  name: string,
  rarity: WearableRarity,
  useForgeStyle: boolean = false
): string {
  const imagePath = `/wearables/${tokenId}.svg`;
  const altText = `aavegotchi ${name}`;
  const className = rarity;
  const style = useForgeStyle ? ' style="object-fit:contain"' : "";

  return `<img class="${className}"${style} src="${imagePath}" alt="${altText}" title="${name}" />`;
}

function createSetEntry(
  setName: string,
  items: Array<{
    tokenId: string;
    name: string;
    rarity: WearableRarity;
    useForgeStyle?: boolean;
  }>,
  setBonuses: string
): string[] {
  const itemImages = items.map((item) =>
    createWearableImage(
      item.tokenId,
      item.name,
      item.rarity,
      item.useForgeStyle || false
    )
  );

  // Pad with "-" to ensure we have exactly 5 item slots
  while (itemImages.length < 5) {
    itemImages.push("-");
  }

  return [setName, ...itemImages.slice(0, 5), setBonuses];
}

// Constants for headers
const SETS_HEADERS = [
  "Set",
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Set Bonus",
];

// Factory function for creating the table
function createSetsTable(
  tableName: string,
  tableCaption: string,
  data: string[][],
  headers: string[] = SETS_HEADERS
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
  createSetsTable("sets", "Sets", [
    createSetEntry(
      "Infantry",
      [
        { tokenId: "1", name: "Camo Hat", rarity: WearableRarity.Common },
        { tokenId: "2", name: "Camo Pants", rarity: WearableRarity.Common },
        { tokenId: "3", name: "MK2 Grenade", rarity: WearableRarity.Common },
      ],
      "BRS +1, AGG +1"
    ),
    createSetEntry(
      "Trooper",
      [
        {
          tokenId: "4",
          name: "Snow Camo Hat",
          rarity: WearableRarity.Uncommon,
        },
        {
          tokenId: "5",
          name: "Snow Camo Pants",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "6", name: "M67 Grenade", rarity: WearableRarity.Uncommon },
      ],
      "BRS +2, AGG +1"
    ),
    createSetEntry(
      "Sergeant",
      [
        { tokenId: "7", name: "Marine Cap", rarity: WearableRarity.Rare },
        { tokenId: "8", name: "Marine Jacket", rarity: WearableRarity.Rare },
        { tokenId: "9", name: "Walkie Talkie", rarity: WearableRarity.Rare },
      ],
      "BRS +3, AGG +2"
    ),
    createSetEntry(
      "Link Marine",
      [
        {
          tokenId: "10",
          name: "Link White Hat",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "11",
          name: "Link Mess Dress",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "12",
          name: "Link Bubbly",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +4, AGG +2, BRN +4"
    ),
    createSetEntry(
      "Mythical Sergey",
      [
        {
          tokenId: "13",
          name: "Sergey Beard",
          rarity: WearableRarity.Mythical,
        },
        { tokenId: "14", name: "Sergey Eyes", rarity: WearableRarity.Mythical },
        { tokenId: "15", name: "Red Plaid", rarity: WearableRarity.Mythical },
      ],
      "BRS +5, AGG +3"
    ),
    createSetEntry(
      "Godlike Sergey",
      [
        {
          tokenId: "13",
          name: "Sergey Beard",
          rarity: WearableRarity.Mythical,
        },
        { tokenId: "14", name: "Sergey Eyes", rarity: WearableRarity.Mythical },
        { tokenId: "16", name: "Blue Plaid", rarity: WearableRarity.Godlike },
      ],
      "BRS +6, NRG -3"
    ),
    createSetEntry(
      "Apex Sergey",
      [
        {
          tokenId: "13",
          name: "Sergey Beard",
          rarity: WearableRarity.Mythical,
        },
        { tokenId: "14", name: "Sergey Eyes", rarity: WearableRarity.Mythical },
        { tokenId: "16", name: "Blue Plaid", rarity: WearableRarity.Godlike },
        { tokenId: "17", name: "Link Cube", rarity: WearableRarity.Godlike },
      ],
      "BRS +6, NRG -4"
    ),
    createSetEntry(
      "Aave Hero",
      [
        {
          tokenId: "18",
          name: "Aave Hero Mask",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "19",
          name: "Aave Hero Shirt",
          rarity: WearableRarity.Common,
        },
        { tokenId: "20", name: "Aave Plush", rarity: WearableRarity.Common },
      ],
      "BRS +1, SPK +1"
    ),
    createSetEntry(
      "Captain Aave",
      [
        {
          tokenId: "21",
          name: "Captain Aave Mask",
          rarity: WearableRarity.Uncommon,
        },
        {
          tokenId: "22",
          name: "Captain Aave Suit",
          rarity: WearableRarity.Uncommon,
        },
        {
          tokenId: "23",
          name: "Captain Aave Shield",
          rarity: WearableRarity.Uncommon,
        },
      ],
      "BRS +2, SPK +1"
    ),
    createSetEntry(
      "Thaave",
      [
        { tokenId: "24", name: "Thaave Helmet", rarity: WearableRarity.Rare },
        { tokenId: "25", name: "Thaave Suit", rarity: WearableRarity.Rare },
        { tokenId: "26", name: "Thaave Hammer", rarity: WearableRarity.Rare },
      ],
      "BRS +3, NRG +2"
    ),
    createSetEntry(
      "Marc",
      [
        { tokenId: "27", name: "Marc Hair", rarity: WearableRarity.Legendary },
        {
          tokenId: "28",
          name: "Marc Outfit",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "29", name: "REKT Sign", rarity: WearableRarity.Legendary },
      ],
      "BRS +4, NRG +2"
    ),
    createSetEntry(
      "Jordan",
      [
        { tokenId: "30", name: "Jordan Hair", rarity: WearableRarity.Mythical },
        { tokenId: "31", name: "Jordan Suit", rarity: WearableRarity.Mythical },
        { tokenId: "32", name: "Aave Flag", rarity: WearableRarity.Mythical },
      ],
      "BRS +5, SPK +3"
    ),
    createSetEntry(
      "Godlike Stani",
      [
        { tokenId: "33", name: "Stani Hair", rarity: WearableRarity.Godlike },
        { tokenId: "34", name: "Stani Vest", rarity: WearableRarity.Godlike },
        { tokenId: "35", name: "Aave Boat", rarity: WearableRarity.Godlike },
      ],
      "BRS +6, AGG -3"
    ),
    createSetEntry(
      "Apex Stani",
      [
        { tokenId: "32", name: "Aave Flag", rarity: WearableRarity.Mythical },
        { tokenId: "33", name: "Stani Hair", rarity: WearableRarity.Godlike },
        { tokenId: "34", name: "Stani Vest", rarity: WearableRarity.Godlike },
        { tokenId: "35", name: "Aave Boat", rarity: WearableRarity.Godlike },
      ],
      "BRS +6, NRG +1, AGG -3"
    ),
    createSetEntry(
      "ETH Maxi",
      [
        {
          tokenId: "36",
          name: "ETH Logo Glasses",
          rarity: WearableRarity.Common,
        },
        { tokenId: "37", name: "ETH Tshirt", rarity: WearableRarity.Common },
        { tokenId: "38", name: "32 ETH Coin", rarity: WearableRarity.Common },
      ],
      "BRS +1, BRN -1"
    ),
    createSetEntry(
      "Foxy Meta",
      [
        { tokenId: "39", name: "Foxy Mask", rarity: WearableRarity.Uncommon },
        { tokenId: "40", name: "Foxy Tail", rarity: WearableRarity.Uncommon },
        {
          tokenId: "41",
          name: "Trezor Wallet",
          rarity: WearableRarity.Uncommon,
        },
      ],
      "BRS +2, AGG -1"
    ),
    createSetEntry(
      "Nogara the Eagle",
      [
        { tokenId: "42", name: "Eagle Mask", rarity: WearableRarity.Rare },
        { tokenId: "43", name: "Eagle Armor", rarity: WearableRarity.Rare },
        { tokenId: "44", name: "DAO Egg", rarity: WearableRarity.Rare },
      ],
      "BRS +3, NRG +2"
    ),
    createSetEntry(
      "DeFi Degen",
      [
        { tokenId: "45", name: "Ape Mask", rarity: WearableRarity.Legendary },
        {
          tokenId: "46",
          name: "Halfrekt Shirt",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "47",
          name: "Waifu Pillow",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +4, BRN -2"
    ),
    createSetEntry(
      "DAO Summoner",
      [
        {
          tokenId: "48",
          name: "Xibot Mohawk",
          rarity: WearableRarity.Mythical,
        },
        {
          tokenId: "49",
          name: "Coderdan Shades",
          rarity: WearableRarity.Mythical,
        },
        {
          tokenId: "50",
          name: "GldnXross Robe",
          rarity: WearableRarity.Mythical,
        },
        {
          tokenId: "51",
          name: "Mudgen Diamond",
          rarity: WearableRarity.Mythical,
        },
      ],
      "BRS +5, BRN +3"
    ),
    createSetEntry(
      "Vitalik Visionary",
      [
        { tokenId: "52", name: "Galaxy Brain", rarity: WearableRarity.Godlike },
        {
          tokenId: "53",
          name: "All-Seeing Eyes",
          rarity: WearableRarity.Godlike,
        },
        {
          tokenId: "54",
          name: "Llamacorn Shirt",
          rarity: WearableRarity.Godlike,
        },
      ],
      "BRS +6, NRG -3"
    ),
    createSetEntry(
      "Apex Vitalik Visionary",
      [
        {
          tokenId: "51",
          name: "Mudgen Diamond",
          rarity: WearableRarity.Mythical,
        },
        { tokenId: "52", name: "Galaxy Brain", rarity: WearableRarity.Godlike },
        {
          tokenId: "53",
          name: "All-Seeing Eyes",
          rarity: WearableRarity.Godlike,
        },
        {
          tokenId: "54",
          name: "Llamacorn Shirt",
          rarity: WearableRarity.Godlike,
        },
      ],
      "BRS +7, NRG -3, BRN +1"
    ),
    createSetEntry(
      "Super Aagent",
      [
        { tokenId: "55", name: "Aagent Headset", rarity: WearableRarity.Rare },
        { tokenId: "56", name: "Aagent Shirt", rarity: WearableRarity.Rare },
        { tokenId: "57", name: "Aagent Shades", rarity: WearableRarity.Rare },
        { tokenId: "58", name: "Aagent Pistol", rarity: WearableRarity.Rare },
        {
          tokenId: "59",
          name: "Aagent Fedora Hat",
          rarity: WearableRarity.Rare,
        },
      ],
      "BRS +4, NRG -1, SPK +2"
    ),
    createSetEntry(
      "Aagent",
      [
        { tokenId: "55", name: "Aagent Headset", rarity: WearableRarity.Rare },
        { tokenId: "56", name: "Aagent Shirt", rarity: WearableRarity.Rare },
        { tokenId: "57", name: "Aagent Shades", rarity: WearableRarity.Rare },
      ],
      "BRS +3, NRG -1, SPK +2"
    ),
    createSetEntry(
      "Aagent",
      [
        { tokenId: "55", name: "Aagent Headset", rarity: WearableRarity.Rare },
        { tokenId: "56", name: "Aagent Shirt", rarity: WearableRarity.Rare },
        { tokenId: "57", name: "Aagent Shades", rarity: WearableRarity.Rare },
        { tokenId: "58", name: "Aagent Pistol", rarity: WearableRarity.Rare },
      ],
      "BRS +3, NRG -1, SPK +2"
    ),
    createSetEntry(
      "Wizard",
      [
        {
          tokenId: "60",
          name: "Common Wizard Hat",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "64",
          name: "Common Wizard Staff",
          rarity: WearableRarity.Common,
        },
        { tokenId: "66", name: "Wizard Visor", rarity: WearableRarity.Common },
      ],
      "BRS +1, NRG +1"
    ),
    createSetEntry(
      "Wizard",
      [
        {
          tokenId: "61",
          name: "Legendary Wizard Hat",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "64",
          name: "Common Wizard Staff",
          rarity: WearableRarity.Common,
        },
        { tokenId: "66", name: "Wizard Visor", rarity: WearableRarity.Common },
      ],
      "BRS +1, NRG +1"
    ),
    createSetEntry(
      "Wizard",
      [
        {
          tokenId: "62",
          name: "Mythical Wizard Hat",
          rarity: WearableRarity.Mythical,
        },
        {
          tokenId: "64",
          name: "Common Wizard Staff",
          rarity: WearableRarity.Common,
        },
        { tokenId: "66", name: "Wizard Visor", rarity: WearableRarity.Common },
      ],
      "BRS +1, NRG +1"
    ),
    createSetEntry(
      "Wizard",
      [
        {
          tokenId: "63",
          name: "Godlike Wizard Hat",
          rarity: WearableRarity.Godlike,
        },
        {
          tokenId: "64",
          name: "Common Wizard Staff",
          rarity: WearableRarity.Common,
        },
        { tokenId: "66", name: "Wizard Visor", rarity: WearableRarity.Common },
      ],
      "BRS +1, NRG +1"
    ),
    createSetEntry(
      "Wizard",
      [
        {
          tokenId: "60",
          name: "Common Wizard Hat",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "65",
          name: "Legendary Wizard Staff",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "66", name: "Wizard Visor", rarity: WearableRarity.Common },
      ],
      "BRS +1, NRG +1"
    ),
    createSetEntry(
      "Legendary Wizard",
      [
        {
          tokenId: "61",
          name: "Legendary Wizard Hat",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "65",
          name: "Legendary Wizard Staff",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "66", name: "Wizard Visor", rarity: WearableRarity.Common },
      ],
      "BRS +4, NRG +1, BRN +1"
    ),
    createSetEntry(
      "Mythical Wizard",
      [
        {
          tokenId: "62",
          name: "Mythical Wizard Hat",
          rarity: WearableRarity.Mythical,
        },
        {
          tokenId: "65",
          name: "Legendary Wizard Staff",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "66", name: "Wizard Visor", rarity: WearableRarity.Common },
      ],
      "BRS +5, NRG +1, BRN +2"
    ),
    createSetEntry(
      "Godlike Wizard",
      [
        {
          tokenId: "63",
          name: "Godlike Wizard Hat",
          rarity: WearableRarity.Godlike,
        },
        {
          tokenId: "65",
          name: "Legendary Wizard Staff",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "66", name: "Wizard Visor", rarity: WearableRarity.Common },
      ],
      "BRS +6, NRG +1, BRN +2"
    ),
    createSetEntry(
      "Farmer",
      [
        { tokenId: "67", name: "Straw Hat", rarity: WearableRarity.Common },
        { tokenId: "68", name: "Farmer Jeans", rarity: WearableRarity.Common },
        { tokenId: "69", name: "Pitchfork", rarity: WearableRarity.Common },
      ],
      "BRS +1, NRG -1"
    ),
    createSetEntry(
      "Mythical Farmer",
      [
        { tokenId: "67", name: "Straw Hat", rarity: WearableRarity.Common },
        { tokenId: "68", name: "Farmer Jeans", rarity: WearableRarity.Common },
        { tokenId: "70", name: "Handsaw", rarity: WearableRarity.Mythical },
      ],
      "BRS +5, NRG -2, BRN -1"
    ),
    createSetEntry(
      "OKex Jaay",
      [
        {
          tokenId: "72",
          name: "Jaay Hairpiece",
          rarity: WearableRarity.Common,
        },
        { tokenId: "73", name: "Jaay Glasses", rarity: WearableRarity.Common },
        { tokenId: "74", name: "Jaay Suit", rarity: WearableRarity.Common },
      ],
      "BRS +5, NRG -1, BRN -2"
    ),
    createSetEntry(
      "OKex Jaay Hao",
      [
        {
          tokenId: "72",
          name: "Jaay Hairpiece",
          rarity: WearableRarity.Common,
        },
        { tokenId: "73", name: "Jaay Glasses", rarity: WearableRarity.Common },
        { tokenId: "74", name: "Jaay Suit", rarity: WearableRarity.Common },
        { tokenId: "75", name: "OKex Sign", rarity: WearableRarity.Common },
      ],
      "BRS +5, NRG -1, BRN -2"
    ),
    createSetEntry(
      "Skater",
      [
        {
          tokenId: "77",
          name: "Bitcoin Beanie",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "78", name: "Black Jeans", rarity: WearableRarity.Uncommon },
        { tokenId: "79", name: "Skateboard", rarity: WearableRarity.Rare },
      ],
      "BRS +2, BRN -1"
    ),
    createSetEntry(
      "Sushi Chef",
      [
        { tokenId: "80", name: "Sushi Bandana", rarity: WearableRarity.Rare },
        { tokenId: "81", name: "Sushi Coat", rarity: WearableRarity.Rare },
        {
          tokenId: "82",
          name: "Sushi Piece",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +3, AGG +2"
    ),
    createSetEntry(
      "Sushi Chef",
      [
        { tokenId: "80", name: "Sushi Bandana", rarity: WearableRarity.Rare },
        { tokenId: "81", name: "Sushi Coat", rarity: WearableRarity.Rare },
        { tokenId: "83", name: "Sushi Knife", rarity: WearableRarity.Rare },
      ],
      "BRS +3, AGG +2"
    ),
    createSetEntry(
      "Master Sushi Chef",
      [
        { tokenId: "80", name: "Sushi Bandana", rarity: WearableRarity.Rare },
        { tokenId: "81", name: "Sushi Coat", rarity: WearableRarity.Rare },
        {
          tokenId: "82",
          name: "Sushi Piece",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "83", name: "Sushi Knife", rarity: WearableRarity.Rare },
      ],
      "BRS +4, AGG +2, SPK -1"
    ),
    createSetEntry(
      "Gentleman",
      [
        {
          tokenId: "84",
          name: "Gentleman Hat",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "85",
          name: "Gentleman Coat",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "86", name: "Monocle", rarity: WearableRarity.Mythical },
      ],
      "BRS +4, AGG -2"
    ),
    createSetEntry(
      "Miner",
      [
        {
          tokenId: "87",
          name: "Miner Helmet",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "88", name: "Miner Jeans", rarity: WearableRarity.Uncommon },
        { tokenId: "89", name: "Pickaxe", rarity: WearableRarity.Rare },
      ],
      "BRS +2, NRG +1"
    ),
    createSetEntry(
      "Pajamas",
      [
        { tokenId: "90", name: "Pajama Hat", rarity: WearableRarity.Common },
        {
          tokenId: "91",
          name: "Pajama Shirt",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "92", name: "Bedtime Milk", rarity: WearableRarity.Rare },
      ],
      "BRS +3, SPK -2"
    ),
    createSetEntry(
      "Pajamas",
      [
        { tokenId: "90", name: "Pajama Hat", rarity: WearableRarity.Common },
        {
          tokenId: "91",
          name: "Pajama Shirt",
          rarity: WearableRarity.Uncommon,
        },
        {
          tokenId: "93",
          name: "Fluffy Pillow",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +3, SPK -2"
    ),
    createSetEntry(
      "Full Pajamas",
      [
        { tokenId: "90", name: "Pajama Hat", rarity: WearableRarity.Common },
        {
          tokenId: "91",
          name: "Pajama Shirt",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "92", name: "Bedtime Milk", rarity: WearableRarity.Rare },
        {
          tokenId: "93",
          name: "Fluffy Pillow",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +4, SPK -3"
    ),
    createSetEntry(
      "Runner",
      [
        { tokenId: "94", name: "Sweatband", rarity: WearableRarity.Uncommon },
        {
          tokenId: "95",
          name: "Track Shorts",
          rarity: WearableRarity.Uncommon,
        },
        {
          tokenId: "96",
          name: "Water bottle",
          rarity: WearableRarity.Uncommon,
        },
      ],
      "BRS +2, NRG +1"
    ),
    createSetEntry(
      "Runner",
      [
        { tokenId: "94", name: "Sweatband", rarity: WearableRarity.Uncommon },
        {
          tokenId: "95",
          name: "Track Shorts",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "118", name: "Water Jug", rarity: WearableRarity.Legendary },
      ],
      "BRS +2, NRG +1"
    ),
    createSetEntry(
      "Runner",
      [
        { tokenId: "94", name: "Sweatband", rarity: WearableRarity.Uncommon },
        {
          tokenId: "125",
          name: "Track Suit",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "96",
          name: "Water bottle",
          rarity: WearableRarity.Uncommon,
        },
      ],
      "BRS +2, NRG +1"
    ),
    createSetEntry(
      "Long Distance Runner",
      [
        { tokenId: "94", name: "Sweatband", rarity: WearableRarity.Uncommon },
        {
          tokenId: "125",
          name: "Track Suit",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "118", name: "Water Jug", rarity: WearableRarity.Legendary },
      ],
      "BRS +4, NRG +2"
    ),
    createSetEntry(
      "Lady",
      [
        {
          tokenId: "97",
          name: "Pillbox Hat",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "98", name: "Day Dress", rarity: WearableRarity.Legendary },
        { tokenId: "100", name: "Clutch", rarity: WearableRarity.Legendary },
      ],
      "BRS +4, SPK -2"
    ),
    createSetEntry(
      "Lady",
      [
        {
          tokenId: "97",
          name: "Pillbox Hat",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "98", name: "Day Dress", rarity: WearableRarity.Legendary },
        { tokenId: "99", name: "Parasol", rarity: WearableRarity.Mythical },
      ],
      "BRS +4, SPK -2"
    ),
    createSetEntry(
      "Socialite",
      [
        {
          tokenId: "97",
          name: "Pillbox Hat",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "98", name: "Day Dress", rarity: WearableRarity.Legendary },
        { tokenId: "99", name: "Parasol", rarity: WearableRarity.Mythical },
        { tokenId: "100", name: "Clutch", rarity: WearableRarity.Legendary },
      ],
      "BRS +5, NRG +2, SPK -1"
    ),
    createSetEntry(
      "Witchy",
      [
        {
          tokenId: "101",
          name: "Witchy Hat",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "102",
          name: "Witchy Cloak",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "103",
          name: "Witchy Wand",
          rarity: WearableRarity.Mythical,
        },
      ],
      "BRS +5, SPK +3"
    ),
    createSetEntry(
      "Portal Mage",
      [
        {
          tokenId: "104",
          name: "Portal Mage Helmet",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "105",
          name: "Portal Mage Armor",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "106",
          name: "Portal Mage Axe",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +4, AGG +2"
    ),
    createSetEntry(
      "Supreme Portal Mage",
      [
        {
          tokenId: "104",
          name: "Portal Mage Helmet",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "105",
          name: "Portal Mage Armor",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "107",
          name: "Portal Mage Black Axe",
          rarity: WearableRarity.Godlike,
        },
      ],
      "BRS +6, AGG +3"
    ),
    createSetEntry(
      "Rastafarian",
      [
        { tokenId: "108", name: "Rasta Hat", rarity: WearableRarity.Uncommon },
        {
          tokenId: "109",
          name: "Rasta Shirt",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "110", name: "Jamaican Flag", rarity: WearableRarity.Rare },
      ],
      "BRS +3, AGG -2"
    ),
    createSetEntry(
      "Off Duty Hazmat",
      [
        {
          tokenId: "111",
          name: "Hazmat Hood",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "112",
          name: "Hazmat Suit",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "123",
          name: "Apple Juice",
          rarity: WearableRarity.Uncommon,
        },
      ],
      "BRS +4, NRG +2, SPK +2"
    ),
    createSetEntry(
      "On Duty Hazmat",
      [
        {
          tokenId: "111",
          name: "Hazmat Hood",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "112",
          name: "Hazmat Suit",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "113", name: "Uranium Rod", rarity: WearableRarity.Godlike },
      ],
      "BRS +6, NRG +3"
    ),
    createSetEntry(
      "Blue Vacationer",
      [
        {
          tokenId: "115",
          name: "Blue Hawaiian Shirt",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "116", name: "Coconut", rarity: WearableRarity.Rare },
        { tokenId: "117", name: "Cool shades", rarity: WearableRarity.Common },
      ],
      "BRS +4, NRG -2"
    ),
    createSetEntry(
      "Red Vacationer",
      [
        {
          tokenId: "114",
          name: "Red Hawaiian Shirt",
          rarity: WearableRarity.Mythical,
        },
        { tokenId: "116", name: "Coconut", rarity: WearableRarity.Rare },
        { tokenId: "117", name: "Cool shades", rarity: WearableRarity.Common },
      ],
      "BRS +5, NRG -2, SPK -1"
    ),
    createSetEntry(
      "Crypto OG",
      [
        {
          tokenId: "12",
          name: "Link Bubbly",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "19",
          name: "Aave Hero Shirt",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "36",
          name: "ETH Logo Glasses",
          rarity: WearableRarity.Common,
        },
        { tokenId: "40", name: "Foxy Tail", rarity: WearableRarity.Uncommon },
        {
          tokenId: "77",
          name: "Bitcoin Beanie",
          rarity: WearableRarity.Uncommon,
        },
      ],
      "BRS +4, BRN -2"
    ),
    createSetEntry(
      "Rektboi",
      [
        { tokenId: "29", name: "REKT Sign", rarity: WearableRarity.Legendary },
        { tokenId: "45", name: "Ape Mask", rarity: WearableRarity.Legendary },
        {
          tokenId: "46",
          name: "Halfrekt Shirt",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +4, BRN -2"
    ),
    createSetEntry(
      "Man of Culture",
      [
        {
          tokenId: "47",
          name: "Waifu Pillow",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "59",
          name: "Aagent Fedora Hat",
          rarity: WearableRarity.Rare,
        },
        { tokenId: "74", name: "Jaay Suit", rarity: WearableRarity.Common },
      ],
      "BRS +4, BRN -2"
    ),
    createSetEntry(
      "Curve Surfer",
      [
        { tokenId: "66", name: "Wizard Visor", rarity: WearableRarity.Common },
        {
          tokenId: "76",
          name: "Big GHST Token",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "115",
          name: "Blue Hawaiian Shirt",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +4, BRN +2"
    ),
    createSetEntry(
      "PoW Miner",
      [
        { tokenId: "25", name: "Thaave Suit", rarity: WearableRarity.Rare },
        {
          tokenId: "77",
          name: "Bitcoin Beanie",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "89", name: "Pickaxe", rarity: WearableRarity.Rare },
      ],
      "BRS +3, AGG +2"
    ),
    createSetEntry(
      "Toddler",
      [
        { tokenId: "90", name: "Pajama Hat", rarity: WearableRarity.Common },
        {
          tokenId: "91",
          name: "Pajama Shirt",
          rarity: WearableRarity.Uncommon,
        },
        {
          tokenId: "119",
          name: "Baby Bottle",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +4, AGG -2"
    ),
    createSetEntry(
      "FU Money",
      [
        { tokenId: "35", name: "Aave Boat", rarity: WearableRarity.Godlike },
        {
          tokenId: "114",
          name: "Red Hawaiian Shirt",
          rarity: WearableRarity.Mythical,
        },
        { tokenId: "117", name: "Cool shades", rarity: WearableRarity.Common },
        { tokenId: "120", name: "Martini", rarity: WearableRarity.Legendary },
      ],
      "BRS +6, AGG -3"
    ),
    createSetEntry(
      "Farmer Alf",
      [
        {
          tokenId: "13",
          name: "Sergey Beard",
          rarity: WearableRarity.Mythical,
        },
        { tokenId: "67", name: "Straw Hat", rarity: WearableRarity.Common },
        { tokenId: "68", name: "Farmer Jeans", rarity: WearableRarity.Common },
        { tokenId: "69", name: "Pitchfork", rarity: WearableRarity.Common },
      ],
      "BRS +5, NRG -3"
    ),
    createSetEntry(
      "Battle Santa",
      [
        {
          tokenId: "5",
          name: "Snow Camo Pants",
          rarity: WearableRarity.Uncommon,
        },
        {
          tokenId: "13",
          name: "Sergey Beard",
          rarity: WearableRarity.Mythical,
        },
        { tokenId: "71", name: "Red Santa Hat", rarity: WearableRarity.Common },
        {
          tokenId: "106",
          name: "Portal Mage Axe",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +5, AGG +3"
    ),
    createSetEntry(
      "Party Animal",
      [
        {
          tokenId: "109",
          name: "Rasta Shirt",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "40", name: "Foxy Tail", rarity: WearableRarity.Uncommon },
        {
          tokenId: "124",
          name: "Beer Helmet",
          rarity: WearableRarity.Mythical,
        },
      ],
      "BRS +5, BRN -3"
    ),
    createSetEntry(
      "Snapshot Voter",
      [
        { tokenId: "137", name: "Vote Sign", rarity: WearableRarity.Common },
        {
          tokenId: "138",
          name: "Snapshot Shirt",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "139", name: "Snapshot Cap", rarity: WearableRarity.Rare },
      ],
      "BRS +3, AGG -2"
    ),
    createSetEntry(
      "Polygonist",
      [
        { tokenId: "134", name: "L2 Sign", rarity: WearableRarity.Common },
        {
          tokenId: "135",
          name: "Polygon Shirt",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "136", name: "Polygon Cap", rarity: WearableRarity.Rare },
      ],
      "BRS +3, AGG -1, BRN +1"
    ),
    createSetEntry(
      "Quickswap Dragon",
      [
        { tokenId: "130", name: "Fireball", rarity: WearableRarity.Common },
        {
          tokenId: "131",
          name: "Dragon Horns",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "132", name: "Dragon Wings", rarity: WearableRarity.Rare },
      ],
      "BRS +3, AGG +1, SPK +1"
    ),
    createSetEntry(
      "Swappy the Dragon",
      [
        { tokenId: "130", name: "Fireball", rarity: WearableRarity.Common },
        { tokenId: "132", name: "Dragon Wings", rarity: WearableRarity.Rare },
        {
          tokenId: "133",
          name: "Pointy Horns",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +4, AGG +1, SPK +1"
    ),
    createSetEntry(
      "Gotchi Elf",
      [
        { tokenId: "140", name: "Elf Ears", rarity: WearableRarity.Common },
        {
          tokenId: "141",
          name: "Gemstone Ring",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "142", name: "Princess Tiara", rarity: WearableRarity.Rare },
      ],
      "BRS +3, SPK -1, BRN +1"
    ),
    createSetEntry(
      "Gotchi Princess",
      [
        { tokenId: "140", name: "Elf Ears", rarity: WearableRarity.Common },
        {
          tokenId: "141",
          name: "Gemstone Ring",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "142", name: "Princess Tiara", rarity: WearableRarity.Rare },
        {
          tokenId: "143",
          name: "Gold Necklace",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +4, NRG +1, AGG +1"
    ),
    createSetEntry(
      "Gotchi Queen",
      [
        { tokenId: "140", name: "Elf Ears", rarity: WearableRarity.Common },
        {
          tokenId: "141",
          name: "Gemstone Ring",
          rarity: WearableRarity.Uncommon,
        },
        {
          tokenId: "144",
          name: "Princess Hair",
          rarity: WearableRarity.Mythical,
        },
        {
          tokenId: "143",
          name: "Gold Necklace",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +5, SPK -2, BRN +1"
    ),
    createSetEntry(
      "Godli Locks",
      [
        { tokenId: "140", name: "Elf Ears", rarity: WearableRarity.Common },
        {
          tokenId: "141",
          name: "Gemstone Ring",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "145", name: "Godli Locks", rarity: WearableRarity.Godlike },
        {
          tokenId: "143",
          name: "Gold Necklace",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +6, SPK -2, BRN +2"
    ),
    createSetEntry(
      "Gotchi Baron",
      [
        {
          tokenId: "146",
          name: "Imperial Moustache",
          rarity: WearableRarity.Common,
        },
        { tokenId: "147", name: "Tiny Crown", rarity: WearableRarity.Uncommon },
        { tokenId: "148", name: "Royal Scepter", rarity: WearableRarity.Rare },
      ],
      "BRS +3, NRG -1, BRN -1"
    ),
    createSetEntry(
      "Gotchi Lord",
      [
        {
          tokenId: "146",
          name: "Imperial Moustache",
          rarity: WearableRarity.Common,
        },
        { tokenId: "147", name: "Tiny Crown", rarity: WearableRarity.Uncommon },
        { tokenId: "148", name: "Royal Scepter", rarity: WearableRarity.Rare },
        {
          tokenId: "150",
          name: "Royal Robes",
          rarity: WearableRarity.Mythical,
        },
      ],
      "BRS +5, NRG -1, BRN -2"
    ),
    createSetEntry(
      "Gotchi King",
      [
        {
          tokenId: "146",
          name: "Imperial Moustache",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "149",
          name: "Royal Crown",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "148", name: "Royal Scepter", rarity: WearableRarity.Rare },
        {
          tokenId: "150",
          name: "Royal Robes",
          rarity: WearableRarity.Mythical,
        },
      ],
      "BRS +5, NRG -2, BRN -1"
    ),
    createSetEntry(
      "Gotchi Emperor",
      [
        {
          tokenId: "146",
          name: "Imperial Moustache",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "149",
          name: "Royal Crown",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "148", name: "Royal Scepter", rarity: WearableRarity.Rare },
        {
          tokenId: "150",
          name: "Royal Robes",
          rarity: WearableRarity.Mythical,
        },
        {
          tokenId: "156",
          name: "Godlike Rofl",
          rarity: WearableRarity.Godlike,
        },
      ],
      "BRS +6, NRG -2, BRN -2"
    ),
    createSetEntry(
      "Lil Pumpagotchi",
      [
        {
          tokenId: "157",
          name: "Lil Pump Goatee",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "158", name: "Lil Pump Drank", rarity: WearableRarity.Rare },
        {
          tokenId: "159",
          name: "Lil Pump Shades",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "160",
          name: "Lil Pump Threads",
          rarity: WearableRarity.Mythical,
        },
        {
          tokenId: "161",
          name: "Lil Pump Dreads",
          rarity: WearableRarity.Godlike,
        },
      ],
      "BRS +6, NRG +2, AGG +2"
    ),
    createSetEntry(
      "Soundcloud Rapper",
      [
        { tokenId: "108", name: "Rasta Hat", rarity: WearableRarity.Uncommon },
        {
          tokenId: "157",
          name: "Lil Pump Goatee",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "158", name: "Lil Pump Drank", rarity: WearableRarity.Rare },
        {
          tokenId: "159",
          name: "Lil Pump Shades",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "160",
          name: "Lil Pump Threads",
          rarity: WearableRarity.Mythical,
        },
      ],
      "BRS +5, NRG +1, AGG +2"
    ),
    createSetEntry(
      "REALM Tycoon",
      [
        {
          tokenId: "84",
          name: "Gentleman Hat",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "85",
          name: "Gentleman Coat",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "86", name: "Monocle", rarity: WearableRarity.Mythical },
        {
          tokenId: "146",
          name: "Imperial Moustache",
          rarity: WearableRarity.Common,
        },
      ],
      "BRS +4, NRG -1, AGG -1"
    ),
    createSetEntry(
      "Yegres the Dragon",
      [
        { tokenId: "14", name: "Sergey Eyes", rarity: WearableRarity.Mythical },
        {
          tokenId: "131",
          name: "Dragon Horns",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "132", name: "Dragon Wings", rarity: WearableRarity.Rare },
        { tokenId: "44", name: "DAO Egg", rarity: WearableRarity.Rare },
      ],
      "BRS +5, SPK +1, BRN +2"
    ),
    createSetEntry(
      "Vacation Santa",
      [
        { tokenId: "71", name: "Red Santa Hat", rarity: WearableRarity.Common },
        {
          tokenId: "114",
          name: "Red Hawaiian Shirt",
          rarity: WearableRarity.Mythical,
        },
        { tokenId: "120", name: "Martini", rarity: WearableRarity.Legendary },
        { tokenId: "117", name: "Cool shades", rarity: WearableRarity.Common },
      ],
      "BRS +5, NRG -1, AGG -1, SPK -1"
    ),
    createSetEntry(
      "VR Gamer",
      [
        { tokenId: "202", name: "VR Headset", rarity: WearableRarity.Mythical },
        { tokenId: "203", name: "Gamer Jacket", rarity: WearableRarity.Rare },
        {
          tokenId: "204",
          name: "Game Controller",
          rarity: WearableRarity.Uncommon,
        },
      ],
      "BRS +5, NRG +2, AGG +1"
    ),
    createSetEntry(
      "Steampunk",
      [
        {
          tokenId: "199",
          name: "Steampunk Goggles",
          rarity: WearableRarity.Rare,
        },
        {
          tokenId: "200",
          name: "Steampunk Trousers",
          rarity: WearableRarity.Uncommon,
        },
        {
          tokenId: "201",
          name: "Mechanical Claw",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +4, SPK +2"
    ),
    createSetEntry(
      "Casual Gamer",
      [
        { tokenId: "117", name: "Cool shades", rarity: WearableRarity.Common },
        { tokenId: "203", name: "Gamer Jacket", rarity: WearableRarity.Rare },
        {
          tokenId: "204",
          name: "Game Controller",
          rarity: WearableRarity.Uncommon,
        },
      ],
      "BRS +3, NRG +1, AGG +1"
    ),
    createSetEntry(
      "Gentleman Farmer",
      [
        { tokenId: "69", name: "Pitchfork", rarity: WearableRarity.Common },
        {
          tokenId: "146",
          name: "Imperial Moustache",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "200",
          name: "Steampunk Trousers",
          rarity: WearableRarity.Uncommon,
        },
      ],
      "BRS +2, SPK +1"
    ),
    createSetEntry(
      "Cyberpunk",
      [
        { tokenId: "43", name: "Eagle Armor", rarity: WearableRarity.Rare },
        {
          tokenId: "48",
          name: "Xibot Mohawk",
          rarity: WearableRarity.Mythical,
        },
        { tokenId: "202", name: "VR Headset", rarity: WearableRarity.Mythical },
      ],
      "BRS +5, NRG +3"
    ),
    createSetEntry(
      "Steampunk Grenadier",
      [
        { tokenId: "1", name: "Camo Hat", rarity: WearableRarity.Common },
        { tokenId: "2", name: "Camo Pants", rarity: WearableRarity.Common },
        { tokenId: "6", name: "M67 Grenade", rarity: WearableRarity.Uncommon },
        {
          tokenId: "199",
          name: "Steampunk Goggles",
          rarity: WearableRarity.Rare,
        },
      ],
      "BRS +3, SPK +2"
    ),
    createSetEntry(
      "Venly Biker",
      [
        { tokenId: "206", name: "Biker Helmet", rarity: WearableRarity.Rare },
        {
          tokenId: "207",
          name: "Biker Jacket",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "208", name: "Aviators", rarity: WearableRarity.Uncommon },
        {
          tokenId: "209",
          name: "Horsehoe Mustache",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +4, NRG -1, AGG +1"
    ),
    createSetEntry(
      "Hacker Aanon",
      [
        {
          tokenId: "211",
          name: "Guy Fawkes Mask",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "212",
          name: "1337 Laptop",
          rarity: WearableRarity.Mythical,
        },
        {
          tokenId: "213",
          name: "H4xx0r Shirt",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +5, NRG -2, BRN +1"
    ),
    createSetEntry(
      "Shadowy Supercoder",
      [
        {
          tokenId: "212",
          name: "1337 Laptop",
          rarity: WearableRarity.Mythical,
        },
        {
          tokenId: "213",
          name: "H4xx0r Shirt",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "214", name: "Matrix Eyes", rarity: WearableRarity.Godlike },
      ],
      "BRS +6, NRG -2, BRN +1"
    ),
    createSetEntry(
      "Cyborg",
      [
        {
          tokenId: "215",
          name: "Cyborg Eye",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "216",
          name: "Rainbow Vomit",
          rarity: WearableRarity.Mythical,
        },
        { tokenId: "217", name: "Energy Gun", rarity: WearableRarity.Mythical },
      ],
      "BRS +5, AGG +3"
    ),
    createSetEntry(
      "Punk Rocker",
      [
        { tokenId: "218", name: "Mohawk", rarity: WearableRarity.Uncommon },
        { tokenId: "219", name: "Mutton Chops", rarity: WearableRarity.Rare },
        {
          tokenId: "220",
          name: "Punk Shirt",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +4, AGG +2"
    ),
    createSetEntry(
      "Piraate",
      [
        { tokenId: "221", name: "Pirate Hat", rarity: WearableRarity.Common },
        {
          tokenId: "222",
          name: "Pirate Coat",
          rarity: WearableRarity.Uncommon,
        },
        { tokenId: "223", name: "Hook Hand", rarity: WearableRarity.Uncommon },
        { tokenId: "224", name: "Pirate Patch", rarity: WearableRarity.Rare },
      ],
      "BRS +3, BRN -2"
    ),
    createSetEntry(
      "Aair Gotchi",
      [
        { tokenId: "225", name: "Basketball", rarity: WearableRarity.Common },
        { tokenId: "226", name: "Red Headband", rarity: WearableRarity.Rare },
        { tokenId: "227", name: "23 Jersey", rarity: WearableRarity.Rare },
      ],
      "BRS +3, NRG +2"
    ),
    createSetEntry(
      "Wraangler",
      [
        {
          tokenId: "228",
          name: "10 Gallon Hat",
          rarity: WearableRarity.Common,
        },
        { tokenId: "229", name: "Lasso", rarity: WearableRarity.Uncommon },
        {
          tokenId: "230",
          name: "Wraangler Jeans",
          rarity: WearableRarity.Common,
        },
      ],
      "BRS +2, AGG +1"
    ),
    createSetEntry(
      "Ranchero",
      [
        {
          tokenId: "231",
          name: "Comfy Poncho",
          rarity: WearableRarity.Uncommon,
        },
        {
          tokenId: "232",
          name: "Poncho Hoodie",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "233",
          name: "Uncommon Cacti",
          rarity: WearableRarity.Uncommon,
        },
      ],
      "BRS +2, NRG -1"
    ),
    createSetEntry(
      "Ranchero",
      [
        {
          tokenId: "231",
          name: "Comfy Poncho",
          rarity: WearableRarity.Uncommon,
        },
        {
          tokenId: "232",
          name: "Poncho Hoodie",
          rarity: WearableRarity.Common,
        },
        { tokenId: "236", name: "Rare Cacti", rarity: WearableRarity.Rare },
      ],
      "BRS +2, NRG -1"
    ),
    createSetEntry(
      "Ranchero",
      [
        {
          tokenId: "231",
          name: "Comfy Poncho",
          rarity: WearableRarity.Uncommon,
        },
        {
          tokenId: "232",
          name: "Poncho Hoodie",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "237",
          name: "Mythical Cacti",
          rarity: WearableRarity.Mythical,
        },
      ],
      "BRS +2, NRG -1"
    ),
    createSetEntry(
      "Ranchero",
      [
        {
          tokenId: "231",
          name: "Comfy Poncho",
          rarity: WearableRarity.Uncommon,
        },
        {
          tokenId: "232",
          name: "Poncho Hoodie",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "238",
          name: "Godlike Cacti",
          rarity: WearableRarity.Godlike,
        },
      ],
      "BRS +2, NRG -1"
    ),
    createSetEntry(
      "Novice Shaaman",
      [
        {
          tokenId: "233",
          name: "Uncommon Cacti",
          rarity: WearableRarity.Uncommon,
        },
        {
          tokenId: "234",
          name: "Shaaman Poncho",
          rarity: WearableRarity.Mythical,
        },
        {
          tokenId: "235",
          name: "Shaaman Hoodie",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +5, NRG -3"
    ),
    createSetEntry(
      "Shaaman Priest",
      [
        {
          tokenId: "234",
          name: "Shaaman Poncho",
          rarity: WearableRarity.Mythical,
        },
        {
          tokenId: "235",
          name: "Shaaman Hoodie",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "236", name: "Rare Cacti", rarity: WearableRarity.Rare },
      ],
      "BRS +5, NRG -3"
    ),
    createSetEntry(
      "Shaaman Mystic",
      [
        {
          tokenId: "234",
          name: "Shaaman Poncho",
          rarity: WearableRarity.Mythical,
        },
        {
          tokenId: "235",
          name: "Shaaman Hoodie",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "237",
          name: "Mythical Cacti",
          rarity: WearableRarity.Mythical,
        },
      ],
      "BRS +5, NRG -3"
    ),
    createSetEntry(
      "Master Shaaman",
      [
        {
          tokenId: "234",
          name: "Shaaman Poncho",
          rarity: WearableRarity.Mythical,
        },
        {
          tokenId: "235",
          name: "Shaaman Hoodie",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "238",
          name: "Godlike Cacti",
          rarity: WearableRarity.Godlike,
        },
      ],
      "BRS +6, NRG -3"
    ),
    createSetEntry(
      "WGMI Wagie",
      [
        { tokenId: "239", name: "Wagie Cap", rarity: WearableRarity.Uncommon },
        { tokenId: "240", name: "Headphones", rarity: WearableRarity.Uncommon },
        { tokenId: "241", name: "WGMI Shirt", rarity: WearableRarity.Rare },
      ],
      "BRS +3, AGG -2"
    ),
    createSetEntry(
      "YOLO Guy",
      [
        { tokenId: "242", name: "Maan Bun", rarity: WearableRarity.Legendary },
        { tokenId: "243", name: "Tinted Shades", rarity: WearableRarity.Rare },
        { tokenId: "244", name: "V-Neck Shirt", rarity: WearableRarity.Rare },
      ],
      "BRS +4, NRG -1, AGG -1"
    ),
    createSetEntry(
      "Psychonaut",
      [
        {
          tokenId: "234",
          name: "Shaaman Poncho",
          rarity: WearableRarity.Mythical,
        },
        {
          tokenId: "235",
          name: "Shaaman Hoodie",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "238",
          name: "Godlike Cacti",
          rarity: WearableRarity.Godlike,
        },
        {
          tokenId: "53",
          name: "All-Seeing Eyes",
          rarity: WearableRarity.Godlike,
        },
      ],
      "BRS +7, NRG -3, BRN +1"
    ),
    createSetEntry(
      "Tech Bro",
      [
        { tokenId: "242", name: "Maan Bun", rarity: WearableRarity.Legendary },
        { tokenId: "243", name: "Tinted Shades", rarity: WearableRarity.Rare },
        { tokenId: "244", name: "V-Neck Shirt", rarity: WearableRarity.Rare },
        {
          tokenId: "212",
          name: "1337 Laptop",
          rarity: WearableRarity.Mythical,
        },
      ],
      "BRS +5, NRG -2, BRN +1"
    ),
    createSetEntry(
      "Gunslinger",
      [
        {
          tokenId: "231",
          name: "Comfy Poncho",
          rarity: WearableRarity.Uncommon,
        },
        {
          tokenId: "228",
          name: "10 Gallon Hat",
          rarity: WearableRarity.Common,
        },
        { tokenId: "58", name: "Aagent Pistol", rarity: WearableRarity.Rare },
        { tokenId: "58", name: "Aagent Pistol", rarity: WearableRarity.Rare },
      ],
      "BRS +3, AGG +2"
    ),
    createSetEntry(
      "We Are Legion",
      [
        {
          tokenId: "85",
          name: "Gentleman Coat",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "211",
          name: "Guy Fawkes Mask",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "212",
          name: "1337 Laptop",
          rarity: WearableRarity.Mythical,
        },
      ],
      "BRS +5, SPK +3"
    ),
    createSetEntry(
      "Aastronaut",
      [
        {
          tokenId: "252",
          name: "Aastronaut Helmet",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "253",
          name: "Aastronaut Suit",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "254",
          name: "uGOTCHI Token",
          rarity: WearableRarity.Common,
        },
      ],
      "BRS +1, SPK +1"
    ),
    createSetEntry(
      "Geckogotchi",
      [
        { tokenId: "249", name: "Gecko Eyes", rarity: WearableRarity.Rare },
        { tokenId: "250", name: "CoinGecko Tee", rarity: WearableRarity.Rare },
        { tokenId: "251", name: "Candy Jaar", rarity: WearableRarity.Rare },
      ],
      "BRS +2, NRG +1"
    ),
    createSetEntry(
      "Super Geckogotchi",
      [
        { tokenId: "245", name: "Gecko Hat", rarity: WearableRarity.Rare },
        { tokenId: "249", name: "Gecko Eyes", rarity: WearableRarity.Rare },
        { tokenId: "250", name: "CoinGecko Tee", rarity: WearableRarity.Rare },
        { tokenId: "251", name: "Candy Jaar", rarity: WearableRarity.Rare },
      ],
      "BRS +3, SPK -1, BRN -1"
    ),
    createSetEntry(
      "Lil Bubble",
      [
        {
          tokenId: "255",
          name: "Space Helmet",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "256",
          name: "Lil Bubble Space Suit",
          rarity: WearableRarity.Legendary,
        },
        {
          tokenId: "257",
          name: "Bitcoin Guitar",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +4, NRG +2, AGG -1"
    ),
    createSetEntry(
      "Radar",
      [
        {
          tokenId: "261",
          name: "Aantenna Bot",
          rarity: WearableRarity.Mythical,
        },
        { tokenId: "262", name: "Radar Eyes", rarity: WearableRarity.Mythical },
        {
          tokenId: "263",
          name: "Signal Headset",
          rarity: WearableRarity.Mythical,
        },
      ],
      "BRS +5, AGG -1, BRN +2"
    ),
    createSetEntry(
      "Laozigotchi",
      [
        { tokenId: "258", name: "Taoist Robe", rarity: WearableRarity.Godlike },
        {
          tokenId: "259",
          name: "Bushy Eyebrows",
          rarity: WearableRarity.Godlike,
        },
        {
          tokenId: "260",
          name: "Beard of Wisdom",
          rarity: WearableRarity.Godlike,
        },
      ],
      "BRS +6, NRG -2, BRN +1"
    ),
    createSetEntry(
      "Wandering Sage",
      [
        {
          tokenId: "65",
          name: "Legendary Wizard Staff",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "258", name: "Taoist Robe", rarity: WearableRarity.Godlike },
        {
          tokenId: "259",
          name: "Bushy Eyebrows",
          rarity: WearableRarity.Godlike,
        },
        {
          tokenId: "260",
          name: "Beard of Wisdom",
          rarity: WearableRarity.Godlike,
        },
      ],
      "BRS +7, NRG -2, BRN +2"
    ),
    createSetEntry(
      "APY Visionary",
      [
        { tokenId: "246", name: "APY Shades", rarity: WearableRarity.Uncommon },
        { tokenId: "247", name: "Up Arrow", rarity: WearableRarity.Uncommon },
        {
          tokenId: "248",
          name: "Up Only Shirt",
          rarity: WearableRarity.Uncommon,
        },
      ],
      "BRS +2, NRG +1"
    ),
    createSetEntry(
      "Aarcher",
      [
        {
          tokenId: "292",
          name: "Brunette Ponytail",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "293",
          name: "Leather Tunic",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "294",
          name: "Bow and Arrow",
          rarity: WearableRarity.Common,
        },
      ],
      "BRS +1, AGG -1"
    ),
    createSetEntry(
      "Baarbarian",
      [
        { tokenId: "295", name: "Forked Beard", rarity: WearableRarity.Common },
        {
          tokenId: "296",
          name: "Doublesided Axe",
          rarity: WearableRarity.Common,
        },
        { tokenId: "297", name: "Animal Skins", rarity: WearableRarity.Common },
        {
          tokenId: "298",
          name: "Horned Helmet",
          rarity: WearableRarity.Common,
        },
      ],
      "BRS +2, AGG +1"
    ),
    createSetEntry(
      "Raanger",
      [
        {
          tokenId: "293",
          name: "Leather Tunic",
          rarity: WearableRarity.Common,
        },
        { tokenId: "299", name: "Longbow", rarity: WearableRarity.Common },
        {
          tokenId: "300",
          name: "Feathered Cap",
          rarity: WearableRarity.Common,
        },
      ],
      "BRS +2, NRG -1"
    ),
    createSetEntry(
      "Geisha",
      [
        {
          tokenId: "301",
          name: "Alluring Eyes",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "302",
          name: "Geisha Headpiece",
          rarity: WearableRarity.Common,
        },
        { tokenId: "303", name: "Kimono", rarity: WearableRarity.Common },
        { tokenId: "304", name: "Paper Fan", rarity: WearableRarity.Common },
      ],
      "BRS +3, AGG -2"
    ),
    createSetEntry(
      "Fairy",
      [
        { tokenId: "306", name: "Flower Studs", rarity: WearableRarity.Common },
        { tokenId: "307", name: "Fairy Wings", rarity: WearableRarity.Common },
        { tokenId: "308", name: "Red Hair", rarity: WearableRarity.Common },
      ],
      "BRS +4, NRG -1, SPK -1"
    ),
    createSetEntry(
      "Sus Fairy",
      [
        {
          tokenId: "305",
          name: "Sus Butterfly",
          rarity: WearableRarity.Common,
        },
        { tokenId: "306", name: "Flower Studs", rarity: WearableRarity.Common },
        { tokenId: "307", name: "Fairy Wings", rarity: WearableRarity.Common },
        { tokenId: "308", name: "Red Hair", rarity: WearableRarity.Common },
      ],
      "BRS +4, NRG -1, SPK -1"
    ),
    createSetEntry(
      "Knight",
      [
        {
          tokenId: "309",
          name: "Citaadel Helm",
          rarity: WearableRarity.Common,
        },
        { tokenId: "310", name: "Plate Armor", rarity: WearableRarity.Common },
        { tokenId: "311", name: "Spirit Sword", rarity: WearableRarity.Common },
      ],
      "BRS +5, NRG +2, AGG -1"
    ),
    createSetEntry(
      "Citaadel Knight",
      [
        {
          tokenId: "309",
          name: "Citaadel Helm",
          rarity: WearableRarity.Common,
        },
        { tokenId: "310", name: "Plate Armor", rarity: WearableRarity.Common },
        { tokenId: "311", name: "Spirit Sword", rarity: WearableRarity.Common },
        { tokenId: "312", name: "Plate Shield", rarity: WearableRarity.Common },
      ],
      "BRS +5, NRG +1, AGG -2"
    ),
    createSetEntry(
      "Bushidogotchi",
      [
        {
          tokenId: "313",
          name: "Kabuto Helmet",
          rarity: WearableRarity.Common,
        },
        { tokenId: "314", name: "Yoroi Armor", rarity: WearableRarity.Common },
        {
          tokenId: "315",
          name: "Haanzo Katana",
          rarity: WearableRarity.Common,
        },
      ],
      "BRS +6, AGG +1, SPK +2"
    ),
    createSetEntry(
      "Robin Hood",
      [
        {
          tokenId: "18",
          name: "Aave Hero Mask",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "293",
          name: "Leather Tunic",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "294",
          name: "Bow and Arrow",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "300",
          name: "Feathered Cap",
          rarity: WearableRarity.Common,
        },
      ],
      "BRS +2, NRG -1"
    ),
    createSetEntry(
      "Nure-onna",
      [
        { tokenId: "249", name: "Gecko Eyes", rarity: WearableRarity.Rare },
        {
          tokenId: "302",
          name: "Geisha Headpiece",
          rarity: WearableRarity.Common,
        },
        { tokenId: "303", name: "Kimono", rarity: WearableRarity.Common },
        { tokenId: "304", name: "Paper Fan", rarity: WearableRarity.Common },
      ],
      "BRS +3, AGG -2"
    ),
    createSetEntry(
      "Tinkerbell",
      [
        { tokenId: "148", name: "Royal Scepter", rarity: WearableRarity.Rare },
        { tokenId: "306", name: "Flower Studs", rarity: WearableRarity.Common },
        { tokenId: "307", name: "Fairy Wings", rarity: WearableRarity.Common },
        { tokenId: "308", name: "Red Hair", rarity: WearableRarity.Common },
      ],
      "BRS +4, NRG -1, SPK -1"
    ),
    createSetEntry(
      "Rave Gurl",
      [
        {
          tokenId: "216",
          name: "Rainbow Vomit",
          rarity: WearableRarity.Mythical,
        },
        { tokenId: "120", name: "Martini", rarity: WearableRarity.Legendary },
        {
          tokenId: "49",
          name: "Coderdan Shades",
          rarity: WearableRarity.Mythical,
        },
        {
          tokenId: "235",
          name: "Shaaman Hoodie",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "307", name: "Fairy Wings", rarity: WearableRarity.Common },
      ],
      "BRS +5, NRG -1, AGG +1, SPK -1"
    ),
    createSetEntry(
      "Off Duty Knight",
      [
        { tokenId: "99", name: "Parasol", rarity: WearableRarity.Mythical },
        { tokenId: "122", name: "Milkshake", rarity: WearableRarity.Mythical },
        {
          tokenId: "144",
          name: "Princess Hair",
          rarity: WearableRarity.Mythical,
        },
        { tokenId: "310", name: "Plate Armor", rarity: WearableRarity.Common },
      ],
      "BRS +5, NRG +1, SPK -2"
    ),
    createSetEntry(
      "Daimyogotchi",
      [
        {
          tokenId: "155",
          name: "Mythical Rofl",
          rarity: WearableRarity.Mythical,
        },
        {
          tokenId: "313",
          name: "Kabuto Helmet",
          rarity: WearableRarity.Common,
        },
        { tokenId: "314", name: "Yoroi Armor", rarity: WearableRarity.Common },
        {
          tokenId: "315",
          name: "Haanzo Katana",
          rarity: WearableRarity.Common,
        },
      ],
      "BRS +7, AGG +1, SPK +2, BRN -1"
    ),
    createSetEntry(
      "Shogungotchi",
      [
        {
          tokenId: "156",
          name: "Godlike Rofl",
          rarity: WearableRarity.Godlike,
        },
        {
          tokenId: "313",
          name: "Kabuto Helmet",
          rarity: WearableRarity.Common,
        },
        { tokenId: "314", name: "Yoroi Armor", rarity: WearableRarity.Common },
        {
          tokenId: "315",
          name: "Haanzo Katana",
          rarity: WearableRarity.Common,
        },
      ],
      "BRS +8, NRG -1, AGG +1, SPK +2, BRN -1"
    ),
    createSetEntry(
      "Noble Savage",
      [
        {
          tokenId: "146",
          name: "Imperial Moustache",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "296",
          name: "Doublesided Axe",
          rarity: WearableRarity.Common,
        },
        { tokenId: "297", name: "Animal Skins", rarity: WearableRarity.Common },
        {
          tokenId: "298",
          name: "Horned Helmet",
          rarity: WearableRarity.Common,
        },
      ],
      "BRS +2, AGG +1"
    ),
    createSetEntry(
      "Elven Aarcher",
      [
        { tokenId: "140", name: "Elf Ears", rarity: WearableRarity.Common },
        {
          tokenId: "292",
          name: "Brunette Ponytail",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "293",
          name: "Leather Tunic",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "294",
          name: "Bow and Arrow",
          rarity: WearableRarity.Common,
        },
      ],
      "BRS +1, AGG -1"
    ),
    createSetEntry(
      "Elven Raanger",
      [
        { tokenId: "140", name: "Elf Ears", rarity: WearableRarity.Common },
        {
          tokenId: "141",
          name: "Gemstone Ring",
          rarity: WearableRarity.Uncommon,
        },
        {
          tokenId: "293",
          name: "Leather Tunic",
          rarity: WearableRarity.Common,
        },
        { tokenId: "299", name: "Longbow", rarity: WearableRarity.Common },
        {
          tokenId: "300",
          name: "Feathered Cap",
          rarity: WearableRarity.Common,
        },
      ],
      "BRS +2, SPK -1"
    ),
    createSetEntry(
      "Woodland Critter",
      [
        {
          tokenId: "293",
          name: "Leather Tunic",
          rarity: WearableRarity.Common,
        },
        {
          tokenId: "300",
          name: "Feathered Cap",
          rarity: WearableRarity.Common,
        },
        { tokenId: "140", name: "Elf Ears", rarity: WearableRarity.Common },
        { tokenId: "40", name: "Foxy Tail", rarity: WearableRarity.Uncommon },
      ],
      "BRS +2, SPK -1"
    ),
    createSetEntry(
      "Vacation Geisha",
      [
        {
          tokenId: "115",
          name: "Blue Hawaiian Shirt",
          rarity: WearableRarity.Legendary,
        },
        { tokenId: "304", name: "Paper Fan", rarity: WearableRarity.Common },
        { tokenId: "243", name: "Tinted Shades", rarity: WearableRarity.Rare },
        {
          tokenId: "302",
          name: "Geisha Headpiece",
          rarity: WearableRarity.Common,
        },
      ],
      "BRS +4, AGG -2"
    ),
    createSetEntry(
      "Tooth Fairy",
      [
        { tokenId: "306", name: "Flower Studs", rarity: WearableRarity.Common },
        { tokenId: "307", name: "Fairy Wings", rarity: WearableRarity.Common },
        { tokenId: "308", name: "Red Hair", rarity: WearableRarity.Common },
        {
          tokenId: "93",
          name: "Fluffy Pillow",
          rarity: WearableRarity.Legendary,
        },
      ],
      "BRS +4, SPK -2"
    ),
    createSetEntry(
      "Master Creatooor",
      [
        {
          tokenId: "369",
          name: "Staff of Creation",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "367",
          name: "Eyes of Devotion",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "368",
          name: "Beard of Divinity",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "366",
          name: "Heavenly Robes",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +8, NRG +1, SPK -2, BRN -2"
    ),
    createSetEntry(
      "Master Creator",
      [
        {
          tokenId: "367",
          name: "Eyes of Devotion",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "368",
          name: "Beard of Divinity",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "369",
          name: "Staff of Creation",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +6, SPK -2, BRN -1"
    ),
    createSetEntry(
      "Master Creator",
      [
        {
          tokenId: "366",
          name: "Heavenly Robes",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "367",
          name: "Eyes of Devotion",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "369",
          name: "Staff of Creation",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +6, SPK -2, BRN -1"
    ),
    createSetEntry(
      "FAKE Artist",
      [
        {
          tokenId: "365",
          name: "Paint Palette",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "364",
          name: "Paint Brush",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "363",
          name: "FAKE Beret",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "362",
          name: "FAKE Shirt",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +5, NRG -1, SPK -1, BRN -1"
    ),
    createSetEntry(
      "FAKE Artist",
      [
        {
          tokenId: "365",
          name: "Paint Palette",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "363",
          name: "FAKE Beret",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "362",
          name: "FAKE Shirt",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +5, NRG -1, SPK -1, BRN -1"
    ),
    createSetEntry(
      "FAKE Artist",
      [
        {
          tokenId: "364",
          name: "Paint Brush",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "363",
          name: "FAKE Beret",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "362",
          name: "FAKE Shirt",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +5, NRG -1, SPK -1, BRN -1"
    ),
    createSetEntry(
      "Smithooor",
      [
        {
          tokenId: "358",
          name: "Flaming Apron",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "359",
          name: "Forge Goggles",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "360",
          name: "Geode Smasher",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "361",
          name: "Geo",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +4, NRG -1, AGG -1"
    ),
    createSetEntry(
      "Smithor",
      [
        {
          tokenId: "358",
          name: "Flaming Apron",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "359",
          name: "Forge Goggles",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "360",
          name: "Geode Smasher",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +4, NRG -1, AGG -1"
    ),
    createSetEntry(
      "Carpentooor",
      [
        {
          tokenId: "354",
          name: "Alchemica Apron",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "355",
          name: "Safety Glasses",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "356",
          name: "Bandage",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "357",
          name: "Nail Gun",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +3, NRG +1, AGG +1"
    ),
    createSetEntry(
      "Carpentor",
      [
        {
          tokenId: "354",
          name: "Alchemica Apron",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "355",
          name: "Safety Glasses",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "357",
          name: "Nail Gun",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +3, NRG +1, AGG +1"
    ),
    createSetEntry(
      "Pixelcraftooor",
      [
        {
          tokenId: "350",
          name: "Pixelcraft Tee",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "351",
          name: "3D Glasses",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "352",
          name: "Pixelcraft Square",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "353",
          name: "Nimbus",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +1, SPK -1"
    ),
    createSetEntry(
      "Pixelcraftor",
      [
        {
          tokenId: "350",
          name: "Pixelcraft Tee",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "352",
          name: "Pixelcraft Square",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "353",
          name: "Nimbus",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +1, SPK -1"
    ),
    createSetEntry(
      "VRF Lord",
      [
        { tokenId: "52", name: "Galaxy Brain", rarity: WearableRarity.Godlike },
        { tokenId: "17", name: "Link Cube", rarity: WearableRarity.Godlike },
        { tokenId: "113", name: "Uranium Rod", rarity: WearableRarity.Godlike },
        {
          tokenId: "385",
          name: "Block Scanners",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +8, NRG +3, BRN +2"
    ),
    createSetEntry(
      "ROFL Tamer",
      [
        {
          tokenId: "53",
          name: "All-Seeing Eyes",
          rarity: WearableRarity.Godlike,
        },
        {
          tokenId: "156",
          name: "Godlike Rofl",
          rarity: WearableRarity.Godlike,
        },
        {
          tokenId: "387",
          name: "Roflnoggin",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "386",
          name: "Staff of Charming",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +8, NRG -3, BRN -2"
    ),
    createSetEntry(
      "Jacob Maarley",
      [
        {
          tokenId: "366",
          name: "Heavenly Robes",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        { tokenId: "113", name: "Uranium Rod", rarity: WearableRarity.Godlike },
        {
          tokenId: "385",
          name: "Block Scanners",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "387",
          name: "Roflnoggin",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +8, NRG +1, SPK +3, BRN -1"
    ),
    createSetEntry(
      "Degen Gamblooor",
      [
        {
          tokenId: "260",
          name: "Beard of Wisdom",
          rarity: WearableRarity.Godlike,
        },
        {
          tokenId: "53",
          name: "All-Seeing Eyes",
          rarity: WearableRarity.Godlike,
        },
        { tokenId: "17", name: "Link Cube", rarity: WearableRarity.Godlike },
        { tokenId: "52", name: "Galaxy Brain", rarity: WearableRarity.Godlike },
      ],
      "BRS +8, NRG -2, BRN +3"
    ),
    createSetEntry(
      "Starlet",
      [
        {
          tokenId: "370",
          name: "Wavy Hair",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "371",
          name: "Plastic Earrings",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "372",
          name: "Party Dress",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +1, NRG +1"
    ),
    createSetEntry(
      "Engagement Farmer",
      [
        {
          tokenId: "373",
          name: "Overalls",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "374",
          name: "Lens Frens Plant",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "375",
          name: "GM Seeds",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +3, SPK -2"
    ),
    createSetEntry(
      "Gotchidator",
      [
        {
          tokenId: "376",
          name: "Lick Brain",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "377",
          name: "Lick Eyes",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "378",
          name: "Lick Tongue",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +3, AGG +1, SPK -1"
    ),
    createSetEntry(
      "Gotchidator",
      [
        {
          tokenId: "376",
          name: "Lick Brain",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "377",
          name: "Lick Eyes",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "379",
          name: "Lick Tentacle",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +3, AGG +1, SPK -1"
    ),
    createSetEntry(
      "Sandbox Seb",
      [
        {
          tokenId: "380",
          name: "Sebastien Hair",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "381",
          name: "Voxel Eyes",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "382",
          name: "GOATee",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
        {
          tokenId: "383",
          name: "Sandbox Hoodie",
          rarity: WearableRarity.Common,
          useForgeStyle: true,
        },
      ],
      "BRS +4, NRG +1, AGG -1"
    ),
  ]),
];
