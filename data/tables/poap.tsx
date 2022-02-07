

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
            tableName: "poaps",
            tableCaption: "POAPs",
            tableData: {
                headers: ["AGIP", "Design", "Designer", "Link to vote"],
                data: [
                    ["AGIP-6", `<img src=/poap/agip-6.png alt="Aavegotchi AGIP-6">`, "notorious_BTC", `<a href="https://snapshot.org/#/aavegotchi.eth/proposal/QmPUueFJwpCz6rBiucnBYPLxTv2tetzxXWwCi2gSQFMJMW" target="_blank">AGIP-6</a>`],
                    ["AGIP-13", `<img src=/poap/agip-13.png alt="Aavegotchi AGIP-13">`, "Thrax", `<a href="https://snapshot.org/#/aavegotchi.eth/proposal/QmcAQLdAyS9n7LWDu9qvRtdNqJa7FBStadrHq3xqjW9kCT" target="_blank">AGIP-13</a>`],
					["AGIP-14", `<img src=/poap/agip-14.png alt="Aavegotchi AGIP-14">`, "GotchiLove", `<a href="https://snapshot.org/#/aavegotchi.eth/proposal/0x42914b268d255efe0eea943d052e5dc7eab0cbbcde9d3cb809f027e3ea1f611f" target="_blank">AGIP-14</a>`], 
                    ["AGIP-15", `<img src=/poap/agip-15.png alt="Aavegotchi AGIP-15">`, "GotchiLove", `<a href="https://snapshot.org/#/aavegotchi.eth/proposal/0xa1f06ffcdd5f5d51c5f82022e8a25ecc7672252f8a47d9ee484b9fe3b6cd5b3a" target="_blank">AGIP-15</a>`],
					["AGIP-17", `<img src=/poap/agip-17.png alt="Aavegotchi AGIP-17">`, "Backfire Capital", `<a href="https://snapshot.org/#/aavegotchi.eth/proposal/0x28b630e088240ee4bb4e680b071767b98b962a4006c71e71f00c782b86adfbab" target="_blank">AGIP-17</a>`]                    
                ]
            }
        },

    ]
