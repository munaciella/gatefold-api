"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchSpotify = void 0;
const axios_1 = __importDefault(require("axios"));
const searchSpotify = async (token, q, type) => {
    const reqString = `https://api.spotify.com/v1/search?q=${q}&type=${type}`;
    try {
        const matchedMusic = await (0, axios_1.default)({
            method: "get",
            url: reqString,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const spotifyItems = matchedMusic.data[`${type}s`].items;
        const formattedSpotify = spotifyItems.map((item) => {
            if (item.type === "track") {
                return {
                    music_id: item.id,
                    artist_ids: item.artists.map((artist) => artist.id),
                    artist_names: item.artists.map((artist) => artist.name),
                    name: item.name,
                    type: item.type,
                    tracks: null,
                    album_id: item.album.id,
                    genres: null,
                    preview: item.preview_url,
                    album_img: item.album.images[0].url,
                    release_date: item.album.release_date,
                };
            }
            else if (item.type === "album") {
                return {
                    music_id: item.id,
                    artist_ids: item.artists.map((artist) => artist.id),
                    artist_names: item.artists.map((artist) => artist.name),
                    name: item.name,
                    type: item.album_type,
                    tracks: [item.total_tracks],
                    album_id: item.id,
                    genres: null,
                    preview: null,
                    album_img: item.images[0].url,
                    release_date: item.release_date,
                };
            }
        });
        return formattedSpotify;
    }
    catch (err) {
        throw err;
    }
};
exports.searchSpotify = searchSpotify;
