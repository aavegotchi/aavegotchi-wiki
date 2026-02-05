// Enums for weapons
enum WeaponType {
  Melee = "melee",
  Ranged = "ranged",
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
function createWeaponEntry(tokenId: string, name: string): string[] {
  const imagePath = `/wearables/${tokenId}.svg`;
  return [`<img src="${imagePath}" alt="aavegotchi ${name}" />`, name];
}

// Constants
const WEAPON_HEADERS = ["Image", "Name"];

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
  // Melee Weapons
  createTable(
    "meleeWeapons",
    "",
    [
      createWeaponEntry("26", "Thaave Hammer"),
      createWeaponEntry("69", "Pitchfork"),
      createWeaponEntry("70", "Handsaw"),
      createWeaponEntry("83", "Sushi Knife"),
      createWeaponEntry("89", "Pickaxe"),
      createWeaponEntry("106", "Portal Mage Axe"),
      createWeaponEntry("107", "Portal Mage Black Axe"),
      createWeaponEntry("148", "Royal Scepter"),
      createWeaponEntry("201", "Mechanical Claw"),
      createWeaponEntry("223", "Hook Hand"),
      createWeaponEntry("257", "Bitcoin Guitar"),
      createWeaponEntry("296", "Double-sided Axe"),
      createWeaponEntry("311", "Spirit Sword"),
      createWeaponEntry("315", "Haanzo Katana"),
    ],
    WEAPON_HEADERS
  ),

  // Ranged Weapons
  createTable(
    "rangedWeapons",
    "",
    [
      createWeaponEntry("3", "MK2 Grenade"),
      createWeaponEntry("6", "M67 Grenade"),
      createWeaponEntry("17", "LINK Cube"),
      createWeaponEntry("58", "Aagent Pistol"),
      createWeaponEntry("64", "Common Wizard Staff"),
      createWeaponEntry("65", "Legendary Wizard Staff"),
      createWeaponEntry("103", "Witchy Wand"),
      createWeaponEntry("130", "Fireball"),
      createWeaponEntry("217", "Energy Gun"),
      createWeaponEntry("225", "Basketball"),
      createWeaponEntry("229", "Lasso"),
      createWeaponEntry("294", "Bow and Arrow"),
      createWeaponEntry("299", "Longbow"),
      createWeaponEntry("51", "Mudgen Diamond"),
    ],
    WEAPON_HEADERS
  ),
];
