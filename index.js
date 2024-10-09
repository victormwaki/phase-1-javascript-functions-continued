
// Function to describe Saturday activity
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Function to describe Monday work
function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`;
}

// Function that wraps an adjective with a flair
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

// Example usages:

// Using saturdayFun
console.log(saturdayFun());                  // Output: "This Saturday, I want to roller-skate!"
console.log(saturdayFun("go hiking"));       // Output: "This Saturday, I want to go hiking!"

// Using mondayWork
console.log(mondayWork());                   // Output: "This Monday, I will go to the office."
console.log(mondayWork("work from home"));   // Output: "This Monday, I will work from home."

// Using wrapAdjective
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); // Output: "You are !!!a dedicated programmer!!!"

const simpleEncouragement = wrapAdjective("%");
console.log(simpleEncouragement("awesome")); // Output: "You are %awesome%!"
