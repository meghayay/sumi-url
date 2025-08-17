import { generateNanoId } from "../utils/helper.js";
import { getCustomShortUrl, saveShortUrl } from "../dao/short_url.js";

export const createShortUrlWithoutUser = async (url) => {
  const shortUrl = generateNanoId(7);
  if (!shortUrl) {
    throw new Error("Short url not genreated");
  }
  await saveShortUrl(shortUrl, url);
  return shortUrl;
};

export const createShortUrlWithUser = async (url, userId, slug = null) => {
  const shortUrl = slug || generateNanoId(7);
  const exists = await getCustomShortUrl(slug);
  if (exists) throw new Error("this custom url alrdy exists");

  await saveShortUrl(shortUrl, url, userId);
  return shortUrl;
};
