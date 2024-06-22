import React, { useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [favs, setFavs] = useState([]);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        
       const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
       setFavs(storedFavs);
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
