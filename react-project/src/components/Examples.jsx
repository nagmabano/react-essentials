import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "../components/TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

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
      <Tabs
        // ButtonsContainer="menu" // sending identifier as a value for prop, notice capital letter for name, can be ButtonsContainer={ Section }
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic == "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic == "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
