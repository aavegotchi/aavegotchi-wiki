

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
            tableName: "gotchiTheGaatherer",
            tableCaption: "",
            tableData: {
                headers: ["Score Tiers", "XP earned"],
                data: [
                    [">350 points", "5 XP"],
					["Top 500", "10 XP"]
                ]
            }
        },
	
	    {
            tableName: "snaake",
            tableCaption: "",
            tableData: {
                headers: ["Score Tiers", "XP earned"],
                data: [
                    [">500 points", "5 XP"],
					["Top 500", "10 XP"]
                ]
            }
        },
	
        {
            tableName: "sushiVader1",
            tableCaption: "",
            tableData: {
                headers: ["Score Tiers", "XP earned"],
                data: [
                    [">5000 points", "5 XP"],
					["Top 500", "10 XP"],
					["Top 50", "15 XP"]
                ]
            }
        },	
	
        {
            tableName: "whacARofl",
            tableCaption: "",
            tableData: {
                headers: ["Score Tiers", "XP earned"],
                data: [
                    [">100 points", "5 XP"],
					["Top 500", "10 XP"],
					["Top 100", "15 XP"],
					["Top score", "15 XP + XP Potion"]
                ]
            }
        },
		
		{
            tableName: "astegotchi",
            tableCaption: "",
            tableData: {
                headers: ["Score Tiers", "XP earned"],
                data: [
                    [">10,000 points", "5 XP"],
					["Top 500", "10 XP"],
					["Top 100", "15 XP"]
                ]
            }
        },
		
		{
            tableName: "sushiVader2",
            tableCaption: "",
            tableData: {
                headers: ["Score Tiers", "XP earned"],
                data: [
                    [">12,000 points", "5 XP"],
					["Top 500", "10 XP"],
					["Top 100", "15 XP"]
                ]
            }
        },
		
		{
            tableName: "pinbaal",
            tableCaption: "",
            tableData: {
                headers: ["Score Tiers", "XP earned"],
                data: [
                    [">125,000 points", "5 XP"],
					["Top 500", "10 XP"],
					["Top 100", "15 XP"]
                ]
            }
        },
		
		{
            tableName: "gotchiMiner",
            tableCaption: "",
            tableData: {
                headers: ["Score Tiers", "XP earned"],
                data: [
                    [">$10k points", "5 XP"],
					["Top 500", "10 XP"],
					["Top 100", "15 XP"]
                ]
            }
        },
		
		{
            tableName: "gotchiHeroes",
            tableCaption: "",
            tableData: {
                headers: ["Score Tiers", "XP earned"],
                data: [
                    ["All Aavegotchis above 500", "5 XP"],
					["Top 500", "10 XP"],
					["Top 100", "15 XP"]
                ]
            }
        },
		
		{
            tableName: "gotchiCrawler",
            tableCaption: "",
            tableData: {
                headers: ["Score Tiers", "XP earned"],
                data: [
                    ["Score 2000 points and exit", "5 XP"],
					["Top 500", "10 XP"],
					["Top 100", "15 XP"],
					["Top 10", "20 XP"]
                ]
            }
        },
    ]
