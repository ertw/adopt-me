const Pet = () => {
    return React.createElement('div', {key: 1}, [
        React.createElement('h1', {key: 2}, 'Luna'),
        React.createElement('h2', {key: 3}, 'Dog'),
        React.createElement('h2', {key: 4}, 'Havanese'),
    ]);
}
const App = () => {
    return React.createElement('div', {className: "react-root"}, [
        React.createElement('h1', {key: 1}, 'Adopt Me!'),
        React.createElement('h2', {key: 2}, 'Welcome to Adopt Me!'),
        React.createElement(Pet, {key: 3}),
        React.createElement(Pet, {key: 4}),
        React.createElement(Pet, {key: 5}),
    ]);
};


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App));

