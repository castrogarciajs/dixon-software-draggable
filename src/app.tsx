import { Route } from 'wouter'
import Navbar from './components/navbar'
import Sum from './routes/sum'
import Res from './routes/res'
import Mul from './routes/mul'

function App() {
  return (
    <>
      <Navbar />
      <Route path="/sum" component={Sum} />
      <Route path="/res" component={Res} />
      <Route path="/mul" component={Mul} />
    </>
  )
}

export default App
