import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
   UserPoolId: "us-east-1_FfFOtLlTH",
   ClientId: "6f3m8ld46u1f29qe4sv98ab73p",
 };
export default new CognitoUserPool(poolData);