/* eslint-disable import/prefer-default-export */
// export default was disable in case of adding other operation like post, put and delete
import request from 'superagent';
import { SERVICE_HTTP_ADDRESS } from '../utils/constants';

export function get(url) {
  return new Promise((resolve, reject) => request.get(`${SERVICE_HTTP_ADDRESS + url}`)
    .accept('application/json')
    .type('application/json')
    .end((error, response) => {
      if (response && response.body) {
        resolve(response.body);
      } else {
        reject(error);
      }
    }));
}
