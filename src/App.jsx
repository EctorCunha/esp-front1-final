import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PaginaInicio from './paginas/Inicio.pagina';
import PaginaFavoritos from './paginas/Favoritos.pagina';
import PaginaDetalhe from './paginas/Detalhe.pagina';
import Cabecalho from './componentes/layout/cabecalho.componente';
import store from './state/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cabecalho />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="favoritos" element={<PaginaFavoritos />} />
          <Route path="detalhe" element={<PaginaDetalhe />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
