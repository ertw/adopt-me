import React from "react";

/**
 *
 * Props for the Pet component.
 *
 * @typedef {Object} Props
 * @property {string} name - The name of the pet.
 * @property {string} animal - The type of animal the pet is.
 * @property {string} breed - The breed of the pet.
 * @property {string[]} images - The images of the pet.
 * @property {string} location - The location of the pet.
 * @property {string} id - The id of the pet.
 */
/**
 * Pet component in React.
 *
 * @component
 * @param {Props} props - The properties passed to the component.
 * @returns {JSX.Element} A React element that displays the pet's name, animal type, and breed.
 */

const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = `http://pets-images.dev-apis.com/pets/none.jpg`;
  if (images.length) {
    hero = images[0];
  }
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
