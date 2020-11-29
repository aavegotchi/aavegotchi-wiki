

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
            tableName: "PortalTraitTable",
            tableCaption: "Trait Range and Rarity Probabilities",
            tableData: {
                headers: ["Rarity Type", "Range (Low)", "Range (High)", "Percentage"],
                data: [
                    ["Common", "25 - 74", "25 - 74", "50%"],
                    ["Uncommon", "10 - 24", "75 - 90", "30%"],
                    ["Rare", "2 - 9", "91 - 98", "16%"],
                    ["Mythical", "0 - 1", "99 - 100", "4%"],
                    
                ]
            }
        },

    ]
