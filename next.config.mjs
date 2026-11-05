const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  basePath: isProd ? "/newbites" : "",
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
