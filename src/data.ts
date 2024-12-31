
// typescript program to check number or flaot


function check(n:number){
    if(!isNaN(n)){
        if(Number.isInteger(n)){
            console.log(`${n} is an integer`)
        }else{
            console.log(`${n} is a float value`)
        }
    }
}


check(12.4)