### 介绍
fox-auto-width-input
根据字符自动计算input宽度
### 依赖
react >= 16.9

### API
  value?: string
  inputEl?: React.MutableRefObject<any>
  inputChange?: (value:string,e:React.ChangeEvent<HTMLInputElement>)=>void
  inputDel?: (e:React.ChangeEvent<HTMLInputElement>)=>void
  inputEnter?: (e:React.ChangeEvent<HTMLInputElement>)=>void
  className?: string
| API          | type          | Desc                                   |
| :----------- | ------------- | -------------------------------------- |
| value        | string        | input value                           |
| inputEl      | ref (useRef)  | ref                     |
| inputChange  | (value:string,e:React.ChangeEvent<HTMLInputElement>)=>void | input的onChang事件                  |
| inputDel     | (e:React.ChangeEvent<HTMLInputElement>)=>void           | backspace事件                        |
| inputEnter   | (e:React.ChangeEvent<HTMLInputElement>)=>void        | enter事件                 |
| className    | string        |  calssName      |


### demo

```react
import {AutoWidthInput，useInputFocuse} from 'fox-auto-width-input'

const App = () => {
  const [ inputEl, focusAutoWidthInput ] = useInputFocuse()
  return (
    <div className="content" onClick={focusAutoWidthInput}>
      <AutoWidthInput
        value={ 'qq' }
        inputEl={ inputEl }
        inputDel={ e => { console.log('inputdel', e) } }
        inputEnter={ e => { console.log('inputenter', e) } }
        inputChange={(value,e)=>{ console.log('inputChange',value,e) } }
      />
    </div>
  )
}
```

