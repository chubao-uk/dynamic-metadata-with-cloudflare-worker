export const config = {
  domainSource: "https://2fa15b2a-5384-4834-9f6b-b074287ab397.weweb-preview.io", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/store/product/[^/]+",
          metaDataEndpoint: "https://xp7p-n0ok-fjrr.e2.xano.io/api:WC7yTG1w/store_product_metadata/{store_product_id}"
      },
      // Add more patterns and their metadata endpoints as needed
  ]
};
