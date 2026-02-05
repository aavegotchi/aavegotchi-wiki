#!/usr/bin/env python3
"""
Extract all set bonuses from original and apply them to current sets.tsx
"""

import re

def extract_all_bonuses():
    """Extract all set bonuses from original file"""
    import subprocess
    
    # Get original file content
    result = subprocess.run(['git', 'show', 'HEAD:data/tables/sets.tsx'], capture_output=True, text=True)
    if result.returncode != 0:
        print("Failed to get original file")
        return {}
    
    content = result.stdout
    bonuses = {}
    
    # Find all complete set entries
    lines = content.split('\n')
    for line in lines:
        line = line.strip()
        if '["' in line and '"],' in line and '`<img' in line:
            # Extract set name and bonus
            set_name_match = re.search(r'\["([^"]+)"', line)
            bonus_match = re.search(r'",\s*"([^"]+)"\]', line)
            
            if set_name_match and bonus_match:
                set_name = set_name_match.group(1)
                bonus = bonus_match.group(1)
                bonuses[set_name] = bonus
    
    return bonuses

def apply_bonuses_to_current_file():
    """Apply all bonuses to the current refactored file"""
    
    print("Extracting bonuses from original file...")
    bonuses = extract_all_bonuses()
    print(f"Found {len(bonuses)} set bonuses")
    
    # Show some examples
    for i, (name, bonus) in enumerate(list(bonuses.items())[:10]):
        print(f"  {name}: {bonus}")
    
    # Read current file
    with open('data/tables/sets.tsx', 'r') as f:
        content = f.read()
    
    # Apply bonuses
    updates_made = 0
    for set_name, bonus in bonuses.items():
        # Escape special regex characters in set name
        escaped_name = re.escape(set_name)
        
        # Pattern to find this set with empty bonus
        pattern = f'(createSetEntry\\("{escaped_name}",[^)]+\\), "")([,)])'
        replacement = f'\\1"{bonus}"\\2'
        
        new_content = re.sub(pattern, replacement, content)
        if new_content != content:
            content = new_content
            updates_made += 1
    
    # Write updated content
    with open('data/tables/sets.tsx', 'w') as f:
        f.write(content)
    
    print(f"✅ Applied {updates_made} set bonuses successfully!")

if __name__ == "__main__":
    apply_bonuses_to_current_file()