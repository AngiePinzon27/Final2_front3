import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const addFav = (odontologo)=>{
    let favs = JSON.parse(localStorage.getItem('favs')) || [];
    favs.push(odontologo);
    localStorage.setItem('favs', JSON.stringify(favs));
  };

  return (
    <div className="card">
        <h2>{odontologo.name}</h2>
        <p>{odontologo.username}</p>

        <Link to={'/odontologo/${odontologo.id}'}>View Details</Link>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
