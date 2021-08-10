import * as React from 'react';
export interface AutoWidthInputInterface {
  value?: string
  inputEl?: React.MutableRefObject<any>
  inputChange?: (value:string,e:React.ChangeEvent<HTMLInputElement>)=>void
  inputDel?: (e:React.ChangeEvent<HTMLInputElement>)=>void
  inputEnter?: (e:React.ChangeEvent<HTMLInputElement>)=>void
  className?: string
}
