import { SITE_URL, VERCEL_URL } from "@/app/const";

const getUrl = () => SITE_URL || VERCEL_URL || "http://localhost:3000";

const addHttpsIfNeeded = (url: string) => {
  return url.startsWith("http://") || url.startsWith("https://")
    ? url
    : "https://" + url;
};

const ensureTrailingSlash = (url: string) =>
  url.endsWith("/") ? url : url + "/";

export const getRedirectUrl = () => {
  const baseUrl = getUrl() + "/auth/callback";

  return ensureTrailingSlash(addHttpsIfNeeded(baseUrl));
};
