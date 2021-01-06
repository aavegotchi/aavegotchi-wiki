

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
                    [`Cawito`, "", "", ""],
                    [`Esveebee`, "", "", ""],
                    [`Ka Wai Leong`, `<img src="/aartist/CryptoFluffyCat.jpg" alt = "CryptoFluffyCat" /"`, "CryptoFluffyCat is from Macau, based in Los Angeles. An enthusiastic artist who is active in making Pixel Art and Youtube Thumbnails.", `<a href = "https://www.instagram.com/CryptoFluffyCat" target="_blank">Instagram</a> <a href = "https://www.linkedin.com/in/ka-wai-leong-a025b8201/" target="_blank">LinkedIn</a>`],
					[`Qurka`, "", "", ""],
					[`Rod`, "", `Rod Ash is a French dad of 3, living in the Sud-Ouest, land of foods and wines. After many professional lives, he has become a freelance handyman for more than 10 years, who has finally discovered fulfillment, taking the time to take care of his family. Always interested in computers, starting with the M05, he never made it his job but remained passionate. He discovers the world of cryptos thanks to CryptoMatrix, the French Neo. Very enthusiastic about the concept of Aavegotchi, due to Marc Zeller from Aave, which coincides with his beginnings of pencil drawing, he is happy to join the team with his small means and took the opportunity to discover vector drawing and pixel-art by continuing to promote open-source software.`, ""],
					[`ShadowLord Obeeus`, "", `Obeeus is from the shadow realms, of which he says "...there isn't much to see there". He decided to follow the light of crypto in 2010 and has been a general bother to many projects since then. He was raised a multidisciplinary artist (Which means he cant decide which medium to use) and also works in an artistic duo under the name 'Inappropriart' with IrRadish. He has just adopted a puppy.`, `<a href = "https://www.twitter.com/Boy111Crypt" target = "_blank">Twitter</a>`],
					[`SnottySnake`, "", "", ""],
					[`Vanilladelphia`, `<img src="/aartist/vanilladelphia.png" alt = "Vanilladelphia" /"`, `What can we say about our dear Vanilladelphia.eth. Is he a master Aapprentice, meming Aagents through the missions? Is he an Aartist, creating wearables like the beer helmet that we all love so much? Is he a computer wizard, helping the Aarchivist's organize the rabid mission 11 submissions? Yes... The answer to all of these questions is a resounding yes. Besides all of this, Vanilladelphia still finds time to be an active contributor to many other DAO projects. He is a Diamond Founder of <a href = "https://metagame.wtf/" target = "_blank">MetaGame</a>, a member of <a href = "https://raidguild.org" target = "_blank">Raid Guild</a>, <a href = "https://she.energy" target = "_blank">Shenanigans</a>, and <a href = "https://chiev.net" target = "_blank">ChievMint</a> DAOs.  He is also an active <a href = "https://www.twitter.com/ethtard" target = "_blank">twitter degen</a>. When Vanilla finds the time, between navigating all of these projects, he enjoys doing all sorts of art, from Pixel art, to Photography, to digital compositions, and illustration, and is also a terrible bass and mandolin player.`, `<a href = "https://www.twitter.com/ethtard" target = "_blank">Twitter</a>`]
                ]
            }
        }


    ]
