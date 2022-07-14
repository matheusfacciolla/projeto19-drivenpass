import Cryptr from "cryptr";
//import bcrypt from "bcrypt";

export function encrypt(number: string) {
  const cryptr = new Cryptr("myTotallySecretKey");
  const encryptNumber = cryptr.encrypt(number);

  return encryptNumber;
}

export function decrypt(number: string) {
  const cryptr = new Cryptr("myTotallySecretKey");
  const encryptNumber = cryptr.decrypt(number);

  return encryptNumber;
}

/* export function encryptedPassword(password: string) {
  const encryptedPassword = bcrypt.hashSync(password, 10);
  const cardData = { password: encryptedPassword };

  return cardData;
} */