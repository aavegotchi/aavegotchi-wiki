

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
                    [`Cawito`],
                    [`Esveebee`],
                    [`Ka Wai Leong`, "", "CryptoFluffyCat is from Macau, based in Los Angeles. An enthusiastic artist who is active in making Pixel Art and Youtube Thumbnails.", `<a href = "https://www.instagram.com/CryptoFluffyCat" target="_blank">Instagram</a> <a href = "https://www.linkedin.com/in/ka-wai-leong-a025b8201/" target="_blank">LinkedIn</a>`],
					[`Qurka`],
					[`Rod`],
					[`ShadowLord Obeeus`],
					[`SnottySnake`],
					[`Vanilladelphia`, `<img src="/aartist/vanilladelphia.png" alt = "Vanilladelphia" /"`]
                ]
            }
        }


    ]
