import './App.css';
import { AppRoutes } from './App.routes';
import { MainAppBar } from './components/MainAppBar';

function App() {
  return (
    <div>
      <MainAppBar/>
      <div className='app-body'>
        <AppRoutes/>
      </div>
    </div>
  );
}

export default App;
