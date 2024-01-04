import request from 'supertest';
import app from '../app';
import { Music, Review } from '../types/api';
import db from '.././db/postgres/connection';
import { users, music, reviews } from '../db/postgres/data/test-data.json';
import { seed } from '../db/postgres/seed/seed';

afterAll(() => {
  db.end();
});

beforeEach(() => {
  return seed(users as [], music as [], reviews as []) ;
});

describe('GET /api/music', () => {
  test('200: should return an array of object with all music', () => {
    return request(app)
      .get('/api/music')
      .expect(200)
      .then(({ body }) => {
        body.music.forEach((music: Music) => {
          expect(music).toHaveProperty('music_id');
          expect(music).toHaveProperty('artist_ids');
          expect(music).toHaveProperty('artist_names');
          expect(music).toHaveProperty('name');
          expect(music).toHaveProperty('type');
          expect(music).toHaveProperty('tracks');
          expect(music).toHaveProperty('album_id');
          expect(music).toHaveProperty('genres');
          expect(music).toHaveProperty('preview');
          expect(music).toHaveProperty('album_img');
          expect(music).toHaveProperty('release_date');
          expect(typeof music.artist_names).toBe('object');
          expect(typeof music.tracks).toBe('object');
        });
      });
  });
  test('404: incorrect path', () => {
    return request(app)
      .get('/api/musicincorrect')
      .expect(404)
      .then((Response) => {
        expect(Response.body.msg).toBe('incorrect path - path not found');
      });
  });
});
describe('GET /api/music?music_id', () => {
  test('200: should return a single object of music by music_id', () => {
    return request(app)
      .get('/api/music?music_id=1MVqeIAwhD4T44AKVkIfic')
      .expect(200)
      .then(({ body }) => {
        expect(body.music.music_id).toBe('1MVqeIAwhD4T44AKVkIfic');
      });
  });
  test('404: not found', () => {
    return request(app)
      .get('/api/music?music_id=wrongthing')
      .expect(404)
      .then((Response) => {
        expect(Response.body.msg).toBe('not found');
      });
  });
});
describe('GET /api/music?artist_ids', () => {
  test('200: should return an array of music object by artist_ids for a particular artist', () => {
    return request(app)
      .get('/api/music?artist_ids=4oLeXFyACqeem2VImYeBFe')
      .expect(200)
      .then(({ body }) => {
        expect(body.music[0].artist_ids).toContain('4oLeXFyACqeem2VImYeBFe');
      });
  });
});
xdescribe('GET /api/music?genres', () => {
  test('200: should return an array of music with the same genre', () => {
    return request(app)
      .get('/api/music?genres=rock')
      .expect(200)
      .then(({ body }) => {
        console.log(body.music);

//  expect(music[0].genres).toEqual(['rock']);
     
      });
  });
});
describe('GET /api/music?order', () => {
  test('200: should return an array of music ASC or DESC by release_date if no other query, DESC by default', () => {
    return request(app)
      .get('/api/music?order=ASC')
      .expect(200)
      .then(({ body }) => {
 
        expect(parseInt(body.music[0].release_date)).toBeLessThan(parseInt(body.music[1].release_date));
      });
  });
});
describe('GET /api/music?pagination', () => {
  test('200: should return an array of music paginated beyond the default limit of 40', () => {
    return request(app)
      .get('/api/music?p=2')
      .expect(200)
      .then(({ body }) => {
        expect(body.music.length).toBe(10);
      });
  });
});


describe('/api/reviews', () => {
  describe('GET /api/reviews', () => {
    it('200: should return an array of review objects', () => {
      return request(app)
        .get('/api/reviews')
        .expect(200)
        .then((response: unknown) => {
          const { body } = response as { body: { reviews: Review[] } };

          body.reviews.forEach((review: any) => {
            expect(review).toMatchObject({
              music_id: expect.any(Number),
              user_id: expect.any(Number),
              score: expect.any(Number),
              title: expect.any(String || null),
              body: expect.any(String || null),
              created_at: expect.any(String),
            });
          });
        });
    });
  });
  describe('/api/reviews/:music_id', () => {
    describe('GET /api/reviews/:music_id', () => {
      it('200: should return an array of review objects with passed music_id', () => {
        return request(app)
          .get('/api/reviews/1')
          .expect(200)
          .then((response: unknown) => {
            const { body } = response as { body: { reviews: Review[] } };

            body.reviews.forEach((review: any) => {
              expect(review).toMatchObject({
                music_id: 1,
                user_id: expect.any(Number),
                score: expect.any(Number),
                title: expect.any(String || null),
                body: expect.any(String || null),
                created_at: expect.any(String),
              });
            });
          });
      });
    });
  });
});
