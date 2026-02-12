export function validateEmail(text) {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(text);
}

export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export function handleLanguageCode(code: string) {
  return "en";
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
      ["stkGHST_QUICK", globals.addresses.staking.stkGHST_QUICK],
      ["stkGHST_USDC", globals.addresses.staking.stkGHST_USDC],
      ["ghstQuickLP", globals.addresses.staking.ghstQuickLP],
      ["ghstUsdcLP", globals.addresses.staking.ghstUsdcLP],
      ["ATF_SAFE_POLYGON_ADDRESS", globals.addresses.misc.atfSafePolygon],
      ["BURN_ADDRESS", globals.addresses.misc.burn],
      // Base-era contracts/tokens (post 2025-07-25)
      ["BASE_AAVEGOTCHI_DIAMOND", globals.addresses.baseDiamonds.aavegotchi],
      ["BASE_WEARABLES_DIAMOND", globals.addresses.baseDiamonds.wearables],
      ["BASE_FORGE_DIAMOND", globals.addresses.baseDiamonds.forge],
      ["BASE_GBM_BAAZAAR", globals.addresses.baseDiamonds.gbmBaazaar],
      ["BASE_FAKE_GOTCHIS_CARDS", globals.addresses.baseDiamonds.fakeGotchisCards],
      ["BASE_FAKE_GOTCHIS_ART", globals.addresses.baseDiamonds.fakeGotchisArt],
      ["BASE_GG_SKINS", globals.addresses.baseDiamonds.ggSkins],
      ["BASE_GG_PROFILE", globals.addresses.baseDiamonds.ggProfile],
      ["BASE_REALM_PARCELS", globals.addresses.baseDiamonds.realmParcels],
      ["BASE_INSTALLATIONS", globals.addresses.baseDiamonds.installations],
      ["BASE_TILES", globals.addresses.baseDiamonds.tiles],
      ["BASE_FUD", globals.addresses.baseTokens.FUD],
      ["BASE_FOMO", globals.addresses.baseTokens.FOMO],
      ["BASE_ALPHA", globals.addresses.baseTokens.ALPHA],
      ["BASE_KEK", globals.addresses.baseTokens.KEK],
      ["BASE_GLTR", globals.addresses.baseTokens.GLTR],
      ["BASE_GLTR_STAKING", globals.addresses.baseStaking.GLTR_STAKING],
      ["BASESCAN_GHST_URL", globals.links.basescanGHST],
      ["ETHERSCAN_GHST_URL", globals.links.etherscanGHST],
      ["POLYGONSCAN_GHST_URL", globals.links.polygonscanGHST],
      ["UNISWAP_BASE_GHST_URL", globals.links.uniswapBaseGHST],
      ["SNAPSHOT_POAP_PROPOSAL_ID", globals.links.snapshotPoapProposalId],
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
