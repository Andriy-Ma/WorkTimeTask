import './App.css';
import data from './doctorsSchedule.json'

function App() {

  const findFreeSlots = () => {

    const fullTime = data.end.split(':')[0] - data.start.split(':')[0];
    let arrayOfSlots = [data.start];
    let hours = +data.start.split(':')[0];
    let minutes = +data.start.split(':')[1];
    let arrayOfFreeSlots = [];

    const arrayAppointments = data.appointments.map(time => {
      let array = [time.start];
      let secondDataMinutes = +time.start.split(':')[1];
      let secondDataHours = +time.start.split(':')[0];
      secondDataMinutes += time.duration 
      if(secondDataMinutes > 60){
        secondDataMinutes = secondDataMinutes - 60;
        secondDataHours += 1
        array.push(`${secondDataHours}:${secondDataMinutes}`);
      } else {
        array.push(`${secondDataHours}:${secondDataMinutes}`);
      }
      return array;
    });

    for(let i = 0 ; i < Math.floor((fullTime * 60 / 45)) ; i++){
      minutes = minutes + 45;
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
    arrayAppointments.map(item => {
      const startDuration = item[0];
      const endDuration = item[1];
      arrayOfSlots.map(elem => {
        if((elem.split(':')[0] === startDuration.split(':')[0] && +endDuration.split(':')[0] >= +elem.split(':')[0] && +elem.split(':')[1] <= +startDuration.split(':')[1])){
          arrayOfFreeSlots.push(elem);
        }
      })
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
