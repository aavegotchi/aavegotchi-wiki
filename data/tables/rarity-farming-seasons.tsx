

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
                headers: [`Category`, `Season 1`, `Season 2`, `Season 3`, `Season 4`, `Season 5`, `Season 6`, `Season 7`, `Season 8`],
                data: [
                    [`Rarity`, `980,000 GHST`, `1,200,000 GHST`, `1,050,000 GHST`, `1,050,000 GHST`, `1,050,000 GHST`, `1,050,000 GHST`, `1,050,000 GHST`, `900,000 GHST`],
					[`Kinship`, `280,000 GHST`, `200,000 GHST`, `300,000 GHST`, `300,000 GHST`, `300,000 GHST`, `300,000 GHST`, `300,000 GHST`, `300,000 GHST`],
					[`XP`, `140,000 GHST`, `200,000 GHST`, `150,000 GHST`, `150,000 GHST`, `150,000 GHST`, `150,000 GHST`, `150,000 GHST`, `150,000 GHST`],
					[`Rookie Kinship`, `-`, `200,000 GHST`, `-`, `-`, `-`, `-`, `-`, `-`],
					[`Rookie XP`, `-`, `200,000 GHST`, `-`, `-`, `-`, `-`, `-`, `-`],
					[`Gotchi Battler`, `-`, `-`, `-`, `-`, `-`, `-`, `100,000 GHST`, `150,000 GHST`]
                ]
            }
        }
    ]
