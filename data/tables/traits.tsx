

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
            tableName: "TraitsProbabilities",
            tableCaption: "Trait Range and Rarity Probabilities",
            tableData: {
                headers: ["Rarity Type", "Range (Low)", "Range (High)", "Percentage"],
                data: [
                    ["Common", "25-74", "25-74", "50%"],
                    ["Uncommon", "10-24", "75-90", "30%"],
                    ["Rare", "2-9", "91-97", "16%"],
                    ["Mythical", "0-1", "98-99", "4%"],

                ]
            }
        },

        {
            tableName: "TraitsByRarity1",
            tableCaption: "Aavegotchi Personal Traits by Rarity",
            tableData: {
                headers: ["Trait", "Mythical(L)", "Rare(L)", "Uncommon(L)", "Common"],
                data: [
                    ["Energy", "Zen", "Serene", "Sleepy", "Calm"],
                    ["Aggressiveness", "Nonviolent", "Peaceful", "Gentle", "Neutral"],
                    ["Spookiness", "Cuddly", "Impish", "Unnerving", "Scary"],
                    ["Brain Size", "Smol", "Tiny", "Small", "Normal"],
                    ["Eye Shape", "Single Dot", "Flat Line", "T Eyes", "Round Eyes"],
                    ["Eye Color", `<img src="/traits/eye-colour/mythical_low.svg" />`, `<img src="/traits/eye-colour/rare_low.svg" />`, `<img src="/traits/eye-colour/uncommon_low.svg" />`, "*Collateral Colour"],

                ]
            }
        },
		
		        {
            tableName: "TraitsByRarity2",
            tableCaption: "Aavegotchi Personal Traits by Rarity (Continued)",
            tableData: {
                headers: ["Trait", "Common", "Uncommon(H)", "Rare(H)", "Mythical(H)"],
                data: [
                    ["Energy", "Calm", "Energetic", "Hyper", "Turnt"],
                    ["Aggressiveness", "Neutral", "Combative", "Warlike", "Based"],
                    ["Spookiness", "Scary", "Creepy", "Terrifying", "Ghastly"],
                    ["Brain Size", "Normal", "Big", "Huge", "Galaxy"],
                    ["Eye Shape", "Round Eyes", "Anime Eyes", "Awesome Eyes", "Collateral"],
                    ["Eye Color", "*Collateral Colour", `<img src="/traits/eye-colour/uncommon_high.svg" />`, `<img src="/traits/eye-colour/rare_high.svg" />`, `<img src="/traits/eye-colour/mythical_high.svg" />`],

                ]
            }
        },


    ]


