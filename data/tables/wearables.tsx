

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
                    [`<img src="/wearables/link/camo-cap.svg" alt="aavegotchi chainlink camo cap" title="Camo Hat"/>`, "1", "Camo Hat", "Common", "AGG +1", "1000", "head"],
                    [`<img src="/wearables/link/camo-pants.svg" alt="aavegotchi chainlink camo pants" title="Camo Pants"/>`, "2", "Camo Pants", "Common", "AGG +1", "1000", "body"],
                    [`<img src="/wearables/link/mk2-grenade.svg" alt="aavegotchi chainlink mk2 grenade" title="MK2 Grenade"/>`, "3", "MK2 Grenade", "Common", "AGG +1", "1000", "hands"],
                    [`<img src="/wearables/link/snow-camo-cap.svg"  alt="aavegotchi chainlink snow camo cap" title="Snow Camo Hat"/>`, "4", "Snow Camo Hat", "Uncommon", "AGG +1, SPK +1", "500", "head"],
                    [`<img src="/wearables/link/snow-camo-pants.svg" alt="aavegotchi chainlink snow camo pants" title="Snow Camo Pants"/>`, "5", "Snow Camo Pants", "Uncommon", "AGG +1, SPK +1", "500", "body"],
                    [`<img src="/wearables/link/m67-grenade.svg" alt="aavegotchi chainlink m67 grenade" title="M67 Grenade"/>`, "6", "M67 Grenade", "Uncommon", "AGG +2", "500", "hands"],
                    [`<img src="/wearables/link/marine-cap.svg" alt="aavegotchi chainlink marine cap" title="Marine Cap"/>`, "7", "Marine Cap", "Rare", "AGG +2, BRN +1", "300", "head"],
                    [`<img src="/wearables/link/marine-suit.svg" alt="aavegotchi chainlink marine suit" title="Marine Jacket"/>`, "8", "Marine Jacket", "Rare", "AGG +2, BRN +1", "300", "body"],
                    [`<img src="/wearables/link/walkie-talkie.svg" alt="aavegotchi chainlink walkie talkie" title="Walkie Talkie"/>`, "9", "Walkie Talkie", "Rare", "NRG +1, SPK +1, BRN +1", "300", "hands"],
                    [`<img src="/wearables/link/link-white-cap.svg" alt="aavegotchi chainlink white cap" title="Link White Hat"/>`, "10", "Link White Hat", "Legendary", "AGG +2, BRN +2", "150", "head"],
                    [`<img src="/wearables/link/link-mess-dress.svg" alt="aavegotchi chainlink mess dress" title="Link Mess Dress"/>`, "11", "Link Mess Dress", "Legendary", "AGG +2, BRN +2", "150", "body"],
                    [`<img src="/wearables/link/link-bubbly.svg" alt="aavegotchi chainlink bubbly" title="Link Bubbly"/>`, "12", "Link Bubbly", "Legendary", "NRG +2, BRN -2", "150", "hands"],
                    [`<img src="/wearables/link/sergey-beard.svg" alt="aavegotchi chainlink sergey beard" title="Sergey Beard"/>`, "13", "Sergey Beard", "Mythical", "NRG -1, AGG +1, BRN +3", "50", "face"],
                    [`<img src="/wearables/link/sergey-eyes.svg" alt="aavegotchi chainlink sergey eyes" title="Sergey Eyes"/>`, "14", "Sergey Eyes", "Mythical", "SPK +1, BRN +4", "50", "eyes"],
                    [`<img src="/wearables/link/sergey-red.svg" alt="aavegotchi chainlink red plaid" title="Red Plaid"/>`, "15", "Red Plaid", "Mythical", "NRG +3, AGG +2", "50", "body"],
                    [`<img src="/wearables/link/sergey-blue.svg" alt="aavegotchi chainlink blue plaid" title="Blue Plaid"/>`, "16", "Blue Plaid", "Godlike", "NRG -4, AGG -2", "5", "body"],
                    [`<img src="/wearables/link/link-cube.svg" alt="aavegotchi chainlink cube" title="LINK Cube"/>`, "17", "LINK Cube", "Godlike", "BRN +6", "5", "hands"],

                ]
            }
        },

        {
            tableName: "aaveWearablesTable",
            tableCaption: "Aave-Themed Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
                    [`<img src="/wearables/aave/hero-mask.svg" alt="aavegotchi aave hero mask" title="Aave Hero Mask"/>`, "18", "Aave Hero Mask", "Common", "SPK +1", "1000", "face"],
                    [`<img src="/wearables/aave/hero-shirt.svg" alt="aavegotchi aave hero shirt" title="Aave Hero Shirt"/>`, "19", "Aave Hero Shirt", "Common", "SPK +1", "1000", "body"],
                    [`<img src="/wearables/aave/aave-plush-toy.svg" alt="aavegotchi aave plush toy" title="Aave Plush Toy"/>`, "20", "Aave Plush Toy", "Common", "SPK +1", "1000", "hands"],
                    [`<img src="/wearables/aave/captain-aave-mask.svg" alt="aavegotchi aave captain aave mask" title="Captain Aave Mask"/>`, "21", "Captain Aave Mask", "Uncommon", "NRG +1, SPK +1", "500", "head"],
                    [`<img src="/wearables/aave/captain-aave-suit.svg" alt="aavegotchi aave captain aave suit" title="Captain Aave Suit"/>`, "22", "Captain Aave Suit", "Uncommon", "NRG +1, SPK +1", "500", "body"],
                    [`<img src="/wearables/aave/captain-aave-shield.svg" alt="aavegotchi aave captain aave shield" title="Captain Aave Shield"/>`, "23", "Captain Aave Shield", "Uncommon", "NRG +2", "500", "hands"],
                    [`<img src="/wearables/aave/thaave-helmet.svg" alt= aavegotchi aave thaave helmet" title="Thaave Helmet"/>`, "24", "Thaave Helmet", "Rare", "NRG +2, SPK +1", "250", "head"],
                    [`<img src="/wearables/aave/thaave-suit.svg" alt="aavegotchi aave thaave suit" title="Thaave Suit"/>`, "25", "Thaave Suit", "Rare", "NRG +2, SPK +1", "250", "body"],
                    [`<img src="/wearables/aave/thaave-hammer.svg" alt="aavegotchi aave thaave hammer" title="Thaave Hammer"/>`, "26", "Thaave Hammer", "Rare", "NRG +3, BRN +1", "250", "hands"],
                    [`<img src="/wearables/aave/marc-hair.svg" alt="aavegotchi aave marc hair" title="Marc Hair"/>`, "27", "Marc Hair", "Legendary", "NRG +2, AGG +2", "100", "head"],
                    [`<img src="/wearables/aave/marc-outfit.svg" alt="aavegotchi aave marc outfit" title="Marc Outfit"/>`, "28", "Marc Outfit", "Legendary", "NRG +2, AGG +2", "100", "body"],
                    [`<img src="/wearables/aave/rekt-sign.svg" alt="aavegotchi aave rekt sign" title="REKT Sign"/>`, "29", "REKT Sign", "Legendary", "BRN -4", "100", "right hand"],
                    [`<img src="/wearables/aave/jordan-hair.svg" alt="aavegotchi aave jordan hair" title="Jordan Hair"/>`, "30", "Jordan Hair", "Mythical", "AGG -2, SPK +3", "50", "head"],
                    [`<img src="/wearables/aave/jordan-suit.svg" alt="aavegotchi aave jordan suit" title="Jordan Suit"/>`, "31", "Jordan Suit", "Mythical", "NRG -3, SPK +1, BRN +1", "50", "body"],
                    [`<img src="/wearables/aave/aave-flag.svg" alt="aavegotchi aave flag" title="Aave Flag"/>`, "32", "Aave Flag", "Mythical", "AGG -2, SPK +3", "50", "hands"],
                    [`<img src="/wearables/aave/stani-hair.svg" alt="aavegotchi aave stani hair" title="Stani Hair"/>`, "33", "Stani Hair", "Godlike", "AGG -3, BRN +3", "5", "head"],
                    [`<img src="/wearables/aave/stani-lifejacket.svg" alt="aavegotchi aave stani lifejacket" title="Stani Lifejacket"/>`, "34", "Stani Lifejacket", "Godlike", "NRG +3, AGG -3", "5", "body"],
                    [`<img src="/wearables/aave/aave-boat.svg" alt="aavegotchi aave boat" title="Aave Boat"/>`, "35", "Aave Boat", "Godlike", "AGG -6", "5", "pet"],

                ]
            }
        },
		
		{
            tableName: "ethereumWearablesTable",
            tableCaption: "Ethereum-Themed Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
                    [`<img src="/wearables/ethereum/ETH LOGO GLASSES.svg" alt="aavegotchi ETH Logo Glasses" title="ETH Logo Glasses"/>`, "36", "ETH Logo Glasses", "Common", "BRN -1", "1000", "eyes"],
					[`<img src="/wearables/ethereum/ETH TSHIRT.svg" alt="aavegotchi ETH T-Shirt" title="ETH TShirt"/>`, "37", "ETH TShirt", "Common", "BRN -1", "1000", "body"],
					[`<img src="/wearables/ethereum/32 ETH COIN.svg" alt="aavegotchi 32 ETH Coin" title="32 ETH Coin"/>`, "38", "32 ETH Coin", "Common", "BRN -1", "1000", "right hand"],
					[`<img src="/wearables/ethereum/FOXY MASK.svg" alt="aavegotchi Foxy Mask" title="Foxy Mask"/>`, "39", "Foxy Mask", "Uncommon", "AGG -2", "500", "head"],
					[`<img src="/wearables/ethereum/FOXY TAIL.svg" alt="aavegotchi Foxy Tail" title="Foxy Tail"/>`, "40", "Foxy Tail", "Uncommon", "AGG -1, SPK -1", "500", "pet"],
					[`<img src="/wearables/ethereum/TREZOR WALLET.svg" alt="aavegotchi Trezor Wallet" title="Trezor Wallet"/>`, "41", "Trezor Wallet", "Uncommon", "NRG -1, AGG -1", "500", "hands"],
					[`<img src="/wearables/ethereum/EAGLE MASK.svg" alt="aavegotchi Eagle Mask" title="Eagle Mask"/>`, "42", "Eagle Mask", "Rare", "NRG +1, SPK +2", "250", "head"],
					[`<img src="/wearables/ethereum/NOGARA ARMOR.svg" alt="aavegotchi Nogara Armor" title="Nogara Armor"/>`, "43", "Nogara Armor", "Rare", "NRG +2, SPK +1", "250", "body"],
					[`<img src="/wearables/ethereum/DAO EGG.svg" alt="aavegotchi DAO Egg" title="DAO Egg"/>`, "44", "DAO Egg", "Rare", "NRG +1, BRN +2", "250", "right hand"],
					[`<img src="/wearables/ethereum/APE MASK.svg" alt="aavegotchi Ape Mask" title="Ape Mask"/>`, "45", "Ape Mask", "Legendary", "AGG +1, BRN -3", "100", "head"],
					[`<img src="/wearables/ethereum/HALF REKT SHIRT.svg" alt="aavegotchi Half Rekt Shirt" title="Half Rekt Shirt"/>`, "46", "Half Rekt Shirt", "Legendary", "NRG +1, AGG +1, BRN -2", "100", "body"],
					[`<img src="/wearables/ethereum/WAIFU PILLOW.svg" alt="aavegotchi Waifu Pillow" title="Waifu Pillow"/>`, "47", "Waifu Pillow", "Legendary", "BRN -4", "100", "hands"],
					[`<img src="/wearables/ethereum/XIBOT MOHAWK.svg" alt="aavegotchi Xibot Mohawk" title="Xibot Mohawk"/>`, "48", "Xibot Mohawk", "Mythical", "NRG +5", "50", "head"],
					[`<img src="/wearables/ethereum/CODERDAN SHADES.svg" alt="aavegotchi Coderdan Shades" title="Coderdan Shades"/>`, "49", "Coderdan Shades", "Mythical", "AGG +5", "50", "eyes"],
					[`<img src="/wearables/ethereum/GLDNXROSS ROBE.svg" alt="aavegotchi GldnXross Robe" title="GldnXross Robe"/>`, "50", "GldnXross Robe", "Mythical", "SPK +5", "50", "body"],
					[`<img src="/wearables/ethereum/MUDGEN DIAMOND.svg" alt="aavegotchi Mudgen Diamond" title="Mudgen Diamond"/>`, "51", "Mudgen Diamond", "Mythical", "BRN +5", "50", "hands"],
					[`<img src="/wearables/ethereum/GALAXY BRAIN.svg" alt="aavegotchi Galaxy Brain" title="Galaxy Brain"/>`, "52", "Galaxy Brain", "Godlike", "BRN +6", "5", "head"],
					[`<img src="/wearables/ethereum/ALL SEEING EYES.svg" alt="aavegotchi All Seeing Eyes" title="All Seeing Eyes"/>`, "53", "All Seeing Eyes", "Godlike", "NRG -6", "5", "eyes"],
					[`<img src="/wearables/ethereum/LLAMACORN SHIRT.svg" alt="aavegotchi Llamacorn Shirt" title="Llamacorn Shirt"/>`, "54", "Llamacorn Shirt", "Godlike", "NRG -3, AGG -3", "5", "body"]
                ]
            }
        },
		
		{
            tableName: "aagentWearablesTable",
            tableCaption: "Aagent Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/55_AagentHeadset.svg" alt="aavegotchi Aagent Headset" title="Aagent Headset"/>`, "55", "Aagent Headset", "Rare", "AGG +1, SPK +1, BRN +1", "308", "face"],
				    [`<img src="/wearables/final wearables/56_AagentShirtFull.svg" alt="aavegotchi Aagent Shirt" title="Aagent Shirt"/>`, "56", "Aagent Shirt", "Rare", "NRG -1, AGG +1, SPK +1", "308", "body"],					
				    [`<img src="/wearables/final wearables/57_AagentShades.svg" alt="aavegotchi Aagent Shades" title="Aagent Shades"/>`, "57", "Aagent Shades", "Rare", "NRG -1, SPK +2", "308", "eyes"],		
				    [`<img src="/wearables/final wearables/58_AagentPistol.svg" alt="aavegotchi Aagent Pistol" title="Aagent Pistol"/>`, "58", "Aagent Pistol", "Rare", "AGG +3", "308", "hands"],		
				    [`<img src="/wearables/final wearables/59_AagentFedoraHat.svg" alt="aavegotchi Aagent Fedora Hat" title="Aagent Fedora Hat"/>`, "59", "Aagent Fedora Hat", "Rare", "NRG -2, SPK +1", "308", "head"]
				]
			}
		},

		{
            tableName: "wizardWearablesTable",
            tableCaption: "Wizard Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/60_WizardHat.svg" alt="aavegotchi Common Wizard Hat" title="Common Wizard Hat"/>`, "60", "Common Wizard Hat", "Common", "BRN +1", "1000", "head"],
				    [`<img src="/wearables/final wearables/61_WizardHatLegendary.svg" alt="aavegotchi Legendary Wizard Hat" title="Legendary Wizard Hat"/>`, "61", "Legendary Wizard Hat", "Legendary", "SPK +2, BRN +2", "125", "head"],
				    [`<img src="/wearables/final wearables/62_WizardHatMythical.svg" alt="aavegotchi Mythical Wizard Hat" title="Mythical Wizard Hat"/>`, "62", "Mythical Wizard Hat", "Mythical", "SPK +2, BRN +3", "50", "head"],
				    [`<img src="/wearables/final wearables/63_WizardHatGodlike.svg" alt="aavegotchi Godlike Wizard Hat" title="Godlike Wizard Hat"/>`, "63", "Godlike Wizard Hat", "Godlike", "SPK +2, BRN +4", "5", "head"],
				    [`<img src="/wearables/final wearables/64_WizardStaff.svg" alt="aavegotchi Common Wizard Staff" title="Common Wizard Staff"/>`, "64", "Common Wizard Staff", "Common", "NRG +1", "1000", "hands"],
					[`<img src="/wearables/final wearables/65_WizardStaffLegendary.svg" alt="aavegotchi Legendary Wizard Staff" title="Legendary Wizard Staff"/>`, "65", "Legendary Wizard Staff", "Legendary", "NRG +2, BRN +2", "125", "hands"],
					[`<img src="/wearables/final wearables/66_FutureWizardVisor.svg" alt="aavegotchi Wizard Visor" title="Wizard Visor"/>`, "66", "Wizard Visor", "Common", "NRG +1", "1000", "eyes"]
				]
			}
		},
		
		{
            tableName: "farmerWearablesTable",
            tableCaption: "Farmer Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/67_FarmerStrawHat.svg" alt="aavegotchi Farmer Straw Hat" title="Straw Hat"/>`, "67", "Straw Hat", "Common", "NRG -1", "1000", "head"],
				    [`<img src="/wearables/final wearables/68_FarmerJeans.svg" alt="aavegotchi Farmer Jeans" title="Farmer Jeans"/>`, "68", "Farmer Jeans", "Common", "BRN -1", "1000", "body"],					
				    [`<img src="/wearables/final wearables/69_FarmerPitchfork.svg" alt="aavegotchi Farmer Pitchfork" title="Pitchfork"/>`, "69", "Pitchfork", "Common", "AGG +1", "1000", "hands"],		
				    [`<img src="/wearables/final wearables/70_FarmerHandsaw.svg" alt="aavegotchi Farmer Handsaw" title="Handsaw"/>`, "70", "Handsaw", "Mythical", "AGG +3, BRN -2", "50", "hands"]
				]
			}
		},
		
		{
            tableName: "santaWearablesTable",
            tableCaption: "Santa Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/71_SantagotchiHat.svg" alt="aavegotchi Santagotchi Hat" title="Red Santa Hat"/>`, "71", "Red Santa Hat", "Rare", "AGG -1, SPK -2", "250", "head"]
				]
			}
		},
		
		{
            tableName: "okexWearablesTable",
            tableCaption: "OKex Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/72_JaayHairpiece.svg" alt="aavegotchi Jaay Hairpiece" title="Jaay Hairpiece"/>`, "72", "Jaay Hairpiece", "Mythical", "BRN -5", "30", "head"],
					[`<img src="/wearables/final wearables/73_JaayGlasses.svg" alt="aavegotchi Jaay Glasses" title="Jaay Glasses"/>`, "73", "Jaay Glasses", "Mythical", "NRG -2, AGG -2, BRN -1", "10", "eyes"],
					[`<img src="/wearables/final wearables/74_JaayHaoSuitFull.svg" alt="aavegotchi Jaay Suit" title="Jaay Suit"/>`, "74", "Jaay Suit", "Mythical", "NRG -2, BRN -3", "20", "body"],
					[`<img src="/wearables/final wearables/75_OKexSign.svg" alt="aavegotchi OKex Sign" title="OKex Sign"/>`, "75", "OKex Sign", "Mythical", "NRG -5", "40", "hands"],
					[`<img src="/wearables/final wearables/76_BigGHSTToken.svg" alt="aavegotchi Big GHST Token" title="Big GHST Token"/>`, "76", "Big GHST Token", "Common", "BRN +1", "1000", "right hand"],
				]
			}
		},
		
		{
            tableName: "skaterWearablesTable",
            tableCaption: "Skater Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/77_BitcoinBeanie.svg" alt="aavegotchi Bitcoin Beanie" title="Bitcoin Beanie"/>`, "77", "Bitcoin Beanie", "Uncommon", "NRG +1, BRN -1", "500", "head"],
					[`<img src="/wearables/final wearables/78_SkaterJeans.svg" alt="aavegotchi Black Jeans" title="Black Jeans"/>`, "78", "Black Jeans", "Uncommon", "AGG +1, BRN -1", "500", "body"],
					[`<img src="/wearables/final wearables/79_Skateboard.svg" alt="aavegotchi Skateboard" title="Skateboard"/>`, "79", "Skateboard", "Rare", "NRG +1, BRN -2", "250", "hands"]
				]
			}
		},
		
		{
            tableName: "sushiWearablesTable",
            tableCaption: "Sushi Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/80_SushiHeadband.svg" alt="aavegotchi Sushi Bandana" title="Sushi Bandana"/>`, "80", "Sushi Bandana", "Rare", "NRG -1, AGG +2", "250", "head"],
					[`<img src="/wearables/final wearables/81_SushiRobe.svg" alt="aavegotchi Sushi Coat" title="Sushi Coat"/>`, "81", "Sushi Coat", "Rare", "NRG -2, AGG +1", "250", "body"],
					[`<img src="/wearables/final wearables/82_SushiRoll.svg" alt="aavegotchi Sushi Piece" title="Sushi Piece"/>`, "82", "Sushi Piece", "Legendary", "SPK -4", "125", "hands"],
					[`<img src="/wearables/final wearables/83_SushiKnife.svg" alt="aavegotchi Sushi Knife" title="Sushi Knife"/>`, "83", "Sushi Knife", "Rare", "AGG +3", "250", "hands"]
				]
			}
		},
		
		{
            tableName: "gentlemanWearablesTable",
            tableCaption: "Gentleman Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/84_GentlemanHat.svg" alt="aavegotchi Gentleman Hat" title="Gentleman Hat"/>`, "84", "Gentleman Hat", "Legendary", "NRG -1, AGG -3", "125", "head"],
					[`<img src="/wearables/final wearables/85_GentlemanSuitFull.svg" alt="aavegotchi Gentleman Coat" title="Gentleman Coat"/>`, "85", "Gentleman Coat", "Legendary", "NRG -1, AGG -3", "125", "body"],
					[`<img src="/wearables/final wearables/86_GentlemanMonocle.svg" alt="aavegotchi Gentleman Monocle" title="Monocle"/>`, "86", "Monocle", "Mythical", "AGG -2, BRN +3", "50", "eyes"]
				]
			}
		},
		
		{
            tableName: "minerWearablesTable",
            tableCaption: "Miner Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/87_MinerHelmet.svg" alt="aavegotchi Miner Helmet" title="Miner Helmet"/>`, "87", "Miner Helmet", "Uncommon", "NRG +1, BRN -1", "500", "head"],
					[`<img src="/wearables/final wearables/88_MinerJeans.svg" alt="aavegotchi Miner Jeans" title="Miner Jeans"/>`, "88", "Miner Jeans", "Uncommon", "NRG +1, BRN -1", "500", "body"],
					[`<img src="/wearables/final wearables/89_MinerPickaxe.svg" alt="aavegotchi Miner Pickaxe" title="Pickaxe"/>`, "89", "Pickaxe", "Rare", "NRG +1, AGG +2", "250", "hands"]
				]
			}
		},
		
		{
            tableName: "pajamasWearablesTable",
            tableCaption: "Pajamas Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/90_PajamaHat.svg" alt="aavegotchi Pajama Hat" title="Pajama Hat"/>`, "90", "Pajama Hat", "Common", "SPK -1", "1000", "head"],
					[`<img src="/wearables/final wearables/91_PajamaPantsFull.svg" alt="aavegotchi Pajama Shirt" title="Pajama Shirt"/>`, "91", "Pajama Shirt", "Uncommon", "AGG -1, SPK -1", "500", "body"],
					[`<img src="/wearables/final wearables/92_BedtimeMilk.svg" alt="aavegotchi Bedtime Milk" title="Bedtime Milk"/>`, "92", "Bedtime Milk", "Rare", "AGG -2, SPK -1", "250", "hands"],
					[`<img src="/wearables/final wearables/93_FluffyBlanket.svg" alt="aavegotchi Fluffy Pillow" title="Fluffy Pillow"/>`, "93", "Fluffy Pillow", "Legendary", "SPK -4", "125", "hands"]
				]
			}
		},
		
		{
            tableName: "runnerWearablesTable",
            tableCaption: "Runner Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/94_RunnerSweatband.svg" alt="aavegotchi Sweatband" title="Sweatband"/>`, "94", "Sweatband", "Uncommon", "NRG +2", "500", "head"],
					[`<img src="/wearables/final wearables/95_RunnerShorts.svg" alt="aavegotchi Track Shorts" title="Track Shorts"/>`, "95", "Track Shorts", "Uncommon", "NRG +1, BRN -1", "500", "body"],
					[`<img src="/wearables/final wearables/96_WaterBottle.svg" alt="aavegotchi Water Bottle" title="Water bottle"/>`, "96", "Water bottle", "Uncommon", "NRG +2", "500", "hands"]
				]
			}
		},
		
		{
            tableName: "ladyWearablesTable",
            tableCaption: "Lady Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/97_PillboxHat.svg" alt="aavegotchi Pillbox Hat" title="Pillbox Hat"/>`, "97", "Pillbox Hat", "Legendary", "NRG +1, AGG -1, SPK -2", "125", "head"],
					[`<img src="/wearables/final wearables/98_LadySkirt.svg" alt="aavegotchi Day Dress" title="Day Dress"/>`, "98", "Day Dress", "Legendary", "NRG +1, AGG -1, SPK -2", "125", "body"],
					[`<img src="/wearables/final wearables/99_LadyParasol.svg" alt="aavegotchi Parasol" title="Parasol"/>`, "99", "Parasol", "Mythical", "NRG +1, AGG -1, SPK -3", "50", "hands"],
					[`<img src="/wearables/final wearables/100_LadyClutch.svg" alt="aavegotchi Clutch" title="Clutch"/>`, "100", "Clutch", "Legendary", "NRG +1, AGG -2, SPK -2", "125", "hands"]
				]
			}
		},
		
		{
            tableName: "witchyWearablesTable",
            tableCaption: "Witchy Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/101_WitchHat.svg" alt="aavegotchi Witchy Hat" title="Witchy Hat"/>`, "101", "Witchy Hat", "Legendary", "AGG +1, SPK +3", "125", "head"],
					[`<img src="/wearables/final wearables/102_WitchCapeFull.svg" alt="aavegotchi Witchy Cloak" title="Witchy Cloak"/>`, "102", "Witchy Cloak", "Legendary", "AGG +1, SPK +3", "125", "body"],
					[`<img src="/wearables/final wearables/103_WitchWand.svg" alt="aavegotchi Witchy Wand" title="Witchy Wand"/>`, "103", "Witchy Wand", "Mythical", "AGG +2, SPK +2, BRN +1", "50", "hands"]
				]
			}
		},
		
		{
            tableName: "portalWearablesTable",
            tableCaption: "Portal Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/104_PortalMageHelmet.svg" alt="aavegotchi Portal Mage Helmet" title="Portal Mage Helmet"/>`, "104", "Portal Mage Helmet", "Legendary", "NRG +2, AGG +1, SPK +1", "125", "head"],
					[`<img src="/wearables/final wearables/105_PortalMageArmorFull.svg" alt="aavegotchi Portal Mage Armor" title="Portal Mage Armor"/>`, "105", "Portal Mage Armor", "Legendary", "NRG +1, AGG +2, SPK +2", "125", "body"],
					[`<img src="/wearables/final wearables/106_PortalMageAxe.svg" alt="aavegotchi Portal Mage Axe" title="Portal Mage Axe"/>`, "106", "Portal Mage Axe", "Legendary", "AGG +4", "125", "hands"],
					[`<img src="/wearables/final wearables/107_PortalMageBlackAxe.svg" alt="aavegotchi Portal Mage Black Axe" title="Portal Mage Black Axe"/>`, "107", "Portal Mage Black Axe", "Godlike", "AGG +6", "5", "hands"]
				]
			}
		},
		
		{
            tableName: "rastaWearablesTable",
            tableCaption: "Rasta Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/108_RastaDreds.svg" alt="aavegotchi Rasta Hat" title="Rasta Hat"/>`, "108", "Rasta Hat", "Uncommon", "NRG -1, AGG -1", "500", "head"],
					[`<img src="/wearables/final wearables/109_RastaShirtFull.svg" alt="aavegotchi Rasta Shirt" title="Rasta Shirt"/>`, "109", "Rasta Shirt", "Uncommon", "NRG -1, AGG -1", "500", "body"],
					[`<img src="/wearables/final wearables/110_JamaicanFlag.svg" alt="aavegotchi Jamaican Flag" title="Jamaican Flag"/>`, "110", "Jamaican Flag", "Rare", "NRG -1, AGG -2", "250", "hands"]
				]
			}
		},
		
		{
            tableName: "hazmatWearablesTable",
            tableCaption: "Hazmat Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/111_HazmatHood.svg" alt="aavegotchi Hazmat Hood" title="Hazmat Hood"/>`, "111", "Hazmat Hood", "Legendary", "NRG +1, AGG -1, SPK +2", "125", "head"],
					[`<img src="/wearables/final wearables/112_HazmatSuitFull.svg" alt="aavegotchi Hazmat Suit" title="Hazmat Suit"/>`, "112", "Hazmat Suit", "Legendary", "NRG +2, AGG -1, SPK +1", "125", "body"],
					[`<img src="/wearables/final wearables/113_UraniumRod.svg" alt="aavegotchi Uranium Rod" title="Uranium Rod"/>`, "113", "Uranium Rod", "Godlike", "NRG +6", "5", "hands"]
				]
			}
		},
		
		{
            tableName: "vacationWearablesTable",
            tableCaption: "Vacation Set Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/114_RedHawaiianShirtFull.svg" alt="aavegotchi Red Hawaiian Shirt" title="Red Hawaiian Shirt"/>`, "114", "Red Hawaiian Shirt", "Mythical", "NRG -3, AGG -2", "50", "body"],
					[`<img src="/wearables/final wearables/115_BlueHawaiianShirtFull.svg" alt="aavegotchi Blue Hawaiian Shirt" title="Blue Hawaiian Shirt"/>`, "115", "Blue Hawaiian Shirt", "Legendary", "NRG -2, AGG -2", "125", "body"],
					[`<img src="/wearables/final wearables/116_Coconut.svg" alt="aavegotchi Coconut" title="Coconut"/>`, "116", "Coconut", "Rare", "SPK -3", "250", "hands"],
					[`<img src="/wearables/final wearables/117_DealWithItShades.svg" alt="aavegotchi Cool shades" title="Cool Shades"/>`, "117", "Cool Shades", "Common", "BRN -1", "1000", "eyes"]
				]
			}
		},
		
		{
            tableName: "independentDrinksTable",
            tableCaption: "Independent Drink Items",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/118_WaterJug.svg" alt="aavegotchi Water Jug" title="Water Jug"/>`, "118", "Water Jug", "Legendary", "NRG +2, BRN +2", "125", "hands"],
					[`<img src="/wearables/final wearables/119_BabyBottle.svg" alt="aavegotchi Baby Bottle" title="Baby Bottle"/>`, "119", "Baby Bottle", "Legendary", "AGG -1, SPK -3", "125", "hands"],
					[`<img src="/wearables/final wearables/120_Martini.svg" alt="aavegotchi Martini" title="Martini"/>`, "120", "Martini", "Legendary", "NRG -1, BRN -3", "125", "hands"],
					[`<img src="/wearables/final wearables/121_WineBottle.svg" alt="aavegotchi Wine" title="Wine"/>`, "121", "Wine", "Rare", "BRN -3", "250", "hands"],
					[`<img src="/wearables/final wearables/122_Milkshake.svg" alt="aavegotchi Milkshake" title="Milkshake"/>`, "122", "Milkshake", "Mythical", "SPK -5", "50", "hands"],
					[`<img src="/wearables/final wearables/123_AppleJuice.svg" alt="aavegotchi Apple Juice" title="Apple Juice"/>`, "123", "Apple Juice", "Uncommon", "SPK -2", "500", "hands"]
				]
			}
		},
		
		{
            tableName: "independentHeadTable",
            tableCaption: "Independent Head Items",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/124_BeerHelmet.svg" alt="aavegotchi Beer Helmet" title="Beer Helmet"/>`, "124", "Beer Helmet", "Mythical", "BRN -5", "50", "head"]
				]
			}
		},
		
		{
            tableName: "independentBodyTable",
            tableCaption: "Independent Body Items",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/final wearables/125_TrackSuitFull.svg" alt="aavegotchi Track Suit" title="Track Suit"/>`, "125", "Track Suit", "Legendary", "NRG +2, AGG +2", "125", "body"]
				]
			}
		},
		
		{
            tableName: "consumablesTable",
            tableCaption: "Consumables",
            tableData: {
                headers: ["Image", "ID", "Name", "Stats", "Quantity"],
                data: [
				    [`<img src="/wearables/final wearables/126_KinshipPotion.svg" alt="aavegotchi Kinship Potion" title="Kinship Potion"/>`, "126", "Kinship Potion", "+2 to Kinship", "500"],
					[`<img src="/wearables/final wearables/127_GreaterKinshipPotion.svg" alt="aavegotchi Greater Kinship Potion" title="Greater Kinship Potion"/>`, "127", "Greater Kinship Potion", "+10 to Kinship", "250"],
					[`<img src="/wearables/final wearables/128_XPPotion.svg" alt="aavegotchi XP Potion" title="XP Potion"/>`, "128", "XP Potion", "+20 to XP", "500"],
					[`<img src="/wearables/final wearables/129_GreaterXPPotion.svg" alt="aavegotchi Greater XP Potion" title="Greater XP Potion"/>`, "129", "Greater XP Potion", "+50 to XP", "250"]
				]
			}
		},
		
		{
            tableName: "layer2WearablesTable",
            tableCaption: "Layer 2-Themed Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
				    [`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Fireball.svg" alt="aavegotchi Fireball" title="Fireball"/>`, "130", "Fireball", "Common", "AGG +1", "1000", "hands"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Dragon-Horns.svg" alt="aavegotchi Dragon Horns" title="Dragon Horns"/>`, "131", "Dragon Horns", "Uncommon", "AGG +1, SPK +1", "500", "head"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Dragon-Wings.svg" alt="aavegotchi Dragon Wings" title="Dragon Wings"/>`, "132", "Dragon Wings", "Rare", "AGG +2, SPK +1", "250", "body"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Pointy-Horns.svg" alt="aavegotchi Pointy Horns" title="Pointy Horns"/>`, "133", "Pointy Horns", "Legendary", "AGG +2, SPK +2", "100", "head"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-L2-Sign.svg" alt="aavegotchi L2 Sign" title="L2 Sign"/>`, "134", "L2 Sign", "Common", "BRN +1", "1000", "right hand"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Polygon-Shirt.svg" alt="aavegotchi Polygon Shirt" title="Polygon Shirt"/>`, "135", "Polygon Shirt", "Uncommon", "BRN +2", "500", "body"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Polygon-Cap.svg" alt="aavegotchi Polygon Cap" title="Polygon Cap"/>`, "136", "Polygon Cap", "Rare", "AGG -1, BRN +2", "250", "head"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Vote-Sign.svg" alt="aavegotchi Vote Sign" title="Vote Sign"/>`, "137", "Vote Sign", "Common", "AGG -1", "1000", "right hand"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Snapshot-Shirt.svg" alt="aavegotchi Snapshot Shirt" title="Snapshot Shirt"/>`, "138", "Snapshot Shirt", "Uncommon", "AGG -2", "500", "body"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Snapshot-Cap.svg" alt="aavegotchi Snapshot Cap" title="Snapshot Cap"/>`, "139", "Snapshot Cap", "Rare", "AGG -3", "250", "head"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Elf-Ears.svg" alt="aavegotchi Elf Ears" title="Elf Ears"/>`, "140", "Elf Ears", "Common", "SPK -1", "1000", "face"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Gemstone-Ring.svg" alt="aavegotchi Gemstone Ring" title="Gemstone Ring"/>`, "141", "Gemstone Ring", "Uncommon", "SPK -1, BRN +1", "500", "hands"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Princess-Tiara.svg" alt="aavegotchi Princess Tiara" title="Princess Tiara"/>`, "142", "Princess Tiara", "Rare", "SPK -2, BRN +1", "250", "head"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Gold-Necklace.svg" alt="aavegotchi Gold Necklace" title="Gold Necklace"/>`, "143", "Gold Necklace", "Legendary", "NRG +2, AGG +2", "100", "body"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Princess-Locks.svg" alt="aavegotchi Princess Hair" title="Princess Hair"/>`, "144", "Princess Hair", "Mythical", "SPK -3, BRN +2", "50", "head"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-godli-locks.svg" alt="aavegotchi Godli Locks" title="Godli Locks"/>`, "145", "Godli Locks", "Godlike", "SPK -4, BRN +2", "5", "head"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-The-Imperial.svg" alt="aavegotchi Imperial Moustache" title="Imperial Moustache"/>`, "146", "Imperial Moustache", "Common", "NRG -1", "1000", "face"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Tiny-Crown.svg" alt="aavegotchi Tiny Crown" title="Tiny Crown"/>`, "147", "Tiny Crown", "Uncommon", "NRG -1, BRN -1", "500", "head"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Royal-Scepter.svg" alt="aavegotchi Royal Scepter" title="Royal Scepter"/>`, "148", "Royal Scepter", "Rare", "NRG -2, BRN -1", "250", "hands"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Royal-Crown.svg" alt="aavegotchi Royal Crown" title="Royal Crown"/>`, "149", "Royal Crown", "Legendary", "NRG -2, BRN -2", "100", "head"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Royal-Robes.svg" alt="aavegotchi Royal Robes" title="Royal Robes"/>`, "150", "Royal Robes", "Mythical", "NRG -3, BRN -2", "50", "body"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Rofl-Common.svg" alt="aavegotchi Common Rofl" title="Common Rofl"/>`, "151", "Common Rofl", "Common", "BRN -1", "1000", "pet"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Rofl-Uncommon.svg" alt="aavegotchi Uncommon Rofl" title="Uncommon Rofl"/>`, "152", "Uncommon Rofl", "Uncommon", "NRG -1, BRN -1", "500", "pet"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Rofl-Rare.svg" alt="aavegotchi Rare Rofl" title="Rare Rofl"/>`, "153", "Rare Rofl", "Rare", "NRG -1, BRN -2", "250", "pet"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Rofl-Legendary.svg" alt="aavegotchi Legendary Rofl" title="Legendary Rofl"/>`, "154", "Legendary Rofl", "Legendary", "NRG -2, BRN -2", "100", "pet"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Rofl-Mythical.svg" alt="aavegotchi Mythical Rofl" title="Mythical Rofl"/>`, "155", "Mythical Rofl", "Mythical", "NRG -2, BRN -3", "50", "pet"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Rofl-Godlike.svg" alt="aavegotchi Royal Rofl" title="Royal Rofl"/>`, "156", "Royal Rofl", "Godlike", "NRG -3, BRN -3", "5", "pet"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen-0-Sets-Lil-Pump-Goatee.svg" alt="aavegotchi Lil Pump Goatee" title="Lil Pump Goatee"/>`, "157", "Lil Pump Goatee", "Uncommon", "BRS +2, NRG +1, AGG +1", "500", "face"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen-0-Sets-Lil-Pump-Drank.svg" alt="aavegotchi Lil Pump Drank" title="Lil Pump Drank"/>`, "158", "Lil Pump Drank", "Rare", "BRS +5, NRG +1, AGG +2", "250", "hands"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen-0-Sets-Lil-Pump-Shades.svg" alt="aavegotchi Lil Pump Shades" title="Lil Pump Shades"/>`, "159", "Lil Pump Shades", "Legendary", "BRS +10, AGG +3, SPK +1", "100", "eyes"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen-0-Sets-Lil-Pump-threads.svg" alt="aavegotchi Lil Pump Threads" title="Lil Pump Threads"/>`, "160", "Lil Pump Threads", "Mythical", "BRS +20, NRG +5", "50", "body"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen-0-Sets-Lil-Pump-Dreads.svg" alt="aavegotchi Lil Pump Dreads" title="Lil Pump Dreads"/>`, "161", "Lil Pump Dreads", "Godlike", "BRS +50, NRG +4, AGG +2", "5", "head"]
				]
			}
		},
		
		{
            tableName: "auctionWearablesTable",
            tableCaption: "Auction Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
                    [`<img src="/wearables/auction/steampunk_mask.svg" alt="aavegotchi Steampunk Goggles" title="Steampunk Goggles"/>`, "199", "Steampunk Goggles", "Rare", "SPK +3", "250", "eyes"],
					[`<img src="/wearables/auction/steampunk_trousers.svg" alt="aavegotchi Steampunk Trousers" title="Steampunk Trousers"/>`, "200", "Steampunk Trousers", "Uncommon", "SPK +2", "500", "body"],
					[`<img src="/wearables/auction/mechanical_arm.svg" alt="aavegotchi Mechanical Claw" title="Mechanical Claw"/>`, "201", "Mechanical Claw", "Legendary", "AGG +2, SPK +2", "100", "hands"],
					[`<img src="/wearables/auction/vrgoggles.svg" alt="aavegotchi VR Headset" title="VR Headset"/>`, "202", "VR Headset", "Mythical", "NRG +2, AGG +3", "50", "eyes"],
					[`<img src="/wearables/auction/gamer_jacket.svg" alt="aavegotchi Gamer Jacket" title="Gamer Jacket"/>`, "203", "Gamer Jacket", "Rare", "NRG +1, AGG +2", "250", "body"],
					[`<img src="/wearables/auction/game_controller.svg" alt="aavegotchi Game Controller" title="Game Controller"/>`, "204", "Game Controller", "Uncommon", "NRG +1, AGG +1", "500", "hands"],
					[`<img src="/wearables/auction/coffee_cup.svg" alt="aavegotchi Gotchi Mug" title="Gotchi Mug"/>`, "205", "Gotchi Mug", "Common", "NRG +1", "1000", "hands"]
                ]
            }
        },
		
		{
            tableName: "venlyWearablesTable",
            tableCaption: "Aavegotchi x Venly Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
                    [`<img src="/wearables/venly/biker_helmet.svg" alt="aavegotchi Biker Helmet" title="Biker Helmet"/>`, "206", "Biker Helmet", "Rare", "AGG +2, BRN +1", "250", "head"],
					[`<img src="/wearables/venly/biker_jacket.svg" alt="aavegotchi Biker Jacket" title="Biker Jacket"/>`, "207", "Biker Jacket", "Uncommon", "AGG +2", "500", "body"],
					[`<img src="/wearables/venly/aaviators.svg" alt="aavegotchi Aviators" title="Aviators"/>`, "208", "Aviators", "Uncommon", "SPK +2", "500", "eyes"],
					[`<img src="/wearables/venly/horseshoe_mustache.svg" alt="aavegotchi Horseshoe Mustache" title="Horseshoe Mustache"/>`, "209", "Horseshoe Mustache", "Legendary", "NRG -2, SPK +2", "100", "face"]
                ]
            }
        },
		
		{
            tableName: "haunt2Table",
            tableCaption: "Haunt 2 Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
                    [`<img src="/wearables/haunt2/211_GuyFauwkesMask.svg" alt="aavegotchi Guy Fawkes Mask" title="Guy Fawkes Mask"/>`, "211", "Guy Fawkes Mask", "Common", "SPK +1", "1000", "head"],
					[`<img src="/wearables/haunt2/212_1337Laptop.svg" alt="aavegotchi 1337 Laptop" title="1337 Laptop"/>`, "212", "1337 Laptop", "Mythical", "NRG -2, BRN +3", "50", "hands"],
					[`<img src="/wearables/haunt2/213_H4xx0rShirt.svg" alt="aavegotchi H4xx0r Shirt" title="H4xx0r Shirt"/>`, "213", "H4xx0r Shirt", "Legendary", "NRG -4", "100", "body"],
					[`<img src="/wearables/haunt2/214_MatrixEyes.svg" alt="aavegotchi Matrix Eyes" title="Matrix Eyes"/>`, "214", "Matrix Eyes", "Godlike", "NRG -3, AGG -3", "5", "eyes"],
					[`<img src="/wearables/haunt2/215_CyborgEye.svg" alt="aavegotchi Cyborg Eye" title="Cyborg Eye"/>`, "215", "Cyborg Eye", "Legendary", "NRG +2, AGG +2", "100", "eyes"],
					[`<img src="/wearables/haunt2/216_RainbowVomit.svg" alt="aavegotchi Rainbow Vomit" title="Rainbow Vomit"/>`, "216", "Rainbow Vomit", "Mythical", "SPK -5", "50", "face"],
					[`<img src="/wearables/haunt2/217_CyborgGun.svg" alt="aavegotchi Energy Gun" title="Energy Gun"/>`, "217", "Energy Gun", "Mythical", "NRG +2, AGG +3", "50", "hands"],
					[`<img src="/wearables/haunt2/218_Mohawk.svg" alt="aavegotchi Mohawk" title="Mohawk"/>`, "218", "Mohawk", "Uncommon", "NRG +1, AGG +1", "500", "head"],
					[`<img src="/wearables/haunt2/219_MuttonChops.svg" alt="aavegotchi Mutton Chops" title="Mutton Chops"/>`, "219", "Mutton Chops", "Rare", "SPK +2, BRN -1", "250", "face"],
					[`<img src="/wearables/haunt2/220_PunkShirt.svg" alt="aavegotchi Punk Shirt" title="Punk Shirt"/>`, "220", "Punk Shirt", "Legendary", "NRG +1, AGG +3", "100", "body"],
					[`<img src="/wearables/haunt2/221_PirateHat.svg" alt="aavegotchi Pirate Hat" title="Pirate Hat"/>`, "221", "Pirate Hat", "Common", "BRN -1", "1000", "head"],
					[`<img src="/wearables/haunt2/222_PirateCoat.svg" alt="aavegotchi Pirate Coat" title="Pirate Coat"/>`, "222", "Pirate Coat", "Uncommon", "SPK +1, BRN -1", "500", "body"],
					[`<img src="/wearables/haunt2/223_Hook Hand.svg" alt="aavegotchi Hook Hand" title="Hook Hand"/>`, "223", "Hook Hand", "Uncommon", "SPK +1, BRN -1", "500", "hands"],
					[`<img src="/wearables/haunt2/224_PiratePatch.svg" alt="aavegotchi Pirate Patch" title="Pirate Patch"/>`, "224", "Pirate Patch", "Rare", "SPK +2, BRN -1", "250", "eyes"],
					[`<img src="/wearables/haunt2/225_Basketball.svg" alt="aavegotchi Basketball" title="Basketball"/>`, "225", "Basketball", "Common", "NRG +1", "1000", "hands"],
					[`<img src="/wearables/haunt2/226_RedHeadband.svg" alt="aavegotchi Red Headband" title="Red Headband"/>`, "226", "Red Headband", "Rare", "NRG +2, AGG -1", "250", "head"],
					[`<img src="/wearables/haunt2/227_MJJersey.svg" alt="aavegotchi 23 Jersey" title="23 Jersey"/>`, "227", "23 Jersey", "Rare", "NRG +1, AGG -2", "250", "body"],
					[`<img src="/wearables/haunt2/228_10GallonHat.svg" alt="aavegotchi 10 Gallon Hat" title="10 Gallon Hat"/>`, "228", "10 Gallon Hat", "Common", "BRN +1", "1000", "head"],
					[`<img src="/wearables/haunt2/229_Lasso.svg" alt="aavegotchi Lasso" title="Lasso"/>`, "229", "Lasso", "Uncommon", "AGG +1, BRN +1", "500", "hands"],
					[`<img src="/wearables/haunt2/230_WraanglerJeans.svg" alt="aavegotchi Wraangler Jeans" title="Wraangler Jeans"/>`, "230", "Wraangler Jeans", "Common", "AGG +1", "1000", "body"],
					[`<img src="/wearables/haunt2/231_ComfyPoncho.svg" alt="aavegotchi Comfy Poncho" title="Comfy Poncho"/>`, "231", "Comfy Poncho", "Uncommon", "NRG -2", "500", "body"],
					[`<img src="/wearables/haunt2/232_PonchoHoodie.svg" alt="aavegotchi Poncho Hoodie" title="Poncho Hoodie"/>`, "232", "Poncho Hoodie", "Common", "NRG -1", "1000", "head"],
					[`<img src="/wearables/haunt2/233_UncommonCacti.svg" alt="aavegotchi Uncommon Cacti" title="Uncommon Cacti"/>`, "233", "Uncommon Cacti", "Uncommon", "SPK -1, BRN +1", "500", "pet"],
					[`<img src="/wearables/haunt2/234_ShaamanPoncho.svg" alt="aavegotchi Shaaman Poncho" title="Shaaman Poncho"/>`, "234", "Shaaman Poncho", "Mythical", "NRG -5", "50", "body"],
					[`<img src="/wearables/haunt2/235_ShaamanHoodie.svg" alt="aavegotchi Shaaman Hoodie" title="Shaaman Hoodie"/>`, "235", "Shaaman Hoodie", "Legendary", "NRG -4", "100", "head"],
					[`<img src="/wearables/haunt2/236_BlueCacti.svg" alt="aavegotchi Blue Cacti" title="Blue Cacti"/>`, "236", "Blue Cacti", "Rare", "SPK -1, BRN +2", "250", "pet"],
					[`<img src="/wearables/haunt2/237_MythicalCacti.svg" alt="aavegotchi Mythical Cacti" title="Mythical Cacti"/>`, "237", "Mythical Cacti", "Mythical", "SPK -2, BRN +3", "50", "pet"],
					[`<img src="/wearables/haunt2/238_GodlikeCacti.svg" alt="aavegotchi Godlike Cacti" title="Godlike Cacti"/>`, "238", "Godlike Cacti", "Godlike", "SPK -3, BRN +3", "5", "pet"],
					[`<img src="/wearables/haunt2/239_WagieCap.svg" alt="aavegotchi Wagie Cap" title="Wagie Cap"/>`, "239", "Wagie Cap", "Uncommon", "AGG -2", "500", "head"],
					[`<img src="/wearables/haunt2/240_Headphones.svg" alt="aavegotchi Headphones" title="Headphones"/>`, "240", "Headphones", "Uncommon", "AGG -2", "500", "face"],
					[`<img src="/wearables/haunt2/241_WGMIShirt.svg" alt="aavegotchi WGMI Shirt" title="WGMI Shirt"/>`, "241", "WGMI Shirt", "Rare", "AGG -3", "250", "body"],
					[`<img src="/wearables/haunt2/242_YellowManbun.svg" alt="aavegotchi Yellow Manbun" title="Yellow Manbun"/>`, "242", "Yellow Manbun", "Legendary", "NRG -2, AGG -2", "100", "head"],
					[`<img src="/wearables/haunt2/243_TintedShades.svg" alt="aavegotchi Tinted Shades" title="Tinted Shades"/>`, "243", "Tinted Shades", "Rare", "AGG -3", "250", "eyes"],
					[`<img src="/wearables/haunt2/244_VNeckShirt_Thumb.svg" alt="aavegotchi V-Neck Shirt" title="V-Neck Shirt"/>`, "244", "V-Neck Shirt", "Rare", "AGG -3", "250", "body"],
                ]
            }
        },
		
		{
            tableName: "partnershipsTable",
            tableCaption: "Partnerships Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
                    [`<img src="/wearables/partnerships/245_GeckoHat.svg" alt="aavegotchi Gecko Hat" title="Gecko Hat"/>`, "245", "Gecko Hat", "Rare", "SPK -3", "250", "head"],
					[`<img src="/wearables/partnerships/246_APYShades.svg" alt="aavegotchi APY Shades" title="APY Shades"/>`, "246", "APY Shades", "Uncommon", "NRG +1, BRN +1", "500", "eyes"],
					[`<img src="/wearables/partnerships/247_UpArrow.svg" alt="aavegotchi Up Arrow" title="Up Arrow"/>`, "247", "Up Arrow", "Uncommon", "NRG +1, BRN +1", "500", "hands"],
					[`<img src="/wearables/partnerships/248_UpOnlyShirt.svg" alt="aavegotchi Up Only Shirt" title="Up Only Shirt"/>`, "248", "Up Only Shirt", "Uncommon", "NRG +1, BRN +1", "500", "body"],
					[`<img src="/wearables/partnerships/249_CoinGeckoEyes.svg" alt="aavegotchi Gecko Eyes" title="Gecko Eyes"/>`, "249", "Gecko Eyes", "Rare", "SPK -2, BRN -1", "250", "eyes"],
					[`<img src="/wearables/partnerships/250_CoinGeckoTee.svg" alt="aavegotchi CoinGecko Tee" title="CoinGecko Tee"/>`, "250", "CoinGecko Tee", "Rare", "SPK -2, BRN -1", "250", "body"],
					[`<img src="/wearables/partnerships/251_CoinGeckoCandies.svg" alt="aavegotchi Candy Jaar" title="Candy Jaar"/>`, "251", "Candy Jaar", "Rare", "SPK -1, BRN -2", "250", "hands"],
					[`<img src="/wearables/partnerships/252_AastronautHelmet.svg" alt="aavegotchi Aastronaut Helmet" title="Aastronaut Helmet"/>`, "252", "Aastronaut Helmet", "Common", "SPK +1", "1000", "head"],
					[`<img src="/wearables/partnerships/253_AastronautSuit.svg" alt="aavegotchi Aastronaut Suit" title="Aastronaut Suit"/>`, "253", "Aastronaut Suit", "Common", "SPK +1", "1000", "body"],
					[`<img src="/wearables/partnerships/254_uGOTCHIToken.svg" alt="aavegotchi uGOTCHI Token" title="uGOTCHI Token"/>`, "254", "uGOTCHI Token", "Common", "SPK +1", "1000", "right hand"],
					[`<img src="/wearables/partnerships/255_LilBubbleHelmet.svg" alt="aavegotchi Space Helmet" title="Space Helmet"/>`, "255", "Space Helmet", "Legendary", "NRG +2, AGG -2", "100", "head"],
					[`<img src="/wearables/partnerships/256_LilBubbleSpaceSuit.svg" alt="aavegotchi Lil Bubble Space Suit" title="Lil Bubble Space Suit"/>`, "256", "Lil Bubble Space Suit", "Legendary", "NRG +2, AGG -2", "100", "body"],
					[`<img src="/wearables/partnerships/257_BitcoinGuitar.svg" alt="aavegotchi Bitcoin Guitar" title="Bitcoin Guitar"/>`, "257", "Bitcoin Guitar", "Legendary", "NRG +4", "100", "hands"],
					[`<img src="/wearables/partnerships/258_Hanfu.svg" alt="aavegotchi Taoist Robe" title="Taoist Robe"/>`, "258", "Taoist Robe", "Godlike", "NRG -3, BRN +3", "5", "body"],
					[`<img src="/wearables/partnerships/259_BushyEyebrows.svg" alt="aavegotchi Bushy Eyebrows" title="Bushy Eyebrows"/>`, "259", "Bushy Eyebrows", "Godlike", "NRG -3, BRN +3", "5", "eyes"],
					[`<img src="/wearables/partnerships/260_AncientBeard.svg" alt="aavegotchi Beard of Wisdom" title="Beard of Wisdom"/>`, "260", "Beard of Wisdom", "Godlike", "NRG -2, BRN +4", "5", "face"],
					[`<img src="/wearables/partnerships/261_AantenaBot.svg" alt="aavegotchi Aantenna Bot" title="Aantenna Bot"/>`, "261", "Aantenna Bot", "Mythical", "AGG -2, BRN +3", "50", "pet"],
					[`<img src="/wearables/partnerships/262_RadarEyes.svg" alt="aavegotchi Radar Eyes" title="Radar Eyes"/>`, "262", "Radar Eyes", "Mythical", "AGG -2, BRN +3", "50", "eyes"],
					[`<img src="/wearables/partnerships/263_SignalHeadset.svg" alt="aavegotchi Signal Headset" title="Signal Headset"/>`, "263", "Signal Headset", "Mythical", "AGG -2, BRN +3", "50", "face"]
                ]
            }
        },
		{
            tableName: "DeFiRPGTable",
            tableCaption: "DeFi RPG Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
                    [`<img src="/wearables/DeFi-RPG/Aavegotchi-Archer-Gotchi-Brunette-Ponytail.svg" alt="aavegotchi Brunette Ponytail" title="Brunette Ponytail"/>`, "292", "Brunette Ponytail", "Common", "AGG -1", "1000", "head"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Archer-Gotchi-Leather-Tunic.svg" alt="aavegotchi Leather Tunic" title="Leather Tunic"/>`, "293", "Leather Tunic", "Common", "NRG -1", "1000", "body"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Archer-Gotchi-Bow-Arrow.svg" alt="aavegotchi Bow and Arrow" title="Bow and Arrow"/>`, "294", "Bow and Arrow", "Common", "AGG -1", "1000", "hands"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Baarbarian-Gotchi-Forked-Beard.svg" alt="aavegotchi Forked Beard" title="Forked Beard"/>`, "295", "Forked Beard", "Common", "AGG +1", "1000", "face"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Baarbarian-Gotchi-Double-sided-Axe.svg" alt="aavegotchi Double-sided Axe" title="Double-sided Axe"/>`, "296", "Double-sided Axe", "Uncommon", "AGG +1, BRN -1", "500", "hands"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Baarbarian-Gotchi-Animal-Skins.svg" alt="aavegotchi Animal Skins" title="Animal Skins"/>`, "297", "Animal Skins", "Uncommon", "AGG +2", "500", "body"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Baarbarian-Gotchi-Horned-Helmet.svg" alt="aavegotchi Horned Helmet" title="Horned Helmet"/>`, "298", "Horned Helmet", "Common", "BRN -1", "1000", "head"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Ranger-Gotchi-Longbow.svg" alt="aavegotchi Longbow" title="Longbow"/>`, "299", "Longbow", "Uncommon", "AGG -1, BRN +1", "500", "hands"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Ranger-Gotchi-Feathered-Cap.svg" alt="aavegotchi Feathered Cap" title="Feathered Cap"/>`, "300", "Feathered Cap", "Uncommon", "NRG -1, SPK -1", "500", "head"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Geisha-Gotchi-Alluring-Eyes.svg" alt="aavegotchi Alluring Eyes" title="Alluring Eyes"/>`, "301", "Alluring Eyes", "Rare", "AGG -2, BRN +1", "250", "eyes"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Geisha-Gotchi-Head-Piece.svg" alt="aavegotchi Geisha Headpiece" title="Geisha Headpiece"/>`, "302", "Geisha Headpiece", "Rare", "NRG -2, AGG -1", "250", "head"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Geisha-Gotchi-Kimono.svg" alt="aavegotchi Kimono" title="Kimono"/>`, "303", "Kimono", "Rare", "NRG -1, AGG -2", "250", "body"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Geisha-Gotchi-Paper-Fan.svg" alt="aavegotchi Paper Fan" title="Paper Fan"/>`, "304", "Paper Fan", "Rare", "AGG -3", "250", "hands"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Fairy-Gotchi-Sus-Butterfly.svg" alt="aavegotchi Sus Butterfly" title="Sus Butterfly"/>`, "305", "Sus Butterfly", "Legendary", "AGG +4", "100", "pet"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Fairy-Gotchi-Flower-Studs.svg" alt="aavegotchi Flower Studs" title="Flower Studs"/>`, "306", "Flower Studs", "Legendary", "NRG -2, SPK -2", "100", "face"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Fairy-Gotchi-Fairy-Wings.svg" alt="aavegotchi Fairy Wings" title="Fairy Wings"/>`, "307", "Fairy Wings", "Legendary", "NRG -2, SPK -2", "100", "body"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Fairy-Gotchi-Red-Hair.svg" alt="aavegotchi Red Hair" title="Red Hair"/>`, "308", "Red Hair", "Legendary", "NRG -2, SPK -2", "100", "head"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Citaadel-Knight-Gotchi-Citaadel-Helm.svg" alt="aavegotchi Citaadel Helm" title="Citaadel Helm"/>`, "309", "Citaadel Helm", "Mythical", "NRG +3, AGG -2", "50", "head"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Citaadel-Knight-Gotchi-Plate-Armor.svg" alt="aavegotchi Plate Armor" title="Plate Armor"/>`, "310", "Plate Armor", "Mythical", "NRG +3, AGG -2", "50", "body"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Citaadel-Knight-Gotchi-Spirit-Sword.svg" alt="aavegotchi Spirit Sword" title="Spirit Sword"/>`, "311", "Spirit Sword", "Mythical", "NRG +2, AGG -3", "50", "hands"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Citaadel-Knight-Gotchi-Plate-Shield.svg" alt="aavegotchi Plate Shield" title="Plate Shield"/>`, "312", "Plate Shield", "Mythical", "AGG -5", "50", "hands"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Bushidogotchi-Gotchi-Kabuto-Helmet.svg" alt="aavegotchi Kabuto Helmet" title="Kabuto Helmet"/>`, "313", "Kabuto Helmet", "Godlike", "AGG +3, SPK +3", "5", "head"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Bushidogotchi-Gotchi-Yoroi-Armor.svg" alt="aavegotchi Yoroi Armor" title="Yoroi Armor"/>`, "314", "Yoroi Armor", "Godlike", "AGG +3, SPK +3", "5", "body"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Bushidogotchi-Gotchi-Haanzo-Katana.svg" alt="aavegotchi Haanzo Katana" title="Haanzo Katana"/>`, "315", "Haanzo Katana", "Godlike", "AGG +2, SPK +4", "5", "hands"]
                ]
            }
        },
		
		{
            tableName: "forgeWearablesTable",
            tableCaption: "Forge Wearables",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
                    [`<img style="object-fit:contain" src="/wearables/forge/350_Pixelcraft_Tee.svg" alt="aavegotchi Pixelcraft Tee" title="Pixelcraft Tee"/>`, `350`, `Pixelcraft Tee`, `Common`, `NRG +1`, `1000`, `body`],
					[`<img style="object-fit:contain" src="/wearables/forge/351_3D_Glasses.svg" alt="aavegotchi 3D Glasses" title="3D Glasses"/>`, `351`, `3D Glasses`, `Common`, `BRN +1`, `1000`, `eyes`],
					[`<img style="object-fit:contain" src="/wearables/forge/352_Pixelcraft_Square.svg" alt="aavegotchi Pixelcraft Square" title="Pixelcraft Square"/>`, `352`, `Pixelcraft Square`, `Common`, `SPK -1`, `1000`, `hands`],
					[`<img style="object-fit:contain" src="/wearables/forge/353_Nimbus.svg" alt="aavegotchi Nimbus" title="Nimbus"/>`, `353`, `Nimbus`, `Common`, `AGG -1`, `1000`, `pet`],
					[`<img style="object-fit:contain" src="/wearables/forge/354_AlchemicaApron.svg" alt="aavegotchi Alchemica Apron" title="Alchemica Apron"/>`, `354`, `Alchemica Apron`, `Uncommon`, `NRG +1, BRN -1`, `500`, `body`],
					[`<img style="object-fit:contain" src="/wearables/forge/355_SafetyGlasses.svg" alt="aavegotchi Safety Glasses" title="Safety Glasses"/>`, `355`, `Safety Glasses`, `Rare`, `NRG +1, AGG +2`, `250`, `eyes`],
					[`<img style="object-fit:contain" src="/wearables/forge/356_Bandage.svg" alt="aavegotchi Bandage" title="Bandage"/>`, `356`, `Bandage`, `Uncommon`, `SPK +1, BRN -1`, `500`, `face`],
					[`<img style="object-fit:contain" src="/wearables/forge/357_NailGun.svg" alt="aavegotchi Nail Gun" title="Nail Gun"/>`, `357`, `Nail Gun`, `Rare`, `NRG +1, SPK +2`, `250`, `hands`],
					[`<img style="object-fit:contain" src="/wearables/forge/358_FlamingApron.svg" alt="aavegotchi Flaming Apron" title="Flaming Apron"/>`, `358`, `Flaming Apron`, `Legendary`, `NRG -2, AGG -2`, `100`, `body`],
					[`<img style="object-fit:contain" src="/wearables/forge/359_ForgeGoggles.svg" alt="aavegotchi Forge Goggles" title="Forge Goggles"/>`, `359`, `Forge Goggles`, `Legendary`, `NRG -1, AGG -3`, `100`, `eyes`],
					[`<img style="object-fit:contain" src="/wearables/forge/360_GeodeSmasher.svg" alt="aavegotchi Geode Smasher" title="Geode Smasher"/>`, `360`, `Geode Smasher`, `Legendary`, `SPK +2, BRN +2`, `100`, `hands`],
					[`<img style="object-fit:contain" src="/wearables/forge/361_Geo.svg" alt="aavegotchi Geo" title="Geo"/>`, `361`, `Geo`, `Legendary`, `AGG -2, SPK +2`, `100`, `pet`],
					[`<img style="object-fit:contain" src="/wearables/forge/362_FAKE_Shirt.svg" alt="aavegotchi FAKE Shirt" title="FAKE Shirt"/>`, `362`, `FAKE Shirt`, `Mythical`, `SPK -4, BRN -1`, `50`, `body`],
					[`<img style="object-fit:contain" src="/wearables/forge/363_FAKE_Beret.svg" alt="aavegotchi FAKE Beret" title="FAKE Beret"/>`, `363`, `FAKE Beret`, `Mythical`, `NRG -3, BRN -2`, `50`, `head`],
					[`<img style="object-fit:contain" src="/wearables/forge/364_Paint_Brush.svg" alt="aavegotchi Paint Brush" title="Paint Brush"/>`, `364`, `Paint Brush`, `Mythical`, `NRG -3, SPK -2`, `50`, `hands`],
					[`<img style="object-fit:contain" src="/wearables/forge/365_Paint_Palette.svg" alt="aavegotchi Paint Palette" title="Paint Palette"/>`, `365`, `Paint Palette`, `Mythical`, `SPK -1, BRN -4`, `50`, `hands`],
					[`<img style="object-fit:contain" src="/wearables/forge/366_HeavenlyRobes.svg" alt="aavegotchi Heavenly Robes" title="Heavenly Robes"/>`, `366`, `Heavenly Robes`, `Godlike`, `NRG +4, BRN -2`, `5`, `body`],
					[`<img style="object-fit:contain" src="/wearables/forge/367_EyesOfDevotion.svg" alt="aavegotchi Eyes of Devotion" title="Eyes of Devotion"/>`, `367`, `Eyes of Devotion`, `Godlike`, `SPK -3, BRN -3`, `5`, `eyes`],
					[`<img style="object-fit:contain" src="/wearables/forge/368_BeardOfDivinity.svg" alt="aavegotchi Beard of Divinity" title="Beard of Divinity"/>`, `368`, `Beard of Divinity`, `Godlike`, `SPK -3, BRN -3`, `5`, `face`],
					[`<img style="object-fit:contain" src="/wearables/forge/369_StaffOfCreation.svg" alt="aavegotchi Staff of Creation" title="Staff of Creation"/>`, `369`, `Staff of Creation`, `Godlike`, `SPK -3, BRN -3`, `5`, `hands`]
                ]
            }
        },

		{
            tableName: "forgeWearables2Table",
            tableCaption: "Forge Wearables 2",
            tableData: {
                headers: ["Image", "ID", "Name", "Rarity", "Stats", "Quantity", "Slot"],
                data: [
                    [`<img style="object-fit:contain" src="/wearables/forge2/370_WavyHair.svg" alt="aavegotchi Wavy Hair" title="Wavy Hair"/>`, `370`, `Wavy Hair`, `Common`, `NRG +1`, `1000`, `head`],
					[`<img style="object-fit:contain" src="/wearables/forge2/371_PlasticEarrings.svg" alt="aavegotchi Plastic Earrings" title="Plastic Earrings"/>`, `371`, `Plastic Earrings`, `Common`, `NRG +1`, `1000`, `face`],
					[`<img style="object-fit:contain" src="/wearables/forge2/372_PartyDress.svg" alt="aavegotchi Party Dress" title="Party Dress"/>`, `372`, `Party Dress`, `Common`, `BRN +1`, `1000`, `body`],
					[`<img style="object-fit:contain" src="/wearables/forge2/373_Overalls.svg" alt="aavegotchi Overalls" title="Overalls"/>`, `373`, `Overalls`, `Uncommon`, `SPK -2`, `500`, `body`],
					[`<img style="object-fit:contain" src="/wearables/forge2/374_LensFrensPlant.svg" alt="aavegotchi Lens n Frens Plant" title="Lens n Frens Plant"/>`, `374`, `Lens n Frens Plant`, `Rare`, `NRG +2, BRN -1`, `250`, `pet`],
					[`<img style="object-fit:contain" src="/wearables/forge2/375_GMSeeds.svg" alt="aavegotchi GM Seeds" title="GM Seeds"/>`, `375`, `GM Seeds`, `Common`, `SPK -1`, `1000`, `left hand`],
					[`<img style="object-fit:contain" src="/wearables/forge2/376_LickBrain.svg" alt="aavegotchi Lick Brain" title="Lick Brain"/>`, `376`, `Lick Brain`, `Rare`, `AGG +2, BRN -1`, `250`, `head`],
					[`<img style="object-fit:contain" src="/wearables/forge2/377_LickEyes.svg" alt="aavegotchi Lick Eyes" title="Lick Eyes"/>`, `377`, `Lick Eyes`, `Uncommon`, `SPK -2`, `500`, `eyes`],
					[`<img style="object-fit:contain" src="/wearables/forge2/378_LickTongue.svg" alt="aavegotchi Lick Tongue" title="Lick Tongue"/>`, `378`, `Lick Tongue`, `Rare`, `SPK -3`, `250`, `face`],
					[`<img style="object-fit:contain" src="/wearables/forge2/379_LickTentacle.svg" alt="aavegotchi Lick Tentacle" title="Lick Tentacle"/>`, `379`, `Lick Tentacle`, `Rare`, `NRG -3`, `250`, `hand`],
					[`<img style="object-fit:contain" src="/wearables/forge2/380_SebastienHair.svg" alt="aavegotchi Sebastien Hair" title="Sebastien Hair"/>`, `380`, `Sebastien Hair`, `Legendary`, `NRG +2, SPK -2`, `100`, `head`],
					[`<img style="object-fit:contain" src="/wearables/forge2/381_VoxelEyes.svg" alt="aavegotchi Voxel Eyes" title="Voxel Eyes"/>`, `381`, `Voxel Eyes`, `Legendary`, `NRG +1, AGG -3`, `100`, `eyes`],
					[`<img style="object-fit:contain" src="/wearables/forge2/382_GOATee.svg" alt="aavegotchi GOAT-ee" title="GOAT-ee"/>`, `382`, `GOAT-ee`, `Legendary`, `NRG +1, AGG -3`, `100`, `face`],
					[`<img style="object-fit:contain" src="/wearables/forge2/383_SandboxHoodie.svg" alt="aavegotchi Sandbox Hoodie" title="Sandbox Hoodie"/>`, `383`, `Sandbox Hoodie`, `Legendary`, `NRG +3, AGG -1`, `100`, `body`],
					[`<img style="object-fit:contain" src="/wearables/forge2/384_Faangs.svg" alt="aavegotchi Faangs" title="Faangs"/>`, `384`, `Faangs`, `Mythical`, `SPK +5`, `50`, `face`],
					[`<img style="object-fit:contain" src="/wearables/forge2/385_BlockScanners.svg" alt="aavegotchi Block Scanners" title="Block Scanners"/>`, `385`, `Block Scanners`, `Godlike`, `NRG +6`, `5`, `eyes`],
					[`<img style="object-fit:contain" src="/wearables/forge2/386_StaffCharming.svg" alt="aavegotchi Staff of Charming" title="Staff of Charming"/>`, `386`, `Staff of Charming`, `Godlike`, `NRG -4, BRN -2`, `5`, `hands`],
					[`<img style="object-fit:contain" src="/wearables/forge2/387_Roflnoggin.svg" alt="aavegotchi Roflnoggin" title="Roflnoggin"/>`, `387`, `Roflnoggin`, `Godlike`, `BRN -6`, `5`, `head`]
                ]
            }
        },

        {
            tableName: "wearablesBRStable",
            tableCaption: "Wearable Rarity and BRS Bonus",
            tableData: {
                headers: ["Rarity Type", "Quantity", "BRS Bonus"],
                data: [
                    ["Common", "1000", "+1"],
                    ["Uncommon", "500", "+2"],
                    ["Rare", "250-308", "+5"],
                    ["Legendary", "100-150", "+10"],
                    ["Mythical", "10-50", "+20"],
                    ["Godlike", "5", "+50"],

                ]
            }
        },
		
		{
            tableName: "wearablesVotingPower",
            tableCaption: "Wearables Voting Power",
            tableData: {
                headers: ["Rarity Type", "Voting Power"],
                data: [
                    ["Common", "5 GHST"],
                    ["Uncommon", "10 GHST"],
                    ["Rare", "100 GHST"],
                    ["Legendary", "300 GHST"],
                    ["Mythical", "2000 GHST"],
                    ["Godlike", "10000 GHST"],

                ]
            }
        }
    ]
