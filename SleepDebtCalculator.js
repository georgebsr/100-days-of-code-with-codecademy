function getSleepHours(day) {
  switch(day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 8;
    case 'wednesday':
      return 7;
    case 'thursday':
      return 8;
    case 'friday':
      return 6;
    case 'saturday':
      return 8;
    case 'sunday':
      return 8;
    default:
      return 0;
  }
}

//console.log(getSleepHours('friday')); //test

const getActualSleepHours = () => 
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

//console.log(getActualSleepHours('friday')); //Test
//console.log(getIdealSleepHours()); //Test

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('More sleep than needed acquired. You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more.');
  } else {
    console.log('You should get more sleep. You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less.');
  }
}

calculateSleepDebt();
