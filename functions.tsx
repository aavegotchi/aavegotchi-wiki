export function validateEmail(text) {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(text);
}

export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export function handleLanguageCode(code: string) {
  let finalCode: string;
  //Handle some cases
  if (code.toLowerCase() === "zh-cn") finalCode = "cn";
  else if (!code) finalCode = "en";
  else finalCode = code;
  console.log("final code:", finalCode);
  return finalCode.slice(0, 2);
}

export function addTablesToMarkdown(markdown, pageName) {
  let finalMarkdown = markdown;

  // Always attempt to replace global tokens like {{GHST_ETHEREUM_ADDRESS}}
  try {
    const globals = require("./data/globals.json");
    const tokenMap = new Map<string, string>([
      ["GHST_ETHEREUM_ADDRESS", globals.addresses.ghst.ethereum],
      ["GHST_POLYGON_ADDRESS", globals.addresses.ghst.polygon],
      ["GHST_BASE_ADDRESS", globals.addresses.ghst.base],
      ["DAO_MAINNET_ADDRESS", globals.addresses.dao.mainnet],
      ["DAO_POLYGON_ADDRESS", globals.addresses.dao.polygon],
      ["REALM_DIAMOND_ADDRESS", globals.addresses.diamonds.realm],
      [
        "INSTALLATIONS_DIAMOND_ADDRESS",
        globals.addresses.diamonds.installations,
      ],
      ["TILES_DIAMOND_ADDRESS", globals.addresses.diamonds.tiles],
      [
        "AAVEGOTCHI_WEARABLES_ADDRESS",
        globals.addresses.diamonds.aavegotchiAndWearables,
      ],
      ["WAP_GHST_ADDRESS", globals.addresses.tokens.wapGHST],
      ["FUD_ADDRESS", globals.addresses.tokens.FUD],
      ["FOMO_ADDRESS", globals.addresses.tokens.FOMO],
      ["ALPHA_ADDRESS", globals.addresses.tokens.ALPHA],
      ["KEK_ADDRESS", globals.addresses.tokens.KEK],
      ["GLTR_ADDRESS", globals.addresses.tokens.GLTR],
      ["GLTR_STAKING_ADDRESS", globals.addresses.staking.GLTR_STAKING],
      ["BURN_ADDRESS", globals.addresses.misc.burn],
      ["BASESCAN_GHST_URL", globals.links.basescanGHST],
      ["ETHERSCAN_GHST_URL", globals.links.etherscanGHST],
      ["POLYGONSCAN_GHST_URL", globals.links.polygonscanGHST],
      ["UNISWAP_BASE_GHST_URL", globals.links.uniswapBaseGHST],
    ]);

    tokenMap.forEach((value, key) => {
      const re = new RegExp(`\\{\\{${key}\\}\\}`, "g");
      finalMarkdown = finalMarkdown.replace(re, value);
    });
  } catch (e) {
    console.log("no globals found");
  }

  // Then attempt to inject tables, if any exist for this page
  try {
    const tables = require(`./data/tables/${pageName}.tsx`).tables;
    tables.forEach((table) => {
      console.log("table", table);
      const replaceMarkdown = generateMarkdownTableFromJson(table);
      finalMarkdown = finalMarkdown.replace(
        `table_${table.tableName}`,
        replaceMarkdown
      );
    });
  } catch (error) {
    console.log("no tables found");
  }

  return finalMarkdown;
}

export function generateMarkdownTableFromJson(table) {
  let tableData = table.tableData;

  //Begin table
  let finalMarkdown = "<table>";

  finalMarkdown = finalMarkdown.concat(
    `<caption>${table.tableCaption}</caption>`
  );

  //Add headers
  finalMarkdown = finalMarkdown.concat("<thead>");
  tableData.headers.forEach((header) => {
    finalMarkdown = finalMarkdown.concat(`<th>${header}</th>`);
  });
  finalMarkdown = finalMarkdown.concat("</thead>");

  //Add rows
  tableData.data.forEach((row) => {
    let rowMarkdown = "<tr>";
    row.forEach((item) => {
      rowMarkdown = rowMarkdown.concat(`<td>${item}</td>`);
    });
    finalMarkdown = finalMarkdown.concat(rowMarkdown).concat("</tr>");
  });

  //Close table
  return finalMarkdown.concat("</table>");
}
