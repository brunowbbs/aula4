function App() {

  const nome = 'Wesley'

  function abrirAlert(){
    alert('Hello World')
  }

  return (
    <div style={{background:'#c1c1c1'}}>
      <h1>Hello World</h1>
      <h2>Nome: {nome}</h2>
      <p>Meu primeiro parágrafo</p>

      <button onClick={abrirAlert}>Aperte</button>

      <ul>
        <li>Aluno 1</li>
        <li>Aluno 2</li>
        <li>Aluno 3</li>
      </ul>

      <form>
        <input placeholder="Digite o e-mail"/>
      </form>

      <img src="https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png"/>
    </div>
  );
}

//FRAGMENTO

export default App