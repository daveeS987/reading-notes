# Class 12: Pandas

## Links and Resources

- [Pandas in 10](https://pandas.pydata.org/pandas-docs/stable/user_guide/10min.html)
- [Pandas - Getting Started](https://pandas.pydata.org/pandas-docs/stable/getting_started/intro_tutorials/index.html)
- [Real Python - Pandas Tutorials](https://realpython.com/learning-paths/pandas-data-science/)
- [What is Pandas](https://www.youtube.com/watch?v=dcqPhpY7tWk&t=391s)
- [Master Pandas](https://towardsdatascience.com/be-a-more-efficient-data-scientist-today-master-pandas-with-this-guide-ea362d27386)

## Pandas

- fundamental difference between pandas and NumPy: NumPy arrays have one dtype for the entire array, while pandas DataFrames have one dtype per column
- A table of data is stored as a pandas DataFrame
- Each column in a DataFrame is a Series
- You can do things by applying a method to a DataFrame or Series
- Getting data in to pandas from many different file formats or data sources is supported by read\_\* functions.
- Exporting data out of pandas is provided by different to\_\*methods.
- The head/tail/info methods and the dtypes attribute are convenient for a first check.
- .loc/.iloc for columns and rows
- When selecting subsets of data, square brackets [] are used.
- Inside these brackets, you can use a single column/row label, a list of column/row labels, a slice of labels, a conditional expression or a colon.
- The .plot.\* methods are applicable on both Series and DataFrames
- By default, each of the columns is plotted as a different element (line, boxplot,…)
- Any plot created by pandas is a Matplotlib object.
