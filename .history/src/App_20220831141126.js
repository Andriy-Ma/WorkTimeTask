import './App.css';
import data from './doctorsSchedule.json'

function App() {
  
  const findFreeSlots = () => {

    const fullTime = data.end.split(':')[0] - data.start.split(':')[0];
    let arrayOfFreeSlots = [data.start];
    let hours = +data.start.split(':')[0];
    let minutes = +data.start.split(':')[1];

    const arrayAppointments = data.appointments.map(time => {
      let array = [time.start];
      let secondDataMinutes = +time.start.split(':')[1];
      let secondDataHours = +time.start.split(':')[0];
      secondDataMinutes += time.duration 
      if(secondDataMinutes > 60){
        secondDataMinutes -= 60;
        secondDataHours += 1
        array.push(`${secondDataHours}:${secondDataMinutes}`);
      } else {
        array.push(`${secondDataHours}:${secondDataMinutes}`);
      }
      return array;
    });

    for(let i = 0 ; i < Math.floor((fullTime * 60 / 45)) ; i++){
      minutes += 45;
      if(minutes > 60){
        minutes -= 60;
        hours += 1
        arrayOfFreeSlots.push(`${hours}:${minutes}`);
      } else if (minutes === 60){
        arrayOfFreeSlots.push(`${hours + 1}:00`);
      } else {
        arrayOfFreeSlots.push(`${hours}:${minutes}`);
      }
    }
    
      arrayAppointments.forEach(item => {
      const startDuration = item[0];

      let freeSlots = arrayOfFreeSlots.filter(elem => elem.split(':')[0] === startDuration.split(':')[0] && +elem.split(':')[1] <= +startDuration.split(':')[1]);
      arrayOfFreeSlots = arrayOfFreeSlots.filter((item,i) => item !== freeSlots[1]);
    });

    console.log(arrayOfFreeSlots);

    return arrayOfFreeSlots;
  }

  findFreeSlots();

  return (
    <div >
     {findFreeSlots().map(elem => {
        return (
          <div key={elem}>
            {elem}
          </div>
        )
     })}
    </div>
  );
}

export default App;
