

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
            tableName: "kyc",
            tableCaption: "",
            tableData: {
                headers: ["Resident", "Play the game", "Buy Portals with GHST", "Buy items with GHST", "Stake GHST", "Purchase GHST off-curve (i.e. Uniswap, 1inch, etc)", "Purchase GHST from bonding curve directly"],
                data: [
                    ["USA, Iran, China, India, Pakistan", "Yes", "Yes", "Yes", "Yes", "Yes", "No"],
                    ["Everywhere else", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes (with KYC)"]					
                ]
            }
        }
    ]
