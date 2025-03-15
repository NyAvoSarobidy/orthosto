import React from "react";
import MyRouter from "./Route/Route";
// import Main from "./pages/Main";



function App() {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_API_URL}/test`)
  //     .then(response => {
  //       setMessage(response.data.message);
  //     })
  //     .catch(error => {
  //       console.error('Erreur lors de la récupération des données:', error);
  //     });
  // }, []);

  return (
    
    <div>    
      
      {/* <Main />         */}
      <MyRouter />  
   </div> 
  );
}

export default App;
