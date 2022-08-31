import './App.css';
import data from './doctorsSchedule.json'

function App() {

  const findFreeSlots = () => {
    const fullTime = data.start - data.end;
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
