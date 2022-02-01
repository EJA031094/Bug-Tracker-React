import './App.css';
import { AppRoutes } from './AppRoutes';
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
