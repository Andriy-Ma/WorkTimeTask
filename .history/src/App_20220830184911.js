import './App.css';
import data from './doctorsSchedule.json'

function App() {

  const findFreeSlots = () => {
    const fullTime = data.end.split(':')[0] - data.start.split(':')[0];
    console.log(fullTime);
    console.log(data);
  }

  findFreeSlots();

  return (
    <div >
     лол
    </div>
  );
}

export default App;
