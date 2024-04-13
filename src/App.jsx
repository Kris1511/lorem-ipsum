import { useState } from "react";
import data from './Data/data'

function App() {
  const [count, setCount] = useState(1);
  
  const [text, setText]=useState(data);
  console.log(text);

  const handleSubmit= (e) =>{
    e.preventDefault();

  }

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onClick={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          max="8"
          step="1"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
    </section>
  );
}

export default App;
