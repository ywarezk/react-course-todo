import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login/Login';
import { TodoList } from './components/Todo/Todo';
import { Header } from './components/Header/Header';

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

            <Login />

            <TodoList />
        </div>
    );
}

export default App;
