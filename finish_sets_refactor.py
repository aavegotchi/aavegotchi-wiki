#!/usr/bin/env python3
"""
Script to finish converting the remaining unconverted set entries in sets.tsx
"""

import re

def convert_remaining_entries():
    """Convert all remaining unconverted entries"""
    
    with open('data/tables/sets.tsx', 'r') as f:
        content = f.read()
    
    # Mapping for DeFi-RPG and other complex paths to token IDs
    path_mappings = {
        "/wearables/DeFi-RPG/Aavegotchi-Archer-Gotchi-Brunette-Ponytail.svg": "292",
        "/wearables/DeFi-RPG/Aavegotchi-Archer-Gotchi-Leather-Tunic.svg": "293", 
        "/wearables/DeFi-RPG/Aavegotchi-Archer-Gotchi-Bow-Arrow.svg": "294",
        "/wearables/DeFi-RPG/Aavegotchi-Baarbarian-Gotchi-Forked-Beard.svg": "295",
        "/wearables/DeFi-RPG/Aavegotchi-Baarbarian-Gotchi-Double-sided-Axe.svg": "296",
        "/wearables/DeFi-RPG/Aavegotchi-Baarbarian-Gotchi-Animal-Skins.svg": "297",
        "/wearables/DeFi-RPG/Aavegotchi-Baarbarian-Gotchi-Horned-Helmet.svg": "298",
        "/wearables/DeFi-RPG/Aavegotchi-Ranger-Gotchi-Longbow.svg": "299",
        "/wearables/DeFi-RPG/Aavegotchi-Ranger-Gotchi-Feathered-Cap.svg": "300",
        "/wearables/DeFi-RPG/Aavegotchi-Geisha-Gotchi-Alluring-Eyes.svg": "301",
        "/wearables/DeFi-RPG/Aavegotchi-Geisha-Gotchi-Head-Piece.svg": "302",
        "/wearables/DeFi-RPG/Aavegotchi-Geisha-Gotchi-Kimono.svg": "303",
        "/wearables/DeFi-RPG/Aavegotchi-Geisha-Gotchi-Paper-Fan.svg": "304",
        "/wearables/DeFi-RPG/Aavegotchi-Fairy-Gotchi-Sus-Butterfly.svg": "305",
        "/wearables/DeFi-RPG/Aavegotchi-Fairy-Gotchi-Flower-Studs.svg": "306",
        "/wearables/DeFi-RPG/Aavegotchi-Fairy-Gotchi-Fairy-Wings.svg": "307",
        "/wearables/DeFi-RPG/Aavegotchi-Fairy-Gotchi-Red-Hair.svg": "308",
        "/wearables/DeFi-RPG/Aavegotchi-Citaadel-Knight-Gotchi-Citaadel-Helm.svg": "309",
        "/wearables/DeFi-RPG/Aavegotchi-Citaadel-Knight-Gotchi-Plate-Armor.svg": "310",
        "/wearables/DeFi-RPG/Aavegotchi-Citaadel-Knight-Gotchi-Spirit-Sword.svg": "311",
        "/wearables/DeFi-RPG/Aavegotchi-Citaadel-Knight-Gotchi-Plate-Shield.svg": "312",
        "/wearables/DeFi-RPG/Aavegotchi-Bushidogotchi-Gotchi-Kabuto-Helmet.svg": "313",
        "/wearables/DeFi-RPG/Aavegotchi-Bushidogotchi-Gotchi-Yoroi-Armor.svg": "314",
        "/wearables/DeFi-RPG/Aavegotchi-Bushidogotchi-Gotchi-Haanzo-Katana.svg": "315",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Royal-Scepter.svg": "148",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Rofl-Mythical.svg": "155",
        "/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Rofl-Godlike.svg": "156",
        "/wearables/partnerships/249_CoinGeckoEyes.svg": "249",
        "/wearables/haunt2/216_RainbowVomit.svg": "216",
        "/wearables/haunt2/235_ShaamanHoodie.svg": "235",
        "/wearables/final wearables/120_Martini.svg": "120",
        "/wearables/ethereum/CODERDAN SHADES.svg": "49",
        "/wearables/aave/hero-mask.svg": "18",
    }
    
    # First, fix all the paths
    for old_path, token_id in path_mappings.items():
        new_path = f"/wearables/{token_id}.svg"
        content = content.replace(old_path, new_path)
    
    # Handle remaining patterns with regex
    def replace_numbered_paths(match):
        full_match = match.group(0)
        old_path = match.group(2)
        # Extract token ID from numbered paths like "216_RainbowVomit.svg"
        token_match = re.search(r'/(\d+)_', old_path)
        if token_match:
            token_id = token_match.group(1)
            new_path = f"/wearables/{token_id}.svg"
            return full_match.replace(old_path, new_path)
        return full_match
    
    # Apply regex patterns for numbered paths
    patterns = [
        r'(<img[^>]*src=")(/wearables/[^/]+/\d+_[^"]+\.svg)("[^>]*>)',
        r'(<img[^>]*src=")(/wearables/forge[^/]*/\d+_[^"]+\.svg)("[^>]*>)',
        r'(<img[^>]*src=")(/wearables/partnerships/\d+_[^"]+\.svg)("[^>]*>)',
    ]
    
    for pattern in patterns:
        content = re.sub(pattern, replace_numbered_paths, content)
    
    # Now convert remaining unconverted lines to createSetEntry format
    lines = content.split('\n')
    new_lines = []
    
    for line in lines:
        # Check if this is an unconverted set entry
        if line.strip().startswith('["') and '`<img' in line and 'createSetEntry' not in line:
            converted = convert_set_line(line)
            new_lines.append(converted)
        else:
            new_lines.append(line)
    
    new_content = '\n'.join(new_lines)
    
    with open('data/tables/sets.tsx', 'w') as f:
        f.write(new_content)
    
    print("✅ Finished converting all remaining set entries!")

def convert_set_line(line):
    """Convert a single set line to createSetEntry format"""
    line = line.strip()
    
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
    
    # Extract all img tags
    img_pattern = r'`<img class="([^"]+)"(?: style="([^"]*)")? src="/wearables/(\d+)\.svg" alt="[^"]*" title="([^"]*)" />`'
    img_matches = re.findall(img_pattern, line)
    
    if not img_matches:
        return line
    
    items = []
    for rarity_class, style, token_id, title_name in img_matches:
        # Convert rarity to enum
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
        
        items.append(f'      {{tokenId: "{token_id}", name: "{title_name}", rarity: {rarity}{forge_style_str}}}')
    
    if not items:
        return line
    
    items_str = "[\n" + ",\n".join(items) + ",\n    ]"
    return f'    createSetEntry("{set_name}", {items_str}, "{set_bonuses}"),'

if __name__ == "__main__":
    convert_remaining_entries()