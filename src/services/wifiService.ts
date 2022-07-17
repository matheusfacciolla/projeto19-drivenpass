import * as wifiRepository from "../repositories/wifiRepository.js";
import { CreateWifiData } from "../repositories/wifiRepository.js";
import { encrypt, decrypt } from "../utils/cryptrFormat.js";

export async function postWifi(wifi: CreateWifiData, userId: number) {
  wifi.password = encrypt(wifi.password);
  await wifiRepository.postWifi(wifi, userId);

  return;
}

export async function getAllWifis(userId: number) {
  const allUserWifis = await wifiRepository.getAllUserWifis(userId);

  if (allUserWifis.length == 0) {
    throw {
      type: "Not_Found",
      message: "Wifi not found",
    };
  }

  const wifiList = [];
  for (let wifi of allUserWifis) {
    wifi = { ...wifi, password: decrypt(wifi.password) };
    wifiList.push(wifi);
  }

  return wifiList;
}

export async function getWifiById(userId: number, wifiId: number) {
  const wifiById = await wifiRepository.getWifiById(userId, wifiId);

  if (wifiById.length == 0) {
    throw {
      type: "Not_Found",
      message: "Wifi not found",
    };
  }

  const wifiList = [];
  for (let wifi of wifiById) {
    wifi = { ...wifi, password: decrypt(wifi.password) };
    wifiList.push(wifi);
  }

  return wifiList;
}

export async function deleteWifiById(userId: number, wifiId: number) {
  const wifiById = await wifiRepository.getWifiById(userId, wifiId);

  if (wifiById.length == 0) {
    throw {
      type: "Not_Found",
      message: "Wifi not found",
    };
  }

  await wifiRepository.deleteWifiById(userId, wifiId);
  return;
}