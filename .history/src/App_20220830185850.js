import './App.css';
import data from './doctorsSchedule.json'

function App() {

  const findFreeSlots = () => {
    const startHour = data.start.split(':')[0];
    const endHour = data.end.split(':')[0];
    const fullTime = data.end.split(':')[0] - data.start.split(':')[0];
    let arrayOfSlots = [];
    console.log(((fullTime * 60 / 45) + 1));
    console.log(data);
    for(let i = 0 ; i < ((fullTime * 60 / 45) + 1) ; i++){
      arrayOfSlots.push(  )
    }
  }

  findFreeSlots();

  return (
    <div >
     лол
    </div>
  );
}

export default App;
