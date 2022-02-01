

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
            tableName: "chatCommands",
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
					[`L`, `<b>L</b>ightning`]
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
					["Harvesters", "Harvesters allow Parcels to harvest Alchemica from the Parcel without relying on Aavegotchi’s Alchemical channeling. Harvesters are initially not very accurate, and a large portion of the Alchemica extracted from the Realm will be spilled around the premises, for nearby Aavegotchis or Lickquidators to capture."],
					["Reservoirs", "Reservoirs store the Alchemica harvested by Harvesters. Initially the storage is quite small, but can be upgraded over time."],
					["Walls", "Walls are defensive structures that can be built to enclose ones’ Parcel and prevent spilled Alchemica from being stolen. Walls can be upgraded to improve their toughness."],
					["Towers", "Towers are offensive structures that can be built to protect against Lickquidator raids. They can be upgraded to improve their traits. Towers cannot be built inside the Citaadel premises, except in certain special regions."],
					["Black Hole", "Black Holes are powerful, mystical objects that exert a gravitational pull on all nearby Lickquidators, slowly draining their health and bringing them closer towards the Parcel."],
					["NPC as Dapps", "Dapps will be playable directly within the Gotchiverse. An early example of this will be the GotchiDEX dapp, a DEX specially created for providing liquidity for the Gotchus Alchemica. A developer SDK will be created to allow other developers to re-skin their smart contract frontends to work as NPCs within the Gotchiverse."],
					["Antennas", "Antennas are used for in-parcel voice chat among Gotchis. We are frenly and sociable!"],
					["Display Cases", "Inviting a Gotchi fren over to your parcel? Show off your Art, Baadge, and Trophy NFTs in Display Cases."]
				]
            }
        }		
    ]
