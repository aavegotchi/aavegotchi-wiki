

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
            tableName: "aartist",
            tableCaption: "",
            tableData: {
                headers: ["Handle", "Pic", "Bio", "Links"],
                data: [
                    [`Cawito`],
                    [`Esveebee`],
                    [`Ka Wai Leong`, "", "CryptoFluffyCat is from Macau, based in Los Angeles. An enthusiastic artist who is active in making Pixel Art and Youtube Thumbnails.", `<a href = "https://www.instagram.com/CryptoFluffyCat" target="_blank">Instagram</a> <a href = "https://www.linkedin.com/in/ka-wai-leong-a025b8201/" target="_blank">LinkedIn</a>`],
					[`Qurka`],
					[`Rod`],
					[`ShadowLord Obeeus`],
					[`SnottySnake`],
					[`Vanilladelphia`, `<img src="/aartist/vanilladelphia.png" alt = "Vanilladelphia" /"`, `What can we say about our dear Vanilladelphia.eth. Is he a master Aapprentice, meming Aagents through the missions? Is he an Aartist, creating wearables like the beer helmet that we all love so much? Is he a computer wizard, helping the Aarchivist's organize the rabid mission 11 submissions? Yes... The answer to all of these questions is a resounding yes. Besides all of this, Vanilladelphia still finds time to be an active contributor to many other DAO projects. He is a Diamond Founder of <a href = "https://metagame.wtf/" target = "_blank">MetaGame</a>, a member of <a href = "https://raidguild.org" target = "_blank">Raid Guild</a>, <a href = "https://she.energy" target = "_blank">Shenanigans</a>, and <a href = "https://chiev.net" target = "_blank">ChievMint</a> DAOs.  He is also an active <a href = "https://www.twitter.com/ethtard" target = "_blank">twitter degen</a>. When Vanilla finds the time, between navigating all of these projects, he enjoys doing all sorts of art, from Pixel art, to Photography, to digital compositions, and illustration, and is also a terrible bass and mandolin player.`, `<a href = "https://www.twitter.com/ethtard" target = "_blank">Twitter</a>`]
                ]
            }
        }


    ]
