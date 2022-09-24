import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import QueryData from './components/QueryData/QueryData';

function App() {
  /* isReload : amra ai state ta use korse and initial value false kore dise and amra delete handler er moddhe amra ai state ta k ulta vabe set kore dise and amra ai state ta nayoar karon hocche amra database theke data delete kortase kinto amader ui tae theke jacche tai amra ai jei khan theke data delete kortase sheikhane amra data load korar jonne jei fetch kortase ter dependency hisabe isReload state ta k set kore dibo jer fole amader fetch data er jodi change hoy tahole fetch er call-back function ta k abar call kora hbe...amra home route er moddhe props akare amader state ta k pathcchi and home route theke jei data load kortase ter dependency hisabe set kortase... */
  const [isReload, setIsReload] = useState(false);
  const [queryData, setQueryData] = useState([]);
  console.log(queryData);

  /* search query */
  const handleQuerySearch = event => {
    event.preventDefault();
    const querySearch = event.target.queryData.value;
    console.log('hello');

    const url = `http://localhost:5000/products?productName=${querySearch}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setQueryData(data))
  }

  /* handle delete */
  const handleDelete = id => {
    // console.log(id, 'delete');
    const procced = window.confirm('Are You Sure!!');
    if (procced) {
      fetch(`http://localhost:5000/product/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setIsReload(!isReload);
        })
    }

  }

  return (
    <div className="App">
      <Header handleQuerySearch={handleQuerySearch}></Header>
      <Routes>
        <Route path="/" element={<Home handleDelete={handleDelete} isReload={isReload} setIsReload={setIsReload}></Home>}></Route>
        <Route path="/home" element={<Home handleDelete={handleDelete} isReload={isReload} setIsReload={setIsReload}></Home>}></Route>
        <Route path="/add/product" element={<AddProduct></AddProduct>}></Route>
        <Route path='/dataquery' element={<QueryData queryData={queryData} handleDelete={handleDelete} isReload={isReload} setIsReload={setIsReload}></QueryData>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
