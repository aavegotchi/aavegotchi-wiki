

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
            tableName: "agip1",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes", "2,540,143 GHST"],
					["No", "601 GHST"]
				]
            }
        }		
    ]
