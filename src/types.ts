interface Urls {
  small: string;
  regular?: string;
}

export interface ImageData {
  id: string;
  urls: Urls;
  slug: string;
  alt_description?: string;
  likes?: number;
}
