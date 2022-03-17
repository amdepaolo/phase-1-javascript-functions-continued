// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
};

const mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
};

function wrapAdjective(flair = "*"){
    const cluelessStudent = function(niceWords = "special"){
        return `You are ${flair}${niceWords}${flair}!`
    }
    return cluelessStudent
}