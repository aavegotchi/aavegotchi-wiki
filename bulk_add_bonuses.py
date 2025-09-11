#!/usr/bin/env python3
"""
Bulk add all set bonuses by replacing empty strings
"""

def bulk_replace_bonuses():
    """Replace all empty bonus strings with correct bonuses"""
    
    # All the bonuses from the original file
    bonuses = {
        "Apex Sergey": "BRS +6, NRG -4",
        "Aave Hero": "BRS +1, SPK +1", 
        "Captain Aave": "BRS +2, SPK +1",
        "Thaave": "BRS +3, NRG +2",
        "Marc": "BRS +4, NRG +2",
        "Jordan": "BRS +5, SPK +3",
        "Godlike Stani": "BRS +6, AGG -3",
        "Apex Stani": "BRS +6, NRG +1, AGG -3",
        "ETH Maxi": "BRS +1, BRN -1",
        "Foxy Meta": "BRS +2, AGG -1",
        "Nogara the Eagle": "BRS +3, NRG +2",
        "DeFi Degen": "BRS +4, BRN -2",
        "DAO Summoner": "BRS +5, BRN +3",
        "Vitalik Visionary": "BRS +6, NRG -3",
        "Apex Vitalik Visionary": "BRS +7, NRG -3, BRN +1",
        "Super Aagent": "BRS +4, NRG -1, SPK +2",
        "Aagent ": "BRS +3, NRG -1, SPK +1",
        "Aagent": "BRS +3, NRG -1, SPK +2",
        "Wizard ": "BRS +1, NRG +1",
        "Wizard": "BRS +1, NRG +1",
        "Legendary Wizard": "BRS +4, NRG +1, BRN +1",
        "Mythical Wizard": "BRS +5, NRG +1, BRN +2",
        "Godlike Wizard": "BRS +6, NRG +1, BRN +2",
        "Farmer": "BRS +1, NRG -1",
        "Mythical Farmer": "BRS +5, NRG -2, BRN -1",
        "OKex Jaay": "BRS +5, NRG -1, BRN -2",
        "OKex Jaay Hao": "BRS +5, NRG -1, BRN -2",
        "Skater": "BRS +2, BRN -1",
        "Sushi Chef": "BRS +3, AGG +2",
        "Master Sushi Chef": "BRS +4, AGG +2, SPK -1",
        "Gentleman": "BRS +4, AGG -2",
        "Miner": "BRS +2, NRG +1",
        "Pajamas": "BRS +3, SPK -2",
        "Full Pajamas": "BRS +4, SPK -3",
        "Runner": "BRS +2, NRG +1",
        "Long Distance Runner": "BRS +4, NRG +2",
        "Lady": "BRS +4, SPK -2",
        "Socialite": "BRS +5, NRG +2, SPK -1",
        "Witchy": "BRS +5, SPK +3",
        "Portal Mage": "BRS +4, AGG +2",
        "Supreme Portal Mage": "BRS +6, AGG +3",
        "Rastafarian": "BRS +3, AGG -2",
        "Off Duty Hazmat": "BRS +4, NRG +2, SPK +2",
        "On Duty Hazmat": "BRS +6, NRG +3",
        "Blue Vacationer": "BRS +4, NRG -2",
        "Red Vacationer": "BRS +5, NRG -2, SPK -1",
        "Crypto OG": "BRS +4, BRN -2",
        "Rektboi": "BRS +4, BRN -2",
        "Man of Culture": "BRS +4, BRN -2",
        "Curve Surfer": "BRS +4, BRN +2",
        "PoW Miner": "BRS +3, AGG +2",
        "Toddler": "BRS +4, AGG -2",
        "FU Money": "BRS +6, AGG -3",
        "Farmer Alf": "BRS +5, NRG -3",
        "Battle Santa": "BRS +5, AGG +3",
        "Party Animal": "BRS +5, BRN -3",
        "Snapshot Voter": "BRS +3, AGG -2",
        "Polygonist": "BRS +3, AGG -1, BRN +1",
        "Quickswap Dragon": "BRS +3, AGG +1, SPK +1",
        "Swappy the Dragon": "BRS +4, AGG +1, SPK +1",
        "Gotchi Elf": "BRS +3, SPK -1, BRN +1",
        "Gotchi Princess": "BRS +4, NRG +1, AGG +1",
        "Gotchi Queen": "BRS +5, SPK -2, BRN +1",
        "Godli Locks": "BRS +6, SPK -2, BRN +2",
        "Gotchi Baron": "BRS +3, NRG -1, BRN -1",
        "Gotchi Lord": "BRS +5, NRG -1, BRN -2",
        "Gotchi King": "BRS +5, NRG -2, BRN -1",
        "Gotchi Emperor": "BRS +6, NRG -2, BRN -2",
        "Lil Pumpagotchi": "BRS +6, NRG +2, AGG +2",
        "Soundcloud Rapper": "BRS +5, NRG +1, AGG +2",
        "REALM Tycoon": "BRS +4, NRG -1, AGG -1",
        "Yegres the Dragon": "BRS +5, SPK +1, BRN +2",
        "Vacation Santa": "BRS +5, NRG -1, AGG -1, SPK -1",
        "VR Gamer": "BRS +5, NRG +2, AGG +1",
        "Steampunk": "BRS +4, SPK +2",
        "Casual Gamer": "BRS +3, NRG +1, AGG +1",
        "Gentleman Farmer": "BRS +2, SPK +1",
        "Cyberpunk": "BRS +5, NRG +3",
        "Steampunk Grenadier": "BRS +3, SPK +2",
        "Venly Biker Set": "BRS +4, NRG -1, AGG +1",
        "Hacker Aanon": "BRS +5, NRG -2, BRN +1",
        "Shadowy Supercoder": "BRS +6, NRG -2, BRN +1",
        "Cyborg ": "BRS +5, AGG +3",
        "Punk Rocker": "BRS +4, AGG +2",
        "Piraate": "BRS +3, BRN -2",
        "Aair Gotchi": "BRS +3, NRG +2",
        "Wraangler": "BRS +2, AGG +1",
        "Ranchero": "BRS +2, NRG -1",
        "Novice Shaaman": "BRS +5, NRG -3",
        "Shaaman Priest": "BRS +5, NRG -3",
        "Shaaman Mystic": "BRS +5, NRG -3",
        "Master Shaaman": "BRS +6, NRG -3",
        "WGMI Wagie ": "BRS +3, AGG -2",
        "YOLO Guy": "BRS +4, NRG -1, AGG -1",
        "Psychonaut": "BRS +7, NRG -3, BRN +1",
        "Tech Bro": "BRS +5, NRG -2, BRN +1",
        "Gunslinger": "BRS +3, AGG +2",
        "We Are Legion": "BRS +5, SPK +3",
        "Aastronaut": "BRS +1, SPK +1",
        "Geckogotchi": "BRS +2, NRG +1",
        "Super Geckogotchi": "BRS +3, SPK -1, BRN -1",
        "Lil Bubble": "BRS +4, NRG +2, AGG -1",
        "Radar": "BRS +5, AGG -1, BRN +2",
        "Laozigotchi": "BRS +6, NRG -2, BRN +1",
        "Wandering Sage": "BRS +7, NRG -2, BRN +2",
        "APY Visionary": "BRS +2, NRG +1",
        "Aarcher": "BRS +1, AGG -1",
        "Baarbarian": "BRS +2, AGG +1",
        "Raanger": "BRS +2, NRG -1",
        "Geisha": "BRS +3, AGG -2",
        "Fairy": "BRS +4, NRG -1, SPK -1",
        "Sus Fairy": "BRS +4, NRG -1, SPK -1",
        "Knight": "BRS +5, NRG +2, AGG -1",
        "Citaadel Knight": "BRS +5, NRG +1, AGG -2",
        "Bushidogotchi": "BRS +6, AGG +1, SPK +2",
        "Robin Hood": "BRS +2, NRG -1",
        "Nure-onna": "BRS +3, AGG -2",
        "Tinkerbell": "BRS +4, NRG -1, SPK -1",
        "Rave Gurl": "BRS +5, NRG -1, AGG +1, SPK -1",
        "Off Duty Knight": "BRS +5, NRG +1, SPK -2",
        "Daimyogotchi": "BRS +7, AGG +1, SPK +2, BRN -1",
        "Shogungotchi": "BRS +8, NRG -1, AGG +1, SPK +2, BRN -1",
        "Noble Savage": "BRS +2, AGG +1",
        "Elven Aarcher": "BRS +1, AGG -1",
        "Elven Raanger": "BRS +2, SPK -1",
        "Woodland Critter": "BRS +2, SPK -1",
        "Vacation Geisha": "BRS +4, AGG -2",
        "Tooth Fairy": "BRS +4, SPK -2",
        "Master Creatooor": "BRS +8, NRG +1, SPK -2, BRN -2",
        "Master Creator": "BRS +6, SPK -2, BRN -1",
        "FAKE Artist": "BRS +5, NRG -1, SPK -1, BRN -1",
        "Smithooor": "BRS +4, NRG -1, AGG -1",
        "Smithor": "BRS +4, NRG -1, AGG -1",
        "Carpentooor": "BRS +3, NRG +1, AGG +1",
        "Carpentor": "BRS +3, NRG +1, AGG +1",
        "Pixelcraftooor": "BRS +1, SPK -1",
        "Pixelcraftor": "BRS +1, SPK -1",
        "VRF Lord": "BRS +8, NRG +3, BRN +2",
        "ROFL Tamer": "BRS +8, NRG -3, BRN -2",
        "Jacob Maarley": "BRS +8, NRG +1, SPK +3, BRN -1",
        "Degen Gamblooor": "BRS +8, NRG -2, BRN +3",
        "Starlet": "BRS +1, NRG +1",
        "Engagement Farmer": "BRS +3, SPK -2",
        "Gotchidator": "BRS +3, AGG +1, SPK -1",
        "Sandbox Seb": "BRS +4, NRG +1, AGG -1",
    }
    
    with open('data/tables/sets.tsx', 'r') as f:
        content = f.read()
    
    # Replace each empty bonus
    for set_name, bonus in bonuses.items():
        # Simple string replacement for empty bonuses
        old_pattern = f'], ""),'
        new_pattern = f'], "{bonus}"),'
        
        # Find the specific set entry and replace its empty bonus
        lines = content.split('\n')
        new_lines = []
        
        i = 0
        while i < len(lines):
            line = lines[i]
            
            # Check if this line contains the set name
            if f'createSetEntry("{set_name}"' in line:
                # Find the closing line with empty bonus
                j = i
                while j < len(lines) and not ('], ""' in lines[j] or '], "' in lines[j]):
                    j += 1
                
                if j < len(lines) and '], ""' in lines[j]:
                    lines[j] = lines[j].replace('], ""', f'], "{bonus}"')
                    print(f"Updated {set_name}: {bonus}")
            
            i += 1
        
        content = '\n'.join(lines)
    
    with open('data/tables/sets.tsx', 'w') as f:
        f.write(content)
    
    print("✅ Bulk updated all set bonuses!")

if __name__ == "__main__":
    bulk_replace_bonuses()