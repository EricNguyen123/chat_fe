import axios from "axios";
import bcrypt from 'bcryptjs';

export const setAuthToken = (headers: any): void => {
  if (Object.keys(headers).length > 0 && typeof headers === "object") {
    axios.defaults.headers.common = headers;
  }
};

export const setEncode = (item: any): Promise<string> => {
  const saltRounds = 10;
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        reject(err);
        return;
      }
      bcrypt.hash(item, salt, (err, hash) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(hash);
      });
    });
  });
}
