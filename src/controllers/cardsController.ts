import { Request, Response } from "express";
import * as cardsService from "../services/cardsService.js";
import { CreateCardData } from "../repositories/cardsRepository.js";

export async function postCard(req: Request, res: Response) {
  const card: CreateCardData = req.body;
  const userId: number = res.locals.user.id;

  await cardsService.postCard(card, userId);
  return res.sendStatus(201);
}

export async function getAllCards(req: Request, res: Response) {
  const cardId = parseInt(req.params.cardId);
  const userId: number = res.locals.user.id;

  if (!cardId) {
    const allCards = await cardsService.getAllCards(userId);
    return res.status(200).send(allCards);
  }

  const cardsById = await cardsService.getCardsById(userId, cardId);
  return res.status(200).send(cardsById);
}

export async function deleteCardById(req: Request, res: Response) {
  const cardId = parseInt(req.params.cardId);
  const userId: number = res.locals.user.id;

  await cardsService.deleteCardById(userId, cardId);
  return res.sendStatus(200);
}