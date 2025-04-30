// @ts-check
import withSerwistInit from "@serwist/next";

const revision = crypto.randomUUID();

const withSerwist = withSerwistInit({
  cacheOnNavigation: true,
  swSrc: "app/sw.ts", // твоє джерело
  swDest: "public/sw.js", // куди скомпілюється
  additionalPrecacheEntries: [
    { url: "/", revision },
    { url: "/~offline", revision }
  ]
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withSerwist(nextConfig);
