import React, { useEffect, useState } from 'react'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
   const { id } = useParams();
   const [dentist, setDentist] = useState(null);

   useEffect(() => {
    axios.get('http://localhost:5173/dentist/${id}')
       .then(response => setDentist(response.data))
       .catch(error => console.error('Error fetching data: ', error));
   }, [id]);

  return (
    dentist ? (
      <div>
        <h1>{dentist.name}</h1>
        <p>Email: {dentist.email}</p>
        <p>Telefono: {dentist.phone}</p>
        <p>Sitio web: <a href={dentist.website}>{dentist.website}</a></p>
      </div>

    ) : (
      <p>Loading...</p>
    )
  );
   
};

export default Detail;