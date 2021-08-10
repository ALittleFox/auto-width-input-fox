import  React, { useEffect } from 'react'
import style from './css/index.module.css'
import { AutoWidthInputInterface } from './type'
import { useAutoComputeWidth,useInputFocuse } from './hooks'


const AutoWidthInput: React.FC<AutoWidthInputInterface> = ({
  className, value, inputEl, inputDel, inputEnter,
  inputChange, }) => {
  const [ inputValue, setInputValue ] = React.useState(value)
  const [ eleWidth, couterRef ] = useAutoComputeWidth(inputValue)
  useEffect(()=>{setInputValue(value)},[value])
  const changeHandle = (e): void => {
    setInputValue(e.target.value)
    inputChange && inputChange(e.target.value, e)
  }
  const inputKeyUp = (e): void => {
    const keyCode = e.keyCode
    if (keyCode === 8) {
      inputDel && inputDel(e)
    } else if (keyCode === 13) {
      inputEnter && inputEnter(e)
    }
  }
  return (
    <div className={`${style.auto_width_input} ${className}`}>
      <input
        ref={ inputEl }
        autoComplete='off'
        type="text"
        onChange={ changeHandle }
        onKeyUp={ inputKeyUp }
        value={ inputValue }
        style={ { width: `${eleWidth}px` } }
      />
      <span ref={ couterRef }
        className={ style.auto_width_conpute}
        >{ inputValue.replace(/\s/g, 'o')}</span>
    </div>
  )

}


export { AutoWidthInput,useInputFocuse }
