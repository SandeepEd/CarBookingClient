import './App.css'
import NavBar from './containers/NavBar'
import Content from './containers/Content'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Content />
      </BrowserRouter>
    </>
  )
}

export default App
