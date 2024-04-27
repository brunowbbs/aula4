import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"

import "./styles.css"

function App(){
  return(
    <main className="container">
      <header className="header">
        <h1>FF Infnet</h1>

        <nav>
          <ul style={{display:'flex', listStyle:'none', gap:20}}>
            <li >Home</li>
            <li>Contato</li>
            <li>Quem somos</li>
          </ul>
        </nav>
      </header>

      <h2 style={{textAlign:'center'}}>Fast-Food Infnet</h2>

      <section>

        <ul style={{listStyle:'none', display:'flex', justifyContent:'space-between', flexWrap:'wrap' }}>
          <li style={{marginBottom:10}}>
            <div style={{background:'#d1d1d1', padding:50, width:250, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <img src={img1} width={120} height={100}/>
              <h4>Feijoada</h4>
              <p>Prato principal</p>
            </div>
          </li>

          <li>
            <div style={{background:'#d1d1d1', padding:50, width:250, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <img src={img2} width={120} height={100}/>
              <h4>Camarão</h4>
              <p>Frutos do mar</p>
            </div>
          </li>

          <li>
            <div style={{background:'#d1d1d1', padding:50, width:250, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <img src={img1} width={120} height={100}/>
              <h4>Coxinha</h4>
              <p>salgadinho</p>
            </div>
          </li>

          <li>
            <div style={{background:'#d1d1d1', padding:50, width:250, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <img src={img1} width={120} height={100}/>
              <h4>Torta de Limão</h4>
              <p>Sobremesa</p>
            </div>
          </li>

          <li>
            <div style={{background:'#d1d1d1', padding:50, width:250, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <img src={img1} width={120} height={100}/>
              <h4>Coca Cola</h4>
              <p>Bebida</p>
            </div>
          </li>

          
        </ul>
      </section>

      <footer style={{background:'#ED1B2E', color:'#fff', padding:'50px 0'}}>
        <p style={{textAlign:'center'}}>Todos os direitos reservados - 2024</p>
      </footer>
    </main>
  )
}

export default App