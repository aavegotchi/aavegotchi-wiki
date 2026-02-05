#!/usr/bin/env python3
"""
Convert the remaining unconverted set entries
"""

import re

def convert_remaining():
    with open('data/tables/sets.tsx', 'r') as f:
        content = f.read()
    
    # Define the remaining conversions
    conversions = [
        # Raanger
        (r'\["Raanger", `<img class="common" src="/wearables/293\.svg"[^`]+`, `<img class="uncommon" src="/wearables/299\.svg"[^`]+`, `<img class="uncommon" src="/wearables/300\.svg"[^`]+`, "-", "-", "BRS \+2, NRG -1"\],',
         '''    createSetEntry("Raanger", [
      {tokenId: "293", name: "Leather Tunic", rarity: WearableRarity.Common},
      {tokenId: "299", name: "Longbow", rarity: WearableRarity.Uncommon},
      {tokenId: "300", name: "Feathered Cap", rarity: WearableRarity.Uncommon},
    ], "BRS +2, NRG -1"),'''),
        
        # Geisha
        (r'\["Geisha", `<img class="rare" src="/wearables/301\.svg"[^`]+`, `<img class="rare" src="/wearables/302\.svg"[^`]+`, `<img class="rare" src="/wearables/303\.svg"[^`]+`, `<img class="rare" src="/wearables/304\.svg"[^`]+`, "-", "BRS \+3, AGG -2"\],',
         '''    createSetEntry("Geisha", [
      {tokenId: "301", name: "Alluring Eyes", rarity: WearableRarity.Rare},
      {tokenId: "302", name: "Geisha Headpiece", rarity: WearableRarity.Rare},
      {tokenId: "303", name: "Kimono", rarity: WearableRarity.Rare},
      {tokenId: "304", name: "Paper Fan", rarity: WearableRarity.Rare},
    ], "BRS +3, AGG -2"),'''),
        
        # Knight
        (r'\["Knight", `<img class="mythical" src="/wearables/309\.svg"[^`]+`, `<img class="mythical" src="/wearables/310\.svg"[^`]+`, `<img class="mythical" src="/wearables/311\.svg"[^`]+`, "-", "-", "BRS \+5, NRG \+2, AGG -1"\],',
         '''    createSetEntry("Knight", [
      {tokenId: "309", name: "Citaadel Helm", rarity: WearableRarity.Mythical},
      {tokenId: "310", name: "Plate Armor", rarity: WearableRarity.Mythical},
      {tokenId: "311", name: "Spirit Sword", rarity: WearableRarity.Mythical},
    ], "BRS +5, NRG +2, AGG -1"),'''),
    ]
    
    # Apply conversions
    for pattern, replacement in conversions:
        content = re.sub(pattern, replacement, content)
    
    # Convert any remaining simple patterns
    def convert_simple_entry(match):
        full_line = match.group(0)
        
        # Extract set name
        set_name_match = re.search(r'\["([^"]+)"', full_line)
        if not set_name_match:
            return full_line
        set_name = set_name_match.group(1)
        
        # Extract bonuses
        bonus_match = re.search(r'",\s*"([^"]+)"\]', full_line)
        if not bonus_match:
            return full_line
        bonuses = bonus_match.group(1)
        
        # Extract token IDs and names
        token_pattern = r'src="/wearables/(\d+)\.svg"[^>]*title="([^"]*)"'
        tokens = re.findall(token_pattern, full_line)
        
        if not tokens:
            return full_line
        
        # Extract rarities
        rarity_pattern = r'class="([^"]+)"'
        rarities = re.findall(rarity_pattern, full_line)
        
        # Check for forge style
        use_forge_style = 'style="object-fit:contain"' in full_line
        
        items = []
        for i, (token_id, name) in enumerate(tokens):
            rarity_class = rarities[i] if i < len(rarities) else "common"
            rarity_map = {
                "common": "WearableRarity.Common",
                "uncommon": "WearableRarity.Uncommon",
                "rare": "WearableRarity.Rare",
                "legendary": "WearableRarity.Legendary",
                "mythical": "WearableRarity.Mythical",
                "godlike": "WearableRarity.Godlike",
            }
            rarity = rarity_map.get(rarity_class, "WearableRarity.Common")
            
            forge_str = ", useForgeStyle: true" if use_forge_style else ""
            items.append(f'      {{tokenId: "{token_id}", name: "{name}", rarity: {rarity}{forge_str}}}')
        
        items_str = "[\n" + ",\n".join(items) + ",\n    ]"
        return f'    createSetEntry("{set_name}", {items_str}, "{bonuses}"),'
    
    # Apply to remaining unconverted lines
    lines = content.split('\n')
    new_lines = []
    
    for line in lines:
        if line.strip().startswith('["') and '`<img' in line:
            converted = convert_simple_entry(re.match(r'.*', line))
            new_lines.append(converted)
        else:
            new_lines.append(line)
    
    new_content = '\n'.join(new_lines)
    
    with open('data/tables/sets.tsx', 'w') as f:
        f.write(new_content)
    
    print("✅ Converted all remaining set entries!")

if __name__ == "__main__":
    convert_remaining()