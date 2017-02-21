/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//test algorithm
function displayPrimesDivideUpToRoot(n){
	
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
	
        return allPrimes;
	
};


//actual algorithm
function sieveOfEratosphene(n){
	
        var range= 200000;//must depend on n or MAKE IT NEATER WITHOUT THIS SHIT. no potencial jest
        var start = new Date().getTime();
        
        
        //find all primes in range
	var foundPrimes = [];
	var allNumbers = [];
       
	for (i=2;i<(2+range);i++){
		allNumbers.push(i);
	}
	
	var currNewPrimeIndex = 0;
	var nextIndex;
	
	searchInFirstRange:
	while(true){
		while(allNumbers[currNewPrimeIndex]===0){
			currNewPrimeIndex++;
			if (currNewPrimeIndex===allNumbers.length){
				break searchInFirstRange;
			}
		}
                
		foundPrimes.push(allNumbers[currNewPrimeIndex]);
                if (foundPrimes.length===n){
                    console.log(foundPrimes[foundPrimes.length-1]);
                    console.log("time ms:"+(( new Date().getTime())-start));
                    return foundPrimes;
                }
                
                
                //if k is next prime, start crossing out with k*k ([k+k ... k*k-k] already crossed out)
                nextIndex = currNewPrimeIndex+Math.pow(allNumbers[currNewPrimeIndex],2)-allNumbers[currNewPrimeIndex];
		while (nextIndex<allNumbers.length){
			allNumbers[nextIndex]=0;
			nextIndex+=allNumbers[currNewPrimeIndex];	
		}
		allNumbers[currNewPrimeIndex] =0;
                
                
	}
        
        
        //if in the first range not enough primes, take next range. Use primes that are already found to cross out
        //numbers in the next range
        var min;
	var max = 2+range;//[min, max)

	var nextRangeNumbers = [];
	
	
	while (true){
		min=max;
		max= min+range;
		
		var ind = 0;
		for (var i=min;i<max;i++){
			nextRangeNumbers[ind] = i;
			ind++;
		}
		
                
                var primeLimit = Math.floor(Math.sqrt(max-1));
                
		for (var j=0;j<foundPrimes.length;j++){
                        if (foundPrimes[j]>primeLimit){
                            break;
                        }
                    
			var nextInd = Math.ceil(min/foundPrimes[j])*foundPrimes[j]- min;
			while(nextInd<range){
				nextRangeNumbers[nextInd] =0;
				nextInd+=foundPrimes[j];
			}
		}
		
		for (j=0;j<nextRangeNumbers.length;j++){
			if (nextRangeNumbers[j]!==0){
				foundPrimes.push(nextRangeNumbers[j]);

				if (foundPrimes.length ===n){
				
                                        console.log(foundPrimes[foundPrimes.length-1]);
                                        console.log("time ms:"+(( new Date().getTime())-start));
					return foundPrimes;
				}
			}
		}
		
		
		
	}
	    
}


function displayPrimesSieveErato(){

        var nStr = document.getElementById("inField2").value;

	if ((nStr).match(/^[1-9]\d*(\d+)?$/)){//integer not starting with 0
            var n = parseInt(nStr);
            var primesToDisplay = sieveOfEratosphene( n);
        }
        else{
            alert("wrong input");
        }

        

}


