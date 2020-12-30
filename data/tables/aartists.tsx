

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
            tableName: "aartists",
            tableCaption: "",
            tableData: {
                headers: ["Handle", "Pic", "Self-Description"],
                data: [
                    [`Cawito`],
                    [`Esveebee`],
                    [`Ka Wai Leong`],
					[`Qurka`],
					[`Rod`],
					[`ShadowLord Obeeus`],
					[`SnottySnake`],
					[`Vanilladelphia`]
                ]
            }
        }


    ]
