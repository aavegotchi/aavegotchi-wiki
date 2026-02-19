const DEFAULT_SITE_NAME = "Aavegotchi Wiki";
const MIN_DESCRIPTION_LENGTH = 70;
const MAX_DESCRIPTION_LENGTH = 160;
const MAX_DOCUMENT_TITLE_LENGTH = 65;

const PAGE_ALIAS_TERMS = {
  "base-migration": [
    "Aavegotchi Base migration",
    "Polygon to Base migration",
    "Base contract addresses",
  ],
  gotchiverse: [
    "Aavegotchi metaverse",
    "REALM parcels",
    "Alchemica farming",
  ],
  metaverse: [
    "Aavegotchi metaverse",
    "Gotchiverse history",
    "REALM gameplay",
  ],
  ghst: ["GHST token", "Aavegotchi token", "Base GHST"],
  tokenomics: ["GHST tokenomics", "Aavegotchi economy", "token utility"],
  "rarity-farming": [
    "Aavegotchi rarity farming",
    "rarity score",
    "season rewards",
  ],
  "spirit-force": ["Aavegotchi collateral", "aTokens", "maTokens"],
  "spirit-force-history": [
    "Spirit Force history",
    "Aavegotchi collateral terms",
    "aToken timeline",
  ],
  baazaar: ["Aavegotchi marketplace", "NFT marketplace", "Baazaar trading"],
  bridge: ["Aavegotchi bridge", "Polygon bridge", "Base bridge"],
  contracts: [
    "Aavegotchi contracts",
    "smart contract addresses",
    "Base deployments",
  ],
  forge: ["Aavegotchi Forge", "crafting", "schematics"],
  staking: ["GHST staking", "LP staking", "GLTR rewards"],
  glossary: ["Aavegotchi glossary", "crypto terms", "game terms"],
  faq: ["Aavegotchi FAQ", "frequently asked questions", "help guide"],
};

const TERM_MATCHERS = [
  {
    pattern: /\bghst\b/i,
    aliases: ["GHST token", "Aavegotchi token"],
  },
  {
    pattern: /\b(alchemica|fud|fomo|alpha|kek)\b/i,
    aliases: ["Alchemica tokens", "Aavegotchi resources"],
  },
  {
    pattern: /\b(gotchiverse|realm)\b/i,
    aliases: ["Aavegotchi metaverse", "REALM parcels"],
  },
  {
    pattern: /\b(agip|aavegotchi improvement proposals)\b/i,
    aliases: ["AGIP proposals", "Aavegotchi governance"],
  },
  {
    pattern: /\b(baazaar|marketplace)\b/i,
    aliases: ["Aavegotchi marketplace", "NFT trading"],
  },
  {
    pattern: /\b(base|migration)\b/i,
    aliases: ["Base chain", "Polygon migration"],
  },
  {
    pattern: /\b(spirit force|atokens|matokens|amtokens)\b/i,
    aliases: ["Aavegotchi collateral", "Spirit Force"],
  },
];

function normalizeWhitespace(value) {
  if (!value) return "";
  return String(value).replace(/\s+/g, " ").trim();
}

function toPlainText(value) {
  if (!value) return "";

  return normalizeWhitespace(
    String(value)
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/`[^`]*`/g, " ")
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1 ")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1 ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<\/?[^>]+>/g, " ")
      .replace(/^table_[a-z0-9_-]+$/gim, " ")
      .replace(/^>\s*/gm, "")
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/\|/g, " ")
      .replace(/[*_~]/g, "")
  );
}

function truncateAtWord(value, maxLength) {
  const normalized = normalizeWhitespace(value);
  if (!normalized || normalized.length <= maxLength) return normalized;
  if (maxLength <= 3) return normalized.slice(0, maxLength);

  const targetLength = Math.max(0, maxLength - 3);
  const sliced = normalized.slice(0, targetLength);
  const cut = sliced.lastIndexOf(" ");
  if (cut < Math.floor(maxLength * 0.45)) {
    return `${sliced.trim()}...`.slice(0, maxLength);
  }
  return `${sliced.slice(0, cut).trim()}...`.slice(0, maxLength);
}

function toSlugTitle(value) {
  return normalizeWhitespace(value)
    .split(/[-_]+/g)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getPageTitle({ pageID, title }) {
  const normalizedTitle = normalizeWhitespace(title);
  const fallbackTitle = normalizedTitle || toSlugTitle(pageID) || "Aavegotchi Wiki";

  const agipYearMatch = /^aavegotchi-improvement-proposals-(\d{4})$/.exec(pageID || "");
  if (agipYearMatch) {
    return `Aavegotchi Improvement Proposals (AGIPs): ${agipYearMatch[1]}`;
  }

  if (pageID === "aavegotchi-improvement-proposals") {
    return "Aavegotchi Improvement Proposals (AGIPs): Overview";
  }

  if (pageID === "metaverse") {
    return "Metaverse (Historical Gotchiverse)";
  }

  return fallbackTitle;
}

function getDocumentTitle({
  pageTitle,
  siteName = DEFAULT_SITE_NAME,
  maxLength = MAX_DOCUMENT_TITLE_LENGTH,
}) {
  const normalizedTitle = normalizeWhitespace(pageTitle);
  const normalizedSiteName = normalizeWhitespace(siteName);

  if (!normalizedTitle) return normalizedSiteName;
  if (normalizedTitle.toLowerCase() === normalizedSiteName.toLowerCase()) {
    return normalizedSiteName;
  }

  const suffix = ` | ${normalizedSiteName}`;
  const maxPageTitleLength = Math.max(20, maxLength - suffix.length);
  const finalPageTitle =
    normalizedTitle.length + suffix.length > maxLength
      ? truncateAtWord(normalizedTitle, maxPageTitleLength)
      : normalizedTitle;

  return `${finalPageTitle}${suffix}`;
}

function addAliases(aliases, newAliases) {
  const seen = new Set(aliases.map((item) => item.toLowerCase()));
  for (const alias of newAliases || []) {
    const normalizedAlias = normalizeWhitespace(alias);
    if (!normalizedAlias) continue;
    const key = normalizedAlias.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      aliases.push(normalizedAlias);
    }
  }
}

function getKeywordAliases({ pageID, title, markdownBody }) {
  const aliases = [];
  addAliases(aliases, PAGE_ALIAS_TERMS[pageID] || []);

  const haystack = `${normalizeWhitespace(title)} ${toPlainText(markdownBody)}`.toLowerCase();
  for (const matcher of TERM_MATCHERS) {
    if (matcher.pattern.test(haystack)) {
      addAliases(aliases, matcher.aliases);
    }
  }

  return aliases.slice(0, 8);
}

function getBodySummary(markdownBody, maxLength = 220) {
  if (!markdownBody) return "";

  const rawParagraphs = String(markdownBody).split(/\n{2,}/g);
  const candidates = rawParagraphs
    .map(toPlainText)
    .map((paragraph) => paragraph.replace(/^contents$/i, "").trim())
    .filter((paragraph) => paragraph.length >= 45 && !/^https?:\/\//i.test(paragraph));

  const source = candidates[0] || toPlainText(markdownBody);
  if (!source) return "";

  return truncateAtWord(source, maxLength);
}

function ensureDescriptionLength({ text, pageTitle, aliases }) {
  let description = normalizeWhitespace(text);

  if (!description) {
    description = `Learn about ${pageTitle} in the Aavegotchi Wiki, including Base-era updates and official references.`;
  }

  if (description.length < MIN_DESCRIPTION_LENGTH) {
    const aliasPhrase = aliases.length
      ? ` Key topics: ${aliases.slice(0, 2).join(", ")}.`
      : " Includes mechanics, history, and ecosystem context.";
    description = `${description}${aliasPhrase}`;
  }

  if (description.length < MIN_DESCRIPTION_LENGTH) {
    description = `Learn about ${pageTitle} in the Aavegotchi Wiki with up-to-date context, key terms, and official links.`;
  }

  if (description.length > MAX_DESCRIPTION_LENGTH) {
    description = truncateAtWord(description, MAX_DESCRIPTION_LENGTH);
  }

  return description;
}

function getDescription({ description, markdownBody, pageTitle, aliases }) {
  const normalizedDescription = toPlainText(description);
  const strongDescription =
    normalizedDescription.length >= MIN_DESCRIPTION_LENGTH &&
    normalizedDescription.length <= MAX_DESCRIPTION_LENGTH;

  if (strongDescription) {
    return normalizedDescription;
  }

  const summary = getBodySummary(markdownBody, 150);
  const combined = normalizedDescription
    ? `${normalizedDescription}. ${summary}`.trim()
    : summary;

  return ensureDescriptionLength({
    text: combined,
    pageTitle,
    aliases,
  });
}

function toIsoDate(value) {
  if (!value) return undefined;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString();
}

function buildWebPageStructuredData({
  pageTitle,
  description,
  canonicalUrl,
  pageID,
  keywords,
  author,
  publishedAt,
  modifiedAt,
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": pageID === "index" ? "WebPage" : "Article",
    name: pageTitle,
    headline: pageTitle,
    description,
    url: canonicalUrl,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: DEFAULT_SITE_NAME,
      url: "https://wiki.aavegotchi.com",
    },
  };

  if (keywords && keywords.length > 0) {
    schema.keywords = keywords.join(", ");
  }

  if (author) {
    schema.author = {
      "@type": "Person",
      name: author,
    };
  }

  const isoPublishedAt = toIsoDate(publishedAt);
  if (isoPublishedAt) {
    schema.datePublished = isoPublishedAt;
  }

  const isoModifiedAt = toIsoDate(modifiedAt || publishedAt);
  if (isoModifiedAt) {
    schema.dateModified = isoModifiedAt;
  }

  return schema;
}

function buildBreadcrumbStructuredData({ pageTitle, canonicalUrl, pageID }) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://wiki.aavegotchi.com/",
    },
  ];

  if (pageID && pageID !== "index") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: pageTitle,
      item: canonicalUrl,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

function buildWebsiteStructuredData({ description }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: DEFAULT_SITE_NAME,
    url: "https://wiki.aavegotchi.com",
    inLanguage: "en",
    description,
  };
}

function createSeoMetadata({
  pageID = "",
  title = "",
  description = "",
  markdownBody = "",
  siteName = DEFAULT_SITE_NAME,
}) {
  const pageTitle = getPageTitle({ pageID, title });
  const aliases = getKeywordAliases({ pageID, title: pageTitle, markdownBody });
  const seoDescription = getDescription({
    description,
    markdownBody,
    pageTitle,
    aliases,
  });

  return {
    pageTitle,
    title: getDocumentTitle({ pageTitle, siteName }),
    description: seoDescription,
    keywords: aliases,
  };
}

module.exports = {
  DEFAULT_SITE_NAME,
  MIN_DESCRIPTION_LENGTH,
  MAX_DESCRIPTION_LENGTH,
  MAX_DOCUMENT_TITLE_LENGTH,
  createSeoMetadata,
  getPageTitle,
  getDocumentTitle,
  getKeywordAliases,
  getDescription,
  toPlainText,
  buildWebPageStructuredData,
  buildBreadcrumbStructuredData,
  buildWebsiteStructuredData,
};
