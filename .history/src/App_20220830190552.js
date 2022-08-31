import './App.css';
import data from './doctorsSchedule.json'

function App() {

  const findFreeSlots = () => {
    const startHour = data.start.split(':')[0];
    const endHour = data.end.split(':')[0];
    const fullTime = data.end.split(':')[0] - data.start.split(':')[0];
    let arrayOfSlots = [];
    console.log(Math.ceil((fullTime * 60 / 45)));
    console.log(data);
    for(let i = 0 ; i < Math.ceil((fullTime * 60 / 45)) ; i++){
      arrayOfSlots.push(`${data.start.split(':')[0]}:${+data.start.split(':')[1] + 45}`);
    }
    console.log(arrayOfSlots);
  }

  findFreeSlots();

  return (
    <div >
     лол
    </div>
  );
}

export default App;
