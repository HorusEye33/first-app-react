import React, { Component } from 'react';

import Header from "./components/header";
//Importar todo de Dish
//Esta nomenclatura se utiliza cuando vamos a importar varios componentes de un mismo archivo
//import Dish, * as D from "./components/dish";
//Esta nomenclatura se utiliza si queremos importar de manera nombrada componente por componente
import Dish, {Flag, Ingredient} from "./components/dish";


import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Dish />
      {/* Utilizamos la etiqueta D para importar este componente */}
      {/* <D.Flag /> */}
      <Flag />
    </div>
  );
}

export default App;
