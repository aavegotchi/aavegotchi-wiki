

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
            tableName: "forgingCostsSmeltingYields",
            tableCaption: "",
            tableData: {
                headers: ["Rarity", "Alloy Cost to Forge", "Alloy Received upon Smelting"],
                data: [
                    ["Common", "100", "90"],
					["Uncommon", "300", "270"],
					["Rare", "1,300", "1,170"],
					["Legendary", "5,300", "4,770"],
					["Mythical", "25,000", "22,500"],
					["Godlike", "130,000", "117,000"]
                ]
            }
        },
		{
            tableName: "geodePrizeDistributionPercentage",
            tableCaption: "",
            tableData: {
                headers: ["Rarity", "Prize Distribution (%)"],
                data: [
                    ["Common", "0.7920"],
					["Uncommon", "2.3573"],
					["Rare", "9.8209"],
					["Legendary", "34.3900"],
					["Mythical", "86.3022"],
					["Godlike", "100"]
                ]
            }
        },
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
        },
		{
            tableName: "blacksmithingLevels",
            tableCaption: "",
            tableData: {
                headers: ["Level", "Forging Time Multiplier", "Skill Points Required<br>(this level)", "Skill Points Required<br>(cumulative)"],
                data: [
                    ["1", "1.00", "0", "0"],
					["2", "0.97", "16", "16"],
					["3", "0.94", "22", "38"],
					["4", "0.91", "31", "69"],
					["5", "0.89", "44", "113"],
					["6", "0.86", "61", "174"],
					["7", "0.83", "85", "259"],
					["8", "0.81", "119", "378"],
					["9", "0.78", "166", "544"],
					["10", "0.76", "232", "776"],
					["...", "...", "...", "..."],
					["15", "0.65", "1,245", "4,323"],
					["...", "...", "...", "..."],
					["20", "0.56", "6,694", "23,398"],
					["...", "...", "...", "..."],
					["25", "0.48", "36,000", "125,970"],
					["...", "...", "...", "..."]
                ]
            }
		}
    ]
