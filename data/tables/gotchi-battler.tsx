

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
            tableName: "traitMapping",
            tableCaption: "",
            tableData: {
                headers: ["Stat", "Trait", "Description"],
                data: [
                    ["Speed", "+NRG", "How soon and how often the Gotchi will act"],
					["Health", "-NRG", "The Gotchi's Hit Points (HP)"],
					["Critical Hit %", "+AGG", "The chance of the Gotchi landing a critical hit"],
					["Armor", "-AGG", "The amount of armor the Gotchi has"],
					["Evasiveness %", "+SPK", "The chance of the Gotchi evading an attack"],
					["Resistance %", "-SPK", "The chance of the Gotchi resisting a status being applied"],
					["Magic Power", "+BRN", "Used for Magic Attack and Magic Defense"],
					["Physical Power", "-BRN", "Used for Physical Attack and Physical Defense"],
					["Accuracy %", "EYC/EYS", "The chance of the Gotchi landing an attack"]
                ]
            }
        },
		
		{
            tableName: "classes",
            tableCaption: "",
            tableData: {
                headers: ["Stat", "Trait", "Special", "Leader Skill"],
                data: [
                    ["Ninja", "+NRG", "Spectral Strike", "Sharpen blades"],
					["Enlightened", "-NRG", "Meditate", "Cloud of Zen"],
					["Cleavers", "+AGG", "Cleave", "Frenzy"],
					["Tank", "-AGG", "Taunt", "Steel Counter"],
					["Cursed", "+SPK", "Curse", "Spread the Fear"],
					["Healer", "-SPK", "Blessing", "Cleansing Aura"],
					["Mage", "+BRN", "Thunder", "Channel the Coven"],
					["Troll", "-BRN", "Devastating Smash", "Clan Momentum"]
                ]
            }
        }
    ]
