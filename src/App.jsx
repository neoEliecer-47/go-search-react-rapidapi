import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Router } from "./components/Router";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()
  /*const Real_Madrid = {
    historia: [{creacion: ""}, {inicios: ""}, {primeros_titulos: ""}],
    datos:{
      titulos_locales: {},
      titulos_internacionales:{},
      grandes_jugadores_por_año:{
        1960:{
          diStefano: "jugador mitico ganador de 5 copas de europa y el super balon de oro",
          paco_gento: "unico jugador en la historia en ganar 6 copas de europa pero ya veremos..."
        },
        2010: {
          cristiano_ronaldo: "maximo goleador historico del club y ademas 5 balones de oro, 5 champions y 4 en 5 años",
          marcelo: "jugador con mas titulos en la historia del club, tambien 5 copas de europa"
        }
      }
    }
  }*/
  //const año = "2010"
  //const leyendas = Real_Madrid.datos.grandes_jugadores_por_año[año].cristiano_ronaldo
  //console.log(leyendas)
  //const prop = Object.keys(Real_Madrid.datos.grandes_jugadores_por_año)[1]
  ///console.log(prop)

  useEffect(() => {
    if( location.pathname !== "/search" || "/images") navigate("/search")
  }, [location.pathname])

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 min-h-screen">
        
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        
        <main>
          <Outlet />{" "}
          {/*donde se posicionan los componentes en las rutas llamadas en la url */}{/*lo que tengan en el body cada componente es lo que se rendiriza */}
        </main>
        
          <Footer />
        
      </div>
    </div>
  );
};

export default App;
