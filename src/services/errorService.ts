import { AxiosError } from "axios";

export const handleFetchError = (error: AxiosError) => {
  console.error("Error fetching data:", error.message);
  throw error;
};
