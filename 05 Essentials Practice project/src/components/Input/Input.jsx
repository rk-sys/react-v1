export const Input = ({ initialValue, id, label, type, onChange }) => {

  return (
    <div>
      <label htmlFor={ id }>{ label } { type }</label>

      <input value={ initialValue }
             onChange={ onChange }
             id={ id }
             type={ type }/>
    </div>
  )
}
