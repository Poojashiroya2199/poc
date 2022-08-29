import React, { createContext } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

const AccountContext = createContext();

const Account = (Props) => {
const authenticate = async(Username, Password) => {
await new Promise((resolve, reject) => {
    const user = new CognitoUser({Username, Password});
    const authDetails = new AuthenticationDetails({Username, Password});

    user.authenticateUser(authDetails, {
      onSuccess: data => {
        console.log("onSuccess:", data);
        resolve(data);
      },
      onFailure: err => {
        console.log("OnFailure:", err);
        reject(err);
      },
      newPasswordRequired: data => {
        console.log("newPasswordRequired: ", data);
        resolve(data);
      }
    })
  });
}

return (
    <AccountContext.Provider value={{authenticate}}>
        {Props.children}
    </AccountContext.Provider>
);
}

export {Account, AccountContext};