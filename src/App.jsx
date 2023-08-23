import Card from "./components/Card";
import "./App.css";

function App() {
  const data = {
    persona: {
      nombre: "Julian",
      edad: 28,
      pelicula_favorita: "Forest Gump",
      musica_favorita: "RnB",
    },
    hobbies: ["musica", "ir a la playa", "videojuegos", "peliculas"],
    comida_favorita: [
      "porotos con riendas",
      "cazuela",
      "fideos con salsa",
      "completo o as",
    ],
    mi_stack_tech: ["html", "css", "sass", "react"],
    styles: ["blueviolet", "red", "green", "blue"],
  };

  return (
    <>
      <div className="general_container">
        {/* aquí se renderiza dinamicamente el componente */}
        {Array(4)
          .fill(null)
          .map((card, index) => (
            <Card key={`asdasd ${index}`} index={index} data={data} />
          ))}
        {/* aquí termina la rendereizacion dinamica */}
      </div>
    </>
  );
}

export default App;
