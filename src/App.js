const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", { key: 1 }, [
    React.createElement("h1", { key: 2 }, name),
    React.createElement("h2", { key: 3 }, animal),
    React.createElement("h2", { key: 4 }, breed),
  ]);
};

const App = () => {
  return React.createElement("div", { className: "react-root" }, [
    React.createElement("h1", { key: 1 }, "Adopt Me!"),
    React.createElement("h2", { key: 2 }, "Welcome to Adopt Me!"),
    React.createElement(Pet, {
      key: 3,
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      key: 4,
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      key: 5,
      name: "Doink",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
