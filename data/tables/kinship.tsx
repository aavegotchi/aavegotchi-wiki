

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
            tableName: "kinship",
            tableCaption: "",
            tableData: {
                headers: ["Kinship Level", "Range"],
                data: [
                    ["Inseparable", ">500"],
                    ["Devoted", "101-500"],
                    ["Cozy", "91-100"],
                    ["Chummy", "76-90"],
                    ["Frenly", "51-75"],
                    ["Neutral", "41-50"],
					["Angry", "26-40"],
					["Resentful", "11-25"],
					["Scorned", "0-10"]
                ]
            }
        }
    ]


