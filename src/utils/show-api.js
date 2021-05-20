import request from 'superagent';

const TOKEN = window.localStorage.getItem('TOKEN');

export async function signUp(credentials) {
  const response = await request
    .post('/api/auth/signup')
    .send(credentials);

  return response.body;
}

export async function signIn(credentials) {
  const response = await request
    .post('/api/auth/signin')
    .send(credentials);

  return response.body;
}
export async function getShows(search) {
  const response = await request
    .get('/api/shows')
    .set('Authorization', TOKEN)
    .query({ search: search });
//superagent request so want the body
  return response.body;
}

export async function postFavorite(show) {
  const response = await request
    .post('/api/favorites')
    .set('Authorization', TOKEN)
    .send(show);

  return response.body;
}