export default function Tabs({ children, buttons, ButtonsContainer = 'div'}) {

  // const BtnContainer = buttonsContainer

  return (
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      { children }
    </>
  )
}
