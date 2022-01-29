import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { MainAppBar } from './components/MainAppBar';

function App() {
  return (
    <div className='App'>
      <MainAppBar/>
      <body className='app-body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </body>
    </div>
  );
}

function Home() {
  return (
    <div className='column-display'>
      <h1>Homepage</h1>
    </div>
  );
}

function LoginPage() {
  return (
    <div className='column-display'>
      <h1>Login Page</h1>
      <LoginForm/>
    </div>
  );
}

function About() {
  return <h1>About Page</h1>
}

export default App;
