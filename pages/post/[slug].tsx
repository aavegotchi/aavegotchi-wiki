import { useRouter } from "next/router";
import { useEffect } from "react";

function getDestination(slug: string) {
  if (!slug) return "/";
  // Keep legacy links working: /post/<slug> -> /en/<slug>
  return `/en/${slug}`;
}

const PostRedirect = (props: { destination?: string }) => {
  const router = useRouter();

  // Client-side fallback (e.g. SPA navigation)
  useEffect(() => {
    const slug = Array.isArray(router.query.slug) ? router.query.slug[0] : router.query.slug;
    const destination = props.destination || getDestination(typeof slug === "string" ? slug : "");
    if (destination && window.location.pathname !== destination) {
      router.replace(destination);
    }
  }, [props.destination, router]);

  return null;
};

export default PostRedirect;

PostRedirect.getInitialProps = async function (ctx) {
  const raw = Array.isArray(ctx.query.slug) ? ctx.query.slug[0] : ctx.query.slug;
  const slug = typeof raw === "string" ? raw : "";
  const destination = getDestination(slug);

  if (ctx.res) {
    ctx.res.writeHead(301, { Location: destination });
    ctx.res.end();
  }

  return { destination };
};
