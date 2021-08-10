import * as React from 'react'
import { tuplify } from '../utils'
// const { useRef,useEffect ,useState } =React
export const useInputFocuse = () => {
  /**
   * @desc: input focus
   * @returns inputEl,focusAutoWidthInput
   */
  const inputEl: React.MutableRefObject<any> = React.useRef(null);
  const focusAutoWidthInput = (): void => {
    inputEl.current.focus()
    // call()
  }
  return tuplify(inputEl, focusAutoWidthInput)
}
export  const useAutoComputeWidth = (value: string | number | boolean, defaultWidth: number = 12) => {
  /**
     * @desc: width auto compute 
     * @return eleWidth 
     * @return couterRef
     */
  const [ eleWidth, setEleWidth ] = React.useState(defaultWidth)
  const couterRef: React.MutableRefObject<any> = React.useRef(null);
  React.useEffect(() => {
    setEleWidth(couterRef.current.offsetWidth > 12 ? couterRef.current.offsetWidth+2 : 12)
  }, [ value ])
  return tuplify(eleWidth, couterRef)
}
