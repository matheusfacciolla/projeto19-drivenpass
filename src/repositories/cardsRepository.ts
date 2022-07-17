import prisma from "../config/database.js";
import { cards } from "@prisma/client";

export type CreateCardData = Omit<cards, "id">;

export async function getAllUsercardsByTitle(card: CreateCardData, userId: number) {
  const getAllUserCards = await prisma.cards.findFirst({
    where: {
      userId: userId,
      title: card.title,
    },
  });

  return getAllUserCards;
}

export async function postCard(card: CreateCardData, userId: number) {
  await prisma.cards.create({ data: { ...card, userId } });
}

export async function getAllUserCards(userId: number) {
  const getAllUserCards = await prisma.cards.findMany({
    where: {
      userId: userId,
    },
  });

  return getAllUserCards;
}

export async function getCardById(userId: number, cardId: number) {
  const getAllUserCards = await prisma.cards.findMany({
    where: {
      id: cardId,
      userId: userId,
    },
  });

  return getAllUserCards;
}

export async function deleteCardById(userId: number, cardId: number) {
  await prisma.cards.deleteMany({
    where: {
      id: cardId,
      userId: userId,
    },
  });
}
