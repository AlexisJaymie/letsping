import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import feed from './pages/feed'

const App = () => {
  return (
    <Routes>

      <Route path='/' element={<login />}> 
      <Route index element={<feed/>}/>
      <Route path='messages' element={<messages/>}/>
      <Route path='messages/:userId' element={<chatbox/>}/>
      <Route path='connections'  element={<connections/>}/>
      <Route path='discover' element={<discover/>}/>
      <Route path='profile' element={<profile/>}/>
      <Route path='profile/:profileId' element={<profile/>}/>
      <Route path='createpost' element={<createpost/>}/>

      </Route>

    </Routes>
  )
}

export default App