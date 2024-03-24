

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
            tableName: "RarityScoreCalculationTable",
            tableCaption: "Final Rarity Score Calculation Example",
            tableData: {
                headers: ["Trait", "Rarity", "Trait Value", "Trait Value Name", "BRS"],
                data: [
                    ["Energy", "Common", "61", "Calm", "62"],
                    ["Aggressiveness", "Uncommon", "78", "Combative", "79"],
                    ["Spookiness", "Common", "27", "Scary", "73"],
                    ["Brain Size", "Mythical", "99", "Galaxy", "100"],
					["Eye Shape", "Rare", "8", "Flat Line", "92"],
					["Eye Color", "Uncommon", "77", "Teal", "78"],
                    ["Wizard Hat wearable", "Rare", "-", "-", "5"],
                    ["Wizard Staff wearable", "Godlike", "-", "-", "50"],
                    ["TOTAL BRS", "-", "-", "-", "539"]
                ]
            }
        },

    ]
