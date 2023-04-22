import './App.css';
import ConverterRealParaDolar from './components/ConverterRealParaDolar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <header></header>
        <div className="container">
          <div className="caixa">
            <h1>Conversor de real para dólar</h1>

            <form>
              <div className="input">
                <label>Digite o valor em real que deseja converter:</label>
                <input type="number" id="valorEmReal" required />
              </div>
            </form>

            <ConverterRealParaDolar />
          </div>

          <div className="historico">
            <h1>Histórico</h1>
            <div className="resultados">

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
