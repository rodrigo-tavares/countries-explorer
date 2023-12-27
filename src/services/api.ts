import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

const handleApiError = (error: any) => {
  console.error("API Error:", error);
};

export const getAllCountries = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/all`);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

export const getCountryByName = async (name: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/name/${name}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
