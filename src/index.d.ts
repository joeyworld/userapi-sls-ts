// Type definitions for Userapi-sls-ts 1.0.0
// Project: Userapi-sls-ts
// Definitions by: Byeong Gyu Choi <https://github.com/gyukebox>

export interface UserInfo {
  uuid: string;
  username: string;
  password: string;
  email: string;
}

export interface LambdaHttpResponse {
  statusCode: number;
  body: string;
}

export as namespace userapi_sls_ts;