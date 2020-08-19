## Data Modeling & NoSQL Databases

### Questions:

1. Why would a developer choose to make data models?
   Data modeling helps in the visual representation of data. Data Models ensure consistency in naming conventions, default values, semantics, security while ensuring quality of the data. Data model emphasizes on what data is needed and how it should be organized instead of what operations need to be performed on the data. Data Model is like architect's building plan which helps to build a conceptual model and set the relationship between data items. - [source](https://www.guru99.com/data-modelling-conceptual-logical.html)

1. What purpose do CRUD operations serve?
   In computer programming, create, read (aka retrieve), update, and delete (CRUD) are the four basic functions of persistent storage.

1. What kind of database is Postgres? What kind of database is MongoDB?  
   Postgress is the SQL database and MongoDB is a Non SQL Database

1. What is Mongoose and why do we need it?
   Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB. - [source](https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/#:~:text=Mongoose%20is%20an%20Object%20Data,library%20for%20MongoDB%20and%20Node.&text=It%20manages%20relationships%20between%20data,of%20those%20objects%20in%20MongoDB.)

1. Describe how NoSQL Databases scale horizontally
   The data can be split into multiple servers and then merge together. So more data can be easily spread out across multiple servers.

1. Give one strong argument for and against NoSQL Databases
   One advantage of the NoSqL Databases is that it doesn't have to have a strict structure or schema. In the event you have to save a collection of data that has different properties or no relationship, you're able to do that. Having no structure can also be a disadvantage. If you have to update multiple data, there isn't a stuctured way to easily grab all the data and update it. So its more difficult to manipulate data based on certain criterias or relationships.

1. Define three related pieces of data in a possible application. An example for a store application might be Product, Category and Department. Describe the constraints and rules on each piece of data and how you would relate these pieces to each other. For example, each Product has a Category and belongs in a Department.

1) Name 3 cloud based NoSQL Databases
   Amazon DynamoDB, Azure Table Storage, Google Cloud Bigtable

### Terms to Know

- database - s a mechanism for storing data, a database can store data in either a structured (relational) or unstructured (non-relational) way.
  The purpose of a database is to store data in a persistent way.

- data model - Data modeling (data modelling) is the process of creating a data model for the data to be stored in a Database. This data model is a conceptual representation of Data objects, the associations between different data objects and the rules.

- CRUD - refers to the four functions that are considered necessary to implement a persistent storage application: create, read, update and delete.

- schema - While Mongo is schema-less, SQL defines a schema via the table definition. A Mongoose ‘schema’ is a document data structure (or shape of the document) that is enforced via the application layer. - [source](https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/#:~:text=Mongoose%20is%20an%20Object%20Data,library%20for%20MongoDB%20and%20Node.&text=It%20manages%20relationships%20between%20data,of%20those%20objects%20in%20MongoDB.)

- sanitize -

- Structured Query Language (SQL) - is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data. - [source](https://en.wikipedia.org/wiki/SQL)

- Non SQL (NoSQL) - NoSQL is an approach to database design that can accommodate a wide variety of data models, including key-value, document, columnar and graph formats. NoSQL, which stands for "not only SQL," is an alternative to traditional relational databases in which data is placed in tables and data schema is carefully designed before the database is built. - [source](https://searchdatamanagement.techtarget.com/definition/NoSQL-Not-Only-SQL)

- MongoDB - MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time -[source](https://www.mongodb.com/what-is-mongodb)

- Mongoose - Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB. - [source](https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/#:~:text=Mongoose%20is%20an%20Object%20Data,library%20for%20MongoDB%20and%20Node.&text=It%20manages%20relationships%20between%20data,of%20those%20objects%20in%20MongoDB.)

- record -

- document - are equivalent to records or rows of data in SQL. While a SQL row can reference data in other tables, Mongo documents usually combine that in a document. - [source](https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/#:~:text=Mongoose%20is%20an%20Object%20Data,library%20for%20MongoDB%20and%20Node.&text=It%20manages%20relationships%20between%20data,of%20those%20objects%20in%20MongoDB.)

- Object Relation Mapping (ORM) - a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language. Basically we are trying to interact with our database using our language of choice instead of SQL. [source](https://en.wikipedia.org/wiki/Object-relational_mapping)

<br>
<br>

[Back to Table of Contents](README.md)
