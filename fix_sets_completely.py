#!/usr/bin/env python3
"""
Complete and proper refactoring of sets.tsx - no more half measures!
"""

import re

def get_item_data_from_itemTypes():
    """Get complete item data from itemTypes.ts"""
    items = {}
    
    with open('data/itemTypes.ts', 'r') as f:
        content = f.read()
    
    # Extract each item with ID, name, and ghstPrice
    pattern = r'(\d+):\s*\{[^}]*name:\s*"([^"]+)"[^}]*ghstPrice:\s*(\d+)'
    matches = re.findall(pattern, content, re.DOTALL)
    
    for item_id, name, ghst_price in matches:
        # Map ghstPrice to rarity
        price = int(ghst_price)
        if price == 0:
            rarity = "WearableRarity.Common"
        elif price == 5:
            rarity = "WearableRarity.Common"
        elif price == 10:
            rarity = "WearableRarity.Uncommon"
        elif price == 100:
            rarity = "WearableRarity.Rare"
        elif price == 300:
            rarity = "WearableRarity.Legendary"
        elif price == 2000:
            rarity = "WearableRarity.Mythical"
        elif price == 10000:
            rarity = "WearableRarity.Godlike"
        else:
            rarity = "WearableRarity.Common"
        
        items[int(item_id)] = {
            "name": name,
            "rarity": rarity,
            "useForgeStyle": int(item_id) >= 350
        }
    
    return items

def create_complete_path_mapping():
    """Create complete path to token ID mapping"""
    mappings = {}
    
    # Link wearables (1-17)
    link_items = {
        "camo-cap": "1", "camo-pants": "2", "mk2-grenade": "3",
        "snow-camo-cap": "4", "snow-camo-pants": "5", "m67-grenade": "6", 
        "marine-cap": "7", "marine-suit": "8", "walkie-talkie": "9",
        "link-white-cap": "10", "link-mess-dress": "11", "link-bubbly": "12",
        "sergey-beard": "13", "sergey-eyes": "14", "sergey-red": "15",
        "sergey-blue": "16", "link-cube": "17"
    }
    for item, token_id in link_items.items():
        mappings[f"/wearables/link/{item}.svg"] = token_id
    
    # Aave wearables (18-35)
    aave_items = {
        "hero-mask": "18", "hero-shirt": "19", "aave-plush-toy": "20",
        "captain-aave-mask": "21", "captain-aave-suit": "22", "captain-aave-shield": "23",
        "thaave-helmet": "24", "thaave-suit": "25", "thaave-hammer": "26",
        "marc-hair": "27", "marc-outfit": "28", "rekt-sign": "29",
        "jordan-hair": "30", "jordan-suit": "31", "aave-flag": "32",
        "stani-hair": "33", "stani-lifejacket": "34", "aave-boat": "35"
    }
    for item, token_id in aave_items.items():
        mappings[f"/wearables/aave/{item}.svg"] = token_id
    
    # Ethereum wearables (36-54)
    ethereum_items = {
        "ETH LOGO GLASSES": "36", "ETH TSHIRT": "37", "32 ETH COIN": "38",
        "FOXY MASK": "39", "FOXY TAIL": "40", "TREZOR WALLET": "41",
        "EAGLE MASK": "42", "NOGARA ARMOR": "43", "DAO EGG": "44",
        "APE MASK": "45", "HALF REKT SHIRT": "46", "WAIFU PILLOW": "47",
        "XIBOT MOHAWK": "48", "CODERDAN SHADES": "49", "GLDNXROSS ROBE": "50",
        "MUDGEN DIAMOND": "51", "GALAXY BRAIN": "52", "ALL SEEING EYES": "53",
        "LLAMACORN SHIRT": "54"
    }
    for item, token_id in ethereum_items.items():
        mappings[f"/wearables/ethereum/{item}.svg"] = token_id
    
    # Layer2 wearables
    layer2_mappings = {
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Fireball.svg": "130",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Dragon-Horns.svg": "131",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Dragon-Wings.svg": "132",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Pointy-Horns.svg": "133",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-L2-Sign.svg": "134",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Polygon-Shirt.svg": "135",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Polygon-Cap.svg": "136",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Vote-Sign.svg": "137",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Snapshot-Shirt.svg": "138",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Snapshot-Cap.svg": "139",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Elf-Ears.svg": "140",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Gemstone-Ring.svg": "141",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Princess-Tiara.svg": "142",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Gold-Necklace.svg": "143",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Princess-Locks.svg": "144",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-godli-locks.svg": "145",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-The-Imperial.svg": "146",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Tiny-Crown.svg": "147",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Royal-Scepter.svg": "148",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Royal-Crown.svg": "149",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Royal-Robes.svg": "150",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Rofl-Common.svg": "151",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Rofl-Uncommon.svg": "152",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Rofl-Rare.svg": "153",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Rofl-Legendary.svg": "154",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Rofl-Mythical.svg": "155",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Rofl-Godlike.svg": "156",
        "/wearables/layer2/Aavegotchi-Gen-0-Sets-Lil-Pump-Goatee.svg": "157",
        "/wearables/layer2/Aavegotchi-Gen-0-Sets-Lil-Pump-Drank.svg": "158",
        "/wearables/layer2/Aavegotchi-Gen-0-Sets-Lil-Pump-Shades.svg": "159",
        "/wearables/layer2/Aavegotchi-Gen-0-Sets-Lil-Pump-threads.svg": "160",
        "/wearables/layer2/Aavegotchi-Gen-0-Sets-Lil-Pump-Dreads.svg": "161",
    }
    mappings.update(layer2_mappings)
    
    # Venly, auction, partnerships, DeFi-RPG, forge mappings
    other_mappings = {
        "/wearables/venly/biker_helmet.svg": "206",
        "/wearables/venly/biker_jacket.svg": "207",
        "/wearables/venly/aaviators.svg": "208",
        "/wearables/venly/horseshoe_mustache.svg": "209",
        "/wearables/auction/steampunk_mask.svg": "199",
        "/wearables/auction/steampunk_trousers.svg": "200",
        "/wearables/auction/mechanical_claw.svg": "201",
        "/wearables/auction/mechanical_arm.svg": "201",
        "/wearables/auction/vrgoggles.svg": "202",
        "/wearables/auction/gamer_jacket.svg": "203",
        "/wearables/auction/game_controller.svg": "204",
    }
    mappings.update(other_mappings)
    
    return mappings

def convert_set_line_completely(line, item_data):
    """Convert a set line to proper createSetEntry format with all data"""
    line = line.strip()
    
    # Skip if not a set entry
    if not line.startswith('["') or '`<img' not in line:
        return line
    
    # Extract set name
    set_name_match = re.search(r'\["([^"]+)"', line)
    if not set_name_match:
        return line
    set_name = set_name_match.group(1)
    
    # Extract set bonuses
    bonus_match = re.search(r'",\s*"([^"]+)"\]', line)
    if not bonus_match:
        return line
    set_bonuses = bonus_match.group(1)
    
    # Extract all img tags and convert them
    img_pattern = r'`<img class="([^"]+)"(?: style="([^"]*)")? src="([^"]+)" alt="[^"]*" title="([^"]*)" />`'
    img_matches = re.findall(img_pattern, line)
    
    if not img_matches:
        return line
    
    items = []
    path_mappings = create_complete_path_mapping()
    
    for rarity_class, style, src_path, title_name in img_matches:
        # Get token ID from path
        token_id = None
        
        # Check if it's already in simplified format
        simple_match = re.search(r'/wearables/(\d+)\.svg', src_path)
        if simple_match:
            token_id = simple_match.group(1)
        elif src_path in path_mappings:
            token_id = path_mappings[src_path]
        else:
            # Try to extract from complex paths
            if "/final wearables/" in src_path:
                final_match = re.search(r'/(\d+)_', src_path)
                if final_match:
                    token_id = final_match.group(1)
            elif "/haunt2/" in src_path:
                haunt_match = re.search(r'/(\d+)_', src_path)
                if haunt_match:
                    token_id = haunt_match.group(1)
            elif "/forge" in src_path:
                forge_match = re.search(r'/(\d+)_', src_path)
                if forge_match:
                    token_id = forge_match.group(1)
            elif "/partnerships/" in src_path:
                partner_match = re.search(r'/(\d+)_', src_path)
                if partner_match:
                    token_id = partner_match.group(1)
        
        if not token_id:
            print(f"Warning: Could not extract token ID from {src_path}")
            continue
        
        token_id_int = int(token_id)
        
        # Get item data
        if token_id_int in item_data:
            item_info = item_data[token_id_int]
            name = item_info["name"]
            rarity = item_info["rarity"]
            use_forge_style = item_info["useForgeStyle"]
        else:
            name = title_name
            # Convert CSS class to enum
            rarity_map = {
                "common": "WearableRarity.Common",
                "uncommon": "WearableRarity.Uncommon",
                "rare": "WearableRarity.Rare",
                "legendary": "WearableRarity.Legendary", 
                "mythical": "WearableRarity.Mythical",
                "godlike": "WearableRarity.Godlike",
            }
            rarity = rarity_map.get(rarity_class, "WearableRarity.Common")
            use_forge_style = style and "object-fit:contain" in style
        
        forge_style_str = ", useForgeStyle: true" if use_forge_style else ""
        items.append(f'      {{tokenId: "{token_id}", name: "{name}", rarity: {rarity}{forge_style_str}}}')
    
    if not items:
        return line
    
    items_str = "[\n" + ",\n".join(items) + ",\n    ]"
    return f'    createSetEntry("{set_name}", {items_str}, "{set_bonuses}"),'

def refactor_sets_file_properly():
    """Properly refactor the entire sets.tsx file"""
    
    print("Loading item data from itemTypes.ts...")
    item_data = get_item_data_from_itemTypes()
    print(f"Loaded data for {len(item_data)} items")
    
    print("Reading current sets.tsx...")
    with open('data/tables/sets.tsx', 'r') as f:
        content = f.read()
    
    # Build the new file content
    header = '''// Enums for better type safety
enum WearableRarity {
  Common = "common",
  Uncommon = "uncommon", 
  Rare = "rare",
  Legendary = "legendary",
  Mythical = "mythical",
  Godlike = "godlike",
}

interface Table {
    tableName: string
    tableCaption?: string
    tableData: TableData
}

interface TableData {
    headers: string[]
    data: string[][]
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
  const style = useForgeStyle ? ' style="object-fit:contain"' : '';
  
  return `<img class="${className}"${style} src="${imagePath}" alt="${altText}" title="${name}" />`;
}

function createSetEntry(
  setName: string,
  items: Array<{tokenId: string, name: string, rarity: WearableRarity, useForgeStyle?: boolean}>,
  setBonuses: string
): string[] {
  const itemImages = items.map(item => 
    createWearableImage(item.tokenId, item.name, item.rarity, item.useForgeStyle || false)
  );
  
  // Pad with "-" to ensure we have exactly 5 item slots
  while (itemImages.length < 5) {
    itemImages.push("-");
  }
  
  return [setName, ...itemImages.slice(0, 5), setBonuses];
}

// Constants for headers
const SETS_HEADERS = ["Set", "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Set Bonus"];

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
'''
    
    # Extract and convert all set entries
    lines = content.split('\n')
    converted_entries = []
    
    for line in lines:
        if line.strip().startswith('["') and '`<img' in line:
            converted = convert_set_line_completely(line, item_data)
            if converted != line:  # Only add if it was successfully converted
                converted_entries.append(converted)
    
    footer = '''  ]),
];'''
    
    # Combine everything
    full_content = header + "\n".join(converted_entries) + "\n" + footer
    
    print(f"Writing refactored file with {len(converted_entries)} sets...")
    with open('data/tables/sets.tsx', 'w') as f:
        f.write(full_content)
    
    print("✅ COMPLETELY refactored sets.tsx with proper structure, paths, and bonuses!")

if __name__ == "__main__":
    refactor_sets_file_properly()