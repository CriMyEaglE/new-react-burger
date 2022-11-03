import AppHeader from '../app-header/app-header';
import appStyles from './app.module.css';

function App() {
  return (
    <div className={appStyles.app}>
      <AppHeader />
    </div>
  );
}

export default App;
