

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
                headers: ["Trait", "Rarity", "Trait Value", "Trait Value Name", "BRS", "ARS"],
                data: [
                    ["Energy", "Common", "61", "Calm", "62", "40 (60% possess)"],
                    ["Aggressiveness", "Uncommon", "78", "Combative", "79", "80 (20% possess)"],
                    ["Spookiness", "Common", "27", "Neutral", "73", "45 (55% possess)"],
                    ["Brain Size", "Mythical", "99", "Galaxy", "100", "97 (3% possess)"],
                    ["Wizard Hat wearable", "Rare", "-", "-", "10", "-"],
                    ["Wizard Staff wearable", "Godlike", "-", "-", "50", "-"],
                    ["TOTAL BRS", "-", "-", "-", "466", "-"],
                    ["TOTAL ARS", "-", "-", "-", "-", "352"],
                    ["<b>FINAL RARITY SCORE</b>", "", "", "", "", "<b>818</b>"],


                ]
            }
        },

    ]
