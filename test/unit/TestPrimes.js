/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


describe("segmented sieve of Eratosthenes correctness", function() {
  
    
    it("Checks if first 10 primes produced by SieveOfEratosthenes are correct", function() {
      
        var arrErato = sieveOfEratosphene(10);
        expect(arrErato).toEqual([2,3,5,7,11,13,17,19,23,29]);
    });
    
  
    it("compares first 1000 primes obtained with simple Root alg. and fast SieveOfEratosthenes", function() {
      
      var arrRoot = displayPrimesDivideUpToRoot(1000);
      var arrErato = sieveOfEratosphene(1000);
      
      expect(arrRoot).toEqual(arrErato);
  });
  
    it("compares 500,000th prime obtained with Root alg and SieveOfEratosthenes", function() {
      
      var arrRoot = displayPrimesDivideUpToRoot(500000);
      var arrErato = sieveOfEratosphene(500000);
      
      expect(arrRoot[arrRoot.length-1]).toEqual(arrErato[arrErato.length-1]);
  });
  
  
  it("checks if N=1 produces correct result", function() {
      
      var arrErato = sieveOfEratosphene(1);
      expect(arrErato).toEqual([2]);
      
  });
  
  //N=0 and non-numeric/non-integer input is irrelevant for the task and is rejected
 
  
  
  
});