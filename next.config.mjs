import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */

const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  experimental: {
    appDir: true, // App Router 기능 활성화
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/, // mdx뿐만 아니라 md도 처리
  options: {
    // 필요한 경우 MDX 옵션 및 플러그인 추가
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
