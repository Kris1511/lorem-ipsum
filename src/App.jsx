import { useState } from "react";
import data from "./Data/data";
import { nanoid } from "nanoid";


function App() {
  const [count, setCount] = useState(1);

  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count); // parseInt() means "string argument and returns the integer".
    //  'parseInt()' to convert the value of a variable 'count' from a string to an integer.


    setText(data.slice(0, amount));  
    //data.slice(0, amount) is an operation on an array or a string. It takes a portion of the data starting from index "0" up to (but not including) the "amount" specified.
    // This sliced portion of data is then passed as an argument to setText()
  };

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
