

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
            tableName: "rarityFarmingSeasons",
            tableCaption: "",
            tableData: {
                headers: [`Category`, `Season 1`, `Season 2`, `Season 3`, `Season 4`, `Season 5`, `Season 6`, `Season 7`, `Season 8`, `Season 9`],
                data: [
                    [`Rarity`, `980,000 GHST`, `1,200,000 GHST`, `1,050,000 GHST`, `1,050,000 GHST`, `1,050,000 GHST`, `1,050,000 GHST`, `1,050,000 GHST`, `900,000 GHST`, `750,000 GHST`],
					[`Kinship`, `280,000 GHST`, `200,000 GHST`, `300,000 GHST`, `300,000 GHST`, `300,000 GHST`, `300,000 GHST`, `300,000 GHST`, `300,000 GHST`, `300,000 GHST`],
					[`XP`, `140,000 GHST`, `200,000 GHST`, `150,000 GHST`, `150,000 GHST`, `150,000 GHST`, `150,000 GHST`, `150,000 GHST`, `150,000 GHST`, `150,000 GHST`],
					[`Rookie Kinship`, `-`, `200,000 GHST`, `-`, `-`, `-`, `-`, `-`, `-`, `-`],
					[`Rookie XP`, `-`, `200,000 GHST`, `-`, `-`, `-`, `-`, `-`, `-`, `-`],
					[`Gotchi Battler`, `-`, `-`, `-`, `-`, `-`, `-`, `100,000 GHST`, `150,000 GHST`, `300,000 GHST`]
                ]
            }
        },
		
		      {
            tableName: "gotchiBattlerSeason8",
            tableCaption: "",
            tableData: {
                headers: ["Rank", "10K GHST Tournament", "40K GHST Tournament", "100K GHST Tournament"],
                data: [
                    ["1", "1000", "4000", "10000"],
					["2", "640", "2560", "6400"],
					["3", "360", "1440", "3600"],
					["4", "240", "960", "2400"],
					["5-6", "152", "608", "1520"],
					["7-8", "104", "416", "1040"],
					["9-12", "80", "320", "800"],
					["13-16", "66", "264", "660"],
					["17-24", "54", "216", "540"],
					["25-32", "45", "180", "450"],
					["33-48", "38", "152", "380"],
					["49-64", "31", "124", "310"],
					["65-96", "25", "100", "250"],
					["97-128", "20", "80", "200"],
					["129-192", "15", "60", "150"],
					["193-256", "11", "44", "110"],
					["257-384", "8", "32", "80"],
					["385-512", "5", "20", "50"]
                ]
            }
        },
    ]
