import { SITE_URL, VERCEL_URL } from "@/app/const";

const DEFAULT_URL = "http://localhost:3000";
const PROTOCOL = "http";
const CALLBACK_PATH = "/auth/callback";
const SLASH = "/";

const getUrl = () => SITE_URL ?? VERCEL_URL ?? DEFAULT_URL;

export const getRedirectUrl = () => {
  const url = `${getUrl()}${CALLBACK_PATH}`;
  const urlWithProtocol = url.startsWith(PROTOCOL)
    ? url
    : `${PROTOCOL}://${url}`;

  return urlWithProtocol.endsWith(SLASH)
    ? urlWithProtocol
    : `${urlWithProtocol}${SLASH}`;
};
