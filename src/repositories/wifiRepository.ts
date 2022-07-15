import prisma from "../config/database.js";
import { wifi } from "@prisma/client";

export type CreateWifiData = Omit<wifi, "id">;

export async function postWifi(wifi: CreateWifiData, userId: number) {
  await prisma.wifi.create({
    data: {
      userId: userId,
      name: wifi.name,
      password: wifi.password,
      title: wifi.title
    },
  });
}

export async function getAllUserWifi(userId: number) {
  const getAllUserWifi = await prisma.wifi.findMany({
    where: {
      userId: userId,
    },
  });

  return getAllUserWifi;
}

export async function getWifiById(userId: number,wifiId: number) {
  const getAllUserWifi = await prisma.wifi.findMany({
    where: {
      id: wifiId,
      userId: userId,
    },
  });

  return getAllUserWifi;
}

export async function deleteWifiById(userId: number, wifiId: number) {
  await prisma.wifi.deleteMany({
    where: {
      id: wifiId,
      userId: userId,
    },
  });
}