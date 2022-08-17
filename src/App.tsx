
import { useState } from 'react'
import './App.css'
import { Button } from './components/Buttons'
import { ButtonMenu } from './components/ButtonsMenu'


function App() {

  const [tired, setTired] = useState(false)

  return (
    <div className="App">
      {
        tired ? <h1>I need to sleep!</h1> : <h1>I can learn React now.</h1>
      }

      <ButtonMenu setTired={setTired} />

    </div>
  )
}

export default App
