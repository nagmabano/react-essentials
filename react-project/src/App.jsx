import { useState } from "react";

import "./App.css";
import { CORE_CONCEPTS } from "./data.js"; // named exports are imported with curly braces
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from './data.js'

function App() {

  // const stateArray = useState("Please click a button!"); // stateArray is a array of exactly 2 elements
  // Destructuring stateArray using vanilla JS
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = 'Please click a button';

  function handleClick(selectedButton) {
    // tabContent = selectedButton;
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            {/* JS spread operator */}
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
