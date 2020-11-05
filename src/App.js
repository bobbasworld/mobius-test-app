import './App.css';

import BomCard from './components/BomCard'

function App() {
  return (
    <div className="App container">
      <div className="logoContainer">
        <img className="logo" src="https://global-uploads.webflow.com/5eb0c63d6ca125e389d2f53e/5f1712798e427625eaa02c74_Screen%20Shot%202020-07-21%20at%2012.04.28%20PM.png"/>
      </div>
      <h3 className="text-center mb-4">Mobius Test App</h3>
      <BomCard/>
    </div>
  );
}

export default App;
