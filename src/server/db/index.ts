import config from '../config';
import * as mysql from 'mysql';
import { string } from 'prop-types';

const pool = mysql.createPool(config.mysql);

export const Query = <T = any> (query: string, value?: any) => {
  return new Promise<T> ((resolve, reject) => {
    const sql = mysql.format(query, value);

  pool.query(sql, (err, results) => {
    if (err) {
      reject(err);
    } else {
      return(results);
    }
  })
  })
}

import books from './queries/books'
import categories from './queries/categories'
import users from './queries/users'
import tokens from './queries/tokens'

export default {
  books,
  categories, 
  users, 
  tokens
}