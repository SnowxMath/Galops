import withSerwistInit from "@serwist/next";

// PWA : Serwist génère le service worker à partir de src/app/sw.ts.
// Désactivé en dev pour éviter le cache pendant le développement.
const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withSerwist(nextConfig);
