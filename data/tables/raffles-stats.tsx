

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
            tableName: "raffle1",
            tableCaption: "",
            tableData: {
                headers: ["Category", "Tickets submitted", "Probability"],
                data: [
                    ["Common", "47515", "0.06313796"],
                    ["Uncommon", "14290", "0.1049685"],
                    ["Rare", "13404", "0.06714414"],
					["Legendary", "8287", "0.05430192"],
					["Mythical", "3896", "0.03850103"],
					["Godlike", "1570", "0.006369427"]
                ]
            }
        },
		
		{
            tableName: "raffle2",
            tableCaption: "",
            tableData: {
                headers: ["Category", "Tickets submitted", "Probability"],
                data: [
                    ["Common", "66569", "0.04506602"],
                    ["Uncommon", "24773", "0.06054979"],
                    ["Rare", "26439", "0.02836718"],
					["Legendary", "13463", "0.02228329"],
					["Mythical", "6200", "0.02419355"],
					["Godlike", "1388", "0.01080692"]
                ]
            }
        },
		
        {
            tableName: "raffle3",
            tableCaption: "",
            tableData: {
                headers: ["Category", "Tickets submitted", "Probability"],
                data: [
                    ["Common", "49190", "0.06098801"],
                    ["Uncommon", "18717", "0.08014105"],
                    ["Rare", "22289", "0.03364889"],
					["Legendary", "12008", "0.02498334"],
					["Mythical", "6724", "0.0297442"],
					["Godlike", "1220", "0.01229508"]
                ]
            }
        }
    ]
