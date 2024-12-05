
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ContactPage from './pages/Contact/ContactPage'
import HomePage from './pages/Home/HomePage'
import MessagePage from './pages/Message/MessagePage'
import Navbar from './components/NavBar'
import AuthorPage from './pages/Author/AuthorPage'
// import ContactSessionPage from './pages/Contact/ContactSessionPage'

function App() {

  return (
    <>

      <Navbar />
    
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        {/* <Route path='/contactSession' element={<ContactSessionPage/>} /> */}
        <Route path='/message' element={<MessagePage />} />
        <Route path='/author' element={<AuthorPage />} />


      </Routes>
    </>
  )
}

export default App
