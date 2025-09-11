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

// Import the data we need
import { setsList } from "./setsList";
import {
  tables as wearableTables,
  createWearableImage as baseCreateWearableImage,
  createForgeWearableImage,
} from "./wearables";

// Helper function that adds rarity class to the base wearable image functions
function createWearableImage(
  tokenId: string,
  name: string,
  rarity: WearableRarity,
  useForgeStyle: boolean = false
): string {
  const imagePath = `/wearables/${tokenId}.svg`;
  const altText = `aavegotchi ${name}`;

  // Use the base functions from wearables.tsx
  const baseImage = useForgeStyle
    ? createForgeWearableImage(imagePath, altText, name)
    : baseCreateWearableImage(imagePath, altText, name);

  // Add rarity class to the img tag
  return baseImage.replace("<img", `<img class="${rarity}"`);
}

// Create a lookup map for all wearables
function createWearableLookup() {
  const wearableMap = new Map<
    string,
    {
      id: string;
      name: string;
      rarity: string;
      useForgeStyle?: boolean;
    }
  >();

  // Extract all wearables from all tables
  wearableTables.forEach((table) => {
    table.tableData.data.forEach((row) => {
      // Row structure: [image, id, name, rarity, stats, quantity, slot]
      if (row.length >= 4) {
        const id = row[1] as string;
        const name = row[2] as string;
        const rarity = row[3] as string;

        // Check if this is a forge wearable (has style="object-fit:contain" in image)
        const imageHtml = row[0] as string;
        const useForgeStyle = imageHtml.includes('style="object-fit:contain"');

        wearableMap.set(id, {
          id,
          name,
          rarity: rarity.toLowerCase() as WearableRarity,
          useForgeStyle,
        });
      }
    });
  });

  return wearableMap;
}

// Convert traits bonuses array to readable string
function formatTraitsBonuses(traitsBonuses: number[]): string {
  const [brs, nrg, agg, spk, brn] = traitsBonuses;
  const bonuses: string[] = [];

  if (brs !== 0) bonuses.push(`BRS ${brs > 0 ? "+" : ""}${brs}`);
  if (nrg !== 0) bonuses.push(`NRG ${nrg > 0 ? "+" : ""}${nrg}`);
  if (agg !== 0) bonuses.push(`AGG ${agg > 0 ? "+" : ""}${agg}`);
  if (spk !== 0) bonuses.push(`SPK ${spk > 0 ? "+" : ""}${spk}`);
  if (brn !== 0) bonuses.push(`BRN ${brn > 0 ? "+" : ""}${brn}`);

  return bonuses.join(", ");
}

// Generate set entry from setsList data
function createSetEntry(
  setName: string,
  wearableIds: number[],
  traitsBonuses: number[],
  wearableLookup: Map<string, any>
): string[] {
  const itemImages: string[] = [];

  // Get wearable data for each ID
  wearableIds.forEach((id) => {
    const wearable = wearableLookup.get(id.toString());
    if (wearable) {
      const image = createWearableImage(
        wearable.id,
        wearable.name,
        wearable.rarity,
        wearable.useForgeStyle || false
      );
      itemImages.push(image);
    } else {
      console.warn(`Wearable with ID ${id} not found`);
      itemImages.push("-");
    }
  });

  // Pad with "-" to ensure we have exactly 5 item slots
  while (itemImages.length < 5) {
    itemImages.push("-");
  }

  // Format the set bonuses
  const setBonuses = formatTraitsBonuses(traitsBonuses);

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

// Generate all sets data
function generateSetsData(): string[][] {
  const wearableLookup = createWearableLookup();

  return setsList.map((set) =>
    createSetEntry(set.name, set.wearableIds, set.traitsBonuses, wearableLookup)
  );
}

export const tables = [createSetsTable("sets", "Sets", generateSetsData())];
