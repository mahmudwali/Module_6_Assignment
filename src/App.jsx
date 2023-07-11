import React, { useState } from 'react';

function Header({ title }) {
  return <h1>{title}</h1>;
}

function Content() {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    setDisplayText(text);
  };

  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleTextAreaChange}
      ></textarea>
      <br />
      <button onClick={handleButtonClick}>Display Text</button>
      <p>{displayText}</p>
    </div>
  );
}

function Footer() {
  return <footer>Some information about yourself or your favorite quote. Develop by Mahmud</footer>;
}

function App() {
  return (
    <div className="App">
      <Header title="My Simple React App" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
