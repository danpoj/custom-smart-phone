import Card from './components/Card';
import Iphone12proCanvas from './components/phones/apple/Iphone12proCanvas';
import Iphone14Canvas from './components/phones/apple/Iphone14Canvas';
import GalaxyS21UltraCanvas from './components/phones/galaxy/GalaxyS21UltraCanvas';
import GalaxyS8UltraCanvas from './components/phones/galaxy/GalaxyS8UltraCanvas';

function App() {
  return (
    <div className='flex h-screen items-center justify-center gap-8 '>
      <Card text='Apple' />
      <Card text='Galaxy' />
    </div>
  );
}

export default App;
