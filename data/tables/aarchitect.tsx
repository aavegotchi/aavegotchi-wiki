

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
            tableName: "aarchitect",
            tableCaption: "",
            tableData: {
                headers: ["Handle", "Pic", "Bio", "Links"],
                data: [
                    [`aaron555`, `<img src="/aarchitect/aaron555.png" alt = "aaron555" /"`, `I am a web developer from Australia with a keen interest in Crypto and Web3 and the opportunities it can bring.  I believe Aavegotchi has a bright future and am grateful to be part of the community and be involved in its early stages.  Always like hearing about interesting ideas and please feel free to reach out if you would like to chat.`, `<a href = "http://cryptolve.com/" target = "_blank">Website</a>`],
					[`BitFlicker`, `<img src="/aarchitect/bitflicker.png" alt = "BitFlicker" /"`, `Blockchain, aavegotchi and minigames fan.`, `<a href = "https://bitflicker.tech" target = "_blank">Website</a>`],
					[`jarrod | aavegotchistats.com`, `<img src="/aarchitect/jarrod.jpg" alt = "Jarrod | Programmable Wealth" /"`, `I'm Jarrod, I'm based in Melbourne, Australia and I am a software engineer and the creator of <a href = "https://aavegotchistats.com" target = "_blank">aavegotchistats.com</a> which visualises on-chain data from the Aavegotchi game such as Baazaar wearable and Gotchi sales. I also have a wearables recommendation engine that helps you select the wearable that will provide your Gotchi with the highest rarity score. I am currently building Gotchi Tower Defense. I'm very passionate about the Ethereum landscape and how games like Aavegotchi can bring about innovative play to earn online gaming experiences by combining the use of NFTs, DeFi, DAOs and blockchain technology.`, `<a href = "https://aavegotchistats.com/" target = "_blank">Tool</a> <a href = "https://twitter.com/GotchiStats" target = "_blank">Twitter</a> <a href = "https://programmablewealth.com/" target = "_blank">Blog</a> <a href = "https://www.youtube.com/channel/UCg5857-6abSZbk7bgxsvbbg" target = "_blank">YouTube</a>`],
					[`ricJones | Grizzy`, `<img src="/aarchitect/ricjones.gif" alt = "ricJones | Grizzy" /"`, `Just a newbie dev learning TypeScript through Phaser 3. Buidling fun games bit by bit`, ``]
                ]
            }
        }
    ]
