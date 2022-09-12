import React from 'react'
import Signup from './pages/Signup';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/signup"  element={<Signup/>}/>

    </Routes>
  
    </>
  )
}

export default App;
