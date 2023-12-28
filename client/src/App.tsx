import React from "react";
import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import axios from "axios";

export type Community = {
  id: string;
  name: string;
  imgUrl: string;
  averagePrice: string;
  group: string;
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Community[]>([]);
  const [totalCommunities, setTotalCommunities] = useState<number>(0);

  const fetchInitialCards = async () => {
    try {
      const response = await axios.post("http://localhost:3001/search", {
        name: "",
      });
      setSearchResults(response.data.data);
      setTotalCommunities(response.data.totalResults);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchInitialCards();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost:3001/search", {
        name: searchTerm,
      });
      setSearchResults(response.data.data);
      setTotalCommunities(response.data.totalResults);
    } catch (error) {
      console.error("Error", error);

      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 500) {
          console.error("An unexpected error occurred. Please try again.");
        }
      } else if (axios.isAxiosError(error) && error.request) {
        console.error("No response from the server. Please try again.");
      } else {
        console.error("Error in making the request. Please try again.");
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handleReset = async () => {
    await fetchInitialCards();
    setSearchTerm("");
  };

  return (
    <div className='bg-emerald-100'>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='mt-7 text-4xl font-bold text-gray-800 mb-5'>
          Search Communities
        </h1>
        <div className='max-w-md'>
          <SearchBox
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            onSearch={handleSearch}
            onKeyDown={handleKeyPress}
            placeholder='Community  name'
          />
        </div>
        <p className='mt-5 mb-5'>
          Total results: {totalCommunities}{" "}
          <label
            onClick={() => handleReset()}
            className='ml-6 text-green-600 cursor-pointer'
          >
            reset
          </label>
        </p>
      </div>
      <CardList searchResults={searchResults} />
    </div>
  );
};

export default App;
