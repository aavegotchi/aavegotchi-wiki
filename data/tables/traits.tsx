

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
                    ["Rare", "2-9", "91-98", "16%"],
                    ["Mythical", "0-1", "99-100", "4%"],

                ]
            }
        },

        {
            tableName: "TraitsByRarity",
            tableCaption: "Aavegotchi Personal Traits by Rarity",
            tableData: {
                headers: ["Trait", "Mythical(L)", "Rare(L)", "Uncommon(L)", "Common", "Uncommon(H)", "Rare(H)", "Mythical(H)"],
                data: [
                    ["Energy", "Zen", "Serene", "Sleepy", "Calm", "Energetic", "Hyper", "Turnt"],
                    ["Aggressiveness", "Nonviolent", "Peaceful", "Gentle", "Neutral", "Combative", "Warlike", "Based"],
                    ["Spookiness", "Cuddly", "Impish", "Unnerving", "Scary", "Creepy", "Terrifying", "Ghastly"],
                    ["Brain Size", "Smol", "Tiny", "Small", "Normal", "Big", "Huge", "Galaxy"],
                    ["Eye Shape", "Single Dot", "Flat Line", "T Eyes", "Round Eyes", "Anime Eyes", "Awesome Eyes", "Collateral"],
                    ["Eye Color", `<img src="/traits/eye-colour/mythical_low.svg" />`, `<img src="/traits/eye-colour/rare_low.svg" />`, `<img src="/traits/eye-colour/uncommon_low.svg" />`, "*Collateral Colour", `<img src="/traits/eye-colour/uncommon_high.svg" />`, `<img src="/traits/eye-colour/rare_high.svg" />`, `<img src="/traits/eye-colour/mythical_high.svg" />`],

                ]
            }
        },


    ]


