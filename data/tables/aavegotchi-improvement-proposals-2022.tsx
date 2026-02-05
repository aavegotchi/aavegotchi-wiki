

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
            tableName: "agip18",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, implement Patch v0.1", "14,000,000 GHST (99.99%)"],
					["No, do not implement Patch v0.1", "1800 GHST (0.01%)"]
				]
            }
        },
		
		{
            tableName: "agip19",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, add $200k in GHST", "13,000,000 GHST (67.81%)"],
					["No, do not add $200k in GHST", "6,000,000 GHST (32.19%)"]
				]
            }
        },
		
		{
            tableName: "agip20",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, with 50k GHST budget", "18,000,000 GHST (93.5%)"],
					["Yes, without 50k GHST budget", "836,000 GHST (4.4%)"],
					["No, do not create the DTF", "399,000 GHST (2.1%)"]
				]
            }
        },
		
		{
            tableName: "agip21",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, add $200k GHST", "18,000,000 GHST (93.48%)"],
					["No, do not add any GHST", "1,300,000 GHST (6.52%)"]
				]
            }
        },
		
		{
            tableName: "agip22",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, launch RF SZN 3", "18,000,000 GHST (89.28%)"],
					["Yes, but different params", "1,500,000 GHST (7.42%)"],
					["No, don't launch RF SZN 3", "663,000 GHST (3.3%)"]
				]
            }
        },
		
		{
            tableName: "agip23",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, 10k GHST for rewards + XP", "17,000,000 GHST (88.1%)"],
					["Yes, but under different terms", "1,900,000 GHST (9.72%)"],
					["No, do not support GG", "426,000 GHST (2.18%)"]
				]
            }
        },
		
		{
            tableName: "agip24",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, deposit 3M GHST", "18,000,000 GHST (89.15%)"],
					["Abstain", "1,200,000 GHST (6.12%)"],
					["No, keep GHST in the Treasury", "962,000 GHST (4.74%)"]
				]
            }
        },
		
		{
            tableName: "agip25",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Delay until Community Proposal", "14,000,000 GHST (68.24%)"],
					["Delay until full Book 1", "4,100,000 GHST (20.49%)"],
					["Start Auction 3 ASAP", "2,300,000 GHST (11.28%)"]
				]
            }
        },
		
		{
            tableName: "agip26",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Binomial Distribution", "17,000,000 GHST (84.8%)"],
					["Round 1 0.75 - 1.25 & 0.5 - 1.5", "2,300,000 GHST (11.78%)"],
					["No, don’t change the Variance", "673,000 GHST (3.42%)"]
				]
            }
        },
		
		{
            tableName: "agip27",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, use the new Trait Map", "20,000,000 GHST (96.81%)"],
					["No, stick with the original", "643,000 GHST (3.19%)"]
				]
            }
        },
		
		{
            tableName: "agip28",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Notorious_BTC", "13,000,000 GHST (67.57%)"],
					["Yanik", "12,000,000 GHST (59.58%)"],
					["Jarrod", "11,000,000 GHST (53.69%)"],
					["Diddlypoo", "9,600,000 GHST (49.15%)"],
					["Kokusho", "9,200,000 GHST (46.94%)"],
					["Choyna", "8,500,000 GHST (43.58%)"],
					["Master_Yin", "7,800,000 GHST (39.78%)"],
					["Pgendreau", "6,800,000 GHST (34.84%)"],
					["MarvinP", "6,600,000 GHST (33.88%)"],
					["Chichi", "3,200,000 GHST (16.17%)"],
					["Tburd.eth", "2,500,000 GHST (12.61%)"],
					["Nestor", "1,800,000 GHST (9.31%)"],
					["MGG", "1,800,000 GHST (9.29%)"],
					["Hardkor", "1,300,000 GHST (6.84%)"]
				]
            }
        },
		
		{
            tableName: "agip29",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, once per 24h window", "17,000,000 GHST (96.1%)"],
					["No, every 24h interaction", "706,000 GHST (3.9%)"]
				]
            }
        },
		
		{
            tableName: "agip30",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, 8k Parcels in June", "12,000,000 GHST (83.64%)"],
					["No", "2,300,000 GHST (16.36%)"]
				]
            }
        },
		
		{
            tableName: "agip31",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, formally start RF Szn 4", "17,000,000 GHST (98.24%)"],
					["No, don't start RF Szn 4", "309,000 GHST (1.76%)"]
				]
            }
        },
		
		{
            tableName: "agip32",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes. Vote for vQi-Qi", "14,000,000 GHST (79.76%)"],
					["Abstain", "3,100,000 GHST (17.99%)"],
					["No. Vote for someone else", "387,000 GHST (2.25%)"]
				]
            }
        },
		
		{
            tableName: "agip33",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, Change the Recipes", "17,000,000 GHST (98.5%)"],
					["No, Keep Things the Same", "263,000 GHST (1.5%)"]
				]
            }
        },
		
		{
            tableName: "agip34",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, perform a swap of 1.75M DAI", "17,000,000 GHST (98.26%)"],
					["No, don't perform a token swap", "299,000 GHST (1.74%)"]
				]
            }
        },
		
		{
            tableName: "agip35",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, delay LAND 3 Release", "16,000,000 GHST (96.05%)"],
					["No, continue as planned", "673,000 GHST (3.95%)"]
				]
            }
        },
		
		{
            tableName: "agip36",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, use the proposed model", "17,000,000 GHST (97.4%)"],
					["No, don't change anything", "456,000 GHST (2.6%)"]
				]
            }
        },
		
		{
            tableName: "agip37",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, do it", "18,000,000 GHST (98.85%)"],
					["No, don't", "213,000 GHST (1.15%)"]
				]
            }
        },
		
		{
            tableName: "agip38",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, stop new wearables", "18,000,000 GHST (94.87%)"],
					["No, keep things as is", "953,000 GHST (5.13%)"]
				]
            }
        },
		
		{
            tableName: "agip39",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Keep the current solution", "7,100,000 GHST (59.54%)"],
					["Use GLTR to move channeling", "3,400,000 GHST (28.48%)"],
					["Revert to the original solution", "1,400,000 GHST (11.98%)"]
				]
            }
        },
		
		{
            tableName: "agip40",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Sunset FRENS immediately", "9,400,000 GHST (77.36%)"],
					["Taper FRENS w/ end date of 10/1", "1,800,000 GHST (14.87%)"],
					["Keep FRENS as they are", "945,000 GHST (7.76%)"]
				]
            }
        },
		
		{
            tableName: "agip41",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes. Increase USDC remove MATIC.", "11,000,000 GHST (88.28%)"],
					["No. Leave emissions unchanged.", "1,400,000 GHST (11.72%)"]
				]
            }
        },
		
		{
            tableName: "agip42",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Limit market to # of parcels + 1", "9,900,000 GHST (81.6%)"],
					["Keep original unlimited system", "975,000 GHST (8.03%)"],
					["Unlimited open, limit whitelists", "838,000 GHST (6.89%)"],
					["Limit open market to 1", "422,000 GHST (3.48%)"]
				]
            }
        },
		
		{
            tableName: "agip43",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Add 50k GHST + equal alchemica", "16,000,000 GHST (95.66%)"],
					["Add 30k GHST + equal alchemica", "462,000 GHST (2.74%)"],
					["Do not add GHST/alchemica to LPs", "269,000 GHST (1.6%)"]
				]
            }
        },
		
		{
            tableName: "agip44",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes. Transfer Parcels/alchemica", "13,000,000 GHST (78.47%)"],
					["No. Don't use parcels/alch.", "3,600,000 GHST (21.53%)"]
				]
            }
        },
		
		{
            tableName: "agip45",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Stop listed Gotchi from channeling", "11,000,000 GHST (96.02%)"],
					["Do nothing", "467,000 GHST (3.98%)"]
				]
            }
        },
		
		{
            tableName: "agip46",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, create new sets", "10,000,000 GHST (85.52%)"],
					["No, don't do anything", "1,300,000 GHST (10.58%)"],
					["Abstain", "472,000 GHST (3.9%)"]
				]
            }
        },
		
		{
            tableName: "agip47",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, follow this Emergency Plan", "12,000,000 GHST (93.88%)"],
					["No, ignore this Emergency Plan", "766,000 GHST (6.12%)"]
				]
            }
        },
		
		{
            tableName: "agip48",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, fund the Project 50k GHST", "11,000,000 GHST (92.65%)"],
					["No, don’t fund development", "905,000 GHST (7.35%)"]
				]
            }
        },
		
		{
            tableName: "agip49",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Change to Proposed Aaltar Rates", "13,000,000 GHST (75.49%)"],
					["Do nothing", "4,100,000 GHST (24.51%)"]
				]
            }
        },
		
		{
            tableName: "agip50",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["YES, let's form the Foundation!", "18,000,000 GHST (95.24%)"],
					["NO, this ain't it!", "910,000 GHST (4.76%)"]
				]
            }
        },
		
		{
            tableName: "agip51",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yanik", "3,300,000 GHST (16.96%)"],
					["Notorious_BTC", "2,300,000 GHST (11.75%)"],
					["Nofuturistic", "1,900,000 GHST (10.01%)"],
					["Mori", "1,700,000 GHST (8.56%)"],
					["Mycaleum", "1,600,000 GHST (8.2%)"],
					["Maxicrouton", "1,500,000 GHST (7.51%)"],
					["Kokusho", "1,300,000 GHST (6.73%)"],
					["PG", "1,100,000 GHST (5.7%)"],
					["Umami", "1,100,000 GHST (5.43%)"],
					["Choyna", "1,000,000 GHST (5.21%)"],
					["Fifoooo", "740,000 GHST (3.83%)"],
					["CryptoGotchi", "533,000 GHST (2.76%)"],
					["Brillz", "502,000 GHST (2.59%)"],
					["Cookheisenberg", "208,000 GHST (1.08%)"]
				]
            }
        },
		
		{
            tableName: "agip52",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Yes, have S5 RF", "15,000,000 GHST (75.83%)"],
					["No, don't have S5 RF", "4,200,000 GHST (21.33%)"],
					["Yes, but with different params", "561,000 GHST (2.83%)"]
				]
            }
        },
		
		{
            tableName: "agip53",
            tableCaption: "",
            tableData: {
                headers: ["Option", "Votes"],
                data: [
                    ["Do not implement", "12,000,000 GHST (60.18%)"],
					["Implement orig kinship mechanics", "7,700,000 GHST (39.82%)"]
				]
            }
        },
    ]
