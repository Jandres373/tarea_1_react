import "../Card.css";

const Card = ({ index, data }) => {
  return (
    <>
      <div
        key={"app_card_container"}
        className="app_card_container"
        style={{ backgroundColor: `${data.styles[index]}` }}
      >
        <h1>{index === 0 ? " " : Object.keys(data)[index]}</h1>
        <p>
          {" "}
          <strong>{index === 0 && Object.keys(data)[0] + ":"}</strong>{" "}
          {(index === 0 && data.persona.nombre) ||
            (index === 1 && data.hobbies[0]) ||
            (index === 2 && data.comida_favorita[0]) ||
            (index === 3 && data.mi_stack_tech[0])}{" "}
        </p>
        <p>
          {" "}
          <strong>{index === 0 && Object.keys(data)[1] + ":"}</strong>{" "}
          {(index === 0 && data.persona.edad) ||
            (index === 1 && data.hobbies[1]) ||
            (index === 2 && data.comida_favorita[1]) ||
            (index === 3 && data.mi_stack_tech[1])}{" "}
        </p>
        <p>
          {" "}
          <strong>{index === 0 && Object.keys(data)[2] + ":"}</strong>{" "}
          {(index === 0 && data.persona.pelicula_favorita) ||
            (index === 1 && data.hobbies[2]) ||
            (index === 2 && data.comida_favorita[2]) ||
            (index === 3 && data.mi_stack_tech[2])}{" "}
        </p>
        <p>
          {" "}
          <strong>{index === 0 && Object.keys(data)[3] + ":"}</strong>{" "}
          {(index === 0 && data.persona.musica_favorita) ||
            (index === 1 && data.hobbies[3]) ||
            (index === 2 && data.comida_favorita[3]) ||
            (index === 3 && data.mi_stack_tech[3])}{" "}
        </p>
      </div>
    </>
  );
};

export default Card;
