

interface Table {
    tableName: string
    tableData: TableData[]
}

interface TableData {
    headers: any
    data: any
}

export const tables
    = [
        {
            tableName: "sets",
            tableCaption: "Sets",
            tableData: {
                headers: ["Set", "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Set Bonus"],
                data: [ 
					["Infantry", "Camo Hat", "Camo Pants", "MK2 Grenade", "-", "-", "BRS +1, AGG +1"],
					["Trooper", "Snow Camo Hat", "Snow Camo Pants", "M67 Grenade", "-", "-", "BRS +2, AGG +1"],
					["Sergeant", "Marine Cap", "Marine Jacket", "Walkie Talkie", "-", "-", "BRS +3, AGG +2"],
					["General", "Link White Hat", "Mess Dress", "Link Bubbly", "-", "-", "BRS +4, AGG +2"],
					["Mythical Sergey", "Sergey Beard", "Sergey Eyes", "Red Plaid", "-", "-", "BRS +5, AGG +3"],
					["Godlike Sergey", "Sergey Beard", "Sergey Eyes", "Blue Plaid", "-", "-", "BRS +6, AGG +3"],
					["Apex Sergey", "Sergey Beard", "Sergey Eyes", "Blue Plaid", "LINK Cube", "-", "BRS +6, NRG +1, AGG +3"],
					["Aave Hero", "Aave Hero Mask", "Aave Hero Shirt", "Aave Plush", "-", "-", "BRS +1, SPK +1"],
					["Captain Aave", "Captain Aave Mask", "Captain Aave Suit", "Captain Aave Shield", "-", "-", "BRS +2, SPK +1"],
					["Thaave", "Thaave Helmet", "Thaave Outfit", "Thaave Hammer", "-", "-", "BRS +3, NRG +2"],
					["Marc", "Marc Hair", "Marc Outfit", "REKT Sign", "-", "-", "BRS +4, NRG +2"],
					["Jordan", "Jordan Hair", "Jordan Suit", "Aave Flag", "-", "-", "BRS +5, SPK +3"],
					["Godlike Stani", "Stani Hair", "Stani Vest", "Aave Boat", "-", "-", "BRS +6, AGG -3"],
					["Apex Stani", "Stani Hair", "Stani Vest", "Aave Boat", "Aave Flag", "-", "BRS +6, NRG +1, AGG -3"],
					["ETH Maxi", "ETH Logo Glasses", "ETH Tshirt", "32 ETH Coin", "-", "-", "BRS +1, BRN -1"],
					["Foxy Meta", "Foxy Mask", "Foxy Tail", "Trezor Wallet", "-", "-", "BRS +2, AGG -1"],
					["Nogara the Eagle", "Eagle Mask", "Eagle Armor", "DAO Egg", "-", "-", "BRS +3, NRG +2"],
					["DeFi Degen", "Ape Mask", "Halfrekt Shirt", "Waifu Pillow", "-", "-", "BRS +4, BRN -2"],
					["DAO Summoner", "Xibot Mohawk", "Coderdan Shades", "GldnXross Robe", "Mudgen Diamond", "-", "BRS +5, BRN +3"],
					["Vitalik Visionary", "Galaxy Brain", "All-Seeing Eyes", "Llamacorn Shirt", "-", "-", "BRS +6, NRG -3"],
					["Apex Vitalik Visionary", "Mudgen Diamond", "Galaxy Brain", "All-Seeing Eyes", "Llamacorn Shirt", "-", "BRS +7, NRG -3, BRN +1"],
					["Super Aagent", "Aagent Headset", "Aagent Shirt", "Aagent Shades", "Aagent Pistol", "Aagent Fedora Hat", "BRS +4, NRG -1, SPK +2"],
					["Aagent", "Aagent Headset", "Aagent Shirt", "Aagent Shades", "-", "-", "BRS +3, NRG -1, SPK +1"],
					["Aagent", "Aagent Headset", "Aagent Shirt", "Aagent Shades", "Aagent Pistol", "-", "BRS +3, NRG -1, SPK +2"],
					["Wizard", "Wizard Hat", "Wizard Staff", "Wizard Visor", "-", "-", "BRS +1, NRG +1"],
					["Wizard", "Wizard Hat Legendary", "Wizard Staff", "Wizard Visor", "-", "-", "BRS +1, NRG +1"],
					["Wizard", "Wizard Hat Mythical", "Wizard Staff", "Wizard Visor", "-", "-", "BRS +1, NRG +1"],
					["Wizard", "Wizard Hat Godlike", "Wizard Staff", "Wizard Visor", "-", "-", "BRS +1, NRG +1"],
					["Wizard", "Wizard Hat", "Wizard Staff Legendary", "Wizard Visor", "-", "-", "BRS +1, NRG +1"],
					["Legendary Wizard", "Wizard Hat Legendary", "Wizard Staff Legendary", "Wizard Visor", "-", "-", "BRS +4, NRG +1, BRN +1"],
					["Mythical Wizard", "Wizard Hat Mythical", "Wizard Staff Legendary", "Wizard Visor", "-", "-", "BRS +5, NRG +1, BRN +2"],
					["Godlike Wizard", "Wizard Hat Godlike", "Wizard Staff Legendary", "Wizard Visor", "-", "-", "BRS +6, NRG +1, BRN +2"],
					["Farmer", "Straw Hat", "Farmer Jeans", "Pitchfork", "-", "-", "BRS +1, NRG -1"],
					["Mythical Farmer", "Straw Hat", "Farmer Jeans", "Handsaw", "-", "-", "BRS +5, NRG -2, BRN -1"],
					["OKex Jaay", "Jaay Hairpiece", "Jaay Glasses", "Jaay Suit", "-", "-", "BRS +5, NRG -1, BRN -2"],
					["OKex Jaay Hao", "Jaay Hairpiece", "Jaay Glasses", "Jaay Suit", "OKexSign", "-", "BRS +5, NRG -1, BRN -2"],
					["Skater", "Bitcoin Beanie", "Black Jeans", "Skateboard", "-", "-", "BRS +2, BRN -1"],
					["Sushi Chef", "Sushi Bandana", "Sushi Coat", "Sushi Knife", "-", "-", "BRS +3, AGG +2"],
					["Sushi Chef", "Sushi Bandana", "Sushi Coat", "Sushi Piece", "-", "-", "BRS +4, AGG +2"],
					["Master Sushi Chef", "Sushi Bandana", "Sushi Coat", "Sushi Knife", "Sushi Piece", "-", "BRS +4, AGG +2, SPK -1"],
					["Gentleman", "Gentleman Hat", "Gentleman Coat", "Monocle", "-", "-", "BRS +4, AGG -2"],
					["Miner", "Miner Helmet", "Miner Jeans", "Pickaxe", "-", "-", "BRS +2, NRG +1"],
					["Pajamas", "Pajama Hat", "Pajama Shirt", "Bedtime Milk", "-", "-", "BRS +3, SPK -2"],
					["Pajamas", "Pajama Hat", "Pajama Shirt", "Fluffy Pillow", "-", "-", "BRS +3, SPK -2"],
					["Full Pajamas", "Pajama Hat", "Pajama Shirt", "Bedtime Milk", "Fluffy Pillow", "-", "BRS +4, SPK -3"],
					["Runner", "Sweatband", "Track Shorts", "Water Bottle", "-", "-", "BRS +2, NRG +1"],
					["Runner", "Sweatband", "Track Shorts", "Water Jug", "-", "-", "BRS +2, NRG +1"],
					["Runner", "Sweatband", "Track Suit", "Water Bottle", "-", "-", "BRS +2, NRG +1"],
					["Long Distance Runner", "Sweatband", "Track Suit", "Water Jug", "-", "-", "BRS +4, NRG +2"],
					["Lady", "Pillbox Hat", "Day Dress", "Clutch", "-", "-", "BRS +4, SPK -2"],
					["Lady", "Pillbox Hat", "Day Dress", "Parasol", "-", "-", "BRS +4, SPK -2"],
					["Socialite", "Pillbox Hat", "Day Dress", "Parasol", "Clutch", "-", "BRS +5, NRG +2, SPK -1"],
					["Witchy", "Witchy Hat", "Witchy Cloak", "Witchy Wand", "-", "-", "BRS +5, SPK +3"],
					["Portal Mage", "Portal Mage Helmet", "Portal Mage Armor", "Portal Mage Axe", "-", "-", "BRS +4, AGG +2"],
					["Supreme Portal Mage", "Portal Mage Helmet", "Portal Mage Armor", "Portal Mage Black Axe", "-", "-", "BRS +6, AGG +3"],
					["Rastafarian", "Rasta Hat", "Rasta Shirt", "Jamaican Flag", "-", "-", "BRS +3, AGG -2"],
					["Off Duty Hazmat", "Hazmat Hood", "Hazmat Suit", "Apple Juice", "-", "-", "BRS +4, NRG +2"],
					["On Duty Hazmat", "Hazmat Hood", "Hazmat Suit", "Uranium Rod", "-", "-", "BRS +6, NRG +3"],
					["Blue Vacationer", "Aloha Shirt Blue", "Coconut", "Cool Shades", "-", "-", "BRS +4, NRG -2"],
					["Red Vacationer", "Aloha Shirt Red", "Coconut", "Cool Shades", "-", "-", "BRS +5, NRG -2, SPK -1"]
                ]
            }
        }
    ]
