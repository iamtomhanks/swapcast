// Interfaces
import { Connection } from 'mysql';
import { GetUserParams } from '../../src/Interfaces/Server/auth';
import { User } from '../../src/Interfaces/Server/tables';

function getUser(
  { username }: GetUserParams, 
  connection: Connection
): Promise<User|null> {

  return new Promise((resolve, reject) => {
    let result: User|null = null;
    const queryString = `
    SELECT Users.*
    FROM Users
    WHERE Users.Username = '${username}'
  `;

    const query = connection.query(queryString);
    query.on('result', (row: User) => {
      result = row;
    }).on('end', () => {
      resolve(result);
    });
  });
}

export {
  getUser,
};