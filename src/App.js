import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login/Login';
// import { TodoList } from './components/Todo/Todo';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const LazyTodoList = lazy(async () => {
    const {TodoList} = await import('./components/Todo/Todo');
    return {default: TodoList}
})

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

            <Suspense fallback={<h1>Loading todo list</h1>}>

            
                <Routes>
                    <Route path="/" element={ <Login /> } />
                    <Route path="/todo" element={ <LazyTodoList /> } />
                </Routes>
            
            </Suspense>
        </div>
    );
}

export default App;
