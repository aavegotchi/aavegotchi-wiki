

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
            tableName: "brsBoost",
            tableCaption: "",
            tableData: {
                headers: ["Cumulative BRS Boost", "# of blocks elapsed since birth"],
                data: [
				    [`+1`, `1 million`],
					[`+2`, `2 million`],
					[`+3`, `3 million`],
					[`+4`, `5 million`],
					[`+5`, `8 million`],
					[`+6`, `13 million`],
					[`+7`, `21 million`],
					[`+8`, `34 million`],
					[`+9`, `55 million`],
					[`+10`, `89 million`]
                ]
            }
        },
    ]
