import  { FC } from 'react';
import './App.css';
import { ReactGaugeChart, SemiDonut } from './components';

export const App: FC = () => {
  return (
    <div className="App">
      <ReactGaugeChart />
      <SemiDonut />
    </div>
  );
}

export default App;
