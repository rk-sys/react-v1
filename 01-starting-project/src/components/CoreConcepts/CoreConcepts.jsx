import { CORE_CONCEPTS } from '../../data'
import CoreConcept from '../CoreConcept/CoreConcept'
import Section from '../Section/Section'

export default function CoreConcepts() {

  return (
    <Section id={ 'core-concepts' }
             title={ 'Core Concepts' }>

      <ul>
        { CORE_CONCEPTS.map(item => <CoreConcept key={ item.title } { ...item }/>) }
      </ul>
    </Section>
  )
}
