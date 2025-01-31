import './App.css';
import { Registration } from './components/Registration/Registration.tsx';
import { Navigate, Route, Routes } from 'react-router';
import { Login } from './components/Login/Login.tsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default App;
