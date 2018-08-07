export const loadJson = (url) =>
  fetch(url, {method: 'GET'})
    // eslint-disable-next-line
    .then(response => Promise.all([response, response.json()]));
