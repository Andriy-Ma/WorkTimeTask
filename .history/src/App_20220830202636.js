import './App.css';
import data from './doctorsSchedule.json'

function App() {

  const findFreeSlots = () => {

    const fullTime = data.end.split(':')[0] - data.start.split(':')[0];
    const arrayAppointments = data.appointments.map(time => time.start);
    let arrayOfSlots = [data.start];
    let hours = +data.start.split(':')[0];
    let minutes = +data.start.split(':')[1];
    let arrayOfFreeSlots = [];

    for(let i = 0 ; i < Math.floor((fullTime * 60 / 45)) ; i++){
      minutes = minutes + 45;
      if(minutes > 60){
        minutes = minutes - 60;
        hours = hours + 1
        arrayOfSlots.push(`${hours}:${minutes}`);
      } else if (minutes === 60){
        arrayOfSlots.push(`${hours + 1}:00`);
      } else {
        arrayOfSlots.push(`${hours}:${minutes}`);
      }
    }

    /*for(let i = 0 ; i < arrayOfSlots.length ; i++){
      arrayAppointments.map(elem => {
        if(!(elem.split(':')[0] === arrayOfSlots[i].split(':')[0])){
          arrayOfFreeSlots.push(arrayOfSlots[i])
        }
      })
    }*/

     for(let i = 0 ; i < arrayOfSlots.length ; i++){
      const lol = arrayAppointments[i];
      if (arrayOfSlots[i].split(':')[0] === lol.split(':')[0] && arrayOfSlots[i].split(':')[1] <= lol.split(':')[1]){
        arrayOfFreeSlots.push(arrayOfSlots[i])
      }
    }

    console.log(arrayOfSlots);
    console.log(arrayOfFreeSlots);
    console.log(arrayAppointments);
  }

  findFreeSlots();

  return (
    <div >
     лол
    </div>
  );
}

export default App;
