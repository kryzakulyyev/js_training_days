 
const random = Math.floor(Math.random()*3)    // Create random number

const getRandEvent = () => {
   // return 'Marathon' or 'Triathlon' or 'Pentathlon' randomly;
  if (random==0){
    return 'Marathon';
  }else if (random==1){
    return 'Triathlon';
  }else if (random==2){
    return 'Pentathlon';
  }
};
getRandEvent(random);
// console.log(getRandEvent(1));
// The scope of `days` is too tight 



const getTrainingDays = (condition) => {
  let days;
  if(condition==='Marathon'){
    days=50
  }else if(condition==='Triathlon'){
    days=75
  }else if(condition==='Pentathlon'){
    days=100
  }

// decide the day according to the condition, write a conditional;
return days;
};
//  console.log(getTrainingDays("Marathon"))

let name = 'Nala';
const logEvent = (name, condition) => {
  
  console.log(`${name}'s condition is: ${condition}`);
};

const logTime = (name, days) => {
  
  console.log(`${name}'s time to train is: ${days} days`);
};

const condition = getRandEvent();

const days = getTrainingDays(condition);


logEvent(name, condition);
logTime(name, days);

const condition2 = getRandEvent();
const days2 = getTrainingDays(condition2);
const name2 = 'Warren';
logEvent(name2, condition2);
logTime(name2, days2);

