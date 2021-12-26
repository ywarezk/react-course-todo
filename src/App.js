import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login/Login';
import { TodoList } from './components/Todo/Todo';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
    const user = {
        firstName: 'Yariv', 
        lastName: 'Katz', 
        email: 'yariv@nerdeez.com'
    }

    return (
        <div className="App">
            <Header user={user} />
            <Header />

            <Routes>
                <Route path="/" element={ <Login /> } />
                <Route path="/todo" element={ <TodoList /> } />
            </Routes>
        </div>
    );
}

export default App;
