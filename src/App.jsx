import './App.css'
import RefFrom from './Component/RefForm/RefFrom'
// import SimpleForm from './Component/SimpleForm/SimpleForm'
// import StateFullForm from './Component/StateFullForm/StateFullForm'

function App() {

  return (
    <>
      {/* From simple Hangling Using e.target.name.value  */}
      {/* <SimpleForm/> */}

      {/* Form Handling using useState */}
      {/* <StateFullForm/> */}

      {/* Form Handling Using useRef  */}
      <RefFrom />
    </>
  )
}

export default App
