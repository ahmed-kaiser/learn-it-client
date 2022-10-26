import Routes from './routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Routes />
      <Toaster position="top-center" />
    </>
  );
}

export default App;
