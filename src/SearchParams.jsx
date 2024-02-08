import React, { useEffect, useState } from "react";
import Pet from "./Pet.jsx";
import useBreedList from "./useBreedList.js";

const SearchParams = () => {
  const animals = ["", "bird", "cat", "dog", "rabbit", "reptile"];
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [location, setLocation] = useState("");
  const [breeds, status] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
    );
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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
      {pets.map((pet) => (
        <Pet
          animal={pet.animal}
          key={pet.id}
          name={pet.name}
          breed={pet.breed}
        />
      ))}
    </div>
  );
};

export default SearchParams;
