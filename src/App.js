import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import React, {useEffect, useState} from 'react'

function App() {

  const [stores, setStores] = useState([])

  const [searchText, setSearchText] = useState('')



  useEffect(() => {
    fetch('http://localhost:8085/stores')
    .then(res => res.json())
    .then(data => {setStores(data)})  
  },[])

  function postStore(newStore) {

    fetch('http://localhost:8085/stores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newStore)})
      .then(res=>res.json())
      .then(data=> setStores([...stores, data]))
    
  }
  
  const filteredStores = stores.filter(store => {
    if(searchText === '') {
      return true
    }
    return store.name.toLowerCase().includes(searchText)
    }
  )

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search searchText={searchText} setSearchText={setSearchText}/>
      <NewStoreForm postStore={postStore} />
      <StoreList stores={filteredStores}/>
    </div>
  );
}

export default App;
