import reactImage from '../../assets/react-core-concepts.png'
import './Header.css'
function Header() {

  const resatDescription = ['Fundamental', 'Crucial', 'Core']

  function genRandomIndex(max) {
    return Math.floor(Math.random() * (max + 1))
  }

  const description = resatDescription[genRandomIndex(2)]
  return (
    <header>
      <img src={ reactImage }
           alt="Stylized atom"/>
      <h1>React Essentials</h1>
      <p>
        { description } React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

export default Header
