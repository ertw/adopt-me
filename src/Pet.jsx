import React from "react";

/**
 *
 * Props for the Pet component.
 *
 * @typedef {Object} Props
 * @property {string} name - The name of the pet.
 * @property {string} animal - The type of animal the pet is.
 * @property {string} breed - The breed of the pet.
 */
/**
 * Pet component in React.
 *
 * @component
 * @param {Props} props - The properties passed to the component.
 * @returns {JSX.Element} A React element that displays the pet's name, animal type, and breed.
 */

export const Pet = ({ name, animal, breed }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
};
