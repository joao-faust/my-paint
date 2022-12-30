import Canvas from './components/Canvas';
import ToolBar from './components/Toolbar';

const App = (): JSX.Element => {
  return (
    <div className="app">
      <ToolBar />
      <Canvas />
    </div>
  );
};

export default App;
