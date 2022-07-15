import Cryptr from "cryptr";
//import bcrypt from "bcrypt";

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

/* export function encryptedPassword(password: string) {
  const encryptedPassword = bcrypt.hashSync(password, 10);
  const cardData = { password: encryptedPassword };

  return cardData;
} */