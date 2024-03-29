export interface Music {
  music_id: string;
  artist_ids: string[];
  artist_names: string[];
  name: string;
  type: string;
  tracks: string[] | null;
  album_id: string;
  genres: string[] | null;
  preview: string;
  album_img: string;
  release_date: string;
  avg_rating?: number;
}
export interface MusicQueries {
  music_id?: string;
  artist_ids?: string;
  genres?: string;
  order?: "ASC" | "DESC";
  p?: string;
  avg_rating?: "true" | "false";
}

export interface CustomResponse extends Response {
  [key: string]: unknown;
}

export interface Review {
  music_id: number;
  username: number;
  rating: number;
  review_title: string | null;
  review_body: string | null;
  created_at?: string;
  review_id?: number;
}

export interface Users {
  username: string;
  avatar_url: string;
  bio: string;
}

export interface MongoUsers {
  username: string;
  password: string;
}

export interface Users {
  username: string;
  avatar_url: string;
  bio: string;
}

export interface MongoUsers {
  username: string;
  password: string;
}

export interface SpotifyQueries {
  q: string;
  type: string;
}
