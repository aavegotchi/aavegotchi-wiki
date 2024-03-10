

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
            tableName: "agip105",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes. Supply DAI to Aave.", "6,900,000 GHST (68.32%)"],
					["No. Do not supply DAI to Aave.", "3,200,000 GHST (31.68%)"]
				]
            }
        },
		
		{
            tableName: "agip106",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, fund", "9,500,000 GHST (81.14%)"],
					["No, do not fund", "2,200,000 GHST (18.86%)"]
				]
            }
        },
		
		{
            tableName: "gotchiBattlerSeason8",
            tableCaption: "",
            tableData: {
                headers: ["Category", "Previous Split", "New Split"],
                data: [
                    ["BRS", "70%", "60%"],
					["Gotchi Battler", "0%", "10%"],
					["Kinship", "20%", "20%"],
					["XP", "10%", "10%"]
				]
            }
        },
		
		{
            tableName: "gotchiBattlerSeason9",
            tableCaption: "",
            tableData: {
                headers: ["Category", "Previous Split", "New Split"],
                data: [
                    ["BRS", "70%", "50%"],
					["Gotchi Battler", "0%", "20%"],
					["Kinship", "20%", "20%"],
					["XP", "10%", "10%"]
				]
            }
        },
		
		{
            tableName: "agip107",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, reallocate rewards to GB", "8,800,000 GHST (77.07%)"],
					["No, don't include Gotchi Battler", "2,600,000 GHST (22.93%)"]
				]
            }
        }		
    ]
