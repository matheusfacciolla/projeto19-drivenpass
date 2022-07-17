import Cryptr from "cryptr";

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
