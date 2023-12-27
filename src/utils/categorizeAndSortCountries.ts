import { Country } from "../types/country";

const categorizeAndSortCountries = (
  countries: Country[],
  searchQuery: string,
  selectedRegion: string | null
) => {
  let filteredCountries = countries;

  filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedRegion) {
    filteredCountries = filteredCountries.filter(
      (country) => country.region.toLowerCase() === selectedRegion.toLowerCase()
    );
  }

  const categorizedCountries = filteredCountries.reduce((acc, country) => {
    const firstLetter = country.name.common.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(country);
    return acc;
  }, {});

  for (const letter in categorizedCountries) {
    categorizedCountries[letter].sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
  }

  const sortedLetters = Object.keys(categorizedCountries).sort();

  const result = sortedLetters.map((letter) => ({
    letter,
    countries: categorizedCountries[letter],
  }));

  return result;
};

export default categorizeAndSortCountries;
