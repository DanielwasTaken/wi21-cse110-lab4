for(let a in statistics){
    if(a.charAt(0) == 'r' || statistics[a]%2 == 1){
        console.log(statistics[a]);
    }
}