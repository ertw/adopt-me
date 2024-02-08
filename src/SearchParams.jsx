import React, { useState } from "react";

const SearchParams = () => {
  const animals = ["", "bird", "cat", "dog", "rabbit", "reptile"];
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];
  const [location, setLocation] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => {
              setLocation(e.target.value);
              setBreed("");
            }}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor={"animal"}>
          Animal
          <select
            id={"animal"}
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            {animals.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor={"breed"}>
          Breed
          <select
            id={"breed"}
            value={breed}
            disabled={!breeds.length}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
