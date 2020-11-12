# Hashtables

## Terminology:

- Hash - A hash is the result of some algorithm taking an incoming string and converting it into a value that could be used for either security or some other purpose. In the case of a hashtable, it is used to determine the index of the array.
- Buckets - A bucket is what is contained in each index of the array of the hashtable. Each index is a bucket. An index could potentially contain multiple key/value pairs if a collision occurs.
- Collisions - A collision is what happens when more than one key gets hashed to the same location of the hashtable.
- Hash Function - any function that can be used to map a data set of an arbitrary size to a data set of a fixed size, which falls into the hash table. The values returned by a hash function are called hash values, hash codes, hash sums, or simply hashes. A good hash function needs to be easy to compute, have uniform distribution, tries to minimize collisions.

## Summararized:

Hash tables are basically a data structure of an array with a linked list. The way elements are added to a hashtable is to hash the key of the element using a hashfunction, this will return a number, and that number will determine the index of where the new element goes. Most hashfunctions will take a string, convert each element into an ASCII value, either add or multiply all those, multiply by a prime number, then divide by the size of the array. Good hash functions should be easy to compute, try to distribute uniformly, and try to minimize collision. Collision is when you attempt to add a new element to an array position that currently has something in it. When this happens, we can do something called chaining. Chaining will just add a node to that linkedlist.
