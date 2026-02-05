

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
            tableName: "totalSupplyAllocation",
            tableCaption: "",
            tableData: {
                headers: ["Category", "FUD", "FOMO", "ALPHA", "KEK"],
                data: [
                    ["Channeling", "25,000,000,000", "12,500,000,000", "6,250,000,000", "2,500,000,000"],
					["Ecosystem", "10,000,000,000", "5,000,000,000", "2,500,000,000", "1,000,000,000"],
					["Gameplay (Boosts)", "5,000,000,000", "2,500,000,000", "1,250,000,000", "500,000,000"],
					["Gameplay (Other)", "10,000,000,000", "5,000,000,000", "2,500,000,000", "1,000,000,000"],
					["Parcel Allocation (Act 1)", "25,000,000,000", "12,500,000,000", "6,250,000,000", "2,500,000,000"],
					["Parcel Allocation (Act 2)", "15,000,000,000", "7,500,000,000", "3,750,000,000", "1,500,000,000"],
					["Parcel Allocation (Act 3)", "10,000,000,000", "5,000,000,000", "2,500,000,000", "1,000,000,000"],
					["<b>Total</b>", "<b>100,000,000,000</b>", "<b>50,000,000,000</b>", "<b>25,000,000,000</b>", "<b>10,000,000,000</b>"]
                ]
            }
        },

    ]
