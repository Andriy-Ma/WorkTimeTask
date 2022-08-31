import './App.css';
import data from './doctorsSchedule.json'

function App() {

  const findFreeSlots = () => {
    const fullTime = data.end.split(':')[0] - data.start.split(':')[0];
    let arrayOfSlots = [];
    let hours = +data.start.split(':')[0];
    let minutes = +data.start.split(':')[1];
    for(let i = 0 ; i < Math.ceil((fullTime * 60 / 45)) ; i++){
      minutes = minutes + 45;
      if(minutes > 60){
        minutes = minutes - 60;
        hours = hours + 1
        arrayOfSlots = [`${hours}:${minutes}`];
      }  
      console.log(arrayOfSlots);
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
