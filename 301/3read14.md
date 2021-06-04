## Read: 14a - DB Normalization

### Links:

- [Database Normalization](https://www.essentialsql.com/get-ready-to-learn-sql-database-normalization-explained-in-simple-english/)

Database normalization is a process used to organize a database into tables and columns. The main idea with this is that a table should be about a specific topic and only supporting topics included.

There are three main reasons to normalize a database. The first is to minimize duplicate data, the second is to minimize or avoid data modification issues, and the third is to simplify queries.

There are three modification anomalies that can occur:

- Insert Anomaly
- Update Anomaly
- Deletion Anomaly

First Normal Form – The information is stored in a relational table with each column containing atomic values. There are no repeating groups of columns.  
Second Normal Form – The table is in first normal form and all the columns depend on the table’s primary key.  
Third Normal Form – the table is in second normal form and all of its columns are not transitively dependent on the primary key

<br>
<br>

[Back to Table of Contents](../README.md)
