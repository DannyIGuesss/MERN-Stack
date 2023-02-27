import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AuthorList from './components/authorList';
import Nav from './components/nav';
import AuthorForm from './components/authorForm';
import AuthorEdit from './components/authorEdit';
import {useState} from 'react'


function App() {

  const [allAuthors, setAllAuthors] = useState([])

  return (
    <div className='container'>
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthorList allAuthors = {allAuthors} setAllAuthors ={setAllAuthors} />}/>
          <Route path="/createAuthor" element={<AuthorForm allAuthors = {allAuthors} setAllAuthors ={setAllAuthors}/>}/>
          <Route path="/editAuthor/:id" element={<AuthorEdit allAuthors = {allAuthors} setAllAuthors ={setAllAuthors}/> }/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
