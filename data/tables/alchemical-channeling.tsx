

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
        },
		{
            tableName: "aaltarAndSpilloverRate",
            tableCaption: "",
            tableData: {
                headers: ["Level", "Spillover Rate"],
                data: [
                    ["1", "100%"],
					["2", "90%"],
					["3", "80%"],
					["4", "70%"],
					["5", "60%"],
					["6", "50%"],
					["7", "40%"],
					["8", "30%"],
					["9", "20%"]
                ]
            }
        },
		{
            tableName: "aaltarLevelAndAlchemicalChannelings",
            tableCaption: "",
            tableData: {
                headers: ["Level", "Channeling"],
                data: [
                    ["1", "can channel every 24 hours"],
					["2", "can channel every 18 hours"],
					["3", "can channel every 12 hours"],
					["4", "can channel every 8 hours"],
					["5", "can channel every 6 hours"],
					["6", "can channel every 4 hours"],
					["7", "can channel every 3 hours"],
					["8", "can channel every 2 hours"],
					["9", "can channel every hour"]
                ]
            }
        },
    ]


