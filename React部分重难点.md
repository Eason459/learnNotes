### React Hooks
> React Hooks就是加强版的函数组件。React Hooks 的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进来。而React Hooks 就是我们所说的“钩子”。
- 函数式组件的特点
> 1.纯函数组件没有状态 2.纯函数组件没有生命周期 3.纯函数组件没有this 4.只能是纯函数

> 函数组件，只能做UI展示的功能，涉及到状态的管理与切换，我们不得不用类组件或者redux(JavaScript 状态容器)

- 常见的钩子

**1.useState():状态钩子**
> 在useState()中，它接受状态的初始值作为参数，即上例中计数的初始值，它返回一个数组，其中数组第一项为一个变量，指向状态的当前值。类似this.state,第二项是一个函数，用来更新状态,类似setState。该函数的命名，我们约定为set前缀加状态的变量名。
```
import React, {useState} from 'react'
const AddCount = () => {
  const [ count, setCount ] = useState(0)
  const addcount = () => {
    let newCount = count
    setCount(newCount+=1)
  } 
  return (
    <>
      <p>{count}</p>
      <button onClick={addcount}>count++</button>
    </>
  )
}
export default AddCount 
```

**2.useContext():共享状态钩子**
> 该钩子的作用是，在组件之间共享状态。关于Context这里不再赘述，其作用就是可以做状态的分发，在React16.X以后支持，避免了react逐层通过Props传递数据。
下面是一个例子，现在假设有A组件和B组件需要共享一个状态。

```
import React,{ useContext } from 'react'
const Ceshi = () => {
  const AppContext = React.createContext({})
  const A =() => {
    const { name } = useContext(AppContext)
    return (
        <p>我是A组件的名字{name}<span>我是A的子组件{name}</span></p>
    )
}
const B =() => {
  const { name } = useContext(AppContext)
  return (
      <p>我是B组件的名字{name}</p>
  )
}
  return (
    <AppContext.Provider value={{name: 'hook测试'}}>
    <A/>
    <B/>
    </AppContext.Provider>
  )
}
export default Ceshi 
```

**useReducer():Action钩子**
> 在使用React的过程中，如遇到状态管理，我们一般会用到Redux,而React本身是不提供状态管理的。而useReducer()为我们提供了状态管理。首先，关于redux我们都知道，其原理是我们通过用户在页面中发起action,从而通过reducer方法来改变state,从而实现页面和状态的通信。而Reducer的形式是(state, action) => newstate。类似，我们的useReducer()是这样的
```
const [state, dispatch] = useReducer(reducer, initialState)
```
> 它接受reducer函数和状态的初始值作为参数，返回一个数组，其中第一项为当前的状态值，第二项为发送action的dispatch函数。下面我们依然用来实现一个计数器。
和redux一样，我们是需要通过页面组件发起action来调用reducer方法，从而改变状态，达到改变页面UI的这样一个过程。所以我们会先写一个Reducer函数，然后通过useReducer()返回给我们的state和dispatch来驱动这个数据流。思路就是这样，下面我们上代码
```
import React,{useReducer} from 'react'

const AddCount = () => {
const reducer = (state, action) =>  {
 if(action.type === ''add){
  return {
  ...state,
  count: state.count +1,
  }
 }else {
   return state
  }
 }
const addcount = () => { 
  dispatch({
    type: 'add'
  })
 }
const [state, dispatch] = useReducer(reducer, {count: 0})
return (
<>
<p>{state.count}</p>
<button onClick={addcount}>count++</button>
</>
)
}
export default AddCount
```
**4.useEffect():副作用钩子**
> 依然我们会把请求房子componentDidMount里面，在函数组件中我们可以使用useEffect(),useEffect()接受两个参数，第一个参数是你要进行的异步操作，第二个参数是一个数组，用来给出Effect的依赖项。只要这个数组发生变化，useEffect()就会执行。当第二项省略不填时，useEffect()会在每次组件渲染时执行。这一点类似于类组件的componentDidMount
```
import React, { useState, useEffect } from 'react'

const AsyncPage = ({name}) => {
const [loading, setLoading] = useState(true)
const [person, setPerson] = useState({})

  useEffect(() => {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
      setPerson({name})
    },2000)
  },[name])
  return (
    <>
      {loading?<p>Loading...</p>:<p>{person.name}</p>}
    </>
  )
}

const PersonPage = () =>{
  const [state, setState] = useState('')
  const changeName = (name) => {
    setState(name)
  }
  return (
    <>
      <AsyncPage name={state}/>
      <button onClick={() => {changeName('名字1')}}>名字1</button>
      <button onClick={() => {changeName('名字2')}}>名字2</button>
    </>
  )
}

export default PersonPage 
```
**5.创建自己的hook**