

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
        },
		{
            tableName: "alchemicaReceivedPerChanneling",
            tableCaption: "",
            tableData: {
                headers: ["Kinship", "Modifier"],
                data: [
                    ["25", "0"],
					["50", "1.00x"],
					["100", "1.41x"],
					["200", "2.00x"],
					["500", "3.16x"],
					["1,000", "4.47x"],
					["2,000", "6.32x"],
					["5,000", "10.00x"],
					["10,000", "14.14x"]
                ]
            }
        }
    ]


