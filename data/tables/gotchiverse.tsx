

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
            tableName: "gotchusAlchemicaSupply",
            tableCaption: "",
            tableData: {
                headers: ["Token", "Total Supply"],
                data: [
                    [`FUD`, `100,000,000,000`],
					[`FOMO`, `50,000,000,000`],
					[`ALPHA`, `25,000,000,000`],
					[`KEK`, `10,000,000,000`]
				]
            }
        },
		
	    {
            tableName: "controls",
            tableCaption: "",
            tableData: {
                headers: ["Hotkey", "Animation"],
                data: [
                    [`H`, `<b>H</b>eart`],
					[`N`, `Spi<b>N</b>`],
					[`E`, `<b>E</b>xclamation point`],
					[`F`, `Happy <b>F</b>ace`],
					[`U`, `<b>U</b>nhappy Face`],
					[`O`, `<b>O</b>MG`],
					[`B`, `<b>B</b>urning Fire`],
					[`L`, `<b>L</b>ightning`],
					[`Shift + Direction keys`, `Run`],
					[`Left Mouse Button`, `Shoot`],
					[`Left Mouse Button (Hold & Release)`, `Charged Shot`],
					[`Right Mouse Button`, `Melee Attack`],
					[`Right Mouse Button (Hold & Release)`, `Teleport`]
				]
            }
        },
		
		{
            tableName: "avgBaseAlchemicaPerParcelAct1Total",
            tableCaption: "Avg. Base Alchemica Per Parcel (Act I Total)",
            tableData: {
                headers: ["Land Size", "FUD", "FOMO", "ALPHA", "KEK"],
                data: [
                    ["Humble", "28,473", "14,237", "7,118", "2,847"],
					["Reasonable", "113,893", "56,947", "28,473", "11,389"],
					["Spacious", "911,145", "455,573", "227,786", "91,115"],
					["Paartner", "1,822,290", "911,145", "455,573", "182,229"]
				]
            }
        },
		
		{
            tableName: "avgBaseAlchemicaPerParcelAct1FirstRound",
            tableCaption: "Avg. Base Alchemica Per Parcel (Act I 1st Round)",
            tableData: {
                headers: ["Land Size", "Round %", "FUD", "FOMO", "ALPHA", "KEK"],
                data: [
                    ["Humble", "25%", "7,077", "3,539", "1,769", "708"],
					["Reasonable", "25%", "28,308", "14,154", "7,077", "2,831"],
					["Spacious", "25%", "226,465", "113,233", "56,616", "22,647"],
				]
            }
        },
		
        {
            tableName: "installations",
            tableCaption: "",
            tableData: {
                headers: ["Installation Name", "Description"],
                data: [
                    ["Alchemical Aaltar", "The most important Installation on the Parcel. Initially used for Alchemical Channeling with the Parcel’s linked Aavegotchi. Can also be upgraded to further the tech tree of various other Installations. Included with REALM parcel."],
					["Gotchi Lodge", "The social hub of a Parcel. Can be upgraded to support voice chat within the Parcel or globally for Guild members. Aavegotchis can link to a Guild House to engage in communal channeling, a spectral ritual that lowers kinship but increases the Alchemical channeled to each Aavegotchi for a short period."],
					["Haarvesters", "Haarvesters are Installations that allow players to extract Alchemica from beneath the surface of their Gotchiverse REALM parcels. Each harvester is capable of harvesting one type of Gotchus Alchemica, and each upgrade increases the harvest rate, allowing the player to harvest Alchemica faster."],
					["Reservoirs", "Reservoirs hold the Alchemica harvested by the Haarvesters. Like Haarvesters, each Reservoir Installation is able to hold one type of Alchemica. As the level of a Reservoir increases, the Reservoir’s capacity increases, and the spillover rate and radius decrease.<p></p>To prevent excess load on the Polygon blockchain, each parcel can only have its Reservoirs emptied once every eight hours. The timer begins after a successful emptying transaction occurs and will not be reset by equipping or unequipping Reservoirs."],
					["Maakers", "By default, players are only able to upgrade one Installation per parcel at a time. Equipping a Maaker Installation adds Maakerbots to your parcel, increasing the number of simultaneous upgrades that can be performed. The higher the Maaker level, the more upgrades that can be performed at the same time. Keep in mind that only one Maaker can be equipped to each of your parcels."],
					["Walls", "Walls are defensive structures that can be built to enclose ones’ Parcel and prevent spilled Alchemica from being stolen. Walls can be upgraded to improve their toughness."],
					["Towers", "Towers are offensive structures that can be built to protect against Lickquidator raids. They can be upgraded to improve their traits. Towers cannot be built inside the Citaadel premises, except in certain special regions."],
					["Black Hole", "Black Holes are powerful, mystical objects that exert a gravitational pull on all nearby Lickquidators, slowly draining their health and bringing them closer towards the Parcel."],
					["NPC as Dapps", "Dapps will be playable directly within the Gotchiverse. An early example of this will be the GotchiDEX dapp, a DEX specially created for providing liquidity for the Gotchus Alchemica. A developer SDK will be created to allow other developers to re-skin their smart contract frontends to work as NPCs within the Gotchiverse."],
					["Antennas", "Antennas are used for in-parcel voice chat among Gotchis. We are frenly and sociable!"],
					["Display Cases", "Inviting a Gotchi fren over to your parcel? Show off your Art, Baadge, and Trophy NFTs in Display Cases."]
				]
            }
        },
		
		{
            tableName: "alchemicalBoostsAndAmountPerLocation",
            tableCaption: "Alchemica Boosts and Amount per Location",
            tableData: {
                headers: ["Boosts", "Amount", "Citaadel", "Grid"],
                data: [
                    ["FUD", "1,000", "16,512", "TBD"],
					["FOMO", "500", "14,063", "TBD"],
					["ALPHA", "250", "16,933", "TBD"],
					["KEK", "100", "5,255", "TBD"]
				]
            }
        },
    ]
