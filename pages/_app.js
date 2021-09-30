import '../styles/globals.css';
import Layouts from '../components/Layouts';
import { DataProvider } from '../store/GlobalState';
function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </DataProvider>
  );
}

export default MyApp;
