// Your code here

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
    return(`This Monday, I will ${activity}.`);
  }

function wrapAdjective(string="*"){
    return function(arg="special") {
        return `You are ${string}${arg}${string}!`
    }
}

const Calculator = {
    add: function(x,y){
        return x+y
    },
    subtract: function(x,y){
        return x-y
    },
    multiply: function(x,y){
        return x*y
    },
    divide: function(x,y){
        return x/y
    }
}

function actionApplyer(integer, array){
    let a = integer

  for (let i = 0; i < array.length; i++ ){
    a = array[i](a)
  }

  return a
}