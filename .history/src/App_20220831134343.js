import './App.css';
import data from './doctorsSchedule.json'

function App() {

  const findFreeSlots = () => {

    const fullTime = data.end.split(':')[0] - data.start.split(':')[0];
    let arrayOfSlots = [data.start];
    let hours = +data.start.split(':')[0];
    let minutes = +data.start.split(':')[1];

    const arrayAppointments = data.appointments.map(time => time.start);

    for(let i = 0 ; i < Math.floor((fullTime * 60 / 45)) ; i++){
      minutes += 45;
      if(minutes > 60){
        minutes -= 60;
        hours += 1
        arrayOfSlots.push(`${hours}:${minutes}`);
      } else if (minutes === 60){
        arrayOfSlots.push(`${hours + 1}:00`);
      } else {
        arrayOfSlots.push(`${hours}:${minutes}`);
      }
    }

    
    let arrayOfFreeSlots = arrayAppointments.map(item => {
      const startDuration = item;

      let freeSlots = arrayOfSlots.filter(elem => elem.split(':')[0] === startDuration.split(':')[0] && +elem.split(':')[1] <= +startDuration.split(':')[1]);
      
      return freeSlots;
    });

    arrayOfFreeSlots = arrayOfFreeSlots.map(elem => {
      let array = arrayOfSlots.filter(item => item !== elem[1]);
      return array;
    })


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
