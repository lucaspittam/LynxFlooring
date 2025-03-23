// This is a minimal middleware file to help Next.js generate the middleware-manifest.json file
export function middleware() {
  // This middleware does nothing, it's just here to trigger middleware-manifest.json generation
  return;
}

// See: https://nextjs.org/docs/app/building-your-application/routing/middleware
export const config = {
  matcher: [],
};
