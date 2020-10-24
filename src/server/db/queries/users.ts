import { Query } from '../../db';


const find = (column: string, value: string | number) => Query('SELECT * FROM Users WHERE ??=?', [column, value]);
const one = () => Query('', []);
const insert = (newUser: object) => Query('INSERT INTO Users SET ?', [newUser]);
const update = () => Query('', []);
const destroy = () => Query('', []);



export default { find, one, insert, update, destroy }