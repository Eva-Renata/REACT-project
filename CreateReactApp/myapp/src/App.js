import './App.scss';
import { Header } from './components/partials/Header/Header'
import { Main } from './components/partials/Main/Main'
import { Footer } from './components/partials/Footer/Footer'
import { Nav } from './components/partials/Nav/Nav'
import {navigation} from './components/partials/Nav/Nav'
import {footernavigation} from './components/partials/Footer/Footer'

function App() {
  return (
    <div className="main-container">
      <Header title="Building the first React App"/>
      <Nav  data ={navigation}/>
      <Main />
      <Footer data = {footernavigation} />
    </div>
  );
}

export default App;
