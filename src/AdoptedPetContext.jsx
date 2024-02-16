import React, { createContext, useState } from "react";

export const AdoptedPetContext = createContext();

const AdoptedPetContextProvider = ({ children }) => {
  const adoptedPet = useState(null);
  return (
    <AdoptedPetContext.Provider value={adoptedPet}>
      {children}
    </AdoptedPetContext.Provider>
  );
};

export default AdoptedPetContextProvider;
