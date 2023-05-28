function Evento({ numero }) {
  function meuEvento() {
    console.log(`Opa, fui ativado! ${numero}`);
  }

  return (
    <div className="">
      <p>Clique abaixo para disparar um evento:</p>
      <button onClick={meuEvento}>Ativar</button>
    </div>
  );
}

export default Evento;
