

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
                    [`Cawito`, `<img src="/aartist/cawito.jpeg" alt = "esveebee" /"`, "Cawito is one of our French aartist, from a place where we say « chocolatine » and not « pain au chocolat » . He has interest in video games, music (techno/tech house) and poker (he likes the « river call for information »). He’s a specialist of buying the top and sell the bottom so far (not financial advice). Not major background in design, he just envoy drawing for fun and let his creativity flows.", `<a href = "https://www.twitter.com/cawito_eth" target = "_blank">Twitter</a>`],
                    [`Esveebee`, `<img src="/aartist/esveebee.jpg" alt = "esveebee" /"`, "Father of a little superhero that’s still trying to control his powers. Born & raised in the country of beer, chocolate & french fries. Esveebee is also known as the creative centipede, not the kind that doesn’t like his ass kissed like in the movies, but the kind that likes to play Russian roulette with a million different creative hobbies to see which one will pick his brain long enough to become his passion for the next 3 months. After leading multiple different lives as an aquanaut, music artist & motorsport enthousiast... Crypto & artwork kind of stuck around. So he accepted his fate and prepared for the next chapter: Joining the Ether Realm.", `<a href = "https://www.twitter.com/eSveeBee" target = "_blank">Twitter</a> <a href = "https://www.instagram.com/esveebee_art" target="_blank">Instagram</a>`],
                    [`Ka Wai Leong`, `<img src="/aartist/CryptoFluffyCat.jpg" alt = "CryptoFluffyCat" /"`, "CryptoFluffyCat is from Macau, based in Los Angeles. An enthusiastic artist who is active in making Pixel Art and Youtube Thumbnails.", `<a href = "https://www.instagram.com/CryptoFluffyCat" target="_blank">Instagram</a> <a href = "https://www.linkedin.com/in/ka-wai-leong-a025b8201/" target="_blank">LinkedIn</a>`],
					[`Qurka`, `<img src="/aartist/qurka.png" alt = "Qurka" /"`, "Qurka is real Crypto & Blockchain enthusiast that became in love with the concept of NFTs when he first heard about it in the Cryptokitty craze back in 2017. He likes to call himself a Digital Craftsman doing all sorts of art from 2D to 3D art, graphic design and webdesign. He helps out several NFT projects, where he puts his artistic mind to work and his several years’ experience and knowledge of the blockchain space. You can find him in most of the NFTs projects around the space.", `<a href = "https://www.twitter.com/QurkaDigital" target = "_blank">Twitter</a>`],
					[`Rod`, `<img src="/aartist/rod.png" alt = "rod" /"`, `Rod Ash is a French dad of 3, living in the Sud-Ouest, land of foods and wines. After many professional lives, he has become a freelance handyman for more than 10 years, who has finally discovered fulfillment, taking the time to take care of his family. Always interested in computers, starting with the M05, he never made it his job but remained passionate. He discovers the world of cryptos thanks to CryptoMatrix, the French Neo. Very enthusiastic about the concept of Aavegotchi, due to Marc Zeller from Aave, which coincides with his beginnings of pencil drawing, he is happy to join the team with his small means and took the opportunity to discover vector drawing and pixel-art by continuing to promote open-source software.`, ""],
					[`ShadowLord Obeeus`, `<img src="/aartist/obeeus.jpg" alt = "obeeus" /"`, `Obeeus is from the shadow realms, of which he says "...there isn't much to see there". He decided to follow the light of crypto in 2010 and has been a general bother to many projects since then. He was raised a multidisciplinary artist (Which means he cant decide which medium to use) and also works in an artistic duo under the name 'Inappropriart' with IrRadish. He has just adopted a puppy.`, `<a href = "https://www.twitter.com/Boy111Crypt" target = "_blank">Twitter</a>`],
					[`SnottySnake`, "", "", ""],
					[`Vanilladelphia`, `<img src="/aartist/vanilladelphia.png" alt = "Vanilladelphia" /"`, `What can we say about our dear Vanilladelphia.eth. Is he a master Aapprentice, meming Aagents through the missions? Is he an Aartist, creating wearables like the beer helmet that we all love so much? Is he a computer wizard, helping the Aarchivist's organize the rabid mission 11 submissions? Yes... The answer to all of these questions is a resounding yes. Besides all of this, Vanilladelphia still finds time to be an active contributor to many other DAO projects. He is a Diamond Founder of <a href = "https://metagame.wtf/" target = "_blank">MetaGame</a>, a member of <a href = "https://raidguild.org" target = "_blank">Raid Guild</a>, <a href = "https://she.energy" target = "_blank">Shenanigans</a>, and <a href = "https://chiev.net" target = "_blank">ChievMint</a> DAOs.  He is also an active <a href = "https://www.twitter.com/ethtard" target = "_blank">twitter degen</a>. When Vanilla finds the time, between navigating all of these projects, he enjoys doing all sorts of art, from Pixel art, to Photography, to digital compositions, and illustration, and is also a terrible bass and mandolin player.`, `<a href = "https://www.twitter.com/ethtard" target = "_blank">Twitter</a>`]
                ]
            }
        },
		
		{
            tableName: "cawito",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Image"],
                data: [
                    ["Rasta Hat", `<img src="/wearables/108.svg" alt = "aavegotchi Rasta Hat"/>`],
					["Rasta Shirt", `<img src="/wearables/109.svg" alt = "aavegotchi Rasta Shirt"/>`],
					["Jamaican Flag", `<img src="/wearables/110.svg" alt = "aavegotchi Jamaican Flag"/>`],
					["Baby Bottle", `<img src="/wearables/119.svg" alt = "aavegotchi Baby Bottle"/>`],
					["Martini", `<img src="/wearables/120.svg" alt = "aavegotchi Martini"/>`],
					["Wine", `<img src="/wearables/121.svg" alt = "aavegotchi Wine"/>`]
                ]
            }
        },

		{
            tableName: "esveebee",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Image"],
                data: [
				    ["Portal Mage Helmet", `<img src="/wearables/104.svg" alt = "aavegotchi Portal Mage Helmet"/>`],
					["Portal Mage Armor", `<img src="/wearables/105.svg" alt = "aavegotchi Portal Mage Armor"/>`],
					["Portal Mage Axe", `<img src="/wearables/106.svg" alt = "aavegotchi Portal Mage Axe"/>`],
					["Portal Mage Black Axe", `<img src="/wearables/107.svg" alt = "aavegotchi Portal Mage Black Axe"/>`],
					["Yellow Manbun", `<img src="/wearables/242.svg" alt = "aavegotchi Yellow Manbun"/>`],
					["Tinted Shades", `<img src="/wearables/243.svg" alt = "aavegotchi Tinted Shades"/>`],
					["V-Neck Shirt", `<img src="/wearables/244.svg" alt = "aavegotchi V-Neck Shirt"/>`]
                ]
            }
        },
		
		{
            tableName: "kawaileong",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Image"],
                data: [
					["Handsaw", `<img src="/wearables/70.svg" alt = "aavegotchi Farmer Handsaw"/>`],
					["Track Suit", `<img src="/wearables/125.svg" alt = "aavegotchi Track Suit"/>`]
                ]
            }
        },
		
		{
            tableName: "qurka",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Image"],
                data: [
					["Water Jug", `<img src="/wearables/118.svg" alt = "aavegotchi Water Jug"/>`]
                ]
            }
        },
		
		{
            tableName: "rod",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Image"],
                data: [
				    ["Red Hawaiian Shirt", `<img src="/wearables/114.svg" alt = "aavegotchi Red Hawaiian Shirt"/>`],
					["Blue Hawaiian Shirt", `<img src="/wearables/115.svg" alt = "aavegotchi Blue Hawaiian Shirt"/>`],
					["Comfy Poncho", `<img src="/wearables/231.svg" alt = "aavegotchi Comfy Poncho"/>`],
					["Poncho Hoodie", `<img src="/wearables/232.svg" alt = "aavegotchi Poncho Hoodie"/>`]
                ]
            }
        },
		
		{
            tableName: "shadowlordobeeus",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Image"],
                data: [
				    ["Hazmat Hood", `<img src="/wearables/111.svg" alt = "aavegotchi Hazmat Hood"/>`],
					["Hazmat Suit", `<img src="/wearables/112.svg" alt = "aavegotchi Hazmat Suit"/>`],
					["Uranium Rod", `<img src="/wearables/113.svg" alt = "aavegotchi Uranium Rod"/>`]
                ]
            }
        },
		
		{
            tableName: "snottysnake",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Image"],
                data: [
					["Coconut", `<img src="/wearables/116.svg" alt = "aavegotchi Coconut"/>`],
					["Milkshake", `<img src="/wearables/122.svg" alt = "aavegotchi Milkshake"/>`],
					["Kinship Potion", `<img src="/wearables/126.svg" alt = "aavegotchi Kinship Potion"/>`],
					["Greater Kinship Potion", `<img src="/wearables/127.svg" alt = "aavegotchi Greater Kinship Potion"/>`],
                ]
            }
        },
		
		{
            tableName: "vanilladelphia",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Image"],
                data: [
				    ["Beer Helmet", `<img src="/wearables/124.svg" alt = "aavegotchi Beer Helmet"/>`]
                ]
            }
        },
    ]
