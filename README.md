# How to run

All required files/libraries are in the repository. Double clicking index.html should suffice.


In order to run unit tests configure a test server (different for different IDEs) and set jsTestDriver.conf file as a configuration file

# What have I done
1. A simple algorithm dividing all numbers up until sqrt(i) until n primes found. 
	Used to test correctness of other algorithms (and for speed reference) 


2. Sieve of Eratosthenes. One could estimate the range which contains nth prime using  p(n) < n*(log n + log (log n)), where p(n) is an nth prime.
	Then one could do a sieve over that range. However:
* This proved to be slower than the current algorithm 	(probably because estimate is only approximate,
		and the algorithm ends up crossing out numbers beyond the nth prime)
* It requires more memory to store all numbers being sieved.

3. Segmented sieve of Eratosthenes (the final solution). The algorithm has 2 stages:
* find all primes in a certain range (200000)
* use these primes to cross out numbers in next ranges of the same size
	
A few adjustments make it more efficient:
* When doing sieve if a prime i is found, next i's multiple to check is i*i (i*2..i*(i-1) have already been crossed out)
* In the 2nd part of the algorithm, when it crosses out multiples of primes in some range, it is only worth to try 
(obtained) primes up until square root of the largest number in the range.

This proved to be the fastest algorithm I have done. On my low-performant PC it can find 10 million primes in 4 seconds 	

# What would I do if I had more time

1. There is a bunch of algorithms that exploit properties of primes other than divisibility, some of them are very fast.
2. Optimising my algorithm. For example, it sieves numbers in bulks. The size of each bulk, however, is chosen more or less randomly (now it is 200k).
	The bigger the bulk, the slower it performs on small numbers, but the faster on large numbers. I could make it depend on n in some reasonable way. 
	
3. I could study and employ one of the more performant algorithms such as Sieve of Atkin 
	(one of the libraries I have seen can generate 1 billion of primes in 8 seconds on Pentium 2, so, there is certainly room for improvement)

 
#### Overall, I was aiming at a reasonably efficient algorithm (that would produce 1 million primes quickly as mentioned in the requirements), but not a highly efficient algorithm. 
	
	
	