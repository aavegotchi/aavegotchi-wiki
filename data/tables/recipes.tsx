

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
            tableName: "aalchemicalAaltar",
            tableCaption: "",
            tableData: {
                headers: ["Level", "FUD", "FOMO", "ALPHA", "KEK", "Build Time (Blocks)", "Spillover Radius", "Spillover Rate"],
                data: [
                    ["1", "0", "0", "0", "0", "Instant", "2000", "100%"],
					["2", "300", "150", "75", "10", "65000", "1800", "90%"],
					["3", "600", "300", "150", "20", "160000", "1600", "80%"],
					["4", "1000", "750", "375", "100", "320000", "1400", "70%"],
					["5", "2000", "1500", "750", "200", "475000", "1200", "60%"],
					["6", "4000", "3000", "1500", "400", "630000", "1000", "50%"],
					["7", "5000", "7500", "3750", "1500", "1250000", "800", "40%"],
					["8", "10000", "15000", "7500", "3000", "1900000", "600", "30%"],
					["9", "20000", "30000", "15000", "6000", "3200000", "400", "20%"]
                ]
            }
        },
		{
            tableName: "gotchiLodge",
            tableCaption: "",
            tableData: {
                headers: ["Level", "FUD", "FOMO", "ALPHA", "KEK", "Build Time (Blocks)"],
                data: [
                    ["1", "750", "0", "310", "50", "Instant"],
					["2", "1500", "0", "625", "100", "47000"],
					["3", "3000", "0", "1250", "200", "119000"],
					["4", "5000", "0", "3100", "750", "240000"],
					["5", "10000", "0", "6250", "1500", "355000"],
					["6", "20000", "0", "12500", "3000", "475000"],
					["7", "25000", "0", "31250", "10000", "950000"],
					["8", "50000", "0", "62500", "20000", "1400000"],
					["9", "100000", "0", "125000", "40000", "2400000"]
                ]
            }
        },
		{
            tableName: "fudHaarvester",
            tableCaption: "",
            tableData: {
                headers: ["Level", "FUD", "FOMO", "ALPHA", "KEK", "FUD Harvest Rate/Day", "Build Time (Blocks)"],
                data: [
                    ["1", "125", "63", "0", "0", "4.2", "Instant"],
					["2", "178", "89", "0", "0", "10", "86400"],
					["3", "227", "115", "0", "0", "18", "172800"],
					["4", "255", "161", "0", "6.7", "30", "259200"],
					["5", "385", "243", "0", "10", "50", "345600"],
					["6", "592", "374", "0", "16", "85", "432000"],
					["7", "665", "548", "0", "44", "150", "518400"],
					["8", "892", "745", "0", "59", "277", "604800"],
					["9", "729", "911", "0", "109", "527", "691200"]
                ]
            }
        },
		{
            tableName: "fomoHaarvester",
            tableCaption: "",
            tableData: {
                headers: ["Level", "FUD", "FOMO", "ALPHA", "KEK", "FOMO Harvest Rate/Day", "Build Time (Blocks)"],
                data: [
                    ["1", "104", "83", "0", "0", "2.1", "Instant"],
					["2", "156", "119", "0", "0", "4.6", "95616"],
					["3", "200", "153", "0", "0", "8.3", "190989"],
					["4", "212", "212", "0", "6.7", "14", "290304"],
					["5", "319", "319", "0", "10", "22", "392727"],
					["6", "491", "491", "0", "16", "38", "478080"],
					["7", "488", "734", "0", "49", "68", "570240"],
					["8", "657", "986", "0", "66", "125", "672000"],
					["9", "403", "1209", "0", "121", "238", "774144"]
                ]
            }
        },
		{
            tableName: "alphaHaarvester",
            tableCaption: "",
            tableData: {
                headers: ["Level", "FUD", "FOMO", "ALPHA", "KEK", "ALPHA Harvest Rate/Day", "Build Time (Blocks)"],
                data: [
                    ["1", "94", "63", "5.2", "0", "1.5", "Instant"],
					["2", "133", "82", "7.4", "0", "2.8", "82944"],
					["3", "172", "107", "12", "0", "4.8", "163705"],
					["4", "181", "150", "16", "5.4", "7.8", "248832"],
					["5", "274", "228", "22", "9.1", "13", "339316"],
					["6", "421", "351", "35", "14", "22", "414720"],
					["7", "418", "525", "51", "42", "39", "518400"],
					["8", "563", "704", "69", "56", "73", "577920"],
					["9", "691", "863", "86", "104", "138", "663552"]
                ]
            }
        },
		{
            tableName: "kekHaarvester",
            tableCaption: "",
            tableData: {
                headers: ["Level", "FUD", "FOMO", "ALPHA", "KEK", "KEK Harvest Rate/Day", "Build Time (Blocks)"],
                data: [
                    ["1", "115", "73", "0", "3.1", "0.3", "Instant"],
					["2", "163", "104", "0", "3.7", "0.71", "101376"],
					["3", "210", "131", "0", "5.2", "1.6", "200084"],
					["4", "221", "188", "0", "15", "2.7", "304128"],
					["5", "335", "279", "0", "22", "4.1", "414720"],
					["6", "514", "429", "0", "34", "7", "506880"],
					["7", "511", "641", "0", "77", "13", "604800"],
					["8", "688", "861", "0", "103", "24", "698880"],
					["9", "422", "1055", "0", "169", "45", "811008"]
                ]
            }
        },
		{
            tableName: "waall",
            tableCaption: "",
            tableData: {
                headers: ["Level", "FUD", "FOMO", "ALPHA", "KEK", "Build Time (Blocks)"],
                data: [
                    ["1", "8", "0.5", "0.25", "0", "Instant"],
					["2", "16", "1", "0.5", "0", "16000"],
					["3", "32", "2", "1", "0", "39500"],
					["4", "70", "5", "2.5", "1", "79000"],
					["5", "140", "10", "5", "2", "119000"],
					["6", "280", "20", "10", "4", "158000"],
					["7", "600", "50", "25", "20", "315000"],
					["8", "1200", "100", "50", "40", "475000"],
					["9", "2000", "200", "100", "120", "790000"]
                ]
            }
        },
		{
            tableName: "fudReservoir",
            tableCaption: "",
            tableData: {
                headers: ["Level", "FUD", "FOMO", "ALPHA", "KEK", "FUD Capacity", "Spill Radius", "Spill Rate", "Build Time (Blocks)"],
                data: [
                    ["1", "290", "100", "0", "0", "5", "810", "0.665", "Instant"],
					["2", "342", "114", "0", "0", "10", "720", "0.57", "18677"],
					["3", "528", "176", "0", "0", "20", "630", "0.475", "30189"],
					["4", "824", "326", "0", "17", "40", "540", "0.38", "48762"],
					["5", "1348", "539", "0", "28", "80", "450", "0.285", "77202"],
					["6", "2332", "933", "0", "47", "160", "360", "0.2375", "124337"],
					["7", "3420", "1710", "0", "171", "320", "270", "0.19", "197379"],
					["8", "4940", "2470", "0", "247", "640", "180", "0.1425", "317050"],
					["9", "3420", "2280", "0", "342", "1280", "90", "0.095", "503316"]
                ]
            }
        },
		{
            tableName: "fomoReservoir",
            tableCaption: "",
            tableData: {
                headers: ["Level", "FUD", "FOMO", "ALPHA", "KEK", "FOMO Capacity", "Spill Radius", "Spill Rate", "Build Time (Blocks)"],
                data: [
                    ["1", "260", "130", "0", "0", "2.5", "990", "0.735", "Instant"],
					["2", "315", "156", "0", "0", "5", "880", "0.63", "20856"],
					["3", "486", "243", "0", "0", "10", "770", "0.525", "33409"],
					["4", "721", "446", "0", "17", "20", "660", "0.42", "53638"],
					["5", "1192", "738", "0", "30", "40", "550", "0.315", "85780"],
					["6", "2062", "1288", "0", "52", "80", "440", "0.2625", "134698"],
					["7", "2844", "2358", "0", "189", "160", "330", "0.21", "222051"],
					["8", "4095", "3419", "0", "273", "320", "220", "0.1575", "352278"],
					["9", "2520", "3150", "0", "378", "640", "110", "0.105", "570425"]
                ]
            }
        },
		{
            tableName: "alphaReservoir",
            tableCaption: "",
            tableData: {
                headers: ["Level", "FUD", "FOMO", "ALPHA", "KEK", "ALPHA Capacity", "Spill Radius", "Spill Rate", "Build Time (Blocks)"],
                data: [
                    ["1", "225", "90", "10", "0", "1.5", "1170", "0.77", "Instant"],
					["2", "270", "108", "15", "0", "3", "1040", "0.66", "18054"],
					["3", "417", "167", "23", "0", "6", "910", "0.55", "28981"],
					["4", "618", "309", "38", "15", "12", "780", "0.44", "45511"],
					["5", "1022", "511", "64", "26", "24", "650", "0.33", "75486"],
					["6", "1767", "884", "110", "44", "48", "520", "0.275", "120193"],
					["7", "2430", "1620", "198", "162", "96", "390", "0.22", "189155"],
					["8", "3510", "2340", "293", "234", "192", "260", "0.165", "302959"],
					["9", "2160", "2160", "270", "324", "384", "130", "0.11", "486539"]
                ]
            }
        },
		{
            tableName: "kekReservoir",
            tableCaption: "",
            tableData: {
                headers: ["Level", "FUD", "FOMO", "ALPHA", "KEK", "KEK Capacity", "Spill Radius", "Spill Rate", "Build Time (Blocks)"],
                data: [
                    ["1", "275", "110", "0", "5", "0.4", "630", "0.63", "Instant"],
					["2", "330", "132", "0", "6", "0.8", "560", "0.54", "22412"],
					["3", "509", "204", "0", "9", "1.6", "490", "0.45", "35421"],
					["4", "755", "378", "0", "38", "3.2", "420", "0.36", "56889"],
					["5", "1249", "624", "0", "62", "6.4", "350", "0.27", "89211"],
					["6", "2160", "1080", "0", "108", "13", "280", "0.225", "145060"],
					["7", "2970", "1980", "0", "297", "26", "210", "0.18", "230276"],
					["8", "4290", "2860", "0", "429", "51", "140", "0.135", "369891"],
					["9", "3960", "2640", "0", "528", "102", "70", "0.09", "587203"]
                ]
            }
        },
		{
            tableName: "goldenAaltar",
            tableCaption: "",
            tableData: {
                headers: ["Level", "FUD", "FOMO", "ALPHA", "KEK", "Build Time (Blocks)", "Spillover Radius", "Spillover Rate"],
                data: [
                    ["1", "3000", "1500", "2000", "750", "Instant", "2000", "100%"],
					["2", "300", "150", "75", "10", "65000", "1800", "90%"],
					["3", "600", "300", "150", "20", "160000", "1600", "80%"],
					["4", "1000", "750", "375", "100", "320000", "1400", "70%"],
					["5", "2000", "1500", "750", "200", "475000", "1200", "60%"],
					["6", "4000", "3000", "1500", "400", "630000", "1000", "50%"],
					["7", "5000", "7500", "3750", "1500", "1250000", "800", "40%"],
					["8", "10000", "15000", "7500", "3000", "1900000", "600", "30%"],
					["9", "20000", "30000", "15000", "6000", "3200000", "400", "20%"]
                ]
            }
        },
		{
            tableName: "goldenTiles",
            tableCaption: "",
            tableData: {
                headers: ["Level", "FUD", "FOMO", "ALPHA", "KEK", "Build Time (Blocks)"],
                data: [
                    ["1", "25", "25", "75", "25", "Instant"]
                ]
            }
        },
		{
            tableName: "maaker",
            tableCaption: "",
            tableData: {
                headers: ["Level", "FUD", "FOMO", "ALPHA", "KEK", "Build Time (Blocks)", "Simultaneous Building/Upgrading"],
                data: [
                    ["1", "2500", "300", "500", "125", "0", "2"],
					["2", "5000", "650", "950", "250", "4000", "3"],
					["3", "10000", "1250", "1900", "500", "10000", "4"],
					["4", "15000", "2500", "3750", "1500", "20000", "5"],
					["5", "22500", "3700", "5600", "2200", "30000", "6"],
					["6", "30000", "5000", "7500", "3000", "40000", "7"],
					["7", "27500", "6900", "10300", "5500", "80000", "8"],
					["8", "35000", "8750", "13100", "7000", "120000", "9"],
					["9", "42500", "10500", "16000", "8500", "200000", "10"]
                ]
            }
        },
		{
            tableName: "grass",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Level", "FUD", "FOMO", "ALPHA", "KEK", "Build Time (Blocks)"],
                data: [
                    ["LE Purple Grass", "1", "200", "0", "0", "5", "Instant"],
					["LE Cyan Grass", "1", "200", "0", "10", "0", "Instant"]
                ]
            }
        },
		{
            tableName: "roflRug",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Level", "FUD", "FOMO", "ALPHA", "KEK", "Build Time (Blocks)"],
                data: [
                    ["LE Mythical ROFL Rug", "1", "3000", "1000", "5000", "2000", "Instant"],
					["LE Godlike ROFL Rug", "1", "15000", "5000", "25000", "10000", "Instant"]
                ]
            }
        },
		{
            tableName: "graandFountain",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Level", "FUD", "FOMO", "ALPHA", "KEK", "Build Time (Blocks)"],
                data: [
                    ["Graand Fountain", "1", "10000", "0", "6008.2", "0", "Instant"]
                ]
            }
        },
		{
            tableName: "nftDisplay",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Level", "FUD", "FOMO", "ALPHA", "KEK", "Build Time (Blocks)"],
                data: [
                    ["4x4 NFT Display", "1", "400", "0", "600", "100", "Instant"],
					["4x6/6x4 NFT Display", "1", "600", "0", "800", "200", "Instant"],
					["8x8 NFT Display", "1", "1600", "0", "2000", "600", "Instant"]
                ]
            }
        },
		{
            tableName: "goldenNFTDisplay",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Level", "FUD", "FOMO", "ALPHA", "KEK", "Build Time (Blocks)"],
                data: [
                    ["4x4 LE Golden NFT Display", "1", "4000", "0", "6000", "1000", "Instant"],
					["4x6/6x4 LE Golden NFT Display", "1", "6000", "0", "8000", "2000", "Instant"],
					["8x8 LE Golden NFT Display", "1", "16000", "0", "20000", "6000", "Instant"]
                ]
            }
        },
		{
            tableName: "blueTiles",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Level", "FUD", "FOMO", "ALPHA", "KEK", "Build Time (Blocks)"],
                data: [
                    ["Diamond", "1", "0", "0", "11.5", "5.4", "Instant"],
					["Ghost", "1", "22", "11", "8.5", "2.2", "Instant"],
					["Heart", "1", "0", "12", "19", "0", "Instant"],
					["Star", "1", "36", "0", "16", "0", "Instant"]
                ]
            }
        },
		{
            tableName: "magentaTiles",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Level", "FUD", "FOMO", "ALPHA", "KEK", "Build Time (Blocks)"],
                data: [
                    ["Diamond", "1", "0", "0", "11", "5.6", "Instant"],
					["Ghost", "1", "22.7", "11.3", "8", "2.3", "Instant"],
					["Heart", "1", "0", "11", "19.5", "0", "Instant"],
					["Star", "1", "34", "0", "16.5", "0", "Instant"]
                ]
            }
        },
		{
            tableName: "yellowTiles",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Level", "FUD", "FOMO", "ALPHA", "KEK", "Build Time (Blocks)"],
                data: [
                    ["Diamond", "1", "0", "0", "13.5", "4.6", "Instant"],
					["Ghost", "1", "19.3", "9.7", "10.5", "1.9", "Instant"],
					["Heart", "1", "0", "16", "17", "0", "Instant"],
					["Star", "1", "44", "0", "14", "0", "Instant"]
                ]
            }
        },
		{
            tableName: "purpleTiles",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Level", "FUD", "FOMO", "ALPHA", "KEK", "Build Time (Blocks)"],
                data: [
                    ["Diamond", "1", "0", "0", "12", "5.2", "Instant"],
					["Ghost", "1", "21.3", "10.7", "9", "2.1", "Instant"],
					["Heart", "1", "0", "13", "18.5", "0", "Instant"],
					["Star", "1", "38", "0", "15.5", "0", "Instant"]
                ]
            }
        },
		{
            tableName: "pinkTiles",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Level", "FUD", "FOMO", "ALPHA", "KEK", "Build Time (Blocks)"],
                data: [
                    ["Diamond", "1", "0", "0", "13", "4.8", "Instant"],
					["Ghost", "1", "20", "10", "10", "2", "Instant"],
					["Heart", "1", "0", "15", "17.5", "0", "Instant"],
					["Star", "1", "42", "0", "14.5", "0", "Instant"]
                ]
            }
        },
		{
            tableName: "greenTiles",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Level", "FUD", "FOMO", "ALPHA", "KEK", "Build Time (Blocks)"],
                data: [
                    ["Diamond", "1", "0", "0", "12.5", "5", "Instant"],
					["Ghost", "1", "20.7", "10.3", "9.5", "2.1", "Instant"],
					["Heart", "1", "0", "14", "18", "0", "Instant"],
					["Star", "1", "40", "0", "15", "0", "Instant"]
                ]
            }
        },
		{
            tableName: "halloweenDecorations",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Level", "FUD", "FOMO", "ALPHA", "KEK", "Build Time (Blocks)"],
                data: [
                    ["Paampkin Trio", "1", "600", "100", "250", "0", "Instant"],
					["Roflkin", "1", "500", "0", "300", "50", "Instant"],
					["Scareye Crow", "1", "700", "0", "500", "75", "Instant"],
					["Gotchi Caandle", "1", "1000", "300", "1000", "0", "Instant"],
					["Sus Baatterfly", "1", "3000", "0", "5000", "700", "Instant"],
					["Skeledator", "1", "6000", "0", "25000", "2500", "Instant"]
                ]
            }
        },
		{
            tableName: "christmasDecorations",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Level", "FUD", "FOMO", "ALPHA", "KEK", "Build Time (Blocks)"],
                data: [
                    ["Feelin’ Lit", "1", "0", "150", "250", "100", "Instant"],
					["Bulby", "1", "200", "450", "150", "50", "Instant"],
					["Rednosed ROFL", "1", "2300", "0", "350", "100", "Instant"],
					["Brrrooorrr", "1", "800", "0", "650", "80", "Instant"],
					["O Aangel Tree O Aangel Tree", "1", "-", "-", "-", "-", "-"]
                ]
            }
        },
		
    ]
