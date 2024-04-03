import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept/CoreConcept'
import TabButton from "./components/TabButton/TabButton";

function App() {

  function handlerClick(selectedButton) {
    console.log(selectedButton)
  }

  return (
    <div>
      <Header/>

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept { ...CORE_CONCEPTS[0] }/>
            <CoreConcept { ...CORE_CONCEPTS[1] }/>
            <CoreConcept { ...CORE_CONCEPTS[2] }/>
            <CoreConcept { ...CORE_CONCEPTS[3] }/>
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={ () => handlerClick('components') }
                       label="Component"/>

            <TabButton onClick={ () => handlerClick('jsx') }
                       label="JSX"/>

            <TabButton onClick={ () => handlerClick('props') }
                       label="Props"/>

            <TabButton onClick={ () => handlerClick('state') }
                       label="State"/>
          </menu>

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
