import * as cardsRepository from "../repositories/cardsRepository.js";
import { CreateCardData } from "../repositories/cardsRepository.js";
import { encrypt, decrypt } from "../utils/cryptrFormat.js";

export async function postCard(card: CreateCardData, userId: number) {
  card.password = encrypt(card.password);
  card.securityCode = encrypt(card.securityCode);
  const iscardExist = await cardsRepository.getAllUsercardsByTitle(card, userId);

  if (iscardExist) {
    throw {
      type: "Conflict",
      message: "This user already have a card with this title",
    };
  }

  await cardsRepository.postCard(card, userId);

  return;
}

export async function getAllCards(userId: number) {
  const allUserCards = await cardsRepository.getAllUserCards(userId);

  if (allUserCards.length == 0) {
    throw {
      type: "Not_Found",
      message: "Card not found",
    };
  }

  const cardsList = [];
  for (let card of allUserCards) {
    card = {
      ...card,
      securityCode: decrypt(card.securityCode),
      password: decrypt(card.password),
    };
    cardsList.push(card);
  }

  return cardsList;
}

export async function getCardsById(userId: number, cardId: number) {
  const cardsById = await cardsRepository.getCardById(userId, cardId);

  if (cardsById.length == 0) {
    throw {
      type: "Not_Found",
      message: "Card not found",
    };
  }

  const cardsList = [];
  for (let card of cardsById) {
    card = {
      ...card,
      securityCode: decrypt(card.securityCode),
      password: decrypt(card.password),
    };
    cardsList.push(card);
  }

  return cardsList;
}

export async function deleteCardById(userId: number, cardId: number) {
  const cardsById = await cardsRepository.getCardById(userId, cardId);

  if (cardsById.length == 0) {
    throw {
      type: "Not_Found",
      message: "Card not found",
    };
  }

  await cardsRepository.deleteCardById(userId, cardId);
  return;
}