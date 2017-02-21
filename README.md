# How to run

All required files/libraries are in the repository. Double clicking index.html should suffice.


In order to run unit tests configure a test server (different for different IDEs) and set jsTestDriver.conf file as a configuration file

# What have I done
1) A simple algorithm dividing all numbers up until sqrt(i) until n primes found. 
	Used to test correctness of other algorithms (and compare speed) 


2) Sieve of Eratosthenes. One could estimate the range which contains nth prime using  p(n) < n*(log n + log (log n)), where p(n) is an nth prime.
	Then one could do a sieve over that range. However:
	a) This proved to be slower than the current algorithm 	(probably because estimate is only approximate,
		and the algorithm ends up crossing out numbers beyond the nth prime)
	b) It requires more memory to store all numbers being sieved.

3) Segmented sieve of Eratosthenes (the final solution). The algorithm has 2 stages:
	a) find all primes in a certain range (50000)
	b) use these primes to cross out numbers in next ranges of the same size
	
	A few adjustments make it more efficient:
	a) When doing sieve if a prime i is found, next i's multiple to check is i*i (i*2..i*(i-1) have already been crossed out)
	b) In the 2nd part of the algorithm, when we are crossing out multiples of primes in some range, it is only worth to try 
	(obtained) primes up until square root of the largest number in the range.

This proved to be the fastest algorithm I have done. On my PC it can find 2 million primes in 4 seconds (1st alg needs 135 seconds)	
# What would I do if I had more time

1) There is a bunch of algorithms that exploit properties of primes other than divisibility. 
2) I could optimise my algorithm (????)
3) I could study and employ one of the more performant algorithms such as Sieve of Atkin 
	(one of the libraries I have seen can generate 1 billion of primes in 8 seconds on Pentium 2, so, there is certainly room for improvement)
 
	
	
	
	