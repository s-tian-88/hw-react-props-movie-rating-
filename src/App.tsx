import './App.css'
import { Stars } from './Components/Stars/Stars'

function App() {

  const numbers: number[] = Array.from({length: 15}, () => Math.floor(Math.random() * 10));

  return (
      <div className="main-container">
      { numbers.map((o, index) => <Stars key = { index } count = { o } />) }
      </div>
  )
}

export default App 
