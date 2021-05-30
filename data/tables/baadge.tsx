

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
            tableName: "baadge",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Description", "Image"],
                data: [
				    [`Rarity Farming Season 1, Round 1, Rarity Top 10`, `This Aavegotchi achieved a rank in the top 10 of RARITY for the first round of the first ever season of Rarity Farming. From April 20 to June 15, 2021 the first season of Rarity Farming featured three main leaderboards that any summoned Aavegotchi could participate in. All competing Aavegotchis were from the original Haunt 1 portals of which there were 10,000 total.`, `<img src="/baadge/163_szn1rnd1top10rarity.svg" alt = "">`],
					[`Rarity Farming Season 1, Round 1, Kinship Top 10`, `This Aavegotchi achieved a rank in the top 10 of KINSHIP for the first round of the first ever season of Rarity Farming. From April 20 to June 15, 2021 the first season of Rarity Farming featured three main leaderboards that any summoned Aavegotchi could participate in. All competing Aavegotchis were from the original Haunt 1 portals of which there were 10,000 total.`, `<img src="/baadge/164_szn1rnd1top10kinship.svg" alt = "">`],
					[`Rarity Farming Season 1, Round 1, XP Top 10`, `This Aavegotchi achieved a rank in the top 10 of XP for the first round of the first ever season of Rarity Farming. From April 20 to June 15, 2021 the first season of Rarity Farming featured three main leaderboards that any summoned Aavegotchi could participate in. All competing Aavegotchis were from the original Haunt 1 portals of which there were 10,000 total.`, `<img src="/baadge/165_szn1rnd1top10xp.svg" alt = "">`],
					[`Rarity Farming Season 1, Round 1, Rarity Top 100`, `This Aavegotchi achieved a rank in the top 100 of RARITY for the first round of the first ever season of Rarity Farming. From April 20 to June 15, 2021 the first season of Rarity Farming featured three main leaderboards that any summoned Aavegotchi could participate in. All competing Aavegotchis were from the original Haunt 1 portals of which there were 10,000 total.`, `<img src="/baadge/166_szn1rnd1top100rarity.svg" alt = "">`],
					[`Rarity Farming Season 1, Round 1, Kinship Top 100`, `This Aavegotchi achieved a rank in the top 100 of KINSHIP for the first round of the first ever season of Rarity Farming. From April 20 to June 15, 2021 the first season of Rarity Farming featured three main leaderboards that any summoned Aavegotchi could participate in. All competing Aavegotchis were from the original Haunt 1 portals of which there were 10,000 total.`, `<img src="/baadge/167_szn1rnd1top100kinship.svg" alt = "">`],
					[`Rarity Farming Season 1, Round 1, XP Top 100`, `This Aavegotchi achieved a rank in the top 100 of XP for the first round of the first ever season of Rarity Farming. From April 20 to June 15, 2021 the first season of Rarity Farming featured three main leaderboards that any summoned Aavegotchi could participate in. All competing Aavegotchis were from the original Haunt 1 portals of which there were 10,000 total.`, `<img src="/baadge/168_szn1rnd1top100xp.svg" alt = "">`],
					[`Rarity Farming Season 1, Round 2, Rarity Top 10`, `This Aavegotchi achieved a rank in the top 10 of RARITY for the second round of the first ever season of Rarity Farming. From April 20 to June 15, 2021 the first season of Rarity Farming featured three main leaderboards that any summoned Aavegotchi could participate in. All competing Aavegotchis were from the original Haunt 1 portals of which there were 10,000 total.`, `<img src="/baadge/169_szn1rnd2top10rarity.svg" alt = "">`],
					[`Rarity Farming Season 1, Round 2, Kinship Top 10`, `This Aavegotchi achieved a rank in the top 10 of KINSHIP for the second round of the first ever season of Rarity Farming. From April 20 to June 15, 2021 the first season of Rarity Farming featured three main leaderboards that any summoned Aavegotchi could participate in. All competing Aavegotchis were from the original Haunt 1 portals of which there were 10,000 total.`, `<img src="/baadge/170_szn1rnd2top10kinship.svg" alt = "">`],
					[`Rarity Farming Season 1, Round 2, XP Top 10`, `This Aavegotchi achieved a rank in the top 10 of XP for the second round of the first ever season of Rarity Farming. From April 20 to June 15, 2021 the first season of Rarity Farming featured three main leaderboards that any summoned Aavegotchi could participate in. All competing Aavegotchis were from the original Haunt 1 portals of which there were 10,000 total.`, `<img src="/baadge/171_szn1rnd2top10xp.svg" alt = "">`],
					[`Rarity Farming Season 1, Round 2, Rarity Top 100`, `This Aavegotchi achieved a rank in the top 100 of RARITY for the second round of the first ever season of Rarity Farming. From April 20 to June 15, 2021 the first season of Rarity Farming featured three main leaderboards that any summoned Aavegotchi could participate in. All competing Aavegotchis were from the original Haunt 1 portals of which there were 10,000 total.`, `<img src="/baadge/172_szn1rnd2top100rarity.svg" alt = "">`],
					[`Rarity Farming Season 1, Round 2, Kinship Top 100`, `This Aavegotchi achieved a rank in the top 100 of KINSHIP for the second round of the first ever season of Rarity Farming. From April 20 to June 15, 2021 the first season of Rarity Farming featured three main leaderboards that any summoned Aavegotchi could participate in. All competing Aavegotchis were from the original Haunt 1 portals of which there were 10,000 total.`, `<img src="/baadge/173_szn1rnd2top100kinship.svg" alt = "">`],
					[`Rarity Farming Season 1, Round 2, XP Top 100`, `This Aavegotchi achieved a rank in the top 100 of XP for the second round of the first ever season of Rarity Farming. From April 20 to June 15, 2021 the first season of Rarity Farming featured three main leaderboards that any summoned Aavegotchi could participate in. All competing Aavegotchis were from the original Haunt 1 portals of which there were 10,000 total.`, `<img src="/baadge/174_szn1rnd2top100xp.svg" alt = "">`],
					[`Unicly LP uGOTCH/ETH Q2 2021`, ``, `<img src="/baadge/175_Baadge_UniclyLP_Q1_2021.svg" alt = "">`],
                ]
            }
        }
    ]
