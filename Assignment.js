// feet to mile converter

function feetToMile(feet){
    var mile = 0;
        mile = feet / 5280;
        if(mile < 0){
            mile= mile * -1;
        }
        return mile;
}

var feet = -60000;

var result = feetToMile(feet);


console.log("the mile will be:", result);


// woodCalculator 

function woodCalculator(chair, table, bed){
    var totalChairWood = chair * 1;
    var totalTableWood= table * 3;
    var totalbedWood = bed * 5;
    var totalWoodNeed = totalChairWood + totalTableWood + totalbedWood;
        return totalWoodNeed;
}


var chair = 50;
var table = 3;
var bed = 12;

var totalWood = woodCalculator(chair, table, bed);

console.log("total wood need: " ,totalWood,"Cubic Feet");



// Brick calculator 

function brickCalculator(storey){
    var brickPerFeet = 1000;
    var brickNeed = 0;

    if(storey <= 10){
        brickNeed = 15 * brickPerFeet * storey;
    }else if(storey <= 20){
        brickNeed = 15 * brickPerFeet * 10;
        brickNeed = brickNeed + (12 * brickPerFeet * (storey-10));
    }else if(storey > 20){
        brickNeed = 15 * brickPerFeet * 10;
        brickNeed = brickNeed + (12 * brickPerFeet * 10 );
        brickNeed = brickNeed + (10 * brickPerFeet * (storey-20));

    }
    return brickNeed;
    
}
    

var storey = 28;
var result  = brickCalculator(storey);
console.log(result);


// tinyFriend 

function tinyFriend(name){
    var shortest = name.reduce(function(a, b) {
        var short = a.length <= b.length ? a : b;   
        return short;  
        })
        return shortest;
}

var name = ["super", "bat", "flash", "wander", "Green", "aqua", "captain" ];
console.log(tinyFriend(name));

