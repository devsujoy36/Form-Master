import './App.css'
import Grandpa from './Component/Family/Grandpa/Grandpa'
import ReUsableForm from './Component/ReUsableForm/ReUsableForm'
import HookForm from './Component/HookForm/HookForm'
// import RefFrom from './Component/RefForm/RefFrom'
// import SimpleForm from './Component/SimpleForm/SimpleForm'
// import StateFullForm from './Component/StateFullForm/StateFullForm'

function App() {

  const handleSignupSubmit = (data) => {
    console.log('Sign Up: ', data);
  }
  const handleUpdateSubmit = (data) => {
    console.log('Update: ', data);
  }

  return (
    <>
      <h1 className='text-center font-bold text-4xl'>Form Master</h1>
      {/* From simple Hangling Using e.target.name.value  */}
      {/* <SimpleForm/> */}

      {/* Form Handling using useState */}
      {/* <StateFullForm/> */}

      {/* Form Handling Using useRef  */}
      {/* <RefFrom /> */}

      <HookForm/>

      <ReUsableForm handleSubmit={handleSignupSubmit} formTitle={'Sign Up'} submitBtnText={'Sign Up'} >
        <div>
          <h1>Sign Up</h1>
          <p>Please Sign Up Right Now</p>
        </div>
      </ReUsableForm>

      <ReUsableForm handleSubmit={handleUpdateSubmit} formTitle={'Update Profile'} submitBtnText={'Update'}>
        <div>
          <h1>Update Profile</h1>
          <p>Always Keep Your Profile Updated</p>
        </div>
      </ReUsableForm>
      <div className='flex justify-center items-center h-[70vh] border'>
        <Grandpa />

      </div>

    </>
  )
}

export default App
