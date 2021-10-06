

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
            tableName: "guild",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Emblem", "Description", "Requirement", "Point of Contact", "Social Media", "Discord"],
                data: [
					[`Los Mustachos`, `<img src="/guild/mustachos.png" alt = "Los Mustachos Guild" />`, `First and only spanglish guild for Mustacho aficionados. Decentralized`, `None, but a moustache earns you voting power. <br> 1 mustache= 1 vote`, `Fantasma#1777`, ``, `<a href = "https://discord.gg/bnAKfeczhu" target = "_blank">Link</a>`]
				]
            }
        }
    ]
