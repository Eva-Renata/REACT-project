import './App.scss';
import { Header } from './components/partials/Header/Header'
import { Main } from './components/partials/Main/Main'
import { Footer } from './components/partials/Footer/Footer'
import { Nav } from './components/partials/Nav/Nav'

function App() {
  const navlinks = ['Forside','Produkter','Om os','Ledige stillinger','Kontakt os']

  return (
    <div className="main-container">
      <Header title="Building the first React App"/>
      <Nav  data ={navlinks}/>
      <Main />
      <Footer data = {navlinks} />
    </div>
  );
}

export default App;
