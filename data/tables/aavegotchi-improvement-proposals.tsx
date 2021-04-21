

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
        },
		
		{
            tableName: "agip2",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes", "3,726,567 GHST"],
					["No", "108,143 GHST"]
				]
            }
        },
		
		{
            tableName: "agip3",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes", "3,836,093 GHST"],
					["No", "33,683 GHST"]
				]
            }
        },
		
		{
            tableName: "agip4",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["25K portals, 100 GHST each, 5 per txn (w/ stricter ape tax)", "3,540,000 GHST (54.25%)"],
					["No new haunt, Revisit in a month", "2,510,000 GHST (38.46%)"],
					["10K Portals, 100 GHST each, 1 per txn", "377,550 GHST (5.78%)"],
					["Pre-sale option", "98,410 GHST (1.51%)"]
				]
            }
        },

		{
            tableName: "agip5",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Only Haunt 1 should get a special background", "3,670,000 GHST (63.09%)"],
					["Each Haunts should have it’s own unique background", "2,010,000 GHST (34.53%)"],
					["Neither, leave it as is", "138,240 GHST (2.37%)"]
				]
            }
        },
		
		{
            tableName: "agip6",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, increase fees from 3 to 3.5", "4,570,000 GHST (93.69%)"],
					["No, leave the fees as they are", "307,890 GHST (6.31%)"]
				]
            }
        },
		
		{
            tableName: "marketplaceName",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Aavegotchi Baazaar", "973,380 GHST"],
					["Aavegotchi Maarket", "683,420 GHST"],
					["Neither", "150,380 GHST"]
				]
            }
        },
		
		{
            tableName: "ghstUsdcLp",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes", "2,560,000 GHST"],
					["No", "354,030 GHST"]
				]
            }
        },
		
		{
            tableName: "portalsPurchased",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["25 per txn (w/ Ape Tax)", "1,500,000 GHST"],
					["5 per txn", "921,830 GHST"],
					["10 per txn", "201,760 GHST"],
					["1 per txn", "169,000 GHST"]
				]
            }
        },
		
    ]
