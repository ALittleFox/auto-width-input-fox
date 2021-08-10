import * as React from 'react'
import {AutoWidthInput,useInputFocuse} from '../src/index'
import './App.g.css'
// import { useAutoComputeWidth } from '../src'

const App = () => {
  const [ inputEl, focusAutoWidthInput ] = useInputFocuse()
  return (
    <div className="content" onClick={focusAutoWidthInput}>
      <AutoWidthInput
        // inputBlur={(d)=>{console.log(d)}}
        value={ 'qq' }
        inputEl={ inputEl }
        inputDel={ e => { console.log('inputdel', e) } }
        inputEnter={ e => { console.log('inputenter', e) } }
        inputChange={(value,e)=>{ console.log('inputChange',value,e) } }
      />
    </div>
  )
}

export default App
