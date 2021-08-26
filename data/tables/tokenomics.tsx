

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
            tableName: "revenueSharing",
            tableCaption: "",
            tableData: {
                headers: ["Category", "V1", "V2"],
                data: [
                    [`EARN IT`, `40%`, `40%`],
                    [`DAO IT`, `10%`, `15%`],
                    [`BURN IT`, `33%`, `5%`],
					[`BUIDL IT`, `17%`, `40%`]
                ]
            }
        }
    ]
