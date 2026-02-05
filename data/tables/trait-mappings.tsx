

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
            tableName: "traitMappings",
            tableCaption: "",
            tableData: {
                headers: ["Low", "Trait", "High"],
                data: [
                    ["+ HP Capacity<br>- AP Capacity", "Energy — NRG", "+ AP Capacity<br>- HP Capacity"],
					["+ Defense Power<br>- Action Speed", "Aggression — AGG", "+ Action Speed<br>- Defense Power"],
					["+ Regen (HP & AP)<br>- Ethereality", "Spookiness — SPK", "+ Ethereality<br>- Regen (HP & AP)"],
					["+ Melee Power<br>- Ranged Power", "Brain Size — BRN", "+ Ranged Power<br>- Melee Power"],
					["TBC", "Eye Shape — EYS", "TBC"],
					["TBC", "Eye Color — EYC", "TBC"]
                ]
            }
        }
    ]


