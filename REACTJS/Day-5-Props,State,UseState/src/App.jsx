
import './App.css'
import Allcomponent from './props/AllComponent'
import AllClassComponent from './state/AllClassComponent'
import AllUseState from './useState/AllUseState'


function App() {
  return (
    <>
    <h1>Props Started................................................</h1>
     <Allcomponent/>
     <h1 style={{margin:'20px'}}>Props Endend ................................................</h1>
     <h1 style={{margin:'20px'}}>State Started ................................................</h1>
     <AllClassComponent/>
     <h1 style={{margin:'20px'}}>State Endend ................................................</h1>
     <AllUseState/>
    </>
  )
}

export default App
