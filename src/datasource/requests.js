/* eslint-disable import/prefer-default-export */
// export default was disable in case of adding other operation like post, put and delete
import request from 'superagent';

export function get(url) {
  return new Promise((resolve, reject) => request.get(`${url}`)
    .end((error, response) => {
      if (response && response.body) {
        resolve(response.body);
      } else {
        reject(error);
      }
    }));
}
