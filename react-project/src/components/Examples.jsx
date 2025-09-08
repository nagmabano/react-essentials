import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "../components/TabButton";
import Section from "./Section";

export default function Examples() {
  // const stateArray = useState("Please click a button!"); // stateArray is a array of exactly 2 elements
  // Destructuring stateArray using vanilla JS
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    // tabContent = selectedButton;
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic == "components"}
          onSelect={() => handleClick("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic == "jsx"}
          onSelect={() => handleClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic == "props"}
          onSelect={() => handleClick("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic == "state"}
          onSelect={() => handleClick("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </Section>
  );
}
