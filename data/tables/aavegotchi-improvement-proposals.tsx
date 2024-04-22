

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
        },

		{
            tableName: "agip108",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, fund", "9,800,000 GHST (84.75%)"],
					["No, do not fund", "1,800,000 GHST (15.25%)"]
				]
            }
        },

		{
            tableName: "agip109",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["YES - Make it so!", "10,000,000 GHST (96.21%)"],
					["NO - Do not want!", "409,000 GHST (3.79%)"]
				]
            }
        },

		{
            tableName: "agip110",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, let's lend tokens to Skynet", "5,900,000 GHST (50.26%)"],
					["No, don't lend tokens to Skynet", "5,900,000 GHST (49.74%)"]
				]
            }
        },
		
		{
            tableName: "agip111",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes. Stake w/ Lido and buy rETH", "8,800,000 GHST (76.33%)"],
					["No. Don't stake or buy rETH", "2,700,000 GHST (23.67%)"]
				]
            }
        },
		
		{
            tableName: "agip112",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes. Establish this sell ladder.", "11,000,000 GHST (92.24%)"],
					["No. Don't establish it.", "888,000 GHST (7.76%)"]
				]
            }
        },
		
		{
            tableName: "agip113",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, I agree", "10,000,000 GHST (92.61%)"],
					["No", "826,000 GHST (7.39%)"]
				]
            }
        },
		
		{
            tableName: "agip114",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes! Fund it.", "9,600,000 GHST (85.65%)"],
					["No. Don't fund.", "1,600,000 GHST (14.35%)"]
				]
            }
        },
		
		{
            tableName: "agip115",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Fund FAKEwaar!", "7,200,000 GHST (70.66%)"],
					["Do not fund FAKEwaar...", "3,000,000 GHST (29.34%)"]
				]
            }
        }
    ]
