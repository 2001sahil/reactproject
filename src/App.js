import './App.css';
import React,{useState} from 'react'
import News from './News';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default function App() {
  // constructor(){
  //   super();
  //   this.state=({progress:100})    
  // }
  const [progress,setprogress]=useState(100)

  const fun=(pro)=>{return setprogress(pro)}
  
  
  
    return (
      <BrowserRouter>
      <Navbar/>
      (<LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => this.setState({progress:100})}
        />)
      <div>

      <Routes>
        
        <Route  path="/News" element={<News key="News" click={fun} category="News" />} />

          <Route  path="/" element={<News   key="general" click={fun} category="general" />} />
          <Route  path="/reactproject" element={<News key="general" click={fun}  category="general" />} />
          <Route  path="/Entertainment" element={<News key="Entertainment" click={fun}  category="Entertainment" />} />
          <Route  path="/Business" element={<News  key="Business" click={fun}  category="Business" />} />
          <Route  path="/science" element={<News  key="science" click={fun}  category="science" />} />
      </Routes>
      </div>
    </BrowserRouter>
    )
  
}

