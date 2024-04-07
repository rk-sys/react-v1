import { useState } from 'react'
import { EXAMPLES } from '../../data'
import Section from '../Section/Section'
import Tabs from '../Tabs/Tabs'
import TabButton from "../TabButton/TabButton";

export default function Examples() {

  const [selectedTopic, setSelectedTopic] = useState()

  function handlerClick(selectedButton) {
    setSelectedTopic(selectedButton)
  }

  return (
    <Section id="examples"
             data-attr="exp"
             title="Examples"
             className="Examples">

      <Tabs ButtonsContainer="menu"
            buttons={
        <>
          <TabButton onClick={ () => handlerClick('components') }
                     isSelected={ selectedTopic === 'components' }
                     label="Component"/>

          <TabButton onClick={ () => handlerClick('jsx') }
                     isSelected={ selectedTopic === 'jsx' }
                     label="JSX"/>

          <TabButton onClick={ () => handlerClick('props') }
                     isSelected={ selectedTopic === 'props' }
                     label="Props"/>

          <TabButton onClick={ () => handlerClick('state') }
                     isSelected={ selectedTopic === 'state' }
                     label="State"/>
        </>
      }
            children={
              <>
                { selectedTopic ? <div id="tab-content">
                  <h3>{ EXAMPLES[selectedTopic].title }</h3>
                  <p>{ EXAMPLES[selectedTopic].description }</p>
                  <pre>{ EXAMPLES[selectedTopic].code }</pre>
                </div> : <p>Please elect a topic</p> }
              </>
            }>

      </Tabs>


    </Section>

  )
}
