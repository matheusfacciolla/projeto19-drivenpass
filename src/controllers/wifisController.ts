import { Request, Response } from "express";
import * as wifiService from "../services/wifiService.js";
import { CreateWifiData } from "../repositories/wifiRepository.js";

export async function postWifi(req: Request, res: Response) {
  const wifi: CreateWifiData = req.body;
  const userId: number = res.locals.user.id;

  await wifiService.postWifi(wifi, userId);
  return res.sendStatus(201);
}

export async function getAllWifis(req: Request, res: Response) {
  const wifiId = parseInt(req.params.wifiId);
  const userId: number = res.locals.user.id;

  if (!wifiId) {
    const allWifis = await wifiService.getAllWifis(userId);
    return res.status(200).send(allWifis);
  }

  const wifiById = await wifiService.getWifiById(userId, wifiId);
  return res.status(200).send(wifiById);
}

export async function deleteWifiById(req: Request, res: Response) {
  const wifiId = parseInt(req.params.wifiId);
  const userId: number = res.locals.user.id;

  await wifiService.deleteWifiById(userId, wifiId);
  return res.sendStatus(200);
}
