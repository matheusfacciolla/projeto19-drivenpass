import prisma from "../config/database.js";
import { wifis } from "@prisma/client";

export type CreateWifiData = Omit<wifis, "id">;

export async function postWifi(wifi: CreateWifiData, userId: number) {
  await prisma.wifis.create({ data: { ...wifi, userId } });
}

export async function getAllUserWifis(userId: number) {
  const getAllUserWifis = await prisma.wifis.findMany({
    where: {
      userId: userId,
    },
  });

  return getAllUserWifis;
}

export async function getWifiById(userId: number, wifiId: number) {
  const getAllUserWifi = await prisma.wifis.findMany({
    where: {
      id: wifiId,
      userId: userId,
    },
  });

  return getAllUserWifi;
}

export async function deleteWifiById(userId: number, wifiId: number) {
  await prisma.wifis.deleteMany({
    where: {
      id: wifiId,
      userId: userId,
    },
  });
}
