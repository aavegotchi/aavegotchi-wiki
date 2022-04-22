

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
            tableName: "meleeWeapons",
            tableCaption: "",
            tableData: {
                headers: ["Image", "Name"],
                data: [
					[`<img src="/wearables/aave/thaave-hammer.svg" alt = "aavegotchi aave thaave hammer" />`, "Thaave Hammer"],
					[`<img src="/wearables/final wearables/69_FarmerPitchfork.svg" alt = "aavegotchi Farmer Pitchfork"/>`, "Pitchfork"],
					[`<img src="/wearables/final wearables/70_FarmerHandsaw.svg" alt = "aavegotchi Farmer Handsaw"/>`, "Handsaw"],
					[`<img src="/wearables/final wearables/83_SushiKnife.svg" alt = "aavegotchi Sushi Knife"/>`, "Sushi Knife"],
					[`<img src="/wearables/final wearables/89_MinerPickaxe.svg" alt = "aavegotchi Miner Pickaxe"/>`, "Pickaxe"],
					[`<img src="/wearables/final wearables/106_PortalMageAxe.svg" alt = "aavegotchi Portal Mage Axe"/>`, "Portal Mage Axe"],
					[`<img src="/wearables/final wearables/107_PortalMageBlackAxe.svg" alt = "aavegotchi Portal Mage Black Axe"/>`, "Portal Mage Black Axe"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Royal-Scepter.svg" alt = "aavegotchi Royal Scepter"/>`, "Royal Scepter"],
					[`<img src="/wearables/auction/mechanical_arm.svg" alt = "aavegotchi Mechanical Claw"/>`, "Mechanical Claw"],
					[`<img src="/wearables/haunt2/223_Hook Hand.svg" alt = "aavegotchi Hook Hand"/>`, "Hook Hand"],
					[`<img src="/wearables/partnerships/257_BitcoinGuitar.svg" alt = "aavegotchi Bitcoin Guitar"/>`, "Bitcoin Guitar"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Baarbarian-Gotchi-Double-sided-Axe.svg" alt = "aavegotchi Double-sided Axe"/>`, "Double-sided Axe"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Citaadel-Knight-Gotchi-Spirit-Sword.svg" alt = "aavegotchi Spirit Sword"/>`, "Spirit Sword"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Bushidogotchi-Gotchi-Haanzo-Katana.svg" alt = "aavegotchi Haanzo Katana"/>`, "Haanzo Katana"]
                ]
            }
        },
		
		{
            tableName: "rangedWeapons",
            tableCaption: "",
            tableData: {
                headers: ["Image", "Name"],
                data: [
					[`<img src="/wearables/link/mk2-grenade.svg" alt = "aavegotchi chainlink mk2 grenade" />`, "MK2 Grenade"],
					[`<img src="/wearables/link/m67-grenade.svg" alt = "aavegotchi chainlink m67 grenade" />`, "M67 Grenade"],
					[`<img src="/wearables/link/link-cube.svg" alt = "aavegotchi chainlink cube"/>`, "LINK Cube"],
					[`<img src="/wearables/final wearables/58_AagentPistol.svg" alt = "aavegotchi Aagent Pistol"/>`, "Aagent Pistol"],
					[`<img src="/wearables/final wearables/64_WizardStaff.svg" alt = "aavegotchi Common Wizard Staff"/>`, "Common Wizard Staff"],
					[`<img src="/wearables/final wearables/65_WizardStaffLegendary.svg" alt = "aavegotchi Legendary Wizard Staff"/>`, "Legendary Wizard Staff"],
					[`<img src="/wearables/final wearables/103_WitchWand.svg" alt = "aavegotchi Witchy Wand"/>`, "Witchy Wand"],
					[`<img src="/wearables/layer2/Aavegotchi-Gen0-Sets-R4-Fireball.svg" alt = "aavegotchi Fireball"/>`, "Fireball"],
					[`<img src="/wearables/haunt2/217_CyborgGun.svg" alt = "aavegotchi Energy Gun"/>`, "Energy Gun"],
					[`<img src="/wearables/haunt2/225_Basketball.svg" alt = "aavegotchi Basketball"/>`, "Basketball"],
					[`<img src="/wearables/haunt2/229_Lasso.svg" alt = "aavegotchi Lasso"/>`, "Lasso"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Archer-Gotchi-Bow-Arrow.svg" alt = "aavegotchi Bow and Arrow"/>`, "Bow and Arrow"],
					[`<img src="/wearables/DeFi-RPG/Aavegotchi-Ranger-Gotchi-Longbow.svg" alt = "aavegotchi Longbow"/>`, "Longbow"],
					[`<img src="/wearables/ethereum/MUDGEN DIAMOND.svg" alt = "aavegotchi Mudgen Diamond" />`, "Mudgen Diamond"]
                ]
            }
        },
    ]
