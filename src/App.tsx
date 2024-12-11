import './App.css'
import CurrencyData from './components/pages/Valute/CurrencyData'
import data from './constants/data.json'
function App() {
  return (
   <>
     <CurrencyData data={data} />
     </>
  )
}

export default App
