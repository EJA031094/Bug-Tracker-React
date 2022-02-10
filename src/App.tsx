import './App.css';
import { AppRoutes } from './services/Routes';
import { MainAppBar } from './components/MainAppBar';

export default function App() {
  return (
    <div>
      <MainAppBar/>
      <div className='app-body'>
        <AppRoutes/>
      </div>
    </div>
  );
}