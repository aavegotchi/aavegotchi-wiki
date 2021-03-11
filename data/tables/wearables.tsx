

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
            tableName: "linkWearablesTable",
            tableCaption: "Link-Themed Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
                    [`<img src="/wearables/link/camo-cap.svg" alt = "aavegotchi chainlink camo cap"/>`, "1", "Camo Hat", "Common", "AGG +1", "1000", "head"],
                    [`<img src="/wearables/link/camo-pants.svg" alt = "aavegotchi chainlink camo pants" />`, "2", "Camo Pants", "Common", "AGG +1", "1000", "body"],
                    [`<img src="/wearables/link/mk2-grenade.svg" alt = "aavegotchi chainlink mk2 grenade" />`, "3", "MK2 Grenade", "Common", "AGG +1", "1000", "hands"],
                    [`<img src="/wearables/link/snow-camo-cap.svg"  alt = "aavegotchi chainlink snow camo cap" />`, "4", "Snow Camo Hat", "Uncommon", "AGG +1, SPK +1", "500", "head"],
                    [`<img src="/wearables/link/snow-camo-pants.svg" alt = "aavegotchi chainlink snow camo pants" />`, "5", "Snow Camo Pants", "Uncommon", "AGG +1, SPK +1", "500", "body"],
                    [`<img src="/wearables/link/m67-grenade.svg" alt = "aavegotchi chainlink m67 grenade" />`, "6", "M67 Grenade", "Uncommon", "AGG +2", "500", "hands"],
                    [`<img src="/wearables/link/marine-cap.svg" alt = "aavegotchi chainlink marine cap" />`, "7", "Marine Cap", "Rare", "AGG +2, BRN +1", "300", "head"],
                    [`<img src="/wearables/link/marine-suit.svg" alt = "aavegotchi chainlink marine suit" />`, "8", "Marine Jacket", "Rare", "AGG +2, BRN +1", "300", "body"],
                    [`<img src="/wearables/link/walkie-talkie.svg" alt = "aavegotchi chainlink walkie talkie" />`, "9", "Walkie Talkie", "Rare", "NRG +1, SPK +1, BRN +1", "300", "hands"],
                    [`<img src="/wearables/link/link-white-cap.svg" alt = "aavegotchi chainlink white cap" />`, "10", "Link White Hat", "Legendary", "AGG +2, BRN +2", "150", "head"],
                    [`<img src="/wearables/link/link-mess-dress.svg" alt = "aavegotchi chainlink mess dress" />`, "11", "Link Mess Dress", "Legendary", "AGG +2, BRN +2", "150", "body"],
                    [`<img src="/wearables/link/link-bubbly.svg" alt = "aavegotchi chainlink bubbly" />`, "12", "Link Bubbly", "Legendary", "NRG +2, BRN -2", "150", "hands"],
                    [`<img src="/wearables/link/sergey-beard.svg" alt = "aavegotchi chainlink sergey beard" />`, "13", "Sergey Beard", "Mythical", "NRG -1, AGG +1, BRN +3", "50", "face"],
                    [`<img src="/wearables/link/sergey-eyes.svg" alt = "aavegotchi chainlink sergey eyes" />`, "14", "Sergey Eyes", "Mythical", "SPK +1, BRN +4", "50", "eyes"],
                    [`<img src="/wearables/link/sergey-red.svg" alt = "aavegotchi chainlink red plaid" />`, "15", "Red Plaid", "Mythical", "NRG +3, AGG +2", "50", "body"],
                    [`<img src="/wearables/link/sergey-blue.svg" alt = "aavegotchi chainlink blue plaid" />`, "16", "Blue Plaid", "Godlike", "NRG -4, AGG -2", "5", "body"],
                    [`<img src="/wearables/link/link-cube.svg" alt = "aavegotchi chainlink cube"/>`, "17", "LINK Cube", "Godlike", "BRN +6", "5", "hands"],

                ]
            }
        },

        {
            tableName: "aaveWearablesTable",
            tableCaption: "Aave-Themed Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
                    [`<img src="/wearables/aave/hero-mask.svg" alt = "aavegotchi aave hero mask" />`, "18", "Aave Hero Mask", "Common", "SPK +1", "1000", "face"],
                    [`<img src="/wearables/aave/hero-shirt.svg" alt = "aavegotchi aave hero shirt" />`, "19", "Aave Hero Shirt", "Common", "SPK +1", "1000", "body"],
                    [`<img src="/wearables/aave/aave-plush-toy.svg" alt = "aavegotchi aave plush toy" />`, "20", "Aave Plush Toy", "Common", "SPK +1", "1000", "hands"],
                    [`<img src="/wearables/aave/captain-aave-mask.svg" alt = "aavegotchi aave captain aave mask" />`, "21", "Captain Aave Mask", "Uncommon", "NRG +1, SPK +1", "500", "head"],
                    [`<img src="/wearables/aave/captain-aave-suit.svg" alt = "aavegotchi aave captain aave suit" />`, "22", "Captain Aave Suit", "Uncommon", "NRG +1, SPK +1", "500", "body"],
                    [`<img src="/wearables/aave/captain-aave-shield.svg" alt = "aavegotchi aave captain aave shield" />`, "23", "Captain Aave Shield", "Uncommon", "NRG +2", "500", "hands"],
                    [`<img src="/wearables/aave/thaave-helmet.svg" alt = "aavegotchi aave thaave helmet" />`, "24", "Thaave Helmet", "Rare", "NRG +2, SPK +1", "250", "head"],
                    [`<img src="/wearables/aave/thaave-suit.svg" alt = "aavegotchi aave thaave suit" />`, "25", "Thaave Suit", "Rare", "NRG +2, SPK +1", "250", "body"],
                    [`<img src="/wearables/aave/thaave-hammer.svg" alt = "aavegotchi aave thaave hammer" />`, "26", "Thaave Hammer", "Rare", "NRG +3", "250", "hands"],
                    [`<img src="/wearables/aave/marc-hair.svg" alt = "aavegotchi aave marc hair" />`, "27", "Marc Hair", "Legendary", "NRG +2, AGG +2", "100", "head"],
                    [`<img src="/wearables/aave/marc-outfit.svg" alt = "aavegotchi aave marc outfit" />`, "28", "Marc Outfit", "Legendary", "NRG +2, AGG +2", "100", "body"],
                    [`<img src="/wearables/aave/rekt-sign.svg" alt = "aavegotchi aave rekt sign" />`, "29", "REKT Sign", "Legendary", "BRN -4", "100", "handLeft"],
                    [`<img src="/wearables/aave/jordan-hair.svg" alt = "aavegotchi aave jordan hair" />`, "30", "Jordan Hair", "Mythical", "AGG -2, SPK +3", "50", "head"],
                    [`<img src="/wearables/aave/jordan-suit.svg" alt = "aavegotchi aave jordan suit" />`, "31", "Jordan Suit", "Mythical", "NRG -3, SPK +1, BRN +1", "50", "body"],
                    [`<img src="/wearables/aave/aave-flag.svg" alt = "aavegotchi aave flag" />`, "32", "Aave Flag", "Mythical", "AGG -2, SPK +3", "50", "hands"],
                    [`<img src="/wearables/aave/stani-hair.svg" alt = "aavegotchi aave stani hair" />`, "33", "Stani Hair", "Godlike", "AGG -3, BRN +3", "5", "head"],
                    [`<img src="/wearables/aave/stani-lifejacket.svg" alt = "aavegotchi aave stani lifejacket"/>`, "34", "Stani Lifejacket", "Godlike", "NRG +3, AGG -3", "5", "body"],
                    [`<img src="/wearables/aave/aave-boat.svg" alt = "aavegotchi aave boat"/>`, "35", "Aave Boat", "Godlike", "AGG -6", "5", "pet"],

                ]
            }
        },
		
		{
            tableName: "ethereumWearablesTable",
            tableCaption: "Ethereum-Themed Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
                    [`<img src="/wearables/ethereum/ETH LOGO GLASSES.svg" alt = "aavegotchi ETH Logo Glasses" />`, "36", "ETH Logo Glasses", "Common", "BRN -1", "1000", "eyes"],
					[`<img src="/wearables/ethereum/ETH TSHIRT.svg" alt = "aavegotchi ETH T-Shirt" />`, "37", "ETH TShirt", "Common", "BRN -1", "1000", "body"],
					[`<img src="/wearables/ethereum/32 ETH COIN.svg" alt = "aavegotchi 32 ETH Coin" />`, "38", "32 ETH Coin", "Common", "BRN -1", "1000", "handLeft"],
					[`<img src="/wearables/ethereum/FOXY MASK.svg" alt = "aavegotchi Foxy Mask" />`, "39", "Foxy Mask", "Uncommon", "AGG -2", "500", "head"],
					[`<img src="/wearables/ethereum/FOXY TAIL.svg" alt = "aavegotchi Foxy Tail" />`, "40", "Foxy Tail", "Uncommon", "AGG -1, SPK -1", "500", "body"],
					[`<img src="/wearables/ethereum/TREZOR WALLET.svg" alt = "aavegotchi Trezor Wallet" />`, "41", "Trezor Wallet", "Uncommon", "NRG -1, AGG -1", "500", "hands"],
					[`<img src="/wearables/ethereum/EAGLE MASK.svg" alt = "aavegotchi Eagle Mask" />`, "42", "Eagle Mask", "Rare", "NRG +1, SPK +2", "250", "head"],
					[`<img src="/wearables/ethereum/NOGARA ARMOR.svg" alt = "aavegotchi Nogara Armor" />`, "43", "Nogara Armor", "Rare", "NRG +2, SPK +1", "250", "body"],
					[`<img src="/wearables/ethereum/DAO EGG.svg" alt = "aavegotchi DAO Egg" />`, "44", "DAO Egg", "Rare", "NRG +1, BRN +2", "250", "handLeft"],
					[`<img src="/wearables/ethereum/APE MASK.svg" alt = "aavegotchi Ape Mask" />`, "45", "Ape Mask", "Legendary", "AGG +1, BRN -3", "100", "head"],
					[`<img src="/wearables/ethereum/HALF REKT SHIRT.svg" alt = "aavegotchi Half Rekt Shirt" />`, "46", "Half Rekt Shirt", "Legendary", "NRG +1, AGG +1, BRN -2", "100", "body"],
					[`<img src="/wearables/ethereum/WAIFU PILLOW.svg" alt = "aavegotchi Waifu Pillow" />`, "47", "Waifu Pillow", "Legendary", "BRN -4", "100", "hands"],
					[`<img src="/wearables/ethereum/XIBOT MOHAWK.svg" alt = "aavegotchi Xibot Mohawk" />`, "48", "Xibot Mohawk", "Mythical", "NRG +5", "50", "head"],
					[`<img src="/wearables/ethereum/CODERDAN SHADES.svg" alt = "aavegotchi Coderdan Shades" />`, "49", "Coderdan Shades", "Mythical", "AGG +5", "50", "eyes"],
					[`<img src="/wearables/ethereum/GLDNXROSS ROBE.svg" alt = "aavegotchi GldnXross Robe" />`, "50", "GldnXross Robe", "Mythical", "SPK +5", "50", "body"],
					[`<img src="/wearables/ethereum/MUDGEN DIAMOND.svg" alt = "aavegotchi Mudgen Diamond" />`, "51", "Mudgen Diamond", "Mythical", "BRN +5", "50", "hands"],
					[`<img src="/wearables/ethereum/GALAXY BRAIN.svg" alt = "aavegotchi Galaxy Brain" />`, "52", "Galaxy Brain", "Godlike", "BRN +6", "5", "head"],
					[`<img src="/wearables/ethereum/ALL SEEING EYES.svg" alt = "aavegotchi All Seeing Eyes" />`, "53", "All Seeing Eyes", "Godlike", "NRG -6", "5", "eyes"],
					[`<img src="/wearables/ethereum/LLAMACORN SHIRT.svg" alt = "aavegotchi Llamacorn Shirt" />`, "54", "Llamacorn Shirt", "Godlike", "NRG -3, AGG -3", "5", "body"]
                ]
            }
        },
		
		{
            tableName: "aagentWearablesTable",
            tableCaption: "Aagent Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/55_AagentHeadset.svg" alt = "aavegotchi Aagent Headset"/>`, "55", "Aagent Headset", "Rare", "AGG +1, SPK +1, BRN +1", "", "face"],
				    [`<img src="/wearables/final wearables/56_AagentShirtFull.svg" alt = "aavegotchi Aagent Shirt"/>`, "56", "Aagent Shirt", "Rare", "NRG -1, AGG +1, SPK +1", "", "body"],					
				    [`<img src="/wearables/final wearables/57_AagentShades.svg" alt = "aavegotchi Aagent Shades"/>`, "57", "Aagent Shades", "Rare", "NRG -1, SPK +2", "", "eyes"],		
				    [`<img src="/wearables/final wearables/58_AagentPistol.svg" alt = "aavegotchi Aagent Pistol"/>`, "58", "Aagent Pistol", "Rare", "AGG +3", "", "hands"],		
				    [`<img src="/wearables/final wearables/59_AagentFedoraHat.svg" alt = "aavegotchi Aagent Fedora Hat"/>`, "59", "Aagent Fedora Hat", "Rare", "NRG -2, SPK +1", "", "head"]
				]
			}
		},

		{
            tableName: "wizardWearablesTable",
            tableCaption: "Wizard Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/60_WizardHat.svg" alt = "aavegotchi Common Wizard Hat"/>`, "60", "Common Wizard Hat", "Common", "BRN +1", "1000", "head"],
				    [`<img src="/wearables/final wearables/61_WizardHatLegendary.svg" alt = "aavegotchi Legendary Wizard Hat"/>`, "61", "Legendary Wizard Hat", "Legendary", "SPK +2, BRN +2", "125", "head"],
				    [`<img src="/wearables/final wearables/62_WizardHatMythical.svg" alt = "aavegotchi Mythical Wizard Hat"/>`, "62", "Mythical Wizard Hat", "Mythical", "SPK +2, BRN +3", "50", "head"],
				    [`<img src="/wearables/final wearables/63_WizardHatGodlike.svg" alt = "aavegotchi Godlike Wizard Hat"/>`, "63", "Godlike Wizard Hat", "Godlike", "SPK +2, BRN +4", "5", "head"],
				    [`<img src="/wearables/final wearables/64_WizardStaff.svg" alt = "aavegotchi Common Wizard Staff"/>`, "64", "Common Wizard Staff", "Common", "NRG +1", "1000", "hands"],
					[`<img src="/wearables/final wearables/65_WizardStaffLegendary.svg" alt = "aavegotchi Legendary Wizard Staff"/>`, "65", "Legendary Wizard Staff", "Legendary", "NRG +2, BRN +2", "125", "hands"],
					[`<img src="/wearables/final wearables/66_FutureWizardVisor.svg" alt = "aavegotchi Wizard Visor"/>`, "66", "Wizard Visor", "Common", "NRG +1", "1000", "eyes"]
				]
			}
		},
		
		{
            tableName: "farmerWearablesTable",
            tableCaption: "Farmer Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/67_FarmerStrawHat.svg" alt = "aavegotchi Farmer Straw Hat"/>`, "67", "Straw Hat", "Common", "NRG -1", "1000", "head"],
				    [`<img src="/wearables/final wearables/68_FarmerJeans.svg" alt = "aavegotchi Farmer Jeans"/>`, "68", "Farmer Jeans", "Common", "BRN -1", "1000", "body"],					
				    [`<img src="/wearables/final wearables/69_FarmerPitchfork.svg" alt = "aavegotchi Farmer Pitchfork"/>`, "69", "Pitchfork", "Common", "AGG +1", "1000", "hands"],		
				    [`<img src="/wearables/final wearables/70_FarmerHandsaw.svg" alt = "aavegotchi Farmer Handsaw"/>`, "70", "Handsaw", "Mythical", "AGG +3, BRN -2", "50", "hands"]
				]
			}
		},
		
		{
            tableName: "santaWearablesTable",
            tableCaption: "Santa Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/71_SantagotchiHat.svg" alt = "aavegotchi Santagotchi Hat"/>`, "71", "Red Santa Hat", "Rare", "AGG -1, SPK -2", "250", "head"]
				]
			}
		},
		
		{
            tableName: "okexWearablesTable",
            tableCaption: "OKex Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/72_JaayHairpiece.svg" alt = "aavegotchi Jaay Hairpiece"/>`, "72", "Jaay Hairpiece", "Mythical", "BRN -5", "30", "head"],
					[`<img src="/wearables/final wearables/73_JaayGlasses.svg" alt = "aavegotchi Jaay Glasses"/>`, "73", "Jaay Glasses", "Mythical", "NRG -2, AGG -2, BRN -1", "10", "eyes"],
					[`<img src="/wearables/final wearables/74_JaayHaoSuitFull.svg" alt = "aavegotchi Jaay Suit"/>`, "74", "Jaay Suit", "Mythical", "NRG -2, BRN -3", "20", "body"],
					[`<img src="/wearables/final wearables/75_OKexSign.svg" alt = "aavegotchi OKex Sign"/>`, "75", "OKex Sign", "Mythical", "NRG -5", "40", "hands"],
					[`<img src="/wearables/final wearables/76_BigGHSTToken.svg" alt = "aavegotchi Big GHST Token"/>`, "76", "Big GHST Token", "Common", "BRN +1", "1000", "hands"],
				]
			}
		},
		
		{
            tableName: "skaterWearablesTable",
            tableCaption: "Skater Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/77_BitcoinBeanie.svg" alt = "aavegotchi Bitcoin Beanie"/>`, "77", "Bitcoin Beanie", "Uncommon", "NRG +1, BRN -1", "500", "head"],
					[`<img src="/wearables/final wearables/78_SkaterJeans.svg" alt = "aavegotchi Black Jeans"/>`, "78", "Black Jeans", "Uncommon", "AGG +1, BRN -1", "500", "body"],
					[`<img src="/wearables/final wearables/79_Skateboard.svg" alt = "aavegotchi Skateboard"/>`, "79", "Skateboard", "Rare", "NRG +1, BRN -2", "250", "hands"]
				]
			}
		},
		
		{
            tableName: "sushiWearablesTable",
            tableCaption: "Sushi Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/80_SushiHeadband.svg" alt = "aavegotchi Sushi Bandana"/>`, "80", "Sushi Bandana", "Rare", "NRG -1, AGG +2", "250", "head"],
					[`<img src="/wearables/final wearables/81_SushiRobe.svg" alt = "aavegotchi Sushi Coat"/>`, "81", "Sushi Coat", "Rare", "NRG -2, AGG +1", "250", "body"],
					[`<img src="/wearables/final wearables/82_SushiRoll.svg" alt = "aavegotchi Sushi Piece"/>`, "82", "Sushi Piece", "Legendary", "SPK -4", "125", "hands"],
					[`<img src="/wearables/final wearables/83_SushiKnife.svg" alt = "aavegotchi Sushi Knife"/>`, "83", "Sushi Knife", "Rare", "AGG +3", "250", "hands"]
				]
			}
		},
		
		{
            tableName: "gentlemanWearablesTable",
            tableCaption: "Gentleman Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/84_GentlemanHat.svg" alt = "aavegotchi Gentleman Hat"/>`, "84", "Gentleman Hat", "Legendary", "NRG -1, AGG -3", "125", "head"],
					[`<img src="/wearables/final wearables/85_GentlemanSuitFull.svg" alt = "aavegotchi Gentleman Coat"/>`, "85", "Genteman Coat", "Legendary", "NRG -1, AGG -3", "125", "body"],
					[`<img src="/wearables/final wearables/86_GentlemanMonocle.svg" alt = "aavegotchi Gentleman Monocle"/>`, "86", "Monocle", "Mythical", "AGG -2, BRN +3", "50", "eyes"]
				]
			}
		},
		
		{
            tableName: "minerWearablesTable",
            tableCaption: "Miner Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/87_MinerHelmet.svg" alt = "aavegotchi Miner Helmet"/>`, "87", "Miner Helmet", "Uncommon", "NRG +1, BRN -1", "500", "head"],
					[`<img src="/wearables/final wearables/88_MinerJeans.svg" alt = "aavegotchi Miner Jeans"/>`, "88", "Miner Jeans", "Uncommon", "NRG +1, BRN -1", "500", "body"],
					[`<img src="/wearables/final wearables/89_MinerPickaxe.svg" alt = "aavegotchi Miner Pickaxe"/>`, "89", "Pickaxe", "Rare", "NRG +1, AGG +2", "250", "hands"]
				]
			}
		},
		
		{
            tableName: "pajamasWearablesTable",
            tableCaption: "Pajamas Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/90_PajamaHat.svg" alt = "aavegotchi Pajama Hat"/>`, "90", "Pajama Hat", "Common", "SPK -1", "1000", "head"],
					[`<img src="/wearables/final wearables/91_PajamaPantsFull.svg" alt = "aavegotchi Pajama Shirt"/>`, "91", "Pajama Shirt", "Uncommon", "AGG -1, SPK -1", "500", "body"],
					[`<img src="/wearables/final wearables/92_BedtimeMilk.svg" alt = "aavegotchi Bedtime Milk"/>`, "92", "Bedtime Milk", "Rare", "AGG -2, SPK -1", "250", "hands"],
					[`<img src="/wearables/final wearables/93_FluffyBlanket.svg" alt = "aavegotchi Fluffy Pillow"/>`, "93", "Fluffy Pillow", "Legendary", "SPK -4", "125", "hands"]
				]
			}
		},
		
		{
            tableName: "runnerWearablesTable",
            tableCaption: "Runner Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/94_RunnerSweatband.svg" alt = "aavegotchi Sweatband"/>`, "94", "Sweatband", "Uncommon", "NRG +2", "500", "head"],
					[`<img src="/wearables/final wearables/95_RunnerShorts.svg" alt = "aavegotchi Track Shorts"/>`, "95", "Track Shorts", "Uncommon", "NRG +1, BRN -1", "500", "body"],
					[`<img src="/wearables/final wearables/96_WaterBottle.svg" alt = "aavegotchi Water Bottle"/>`, "96", "Water bottle", "Uncommon", "NRG +2", "500", "hands"]
				]
			}
		},
		
		{
            tableName: "ladyWearablesTable",
            tableCaption: "Lady Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/97_PillboxHat.svg" alt = "aavegotchi Pillbox Hat"/>`, "97", "Pillbox Hat", "Legendary", "NRG +1, AGG -1, SPK -2", "125", "head"],
					[`<img src="/wearables/final wearables/98_LadySkirt.svg" alt = "aavegotchi Day Dress"/>`, "98", "Day Dress", "Legendary", "NRG +1, AGG -1, SPK -2", "125", "body"],
					[`<img src="/wearables/final wearables/99_LadyParasol.svg" alt = "aavegotchi Parasol"/>`, "99", "Parasol", "Mythical", "NRG +1, AGG -1, SPK -3", "50", "hands"],
					[`<img src="/wearables/final wearables/100_LadyClutch.svg" alt = "aavegotchi Clutch"/>`, "100", "Clutch", "Legendary", "NRG +1, AGG -1, SPK -2", "125", "hands"]
				]
			}
		},
		
		{
            tableName: "witchyWearablesTable",
            tableCaption: "Witchy Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/101_WitchHat.svg" alt = "aavegotchi Witchy Hat"/>`, "101", "Witchy Hat", "Legendary", "AGG +1, SPK +3", "125", "head"],
					[`<img src="/wearables/final wearables/102_WitchCapeFull.svg" alt = "aavegotchi Witchy Cloak"/>`, "102", "Witchy Cloak", "Legendary", "AGG +1, SPK +3", "125", "body"],
					[`<img src="/wearables/final wearables/103_WitchWand.svg" alt = "aavegotchi Witchy Wand"/>`, "103", "Witchy Wand", "Mythical", "AGG +2, SPK +2, BRN +1", "50", "hands"]
				]
			}
		},
		
		{
            tableName: "portalWearablesTable",
            tableCaption: "Portal Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/104_PortalMageHelmet.svg" alt = "aavegotchi Portal Mage Helmet"/>`, "104", "Portal Mage Helmet", "Legendary", "NRG +2, AGG +1, SPK +1", "125", "head"],
					[`<img src="/wearables/final wearables/105_PortalMageArmorFull.svg" alt = "aavegotchi Portal Mage Armor"/>`, "105", "Portal Mage Armor", "Legendary", "NRG +1, AGG +2, SPK +2", "125", "body"],
					[`<img src="/wearables/final wearables/106_PortalMageAxe.svg" alt = "aavegotchi Portal Mage Axe"/>`, "106", "Portal Mage Axe", "Legendary", "AGG +4", "125", "hands"],
					[`<img src="/wearables/final wearables/107_PortalMageBlackAxe.svg" alt = "aavegotchi Portal Mage Black Axe"/>`, "107", "Portal Mage Black Axe", "Godlike", "AGG +6", "5", "hands"]
				]
			}
		},
		
		{
            tableName: "rastaWearablesTable",
            tableCaption: "Rasta Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/108_RastaDreds.svg" alt = "aavegotchi Rasta Hat"/>`, "108", "Rasta Hat", "Uncommon", "NRG -1, AGG -1", "500", "head"],
					[`<img src="/wearables/final wearables/109_RastaShirtFull.svg" alt = "aavegotchi Rasta Shirt"/>`, "109", "Rasta Shirt", "Uncommon", "NRG -1, AGG -1", "500", "body"],
					[`<img src="/wearables/final wearables/110_JamaicanFlag.svg" alt = "aavegotchi Jamaican Flag"/>`, "110", "Jamaican Flag", "Rare", "NRG -1, AGG -2", "250", "hands"]
				]
			}
		},
		
		{
            tableName: "hazmatWearablesTable",
            tableCaption: "Hazmat Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/111_HazmatHood.svg" alt = "aavegotchi Hazmat Hood"/>`, "111", "Hazmat Hood", "Legendary", "NRG +1, AGG -1, SPK +2", "125", "head"],
					[`<img src="/wearables/final wearables/112_HazmatSuitFull.svg" alt = "aavegotchi Hazmat Suit"/>`, "112", "Hazmat Suit", "Legendary", "NRG +2, AGG -1, SPK +1", "125", "body"],
					[`<img src="/wearables/final wearables/113_UraniumRod.svg" alt = "aavegotchi Uranium Rod"/>`, "113", "Uranium Rod", "Godlike", "NRG +6", "5", "hands"]
				]
			}
		},
		
		{
            tableName: "vacationWearablesTable",
            tableCaption: "Vacation Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/114_RedHawaiianShirtFull.svg" alt = "aavegotchi Red Hawaiian Shirt"/>`, "114", "Red Hawaiian Shirt", "Mythical", "NRG -3, AGG -2", "50", "body"],
					[`<img src="/wearables/final wearables/115_BlueHawaiianShirtFull.svg" alt = "aavegotchi Blue Hawaiian Shirt"/>`, "115", "Blue Hawaiian Shirt", "Legendary", "NRG -2, AGG -2", "125", "body"],
					[`<img src="/wearables/final wearables/116_Coconut.svg" alt = "aavegotchi Coconut"/>`, "116", "Coconut", "Rare", "SPK -3", "250", "hands"],
					[`<img src="/wearables/final wearables/117_DealWithItShades.svg" alt = "aavegotchi Cool shades"/>`, "117", "Cool shades", "Common", "BRN -1", "1000", "eyes"]
				]
			}
		},
		
		{
            tableName: "independentDrinksTable",
            tableCaption: "Independent Drink Items",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/118_WaterJug.svg" alt = "aavegotchi Water Jug"/>`, "118", "Water Jug", "Legendary", "NRG +2, BRN +2", "125", "hands"],
					[`<img src="/wearables/final wearables/119_BabyBottle.svg" alt = "aavegotchi Baby Bottle"/>`, "119", "Baby Bottle", "Legendary", "AGG -1, SPK -3", "125", "hands"],
					[`<img src="/wearables/final wearables/120_Martini.svg" alt = "aavegotchi Martini"/>`, "120", "Martini", "Legendary", "NRG -1, BRN -3", "125", "hands"],
					[`<img src="/wearables/final wearables/121_WineBottle.svg" alt = "aavegotchi Wine"/>`, "121", "Wine", "Rare", "BRN -3", "250", "hands"],
					[`<img src="/wearables/final wearables/122_Milkshake.svg" alt = "aavegotchi Milkshake"/>`, "122", "Milkshake", "Mythical", "SPK -5", "50", "hands"],
					[`<img src="/wearables/final wearables/123_AppleJuice.svg" alt = "aavegotchi Apple Juice"/>`, "123", "Apple Juice", "Uncommon", "SPK -2", "500", "hands"]
				]
			}
		},
		
		{
            tableName: "independentHeadTable",
            tableCaption: "Independent Head Items",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/124_BeerHelmet.svg" alt = "aavegotchi Beer Helmet"/>`, "124", "Beer Helmet", "Mythical", "BRN -5", "50", "head"]
				]
			}
		},
		
		{
            tableName: "independentBodyTable",
            tableCaption: "Independent Body Items",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/125_TrackSuitFull.svg" alt = "aavegotchi Track Suit"/>`, "125", "Track Suit", "Legendary", "NRG +2, AGG +2", "125", "body"]
				]
			}
		},
		
		{
            tableName: "consumablesTable",
            tableCaption: "Consumables",
            tableData: {
                headers: ["Image", "ID", "Name", "Stats", "Quantity"],
                data: [
				    [`<img src="/wearables/final wearables/126_KinshipPotion.svg" alt = "aavegotchi Kinship Potion"/>`, "126", "Kinship Potion", "+2 to Kinship", "500"],
					[`<img src="/wearables/final wearables/127_GreaterKinshipPotion.svg" alt = "aavegotchi Greater Kinship Potion"/>`, "127", "Greater Kinship Potion", "+10 to Kinship", "250"],
					[`<img src="/wearables/final wearables/128_XPPotion.svg" alt = "aavegotchi XP Potion"/>`, "128", "XP Potion", "+20 to XP", "500"],
					[`<img src="/wearables/final wearables/129_GreaterXPPotion.svg" alt = "aavegotchi Greater XP Potion"/>`, "129", "Greater XP Potion", "+50 to XP", "250"]
				]
			}
		},
		

        {
            tableName: "wearablesBRStable",
            tableCaption: "Wearable Rarity and BRS Bonus",
            tableData: {
                headers: ["Rarity Type", "Quantity", "BRS Bonus"],
                data: [
                    ["Common", "1000+", "+1"],
                    ["Uncommon", "500-999", "+2"],
                    ["Rare", "250-499", "+5"],
                    ["Legendary", "100-249", "+10"],
                    ["Mythical", "10-99", "+20"],
                    ["Godlike", "1-9", "+50"],

                ]
            }
        },
    ]
