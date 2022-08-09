import './App.css';
import { Header } from './components'
import { Bio } from './components'
import { Education } from './components'
import { Expierence } from './components'
import { Skill } from './components'
import { Language } from './components'
import { Footer } from './components'
import 'tw-elements';

function App() {
  return (
<div class='bg-slate-100/75'>
      <Header></Header>
      <Bio></Bio>
      <Skill></Skill>
      <Expierence></Expierence>
      <Education></Education>
      <Language></Language>
      <Footer></Footer>
      </div>
  );
}
export default App;
