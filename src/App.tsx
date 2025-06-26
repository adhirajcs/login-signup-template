import { Provider } from "@/components/ui/provider"
import LoginSignup from "@/components/LoginSignup/LoginSignup"

import './styles/App.css'

function App() {

  return (
    <>
     <Provider>
      <LoginSignup />
      </Provider>
    </>
  )
}

export default App
