import request from 'request-promise-native';

const REDDIT_HOST = 'https://www.reddit.com';

function getSubreddits() {
  return request(buildRequest(`${REDDIT_HOST}/subreddits/default.json`))
    .then(transform);
}

function getListings(subreddit) {
  return request(buildRequest(`${REDDIT_HOST}${subreddit}.json`))
    .then(transform);
}

function buildRequest(uri) {
  return { uri: uri, json: true };
}

function transform(response) {
  return response.data.children.map(x => x.data);
}

export { getSubreddits, getListings }
