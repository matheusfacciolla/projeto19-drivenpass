import Cryptr from "cryptr";
import bcrypt from "bcrypt";

export function encrypt(data: string) {
  const cryptr = new Cryptr("myTotallySecretKey");
  const encryptData = cryptr.encrypt(data);

  return encryptData;
}

export function decrypt(data: string) {
  const cryptr = new Cryptr("myTotallySecretKey");
  const encryptData = cryptr.decrypt(data);

  return encryptData;
}

export function encryptedPassword(password: string) {
  const SALT = 10;
  const encryptedPassword = bcrypt.hashSync(password, SALT);
  const cardData = { password: encryptedPassword };

  return cardData;
} 
