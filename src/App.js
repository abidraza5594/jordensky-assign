import './App.css';
import {Routes,Route} from "react-router-dom"
import MyTable from './Components/MyTable/MyTable';
import SalesChart from './Components/Chart/Chart';
import Home from './Components/Home/Home';
import { accountsData } from './Components/MyTable/sjondata';

function App() {
  return (
    <>
    <div className="App">
      
    </div>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='my-table/' element={<MyTable data={accountsData}/>}></Route>
      <Route path='chart/' element={<SalesChart/>}></Route>
    </Routes>
    </>
  );
}

export default App;
