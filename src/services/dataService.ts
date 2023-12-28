import axios from "axios";
import { handleFetchError } from "./errorService";
import dotenv from "dotenv";
dotenv.config();

const communitiesURL = process.env.OPENHOUSEAI_COMMUNITIES_API_URL || "";
const homesURL = process.env.OPENHOUSEAI_HOMES_API_URL || "";

export const fetchData = async () => {
  try {
    const [communitiesResponse, homesResponse] = await Promise.all([
      axios.get<any[]>(communitiesURL),
      axios.get<any[]>(homesURL),
    ]);

    const communitiesData = communitiesResponse.data;
    const homesData = homesResponse.data;

    const mergedData = communitiesData.map((community) => {
      const homesInCommunity = homesData.filter(
        (home) => home.communityId === community.id
      );

      const totalPrices = homesInCommunity.reduce(
        (sum, home) => sum + home.price,
        0
      );
      const averagePrice =
        homesInCommunity.length > 0 ? totalPrices / homesInCommunity.length : 0;

      return {
        id: community.id,
        name: community.name,
        imgUrl: community.imgUrl,
        group: community.group,
        averagePrice: averagePrice.toLocaleString("en-US", {
          style: "currency",
          currency: "CAD",
        }),
      };
    });

    const sortedMergedData = mergedData.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    return sortedMergedData;
  } catch (error: any) {
    handleFetchError(error);
    return [];
  }
};
