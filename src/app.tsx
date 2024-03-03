import { Route } from 'wouter'
import Navbar from './components/navbar'
import Sum from './routes/sum'

function App() {
  return (
    <>
      <Navbar />
      <Route path="/sum" component={Sum} />
    </>
  )
}

export default App
