import React from 'react'
import MainTittle from './Components/MainTittle/MainTittle'
import ItemCount from './Components/ItemCount/ItemCount'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './ItemListContainer/ItemListContainer'


const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos"}/>
    <MainTittle/>
    <ItemCount/>
    </>
  )
}

export default App
