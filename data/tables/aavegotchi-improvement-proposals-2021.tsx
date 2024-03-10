

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
            tableName: "agip7",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, successful SigProps give XP", "4,190,000 GHST (97.81%)"],
					["No, SigProps should not give XP", "93,780 GHST (2.19%)"]
				]
            }
        },
		
		{
            tableName: "agip8",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, give Gotchis voting power", "4,020,000 GHST (96.09%)"],
					["No voting power for Gotchis", "146,760 GHST (3.51%)"]
				]
            }
        },
		
		{
            tableName: "agip9",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, give Wearables voting power", "3,230,000 GHST (79.83%)"],
					["No voting power for Wearables", "799,900 GHST (19.75%)"]
				]
            }
        },
		
		{
            tableName: "agip10",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, let's partner with DinoSwap", "3,360,000 GHST (98.08%)"],
					["No, don't partner with DinoSwap", "65,950 GHST (1.92%)"]
				]
            }
        },
		
		{
            tableName: "agip11",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, create the FRENS Committee", "8,820,000 GHST (97.51%)"],
					["No, keep everything as it is", "225,160 GHST (2.49%)"]
				]
            }
        },
		
		{
            tableName: "launchHaunt2",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, launch Haunt 2", "7,110,000 GHST (94%)"],
					["No, do not launch Haunt 2 now", "453,850 GHST (6%)"]
				]
            }
        },
		
		{
            tableName: "agip13",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, implement aging incentives", "12,890,000 GHST (94.25%)"],
					["No, do not implement right now", "786,940 GHST (5.75%)"]
				]
            }
        },
		
		{
            tableName: "agip14",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, give FRENS to GHST-MATIC", "11,880,000 GHST (87.25%)"],
					["No, don't give FRENS", "1,740,000 GHST (12.75%)"]
				]
            }
        },
		
		{
            tableName: "agip15",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, establish the WTF", "12,910,000 GHST (95.65%)"],
					["No, don't establish the WTF", "586,910 GHST (4.35%)"]
				]
            }
        },
		
		{
            tableName: "agip16",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, stake 100k GHST", "10,970,000 GHST (79.78%)"],
					["No, wait for Aarcade DAO", "2,780,000 GHST (20.22%)"]
				]
            }
        },
		
		{
            tableName: "agip17",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Voting power of 0.5 GHST/pixel", "8,550,000 GHST (61.69%)"],
					["Voting power of 1 GHST/pixel", "4,350,000 GHST (31.34%)"],
					["Voting power from auction floor", "709,270 GHST (5.11%)"],
					["No voting power for REALM", "258,090 GHST (1.86%)"]
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
