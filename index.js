function saturdayFun(activityDefault = "roller-skate") {
  return `This Saturday, I want to ${activityDefault}!`;
}
console.log(saturdayFun());

function mondayWork(mondayDefault = "go to the office") {
  return `This Monday, I will ${mondayDefault}.`;
}
console.log(mondayWork());

function wrapAdjective(flair = "*") {
  const innerFunction = function (adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
  return innerFunction;
}
console.log(wrapAdjective()());