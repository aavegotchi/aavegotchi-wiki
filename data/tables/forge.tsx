

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
            tableName: "forgingTime",
            tableCaption: "",
            tableData: {
                headers: ["Rarity", "Forging Time (In Polygon Blocks)"],
                data: [
                    ["Common", "32,922"],
					["Uncommon", "98,765"],
					["Rare", "296,296"],
					["Legendary", "888,889"],
					["Mythical", "2,666,667"],
					["Godlike", "8,000,000"]
                ]
            }
        },
		
		{
            tableName: "skillPointsEarned",
            tableCaption: "",
            tableData: {
                headers: ["Rarity", "Skill Points Earned from Forging", "Skill Points Earned from Smelting"],
                data: [
                    ["Common", "4", "2"],
					["Uncommon", "12", "6"],
					["Rare", "52", "26"],
					["Legendary", "212", "106"],
					["Mythical", "1,000", "500"],
					["Godlike", "5,200", "2,600"]
                ]
            }
        }
    ]
