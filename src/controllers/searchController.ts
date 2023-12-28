import { Request, Response } from "express";
import { fetchData } from "../services/dataService";

export const searchController = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const mergedData = await fetchData();

    const matchingData = name
      ? mergedData.filter((item) =>
          item.name.toLowerCase().includes(name.toLowerCase())
        )
      : mergedData;

    res.json({
      data: matchingData,
      totalResults: matchingData.length,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
