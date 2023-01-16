import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard 
        firstName = {'Doe'}
        lastName = {'Jane'}
        age = {'45'}
        hair = {'Black'}
      />

      <PersonCard 
        firstName = {'Smith'}
        lastName = {'John'}
        age = {'88'}
        hair = {'Brown'}
      />

      <PersonCard 
        firstName = {'Fillmore'}
        lastName = {'Millard'}
        age = {'50'}
        hair = {'Brown'}
      />

      <PersonCard 
        firstName = {'Smith'}
        lastName = {'Maria'}
        age = {'62'}
        hair = {'Brown'}
      />
    </div>
    
  );
}

export default App;
