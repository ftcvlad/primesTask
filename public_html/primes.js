/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function displayPrimesDivideUpToRoot(){//1,000,000 primes (largest 15,485,863), 13.384 seconds without printing
	
	var start = new Date().getTime();
	
	var n = document.getElementById("inField").value;
	var limit; 
	var nextToCheck = 1;
	var allPrimes = [];
	
	outerLoop:
	while(n>0){
		nextToCheck++;
		limit = Math.floor(Math.sqrt(nextToCheck));
		
		for (var i=2; i<=limit;i++){
			if (nextToCheck % i === 0){
				continue outerLoop;
			}
		}
		
		n--;
		allPrimes.push(nextToCheck);
	}
	
	console.log(allPrimes[allPrimes.length-1]);
	console.log("time ms:"+((new Date().getTime())-start));
	
};






