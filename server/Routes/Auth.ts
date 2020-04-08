// Interfaces
import { Connection } from 'mysql';
import { Request, Response, Application } from 'express';
import { RequestStatus } from '../../src/Interfaces/Requests';
import { User } from '../../src/Interfaces/Server/tables';
import { SignInResponse } from '../../src/Interfaces/Server/routes';
import { GetUserParams } from '../../src/Interfaces/Server/auth';

// Modules
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Services
const Auth = require('../Services/Auth');

module.exports = (app: Application, connection: Connection) => {
  app.post('/api/Signin', (req: Request, res: Response) => {
    console.log('/api/Signin');
    const params: GetUserParams = req.body;
  
    Auth.GetUser(params, connection)
      .then((getUserResponse: User) => {
        // username entered doesn't exist
        if(getUserResponse === null) {
          return { status: RequestStatus.FAILURE };
        } 
        
        return bcrypt.compare(req.body.Password, getUserResponse.password)
          .then((matches: boolean) => {
            if(matches) {
              const token = jwt.sign(
                {
                  userId: getUserResponse.id,
                  username: getUserResponse.username
                },
                'SwapCast_123_$',
                { expiresIn: 129600 }
              );
              return {
                status: RequestStatus.SUCCESS,
                token,
                payload: {
                  user: getUserResponse,
                }, 
              };
            }
            return { status: RequestStatus.FAILURE };
          });
  
      })
      .then((returnData: SignInResponse) =>{
        res.send(returnData);
      });
  });
};