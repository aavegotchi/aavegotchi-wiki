const LEGACY_LANGS = new Set([
  "cn",
  "de",
  "es",
  "fil",
  "fr",
  "id",
  "it",
  "ja",
  "ko",
  "nl",
  "ru",
  "vi",
  "zh",
]);

function getDestination(slug: string) {
  if (!slug) return "/";
  if (slug === "en" || LEGACY_LANGS.has(slug)) return "/";
  return `/en/${slug}`;
}

const LangRedirect = () => null;

export default LangRedirect;

LangRedirect.getInitialProps = async function (ctx) {
  const raw = Array.isArray(ctx.query.lang) ? ctx.query.lang[0] : ctx.query.lang;
  const slug = typeof raw === "string" ? raw.toLowerCase() : "";
  const destination = getDestination(slug);

  if (ctx.res) {
    ctx.res.writeHead(301, { Location: destination });
    ctx.res.end();
  } else if (typeof window !== "undefined" && window.location.pathname !== destination) {
    window.location.replace(destination);
  }

  return {};
};
