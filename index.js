// code your solution here
function saturdayFun(activity= "roller-skate ") {
    console.log(`This Saturday, I want to ${activity}`);
    
}

function mondayWork(work="go to the office") {
    console.log(`This Monday, I will ${work}`);

}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return "You are " + flair + adjective + flair + "!";
    };
}
