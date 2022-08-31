import './App.css';
import data from './doctorsSchedule.json'

function App() {

  const findFreeSlots = () => {
    const fullTime = data.end.split(':')[0] - data.start.split(':')[0];
    let arrayOfSlots = [];
    console.log(Math.ceil((fullTime * 60 / 45)));
    console.log(data);
    for(let i = 0 ; i < Math.ceil((fullTime * 60 / 45)) ; i++){
      let hours = +data.start.split(':')[0];
      let minutes = data.start.split(':')[1];
      if(minutes > 60){
        minutes = minutes - 60;
        hours = hours + 1
        arrayOfSlots.push(`${hours}:${minutes}`);
      }  
      console.log(minutes);
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
