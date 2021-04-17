import Content from "./components/Content"
import Leftbar from "./components/Leftbar"
import Rightbar from "./components/Rightbar"

const App = () => {
  return (
    <div className="wrapper">
      <Leftbar/>
      <Content/>
      <Rightbar/>
    </div>
  )
}

export default App
