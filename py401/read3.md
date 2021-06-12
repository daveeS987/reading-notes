# Read 3: FileIO & Exceptions

## Links & Resources

- [Read & Write Files in Python](https://realpython.com/read-write-files-python/)
- [Exceptions in Python](https://realpython.com/python-exceptions/)
- [Read & Write Files in Python - Companion Video](https://realpython.com/courses/reading-and-writing-files-python/)
- [Reading and Writing Files in Python Quiz](https://realpython.com/quizzes/read-write-files-python/)

## Read / Write files

```python

files = open('dog_breeds.txt')

try:
    # Further file processing goes here
finally:
    files.close()

with open('dog_breeds.txt') as reader:
    # Further file processing goes here
    # will automatically close the file once it leaves this "with" block

```

- The open function can take a second argument

  - 'r' - reading(default)
  - 'w' - writing, truncating(overwriting) the file first
    -'rb' or 'wb' - open in binary mode(read/write using byte data)

- There are three different categories of file objects:

  - Text files
  - Buffered binary files
  - Raw binary files

**Text File types:**

```python
file = open('dog_breeds.txt')
type(file)
<class '_io.TextIOWrapper'>
```

**Buffered Binary File Types:**

```python
open('abc.txt', 'rb')
open('abc.txt', 'wb')
file = open('dog_breeds.txt', 'rb')
type(file)
<class '_io.BufferedReader'>
file = open('dog_breeds.txt', 'wb')
type(file)
<class '_io.BufferedWriter'>
```

**Raw File Types:** not typically used

```python
open('abc.txt', 'rb', buffering=0)
file = open('dog_breeds.txt', 'rb', buffering=0)
type(file)
<class '_io.FileIO'>
```

**Read Methods:**

- .read(size=-1) - reads based on the number os size bytes. No argument, -1, or None reads everything
- .readline(size=-1) - reads at most size number of characters from the line
- .readlines() - returns a list

An example of iterating through the file object

```python
>>> with open('dog_breeds.txt', 'r') as reader:
>>>     # Read and print the entire file line by line
>>>     for line in reader:
>>>         print(line, end='')

```

- note the end variable is to prevent python from adding a newline to the text that is being printed

**Write Methods:**

- .write(string) >> writes string to the file
- .writelines(seq) >> writes the sequence to the file

**Working with Bytes**

- all the same methods apply, however each of the methods expects and returns a bytes object instead

## Exceptions
