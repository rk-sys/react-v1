import { useState } from 'react'
import { CORE_CONCEPTS } from './data.js'
import { EXAMPLES } from './data.js'
import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept/CoreConcept'
import TabButton from "./components/TabButton/TabButton";

function App() {

  const [selectedTopic, setSelectedTopic] = useState()

  function handlerClick(selectedButton) {
    setSelectedTopic(selectedButton)
  }

  return (
    <div>
      <Header/>

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            { CORE_CONCEPTS.map(item =>  <CoreConcept key={item.title} { ...item}/>) }
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={ () => handlerClick('components') }
                       isSelected={selectedTopic === 'components'}
                       label="Component"/>

            <TabButton onClick={ () => handlerClick('jsx') }
                       isSelected={selectedTopic === 'jsx'}
                       label="JSX"/>

            <TabButton onClick={ () => handlerClick('props') }
                       isSelected={selectedTopic === 'props'}
                       label="Props"/>

            <TabButton onClick={ () => handlerClick('state') }
                       isSelected={selectedTopic === 'state'}
                       label="State"/>
          </menu>

          { selectedTopic ? <div id="tab-content">
            <h3>{ EXAMPLES[selectedTopic].title }</h3>
            <p>{ EXAMPLES[selectedTopic].description }</p>
            <pre>{ EXAMPLES[selectedTopic].code }</pre>
          </div> : <p>Please elect a topic</p> }

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
