import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet.js";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Modal from "./Modal.jsx";
import { AdoptedPetContext } from "./AdoptedPetContext.jsx";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const { id } = useParams();
  const result = useQuery({ queryKey: ["details", id], queryFn: fetchPet });
  if (result.isLoading) {
    return (
      <div className={"loading-pane"}>
        <h2 className="loader">😵‍💫</h2>
      </div>
    );
  }
  const pet = result.data?.pets?.[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal isOpen={true}>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    console.log("adopted", pet);
                    setAdoptedPet(pet);
                    navigate({ to: "/" }).then(() => setShowModal(false));
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

const DetailsWithErrorBoundary = (props) => (
  <ErrorBoundary
    errorComponent={
      <h2>
        This listing has an error. <Link to="/">Click here</Link> to go back to
        the home page.
      </h2>
    }
  >
    <Details {...props} />
  </ErrorBoundary>
);

export default DetailsWithErrorBoundary;
