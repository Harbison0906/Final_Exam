import { Query } from '../../db';



const findOne = (id: number, token: string) => Query('SELECT * FROM Tokens WHERE id=? AND token=?', [id, token]);

const insert = (userid: number) => Query('INSERT INTO TOKENS(userid) VALUE(?)', [userid]);

const update = (id: number, token: string) => Query('UPDATE Tokens SET token=? WHERE id=?', [token, id]);




export default {  findOne, insert, update, }