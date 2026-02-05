

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
            tableName: "baard",
            tableCaption: "",
            tableData: {
                headers: ["Handle", "Pic", "Bio", "Links"],
                data: [
                    [`jo0wz`, `<img src="/baard/jo0wz.png" alt = "jo0wz" /"`, `32 year old stay-at-home dad, loves to learn everything about the creative process. Crypto goals: 1. Learning solidity. 2. Wants to make his own (mini)game in Aavegotchi. Hobbies: Weightlifting, DJ'ing, Videogames, Collectibles, Reading & Self-learning.`, `<a href = "https://twitter.com/CryptoJoowz" target = "_blank">Twitter</a>`]
                ]
            }
        }
    ]
