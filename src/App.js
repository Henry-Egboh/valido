// import Desserts from './Components/Desserts';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home';

function App () {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      {/* <Desserts myList={desserts} /> */}
    </div>
  );
}

export default App;
