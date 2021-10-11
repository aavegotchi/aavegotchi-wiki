

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
            tableName: "guild",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Emblem", "Description", "Requirement", "Point of Contact", "Social Media", "Discord"],
                data: [
					[`Bloob Squad`, `<img src="/guild/bloob-squad.png" alt = "Bloob Squad Guild" />`, `A place for bloobs of all sorts. Bloobin' around the metaverse? The bloob squad is for you!`, `Say bloob IRL and when you join the discord`, `bloob#7342`, ``, `<a href = "https://discord.gg/DtHrf6ndrS" target = "_blank">Link</a>`],
					[`cRekto Club`, `<img src="/guild/crekto-club.png" alt = "cRekto Club" />`, `Friends of cRekto`, `Members need to polite, constructive, and have a Wraangler set`, `<a href = "https://twitter.com/Mingkuan100" target = "_blank">cRekto</a>`, `<a href = "https://t.me/cRekto_club" target = "_blank">Telegram</a>`, `<a href = "https://discord.gg/KAbuvbSA" target = "_blank">Link</a>`],
					[`F8 Guild`, `<img src="/guild/f8-guild.png" alt = "F8 Guild" />`, `BlockChain gaming guild focused on P2E on Polygon`, `Be respectful and Follow in-game ToS`, `calcryptochad.eth`, `<a href = "https://f8guild.com/" target = "_blank">Website</a>`, `<a href = "https://discord.gg/xwvBxaBuQS" target = "_blank">Link</a>`],
					[`Frenzone`, `<img src="/guild/frenzone.png" alt = "Frenzone Guild" />`, `The Frenzone is a frenly guild made for frens who like aavegotchi! We're not too hardcore but also not too casual either. We are somewhere right in the middle! We welcome both veterans and newbies alike, feel free to ask questions when you are unsure about something! We have community calls every now and again in which we discuss upcoming events and current state of aavegotchi! So what are you waiting for? Join our discord and become one of the Frens today!`, `A Gotchi owning a pajama hat.`, `Remco#3748<br>3DSLAPS#0183`, `<a href = "https://twitter.com/Frenzone_" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/rdBUZZpDfx" target = "_blank">Link</a>`],
					[`Ghost Squad`, `<img src="/guild/ghost-squad.png" alt = "Ghost Squad Guild" />`, `Active community of Gotchiverse addicts, game developers and content creators.`, `Miner Helmet`, `gotchinomics@gmail.com`, `<a href = "https://twitter.com/gotchighstsquad" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/JQHx9u8mcV" target = "_blank">Link</a>`],
					[`Gotchi FArmy Gang`, `<img src="/guild/gotchi-farmy-gang.png" alt = "Gotchi FArmy Gang" />`, `Our Community aims to work as a team in the Gotchiverse REALM to come ... Farming / Fighting / Scavenging and more ... that's where we are going Frens … One of the first GotchiGang having an NFT Guild Banner / A decentralised Treasury / A community mini-game on his way and moaaaar !`, `Love gotchis and Claim your NFT Gotchi FArmy Gang Banner`, `PG#0811<br>Be The Coin 🧩#4204`, `<a href = "https://twitter.com/TheGotchiFArmy" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/kMHQYn2dmG" target = "_blank">Link</a>`],
					[`Gotchi Riders`, `<img src="/guild/gotchi-riders.png" alt = "Gotchi Riders Guild" />`, `Gotchis ride together! We are a Gotchi biker gang! We travel far and wide, and beat up Lickquidators!`, `Every Gotchi can become a prospect by wearing a 'Biker Jacket'. The insignia of the Gotchi Riders!`, `CryptoGotchi#9089`, ``, `<a href = "https://discord.gg/uxFxBYJjF6" target = "_blank">Link</a>`],
					[`Los Mustachos`, `<img src="/guild/mustachos.png" alt = "Los Mustachos Guild" />`, `First and only spanglish guild for Mustacho aficionados. Decentralized`, `None, but a moustache earns you voting power. <br> 1 mustache= 1 vote`, `Fantasma#1777`, ``, `<a href = "https://discord.gg/bnAKfeczhu" target = "_blank">Link</a>`],
					[`MSG`, `<img src="/guild/msg.jpg" alt = "MSG Guild" />`, `We are a Lickuidator and Aavegotchi coordination guild. Our focus is on mass coordination efforts amongst Gotchis and Lickuidators to maximize benefits for all. We also focus on expanding the overall Aavegotchi ecosystem by providing moar use case and rewards in GHST. We are here to work together as well as with other guidls to dominate the Reaalm. We are Legion. We are many. We do not forgive. We do not forget to pet. Expect us.`, `Dedication and Love`, `🐙Musashi13#5579`, `<a href = "https://twitter.com/msg13gaang" target = "_blank">Twitter</a><br><a href = "https://www.twitch.tv/msg13gaang" target = "_blank">Twitch</a>`, `<a href = "https://discord.gg/XUASaaxu2Q" target = "_blank">Link</a>`],
					[`The Order of Portal Mages`, `<img src="/guild/the-order-of-portal-mages.jpg" alt = "The Order of Portal Mages Guild" />`, `The Order of Portal Mages are the Mages Guild of Aavegotchi! Within our sacred Tavern you will find the finest assembly of Wizards, Witches and Portal Mages in all the Realm. If a Wizard or Witch ye be, then enroll in our Mages College to learn the arts of wizardry & witchcraft! If you are a holder of the legendary Portal Mage gear, you will be welcomed into the Lordship of Portal Mages and a title will be bestowed. All new members are asked to show their POM (Proof of Mage) upon entering the Tavern, if they seek to join the Order.`, `Proof of Mage (can be found in discord)`, `<a href = "https://twitter.com/hillzcrypto" target = "_blank">@hillzcrypto</a>`, `<a href = "https://twitter.com/PortalMages" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/yHr4H6uVFC" target = "_blank">Link</a>`],
					[`WAGMI Warriors`, `<img src="/guild/WAGMI-warriors.png" alt = "WAGMI Warriors Guild" />`, `We are a wearable based guild for the Gotchiverse`, `You must have an Aavegotchi equipped with any of the wagie wearables; a wagie cap, headphones, or WGMI shirt`, `jarrod | aavegotchistats.com#9686`, `<a href = "https://twitter.com/WagmiWarriors" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/TNneBnhrM2" target = "_blank">Link</a>`]
				]
            }
        }
    ]
