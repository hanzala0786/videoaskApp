import { Route, Routes } from "react-router-dom";
import "./App.css";
import VideoPlayer from './components/VideoPlayer';
import Campaign from "./components/Campaign";
import Form from './components/Form'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<VideoPlayer></VideoPlayer>}/>
        <Route path="/Campaign" element={<Campaign></Campaign>}/>
        <Route path="/Form" element={<Form></Form>}/>

      </Routes>

    </div>
  );
}

export default App;
