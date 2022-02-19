import './App.css';
import { AppRoutes } from './services/Routes';
import { MainAppBar } from './components/MainAppBar';
import { UserProvider } from './services/UserProvider';

export default function App() {

    return (
        <UserProvider>
            <div>
                <MainAppBar/>
                <div className='app-body'>
                    <AppRoutes/>
                </div>
            </div>
        </UserProvider>
    );
}