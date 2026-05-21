import type { Request, Response } from "express";
import {
  createFavorite,
  deleteFavorite,
  getFavorites,
} from "../services/favorite.service";

export async function createFavoriteController(req: Request, res: Response) {
  try {
    const userId = String(req.user?.id);

    const favorite = await createFavorite({
      userId,
      placeId: String(req.body.placeId),
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
      rating: req.body.rating,
      hours: req.body.hours,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    });

    return res.status(201).json(favorite);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao adicionar favorito.",
    });
  }
}

export async function listFavoritesController(req: Request, res: Response) {
  try {
    const userId = String(req.user?.id);

    const favorites = await getFavorites(userId);

    return res.json(favorites);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao listar favoritos.",
    });
  }
}

export async function deleteFavoriteController(req: Request, res: Response) {
  try {
    const userId = String(req.user?.id);
    const { placeId } = req.params;

    await deleteFavorite(userId, placeId as string);

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao remover favorito.",
    });
  }
}