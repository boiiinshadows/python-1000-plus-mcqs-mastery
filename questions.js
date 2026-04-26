const questionBank = [
    {
        "category": "variables",
        "question": "Which of the following is NOT a valid variable name in Python?",
        "options": [
            "my_variable",
            "3variable",
            "variable3",
            "_variable"
        ],
        "correct": 1,
        "explanation": "`3variable` is NOT a valid Python variable name. Names must start with a letter or underscore and contain only letters, digits, and underscores — no digits at the start, no hyphens or spaces."
    },
    {
        "category": "variables",
        "question": "Which of the following is a mutable data type in Python?",
        "options": [
            "Tuple",
            "String",
            "List",
            "int"
        ],
        "correct": 2,
        "explanation": "`List` is a mutable data type — its contents can be changed after creation. Lists, dicts, and sets are mutable."
    },
    {
        "category": "variables",
        "question": "Which of the following data types is immutable in Python?",
        "options": [
            "List",
            "Set",
            "Dictionary",
            "Tuple"
        ],
        "correct": 3,
        "explanation": "`Tuple` is immutable in Python — once created, its value cannot be modified in place. Tuples, strings, ints, and floats are immutable."
    },
    {
        "category": "general",
        "question": "Which data structure in Python is unordered and does not allow duplicate elements?",
        "options": [
            "List",
            "Tuple",
            "Dictionary",
            "Set"
        ],
        "correct": 3,
        "explanation": "A `Set` is unordered and does not allow duplicate elements. That is the definition of a Python set."
    },
    {
        "category": "variables",
        "question": "Which of the following is a correct way to declare a tuple with one element?",
        "options": [
            "(1)",
            "(1,)",
            "[1]",
            "{1}"
        ],
        "correct": 1,
        "explanation": "A single-element tuple requires a trailing comma: `(1,)`. Without it, `(1)` is just a parenthesized integer, not a tuple."
    },
    {
        "category": "variables",
        "question": "Which of the following is a correct way to define a dictionary in Python?",
        "options": [
            "{1: 'one', 2: 'two'}",
            "[1: 'one', 2: 'two']",
            "(1: 'one', 2: 'two')",
            "{ 1 = 'one', 2 = 'two' }"
        ],
        "correct": 0,
        "explanation": "Dictionaries use curly braces with `key: value` pairs, e.g. `{1: 'one', 2: 'two'}`. The answer is `{1: 'one', 2: 'two'}`."
    },
    {
        "category": "variables",
        "question": "Which of the following data types is mutable in Python?",
        "options": [
            "String",
            "Tuple",
            "int",
            "Dictionary"
        ],
        "correct": 3,
        "explanation": "`Dictionary` is a mutable data type — its contents can be changed after creation. Lists, dicts, and sets are mutable."
    },
    {
        "category": "tuples_dicts",
        "question": "What is the correct syntax to define a tuple (1, 2, 3) in Python?",
        "options": [
            "tuple = [1, 2, 3]",
            "tuple = {1, 2, 3}",
            "tuple = (1, 2, 3)",
            "tuple = (1 2 3)"
        ],
        "correct": 2,
        "explanation": "Tuples are defined with parentheses and comma-separated values: `(1, 2, 3)`. A single-element tuple needs a trailing comma: `(1,)`. The answer is `tuple = (1, 2, 3)`."
    },
    {
        "category": "variables",
        "question": "Which of the following variable names is valid in Python?",
        "options": [
            "2myvar",
            "my-var",
            "my var",
            "_myvar"
        ],
        "correct": 3,
        "explanation": "`_myvar` is a valid Python variable name. It starts with a letter or underscore and uses only alphanumeric characters and underscores."
    },
    {
        "category": "variables",
        "question": "In Python, which of the following represents a boolean value?",
        "options": [
            "true",
            "false",
            "True",
            "yes"
        ],
        "correct": 2,
        "explanation": "Python boolean literals are `True` and `False` (case-sensitive, capital first letter). The answer is `True`."
    },
    {
        "category": "variables",
        "question": "What Python data type would you use to store a sequence of characters?",
        "options": [
            "int",
            "float",
            "str",
            "bool"
        ],
        "correct": 2,
        "explanation": "The correct answer is `str`. Review this Python concept carefully."
    },
    {
        "category": "variables",
        "question": "What is the type of the value 3.14 in Python?",
        "options": [
            "int",
            "str",
            "bool",
            "float"
        ],
        "correct": 3,
        "explanation": "The correct answer is `float`. Review this Python concept carefully."
    },
    {
        "category": "variables",
        "question": "Which of the following correctly creates an empty dictionary?",
        "options": [
            "{}",
            "[]",
            "()",
            "set()"
        ],
        "correct": 0,
        "explanation": "`{}` creates an empty dictionary. To create an empty set, use `set()` — NOT `{}`."
    },
    {
        "category": "variables",
        "question": "Which of the following correctly creates an empty set in Python?",
        "options": [
            "{}",
            "[]",
            "set()",
            "()"
        ],
        "correct": 2,
        "explanation": "`set()` creates an empty set. Using `{}` creates an empty dictionary instead."
    },
    {
        "category": "functions",
        "question": "What does the type() function return for the value 42?",
        "options": [
            "<class 'float'>",
            "<class 'str'>",
            "<class 'int'>",
            "<class 'bool'>"
        ],
        "correct": 2,
        "explanation": "A function without an explicit return statement returns `None`. The answer is `<class 'int'>`."
    },
    {
        "category": "operators",
        "question": "What is the result of 2 + 2 * 3 in Python?\n\n```python\n2 + 2 * 3\n```",
        "options": [
            "12",
            "8",
            "10",
            "6"
        ],
        "correct": 1,
        "explanation": "The `*` operator on strings repeats them. The result is `8`."
    },
    {
        "category": "builtins",
        "question": "What is the output of\n\n```python\nprint(10 / 3)\n```",
        "options": [
            "3.33",
            "3",
            "3.0",
            "3.3333333333333335"
        ],
        "correct": 3,
        "explanation": "Tracing through the code, the output is `3.3333333333333335`."
    },
    {
        "category": "operators",
        "question": "What is the result of 10 / 2 in Python?\n\n```python\n10 / 2\n```",
        "options": [
            "5",
            "5.0",
            "2.5",
            "2"
        ],
        "correct": 1,
        "explanation": "Tracing through the code, the output is `5.0`."
    },
    {
        "category": "operators",
        "question": "What is the result of 10 // 3 in Python?\n\n```python\n10 // 3\n```",
        "options": [
            "3.33",
            "3",
            "3.0",
            "3.3333"
        ],
        "correct": 1,
        "explanation": "The `//` operator performs integer (floor) division, discarding the decimal. The result is `3`."
    },
    {
        "category": "operators",
        "question": "What is the output of the following?\n\n```python\nx = 5\ny = 2\nprint(x ** y)\n```",
        "options": [
            "10",
            "25",
            "7",
            "32"
        ],
        "correct": 1,
        "explanation": "The `**` operator raises the left operand to the power of the right. The result is `25`."
    },
    {
        "category": "operators",
        "question": "What is the output of the following?\n\n```python\nx = 5\ny = 3\nprint(x % y)\n```",
        "options": [
            "1",
            "2",
            "0",
            "3"
        ],
        "correct": 1,
        "explanation": "The `%` operator returns the remainder of division. The result is `2`."
    },
    {
        "category": "builtins",
        "question": "What will print(10 == '10') output?\n\n```python\nprint(10 == \"10\")\n```",
        "options": [
            "True",
            "False",
            "Error",
            "None"
        ],
        "correct": 1,
        "explanation": "`==` compares values for equality. The result is `False`."
    },
    {
        "category": "operators",
        "question": "What is the result of True and False in Python?",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 1,
        "explanation": "Python boolean literals are `True` and `False` (case-sensitive, capital first letter). The answer is `False`."
    },
    {
        "category": "operators",
        "question": "What is the result of True or False in Python?",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 0,
        "explanation": "Python boolean literals are `True` and `False` (case-sensitive, capital first letter). The answer is `True`."
    },
    {
        "category": "operators",
        "question": "Which of the following is a comparison operator in Python?",
        "options": [
            "&&",
            "||",
            "==",
            "!"
        ],
        "correct": 2,
        "explanation": "`==` is a comparison operator in Python. It checks whether two values are equal."
    },
    {
        "category": "operators",
        "question": "What does the ** operator do in Python?",
        "options": [
            "Multiply two numbers",
            "Divide two numbers",
            "Raise a number to a power",
            "Compute the modulus"
        ],
        "correct": 2,
        "explanation": "The `**` operator in Python is the exponentiation (power) operator. It raises the left operand to the power of the right operand."
    },
    {
        "category": "operators",
        "question": "What is the output of\n\n```python\nprint(not True)\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 1,
        "explanation": "The `not` operator negates a boolean value. The result is `False`."
    },
    {
        "category": "operators",
        "question": "What is the result of 7 % 3 in Python?\n\n```python\n7 % 3\n```",
        "options": [
            "2",
            "1",
            "0",
            "3"
        ],
        "correct": 1,
        "explanation": "The `%` operator returns the remainder of division. The result is `1`."
    },
    {
        "category": "operators",
        "question": "What is the output of\n\n```python\nprint(2 ** 10)\n```",
        "options": [
            "20",
            "100",
            "512",
            "1024"
        ],
        "correct": 3,
        "explanation": "The `**` operator raises the left operand to the power of the right. The result is `1024`."
    },
    {
        "category": "operators",
        "question": "What is the value of the expression 15 // 4 in Python?\n\n```python\n15 // 4\n```",
        "options": [
            "3",
            "3.75",
            "4",
            "3.0"
        ],
        "correct": 0,
        "explanation": "The `//` operator performs integer (floor) division, discarding the decimal. The result is `3`."
    },
    {
        "category": "operators",
        "question": "What is the output of\n\n```python\nprint('Hello' + 'World')\n```",
        "options": [
            "HelloWorld",
            "Hello World",
            "Hello+World",
            "Error"
        ],
        "correct": 0,
        "explanation": "Tracing through the code, the output is `HelloWorld`."
    },
    {
        "category": "strings",
        "question": "What will print('Python'[::-1]) output?\n\n```python\nprint('Python'[::-1])\n```",
        "options": [
            "Python",
            "nohtyP",
            "P",
            "n"
        ],
        "correct": 1,
        "explanation": "The slice `[::-1]` reverses a sequence. Applied to the string gives `nohtyP`."
    },
    {
        "category": "builtins",
        "question": "What will the following output? x = 'Hello' print(x[1:4])\n\n```python\nx = \"Hello\"\nprint(x[1:4])\n```",
        "options": [
            "ello",
            "Hell",
            "Hel",
            "ell"
        ],
        "correct": 3,
        "explanation": "Tracing through the code, the output is `ell`."
    },
    {
        "category": "builtins",
        "question": "What is the output of: x = 'Python' print(x[2:])\n\n```python\nx = \"Python\"\nprint(x[2:])\n```",
        "options": [
            "Pyth",
            "thon",
            "Py",
            "hon"
        ],
        "correct": 1,
        "explanation": "Tracing through the code, the output is `thon`."
    },
    {
        "category": "strings",
        "question": "What is the output of print('Hello, World!'[::-1])?\n\n```python\nprint(\"Hello, World!\"[::-1])\n```",
        "options": [
            "Hello, World!",
            "dlroW ,olleH",
            "!dlroW ,olleH",
            "olleH ,dlroW"
        ],
        "correct": 2,
        "explanation": "The slice `[::-1]` reverses a sequence. Applied to the string gives `!dlroW ,olleH`."
    },
    {
        "category": "strings",
        "question": "What is the output of: print(len('Python'))\n\n```python\nprint(len(\"Python\"))\n```",
        "options": [
            "5",
            "6",
            "7",
            "Error"
        ],
        "correct": 1,
        "explanation": "len() returns the number of items in an object. The answer is `6`."
    },
    {
        "category": "strings",
        "question": "What does the upper() method do on a string?",
        "options": [
            "Converts to lowercase",
            "Converts to uppercase",
            "Strips whitespace",
            "Reverses the string"
        ],
        "correct": 1,
        "explanation": "str.upper() converts all lowercase letters in the string to uppercase and returns the new string."
    },
    {
        "category": "strings",
        "question": "What is the output of:\n\n```python\nprint('hello'.capitalize())\n```",
        "options": [
            "hello",
            "HELLO",
            "Hello",
            "hELLO"
        ],
        "correct": 2,
        "explanation": "str.capitalize() returns the string with its first character uppercased and all remaining characters lowercased."
    },
    {
        "category": "strings",
        "question": "What is the output of:\n\n```python\nprint('hello world'.split())\n```",
        "options": [
            "['hello world']",
            "['hello', 'world']",
            "('hello', 'world')",
            "Error"
        ],
        "correct": 1,
        "explanation": "str.split() splits the string at whitespace by default and returns a list of substrings."
    },
    {
        "category": "strings",
        "question": "Which string method removes leading and trailing whitespace?",
        "options": [
            "strip()",
            "trim()",
            "clean()",
            "remove()"
        ],
        "correct": 0,
        "explanation": "`and` returns the first falsy operand, or the last operand if all are truthy. The result is `strip()`."
    },
    {
        "category": "builtins",
        "question": "What is the output of:\n\n```python\nprint('abc' * 3)\n```",
        "options": [
            "abc3",
            "abcabcabc",
            "abc abc abc",
            "Error"
        ],
        "correct": 1,
        "explanation": "The `*` operator on strings repeats them. The result is `abcabcabc`."
    },
    {
        "category": "builtins",
        "question": "What is the output of:\n\n```python\nprint('Python'[0])\n```",
        "options": [
            "P",
            "y",
            "Python",
            "Error"
        ],
        "correct": 0,
        "explanation": "Tracing through the code, the output is `P`."
    },
    {
        "category": "builtins",
        "question": "What is the output of:\n\n```python\nprint('Python'[-1])\n```",
        "options": [
            "P",
            "n",
            "y",
            "o"
        ],
        "correct": 1,
        "explanation": "Tracing through the code, the output is `n`."
    },
    {
        "category": "strings",
        "question": "What does the find() method do on a string?",
        "options": [
            "Replaces a substring",
            "Returns the index of a substring",
            "Removes a substring",
            "Counts occurrences"
        ],
        "correct": 1,
        "explanation": "str.find(sub) returns the lowest index where substring `sub` is found, or -1 if not found."
    },
    {
        "category": "strings",
        "question": "Strings in Python are:",
        "options": [
            "Mutable",
            "Immutable",
            "Both mutable and immutable",
            "None of the above"
        ],
        "correct": 1,
        "explanation": "Strings in Python are immutable — you cannot change individual characters after creation."
    },
    {
        "category": "lists",
        "question": "What will this code print?\n\n```python\nmy_list = [1, 2, 3, 4, 5]\nprint(my_list[2:4])\n```",
        "options": [
            "[1,2,3,4,5]",
            "[2,3]",
            "[3,4]",
            "[2,3,4]"
        ],
        "correct": 2,
        "explanation": "Tracing through the code, the output is `[3,4]`."
    },
    {
        "category": "lists",
        "question": "What is the output of:\n\n```python\nmy_list = [1, 2, 3, 4, 5]\nprint(my_list[-2])\n```",
        "options": [
            "4",
            "2",
            "3",
            "5"
        ],
        "correct": 0,
        "explanation": "Tracing through the code, the output is `4`."
    },
    {
        "category": "lists",
        "question": "What will this code output?\n\n```python\nmy_list = [1, 2, 3, 4, 5]\nprint(my_list[1:4])\n```",
        "options": [
            "[1,2,3,4,5]",
            "[2,3,4]",
            "[1,2,3]",
            "[2,3,4,5]"
        ],
        "correct": 1,
        "explanation": "Tracing through the code, the output is `[2,3,4]`."
    },
    {
        "category": "lists",
        "question": "What does the append() method do in Python lists?",
        "options": [
            "Adds an element to the beginning",
            "Adds an element to the end",
            "Removes from the beginning",
            "Removes from the end"
        ],
        "correct": 1,
        "explanation": "list.append(x) adds the element `x` to the END of the list."
    },
    {
        "category": "lists",
        "question": "Which method removes an element by value from a list?",
        "options": [
            "delete()",
            "remove()",
            "pop()",
            "erase()"
        ],
        "correct": 1,
        "explanation": "The correct answer is `remove()`. Review this Python concept carefully."
    },
    {
        "category": "builtins",
        "question": "What will this code output?\n\n```python\nx = [1, 2, 3]\ny = x\ny[0] = 100\nprint(x)\n```",
        "options": [
            "[100,2,3]",
            "[1,2,3]",
            "[1,2,100]",
            "[100,100,100]"
        ],
        "correct": 0,
        "explanation": "Tracing through the code, the output is `[100,2,3]`."
    },
    {
        "category": "lists",
        "question": "What does the pop() method do when called with no arguments?",
        "options": [
            "Removes the first element",
            "Removes and returns the last element",
            "Removes and returns the first element",
            "Clears all elements"
        ],
        "correct": 1,
        "explanation": "The correct answer is `Removes and returns the last element`. Review this Python concept carefully."
    },
    {
        "category": "lists",
        "question": "Which method adds all elements from another list to an existing list?",
        "options": [
            "add()",
            "insert()",
            "extend()",
            "append()"
        ],
        "correct": 2,
        "explanation": "The correct answer is `extend()`. Review this Python concept carefully."
    },
    {
        "category": "lists",
        "question": "What is the output of:\n\n```python\nprint(sorted([3, 1, 4, 1, 5, 9, 2]))\n```",
        "options": [
            "[3,1,4,1,5,9,2]",
            "[9,5,4,3,2,1,1]",
            "[1,1,2,3,4,5,9]",
            "Error"
        ],
        "correct": 2,
        "explanation": "sorted() returns a new sorted list. The result is `[1,1,2,3,4,5,9]`."
    },
    {
        "category": "lists",
        "question": "What is the output of:\n\n```python\nmy_list = [10, 20, 30]\nmy_list.insert(1, 15)\nprint(my_list)\n```",
        "options": [
            "[10,15,20,30]",
            "[15,10,20,30]",
            "[10,20,15,30]",
            "[10,20,30,15]"
        ],
        "correct": 0,
        "explanation": "Tracing through the code, the output is `[10,15,20,30]`."
    },
    {
        "category": "operators",
        "question": "What is the output of:\n\n```python\nprint([1, 2, 3] + [4, 5, 6])\n```",
        "options": [
            "[1,2,3,4,5,6]",
            "[5,7,9]",
            "Error",
            "[[1,2,3],[4,5,6]]"
        ],
        "correct": 0,
        "explanation": "Tracing through the code, the output is `[1,2,3,4,5,6]`."
    },
    {
        "category": "strings",
        "question": "What is the output of:\n\n```python\nprint(len([1, 2, 3, 4, 5]))\n```",
        "options": [
            "4",
            "5",
            "6",
            "Error"
        ],
        "correct": 1,
        "explanation": "len() returns the number of items in an object. The answer is `5`."
    },
    {
        "category": "lists",
        "question": "How do you create a shallow copy of a list called 'lst'?",
        "options": [
            "lst.copy()",
            "lst.clone()",
            "copy(lst)",
            "lst.duplicate()"
        ],
        "correct": 0,
        "explanation": "list.copy() creates a shallow copy of the list — a new list object but with references to the same inner objects."
    },
    {
        "category": "lists",
        "question": "What is a list comprehension?",
        "options": [
            "A way to comment a list",
            "A concise way to create a list using a single line",
            "A method to sort a list",
            "A way to delete a list"
        ],
        "correct": 1,
        "explanation": "A list comprehension is a concise syntax for creating lists: `[expr for item in iterable]`, optionally with a filter condition."
    },
    {
        "category": "control",
        "question": "What is the output of:\n\n```python\nprint([x**2 for x in range(4)])\n```",
        "options": [
            "[0,1,2,3]",
            "[0,1,4,9]",
            "[1,4,9,16]",
            "Error"
        ],
        "correct": 1,
        "explanation": "The `**` operator raises the left operand to the power of the right. The result is `[0,1,4,9]`."
    },
    {
        "category": "tuples_dicts",
        "question": "What is the correct syntax to access the value for key 'age' in a dict named 'person'?",
        "options": [
            "person['age']",
            "person.get('age')",
            "person.age",
            "person{age}"
        ],
        "correct": 0,
        "explanation": "The correct answer is `person['age']`. Review this Python concept carefully."
    },
    {
        "category": "tuples_dicts",
        "question": "Which is the correct way to check if a key exists in a dictionary?",
        "options": [
            "key in dictionary",
            "dictionary.contains(key)",
            "key.contains(dictionary)",
            "dictionary[key]"
        ],
        "correct": 0,
        "explanation": "Dictionaries use curly braces with `key: value` pairs, e.g. `{1: 'one', 2: 'two'}`. The answer is `key in dictionary`."
    },
    {
        "category": "tuples_dicts",
        "question": "What does the dict.keys() method return?",
        "options": [
            "A list of values",
            "A list of key-value pairs",
            "A view of all keys",
            "A tuple of keys"
        ],
        "correct": 2,
        "explanation": "dict.keys() returns a view object containing all keys in the dictionary — not a list or tuple, but a dynamic view."
    },
    {
        "category": "tuples_dicts",
        "question": "What is the output of:\n\n```python\nd = {'a': 1, 'b': 2}\nprint(d.get('c', 0))\n```",
        "options": [
            "None",
            "Error",
            "0",
            "1"
        ],
        "correct": 2,
        "explanation": "Tracing through the code, the output is `0`."
    },
    {
        "category": "tuples_dicts",
        "question": "Which method removes and returns a value from a dictionary?",
        "options": [
            "remove()",
            "delete()",
            "pop()",
            "discard()"
        ],
        "correct": 2,
        "explanation": "`and` returns the first falsy operand, or the last operand if all are truthy. The result is `pop()`."
    },
    {
        "category": "builtins",
        "question": "What is the output of:\n\n```python\nt = (1, 2, 3)\nprint(t[1])\n```",
        "options": [
            "1",
            "2",
            "3",
            "Error"
        ],
        "correct": 1,
        "explanation": "Tracing through the code, the output is `2`."
    },
    {
        "category": "tuples_dicts",
        "question": "Can you change the elements of a tuple after creation?",
        "options": [
            "Yes, using indexing",
            "Yes, using append()",
            "No, tuples are immutable",
            "Only the first element"
        ],
        "correct": 2,
        "explanation": "The correct answer is `No, tuples are immutable`. Review this Python concept carefully."
    },
    {
        "category": "strings",
        "question": "What is the output of:\n\n```python\nd = {}\nd['x'] = 10\nd['y'] = 20\nprint(len(d))\n```",
        "options": [
            "0",
            "1",
            "2",
            "3"
        ],
        "correct": 2,
        "explanation": "len() returns the number of items in an object. The answer is `2`."
    },
    {
        "category": "tuples_dicts",
        "question": "Which of the following can be used as a dictionary key?",
        "options": [
            "List",
            "Dictionary",
            "Tuple",
            "Set"
        ],
        "correct": 2,
        "explanation": "Only hashable (immutable) types can be dictionary keys. `Tuple` is hashable, so it is valid as a key. Lists, sets, and dicts are not hashable."
    },
    {
        "category": "tuples_dicts",
        "question": "What does the dict.items() method return?",
        "options": [
            "Only keys",
            "Only values",
            "Key-value pairs as tuples",
            "A list of keys"
        ],
        "correct": 2,
        "explanation": "dict.items() returns a view of (key, value) tuple pairs for every entry in the dictionary."
    },
    {
        "category": "builtins",
        "question": "What is the output of:\n\n```python\nprint((1, 2, 3).count(2))\n```",
        "options": [
            "0",
            "1",
            "2",
            "Error"
        ],
        "correct": 1,
        "explanation": "Tracing through the code, the output is `1`."
    },
    {
        "category": "tuples_dicts",
        "question": "What does dict.update() do?",
        "options": [
            "Deletes a key",
            "Replaces the entire dictionary",
            "Merges another dictionary into the existing one",
            "Returns all values"
        ],
        "correct": 2,
        "explanation": "dict.update(other) merges all key-value pairs from `other` into the dictionary, overwriting existing keys."
    },
    {
        "category": "lists",
        "question": "What is the output of:\n\n```python\nprint(sorted({'b':2, 'a':1, 'c':3}.keys()))\n```",
        "options": [
            "['a','b','c']",
            "['b','a','c']",
            "['c','b','a']",
            "Error"
        ],
        "correct": 0,
        "explanation": "sorted() returns a new sorted list. The result is `['a','b','c']`."
    },
    {
        "category": "control",
        "question": "What is the output?\n\n```python\nx = 10\nif x > 5:\n    print('x is greater than 5')\nelse:\n    print('x is less than or equal to 5')\n```",
        "options": [
            "x is greater than 5",
            "x is less than or equal to 5",
            "x is 10",
            "Error"
        ],
        "correct": 0,
        "explanation": "`or` returns the first truthy operand, or the last operand if all are falsy. The result is `x is greater than 5`."
    },
    {
        "category": "control",
        "question": "What is the output?\n\n```python\nx = 5\nif x == 5:\n    print('x is 5')\nelif x > 5:\n    print('x is greater than 5')\nelse:\n    print('x is less than 5')\n```",
        "options": [
            "x is 5",
            "x is greater than 5",
            "x is less than 5",
            "None of the above"
        ],
        "correct": 0,
        "explanation": "`==` compares values for equality. The result is `x is 5`."
    },
    {
        "category": "control",
        "question": "What is the output?\n\n```python\nx = 7\nif x > 5:\n    print('x is greater than 5')\n```",
        "options": [
            "x is greater than 5",
            "x is less than or equal to 5",
            "x is 7",
            "Error"
        ],
        "correct": 0,
        "explanation": "Tracing through the code, the output is `x is greater than 5`."
    },
    {
        "category": "general",
        "question": "What keyword starts a chained conditional in Python?",
        "options": [
            "else if",
            "elsif",
            "elif",
            "elseif"
        ],
        "correct": 2,
        "explanation": "The correct answer is `elif`. Review this Python concept carefully."
    },
    {
        "category": "control",
        "question": "Which keyword is used to exit a loop prematurely in Python?",
        "options": [
            "exit",
            "stop",
            "break",
            "return"
        ],
        "correct": 2,
        "explanation": "The correct answer is `break`. Review this Python concept carefully."
    },
    {
        "category": "control",
        "question": "What is the purpose of the continue statement in Python?",
        "options": [
            "Terminate the loop",
            "Exit the function",
            "Skip the rest of the current loop iteration",
            "Restart the loop from beginning"
        ],
        "correct": 2,
        "explanation": "`continue` skips the rest of the current loop body and jumps to the next iteration."
    },
    {
        "category": "control",
        "question": "What is the output?\n\n```python\nfor i in range(5):\n    if i == 3:\n        continue\n    print(i)\n```",
        "options": [
            "0 1 2 3 4",
            "1 2 3 4",
            "0 1 2 4",
            "0 1 2 3"
        ],
        "correct": 2,
        "explanation": "`==` compares values for equality. The result is `0 1 2 4`."
    },
    {
        "category": "control",
        "question": "What is the output?\n\n```python\nfor i in range(5):\n    if i == 3:\n        break\n    print(i)\n```",
        "options": [
            "0 1 2 3 4",
            "0 1 2",
            "0 1 2 3",
            "1 2 3"
        ],
        "correct": 1,
        "explanation": "`==` compares values for equality. The result is `0 1 2`."
    },
    {
        "category": "control",
        "question": "Which statement about Python's pass statement is true?",
        "options": [
            "It terminates the program",
            "It has no effect; serves as a placeholder",
            "It skips a loop iteration",
            "It exits a function"
        ],
        "correct": 1,
        "explanation": "`pass` is a no-op statement used as a placeholder where a statement is syntactically required but no action is needed."
    },
    {
        "category": "control",
        "question": "What is the purpose of the pass statement in Python?",
        "options": [
            "To end a loop prematurely",
            "To skip an iteration",
            "To define an empty code block",
            "To exit a function"
        ],
        "correct": 2,
        "explanation": "`pass` is a no-op statement used as a placeholder where a statement is syntactically required but no action is needed."
    },
    {
        "category": "control",
        "question": "Which of the following statements is true about Python indentation?",
        "options": [
            "It is optional for readability",
            "It is necessary for defining code blocks",
            "It is only used for comments",
            "It marks the end of a function"
        ],
        "correct": 1,
        "explanation": "Python uses indentation (whitespace) to define code blocks — it is syntactically required, not just for style."
    },
    {
        "category": "control",
        "question": "What is the output?\n\n```python\nx = 0\nwhile x < 3:\n    print(x)\n    x += 1\n```",
        "options": [
            "0 1 2 3",
            "0 1 2",
            "1 2 3",
            "0 1"
        ],
        "correct": 1,
        "explanation": "Tracing through the code, the output is `0 1 2`."
    },
    {
        "category": "control",
        "question": "What does range(1, 6) produce?",
        "options": [
            "1 2 3 4 5 6",
            "1 2 3 4 5",
            "0 1 2 3 4 5",
            "2 3 4 5"
        ],
        "correct": 1,
        "explanation": "range(start, stop, step) generates numbers from start up to (but not including) stop. The result is `1 2 3 4 5`."
    },
    {
        "category": "control",
        "question": "What does range(0, 10, 2) produce?",
        "options": [
            "0 2 4 6 8 10",
            "0 2 4 6 8",
            "1 3 5 7 9",
            "0 1 2 3 4"
        ],
        "correct": 1,
        "explanation": "range(start, stop, step) generates numbers from start up to (but not including) stop. The result is `0 2 4 6 8`."
    },
    {
        "category": "lists",
        "question": "What is the output?\n\n```python\nprint(list(range(3)))\n```",
        "options": [
            "[0,1,2,3]",
            "[1,2,3]",
            "[0,1,2]",
            "range(0,3)"
        ],
        "correct": 2,
        "explanation": "range(start, stop, step) generates numbers from start up to (but not including) stop. The result is `[0,1,2]`."
    },
    {
        "category": "functions",
        "question": "Which keyword is used to define a function in Python?",
        "options": [
            "func",
            "define",
            "def",
            "function"
        ],
        "correct": 2,
        "explanation": "The correct answer is `def`. Review this Python concept carefully."
    },
    {
        "category": "functions",
        "question": "Which is the correct way to write a function that takes two arguments?",
        "options": [
            "def my_function(arg1, arg2):",
            "function my_function(arg1, arg2):",
            "def my_function(arg1 arg2):",
            "function my_function(arg1 arg2):"
        ],
        "correct": 0,
        "explanation": "The correct answer is `def my_function(arg1, arg2):`. Review this Python concept carefully."
    },
    {
        "category": "functions",
        "question": "Which keyword is used to return a value from a function?",
        "options": [
            "give",
            "send",
            "return",
            "output"
        ],
        "correct": 2,
        "explanation": "A function without an explicit return statement returns `None`. The answer is `return`."
    },
    {
        "category": "functions",
        "question": "Which keyword is used to declare a variable global inside a function?",
        "options": [
            "var",
            "global",
            "globalvar",
            "public"
        ],
        "correct": 1,
        "explanation": "The correct answer is `global`. Review this Python concept carefully."
    },
    {
        "category": "functions",
        "question": "In Python, which symbol is used to allow a function to accept any number of positional arguments?",
        "options": [
            "varargs",
            "var",
            "args"
        ],
        "correct": 0,
        "explanation": "The correct answer is ``. Review this Python concept carefully."
    },
    {
        "category": "operators",
        "question": "What is the output?\n\n```python\ndef greet(name):\n    return 'Hello, ' + name\nprint(greet('World'))\n```",
        "options": [
            "greet('World')",
            "Hello, World",
            "Hello World",
            "Error"
        ],
        "correct": 1,
        "explanation": "Tracing through the code, the output is `Hello, World`."
    },
    {
        "category": "functions",
        "question": "What is a default parameter value in Python?",
        "options": [
            "A parameter with no name",
            "A value assigned to a parameter if no argument is passed",
            "A parameter that cannot be changed",
            "A global variable"
        ],
        "correct": 1,
        "explanation": "The correct answer is `A value assigned to a parameter if no argument is passed`. Review this Python concept carefully."
    },
    {
        "category": "operators",
        "question": "What is the output?\n\n```python\ndef add(a, b=5):\n    return a + b\nprint(add(3))\n```",
        "options": [
            "3",
            "5",
            "8",
            "Error"
        ],
        "correct": 2,
        "explanation": "Tracing through the code, the output is `8`."
    },
    {
        "category": "functions",
        "question": "What is a recursive function?",
        "options": [
            "A function that calls another function",
            "A function that calls itself",
            "A function with no return value",
            "A function defined inside a class"
        ],
        "correct": 1,
        "explanation": "Recursion is when a function calls itself. The answer is `A function that calls itself`."
    },
    {
        "category": "operators",
        "question": "What is the output?\n\n```python\ndef fact(n):\n    if n == 0:\n        return 1\n    return n * fact(n - 1)\nprint(fact(4))\n```",
        "options": [
            "4",
            "12",
            "24",
            "16"
        ],
        "correct": 2,
        "explanation": "`==` compares values for equality. The result is `24`."
    },
    {
        "category": "functions",
        "question": "What does **kwargs allow in a Python function?",
        "options": [
            "Any number of positional args",
            "Any number of keyword args",
            "A fixed number of args",
            "No arguments"
        ],
        "correct": 1,
        "explanation": "The `**` operator raises the left operand to the power of the right. The result is `Any number of keyword args`."
    },
    {
        "category": "functions",
        "question": "What is a lambda function in Python?",
        "options": [
            "A named, multi-line function",
            "An anonymous single-expression function",
            "A built-in function",
            "A recursive function"
        ],
        "correct": 1,
        "explanation": "A lambda is an anonymous single-expression function. The result is `An anonymous single-expression function`."
    },
    {
        "category": "functions",
        "question": "What is the output?\n\n```python\nf = lambda x: x * 2\nprint(f(5))\n```",
        "options": [
            "5",
            "2",
            "10",
            "lambda"
        ],
        "correct": 2,
        "explanation": "A lambda is an anonymous single-expression function. The result is `10`."
    },
    {
        "category": "functions",
        "question": "What is the scope of a variable defined inside a function?",
        "options": [
            "Global",
            "Local",
            "Module",
            "Built-in"
        ],
        "correct": 1,
        "explanation": "The correct answer is `Local`. Review this Python concept carefully."
    },
    {
        "category": "builtins",
        "question": "What will print(max(3, 7, 2, 9, 1)) output?\n\n```python\nprint(max(3, 7, 2, 9, 1))\n```",
        "options": [
            "3",
            "7",
            "9",
            "1"
        ],
        "correct": 2,
        "explanation": "Tracing through the code, the output is `9`."
    },
    {
        "category": "strings",
        "question": "What does the len() function do in Python?",
        "options": [
            "Returns the length of a list only",
            "Returns the length of a string only",
            "Returns the length of a dictionary only",
            "All of the above (works on various sequences)"
        ],
        "correct": 3,
        "explanation": "len() returns the number of items in an object. The answer is `All of the above (works on various sequences)`."
    },
    {
        "category": "functions",
        "question": "Which built-in function reads input from the user?",
        "options": [
            "read()",
            "input()",
            "get_input()",
            "get_user_input()"
        ],
        "correct": 1,
        "explanation": "The correct answer is `input()`. Review this Python concept carefully."
    },
    {
        "category": "control",
        "question": "What does the range() function return?",
        "options": [
            "A list of integers",
            "A list of floats",
            "A range object",
            "A tuple of integers"
        ],
        "correct": 2,
        "explanation": "range(start, stop, step) generates numbers from start up to (but not including) stop. The result is `A range object`."
    },
    {
        "category": "builtins",
        "question": "What is the output of\n\n```python\nprint(abs(-15))\n```",
        "options": [
            "-15",
            "15",
            "0",
            "Error"
        ],
        "correct": 1,
        "explanation": "Tracing through the code, the output is `15`."
    },
    {
        "category": "builtins",
        "question": "What is the output of\n\n```python\nprint(round(3.567, 2))\n```",
        "options": [
            "3.5",
            "3.56",
            "3.57",
            "3.6"
        ],
        "correct": 2,
        "explanation": "Tracing through the code, the output is `3.57`."
    },
    {
        "category": "builtins",
        "question": "What is the output of\n\n```python\nprint(min(4, 2, 8, 1))\n```",
        "options": [
            "4",
            "2",
            "8",
            "1"
        ],
        "correct": 3,
        "explanation": "Tracing through the code, the output is `1`."
    },
    {
        "category": "functions",
        "question": "What does the int() function do when called with '42'?",
        "options": [
            "Returns the string '42'",
            "Returns the integer 42",
            "Raises an error",
            "Returns 42.0"
        ],
        "correct": 1,
        "explanation": "The correct answer is `Returns the integer 42`. Review this Python concept carefully."
    },
    {
        "category": "builtins",
        "question": "What is the output of\n\n```python\nprint(str(100))\n```",
        "options": [
            "100",
            "'100'",
            "\"100\"",
            "Error"
        ],
        "correct": 0,
        "explanation": "Tracing through the code, the output is `100`."
    },
    {
        "category": "lists",
        "question": "What does enumerate() do when used with a list?",
        "options": [
            "Returns only indices",
            "Returns only values",
            "Returns pairs of (index, value)",
            "Sorts the list"
        ],
        "correct": 2,
        "explanation": "The correct answer is `Returns pairs of (index, value)`. Review this Python concept carefully."
    },
    {
        "category": "builtins",
        "question": "What is the output of\n\n```python\nprint(sum([1, 2, 3, 4, 5]))\n```",
        "options": [
            "10",
            "12",
            "15",
            "20"
        ],
        "correct": 2,
        "explanation": "Tracing through the code, the output is `15`."
    },
    {
        "category": "lists",
        "question": "What is the output of\n\n```python\nprint(list(map(str, [1, 2, 3])))\n```",
        "options": [
            "[1,2,3]",
            "['1','2','3']",
            "[str,str,str]",
            "Error"
        ],
        "correct": 1,
        "explanation": "Tracing through the code, the output is `['1','2','3']`."
    },
    {
        "category": "functions",
        "question": "What does the zip() function do in Python?",
        "options": [
            "Compresses a file",
            "Combines two or more iterables element-wise",
            "Sorts two lists in parallel",
            "Flattens a list"
        ],
        "correct": 1,
        "explanation": "The correct answer is `Combines two or more iterables element-wise`. Review this Python concept carefully."
    },
    {
        "category": "builtins",
        "question": "What is the output of\n\n```python\nprint(bool(0))\n```",
        "options": [
            "True",
            "False",
            "0",
            "Error"
        ],
        "correct": 1,
        "explanation": "Tracing through the code, the output is `False`."
    },
    {
        "category": "builtins",
        "question": "What is the output of\n\n```python\nprint(type([]))\n```",
        "options": [
            "<class 'tuple'>",
            "<class 'dict'>",
            "<class 'list'>",
            "<class 'set'>"
        ],
        "correct": 2,
        "explanation": "Tracing through the code, the output is `<class 'list'>`."
    },
    {
        "category": "general",
        "question": "What does the del statement do in Python?",
        "options": [
            "Deletes all variables in scope",
            "Deletes a function definition",
            "Deletes a variable or element",
            "Terminates the program"
        ],
        "correct": 2,
        "explanation": "The correct answer is `Deletes a variable or element`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "Which is the correct way to open 'example.txt' for writing?",
        "options": [
            "open('example.txt','w')",
            "open('example.txt','r')",
            "open('example.txt','a')",
            "open('example.txt','x')"
        ],
        "correct": 0,
        "explanation": "The correct answer is `open('example.txt','w')`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "Which is the correct way to open 'data.txt' for reading?",
        "options": [
            "open('data.txt','w')",
            "open('data.txt','r')",
            "open('data.txt','a')",
            "open('data.txt','x')"
        ],
        "correct": 1,
        "explanation": "The correct answer is `open('data.txt','r')`. Review this Python concept carefully."
    },
    {
        "category": "files",
        "question": "Which mode opens a file for appending in Python?",
        "options": [
            "'w'",
            "'r'",
            "'a'",
            "'x'"
        ],
        "correct": 2,
        "explanation": "The correct answer is `'a'`. Review this Python concept carefully."
    },
    {
        "category": "files",
        "question": "Which of the following is used to open a file in binary read mode?",
        "options": [
            "'rb'",
            "'r'",
            "'wb'",
            "'w'"
        ],
        "correct": 0,
        "explanation": "Opening a file in `'r'` mode opens it for reading only. It raises FileNotFoundError if the file doesn't exist."
    },
    {
        "category": "files",
        "question": "Which keyword is used to handle exceptions in Python?",
        "options": [
            "catch",
            "handle",
            "except",
            "error"
        ],
        "correct": 2,
        "explanation": "The correct answer is `except`. Review this Python concept carefully."
    },
    {
        "category": "files",
        "question": "What is the purpose of the finally block in exception handling?",
        "options": [
            "It runs only if an exception occurs",
            "It runs only if no exception occurs",
            "It always runs regardless of exceptions",
            "It re-raises the exception"
        ],
        "correct": 2,
        "explanation": "The `finally` block always executes regardless of whether an exception was raised or caught — ideal for cleanup code."
    },
    {
        "category": "files",
        "question": "Which Python keyword is used to raise an exception manually?",
        "options": [
            "throw",
            "raise",
            "error",
            "except"
        ],
        "correct": 1,
        "explanation": "The correct answer is `raise`. Review this Python concept carefully."
    },
    {
        "category": "files",
        "question": "What is the correct structure for exception handling in Python?",
        "options": [
            "try / catch",
            "try / except",
            "try / handle",
            "check / except"
        ],
        "correct": 1,
        "explanation": "The correct answer is `try / except`. Review this Python concept carefully."
    },
    {
        "category": "files",
        "question": "What does the with statement do when opening a file?",
        "options": [
            "Opens the file in write mode",
            "Automatically closes the file after the block",
            "Reads the file line by line",
            "Creates a copy of the file"
        ],
        "correct": 1,
        "explanation": "The correct answer is `Automatically closes the file after the block`. Review this Python concept carefully."
    },
    {
        "category": "builtins",
        "question": "What is the output when ZeroDivisionError occurs and is caught?\n\n```python\ntry:\n    print(1/0)\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')\n```",
        "options": [
            "1/0",
            "0",
            "Cannot divide by zero",
            "Error"
        ],
        "correct": 2,
        "explanation": "`and` returns the first falsy operand, or the last operand if all are truthy. The result is `Cannot divide by zero`."
    },
    {
        "category": "control",
        "question": "What mode creates a new file, failing if it already exists?",
        "options": [
            "'w'",
            "'a'",
            "'r'",
            "'x'"
        ],
        "correct": 3,
        "explanation": "Opening a file in `'r'` mode opens it for reading only. It raises FileNotFoundError if the file doesn't exist."
    },
    {
        "category": "strings",
        "question": "Which method reads the entire file as a single string?",
        "options": [
            "readlines()",
            "readline()",
            "read()",
            "readall()"
        ],
        "correct": 2,
        "explanation": "The correct answer is `read()`. Review this Python concept carefully."
    },
    {
        "category": "control",
        "question": "What does the 'w' mode do if the file already exists?",
        "options": [
            "Appends to it",
            "Raises an error",
            "Truncates and overwrites it",
            "Opens it in read mode"
        ],
        "correct": 2,
        "explanation": "Opening a file in `'w'` mode creates it if it doesn't exist or truncates (empties) it if it does, then opens for writing."
    },
    {
        "category": "modules",
        "question": "What is the purpose of the import statement in Python?",
        "options": [
            "Exports modules from a script",
            "Imports functions and modules into a script",
            "Deletes variables",
            "Defines functions"
        ],
        "correct": 1,
        "explanation": "The correct answer is `Imports functions and modules into a script`. Review this Python concept carefully."
    },
    {
        "category": "functions",
        "question": "How do you import only the sqrt function from the math module?",
        "options": [
            "import math.sqrt",
            "from math import sqrt",
            "import sqrt from math",
            "include math.sqrt"
        ],
        "correct": 1,
        "explanation": "Python modules are imported with the `import` statement. `from math import sqrt` is the correct syntax/answer here."
    },
    {
        "category": "modules",
        "question": "What does import math allow you to do?",
        "options": [
            "Use math as a variable name",
            "Access all math module functions",
            "Delete the math module",
            "Print all math functions"
        ],
        "correct": 1,
        "explanation": "The correct answer is `Access all math module functions`. Review this Python concept carefully."
    },
    {
        "category": "builtins",
        "question": "What is the output of:\n\n```python\nimport math\nprint(math.floor(3.9))\n```",
        "options": [
            "4",
            "3",
            "3.9",
            "Error"
        ],
        "correct": 1,
        "explanation": "The `math` module provides mathematical functions. The answer is `3`."
    },
    {
        "category": "functions",
        "question": "What does the math.ceil() function return for 4.1?",
        "options": [
            "4",
            "5",
            "4.1",
            "Error"
        ],
        "correct": 1,
        "explanation": "A function without an explicit return statement returns `None`. The answer is `5`."
    },
    {
        "category": "builtins",
        "question": "What is the output of:\n\n```python\nimport math\nprint(math.sqrt(16))\n```",
        "options": [
            "4",
            "4.0",
            "16",
            "Error"
        ],
        "correct": 1,
        "explanation": "The `math` module provides mathematical functions. The answer is `4.0`."
    },
    {
        "category": "modules",
        "question": "Which module would you use to get the current date and time?",
        "options": [
            "time",
            "calendar",
            "datetime",
            "os"
        ],
        "correct": 2,
        "explanation": "`and` returns the first falsy operand, or the last operand if all are truthy. The result is `datetime`."
    },
    {
        "category": "modules",
        "question": "What does the os module provide?",
        "options": [
            "Mathematical functions",
            "Date/time utilities",
            "Operating system interface",
            "Random number generation"
        ],
        "correct": 2,
        "explanation": "The correct answer is `Operating system interface`. Review this Python concept carefully."
    },
    {
        "category": "builtins",
        "question": "What is the output of:\n\n```python\nimport math\nprint(math.pi)\n```",
        "options": [
            "3.14",
            "3.141592653589793",
            "math.pi",
            "Error"
        ],
        "correct": 1,
        "explanation": "The `math` module provides mathematical functions. The answer is `3.141592653589793`."
    },
    {
        "category": "general",
        "question": "What is the correct syntax to create a single-line comment in Python?",
        "options": [
            "// This is a comment",
            "# This is a comment",
            "/* This is a comment */",
            "<!-- This is a comment -->"
        ],
        "correct": 1,
        "explanation": "The correct answer is `# This is a comment`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "Which of the following is NOT a valid way to start a Python comment?",
        "options": [
            "#",
            "//",
            "'''",
            "\"\"\""
        ],
        "correct": 1,
        "explanation": "The correct answer is `//`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "Which of the following is used to represent a comment in a Python script?",
        "options": [
            "//",
            "/",
            "#",
            "--"
        ],
        "correct": 2,
        "explanation": "The correct answer is `#`. Review this Python concept carefully."
    },
    {
        "category": "strings",
        "question": "What is the correct way to write a multi-line comment (docstring) in Python?",
        "options": [
            "// comment //",
            "# comment #",
            "'''comment'''",
            "/* comment */"
        ],
        "correct": 2,
        "explanation": "The correct answer is `'''comment'''`. Review this Python concept carefully."
    },
    {
        "category": "functions",
        "question": "Which keyword is used for defining a block of code in Python (e.g., a function body)?",
        "options": [
            "begin",
            "block",
            "do",
            "def (with indentation)"
        ],
        "correct": 3,
        "explanation": "The correct answer is `def (with indentation)`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "What symbol is used at the end of a statement in Python?",
        "options": [
            ";",
            "{}",
            ":",
            "Nothing — newline ends the statement"
        ],
        "correct": 3,
        "explanation": "The correct answer is `Nothing — newline ends the statement`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "What is the Python convention for naming constants?",
        "options": [
            "camelCase",
            "PascalCase",
            "ALL_CAPS_WITH_UNDERSCORES",
            "lowercase_with_underscores"
        ],
        "correct": 2,
        "explanation": "The correct answer is `ALL_CAPS_WITH_UNDERSCORES`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "What is a programming language?",
        "options": [
            "A natural language like English",
            "A medium designed to let humans give instructions to a computer",
            "A type of computer hardware",
            "A database management system"
        ],
        "correct": 1,
        "explanation": "The correct answer is `A medium designed to let humans give instructions to a computer`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "Which generation of programming language uses binary (0s and 1s) directly?",
        "options": [
            "2GL",
            "3GL",
            "1GL (Machine Language)",
            "4GL"
        ],
        "correct": 2,
        "explanation": "`and` returns the first falsy operand, or the last operand if all are truthy. The result is `1GL (Machine Language)`."
    },
    {
        "category": "general",
        "question": "What is an Assembly Language classified as?",
        "options": [
            "First Generation Language",
            "Second Generation Language",
            "Third Generation Language",
            "Fourth Generation Language"
        ],
        "correct": 1,
        "explanation": "The correct answer is `Second Generation Language`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "Which of the following is a 3GL programming language?",
        "options": [
            "SQL",
            "Assembly",
            "C++",
            "Prolog"
        ],
        "correct": 2,
        "explanation": "The correct answer is `C++`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "What is the main advantage of high-level languages over low-level languages?",
        "options": [
            "They execute faster",
            "They use less memory",
            "They are easier for humans to read and write",
            "They need no translation"
        ],
        "correct": 2,
        "explanation": "The correct answer is `They are easier for humans to read and write`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "What does a compiler do?",
        "options": [
            "Executes code line-by-line",
            "Translates the entire source code to machine code at once",
            "Debugs programs automatically",
            "Manages memory allocation"
        ],
        "correct": 1,
        "explanation": "The correct answer is `Translates the entire source code to machine code at once`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "What does an interpreter do?",
        "options": [
            "Translates all code before running",
            "Executes code line-by-line",
            "Only checks for syntax errors",
            "Converts code to assembly"
        ],
        "correct": 1,
        "explanation": "The correct answer is `Executes code line-by-line`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "Python is classified as which type of language?",
        "options": [
            "Machine Language",
            "Assembly Language",
            "Low-level Language",
            "High-level Language"
        ],
        "correct": 3,
        "explanation": "The correct answer is `High-level Language`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "Which of the following is an example of a 4GL?",
        "options": [
            "C++",
            "Java",
            "SQL",
            "Assembly"
        ],
        "correct": 2,
        "explanation": "The correct answer is `SQL`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "What is the main focus of 5th Generation Languages (5GL)?",
        "options": [
            "Database management",
            "Artificial Intelligence / constraint programming",
            "Web development",
            "Systems programming"
        ],
        "correct": 1,
        "explanation": "The correct answer is `Artificial Intelligence / constraint programming`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "Which of the following is NOT an advantage of machine language?",
        "options": [
            "Translation-free execution",
            "Very fast execution by CPU",
            "Easy for humans to understand and write",
            "Efficient memory use"
        ],
        "correct": 2,
        "explanation": "The correct answer is `Easy for humans to understand and write`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "What does 'portability' mean in the context of programming languages?",
        "options": [
            "The language runs only on one machine",
            "Programs can run on different types of machines without modification",
            "The code is written on a portable device",
            "The language is small in file size"
        ],
        "correct": 1,
        "explanation": "The correct answer is `Programs can run on different types of machines without modification`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "Which of the following is an example of a 5GL?",
        "options": [
            "Python",
            "Java",
            "Prolog",
            "COBOL"
        ],
        "correct": 2,
        "explanation": "The correct answer is `Prolog`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "Which generation of programming language is described as 'Very High-Level Language'?",
        "options": [
            "1GL",
            "2GL",
            "3GL",
            "4GL"
        ],
        "correct": 3,
        "explanation": "The correct answer is `4GL`. Review this Python concept carefully."
    },
    {
        "category": "general",
        "question": "What is the term for the process of finding and fixing errors in a program?",
        "options": [
            "Compiling",
            "Debugging",
            "Interpreting",
            "Executing"
        ],
        "correct": 1,
        "explanation": "`and` returns the first falsy operand, or the last operand if all are truthy. The result is `Debugging`."
    },
    {
        "category": "operators",
        "question": "What is the output of the following?\n\n```python\nnums = [1, 2, 3, 4, 5, 6]\nevens = [x for x in nums if x % 2 == 0]\nprint(evens)\n```",
        "options": [
            "[1,3,5]",
            "[2,4,6]",
            "[1,2,3,4,5,6]",
            "Error"
        ],
        "correct": 1,
        "explanation": "The `%` operator returns the remainder of division. The result is `[2,4,6]`."
    },
    {
        "category": "builtins",
        "question": "What is the output?\n\n```python\na = [1, 2, 3]\nb = a[:]\nb[0] = 99\nprint(a)\n```",
        "options": [
            "[99,2,3]",
            "[1,2,3]",
            "[99,99,99]",
            "Error"
        ],
        "correct": 1,
        "explanation": "Tracing through the code, the output is `[1,2,3]`."
    },
    {
        "category": "operators",
        "question": "What is the output?\n\n```python\nx = 10\ny = 3\nprint(x // y, x % y)\n```",
        "options": [
            "3 1",
            "3.33 1",
            "3 0",
            "4 1"
        ],
        "correct": 0,
        "explanation": "The `//` operator performs integer (floor) division, discarding the decimal. The result is `3 1`."
    },
    {
        "category": "lists",
        "question": "What is the output?\n\n```python\nwords = ['hi', 'hello', 'hey']\nwords.sort()\nprint(words)\n```",
        "options": [
            "['hi','hello','hey']",
            "['hello','hey','hi']",
            "['hey','hello','hi']",
            "Error"
        ],
        "correct": 1,
        "explanation": "sorted() returns a new sorted list. The result is `['hello','hey','hi']`."
    },
    {
        "category": "builtins",
        "question": "What is the output?\n\n```python\nd = {'name': 'Alice', 'age': 20}\nfor k in d:\n    print(k)\n```",
        "options": [
            "Alice 20",
            "name age",
            "name / age",
            "Error"
        ],
        "correct": 2,
        "explanation": "Tracing through the code, the output is `name / age`."
    },
    {
        "category": "strings",
        "question": "What is the output?\n\n```python\nprint('—'.join(['a', 'b', 'c']))\n```",
        "options": [
            "a b c",
            "abc",
            "a—b—c",
            "a-b-c"
        ],
        "correct": 2,
        "explanation": "Tracing through the code, the output is `a—b—c`."
    },
    {
        "category": "strings",
        "question": "What is the output?\n\n```python\ns = {1, 2, 3, 2, 1}\nprint(len(s))\n```",
        "options": [
            "5",
            "3",
            "2",
            "Error"
        ],
        "correct": 1,
        "explanation": "len() returns the number of items in an object. The answer is `3`."
    },
    {
        "category": "lists",
        "question": "What is the output?\n\n```python\ndef square(n):\n    return n * n\nresult = list(map(square, [1, 2, 3, 4]))\nprint(result)\n```",
        "options": [
            "[1,2,3,4]",
            "[2,4,6,8]",
            "[1,4,9,16]",
            "Error"
        ],
        "correct": 2,
        "explanation": "Tracing through the code, the output is `[1,4,9,16]`."
    },
    {
        "category": "builtins",
        "question": "What is the output?\n\n```python\nx = [0] * 4\nprint(x)\n```",
        "options": [
            "[0]",
            "[0,0,0,0]",
            "[0*4]",
            "Error"
        ],
        "correct": 1,
        "explanation": "Tracing through the code, the output is `[0,0,0,0]`."
    },
    {
        "category": "builtins",
        "question": "What is the output?\n\n```python\nprint('Python'.replace('n', 'n 3'))\n```",
        "options": [
            "Python 3",
            "Python3",
            "Python",
            "Pytho 3"
        ],
        "correct": 0,
        "explanation": "Tracing through the code, the output is `Python 3`."
    },
    {
        "category": "operators",
        "question": "What is the output?\n\n```python\ncount = 0\nfor i in range(10):\n    if i % 2 == 0:\n        count += 1\nprint(count)\n```",
        "options": [
            "4",
            "5",
            "6",
            "10"
        ],
        "correct": 1,
        "explanation": "The `%` operator returns the remainder of division. The result is `5`."
    },
    {
        "category": "lists",
        "question": "What is the output?\n\n```python\nprint(list(zip([1, 2, 3], ['a', 'b', 'c'])))\n```",
        "options": [
            "[(1,'a'),(2,'b'),(3,'c')]",
            "[1,'a',2,'b',3,'c']",
            "[[1,'a'],[2,'b'],[3,'c']]",
            "Error"
        ],
        "correct": 0,
        "explanation": "Tracing through the code, the output is `[(1,'a'),(2,'b'),(3,'c')]`."
    },
    {
        "category": "builtins",
        "question": "What is the output?\n\n```python\ntry:\n    x = int('abc')\nexcept ValueError:\n    print('Not a number')\n```",
        "options": [
            "abc",
            "0",
            "Not a number",
            "Error"
        ],
        "correct": 2,
        "explanation": "The `try` block contains code that might raise an exception; the `except` block handles it if one occurs."
    },
    {
        "category": "lists",
        "question": "What is the output?\n\n```python\nmy_list = list(range(1, 6))\nmy_list.reverse()\nprint(my_list)\n```",
        "options": [
            "[1,2,3,4,5]",
            "[5,4,3,2,1]",
            "[6,5,4,3,2]",
            "Error"
        ],
        "correct": 1,
        "explanation": "range(start, stop, step) generates numbers from start up to (but not including) stop. The result is `[5,4,3,2,1]`."
    },
    {
        "category": "builtins",
        "question": "What is the output?\n\n```python\nprint(3 in [1, 2, 3, 4])\n```",
        "options": [
            "3",
            "True",
            "False",
            "Error"
        ],
        "correct": 1,
        "explanation": "Tracing through the code, the output is `True`."
    },
    {
        "category": "general",
        "question": "Who developed Python Programming Language?",
        "options": [
            "Wick van Rossum",
            "Rasmus Lerdorf",
            "Guido van Rossum",
            "Niene Stom"
        ],
        "correct": 2,
        "explanation": "Python language is designed by a Dutch programmer Guido van Rossum in the Netherlands."
    },
    {
        "category": "general",
        "question": "Which type of Programming does Python support?",
        "options": [
            "object-oriented programming",
            "structured programming",
            "functional programming",
            "all of the mentioned"
        ],
        "correct": 3,
        "explanation": "Python is an interpreted programming language, which supports object-oriented, structured, and functional programming."
    },
    {
        "category": "general",
        "question": "Is Python case sensitive when dealing with identifiers?",
        "options": [
            "no",
            "yes",
            "machine dependent",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "Case is always significant while dealing with identifiers in python."
    },
    {
        "category": "files",
        "question": "Which of the following is the correct extension of the Python file?",
        "options": [
            ".python",
            ".pl",
            ".py",
            ".p"
        ],
        "correct": 2,
        "explanation": "‘.py’ is the correct extension of the Python file. Python programs can be written in any text editor. To save these programs we need to save in files with file extension ‘.py’."
    },
    {
        "category": "general",
        "question": "Is Python code compiled or interpreted?",
        "options": [
            "Python code is both compiled and interpreted",
            "Python code is neither compiled nor interpreted",
            "Python code is only compiled",
            "Python code is only interpreted"
        ],
        "correct": 0,
        "explanation": "Many languages have been implemented using both compilers and interpreters, including C, Pascal, and Python."
    },
    {
        "category": "general",
        "question": "All keywords in Python are in _________",
        "options": [
            "Capitalized",
            "lower case",
            "UPPER CASE",
            "None of the mentioned"
        ],
        "correct": 3,
        "explanation": "Most keywords are in lowercase, but some like True, False, and None are capitalized."
    },
    {
        "category": "operators",
        "question": "What will be the value of the following Python expression?\n\n```python\nprint(4 + 3 % 5)\n```",
        "options": [
            "7",
            "2",
            "4",
            "1"
        ],
        "correct": 0,
        "explanation": "In Python, the modulus operator % has higher precedence than addition +. So, the expression is evaluated as 4 + (3 % 5), which is 4 + 3 = 7."
    },
    {
        "category": "general",
        "question": "Which of the following is used to define a block of code in Python language?",
        "options": [
            "Indentation",
            "Key",
            "Brackets",
            "All of the mentioned"
        ],
        "correct": 0,
        "explanation": "In Python, to define a block of code we use indentation. Indentation refers to whitespaces at the beginning of the line."
    },
    {
        "category": "functions",
        "question": "Which keyword is used for function in Python language?",
        "options": [
            "Function",
            "def",
            "Fun",
            "Define"
        ],
        "correct": 1,
        "explanation": "The def keyword is used to create, (or define) a function in python."
    },
    {
        "category": "general",
        "question": "Which of the following character is used to give single-line comments in Python?",
        "options": [
            "//",
            "#",
            "!",
            "/"
        ],
        "correct": 1,
        "explanation": "To write single-line comments in Python use the Hash character (#) at the beginning of the line. It is also called number sign or pound sign. To write multi-line comments, close the text between triple quotes.\nExample: “”” comment\ntext “””"
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\ni = 1\nwhile True:\n    if i%3 == 0:\n        break\n    print(i)\n \n    i + = 1\n```",
        "options": [
            "1 2 3",
            "SyntaxError",
            "1 2",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "The output will be a SyntaxError because i + = 1 is invalid syntax in Python. There should be no space between + and =. The correct syntax is i += 1."
    },
    {
        "category": "functions",
        "question": "Which of the following functions can help us to find the version of python that we are currently working on?",
        "options": [
            "sys.version(1)",
            "sys.version(0)",
            "sys.version()",
            "sys.version"
        ],
        "correct": 3,
        "explanation": "The function sys.version can help us to find the version of python that we are currently working on. It also contains information on the build number and compiler used. For example, 3.5.2, 2.7.3 etc. this function also returns the current date, time, bits etc along with the version."
    },
    {
        "category": "functions",
        "question": "Python supports the creation of anonymous functions at runtime, using a construct called __________",
        "options": [
            "pi",
            "anonymous",
            "lambda",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "In Python, lambda functions are anonymous, meaning they don’t have a name. They are defined using the lambda keyword and can take any number of arguments but only have one expression. Lambdas are useful for creating small, throwaway functions quickly without formally defining them using def."
    },
    {
        "category": "general",
        "question": "What is the order of precedence in python?",
        "options": [
            "Exponential, Parentheses, Multiplication, Division, Addition, Subtraction",
            "Exponential, Parentheses, Division, Multiplication, Addition, Subtraction",
            "Parentheses, Exponential, Multiplication, Addition, Division, Subtraction",
            "Parentheses, Exponential, Multiplication, Division, Addition, Subtraction"
        ],
        "correct": 3,
        "explanation": "Python follows the PEMDAS rule (similar to BODMAS): Parentheses, Exponentiation, Multiplication/Division, then Addition/Subtraction. Operators at the same level are evaluated left to right."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code snippet if x=1? x<<2",
        "options": [
            "4",
            "2",
            "1",
            "8"
        ],
        "correct": 0,
        "explanation": "The binary form of 1 is 0001. The expression x<<2 implies we are performing bitwise left shift on x. This shift yields the value: 0100, which is the binary form of the number 4."
    },
    {
        "category": "general",
        "question": "What does pip stand for python?",
        "options": [
            "Pip Installs Python",
            "Pip Installs Packages",
            "Preferred Installer Program",
            "All of the mentioned"
        ],
        "correct": 2,
        "explanation": "pip is a package manager for python. Which is also called Preferred Installer Program."
    },
    {
        "category": "variables",
        "question": "Which of the following is true for variable names in Python?",
        "options": [
            "underscore and ampersand are the only two special characters allowed",
            "unlimited length",
            "all private members must have leading and trailing underscores",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "Python allows variable names of unlimited length. Private members usually have only a leading underscore, not both leading and trailing. The ampersand (&) is not permitted in variable names; only the underscore (_) is allowed as a special character."
    },
    {
        "category": "builtins",
        "question": "What are the values of the following Python expressions?\n\n```python\nprint(2**(3**2))\nprint((2**3)**2)\nprint(2**3**2)\n```",
        "options": [
            "512, 64, 512",
            "512, 512, 512",
            "64, 512, 64",
            "64, 64, 64"
        ],
        "correct": 0,
        "explanation": "Expression 1 is evaluated as: 2**9, which is equal to 512. Expression 2 is evaluated as 8**2, which is equal to 64. The last expression is evaluated as 2**(3**2). This is because the associativity of ** operator is from right to left. Hence the result of the third expression is 512."
    },
    {
        "category": "operators",
        "question": "Which of the following is the truncation division operator in Python?",
        "options": [
            "|",
            "//",
            "/",
            "%"
        ],
        "correct": 1,
        "explanation": "// is the operator for truncation division. It is called so because it returns only the integer part of the quotient, truncating the decimal part. For example: 20//3 = 6."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nl=[1, 0, 2, 0, 'hello', '', []]\nprint(list(filter(bool, l)))\n```",
        "options": [
            "[1, 0, 2, ‘hello’, ”, []]",
            "Error",
            "[1, 2, ‘hello’]",
            "[1, 0, 2, 0, ‘hello’, ”, []]"
        ],
        "correct": 2,
        "explanation": "The function filter(bool, l) removes all false elements from the list l, such as 0, ”, and []. The remaining true elements — 1, 2, and ‘hello’ — are returned as a new list."
    },
    {
        "category": "functions",
        "question": "Which of the following functions is a built-in function in python?",
        "options": [
            "factorial()",
            "print()",
            "seed()",
            "sqrt()"
        ],
        "correct": 1,
        "explanation": "The function seed is a function which is present in the random module. The functions sqrt and factorial are a part of the math module. The print function is a built-in function which prints a value directly to the system output."
    },
    {
        "category": "functions",
        "question": "Which of the following is the use of id() function in python?",
        "options": [
            "Every object doesn’t have a unique id",
            "Id returns the identity of the object",
            "All of the mentioned",
            "None of the mentioned"
        ],
        "correct": 1,
        "explanation": "The id() function in Python returns the identity of an object. This identity is a unique integer (or memory address) that remains constant for the object during its lifetime. Every object in Python has a unique id, which helps in comparing object references."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python function?\n\n```python\nprint(min(max(False,-3,-4), 2,7))\n```",
        "options": [
            "-4",
            "-3",
            "2",
            "False"
        ],
        "correct": 3,
        "explanation": "The max(False, -3, -4) evaluates to 0 because False is treated as 0, and 0 is greater than -3 and -4. Then, min(0, 2, 7) returns 0. Since 0 is equivalent to False, the output is False."
    },
    {
        "category": "variables",
        "question": "Which of the following is not a core data type in Python programming?",
        "options": [
            "Tuples",
            "Lists",
            "Class",
            "Dictionary"
        ],
        "correct": 2,
        "explanation": "Class is a user-defined data type."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python expression if x=56.236?\n\n```python\nprint(\"%.2f\"%x)\n```",
        "options": [
            "56.236",
            "56.23",
            "56.0000",
            "56.24"
        ],
        "correct": 3,
        "explanation": "The expression shown above rounds off the given number to the number of decimal places specified. Since the expression given specifies rounding off to two decimal places, the output of this expression will be 56.24. Had the value been x=56.234 (last digit being any number less than 5), the output would have been 56.23."
    },
    {
        "category": "general",
        "question": "Which of these is the definition for packages in Python?",
        "options": [
            "A set of main modules",
            "A folder of python modules",
            "A number of files containing Python definitions and statements",
            "A set of programs making use of Python modules"
        ],
        "correct": 1,
        "explanation": "In Python, a package is defined as a folder containing multiple Python modules, along with a special __init__.py file that indicates the directory is a package. Packages help in organizing related modules into a single directory hierarchy, making the codebase more modular and manageable."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python function?\n\n```python\nprint(len([\"hello\",2, 4, 6]))\n```",
        "options": [
            "Error",
            "6",
            "4",
            "3"
        ],
        "correct": 2,
        "explanation": "The len() function returns the number of elements in the list, regardless of their types. In this case, the list [“hello”, 2, 4, 6] contains four elements, so len() returns 4."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = 'abcd'\nfor i in x:\n    print(i.upper())\n```",
        "options": [
            "/ a / B / C / D",
            "a b c d",
            "error",
            "/ A / B / C / D"
        ],
        "correct": 3,
        "explanation": "In this code, x = ‘abcd’ is iterated over, and for each character i, i.upper() is called. The upper() method returns a new string where all characters are converted to uppercase. Each uppercase character is then printed on a new line. Therefore, the output is A, B, C, D, one per line."
    },
    {
        "category": "general",
        "question": "What is the order of namespaces in which Python looks for an identifier?",
        "options": [
            "Python first searches the built-in namespace, then the global namespace and finally the local namespace",
            "Python first searches the built-in namespace, then the local namespace and finally the global namespace",
            "Python first searches the local namespace, then the global namespace and finally the built-in namespace",
            "Python first searches the global namespace, then the local namespace and finally the built-in namespace"
        ],
        "correct": 2,
        "explanation": "When Python encounters an identifier (like a variable or function name), it follows the LEGB rule to resolve it. It first looks in the Local namespace (inside the current function), then in the Enclosing namespace (if it’s a nested function), followed by the Global namespace (top-level of the module), and finally the Built-in namespace (predefined functions like len(), sum(), etc.). So, the correct search order for namespaces is: local → global → built-in."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nfor i in [1, 2, 3, 4][::-1]:\n    print(i, end=' ')\n```",
        "options": [
            "4 3 2 1",
            "error",
            "1 2 3 4",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The expression [1, 2, 3, 4][::-1] uses slicing with a step of -1 to reverse the list. So the list becomes [4, 3, 2, 1]. The for loop iterates over this reversed list and prints each element, with end=’ ‘ ensuring the output is on one line with spaces in between."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python statement?\n\n```python\nprint(\"a\"+\"bc\")\n```",
        "options": [
            "bc",
            "abc",
            "a",
            "bca"
        ],
        "correct": 1,
        "explanation": "In Python, the + operator is used for string concatenation. “a” + “bc” joins the two strings together into a single string “abc”."
    },
    {
        "category": "functions",
        "question": "Which function is called when the following Python program is executed?\n\n```python\nf = foo()\nformat(f)\n```",
        "options": [
            "str()",
            "format()",
            "__str__()",
            "__format__()"
        ],
        "correct": 3,
        "explanation": "When format(f) is executed, Python internally invokes the special method f.__format__(). This method controls how the object is formatted. The __str__() method is used by str(f), not format(f)."
    },
    {
        "category": "general",
        "question": "Which one of the following is not a keyword in Python language?",
        "options": [
            "pass",
            "eval",
            "assert",
            "nonlocal"
        ],
        "correct": 1,
        "explanation": "eval can be used as a variable."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nclass tester:\n    def __init__(self, id):\n        self.id = str(id)\n        id=\"224\"\n \ntemp = tester(12)\nprint(temp.id)\n```",
        "options": [
            "12",
            "224",
            "None",
            "Error"
        ],
        "correct": 0,
        "explanation": "When the tester class is instantiated with temp = tester(12), the __init__ method is called. The id argument is passed as 12, and inside the __init__ method, self.id is assigned the string value of id, which is “12”. However, the local variable id is reassigned to “224”, but this change does not affect self.id, which retains the value “12”."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python program?\n\n```python\ndef foo(x):\n    x[0] = ['def']\n    x[1] = ['abc']\n    return id(x)\nq = ['abc', 'def']\nprint(id(q) == foo(q))\n```",
        "options": [
            "Error",
            "None",
            "False",
            "True"
        ],
        "correct": 3,
        "explanation": "The list q is passed by reference to the function foo, so both x and q refer to the same object in memory. The id() function returns the memory address of the object, which remains unchanged. Therefore, id(q) == foo(q) evaluates to True."
    },
    {
        "category": "modules",
        "question": "Which module in the python standard library parses options received from the command line?",
        "options": [
            "getarg",
            "getopt",
            "main",
            "os"
        ],
        "correct": 1,
        "explanation": "The getopt module in Python’s standard library is used to parse command-line options and arguments. It allows the script to accept flags and parameters (like -h or –help) similar to those in shell scripts. For example:\nimport getopt, sys\nopts, args = getopt.getopt(sys.argv[1:], \"h\", [\"help\"])\nThis line parses short option -h and long option –help."
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python program?\n\n```python\nz=set('abc')\nz.add('san')\nz.update(set(['p', 'q']))\nprint(z)\n```",
        "options": [
            "{‘a’, ‘c’, ‘c’, ‘p’, ‘q’, ‘s’, ‘a’, ‘n’}",
            "{‘abc’, ‘p’, ‘q’, ‘san’}",
            "{‘a’, ‘b’, ‘c’, ‘p’, ‘q’, ‘san’}",
            "{‘a’, ‘b’, ‘c’, [‘p’, ‘q’], ‘san}"
        ],
        "correct": 2,
        "explanation": "The code shown first adds the element ‘san’ to the set z. The set z is then updated and two more elements, namely, ‘p’ and ‘q’ are added to it. Hence the output is: {‘a’, ‘b’, ‘c’, ‘p’, ‘q’, ‘san’}"
    },
    {
        "category": "operators",
        "question": "What arithmetic operators cannot be used with strings in Python?",
        "options": [
            "–",
            "+",
            "All of the mentioned"
        ],
        "correct": 0,
        "explanation": "+ is used to concatenate and * is used to multiply strings."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"abc. DEF\".capitalize())\n```",
        "options": [
            "Abc. def",
            "abc. def",
            "Abc. Def",
            "ABC. DEF"
        ],
        "correct": 0,
        "explanation": "The first letter of the string is converted to uppercase and the others are converted to lowercase."
    },
    {
        "category": "variables",
        "question": "Which of the following statements is used to create an empty set in Python?",
        "options": [
            "( )",
            "[ ]",
            "{ }",
            "set()"
        ],
        "correct": 3,
        "explanation": "{ } creates a dictionary not a set. Only set() creates an empty set."
    },
    {
        "category": "lists",
        "question": "What will be the value of ‘result’ in following Python program?\n\n```python\nlist1 = [1,2,3,4]\nlist2 = [2,4,5,6]\nlist3 = [2,6,7,8]\nresult = list()\nresult.extend(i for i in list1 if i not in (list2+list3) and i not in result)\nresult.extend(i for i in list2 if i not in (list1+list3) and i not in result)\nresult.extend(i for i in list3 if i not in (list1+list2) and i not in result)\nprint(result)\n```",
        "options": [
            "[1, 3, 5, 7, 8]",
            "[1, 7, 8]",
            "[1, 2, 4, 7, 8]",
            "error"
        ],
        "correct": 0,
        "explanation": "Here, ‘result’ is a list which is extending three times. When first time ‘extend’ function is called for ‘result’, the inner code generates a generator object, which is further used in ‘extend’ function. This generator object contains the values which are in ‘list1’ only (not in ‘list2’ and ‘list3’).\nSame is happening in second and third call of ‘extend’ function in these generator object contains values only in ‘list2’ and ‘list3’ respectively.\nSo, ‘result’ variable will contain elements which are only in one list (not more than 1 list)."
    },
    {
        "category": "lists",
        "question": "To add a new element to a list we use which Python command?",
        "options": [
            "list1.addEnd(5)",
            "list1.addLast(5)",
            "list1.append(5)",
            "list1.add(5)"
        ],
        "correct": 2,
        "explanation": "We use the function append to add an element to the list."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('*', \"abcde\".center(6), '*', sep='')\n```",
        "options": [
            "*  abcde",
            "*abcde",
            "* abcde",
            "* abcde"
        ],
        "correct": 1,
        "explanation": "Padding is done towards the right-hand-side first when the final string is of even length."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nlist1 = [1, 3]\nlist2 = list1\nlist1[0] = 4\nprint(list2)\n```",
        "options": [
            "[1, 4]",
            "[1, 3, 4]",
            "[4, 3]",
            "[1, 3]"
        ],
        "correct": 2,
        "explanation": "In the code, list2 = list1 creates a reference to the same list in memory. So when list1[0] is changed to 4, list2 also reflects that change. The output is [4, 3]."
    },
    {
        "category": "functions",
        "question": "Which one of the following is the use of function in python?",
        "options": [
            "Functions don’t provide better modularity for your application",
            "you can’t also create your own functions",
            "Functions are reusable pieces of programs",
            "All of the mentioned"
        ],
        "correct": 2,
        "explanation": "Functions are reusable pieces of programs. They allow you to give a name to a block of statements, allowing you to run that block using the specified name anywhere in your program and any number of times."
    },
    {
        "category": "output",
        "question": "Which of the following Python statements will result in the output: 6?\n\n```python\nA = [[1, 2, 3],\n     [4, 5, 6],\n     [7, 8, 9]]\n```",
        "options": [
            "A[2][1]",
            "A[1][2]",
            "A[3][2]",
            "A[2][3]"
        ],
        "correct": 1,
        "explanation": "The output that is required is 6, that is, row 2, item 3. This position is represented by the statement: A[1][2]."
    },
    {
        "category": "general",
        "question": "What is the maximum possible length of an identifier in Python?",
        "options": [
            "79 characters",
            "31 characters",
            "63 characters",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "In Python, identifiers can be of any length. There is no fixed maximum, though extremely long names are not practical."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python program?\n\n```python\ni = 0\nwhile i < 5:\n    print(i)\n    i += 1\n    if i == 3:\n        break\nelse:\n    print(0)\n```",
        "options": [
            "error",
            "/ 0 / 1 / 2 / 3 / 0",
            "/ 0 / 1 / 2",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "In this code, the while loop iterates from i = 0 to i = 2, printing the values of i. When i becomes 3, the if i == 3 condition is met, and the break statement is executed, which terminates the loop early. Since the loop was terminated using break, the else block is not executed. Therefore, the output is 0, 1, and 2."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = 'abcd'\nfor i in range(len(x)):\n    print(i)\n```",
        "options": [
            "error",
            "1 2 3 4",
            "a b c d",
            "0 1 2 3"
        ],
        "correct": 3,
        "explanation": "i takes values 0, 1, 2 and 3."
    },
    {
        "category": "functions",
        "question": "What are the two main types of functions in Python?",
        "options": [
            "System function",
            "Custom function",
            "Built-in function & User defined function",
            "User function"
        ],
        "correct": 2,
        "explanation": "Built-in functions and user defined ones. The built-in functions are part of the Python language. Examples are: dir(), len() or abs(). The user defined functions are functions created with the def keyword."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python program?\n\n```python\ndef addItem(listParam):\n    listParam += [1]\n \nmylist = [1, 2, 3, 4]\naddItem(mylist)\nprint(len(mylist))\n```",
        "options": [
            "5",
            "8",
            "2",
            "1"
        ],
        "correct": 0,
        "explanation": "The function addItem uses += [1] to modify the list passed to it. Since lists are mutable and passed by reference, mylist is modified directly. After appending 1, it becomes [1, 2, 3, 4, 1], so its length is 5."
    },
    {
        "category": "tuples_dicts",
        "question": "Which of the following is a Python tuple?",
        "options": [
            "{1, 2, 3}",
            "{}",
            "[1, 2, 3]",
            "(1, 2, 3)"
        ],
        "correct": 3,
        "explanation": "A tuple in Python is an immutable sequence type and is defined using round brackets ( ). For example, (1, 2, 3) is a tuple."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nz=set('abc$de')\nprint('a' in z)\n```",
        "options": [
            "Error",
            "True",
            "False",
            "No output"
        ],
        "correct": 1,
        "explanation": "The code shown above is used to check whether a particular item is a part of a given set or not. Since ‘a’ is a part of the set z, the output is true. Note that this code would result in an error in the absence of the quotes."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python expression?\n\n```python\nprint(round(4.576))\n```",
        "options": [
            "4",
            "4.6",
            "5",
            "4.5"
        ],
        "correct": 2,
        "explanation": "The round() function rounds the number to the nearest integer by default. Since 4.576 is closer to 5 than 4, round(4.576) returns 5. Therefore, the output is 5."
    },
    {
        "category": "strings",
        "question": "Which of the following is a feature of Python DocString?",
        "options": [
            "In Python all functions should have a docstring",
            "Docstrings can be accessed by the __doc__ attribute on objects",
            "It provides a convenient way of associating documentation with Python modules, functions, classes, and methods",
            "All of the mentioned"
        ],
        "correct": 3,
        "explanation": "Python has a nifty feature called documentation strings, usually referred to by its shorter name docstrings. DocStrings are an important tool that you should make use of since it helps to document the program better and makes it easier to understand."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"Hello {0[0]} and {0[1]}\".format(('foo', 'bin')))\n```",
        "options": [
            "Hello (‘foo’, ‘bin’) and (‘foo’, ‘bin’)",
            "Error",
            "Hello foo and bin",
            "None of the mentioned"
        ],
        "correct": 2,
        "explanation": "The output of the code is Hello foo and bin. Here, the format string uses index-based access to retrieve elements from the tuple passed as a single argument. {0[0]} and {0[1]} access the first and second elements of the tuple respectively."
    },
    {
        "category": "builtins",
        "question": "What is output of print(math.pow(3, 2))?",
        "options": [
            "9.0",
            "None",
            "9",
            "None of the mentioned"
        ],
        "correct": 0,
        "explanation": "math.pow() returns a floating point number."
    },
    {
        "category": "functions",
        "question": "Which of the following is the use of id() function in python?",
        "options": [
            "Every object in Python doesn’t have a unique id",
            "In Python Id function returns the identity of the object",
            "None of the mentioned",
            "All of the mentioned"
        ],
        "correct": 1,
        "explanation": "Each object in Python has a unique id. The id() function returns the object’s id."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = [[0], [1]]\nprint((' '.join(list(map(str, x))),))\n```",
        "options": [
            "01",
            "[0] [1]",
            "(’01’)",
            "(‘[0] [1]’,)"
        ],
        "correct": 3,
        "explanation": "In this code, map(str, x) converts each inner list [0] and [1] into strings: “[0]” and “[1]”. Then ‘ ‘.join(…) creates the string “[0] [1]”. Finally, it is wrapped in a tuple using the comma syntax, resulting in (‘[0] [1]’,)."
    },
    {
        "category": "general",
        "question": "The process of pickling in Python includes ____________",
        "options": [
            "conversion of a Python object hierarchy into byte stream",
            "conversion of a datatable into a list",
            "conversion of a byte stream into Python object hierarchy",
            "conversion of a list into a datatable"
        ],
        "correct": 0,
        "explanation": "Pickling is the process of serializing a Python object, that is, conversion of a Python object hierarchy into a byte stream. The reverse of this process is known as unpickling."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef foo():\n    try:\n        return 1\n    finally:\n        return 2\nk = foo()\nprint(k)\n```",
        "options": [
            "error, there is more than one return statement in a single try-finally block",
            "3",
            "2",
            "1"
        ],
        "correct": 2,
        "explanation": "In Python, if both the try block and the finally block contain return statements, the return in the finally block overrides the one in the try block. So, even though return 1 is in the try, the function ends up returning 2 because of the finally block."
    },
    {
        "category": "general",
        "question": "Is Python case sensitive when dealing with identifiers?",
        "options": [
            "yes",
            "no",
            "machine dependent",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "Yes, Python is case sensitive. For example, Variable, variable, and VARIABLE are all treated as different identifiers."
    },
    {
        "category": "general",
        "question": "What is the maximum possible length of an identifier?",
        "options": [
            "31 characters",
            "63 characters",
            "79 characters",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "In Python, identifiers can be of any length. There is no fixed maximum, though extremely long names are not practical."
    },
    {
        "category": "general",
        "question": "Which of the following is not allowed in Python?",
        "options": [
            "_a = 1",
            "__a = 1",
            "__str__ = 1",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "All the given statements are valid in Python and will run without errors. However, using names like __str__ can reduce readability or interfere with built-in functionality."
    },
    {
        "category": "general",
        "question": "Which of the following is an invalid variable?",
        "options": [
            "my_string_1",
            "1st_string",
            "foo",
            "_"
        ],
        "correct": 1,
        "explanation": "Variable names in Python cannot start with a digit. Since 1st_string begins with the digit 1, it is invalid. The other options follow Python’s variable naming rules, where names can start with letters or underscores and can include digits after the first character."
    },
    {
        "category": "variables",
        "question": "Why are local variable names beginning with an underscore discouraged?",
        "options": [
            "they are used to indicate a private variables of a class",
            "they confuse the interpreter",
            "they are used to indicate global variables",
            "they slow down execution"
        ],
        "correct": 0,
        "explanation": "As Python has no concept of private variables, leading underscores are used to indicate variables that must not be accessed from outside the class."
    },
    {
        "category": "general",
        "question": "Which of the following is not a keyword in Python?",
        "options": [
            "eval",
            "assert",
            "nonlocal",
            "pass"
        ],
        "correct": 0,
        "explanation": "eval is a built-in function, not a keyword. The others (assert, nonlocal, and pass) are Python keywords."
    },
    {
        "category": "general",
        "question": "All keywords in Python are in _________",
        "options": [
            "lower case",
            "UPPER CASE",
            "Capitalized",
            "None of the mentioned"
        ],
        "correct": 3,
        "explanation": "Most keywords are in lowercase, but some like True, False, and None are capitalized."
    },
    {
        "category": "variables",
        "question": "Which of the following is true for variable names in Python?",
        "options": [
            "unlimited length",
            "all private members must have leading and trailing underscores",
            "underscore and ampersand are the only two special characters allowed",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "Python allows variable names of unlimited length. Private members usually have only a leading underscore, not both leading and trailing. The ampersand (&) is not permitted in variable names; only the underscore (_) is allowed as a special character."
    },
    {
        "category": "general",
        "question": "Which of the following is an invalid statement?",
        "options": [
            "abc = 1,000,000",
            "a b c = 1000 2000 3000",
            "a,b,c = 1000, 2000, 3000",
            "a_b_c = 1,000,000"
        ],
        "correct": 1,
        "explanation": "In Python, variable names cannot have spaces between them, so a b c = 1000 2000 3000 is invalid syntax."
    },
    {
        "category": "variables",
        "question": "Which of the following cannot be a variable name in Python?",
        "options": [
            "__init__",
            "in",
            "it",
            "on"
        ],
        "correct": 1,
        "explanation": "in is a reserved keyword in Python used for membership testing and loops, so it cannot be used as a variable name. The other options (__init__, it, on) are valid identifiers."
    },
    {
        "category": "operators",
        "question": "Which is the correct operator for power(xy) in Python?",
        "options": [
            "x^y",
            "x**y",
            "x^^y",
            "None of the mentioned"
        ],
        "correct": 1,
        "explanation": "In python, the power operator is x**y. For example, 2**3=8 results in 8."
    },
    {
        "category": "operators",
        "question": "Which one of these is floor division?",
        "options": [
            "/",
            "//",
            "%",
            "None of the mentioned"
        ],
        "correct": 1,
        "explanation": "The // operator in Python performs floor division, which returns the largest integer less than or equal to the division result. For example, 5 // 2 results in 2, not 2.5. The / operator, on the other hand, performs true division and returns a float (5 / 2 = 2.5). To get the integer result without the fractional part, use //."
    },
    {
        "category": "operators",
        "question": "What is the order of precedence in python? i) Parentheses ii) Exponential iii) Multiplication iv) Division v) Addition vi) Subtraction",
        "options": [
            "i,ii,iii,iv,v,vi",
            "ii,i,iii,iv,v,vi",
            "ii,i,iv,iii,v,vi",
            "i,ii,iii,v,vi,iv"
        ],
        "correct": 0,
        "explanation": "Python follows the PEMDAS rule (similar to BODMAS): Parentheses, Exponentiation, Multiplication/Division, then Addition/Subtraction. Operators at the same level are evaluated left to right."
    },
    {
        "category": "operators",
        "question": "What is the answer to this expression, 22 % 3 is?",
        "options": [
            "7",
            "1",
            "0",
            "5"
        ],
        "correct": 1,
        "explanation": "The modulus operator (%) returns the remainder when one number is divided by another. In this case, 22 % 3 gives the remainder 1 (since 22 divided by 3 is 7 with a remainder of 1)."
    },
    {
        "category": "strings",
        "question": "Mathematical operations be directly performed on a string in Python without conversion.",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "In Python, you cannot perform mathematical operations like addition, subtraction, multiplication, or division directly on a string. To perform arithmetic operations, you must first convert the string to a numerical type (e.g., int or float). Otherwise, Python will raise a TypeError."
    },
    {
        "category": "operators",
        "question": "Operators with the same precedence are evaluated in which manner?",
        "options": [
            "Left to Right",
            "Right to Left",
            "Can’t say",
            "None of the mentioned"
        ],
        "correct": 2,
        "explanation": "In Python language, most of the operators with the same precedence are evaluated with left to right such as a lot of binary operators. However, exponent operator, unary operators, ternary, and assignment operators are evaluated from right to left."
    },
    {
        "category": "output",
        "question": "What is the output of this expression, 3*1**3?",
        "options": [
            "27",
            "9",
            "3",
            "1"
        ],
        "correct": 2,
        "explanation": "In Python, the exponentiation operator (**) has higher precedence than multiplication (*). Therefore, the expression is evaluated as 1 ** 3 first, which equals 1. Then, 3 * 1 is evaluated, giving the final result of 3."
    },
    {
        "category": "general",
        "question": "Which one of the following has the same precedence level?",
        "options": [
            "Addition and Subtraction",
            "Multiplication, Division and Addition",
            "Multiplication, Division, Addition and Subtraction",
            "Addition and Multiplication"
        ],
        "correct": 0,
        "explanation": "In Python, Addition (+) and Subtraction (-) operators have the same precedence level. Similarly, Multiplication (*) and Division (/) operators also share the same precedence level, but they are evaluated before addition and subtraction due to their higher precedence."
    },
    {
        "category": "builtins",
        "question": "The expression int(x) implies that the value of variable x is converted to integer.",
        "options": [
            "True",
            "False"
        ],
        "correct": 0,
        "explanation": "The expression int(x) explicitly converts the value of variable x to the integer data type. This is an example of explicit type conversion in Python."
    },
    {
        "category": "general",
        "question": "Which one of the following has the highest precedence in the expression?",
        "options": [
            "Exponential",
            "Addition",
            "Multiplication",
            "Parentheses"
        ],
        "correct": 3,
        "explanation": "The Parentheses () have the highest precedence in Python, followed by Exponentiation **, then Multiplication and Division, and finally Addition and Subtraction. This order is known as PEMDAS (Parentheses, Exponentiation, Multiplication/Division, Addition/Subtraction)."
    },
    {
        "category": "variables",
        "question": "Which of the following is not a core data type in Python?",
        "options": [
            "List",
            "Dictionary",
            "Tuple",
            "Class"
        ],
        "correct": 3,
        "explanation": "Classes are user-defined data types, while lists, dictionaries, and tuples are built-in (core) data types in Python."
    },
    {
        "category": "functions",
        "question": "Given a function that does not return any value, what is the default return value when it is executed in the Python shell?",
        "options": [
            "int",
            "bool",
            "void",
            "None"
        ],
        "correct": 3,
        "explanation": "If a function does not explicitly return a value, Python returns None by default. The type of None is NoneType."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nstr = \"hello\"\nprint(str[:2])\n```",
        "options": [
            "he",
            "lo",
            "olleh",
            "hello"
        ],
        "correct": 0,
        "explanation": "The code str[:2] slices the string from the beginning (index 0) up to, but not including, index 2. This results in the substring “he”."
    },
    {
        "category": "general",
        "question": "Which of the following will run without errors?",
        "options": [
            "round(45.8)",
            "round(6352.898,2,5)",
            "round()",
            "round(7463.123,2,1)"
        ],
        "correct": 0,
        "explanation": "The round() function in Python takes one or two values. It gives an error if more than two values are passed. You can type help(round) in the Python shell to see more about how it works."
    },
    {
        "category": "functions",
        "question": "What is the return type of the id() function in Python?",
        "options": [
            "int",
            "float",
            "bool",
            "dict"
        ],
        "correct": 0,
        "explanation": "The id() function returns a unique integer that shows the memory address of an object. You can use help(id) in the Python shell to learn more."
    },
    {
        "category": "general",
        "question": "In Python, variable types are not explicitly declared—they are inferred at runtime. Consider the following incomplete operation:\n\n```python\nx = 13 ? 2\nThe objective is to ensure that x has an integer value. Select all options that achieve this (Python 3.x):\n```",
        "options": [
            "x = 13 // 2",
            "x = int(13 / 2)",
            "x = 13 % 2",
            "All of the mentioned"
        ],
        "correct": 3,
        "explanation": "x = 13 // 2 → Floor division returns 6 (an integer).\nx = int(13 / 2) → Regular division returns 6.5, and int() converts it to 6.\nx = 13 % 2 → Modulus returns the remainder 1, which is also an integer.\nAll three assign an integer value to x, so all are valid in Python 3.x."
    },
    {
        "category": "general",
        "question": "What error occurs when you execute the following Python code snippet?\n\n```python\napple = mango\n```",
        "options": [
            "SyntaxError",
            "NameError",
            "ValueError",
            "TypeError"
        ],
        "correct": 1,
        "explanation": "The variable mango is not defined before it is used, so Python raises a NameError indicating that the name is not recognized."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code snippet?\n\n```python\ndef example(a):\n    a = a + '2'\n     a = a*2\n    return a\nexample(\"hello\")\n```",
        "options": [
            "Indentation Error",
            "Cannot perform mathematical operation on strings",
            "hello2",
            "hello2hello2"
        ],
        "correct": 0,
        "explanation": "The line a = a*2 has an extra space at the beginning, which makes the indentation uneven. Python needs all lines in a block to be properly indented. This causes an Indentation Error, and the code won’t run."
    },
    {
        "category": "variables",
        "question": "What data type is the object below?\n\n```python\nL = [1, 23, 'hello', 1]\n```",
        "options": [
            "list",
            "dictionary",
            "array",
            "tuple"
        ],
        "correct": 0,
        "explanation": "The variable L is enclosed in square brackets [], which defines a list in Python. Lists can hold multiple data types, such as integers and strings."
    },
    {
        "category": "variables",
        "question": "In Python, which core data type is used to store values in the form of key–value pairs?",
        "options": [
            "list",
            "tuple",
            "class",
            "dictionary"
        ],
        "correct": 3,
        "explanation": "A dictionary is a built-in Python data type that stores data in the form of key–value pairs. It allows fast lookups and efficient data organization based on unique keys."
    },
    {
        "category": "general",
        "question": "Which of the following will cause a SyntaxError in Python?",
        "options": [
            "‘”Once upon a time…”, she said.’",
            "“He said, ‘Yes!'”",
            "‘3\\’",
            "”’That’s okay”’"
        ],
        "correct": 2,
        "explanation": "‘3\\’ is not valid because the backslash escapes the closing quote, but there is no character after it. This makes Python throw a SyntaxError."
    },
    {
        "category": "functions",
        "question": "The following is displayed by a print function call. Select all of the function calls that result in this output. tom dick harry",
        "options": [
            "/ print('''tom / \\ndick / \\nharry''')",
            "print(”’tomdickharry”’)",
            "print(‘tom\\ndick\\nharry’)",
            "/ print('tom / dick / harry')"
        ],
        "correct": 2,
        "explanation": "The \\n adds a new line. So, print(‘tom\\ndick\\nharry’) will display the words on separate lines."
    },
    {
        "category": "operators",
        "question": "What is the average value of the following Python code snippet?\n\n```python\ngrade1 = 80\ngrade2 = 90\naverage = (grade1 + grade2) / 2\nprint(average)\n```",
        "options": [
            "85.0",
            "85.1",
            "95.0",
            "95.1"
        ],
        "correct": 0,
        "explanation": "The expression (grade1 + grade2) / 2 becomes (80 + 90) / 2 = 170 / 2, which evaluates to 85.0. In Python 3, the / operator performs floating-point division, so the result includes a decimal."
    },
    {
        "category": "output",
        "question": "Which of the following will print this output? hello-how-are-you",
        "options": [
            "print(‘hello’, ‘how’, ‘are’, ‘you’)",
            "print(‘hello’, ‘how’, ‘are’, ‘you’ + ‘-‘ * 4)",
            "print(‘hello-‘ + ‘how-are-you’)",
            "print(‘hello’ + ‘-‘ + ‘how’ + ‘-‘ + ‘are’ + ‘you’)"
        ],
        "correct": 2,
        "explanation": "The code:\nprint('hello-' + 'how-are-you')\ncorrectly concatenates the strings with hyphens, resulting in the output hello-how-are-you. Other variations either insert spaces or miss a hyphen between words."
    },
    {
        "category": "functions",
        "question": "What is the return type of trunc() in Python?",
        "options": [
            "int",
            "bool",
            "float",
            "None"
        ],
        "correct": 0,
        "explanation": "The trunc() function removes the decimal part of a number and returns an integer. For example, trunc(4.7) returns 4."
    },
    {
        "category": "operators",
        "question": "What is the output of print 0.1 + 0.2 == 0.3?",
        "options": [
            "True",
            "False",
            "Machine dependent",
            "Error"
        ],
        "correct": 1,
        "explanation": "Due to the limitations of floating-point representation in binary, neither 0.1, 0.2, nor 0.3 can be represented precisely. This leads to a small rounding error when adding 0.1 and 0.2, causing the result to be slightly different from 0.3. Therefore, 0.1 + 0.2 == 0.3 evaluates to False."
    },
    {
        "category": "general",
        "question": "Which of the following is not a complex number?",
        "options": [
            "k = 2 + 3j",
            "k = complex(2, 3)",
            "k = 2 + 3l",
            "k = 2 + 3J"
        ],
        "correct": 2,
        "explanation": "In Python, complex numbers are represented using j or J (e.g., 2 + 3j or complex(2, 3)). However, l (or L) is used to denote a long integer in some contexts, not a complex number. Therefore, k = 2 + 3l is not a complex number."
    },
    {
        "category": "general",
        "question": "What is the type of inf?",
        "options": [
            "Boolean",
            "Integer",
            "Float",
            "Complex"
        ],
        "correct": 2,
        "explanation": "In Python, inf represents infinity, which is a special case of floating-point numbers. It can be created using float(‘inf’) or directly as inf. Thus, the type of inf is float."
    },
    {
        "category": "general",
        "question": "What does ~4 evaluate to?",
        "options": [
            "-5",
            "-4",
            "-3",
            "+3"
        ],
        "correct": 0,
        "explanation": "In Python, the ~ operator is the bitwise NOT operator. It inverts the bits of the number. The expression ~x is equivalent to -(x + 1). For x = 4, ~4 evaluates to -5."
    },
    {
        "category": "general",
        "question": "What does ~~~~~~5 evaluate to?",
        "options": [
            "+5",
            "-11",
            "+11",
            "-5"
        ],
        "correct": 0,
        "explanation": "The ~ operator inverts the bits of a number and is equivalent to -(x + 1). When applied twice (~~x), it cancels out, returning the original number. Since ~x is applied six times, it effectively results in the same value as x. Therefore, ~~~~~~5 evaluates to 5."
    },
    {
        "category": "general",
        "question": "Which of the following is incorrect?",
        "options": [
            "x = 30963",
            "x = 0x4f5",
            "x = 19023",
            "x = 03964"
        ],
        "correct": 3,
        "explanation": "In Python, numbers starting with a 0 are considered octal numbers (base 8). However, octal numbers can only contain digits from 0 to 7. Since 9 is not a valid digit in an octal number, 03964 is incorrect."
    },
    {
        "category": "operators",
        "question": "What is the result of cmp(3, 1)?",
        "options": [
            "1",
            "0",
            "True",
            "False"
        ],
        "correct": 0,
        "explanation": "The cmp(x, y) function compares two values, returning 1 if x > y, 0 if x == y, and -1 if x < y. Since 3 > 1, the result of cmp(3, 1) is 1."
    },
    {
        "category": "general",
        "question": "Which of the following is incorrect in Python?",
        "options": [
            "float(‘inf’)",
            "float(‘nan’)",
            "float(’56’+’78’)",
            "float(’12+34′)"
        ],
        "correct": 3,
        "explanation": "In Python, float() can convert strings representing valid floating-point numbers, such as ‘inf’, ‘nan’, and ’56’ + ’78’ (which becomes ‘5678’). However, the string ’12+34′ includes the + sign, which is not valid for direct conversion to a float. Therefore, float(’12+34′) will raise a ValueError."
    },
    {
        "category": "operators",
        "question": "What is the result of round(0.5) – round(-0.5)?",
        "options": [
            "1.0",
            "2.0",
            "0.0",
            "Value depends on Python version"
        ],
        "correct": 3,
        "explanation": "The behavior of the round() function is different in Python 2 and Python 3. In Python 2, it rounds off numbers away from 0 when the number to be rounded off is exactly halfway through. round(0.5) is 1 and round(-0.5) is -1 whereas in Python 3, it rounds off numbers towards nearest even number when the number to be rounded off is exactly halfway through. See the below output.\nHere’s the runtime output for Python version 2.7 interpreter.\n\n$ python\nPython 2.7.17 (default, Nov  7 2019, 10:07:09)\n>>> round(0.5)"
    },
    {
        "category": "general",
        "question": "What does 3 ^ 4 evaluate to?",
        "options": [
            "81",
            "12",
            "0.75",
            "7"
        ],
        "correct": 3,
        "explanation": "In Python, the ^ operator is the binary XOR (exclusive OR) operator, not exponentiation. The result of 3 ^ 4 is the bitwise XOR of the binary representations of 3 (0011) and 4 (0100), which results in 0111 (decimal 7). Thus, 3 ^ 4 evaluates to 7."
    },
    {
        "category": "general",
        "question": "The value of the expressions 4/(3*(2-1)) and 4/3*(2-1) is the same.",
        "options": [
            "True",
            "False"
        ],
        "correct": 0,
        "explanation": "Although the presence of parenthesis does affect the order of precedence, in the case shown above, it is not making a difference. The result of both of these expressions is 1.333333333. Hence the statement is true."
    },
    {
        "category": "operators",
        "question": "What will be the value of the following Python expression?\n\n```python\nprint(4 + 3 % 5)\n```",
        "options": [
            "4",
            "7",
            "2",
            "0"
        ],
        "correct": 1,
        "explanation": "In Python, the modulus operator % has higher precedence than addition +. So, the expression is evaluated as 4 + (3 % 5), which is 4 + 3 = 7."
    },
    {
        "category": "operators",
        "question": "Evaluate the expression given below if A = 16 and B = 15. A % B // A",
        "options": [
            "0.0",
            "0",
            "1.0",
            "1"
        ],
        "correct": 1,
        "explanation": "The expression A % B // A becomes 16 % 15 // 16, which simplifies to 1 // 16. Using floor division, the result is 0."
    },
    {
        "category": "operators",
        "question": "Which of the following operators has its associativity from right to left?",
        "options": [
            "+",
            "//",
            "%"
        ],
        "correct": 0,
        "explanation": "Most operators in Python are left-associative, but the exponentiation operator ** is right-associative. So, 2 ** 3 ** 2 is evaluated as 2 ** (3 ** 2)."
    },
    {
        "category": "builtins",
        "question": "What will be the value of x in the following Python expression?\n\n```python\nx = int(43.55+2/2)\nprint(x)\n```",
        "options": [
            "43",
            "44",
            "22",
            "23"
        ],
        "correct": 1,
        "explanation": "The expression evaluates as int(43.55 + 1) → int(44.55), which results in 44 due to explicit conversion (truncates the decimal part)."
    },
    {
        "category": "builtins",
        "question": "What is the value of the following expression?\n\n```python\nprint(2+4.00, 2**4.0)\n```",
        "options": [
            "(6.0, 16.0)",
            "(6.00, 16.00)",
            "(6, 16)",
            "(6.00, 16.0)"
        ],
        "correct": 0,
        "explanation": "In Python, 2 + 4.00 results in 6.0 (float), and 2 ** 4.0 results in 16.0 because any operation involving a float yields a float. So, the final result is (6.0, 16.0)."
    },
    {
        "category": "operators",
        "question": "Which of the following is the truncation division operator?",
        "options": [
            "/",
            "%",
            "//",
            "|"
        ],
        "correct": 2,
        "explanation": "// is the truncation (floor) division operator in Python. It returns only the integer part of the result by discarding the decimal part. For example, 20 // 3 gives 6."
    },
    {
        "category": "builtins",
        "question": "What are the values of the following Python expressions?\n\n```python\nprint(2**(3**2))\nprint((2**3)**2)\nprint(2**3**2)\n```",
        "options": [
            "64, 512, 64",
            "64, 64, 64",
            "512, 512, 512",
            "512, 64, 512"
        ],
        "correct": 3,
        "explanation": "Expression 1 is evaluated as 2**9, which is equal to 512. Expression 2 is evaluated as 8**2, which is equal to 64. The last expression is evaluated as 2**(3**2). This is because the associativity of ** operator is from right to left. Hence the result of the third expression is 512."
    },
    {
        "category": "builtins",
        "question": "What is the value of the following expression?\n\n```python\nprint(8/4/2, 8/(4/2))\n```",
        "options": [
            "1.0 4.0",
            "1.0 1.0",
            "4.0 1.0",
            "4.0 4.0"
        ],
        "correct": 0,
        "explanation": "The first part 8/4/2 is evaluated left to right: 2.0 / 2 = 1.0. The second part 8/(4/2) becomes 8/2 = 4.0. Hence, the result is 1.0 4.0."
    },
    {
        "category": "builtins",
        "question": "What is the value of the following expression?\n\n```python\nprint(float(22//3+3/3))\n```",
        "options": [
            "8",
            "8.0",
            "8.3",
            "8.33"
        ],
        "correct": 1,
        "explanation": "The given expression print(float(22 // 3 + 3 / 3)) involves both integer and float operations. First, the floor division 22 // 3 evaluates to 7 because it divides 22 by 3 and discards the decimal part. Next, the division 3 / 3 evaluates to 1.0 since it is a floating-point operation. When these two values are added — 7 + 1.0 — the result is 8.0, because adding an integer and a float results in a float. Finally, applying float() to 8.0 does not change its value. Therefore, the final output of the expression is 8.0."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python expression?\n\n```python\nprint(4.00/(2.0+2.0))\n```",
        "options": [
            "Error",
            "1.0",
            "1.00",
            "1"
        ],
        "correct": 1,
        "explanation": "The expression evaluates as 4.00 / 4.0, which results in 1.0. Therefore, the output is 1.0."
    },
    {
        "category": "builtins",
        "question": "What will be the value of X in the following Python expression?\n\n```python\nX = 2+9*((3*12)-8)/10\nprint(X)\n```",
        "options": [
            "30.0",
            "30.8",
            "28.4",
            "27.2"
        ],
        "correct": 3,
        "explanation": "The expression shown above is evaluated as: 2+9*(36-8)/10, which simplifies to give 2+9*(2.8), which is equal to 2+25.2 = 27.2. Hence the result of this expression is 27.2.\n👉 Join Sanfoundry classes at Telegram or Youtube"
    },
    {
        "category": "general",
        "question": "Which of the following expressions involves coercion when evaluated in Python?",
        "options": [
            "4.7 – 1.5",
            "7.9 * 6.3",
            "1.7 % 2",
            "3.4 + 4.6"
        ],
        "correct": 2,
        "explanation": "Coercion is the implicit (automatic) conversion of operands to a common type. Coercion is automatically performed on mixed-type expressions. The expression 1.7 % 2 is evaluated as 1.7 % 2.0 (that is, automatic conversion of int to float)."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python expression?\n\n```python\nprint(24//6%3, 24//4//2)\n```",
        "options": [
            "1 3",
            "0 3",
            "1 0",
            "3 1"
        ],
        "correct": 0,
        "explanation": "The expression 24 // 6 % 3, 24 // 4 // 2 evaluates to (1, 3) because the operations are performed from left to right, with 24 // 6 giving 4, followed by 4 % 3 resulting in 1, and 24 // 4 giving 6, followed by 6 // 2 resulting in 3."
    },
    {
        "category": "operators",
        "question": "Which among the following list of operators has the highest precedence? +, -, **, %, /, <<, >>, |",
        "options": [
            "<<, >>",
            "|",
            "%"
        ],
        "correct": 0,
        "explanation": "The highest precedence is that of the exponentiation operator, that is of **."
    },
    {
        "category": "builtins",
        "question": "What will be the value of the following Python expression?\n\n```python\nprint(float(4+int(2.39)%2))\n```",
        "options": [
            "5.0",
            "5",
            "4.0",
            "4"
        ],
        "correct": 2,
        "explanation": "The above expression is an example of explicit conversion. It is evaluated as: float(4+int(2.39)%2) = float(4+2%2) = float(4+0) = 4.0. Hence the result of this expression is 4.0."
    },
    {
        "category": "general",
        "question": "Which of the following expressions is an example of type conversion?",
        "options": [
            "4.0 + float(3)",
            "5.3 + 6.3",
            "5.0 + 3",
            "3 + 7"
        ],
        "correct": 0,
        "explanation": "Type conversion is nothing but explicit conversion of operands to a specific type. Options 5.3 + 6.3 and 5.0 + 3 are examples of implicit conversion whereas option 4.0 + float(3) is an example of explicit conversion or type conversion."
    },
    {
        "category": "general",
        "question": "Which of the following expressions results in an error?",
        "options": [
            "float(‘10’)",
            "int(‘10’)",
            "float(’10.8’)",
            "int(’10.8’)"
        ],
        "correct": 3,
        "explanation": "All of the expressions involve explicit type conversion. However, int(‘10.8’) results in an error because the int() function cannot convert a string with a decimal point into an integer. To convert a string with a decimal, it must first be converted to a float."
    },
    {
        "category": "builtins",
        "question": "What will be the value of the following Python expression?\n\n```python\nprint(4+2**5//10)\n```",
        "options": [
            "3",
            "7",
            "77",
            "0"
        ],
        "correct": 1,
        "explanation": "The order of precedence is: **, //, +. The expression 4+2**5//10 is evaluated as 4+32//10, which is equal to 4+3 = 7. Hence the result of the expression is 7."
    },
    {
        "category": "general",
        "question": "The expression 2**2**3 is evaluates as: (2**2)**3.",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "The expression (2**2)**3 results in 4**3 = 64, but the expression 2**2**3 in Python is evaluated as 2**(2**3), which equals 2**8 = 256. This is because the associativity of the exponentiation operator (**) in Python is from right to left, not left to right."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code snippet if x=1? x<<2",
        "options": [
            "8",
            "1",
            "2",
            "4"
        ],
        "correct": 3,
        "explanation": "The binary form of 1 is 0001. The expression x << 2 performs a bitwise left shift on x, which shifts the bits two positions to the left. This results in 0100, which is the binary form of 4. Therefore, the result is 4."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python expression?\n\n```python\nprint(bin(29))\n```",
        "options": [
            "0b10111",
            "0b11101",
            "0b11111",
            "0b11011"
        ],
        "correct": 1,
        "explanation": "The binary representation of the number 29 is 11101. In Python, the bin() function returns the binary representation of an integer prefixed with 0b, so the output will be 0b11101."
    },
    {
        "category": "operators",
        "question": "What will be the value of x in the following Python expression, if the result of that expression is 2? x>>2",
        "options": [
            "8",
            "4",
            "2",
            "1"
        ],
        "correct": 0,
        "explanation": "When the value of x is equal to 8 (1000), then x>>2 (bitwise right shift) yields the value 0010, which is equal to 2. Hence the value of x is 8."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python expression?\n\n```python\nprint(int(1011))\n```",
        "options": [
            "1011",
            "11",
            "13",
            "1101"
        ],
        "correct": 0,
        "explanation": "The result of the expression shown will be 1011. This is because we have not specified the base in this expression. Hence it automatically takes the base as 10."
    },
    {
        "category": "functions",
        "question": "To find the decimal value of 1111, that is 15, we can use the function:",
        "options": [
            "int(1111,10)",
            "int(‘1111’,10)",
            "int(1111,2)",
            "int(‘1111’,2)"
        ],
        "correct": 3,
        "explanation": "The expression int(‘1111’, 2) converts the binary string ‘1111’ to its decimal equivalent, which is 15. The expression int(‘1111’, 10) would interpret ‘1111’ as a decimal number and return 1111."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python expression if x=15 and y=12? x & y",
        "options": [
            "b1101",
            "0b1101",
            "12",
            "1101"
        ],
        "correct": 2,
        "explanation": "The symbol ‘&’ represents bitwise AND. This operation gives 1 if both bits are equal to 1, otherwise, it gives 0. The binary form of 15 is 1111 and that of 12 is 1100. Performing the bitwise AND operation results in 1100, which is equal to 12."
    },
    {
        "category": "general",
        "question": "Which of the following expressions results in an error?",
        "options": [
            "int(1011)",
            "int(‘1011’,23)",
            "int(1011,2)",
            "int(‘1011’)"
        ],
        "correct": 2,
        "explanation": "The expression int(1011,2) results in an error because the first argument should be a string. If it was written as int(‘1011’,2), there would be no error."
    },
    {
        "category": "operators",
        "question": "Which of the following represents the bitwise XOR operator?",
        "options": [
            "&",
            "^",
            "|",
            "!"
        ],
        "correct": 1,
        "explanation": "The ^ operator represents the bitwise XOR operation. & represents bitwise AND, | represents bitwise OR, and ! is typically used as a logical NOT in many programming languages (not a bitwise operator)."
    },
    {
        "category": "builtins",
        "question": "What is the value of the following Python expression?\n\n```python\nprint(bin(0x8))\n```",
        "options": [
            "0bx1000",
            "8",
            "1000",
            "0b1000"
        ],
        "correct": 3,
        "explanation": "The prefix 0x specifies that the value is in hexadecimal. When we convert 0x8 to its binary form, we get 0b1000."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python expression?\n\n```python\nprint(0x35 | 0x75)\n```",
        "options": [
            "115",
            "116",
            "117",
            "118"
        ],
        "correct": 2,
        "explanation": "The binary value of 0x35 is 110101 and that of 0x75 is 1110101. Performing the bitwise OR operation on these values results in 1110101, which is equal to 117. Hence, the result of the expression is 117."
    },
    {
        "category": "general",
        "question": "It is not possible for the two’s complement value to be equal to the original value in any case.",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "In most cases, the two’s complement of a binary number is different from the original value. However, there is a special case in which the two’s complement is equal to the original value. For example, in an 8-bit system, the binary number 10000000 represents -128. Taking the two’s complement of this number results in the same binary value: 10000000. This happens because -128 is the minimum value that can be represented in 8-bit two’s complement format, and it does not have a positive counterpart. Hence, the statement is false."
    },
    {
        "category": "general",
        "question": "The one’s complement of 110010101 is:",
        "options": [
            "001101010",
            "110010101",
            "001101011",
            "110010100"
        ],
        "correct": 0,
        "explanation": "The one’s complement of a value is obtained by simply changing all the 1’s to 0’s and all the 0’s to 1’s. Hence the one’s complement of 110010101 is 001101010."
    },
    {
        "category": "control",
        "question": "Bitwise _________ gives 1 if either of the bits is 1 and 0 when both of the bits are 1.",
        "options": [
            "OR",
            "AND",
            "XOR",
            "NOT"
        ],
        "correct": 2,
        "explanation": "Bitwise XOR gives 1 if the two bits are different, and 0 if they are the same. So, it returns 1 when one bit is 1 and the other is 0."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python expression?\n\n```python\nprint(4^12)\n```",
        "options": [
            "2",
            "4",
            "8",
            "12"
        ],
        "correct": 2,
        "explanation": "^ is the XOR operator. The binary form of 4 is 0100 and that of 12 is 1100. Therefore, 0100^1100 is 1000, which is equal to 8."
    },
    {
        "category": "general",
        "question": "Any odd number on being AND-ed with ________ always gives 1. Hint: Any even number on being AND-ed with this value always gives 0.",
        "options": [
            "10",
            "2",
            "1",
            "0"
        ],
        "correct": 2,
        "explanation": "Any odd number on being AND-ed with 1 always gives 1. Any even number on being AND-ed with this value always gives 0."
    },
    {
        "category": "builtins",
        "question": "What will be the value of the following Python expression?\n\n```python\nprint(bin(10-2)+bin(12^4))\n```",
        "options": [
            "0b10000",
            "0b10001000",
            "0b1000b1000",
            "0b10000b1000"
        ],
        "correct": 3,
        "explanation": "The value of the expression bin(10 – 2) + bin(12 ^ 4) is ‘0b1000b1000’ because bin(10 – 2) results in ‘0b1000’ and bin(12 ^ 4) also results in ‘0b1000’, and their concatenation gives ‘0b1000b1000’."
    },
    {
        "category": "general",
        "question": "Which of the following expressions can be used to multiply a given number ‘a’ by 4?",
        "options": [
            "a<<2",
            "a<<4",
            "a>>2",
            "a>>4"
        ],
        "correct": 0,
        "explanation": "Let us consider an example wherein a=2. The binary form of 2 is 0010. When we left shift this value by 2, we get 1000, the value of which is 8. Hence if we want to multiply a given number ‘a’ by 4, we can use the expression: a<<2."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code if a=10 and b =20?\n\n```python\na=10\nb=20\na=a^b\nb=a^b\na=a^b\nprint(a,b)\n```",
        "options": [
            "10 20",
            "10 10",
            "20 10",
            "20 20"
        ],
        "correct": 2,
        "explanation": "The code shown above is used to swap the contents of two memory locations using bitwise X0R operator. Hence the output of the code shown above is: 20 10."
    },
    {
        "category": "general",
        "question": "What is the two’s complement of -44?",
        "options": [
            "1011011",
            "11010100",
            "11101011",
            "10110011"
        ],
        "correct": 1,
        "explanation": "The binary form of -44 is 00101100. The one’s complement of this value is 11010011. On adding one to this we get: 11010100 (two’s complement)."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python expression?\n\n```python\nprint(~100)\n```",
        "options": [
            "101",
            "-101",
            "100",
            "-100"
        ],
        "correct": 1,
        "explanation": "The expression ~100 uses the bitwise NOT operator, which inverts all the bits of the number. In Python, this is equivalent to -(100 + 1), which results in -101. Therefore, the output of ~100 is -101."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint(bool('False'))\nprint(bool())\n```",
        "options": [
            "/ True / True /",
            "/ False / True",
            "- **[D] / True / False"
        ],
        "correct": 0,
        "explanation": "The expression bool(‘False’) returns True because any non-empty string, including ‘False’, is considered True in Python. The second expression bool() returns False because calling bool() with no argument is the same as passing None, which is considered False."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint(['hello', 'morning'][bool('')])\n```",
        "options": [
            "error",
            "no output",
            "hello",
            "morning"
        ],
        "correct": 2,
        "explanation": "The expression [‘hello’, ‘morning’][bool(”)] evaluates the Boolean value of an empty string, which is False or 0, and selects the element at index 0 of the list — resulting in ‘hello’."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint(not(3>4))\nprint(not(1&1))\n```",
        "options": [
            "/ True / True",
            "/ True / False",
            "/ False / True",
            "/ False / False"
        ],
        "correct": 1,
        "explanation": "The expression not(3 > 4) returns True because 3 > 4 is False, and not(False) is True. The expression not(1 & 1) returns False because 1 & 1 equals 1, which is true, and not(1) is False."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(['f', 't'][bool('spam')])\n```",
        "options": [
            "t",
            "f",
            "No output",
            "Error"
        ],
        "correct": 0,
        "explanation": "The string ‘spam’ is a non-empty string, so bool(‘spam’) returns True which is equivalent to 1. The expression becomes [‘f’, ‘t’][1], which evaluates to ‘t’."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nl=[1, 0, 2, 0, 'hello', '', []]\nprint(list(filter(bool, l)))\n```",
        "options": [
            "Error",
            "[1, 0, 2, 0, ‘hello’, ”, []]",
            "[1, 0, 2, ‘hello’, ”, []]",
            "[1, 2, ‘hello’]"
        ],
        "correct": 3,
        "explanation": "The function filter(bool, l) removes all false elements from the list l, such as 0, ”, and []. The remaining true elements — 1, 2, and ‘hello’ — are returned as a new list."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code if the system date is 21st June, 2017 (Wednesday)? [] or {} {} or []",
        "options": [
            "/ [] / {}",
            "/ [] / []",
            "/ {} / []",
            "/ {} / {}"
        ],
        "correct": 2,
        "explanation": "In both expressions, Python evaluates operands from left to right using the or operator. Since both the left and right operands ([] and {}) are false, the or operator returns the last evaluated operand. Therefore, the first expression returns {} and the second returns []."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nclass Truth:\n\tpass\nx=Truth()\nprint(bool(x))\n```",
        "options": [
            "pass",
            "True",
            "False",
            "error"
        ],
        "correct": 1,
        "explanation": "If a class does not implement a __bool__() or __len__() method, then all its instances are considered true by default, so bool(x) returns True."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nif (9 < 0) and (0 < -9):\n    print(\"hello\")\nelif (9 > 0) or False:\n    print(\"good\")\nelse:\n    print(\"bad\")\n```",
        "options": [
            "error",
            "hello",
            "good",
            "bad"
        ],
        "correct": 2,
        "explanation": "The first condition is False because both 9 < 0 and 0 < -9 are false. The second condition (9 > 0) or False is True because 9 > 0 is true. Therefore, the program prints “good”."
    },
    {
        "category": "general",
        "question": "Which of the following Boolean expressions is not logically equivalent to the other three?",
        "options": [
            "not(-6<0 or-6>10)",
            "-6>=0 and -6<=10",
            "not(-6<10 or-6==10)",
            "not(-6>10 or-6==10)"
        ],
        "correct": 3,
        "explanation": "The expression not(-6<0 or -6>10) returns the output False.\nThe expression -6>=0 and -6<=10 returns the output False.\nThe expression not(-6<10 or -6==10) returns the output False.\nThe expression not(-6>10 or -6==10) returns the output True."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint(not(10<20) and not(10>30))\n```",
        "options": [
            "True",
            "False",
            "Error",
            "No output"
        ],
        "correct": 1,
        "explanation": "The expression not(10 < 20) evaluates to False, and not(10 > 30) evaluates to True. The AND operation between False and True results in False."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = ['ab', 'cd']\nfor i in x:\n    i.upper()\nprint(x)\n```",
        "options": [
            "[‘ab’, ‘cd’]",
            "[‘AB’, ‘CD’]",
            "[None, None]",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "In the code, i.upper() is called inside the loop, but upper() creates a new string and does not modify the original string in place. Since the result of i.upper() is not assigned back to any variable or element, the original list x remains unchanged. Therefore, the output is [‘ab’, ‘cd’]."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = ['ab', 'cd']\nfor i in x:\n    x.append(i.upper())\nprint(x)\n```",
        "options": [
            "[‘AB’, ‘CD’]",
            "[‘ab’, ‘cd’, ‘AB’, ‘CD’]",
            "[‘ab’, ‘cd’]",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "The output will be an infinite loop because new elements are being appended to the list during iteration."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\ni = 1\nwhile True:\n    if i%3 == 0:\n        break\n    print(i)\n \n    i + = 1\n```",
        "options": [
            "1 2",
            "1 2 3",
            "SyntaxError",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The output will be a SyntaxError because there is a space between + and = in the i += 1 statement."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ni = 1\nwhile True:\n    if i%0O7 == 0:\n        break\n    print(i)\n    i += 1\n```",
        "options": [
            "/ 1 / 2 / 3 / 4 / 5 / 6",
            "/ 1 / 2 / 3 / 4 / 5 / 6 / 7",
            "error",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The code exits the loop when i % 0O7 == 0 (i.e., when i reaches 7 because 0O7 is the octal representation of 7). Therefore, the loop runs until i becomes 7."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ni = 5\nwhile True:\n    if i%0O11 == 0:\n        break\n    print(i)\n    i += 1\n```",
        "options": [
            "/ 5 / 6 / 7 / 8 / 9 / 10",
            "/ 5 / 6 / 7 / 8",
            "/ 5 / 6",
            "error"
        ],
        "correct": 1,
        "explanation": "0O11 is the octal representation of the number 9. The loop will break when i reaches 9 because i % 9 == 0. The loop prints the values from 5 to 8 before it breaks, as i reaches 9 where the condition i % 0O11 == 0 is true."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ni = 5\nwhile True:\n    if i%0O9 == 0:\n        break\n    print(i)\n    i += 1\n```",
        "options": [
            "5 6 7 8",
            "5 6 7 8 9",
            "5 6 7 8 9 10 11 12 13 14 15 ….",
            "error"
        ],
        "correct": 3,
        "explanation": "In Python, octal numbers are represented by a prefix 0o or 0O followed by digits from 0 to 7. Since 9 is not a valid octal digit, the code will result in a SyntaxError when trying to interpret 0O9 as an octal number."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ni = 1\nwhile True:\n    if i%2 == 0:\n        break\n    print(i)\n    i += 2\n```",
        "options": [
            "1",
            "1 2",
            "1 2 3 4 5 6 …",
            "1 3 5 7 9 11 …"
        ],
        "correct": 3,
        "explanation": "In the given code, i starts from 1 and increases by 2 in each iteration (i += 2). This ensures that i will always be an odd number. The loop will keep printing the odd numbers and will never break, since the condition i % 2 == 0 (which checks if i is even) will never be true. Therefore, the output will be an infinite sequence of odd numbers starting from 1."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ni = 2\nwhile True:\n    if i%3 == 0:\n        break\n    print(i)\n    i += 2\n```",
        "options": [
            "/ 2 / 4 / 6 / 8 / 10 / .....",
            "/ 2 / 4",
            "/ 2 / 3",
            "error"
        ],
        "correct": 1,
        "explanation": "The variable i starts at 2 and increments by 2 in each iteration (i += 2). The loop continues printing i until i % 3 == 0 (i.e., when i is divisible by 3).\nIn the first iteration, i = 2, and it is printed.\nIn the second iteration, i = 4, and it is printed.\nIn the third iteration, i = 6, which is divisible by 3, so the loop breaks.\nThus, the output will be 2 4."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ni = 1\nwhile False:\n    if i%2 == 0:\n        break\n    print(i)\n    i += 2\n```",
        "options": [
            "1",
            "1 3 5 7 …",
            "1 2 3 4 …",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "The while False: condition means that the loop will never execute because False is always false. Therefore, the code inside the loop, including the print(i) and the increment of i, will never be executed. As a result, there will be no output."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nTrue = False\nwhile True:\n    print(True)\n    break\n```",
        "options": [
            "True",
            "False",
            "ERROR",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "True is a reserved keyword in Python, and its value cannot be reassigned. Attempting to assign True = False will result in a SyntaxError. Therefore, the code will not execute and will raise an error."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ni = 0\nwhile i < 5:\n    print(i)\n    i += 1\n    if i == 3:\n        break\nelse:\n    print(0)\n```",
        "options": [
            "/ 0 / 1 / 2 / 0 /",
            "/ 0 / 1 / 2",
            "error",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "In this code, the while loop iterates from i = 0 to i = 2, printing the values of i. When i becomes 3, the if i == 3 condition is met, and the break statement is executed, which terminates the loop early. Since the loop was terminated using break, the else block is not executed. Therefore, the output is 0, 1, and 2."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ni = 0\nwhile i < 3:\n    print(i)\n    i += 1\nelse:\n    print(0)\n```",
        "options": [
            "/ 0 / 1 / 2 / 3 / 0 /",
            "/ 0 / 1 / 2 / 0",
            "/ 0 / 1 / 2",
            "error"
        ],
        "correct": 1,
        "explanation": "The while loop runs while i < 3, so it prints 0, 1, and 2. Once i becomes 3, the condition i < 3 becomes false, and the loop ends. Since the loop ends normally (without a break), the else block is executed, printing 0. Therefore, the final output is 0, 1, 2, and 0."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nx = \"abcdef\"\nwhile i in x:\n    print(i, end=\" \")\n```",
        "options": [
            "a b c d e f",
            "abcdef",
            "i i i i i i …",
            "error"
        ],
        "correct": 3,
        "explanation": "In the given code, i is not defined before it is used in the while loop. This will raise a NameError because Python does not know what i refers to. To fix this, you would need to define i before using it in the loop."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nx = \"abcdef\"\ni = \"i\"\nwhile i in x:\n    print(i, end=\" \")\n```",
        "options": [
            "no output",
            "i i i i i i …",
            "a b c d e f",
            "abcdef"
        ],
        "correct": 0,
        "explanation": "The condition while i in x: checks if the string “i” exists in the string “abcdef”. Since “i” is not present in “abcdef”, the condition is False from the start, so the loop does not execute, resulting in no output."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nx = \"abcdef\"\ni = \"a\"\nwhile i in x:\n    print(i, end = \" \")\n```",
        "options": [
            "no output",
            "i i i i i i …",
            "a a a a a a …",
            "a b c d e f"
        ],
        "correct": 2,
        "explanation": "The condition while i in x: checks if the string “a” is present in the string “abcdef”. Since “a” is present in “abcdef”, the loop will keep printing “a” endlessly. The value of i doesn’t change inside the loop, so the condition will always be True, and the loop will run indefinitely, printing “a” each time."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nx = \"abcdef\"\ni = \"a\"\nwhile i in x:\n    print('i', end = \" \")\n```",
        "options": [
            "no output",
            "i i i i i i …",
            "a a a a a a …",
            "a b c d e f"
        ],
        "correct": 1,
        "explanation": "In this code, i is a string with the value “a”, and the while loop checks if “i” (the string) is in x (which is “abcdef”). Since the string “i” is not in “abcdef”, the condition will always be False, and the loop will print the string ‘i’ endlessly."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nx = \"abcdef\"\ni = \"a\"\nwhile i in x:\n    x = x[:-1]\n    print(i, end = \" \")\n```",
        "options": [
            "i i i i i i",
            "a a a a a a",
            "a a a a a",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "In the code, x starts as “abcdef” and in each iteration, x = x[:-1] removes the last character from the string. Since “a” is still in the string during each iteration, it continues to print “a”. The loop prints “a” until the string x is reduced to just “a”, and it prints a total of six “a”s."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nx = \"abcdef\"\ni = \"a\"\nwhile i in x[:-1]:\n    print(i, end = \" \")\n```",
        "options": [
            "a a a a a",
            "a a a a a a",
            "a a a a a a …",
            "a"
        ],
        "correct": 2,
        "explanation": "In the code, x[:-1] means that the string x is sliced, excluding the last character. So, x[:-1] will be “abcde”. The loop checks if “a” is in “abcde”, which is true. However, since the value of x is not modified within the loop, it keeps printing “a” repeatedly, causing an infinite loop. Thus, the loop will continuously print “a” indefinitely."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nx = \"abcdef\"\ni = \"a\"\nwhile i in x:\n    x = x[1:]\n    print(i, end = \" \")\n```",
        "options": [
            "a a a a a a",
            "a",
            "no output",
            "error"
        ],
        "correct": 1,
        "explanation": "In the code, x = x[1:] slices the string x, removing the first character in each iteration. The loop continues as long as the string x contains the character “a”. Initially, x = “abcdef”, so the loop starts by printing “a”. After each iteration, x becomes “bcdef”, “cdef”, and so on, until “a” is no longer in x, at which point the loop terminates. Therefore, only a single “a” is printed."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nx = \"abcdef\"\ni = \"a\"\nwhile i in x[1:]:\n    print(i, end = \" \")\n```",
        "options": [
            "a a a a a a",
            "a",
            "no output",
            "error"
        ],
        "correct": 2,
        "explanation": "In the code, x[1:] slices the string x starting from the second character. So, x[1:] becomes “bcdef”. The loop checks if i (which is “a”) is in the sliced string “bcdef”, but “a” is not found in “bcdef”. As a result, the condition i in x[1:] is False, and the loop does not execute, producing no output."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = 'abcd'\nfor i in x:\n    print(i)\n    x.upper()\n```",
        "options": [
            "/ a / B / C / D /",
            "/ a / b / c / d",
            "- [D] error"
        ],
        "correct": 1,
        "explanation": "In the code, the string x = ‘abcd’ is iterated over character by character using a for loop. The x.upper() method returns a new string with all characters in uppercase, but it doesn’t modify x in place because strings in Python are immutable. Therefore, the loop prints each character in its original lowercase form (a, b, c, d), and the changes made by x.upper() do not affect the output of the loop."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = 'abcd'\nfor i in x:\n    print(i.upper())\n```",
        "options": [
            "/ a / b / c / d",
            "/ A / B / C / D",
            "/ a / B / C / D",
            "error"
        ],
        "correct": 1,
        "explanation": "In this code, x = ‘abcd’ is iterated over, and for each character i, i.upper() is called. The upper() method returns a new string where all characters are converted to uppercase. Each uppercase character is then printed on a new line. Therefore, the output is A, B, C, D, one per line."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nx = 'abcd'\nfor i in range(x):\n    print(i)\n```",
        "options": [
            "a b c d",
            "0 1 2 3",
            "error",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The code attempts to use range(x), where x is a string (‘abcd’). However, the range() function expects an integer as its argument, not a string. Since range(str) is not valid, this will result in a TypeError. Hence, the code will raise an error."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = 'abcd'\nfor i in range(len(x)):\n    print(i)\n```",
        "options": [
            "/ a / b / c / d",
            "/ 0 / 1 / 2 / 3",
            "/ 1 / 2 / 3 / 4",
            "error"
        ],
        "correct": 1,
        "explanation": "x = ‘abcd’ has 4 characters, so len(x) is 4. The loop for i in range(len(x)) iterates over range(4), which gives the values 0, 1, 2, 3. Each of these values is printed on a new line.\nSo, the output is:\n0\n1\n2\n3"
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = 'abcd'\nfor i in range(len(x)):\n    print(i.upper())\n```",
        "options": [
            "a b c d",
            "0 1 2 3",
            "error",
            "1 2 3 4"
        ],
        "correct": 2,
        "explanation": "The code raises an error because i is an integer from range(len(x)), and integers do not have the upper() method, which is only valid for strings."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nx = 'abcd'\nfor i in range(len(x)):\n    i.upper()\nprint (x)\n```",
        "options": [
            "a b c d",
            "0 1 2 3",
            "error",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The code results in an error because i is an integer, and integers do not support the upper() method, which is only available for strings."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nx = 'abcd'\nfor i in range(len(x)):\n    x[i].upper()\nprint (x)\n```",
        "options": [
            "abcd",
            "ABCD",
            "error",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The string method upper() returns a new uppercase string but does not modify the original string. Since the result of x[i].upper() isn’t stored, x remains unchanged. Hence, the output is ‘abcd’."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nx = 'abcd'\nfor i in range(len(x)):\n    i[x].upper()\nprint (x)\n```",
        "options": [
            "abcd",
            "ABCD",
            "error",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The given code produces an error because i is an integer, and the expression i[x] attempts to subscript (index) an integer, which is not allowed in Python. Integers are not subscriptable types, so this results in a TypeError. If the expression had been x[i].upper() instead, it would have been valid, though it still wouldn’t change the original string."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nx = 'abcd'\nfor i in range(len(x)):\n    x = 'a'\n    print(x)\n```",
        "options": [
            "a",
            "/ abcd / abcd / abcd / abcd",
            "/ a / a / a / a",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The code will output ‘a’ four times because inside the loop, the variable x is reassigned to the string ‘a’ on each iteration, and then ‘a’ is printed. This happens for all four iterations of the loop."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nx = 'abcd'\nfor i in range(len(x)):\n    print(x)\n    x = 'a';\n```",
        "options": [
            "a",
            "/ abcd / abcd / abcd / abcd",
            "/ a / a / a / a",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "The code will output ‘abcd’ once and then ‘a’ three times. This is because the value of x is set to ‘a’ after the first print statement, and on each subsequent iteration, it prints the updated value of x, which is ‘a’. Therefore, the correct output is ‘abcd’, followed by ‘a’ three times, which doesn’t match any of the given options."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nx = 123\nfor i in x:\n    print(i)\n```",
        "options": [
            "1 2 3",
            "123",
            "error",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "In Python, the for loop is used to iterate over iterable objects like strings, lists, tuples, etc. However, x = 123 is an integer, and integers are not iterable. So when Python tries to iterate over x, it raises a TypeError.\nError Message:\n\nTypeError: 'int' object is not iterable"
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nd = {0: 'a', 1: 'b', 2: 'c'}\nfor i in d:\n    print(i)\n```",
        "options": [
            "/ 0 / 1 / 2 /",
            "/ a / b / c",
            "/ 0 a / 1 b / 2 c",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The for loop iterates over the keys of the dictionary by default. Since the dictionary d has keys 0, 1, and 2, those are printed. To print values, you’d need to use d.values()."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nd = {0: 'a', 1: 'b', 2: 'c'}\nfor x, y in d:\n    print(x, y)\n```",
        "options": [
            "/ 0 / 1 / 2",
            "/ a / b / c",
            "/ 0 a / 1 b / 2 c",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "The code will raise an error. Iterating over a dictionary directly yields keys, not key-value pairs. To unpack two variables x, y in the loop, you should iterate using .items() like this:\nfor x, y in d.items():\n    print(x, y)\nSo, the current code is invalid and results in a ValueError."
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code?\n\n```python\nd = {0: 'a', 1: 'b', 2: 'c'}\nfor x, y in d.items():\n    print(x, y)\n```",
        "options": [
            "/ 0 / 1 / 2",
            "/ a / b / c",
            "/ 0 a / 1 b / 2 c",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The d.items() method returns key-value pairs from the dictionary. In each iteration, x gets the key and y gets the corresponding value. Hence, the output is\n0 a\n1 b\n2 c\n."
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code?\n\n```python\nd = {0: 'a', 1: 'b', 2: 'c'}\nfor x in d.keys():\n    print(d[x])\n```",
        "options": [
            "/ 0 / 1 / 2",
            "/ a / b / c",
            "/ 0 a / 1 b / 2 c",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "The for x in d.keys() loop iterates over the keys (0, 1, 2) of the dictionary d. For each key, d[x] fetches the corresponding value (‘a’, ‘b’, ‘c’), which are then printed. Hence, the output is:\na\nb\nc"
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code?\n\n```python\nd = {0: 'a', 1: 'b', 2: 'c'}\nfor x in d.values():\n    print(x)\n```",
        "options": [
            "/ 0 / 1 / 2",
            "/ a / b / c",
            "/ 0 a / 1 b / 2 c",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "The d.values() method returns all the values in the dictionary. The for loop iterates over ‘a’, ‘b’, and ‘c’, and prints them.\nSo the output is:\na\nb\nc"
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code?\n\n```python\nd = {0: 'a', 1: 'b', 2: 'c'}\nfor x in d.values():\n    print(d[x])\n```",
        "options": [
            "/ 0 / 1 / 2",
            "/ a / b / c",
            "/ 0 a / 1 b / 2 c",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "The loop goes through the values in the dictionary (‘a’, ‘b’, ‘c’), and tries to use each value as a key (i.e., d[‘a’], d[‘b’], d[‘c’]). But these strings are not keys in the dictionary, so it causes a KeyError."
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code?\n\n```python\nd = {0, 1, 2}\nfor x in d.values():\n    print(x)\n```",
        "options": [
            "0 1 2",
            "None None None",
            "error",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The variable d is a set, not a dictionary. Sets in Python do not have a .values() method. Trying to call d.values() on a set raises an AttributeError."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nd = {0, 1, 2}\nfor x in d:\n    print(x)\n```",
        "options": [
            "/ 0 / 1 / 2",
            "/ {0, 1, 2} / {0, 1, 2} / {0, 1, 2}",
            "error",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The code creates a set d = {0, 1, 2} and loops through it using a for loop. Sets in Python are unordered, but the loop prints each unique element once. Therefore, the output will be the numbers 0, 1, and 2, each on a new line (order may vary)."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nd = {0, 1, 2}\nfor x in d:\n    print(d.add(x))\n```",
        "options": [
            "/ 0 / 1 / 2",
            "/ 0 1 2 / 0 1 2 / 0 1 2 / ...",
            "/ None / None / None",
            "None of the mentioned"
        ],
        "correct": 2,
        "explanation": "The variable x takes the values 0, 1, and 2. The set.add() method returns None, even if the element is already present in the set. Since print(d.add(x)) prints the return value of the add() method, the output will be None three times."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nfor i in range(0):\n    print(i)\n```",
        "options": [
            "0",
            "no output",
            "error",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "The range(0) function produces an empty sequence, meaning it generates no numbers to iterate over. As a result, the body of the for loop is never executed, and the program produces no output."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nfor i in range(2.0):\n    print(i)\n```",
        "options": [
            "0.0 1.0",
            "0 1",
            "error",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The range() function in Python requires integer arguments. Passing a float like 2.0 results in a TypeError because a float cannot be interpreted as an integer. Therefore, the code will raise an error and not execute the loop."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nfor i in range(int(2.0)):\n    print(i)\n```",
        "options": [
            "/ 0.0 / 1.0 / 👉 Join Sanfoundry classes at Telegram or Youtube",
            "/ 0 / 1 /",
            "error",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "The expression int(2.0) converts the float 2.0 to the integer 2. So, range(int(2.0)) becomes range(2), which produces the sequence 0, 1."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nfor i in range(float('inf')):\n    print (i)\n```",
        "options": [
            "0.0 0.1 0.2 0.3 …",
            "0 1 2 3 …",
            "0.0 1.0 2.0 3.0 …",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "The code attempts to use float(‘inf’) as an argument to range(). However, range() requires integer arguments, and passing a float — even one representing infinity — will raise a TypeError. Specifically, Python will say: “TypeError: ‘float’ object cannot be interpreted as an integer”"
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nfor i in range(int(float('inf'))):\n    print (i)\n```",
        "options": [
            "0.0 0.1 0.2 0.3 …",
            "0 1 2 3 …",
            "0.0 1.0 2.0 3.0 …",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "The code attempts to convert float(‘inf’) (positive infinity) to an integer using int(float(‘inf’)). This results in an OverflowError because Python cannot convert infinite floating-point values to integers."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nfor i in [1, 2, 3, 4][::-1]:\n    print(i, end=' ')\n```",
        "options": [
            "1 2 3 4",
            "4 3 2 1",
            "error",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "The expression [1, 2, 3, 4][::-1] uses slicing with a step of -1 to reverse the list. So the list becomes [4, 3, 2, 1]. The for loop iterates over this reversed list and prints each element, with end=’ ‘ ensuring the output is on one line with spaces in between."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nfor i in ''.join(reversed(list('abcd'))):\n    print (i)\n```",
        "options": [
            "/ a / b / c / d",
            "/ d / c / b / a",
            "error",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "The code does the following:\nlist(‘abcd’) → converts the string to a list: [‘a’, ‘b’, ‘c’, ‘d’].\nreversed(…) → returns an iterator that yields the elements in reverse: [‘d’, ‘c’, ‘b’, ‘a’].\n”.join(…) → joins the reversed characters into a string: ‘dcba’.\nThe for loop iterates over the characters in ‘dcba’, printing each on a new line.\n\nOutput:\n\nd\nc\nb\na\nEach character is printed on a separate line because print(i) by default ends with a newline."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nfor i in 'abcd'[::-1]:\n    print (i)\n```",
        "options": [
            "/ a / b / c / d",
            "/ d / c / b / a",
            "error",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "The expression ‘abcd'[::-1] uses slicing with a step of -1 to reverse the string, resulting in ‘dcba’. The for loop then iterates over this reversed string, printing each character on a new line.\nOutput:\nd\nc\nb\na"
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nfor i in '':\n    print (i)\n```",
        "options": [
            "None",
            "(nothing is printed)",
            "error",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "The string “” is an empty string, meaning it contains no characters. When a for loop tries to iterate over it, there’s nothing to process, so the loop body doesn’t run at all. As a result, the program doesn’t produce any output—nothing is printed, and no error or message like None appears. It simply moves on without doing anything."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nx = 2\nfor i in range(x):\n    x += 1\n    print (x)\n```",
        "options": [
            "/ 0 / 1 / 2 / 3",
            "/ 0 / 1",
            "/ 3 / 4",
            "error"
        ],
        "correct": 2,
        "explanation": "The loop runs twice because range(x) is evaluated at the beginning when x is 2. Inside the loop, x is incremented by 1 each time, so the first iteration prints 3 and the second prints 4. Hence, the output is 3 and 4."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nx = 2\nfor i in range(x):\n    x -= 2\n    print (x)\n```",
        "options": [
            "/ 0 / 1 / 2 / 3 / 4 / ...",
            "/ 0 / -2",
            "0",
            "error"
        ],
        "correct": 1,
        "explanation": "Initially, x = 2. The loop runs for range(x) where x = 2, so the loop will iterate twice. In each iteration, x is decreased by 2 (x -= 2), and the value of x is printed.\n1st iteration: x = 2 – 2 = 0, prints 0.\n2nd iteration: x = 0 – 2 = -2, prints -2.\nThus, the output is 0 and -2."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nfor i in range(10):\n    if i == 5:\n        break\n    else:\n        print(i)\nelse:\n    print(\"Here\")\n```",
        "options": [
            "/ 0 / 1 / 2 / 3 / 4 / Here /",
            "/ 0 / 1 / 2 / 3 / 4 / 5 / Here",
            "error"
        ],
        "correct": 0,
        "explanation": "In this code, the loop runs from 0 to 9, and when i equals 5, the break statement is executed, causing the loop to exit. The else block will not execute because the loop is terminated by the break statement before it completes normally. Therefore, the loop prints numbers 0 through 4, and the else block is skipped.\nOutput:\n0\n1\n2\n3\n4"
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nfor i in range(5):\n    if i == 5:\n        break\n    else:\n        print(i)\nelse:\n    print(\"Here\")\n```",
        "options": [
            "/ 0 / 1 / 2 / 3 / 4 / Here",
            "/ 0 / 1 / 2 / 3 / 4 / 5 / Here",
            "/ 0 / 1 / 2 / 3 / 4",
            "error"
        ],
        "correct": 0,
        "explanation": "The for loop iterates over range(5), which gives values from 0 to 4. When i == 5, the break statement would be triggered, but that condition is never met because the loop only goes up to 4. Since there is no break within the loop, the else part will execute, printing “Here.” The loop prints the numbers 0, 1, 2, 3, and 4 before exiting, followed by “Here”."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nx = (i for i in range(3))\nfor i in x:\n    print(i)\n```",
        "options": [
            "/ 0 / 1 / 2",
            "error",
            "/ 0 / 1 / 2 / 0 / 1 / 2",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The code creates a generator expression (i for i in range(3)) that generates values from 0 to 2. The for loop iterates over the generator, printing each value. Since a generator only produces values on demand, it will output 0, 1, and 2 once as it exhausts the generator."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nx = (i for i in range(3))\nfor i in x:\n    print(i)\nfor i in x:\n    print(i)\n```",
        "options": [
            "/ 0 / 1 / 2",
            "error",
            "/ 0 / 1 / 2 / 0 / 1 / 2",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The code creates a generator object x which yields values 0, 1, and 2. In the first for loop, the generator is exhausted after it iterates over all the values. A generator can only be traversed once. Once it’s exhausted, the second for loop will not produce any output, resulting in no values being printed in the second loop."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nstring = \"my name is x\"\nfor i in string:\n    print (i, end=\", \")\n```",
        "options": [
            "m, y, , n, a, m, e, , i, s, , x,",
            "m, y, , n, a, m, e, , i, s, , x",
            "my, name, is, x,",
            "error"
        ],
        "correct": 0,
        "explanation": "The for loop iterates over each character in the string “my name is x”, and the print(i, end=”, “) statement prints each character followed by a comma and a space. Since the loop processes each character individually, the output includes each character of the string separated by a comma and space.\nOutput:\n\nm, y,  , n, a, m, e,  , i, s,  , x,"
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nstring = \"my name is x\"\nfor i in string.split():\n    print (i, end=\", \")\n```",
        "options": [
            "m, y, , n, a, m, e, , i, s, , x,",
            "m, y, , n, a, m, e, , i, s, , x",
            "my, name, is, x,",
            "error"
        ],
        "correct": 2,
        "explanation": "The split() method splits the string “my name is x” into words, resulting in the list [‘my’, ‘name’, ‘is’, ‘x’]. The for loop then iterates over each word in the list, printing each word followed by a comma and space."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\na = [0, 1, 2, 3]\nfor a[-1] in a:\n    print(a[-1])\n```",
        "options": [
            "/ 0 / 1 / 2 / 3",
            "/ 0 / 1 / 2 / 2",
            "/ 3 / 3 / 3 / 3",
            "error"
        ],
        "correct": 1,
        "explanation": "The code modifies the last element of the list a during each iteration of the loop. Initially, a[-1] is set to 0, then updated to 1, and finally 2. In each iteration, the new value of a[-1] is printed, resulting in the output 0, 1, 2, 2."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\na = [0, 1, 2, 3]\nfor a[0] in a:\n    print(a[0])\n```",
        "options": [
            "/ 0 / 1 / 2 / 3",
            "/ 0 / 1 / 2 / 2",
            "/ 3 / 3 / 3 / 3",
            "error"
        ],
        "correct": 0,
        "explanation": "In this code, the first element of the list a[0] is updated during each iteration of the for loop. Initially, a = [0, 1, 2, 3], and during the loop, a[0] is assigned each value from the list. The loop will print the updated value of a[0] each time. Since the first value of the loop is 0, it prints 0, and then the loop continues updating and printing a[0] with each iteration, ultimately printing 0, 1, 2, 3."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\na = [0, 1, 2, 3]\ni = -2\nfor i not in a:\n    print(i)\n    i += 1\n```",
        "options": [
            "-2 -1",
            "0",
            "error",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The statement for i not in a: is invalid syntax in Python. The for loop requires an iterable (e.g., for i in a:), but i not in a is a condition, not an iterable. Hence, Python raises a SyntaxError."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nstring = \"my name is x\"\nfor i in ' '.join(string.split()):\n    print (i, end=\", \")\n```",
        "options": [
            "m, y, , n, a, m, e, , i, s, , x,",
            "m, y, , n, a, m, e, , i, s, , x",
            "my, name, is, x,",
            "error"
        ],
        "correct": 0,
        "explanation": "The string.split() breaks the sentence into words: [‘my’, ‘name’, ‘is’, ‘x’]. Then ‘ ‘.join(…) combines them back into a single string “my name is x”. The for loop iterates over this string one character at a time, printing each character followed by a comma and space."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python statement?\n\n```python\nprint(\"a\"+\"bc\")\n```",
        "options": [
            "a",
            "bc",
            "bca",
            "abc"
        ],
        "correct": 3,
        "explanation": "In Python, the + operator is used for string concatenation. “a” + “bc” joins the two strings together into a single string “abc”."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python statement?\n\n```python\nprint(\"abcd\"[2:])\n```",
        "options": [
            "a",
            "ab",
            "cd",
            "dc"
        ],
        "correct": 2,
        "explanation": "The expression “abcd”[2:] uses slicing to extract the substring starting from index 2 to the end. In the string “abcd”, index 2 corresponds to ‘c’, so the result is ‘cd’."
    },
    {
        "category": "strings",
        "question": "The output of executing string.ascii_letters can also be achieved by:",
        "options": [
            "string.ascii_lowercase_string.digits",
            "string.ascii_lowercase+string.ascii_uppercase",
            "string.letters",
            "string.lowercase_string.uppercase"
        ],
        "correct": 1,
        "explanation": "string.ascii_letters returns a concatenation of all lowercase and uppercase ASCII letters.\nThis is equivalent to string.ascii_lowercase + string.ascii_uppercase."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nstr1 = 'hello'\nstr2 = ','\nstr3 = 'world'\nprint(str1[-1:])\n```",
        "options": [
            "olleh",
            "hello",
            "h",
            "o"
        ],
        "correct": 3,
        "explanation": "In Python, str1[-1:] slices the string starting from the last character (-1) to the end. For str1 = ‘hello’, the last character is ‘o’."
    },
    {
        "category": "operators",
        "question": "What arithmetic operators cannot be used with strings?",
        "options": [
            "+",
            "–",
            "All of the mentioned"
        ],
        "correct": 1,
        "explanation": "In Python, the + operator is used to concatenate strings, and the * operator is used to repeat strings. However, the – (minus) operator is not supported for strings and will raise a TypeError if used."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(r\"\\nhello\")\n```",
        "options": [
            "a new line and hello",
            "\\nhello",
            "the letter r and then hello",
            "error"
        ],
        "correct": 1,
        "explanation": "The prefix r makes the string a raw string, meaning escape sequences like \\n are not interpreted. So print(r”\\nhello”) outputs the string exactly as written, including the backslash.\nOutput:\n\n\\nhello"
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python statement?\n\n```python\nprint('new' 'line')\n```",
        "options": [
            "Error",
            "Output equivalent to print ‘new\\nline’",
            "newline",
            "new line"
        ],
        "correct": 2,
        "explanation": "In Python, adjacent string literals without any operator are automatically concatenated. So ‘new’ ‘line’ becomes ‘newline’. No error occurs, and no whitespace is added unless explicitly included."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python statement?\n\n```python\nprint('x\\97\\x98')\n```",
        "options": [
            "Error",
            "/ 97 / 98",
            "x\\97",
            "\\x97\\x98"
        ],
        "correct": 2,
        "explanation": "The output of the code print(‘x\\97\\x98’) is x\\97�. Here, \\97 is not a valid escape sequence, so it’s treated as the literal characters \\, 9, and 7. On the other hand, \\x98 is a valid hexadecimal escape sequence, which may produce an unprintable character, often shown as �."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nstr1=\"helloworld\"\nprint(str1[::-1])\n```",
        "options": [
            "dlrowolleh",
            "hello",
            "world",
            "helloworld"
        ],
        "correct": 0,
        "explanation": "The slice notation [::-1] reverses the string. In the case of str1 = “helloworld”, applying [::-1] will reverse the string and result in “dlrowolleh”."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(0xA + 0xB + 0xC)\n```",
        "options": [
            "0xA0xB0xC",
            "Error",
            "0x22",
            "33"
        ],
        "correct": 3,
        "explanation": "0xA and 0xB and 0xC are hexadecimal integer literals representing the decimal values 10, 11 and 12 respectively. Their sum is 10 + 11 + 12 = 33."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\nclass father:\n    def __init__(self, param):\n        self.o1 = param\n \nclass child(father):\n    def __init__(self, param):\n        self.o2 = param\n \nobj = child(22)\nprint(\"%d %d\" % (obj.o1, obj.o2))\n```",
        "options": [
            "None None",
            "None 22",
            "22 None",
            "Error is generated"
        ],
        "correct": 3,
        "explanation": "The code will generate an error because in the child class’s __init__ method, the father class’s __init__ method is not called. As a result, self.o1 is never created. To fix this, you need to call the parent class’s __init__ method using super().__init__(param) in the child class’s __init__."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nclass tester:\n    def __init__(self, id):\n        self.id = str(id)\n        id=\"224\"\n \ntemp = tester(12)\nprint(temp.id)\n```",
        "options": [
            "224",
            "Error",
            "12",
            "None"
        ],
        "correct": 2,
        "explanation": "When the tester class is instantiated with temp = tester(12), the __init__ method is called. The id argument is passed as 12, and inside the __init__ method, self.id is assigned the string value of id, which is “12”. However, the local variable id is reassigned to “224”, but this change does not affect self.id, which retains the value “12”."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\nexample = \"snow world\"\nprint(\"%s\" % example[4:7])\n```",
        "options": [
            "” wo”",
            "” world”",
            "“sn ”",
            "” rl”"
        ],
        "correct": 0,
        "explanation": "In the string “snow world”, the slice example[4:7] refers to the characters starting at index 4 and ending just before index 7. Since the index range is exclusive of the end, it retrieves the substring ” wo”, which includes a space followed by the letters “w” and “o”."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nexample = \"snow world\"\nprint(example[3] = 's')\n```",
        "options": [
            "snow",
            "snow world",
            "Error",
            "snos world"
        ],
        "correct": 2,
        "explanation": "In Python, strings are immutable, meaning you cannot modify individual characters of a string. The code example[3] = ‘s’ tries to assign a new value to a specific index of the string, which will raise an error. This results in a TypeError."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(max(\"what are you\"))\n```",
        "options": [
            "error",
            "u",
            "t",
            "y"
        ],
        "correct": 3,
        "explanation": "The max() function, when applied to a string, returns the character with the highest ASCII value. In the string “what are you”, the character ‘y’ has the highest ASCII value, so it is returned."
    },
    {
        "category": "strings",
        "question": "Given a string example=”hello” what is the output of example.count(‘l’)?",
        "options": [
            "2",
            "1",
            "None",
            "0"
        ],
        "correct": 0,
        "explanation": "The method count(‘l’) returns the number of times the character ‘l’ appears in the string “hello”. In this case, ‘l’ occurs twice, so the output is 2."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nexample = \"helle\"\nprint(example.find(\"e\"))\n```",
        "options": [
            "Error",
            "-1",
            "1",
            "0"
        ],
        "correct": 2,
        "explanation": "The find() method returns the index of the first occurrence of the specified substring. In the string “helle”, the first occurrence of the letter ‘e’ is at index 1."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nexample = \"helle\"\nprint(example.rfind(\"e\"))\n```",
        "options": [
            "-1",
            "4",
            "3",
            "1"
        ],
        "correct": 1,
        "explanation": "The rfind() method returns the highest index of the specified substring in the string. In the string “helle”, the last occurrence of ‘e’ is at index 4."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nexample=\"helloworld\"\nprint(example[::-1].startswith(\"d\"))\n```",
        "options": [
            "dlrowolleh",
            "True",
            "-1",
            "None"
        ],
        "correct": 1,
        "explanation": "example[::-1] reverses the string “helloworld” to “dlrowolleh”. Then, .startswith(“d”) checks if the reversed string starts with ‘d’, which it does—so the output is True."
    },
    {
        "category": "strings",
        "question": "To concatenate two strings to a third what statements are applicable?",
        "options": [
            "s3 = s1 . s2",
            "s3 = s1.add(s2)",
            "s3 = s1.__add__(s2)",
            "s3 = s1 * s2"
        ],
        "correct": 2,
        "explanation": "The __add__() method is a special method in Python used to define the behavior of the + operator. It can be used for concatenating two strings. The statement s3 = s1.__add__(s2) is equivalent to s3 = s1 + s2."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python statement?\n\n```python\nprint(chr(ord('A')))\n```",
        "options": [
            "A",
            "B",
            "a",
            "Error"
        ],
        "correct": 0,
        "explanation": "The ord() function returns the Unicode code point (integer) of the character ‘A’, which is 65. The chr() function converts that Unicode value back to its corresponding character. So chr(ord(‘A’)) returns ‘A’."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python statement?\n\n```python\nprint(chr(ord('b')+1))\n```",
        "options": [
            "a",
            "b",
            "c",
            "A"
        ],
        "correct": 2,
        "explanation": "The ord(‘b’) returns the Unicode code point of ‘b’, which is 98. Adding 1 gives 99, and chr(99) returns ‘c’."
    },
    {
        "category": "general",
        "question": "Which of the following statement prints hello\\example\\test.txt?",
        "options": [
            "print(“hello\\example\\test.txt”)",
            "print(“hello\\\\example\\\\test.txt”)",
            "print(“hello\\”example\\”test.txt”)",
            "print(“hello”\\example”\\test.txt”)"
        ],
        "correct": 1,
        "explanation": "In Python, the backslash \\ is an escape character, so to print a file path like hello\\example\\test.txt, each backslash must be escaped as \\\\. Therefore, the correct statement is print(“hello\\\\example\\\\test.txt”), which produces the intended output with backslashes displayed properly."
    },
    {
        "category": "strings",
        "question": "Suppose s is “\\t\\tWorld\\n”, what is s.strip()?",
        "options": [
            "\\t\\tWorld\\n",
            "\\t\\tWorld\\n",
            "\\t\\tWORLD\\n",
            "World"
        ],
        "correct": 3,
        "explanation": "In the string s = “\\t\\tWorld\\n”, the strip() method removes leading and trailing whitespace characters such as tabs (\\t) and newlines (\\n). As a result, s.strip() returns “World”. This is useful for cleaning up user input or formatting strings."
    },
    {
        "category": "strings",
        "question": "The format function, when applied on a string returns ___________",
        "options": [
            "Error",
            "int",
            "bool",
            "str"
        ],
        "correct": 3,
        "explanation": "The format() function in Python returns a string where placeholders in the original string are replaced with specified values. It’s commonly used for string formatting."
    },
    {
        "category": "output",
        "question": "What will be the output of the “hello” +1+2+3?",
        "options": [
            "hello123",
            "hello",
            "Error",
            "hello6"
        ],
        "correct": 2,
        "explanation": "In Python, you cannot directly concatenate a string with integers using +. “hello” + 1 + 2 + 3 will raise a TypeError because “hello” is a string and the others are integers."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"D\", end = ' ')\nprint(\"C\", end = ' ')\nprint(\"B\", end = ' ')\nprint(\"A\", end = ' ')\n```",
        "options": [
            "DCBA",
            "A, B, C, D",
            "D C B A",
            "D, C, B, A will be displayed on four lines"
        ],
        "correct": 2,
        "explanation": "The end=’ ‘ argument in the print() function prevents the default newline and replaces it with a space. So, all values are printed on the same line, separated by spaces."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python statement?(python 3.xx)\n\n```python\nprint(format(\"Welcome\", \"10s\"), end = '#')\nprint(format(111, \"4d\"), end = '#')\nprint(format(924.656, \"3.2f\"))\n```",
        "options": [
            "Welcome# 111#924.66",
            "Welcome#111#924.66",
            "Welcome#111#.66",
            "Welcome   # 111#924.66"
        ],
        "correct": 3,
        "explanation": "The output of the given Python code formats the string “Welcome” with a width of 10 characters, padding it with spaces. The number 111 is formatted with a width of 4 characters, and the float 924.656 is rounded to two decimal places. The formatted outputs are then printed with # as separators, resulting in “Welcome # 111#924.66”."
    },
    {
        "category": "builtins",
        "question": "What will be displayed by print(ord(‘b’) – ord(‘a’))?",
        "options": [
            "0",
            "1",
            "-1",
            "2"
        ],
        "correct": 1,
        "explanation": "The ord() function returns the ASCII value of a character. The ASCII value of ‘b’ is 98 and that of ‘a’ is 97. Therefore, the expression ord(‘b’) – ord(‘a’) equals 98 – 97, which is 1."
    },
    {
        "category": "functions",
        "question": "Say s=”hello” what will be the return value of type(s)?",
        "options": [
            "int",
            "bool",
            "str",
            "String"
        ],
        "correct": 2,
        "explanation": "In Python, strings are represented by the str type. The type() function returns the type of an object, and for the string “hello”, it will return <class ‘str’>, which is the str type."
    },
    {
        "category": "general",
        "question": "What is “Hello”.replace(“l”, “e”)?",
        "options": [
            "Heeeo",
            "Heelo",
            "Heleo",
            "None"
        ],
        "correct": 0,
        "explanation": "The replace() method in Python returns a new string where all occurrences of the substring “l” are replaced with “e”. In the string “Hello”, this means every “l” will be replaced with “e”, resulting in the string “Heeeo”."
    },
    {
        "category": "strings",
        "question": "To retrieve the character at index 3 from string s=”Hello” what command do we execute (multiple answers allowed)?",
        "options": [
            "s[]",
            "s.getitem(3)",
            "s.__getitem__(3)",
            "s.getItem(3)"
        ],
        "correct": 2,
        "explanation": "In Python, __getitem__() is the method that allows access to an element of a sequence, such as a string, at a specific index. You can use s.__getitem__(3) to retrieve the character at index 3 of the string s. However, the more common and preferred way is to use the square brackets, like s[3]."
    },
    {
        "category": "strings",
        "question": "To return the length of string s what command do we execute?",
        "options": [
            "len(s) OR s.__len__()",
            "len(s) only",
            "size(s)",
            "s.size()"
        ],
        "correct": 0,
        "explanation": "In Python, the len(s) function is the standard way to get the length of a string s. Internally, len(s) calls the __len__() method of the string object. While it’s more common to use len(s), using s.__len__() directly will also return the length of the string."
    },
    {
        "category": "control",
        "question": "If a class defines the __str__(self) method, for an object obj for the class, you can use which command to invoke the __str__ method.",
        "options": [
            "obj.__str__()",
            "str(obj)",
            "print obj",
            "all of the mentioned"
        ],
        "correct": 3,
        "explanation": "If a class defines the __str__(self) method, it can be invoked in multiple ways:\nobj.__str__() directly calls the method.\nstr(obj) automatically invokes __str__().\nprint(obj) also calls __str__() internally to get the string representation.\nSo, all options are valid ways to invoke the __str__() method."
    },
    {
        "category": "strings",
        "question": "To check whether string s1 contains another string s2, use ________",
        "options": [
            "s1.__contains__(s2)",
            "s1.contains(s2)",
            "s1.in(s2)",
            "s2.in(s1)"
        ],
        "correct": 0,
        "explanation": "The method s1.__contains__(s2) checks if s2 is present in s1. It is the underlying method used when using the in operator in Python."
    },
    {
        "category": "operators",
        "question": "Suppose i is 5 and j is 4, i + j is same as ________",
        "options": [
            "i.__add(j)",
            "i.__add__(j)",
            "i.__Add(j)",
            "i.__ADD(j)"
        ],
        "correct": 1,
        "explanation": "In Python, the __add__ method is the special method used to implement the behavior of the + operator. When you use i + j, Python internally calls i.__add__(j). It’s important to use the double underscore (__add__) and not a single or capitalized version."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nclass Count:\n    def __init__(self, count = 0):\n       self.__count = count\n \nc1 = Count(2)\nc2 = Count(2)\nprint(id(c1) == id(c2), end = \" \")\n \ns1 = \"Good\"\ns2 = \"Good\"\nprint(id(s1) == id(s2))\n```",
        "options": [
            "True False",
            "True True",
            "False True",
            "False False"
        ],
        "correct": 2,
        "explanation": "In the case of objects, id(c1) and id(c2) will be different, even if the objects have the same value. However, Python optimizes memory usage for immutable objects like strings, so id(s1) and id(s2) will be the same."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nclass Name:\n    def __init__(self, firstName, mi, lastName):\n        self.firstName = firstName\n        self.mi = mi\n        self.lastName = lastName\n \nfirstName = \"John\"\nname = Name(firstName, 'F', \"Smith\")\nfirstName = \"Peter\"\nname.lastName = \"Pan\"\nprint(name.firstName, name.lastName)\n```",
        "options": [
            "Peter Pan",
            "John Pan",
            "Peter Smith",
            "John Smith"
        ],
        "correct": 1,
        "explanation": "The code defines a Name class, and creates an instance name with the first name “John” and last name “Smith”. Although the firstName variable outside the class is changed to “Peter”, the instance variable name.firstName remains “John”. After updating name.lastName to “Pan”, the final output is “John Pan”."
    },
    {
        "category": "strings",
        "question": "What function do you use to read a string?",
        "options": [
            "input(“Enter a string”)",
            "eval(input(“Enter a string”))",
            "enter(“Enter a string”)",
            "eval(enter(“Enter a string”))"
        ],
        "correct": 0,
        "explanation": "The input() function is used to take user input as a string in Python. It reads the line of text typed by the user and returns it as a string."
    },
    {
        "category": "general",
        "question": "Suppose x is 345.3546, what is format(x, “10.3f”) (_ indicates space).",
        "options": [
            "__345.355",
            "___345.355",
            "____345.355",
            "_____345.354"
        ],
        "correct": 1,
        "explanation": "The format(x, “10.3f”) specifies that the total width should be 10 characters (including spaces and the decimal point), with 3 digits after the decimal point. The number 345.3546 will be rounded to 345.355, and the result will be right-aligned with spaces padding the left side to make the total width 10 characters."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"abc DEF\".capitalize())\n```",
        "options": [
            "abc def",
            "ABC DEF",
            "Abc def",
            "Abc Def"
        ],
        "correct": 2,
        "explanation": "The .capitalize() method in Python returns a copy of the string with the first character converted to uppercase and the rest to lowercase. So, “abc DEF”.capitalize() results in “Abc def”."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"abc. DEF\".capitalize())\n```",
        "options": [
            "abc. def",
            "ABC. DEF",
            "Abc. def",
            "Abc. Def"
        ],
        "correct": 2,
        "explanation": "The capitalize() method in Python modifies a string such that only the first character is converted to uppercase while the rest are converted to lowercase. When applied to “abc. DEF”, it changes the string to “Abc. def”."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"abcdef\".center())\n```",
        "options": [
            "cd",
            "abcdef",
            "error",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The center() method in Python requires at least one argument, which specifies the total width of the resulting string after centering. If you call it without any arguments, like in print(“abcdef”.center()), it raises a TypeError."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"abcdef\".center(0))\n```",
        "options": [
            "cd",
            "abcdef",
            "error",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "The center(width) method centers the string in a field of given width. If the width is less than or equal to the string length, the original string is returned unchanged. So, “abcdef”.center(0) returns “abcdef”."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('*', \"abcdef\".center(7), '*')\n```",
        "options": [
            "* abc def",
            "*  abcdef",
            "*abcdef",
            "* abcdef"
        ],
        "correct": 1,
        "explanation": "The str.center(width) method centers a string within a given total width by padding it with spaces (by default). If the total width is greater than the string’s length, spaces are added equally to both sides as much as possible. If the extra space is odd, left side gets more space."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('*', \"abcdef\".center(7), '*', sep='')\n```",
        "options": [
            "* abcdef",
            "*  abcdef",
            "*abcdef",
            "* abcdef"
        ],
        "correct": 3,
        "explanation": "The string “abcdef” has 6 characters, and using .center(7) adds one extra space to center it in a field of width 7. Since the padding is uneven, Python places the extra space on the left. With sep=”, the final output is * abcdef*."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('*', \"abcde\".center(6), '*', sep='')\n```",
        "options": [
            "* abcde",
            "*  abcde",
            "*abcde",
            "* abcde"
        ],
        "correct": 2,
        "explanation": "The string “abcde” has 5 characters, and .center(6) adds one space to make it fit a total width of 6. Since the padding is uneven and the total width is even, Python adds the extra space to the right. With sep=”, the output becomes *abcde *."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"abcdef\".center(7, '1'))\n```",
        "options": [
            "1abcdef",
            "abcdef1",
            "abcdef",
            "error"
        ],
        "correct": 0,
        "explanation": "The string “abcdef” has 6 characters, and .center(7, ‘1’) pads it to a width of 7 using ‘1’ as the fill character. Since only 1 padding character is needed, and the total width is odd, Python adds the extra character to the left, resulting in ‘1abcdef’."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"abcdef\".center(10, '12'))\n```",
        "options": [
            "12abcdef12",
            "abcdef1212",
            "1212abcdef",
            "error"
        ],
        "correct": 3,
        "explanation": "The center() method in Python requires the fill character to be exactly one character long. Since ’12’ is two characters, this raises a TypeError."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"xyyzxyzxzxyy\".count('yy'))\n```",
        "options": [
            "2",
            "0",
            "error",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The .count(‘yy’) method counts non-overlapping occurrences of ‘yy’ in the string “xyyzxyzxzxyy”. It appears twice: once at the beginning (“xyy”) and once at the end (“xyy”)."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"xyyzxyzxzxyy\".count('yy', 1))\n```",
        "options": [
            "2",
            "0",
            "1",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The method .count(‘yy’, 1) counts occurrences of ‘yy’ starting from index 1 onward in the string “xyyzxyzxzxyy”. Both ‘yy’ substrings are still within this range, so the result is 2."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"xyyzxyzxzxyy\".count('yy', 2))\n```",
        "options": [
            "2",
            "0",
            "1",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The method .count(‘yy’, 2) starts searching for ‘yy’ from index 2 of the string “xyyzxyzxzxyy”. At this point, only the second occurrence of ‘yy’ (at the end) is within range, so the count is 1."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"xyyzxyzxzxyy\".count('xyy', 0, 100))\n```",
        "options": [
            "2",
            "0",
            "1",
            "error"
        ],
        "correct": 0,
        "explanation": "The given Python code counts the number of times the substring ‘xyy’ appears in the string “xyyzxyzxzxyy” between indices 0 and 100. Although 100 exceeds the string’s length, Python handles it gracefully. The substring ‘xyy’ appears twice, so the output is 2."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"xyyzxyzxzxyy\".count('xyy', 2, 11))\n```",
        "options": [
            "2",
            "0",
            "1",
            "error"
        ],
        "correct": 1,
        "explanation": "The method .count(‘xyy’, 2, 11) searches for the substring ‘xyy’ in “xyyzxyzxzxyy”, starting from index 2 and ending just before index 11. Since ‘xyy’ is not found between positions 2 and 10 (the end index 11 is exclusive), the count is 0."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"xyyzxyzxzxyy\".count('xyy', -10, -1))\n```",
        "options": [
            "2",
            "0",
            "1",
            "error"
        ],
        "correct": 1,
        "explanation": "The method .count(‘xyy’, -10, -1) searches for the substring ‘xyy’ in “xyyzxyzxzxyy”, starting at position -10 (which is the same as position 4) and ending at position -1 (which is the last character). In this range, ‘xyy’ is not found, so the count is 0."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('abc'.encode())\n```",
        "options": [
            "abc",
            "‘abc’",
            "b’abc’",
            "h’abc’"
        ],
        "correct": 2,
        "explanation": "The .encode() method converts a string into a bytes object. In this case, ‘abc’.encode() returns b’abc’, which is a bytes representation of the string."
    },
    {
        "category": "general",
        "question": "What is the default value of encoding in encode()?",
        "options": [
            "ascii",
            "qwerty",
            "utf-8",
            "utf-16"
        ],
        "correct": 2,
        "explanation": "In Python, the encode() method converts a string into bytes using a specified encoding. If no encoding is explicitly provided, it defaults to UTF-8, which is a widely used and versatile character encoding standard."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"xyyzxyzxzxyy\".endswith(\"xyy\"))\n```",
        "options": [
            "1",
            "True",
            "3",
            "2"
        ],
        "correct": 1,
        "explanation": "The string “xyyzxyzxzxyy” does end with the substring “xyy”, so the endswith() method returns True."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"xyyzxyzxzxyy\".endswith(\"xyy\", 0, 2))\n```",
        "options": [
            "0",
            "1",
            "True",
            "False"
        ],
        "correct": 3,
        "explanation": "The .endswith(“xyy”, 0, 2) method checks if the substring “xyy” is found at the end of the string “xyyzxyzxzxyy”, within the specified range from index 0 to index 2. Since the substring “xyy” doesn’t appear in that range (the range covers only “xy”), the result is False."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"ab\\tcd\\tef\".expandtabs())\n```",
        "options": [
            "ab      cd      ef",
            "abcdef",
            "ab\\tcd\\tef",
            "ab  cd  ef"
        ],
        "correct": 0,
        "explanation": "The expandtabs() function replaces each tab character (\\t) in the string with spaces. By default, the tab size is 8 spaces. However, it fills up to the next multiple of 8 from the current character position."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"ab\\tcd\\tef\".expandtabs(4))\n```",
        "options": [
            "ab    cd    ef",
            "abcdef",
            "ab\\tcd\\tef",
            "ab  cd  ef"
        ],
        "correct": 3,
        "explanation": "The expandtabs() function in Python replaces tab characters (\\t) in a string with spaces. By default, each tab is expanded to 8 spaces, but you can specify a custom tab size. For example, expandtabs(4) replaces each tab with up to 4 spaces based on the current character position in the string."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"ab\\tcd\\tef\".expandtabs('+'))\n```",
        "options": [
            "ab+cd+ef",
            "ab++++++++cd++++++++ef",
            "ab cd ef",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "The expandtabs() method expects an integer as an argument to specify the number of spaces to replace each tab character. Passing a string like ‘+’ causes a TypeError, making “none of the mentioned” the correct answer."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"abcdef\".find(\"cd\") == \"cd\" in \"abcdef\")\n```",
        "options": [
            "True",
            "False",
            "Error",
            "None of the mentioned"
        ],
        "correct": 1,
        "explanation": "The code checks if the index of “cd” in “abcdef” is equal to whether “cd” is in “abcdef”. The find() method returns the position of “cd” (which is 2), but in checks if “cd” exists and gives a True or False result. Since 2 == True is False, the output is False."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"abcdef\".find(\"cd\"))\n```",
        "options": [
            "True",
            "2",
            "3",
            "None of the mentioned"
        ],
        "correct": 1,
        "explanation": "The find() method in Python returns the index of the first occurrence of the specified substring. In this case, “cd” starts at index 2 in the string “abcdef”, so the output will be 2."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"ccdcddcd\".find(\"c\"))\n```",
        "options": [
            "4",
            "0",
            "Error",
            "True"
        ],
        "correct": 1,
        "explanation": "The find() method returns the index of the first occurrence of the substring. In this case, the first occurrence of “c” is at index 0 in the string “ccdcddcd”, so the output will be 0."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"Hello {0} and {1}\".format('foo', 'bin'))\n```",
        "options": [
            "Hello foo and bin",
            "Hello {0} and {1} foo bin",
            "Error",
            "Hello 0 and 1"
        ],
        "correct": 0,
        "explanation": "The str.format() method replaces {0} and {1} with the first and second arguments respectively. So ‘foo’ replaces {0} and ‘bin’ replaces {1} resulting in “Hello foo and bin”."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"Hello {1} and {0}\".format('bin', 'foo'))\n```",
        "options": [
            "Hello foo and bin",
            "Hello bin and foo",
            "Error",
            "None of the mentioned"
        ],
        "correct": 0,
        "explanation": "The given Python code uses the format() method to insert values into a string using positional indexes. {1} refers to the second argument (‘foo’) and {0} refers to the first argument (‘bin’). Therefore, the output is “Hello foo and bin”."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"Hello {} and {}\".format('foo', 'bin'))\n```",
        "options": [
            "Hello foo and bin",
            "Hello {} and {}",
            "Error",
            "Hello and"
        ],
        "correct": 0,
        "explanation": "The format() method is used to substitute the {} placeholders with the values passed as arguments. In this case, {} will be replaced by ‘foo’ and ‘bin’. Therefore, the output will be: Hello foo and bin."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"Hello {name1} and {name2}\".format('foo', 'bin'))\n```",
        "options": [
            "Hello foo and bin",
            "Hello {name1} and {name2}",
            "Error",
            "Hello and"
        ],
        "correct": 2,
        "explanation": "The code provided leads to an error because the placeholders {name1} and {name2} expect values to be passed with named arguments. In the given example, only positional arguments (‘foo’ and ‘bin’) are provided, causing a mismatch. To avoid the error, named arguments should be used in the format() method"
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"Hello {name1} and {name2}\".format(name1='foo', name2='bin'))\n```",
        "options": [
            "Hello foo and bin",
            "Hello {name1} and {name2}",
            "Error",
            "Hello and"
        ],
        "correct": 0,
        "explanation": "The .format() method in Python replaces placeholders in a string with specified values. Here, {name1} and {name2} are named placeholders that get replaced by ‘foo’ and ‘bin’ respectively. As a result, the output is: “Hello foo and bin”."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"Hello {0!r} and {0!s}\".format('foo', 'bin'))\n```",
        "options": [
            "Hello foo and foo",
            "Hello ‘foo’ and foo",
            "Hello foo and ‘bin’",
            "Error"
        ],
        "correct": 1,
        "explanation": "The output of the code is Hello ‘foo’ and foo. Here, {0!r} uses repr() which includes quotes around the string, while {0!s} uses str() which prints the string without quotes. Only the first argument ‘foo’ is used in both placeholders."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"Hello {0} and {1}\".format(('foo', 'bin')))\n```",
        "options": [
            "Hello foo and bin",
            "Hello (‘foo’, ‘bin’) and (‘foo’, ‘bin’)",
            "Error",
            "None of the mentioned"
        ],
        "correct": 2,
        "explanation": "The .format() method expects each placeholder index to match a corresponding argument. Here, only one argument is passed—a tuple (‘foo’, ‘bin’) but the format string tries to access two separate arguments ({0} and {1}). Since there’s no second top-level argument, this results in an IndexError."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"Hello {0[0]} and {0[1]}\".format(('foo', 'bin')))\n```",
        "options": [
            "Hello foo and bin",
            "Hello (‘foo’, ‘bin’) and (‘foo’, ‘bin’)",
            "Error",
            "None of the mentioned"
        ],
        "correct": 0,
        "explanation": "The output of the code is Hello foo and bin. Here, the format string uses index-based access to retrieve elements from the tuple passed as a single argument. {0[0]} and {0[1]} access the first and second elements of the tuple respectively."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('The sum of {0} and {1} is {2}'.format(2, 10, 12))\n```",
        "options": [
            "The sum of 2 and 10 is 12",
            "Error",
            "The sum of 0 and 1 is 2",
            "None of the mentioned"
        ],
        "correct": 0,
        "explanation": "The output of the code is The sum of 2 and 10 is 12. Here, the format() method simply replaces the placeholders {0}, {1}, and {2} with the values 2, 10, and 12, respectively. Integers can be directly passed as arguments to the format() function."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('The sum of {0:b} and {1:x} is {2:o}'.format(2, 10, 12))\n```",
        "options": [
            "The sum of 2 and 10 is 12",
            "The sum of 10 and a is 14",
            "The sum of 10 and a is c",
            "Error"
        ],
        "correct": 1,
        "explanation": "The .format() method uses format specifiers to convert the given integers into different bases. {0:b} converts 2 to binary (10), {1:x} converts 10 to hexadecimal (a), and {2:o} converts 12 to octal (14). Therefore, the output is: “The sum of 10 and a is 14”."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('{:,}'.format(1112223334))\n```",
        "options": [
            "1,112,223,334",
            "111,222,333,4",
            "1112223334",
            "Error"
        ],
        "correct": 0,
        "explanation": "In this code, the .format() method is used with the :, format specifier, which adds commas to separate every three digits from the right. So, the number 1112223334 is formatted as 1,112,223,334, with commas added for readability."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('{:,}'.format('1112223334'))\n```",
        "options": [
            "1,112,223,334",
            "111,222,333,4",
            "1112223334",
            "Error"
        ],
        "correct": 3,
        "explanation": "The :, format specifier expects a numeric value (either an integer or a float), but here the input is a string (‘1112223334’). Since the format specifier cannot handle strings for numeric formatting, this results in a TypeError. Therefore, the output is an error."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('{:$}'.format(1112223334))\n```",
        "options": [
            "1,112,223,334",
            "111,222,333,4",
            "1112223334",
            "Error"
        ],
        "correct": 3,
        "explanation": "In Python, the $ symbol is not a valid format specifier for numbers in the .format() method. As a result, attempting to use {:$} leads to a ValueError because $ is not recognized as a valid formatting option."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('{:#}'.format(1112223334))\n```",
        "options": [
            "1,112,223,334",
            "111,222,333,4",
            "1112223334",
            "Error"
        ],
        "correct": 2,
        "explanation": "The # format specifier in Python is used for special formatting, such as adding a prefix for binary, octal, or hexadecimal numbers. However, when applied to a plain integer, it doesn’t alter the number. In this case, it prints the number as it is, without any changes. Therefore, the output is 1112223334."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('{0:.2}'.format(1/3))\n```",
        "options": [
            "0.333333",
            "0.33",
            "0.333333:.2",
            "Error"
        ],
        "correct": 1,
        "explanation": "The format specifier {0:.2} is used to format the first argument (1/3) to a precision of 2 significant digits. In this case, 1/3 ≈ 0.3333, and when rounded to 2 significant digits, it becomes 0.33. So, the output is 0.33."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('{0:.2%}'.format(1/3))\n```",
        "options": [
            "0.33",
            "0.33%",
            "33.33%",
            "33%"
        ],
        "correct": 2,
        "explanation": "The format specifier {0:.2%} converts the number to a percentage by multiplying it by 100 and appending a % sign. It also rounds the result to 2 decimal places. Since 1/3 ≈ 0.3333, it becomes 33.33% when formatted this way."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('ab12'.isalnum())\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 0,
        "explanation": "The .isalnum() method returns True if the string contains only alphanumeric characters (letters and digits) and no spaces or special characters. Since ‘ab12’ contains only letters and digits, the result is True."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('ab,12'.isalnum())\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 1,
        "explanation": "The .isalnum() method returns True only if all characters in the string are letters or digits. In ‘ab,12’, the comma , is neither a letter nor a digit, so .isalnum() returns False."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('ab'.isalpha())\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 0,
        "explanation": "The isalpha() method in Python returns True if all characters in the string are alphabetic (i.e., letters from A–Z or a–z) and there is at least one character. In this case, ‘ab’ contains only letters, so the result is True."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('a B'.isalpha())\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 1,
        "explanation": "The isalpha() method returns True only if all characters in the string are alphabetic and there is at least one character. In the string ‘a B’, there is a space character, which is not alphabetic. Hence, ‘a B’.isalpha() returns False."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('0xa'.isdigit())\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 1,
        "explanation": "The .isdigit() method returns True only if all characters in the string are decimal digits (0–9). In ‘0xa’, the characters ‘x’ and ‘a’ are not digits, so the method returns False. Hexadecimal representations like ‘0xa’ are not treated as numeric digits by .isdigit()."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint(''.isdigit())\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 1,
        "explanation": "The .isdigit() method returns True only if all characters in the string are digits and there is at least one character. Since the string is empty (”), there are no characters to check, so .isdigit() returns False."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('my_string'.isidentifier())\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 0,
        "explanation": "The .isidentifier() method returns True if the string is a valid Python identifier, meaning it can be used as a variable name. ‘my_string’ follows the rules: it starts with a letter, contains only letters, digits, or underscores, and doesn’t use any reserved keywords. So, the result is True."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('__foo__'.isidentifier())\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 0,
        "explanation": "The .isidentifier() method in Python checks whether a string is a valid identifier. A string like ‘__foo__’ is considered valid because it starts with an underscore and contains only alphanumeric characters or underscores. Special names like this are often used internally in Python but are still valid identifiers."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('a@ 1,'.islower())\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 0,
        "explanation": "The .islower() method returns True if all alphabetic characters in the string are lowercase, ignoring non-alphabetic characters like @, space, 1, and ,. Since there are no uppercase letters and the alphabetic characters are lowercase, the result is True."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('11'.isnumeric())\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 0,
        "explanation": "The .isnumeric() method returns True if all characters in the string are numeric characters. Since ’11’ contains only numeric digits, the method returns True."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('1.1'.isnumeric())\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 1,
        "explanation": "The .isnumeric() method returns True only if all characters in the string are numeric characters. Since the string ‘1.1’ contains a dot . which is not numeric, the method returns False."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('1@ a'.isprintable())\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 0,
        "explanation": "The .isprintable() method returns True if all characters in the string are printable, including letters, digits, punctuation, and whitespace. Since ‘1@ a’ contains only printable characters, the result is True."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint(''''''.isspace())\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 1,
        "explanation": "The string ””’ is an empty string (no characters). The .isspace() method returns True only if all characters in the string are whitespace characters. Since the string is empty and contains no characters at all, .isspace() returns False."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('\\t'.isspace())\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 0,
        "explanation": "The .isspace() method returns True if all characters in the string are whitespace characters, which include spaces, tabs (\\t), newlines, and similar. Since ‘\\t’ is a tab character, it counts as whitespace, so the result is True."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('HelloWorld'.istitle())\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 1,
        "explanation": "The .istitle() method checks if each word in the string starts with an uppercase letter followed by lowercase letters. In ‘HelloWorld’, Python treats it as a single word with multiple uppercase letters, which violates the title case rule. Therefore, the output is False."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('Hello World'.istitle())\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 0,
        "explanation": "The .istitle() method returns True if each word in the string starts with an uppercase letter followed by lowercase letters. In ‘Hello World’, both “Hello” and “World” follow this rule, so the method returns True."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('Hello!2@#World'.istitle())\n```",
        "options": [
            "True",
            "False",
            "None",
            "error"
        ],
        "correct": 0,
        "explanation": "The .istitle() method checks if each word starts with an uppercase letter followed by lowercase letters. Non-alphabetic characters like !2@# do not affect this check and are treated as separators or ignored. In ‘Hello!2@#World’, both “Hello” and “World” start with uppercase letters followed by lowercase letters, so .istitle() returns True."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('1Rn@'.lower())\n```",
        "options": [
            "n",
            "1rn@",
            "rn",
            "r"
        ],
        "correct": 1,
        "explanation": "The .lower() method converts all uppercase letters in the string to their lowercase equivalents. Other characters, such as digits (1) and special characters (@), remain unchanged. So ‘1Rn@’.lower() becomes ‘1rn@’."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('''\n \\tfoo'''.lstrip())\n```",
        "options": [
            "\\tfoo",
            "foo",
            "foo",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "The .lstrip() method removes all leading whitespace characters, including spaces, tabs (\\t), and newlines. In the given string, the leading newline and tab before foo are removed, leaving just ‘foo’."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('xyyzxxyxyy'.lstrip('xyy'))\n```",
        "options": [
            "error",
            "zxxyxyy",
            "z",
            "zxxy"
        ],
        "correct": 1,
        "explanation": "The .lstrip(‘xyy’) method removes all leading characters that are in the set {‘x’, ‘y’} from the start of the string until it encounters a character not in this set. Here, the string ‘xyyzxxyxyy’ starts with ‘x’, ‘y’, ‘y’, which are removed. The next character is ‘z’, which is not in the set, so stripping stops. The remaining string is ‘zxxyxyy’."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('xyxxyyzxxy'.lstrip('xyy'))\n```",
        "options": [
            "zxxy",
            "xyxxyyzxxy",
            "xyxzxxy",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The .lstrip(‘xyy’) method removes all leading characters that are in the set ‘x’, ‘y’ (duplicates don’t affect). It keeps stripping characters from the left until it encounters a character not in this set. In the string ‘xyxxyyzxxy’, it strips the leading ‘x’, ‘y’, ‘x’, ‘x’, ‘y’, ‘y’ until it reaches ‘z’, which is not in the set. The remaining string is ‘zxxy’."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('cba'.maketrans('abc', '123'))\n```",
        "options": [
            "{97: 49, 98: 50, 99: 51}",
            "{65: 49, 66: 50, 67: 51}",
            "321",
            "123"
        ],
        "correct": 0,
        "explanation": "The maketrans(‘abc’, ‘123’) method returns a translation table (a dictionary) mapping the Unicode code points of characters in ‘abc’ to those in ‘123’.\n‘a’ → ASCII 97 maps to ‘1’ → ASCII 49\n‘b’ → ASCII 98 maps to ‘2’ → ASCII 50\n‘c’ → ASCII 99 maps to ‘3’ → ASCII 51\nSo the result is {97: 49, 98: 50, 99: 51}."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('a'.maketrans('ABC', '123'))\n```",
        "options": [
            "{97: 49, 98: 50, 99: 51}",
            "{65: 49, 66: 50, 67: 51}",
            "{97: 49}",
            "1"
        ],
        "correct": 1,
        "explanation": "The maketrans() method is a static method, so calling ‘a’.maketrans(‘ABC’, ‘123’) is the same as str.maketrans(‘ABC’, ‘123’). It creates a translation table mapping Unicode code points of uppercase ‘A’ (65), ‘B’ (66), and ‘C’ (67) to ‘1’ (49), ‘2’ (50), and ‘3’ (51) respectively. The original string ‘a’ does not affect the output."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('abcdef'.partition('cd'))\n```",
        "options": [
            "(‘ab’, ‘ef’)",
            "(‘abef’)",
            "(‘ab’, ‘cd’, ‘ef’)",
            "2"
        ],
        "correct": 2,
        "explanation": "The .partition() method splits the string into a tuple of three parts:\nThe part before the separator (‘cd’)\nThe separator itself (‘cd’)\nThe part after the separator\nFor ‘abcdef’.partition(‘cd’), it splits as (‘ab’, ‘cd’, ‘ef’)."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('abcdefcdgh'.partition('cd'))\n```",
        "options": [
            "(‘ab’, ‘cd’, ‘ef’, ‘cd’, ‘gh’)",
            "(‘ab’, ‘cd’, ‘efcdgh’)",
            "(‘abcdef’, ‘cd’, ‘gh’)",
            "error"
        ],
        "correct": 1,
        "explanation": "The .partition(‘cd’) method splits the string at the first occurrence of the separator ‘cd’. It returns a tuple of three parts:\nThe part before the first ‘cd’ → ‘ab’\nThe separator itself → ‘cd’\nThe rest of the string after the first ‘cd’ → ‘efcdgh’\nSo, the output is (‘ab’, ‘cd’, ‘efcdgh’)."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint('abcd'.partition('cd'))\n```",
        "options": [
            "(‘ab’, ‘cd’, ”)",
            "(‘ab’, ‘cd’)",
            "error",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The .partition(‘cd’) method splits the string at the first occurrence of ‘cd’. It returns a tuple with three parts:\nThe part before ‘cd’ → ‘ab’\nThe separator itself → ‘cd’\nThe part after ‘cd’ → since ‘cd’ is at the end, this is an empty string ”\nThus, the output is (‘ab’, ‘cd’, ”)."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('cd'.partition('cd'))\n```",
        "options": [
            "(‘cd’)",
            "(”)",
            "(‘cd’, ”, ”)",
            "(”, ‘cd’, ”)"
        ],
        "correct": 3,
        "explanation": "When using .partition(‘cd’) on the string ‘cd’, the separator ‘cd’ matches the entire string. The .partition() method returns a tuple:\nThe part before the match → ” (nothing before ‘cd’)\nThe separator itself → ‘cd’\nThe part after the match → ” (nothing after ‘cd’)\nSo, the result is (”, ‘cd’, ”)."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('abef'.partition('cd'))\n```",
        "options": [
            "(‘abef’)",
            "(‘abef’, ‘cd’, ”)",
            "(‘abef’, ”, ”)",
            "error"
        ],
        "correct": 2,
        "explanation": "When the separator ‘cd’ is not found in the string ‘abef’, the .partition() method returns a tuple:\nThe original string as the first element → ‘abef’\nAn empty string as the second element (no separator found) → ”\nAnother empty string as the third element → ”\nSo, the output is (‘abef’, ”, ”)."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('abcdef12'.replace('cd', '12'))\n```",
        "options": [
            "ab12ef12",
            "abcdef12",
            "ab12efcd",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The .replace(‘cd’, ’12’) method replaces all occurrences of ‘cd’ with ’12’ in the string ‘abcdef12’. Since ‘cd’ appears once, it is replaced, resulting in ‘ab12ef12’. The method processes the string from left to right."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('abef'.replace('cd', '12'))\n```",
        "options": [
            "abef",
            "12",
            "error",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The .replace(‘cd’, ’12’) method looks for the substring ‘cd’ in ‘abef’, but since it is not found, the original string is returned unchanged. No error is raised."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('abcefd'.replace('cd', '12'))\n```",
        "options": [
            "ab1ef2",
            "abcefd",
            "ab1efd",
            "ab12ed2"
        ],
        "correct": 1,
        "explanation": "The .replace(‘cd’, ’12’) method attempts to find the substring ‘cd’ in ‘abcefd’. Since ‘cd’ does not exist in the string, no replacement is made, and the original string ‘abcefd’ is returned unchanged."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('xyyxyyxyxyxxy'.replace('xy', '12', 0))\n```",
        "options": [
            "xyyxyyxyxyxxy",
            "12y12y1212x12",
            "12yxyyxyxyxxy",
            "xyyxyyxyxyx12"
        ],
        "correct": 0,
        "explanation": "The .replace(old, new, count) method replaces at most count occurrences of old with new. If the count is 0, it means replace zero occurrences, so no replacements are made. In this case, ‘xyyxyyxyxyxxy’.replace(‘xy’, ’12’, 0) results in the original string being returned unchanged: ‘xyyxyyxyxyxxy’."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('xyyxyyxyxyxxy'.replace('xy', '12', 100))\n```",
        "options": [
            "xyyxyyxyxyxxy",
            "12y12y1212x12",
            "none of the mentioned",
            "error"
        ],
        "correct": 1,
        "explanation": "The .replace(‘xy’, ’12’, 100) method replaces up to 100 occurrences of ‘xy’ with ’12’. Since there are fewer than 100 matches in the string ‘xyyxyyxyxyxxy’, all occurrences of ‘xy’ are replaced.\nHere’s how it works step-by-step:\n\n‘xyy’ → ’12y’\n‘xyy’ → ’12y’\nnext ‘xy’ → ’12’\nnext ‘xy’ → ’12’\n‘xxy’ → only one ‘xy’ is replaced → ‘x12’\nFinal result: ’12y12y1212x12′"
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('abcdefcdghcd'.split('cd'))\n```",
        "options": [
            "[‘ab’, ‘ef’, ‘gh’]",
            "[‘ab’, ‘ef’, ‘gh’, ”]",
            "(‘ab’, ‘ef’, ‘gh’)",
            "(‘ab’, ‘ef’, ‘gh’, ”)"
        ],
        "correct": 1,
        "explanation": "The .split(‘cd’) method divides the string ‘abcdefcdghcd’ at each occurrence of ‘cd’. This results in four parts: ‘ab’, ‘ef’, ‘gh’, and an empty string ” at the end because the string ends with ‘cd’. Therefore, the output is [‘ab’, ‘ef’, ‘gh’, ”]."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('abcdefcdghcd'.split('cd', 0))\n```",
        "options": [
            "[‘abcdefcdghcd’]",
            "‘abcdefcdghcd’",
            "error",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The .split(‘cd’, 0) method tells Python to split the string at 0 occurrences of the substring ‘cd’. Since the count is zero, no splitting happens, and the entire original string is returned as a single-element list: [‘abcdefcdghcd’]."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('abcdefcdghcd'.split('cd', -1))\n```",
        "options": [
            "[‘ab’, ‘ef’, ‘gh’]",
            "[‘ab’, ‘ef’, ‘gh’, ”]",
            "(‘ab’, ‘ef’, ‘gh’)",
            "(‘ab’, ‘ef’, ‘gh’, ”)"
        ],
        "correct": 1,
        "explanation": "When .split(‘cd’, -1) is called with a negative maxsplit, it behaves the same as if maxsplit was not specified at all. This means the string ‘abcdefcdghcd’ is split at every occurrence of ‘cd’, resulting in the list [‘ab’, ‘ef’, ‘gh’, ”]. The last element is an empty string because the string ends with ‘cd’."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('abcdefcdghcd'.split('cd', 2))\n```",
        "options": [
            "[‘ab’, ‘ef’, ‘ghcd’]",
            "[‘ab’, ‘efcdghcd’]",
            "[‘abcdef’, ‘ghcd’]",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The .split() method in Python is used to divide a string into a list based on a specified separator. When a second argument maxsplit is provided, it limits the number of splits that will be performed. In the code print(‘abcdefcdghcd’.split(‘cd’, 2)), the string is split at the substring ‘cd’ with a maximum of 2 splits. This results in three parts: ‘ab’, ‘ef’, and ‘ghcd’. The method stops after two splits, even though the separator appears again, so the output is [‘ab’, ‘ef’, ‘ghcd’]."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('ab\\ncd\\nef'.splitlines())\n```",
        "options": [
            "[‘ab’, ‘cd’, ‘ef’]",
            "[‘ab\\n’, ‘cd\\n’, ‘ef\\n’]",
            "[‘ab\\n’, ‘cd\\n’, ‘ef’]",
            "[‘ab’, ‘cd’, ‘ef\\n’]"
        ],
        "correct": 0,
        "explanation": "The .splitlines() method in Python is used to split a string at line boundaries, such as newline characters (\\n), and returns a list of lines. By default, it removes the line break characters in the resulting list. In the code snippet print(‘ab\\ncd\\nef’.splitlines()), the string contains two newline characters, which split the string into three parts: ‘ab’, ‘cd’, and ‘ef’. Since the newline characters are not retained, the output is [‘ab’, ‘cd’, ‘ef’]."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('Ab!2'.swapcase())\n```",
        "options": [
            "AB!@",
            "ab12",
            "aB!2",
            "aB1@"
        ],
        "correct": 2,
        "explanation": "The .swapcase() method switches uppercase letters to lowercase and lowercase letters to uppercase in the given string, while leaving non-letter characters unchanged. In ‘Ab!2’, the uppercase ‘A’ becomes lowercase ‘a’, the lowercase ‘b’ becomes uppercase ‘B’, and the characters ‘!’ and ‘2’ remain the same. Thus, the output is ‘aB!2’."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('ab cd ef'.title())\n```",
        "options": [
            "Ab cd ef",
            "Ab cd eF",
            "Ab Cd Ef",
            "None of the mentioned"
        ],
        "correct": 2,
        "explanation": "The .title() method capitalizes the first letter of every word in the string. Here, each word—’ab’, ‘cd’, and ‘ef’—has its first letter converted to uppercase, resulting in ‘Ab Cd Ef’."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('ab cd-ef'.title())\n```",
        "options": [
            "Ab cd-ef",
            "Ab Cd-ef",
            "Ab Cd-Ef",
            "None of the mentioned"
        ],
        "correct": 2,
        "explanation": "The .title() method capitalizes the first letter of each word, where words are separated by whitespace and special characters like -. In the string ‘ab cd-ef’, the words are ‘ab’, ‘cd’, and ‘ef’. Because the hyphen – is treated as a separator, ‘ef’ is also capitalized, resulting in ‘Ab Cd-Ef’."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('abcd'.translate('a'.maketrans('abc', 'bcd')))\n```",
        "options": [
            "bcde",
            "abcd",
            "error",
            "bcdd"
        ],
        "correct": 3,
        "explanation": "The maketrans(‘abc’, ‘bcd’) creates a translation table that maps ‘a’→’b’, ‘b’→’c’, and ‘c’→’d’. When ‘abcd’.translate(…) is called, each character is replaced according to this table:\n‘a’ becomes ‘b’\n‘b’ becomes ‘c’\n‘c’ becomes ‘d’\n‘d’ remains ‘d’ (since it’s not in the translation table)\nHence, the final output is ‘bcdd’."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('abcd'.translate({97: 98, 98: 99, 99: 100}))\n```",
        "options": [
            "bcde",
            "abcd",
            "error",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "The translate() method takes a dictionary mapping Unicode ordinal values of characters to their replacements. Here, the dictionary {97: 98, 98: 99, 99: 100} maps:\n97 (which is ‘a’) → 98 (‘b’)\n98 (‘b’) → 99 (‘c’)\n99 (‘c’) → 100 (‘d’)\nThe character ‘d’ (Unicode 100) is not mapped, so it remains unchanged. Therefore, ‘abcd’.translate(…) outputs ‘bcde’."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('abcd'.translate({'a': '1', 'b': '2', 'c': '3', 'd': '4'}))\n```",
        "options": [
            "abcd",
            "1234",
            "error",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The .translate() method requires a translation table with integer Unicode code points as keys. In the given code, the dictionary uses string characters instead of integers, so no translation occurs, and the original string ‘abcd’ is returned. To correctly perform character replacement, str.maketrans() should be used."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('ab'.zfill(5))\n```",
        "options": [
            "000ab",
            "00ab0",
            "0ab00",
            "ab000"
        ],
        "correct": 0,
        "explanation": "The .zfill(5) method pads the string on the left with zeros until its total length is 5. Since ‘ab’ has length 2, three zeros are added to the left, resulting in ‘000ab’. This method is commonly used for formatting numbers with leading zeros."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint('+99'.zfill(5))\n```",
        "options": [
            "00+99",
            "00099",
            "+0099",
            "+++99"
        ],
        "correct": 2,
        "explanation": "The .zfill(width) method pads the string with zeros on the left until it reaches the specified width. If the string starts with a plus or minus sign, zeros are inserted after the sign but before the rest of the characters. Here, ‘+99’.zfill(5) adds two zeros after the + to make the total length 5, resulting in ‘+0099’."
    },
    {
        "category": "lists",
        "question": "Which of the following commands will create a list?",
        "options": [
            "list1 = list()",
            "list1 = []",
            "list1 = list([1, 2, 3])",
            "all of the mentioned"
        ],
        "correct": 3,
        "explanation": "All the given commands create a list in Python but in slightly different ways. The statement list1 = list() initializes an empty list using the list() constructor. Similarly, list1 = [] creates an empty list using list literal syntax, which is more concise. The command list1 = list([1, 2, 3]) creates a new list by copying the elements from the existing iterable [1, 2, 3]. Therefore, all options correctly create a list."
    },
    {
        "category": "lists",
        "question": "What is the output when we execute list(“hello”)?",
        "options": [
            "[‘h’, ‘e’, ‘l’, ‘l’, ‘o’]",
            "[‘hello’]",
            "[‘llo’]",
            "[‘olleh’]"
        ],
        "correct": 0,
        "explanation": "Using list(“hello”) converts the string into a list of its individual characters, so each letter becomes a separate element in the list. Hence, the output is [‘h’, ‘e’, ‘l’, ‘l’, ‘o’]."
    },
    {
        "category": "strings",
        "question": "Suppose listExample is [‘h’,’e’,’l’,’l’,’o’], what is len(listExample)?",
        "options": [
            "5",
            "4",
            "None",
            "Error"
        ],
        "correct": 0,
        "explanation": "The list [‘h’, ‘e’, ‘l’, ‘l’, ‘o’] contains 5 elements, so using len(listExample) returns 5, which is the number of items in the list."
    },
    {
        "category": "lists",
        "question": "Suppose list1 is [2445,133,12454,123], what is max(list1)?",
        "options": [
            "2445",
            "133",
            "12454",
            "123"
        ],
        "correct": 2,
        "explanation": "The max() function returns the largest element in the list. Among the elements [2445, 133, 12454, 123], 12454 is the maximum value."
    },
    {
        "category": "lists",
        "question": "Suppose list1 is [3, 5, 25, 1, 3], what is min(list1)?",
        "options": [
            "3",
            "5",
            "25",
            "1"
        ],
        "correct": 3,
        "explanation": "The min() function returns the smallest element in the list. For the list [3, 5, 25, 1, 3], the smallest number is 1."
    },
    {
        "category": "lists",
        "question": "Suppose list1 is [1, 5, 9], what is sum(list1)?",
        "options": [
            "1",
            "9",
            "15",
            "Error"
        ],
        "correct": 2,
        "explanation": "The sum() function adds all elements in the list. For [1, 5, 9], the sum is 1 + 5 + 9 = 15."
    },
    {
        "category": "lists",
        "question": "To shuffle the list(say list1) what function do we use?",
        "options": [
            "list1.shuffle()",
            "shuffle(list1)",
            "random.shuffle(list1)",
            "random.shuffleList(list1)"
        ],
        "correct": 2,
        "explanation": "The shuffle() function is part of the random module, so you need to import random first and then call random.shuffle(list1) to randomly reorder the elements of the list."
    },
    {
        "category": "lists",
        "question": "Suppose list1 is [4, 2, 2, 4, 5, 2, 1, 0], Which of the following is correct syntax for slicing operation?",
        "options": [
            "print(list1[2:])",
            "print(list1[:2])",
            "print(list1[:-2])",
            "all of the mentioned"
        ],
        "correct": 3,
        "explanation": "All these slicing operations are valid on lists:\nlist1[2:] prints elements from index 2 to the end.\nlist1[:2] prints elements from the start up to (but not including) index 2.\nlist1[:-2] prints elements from the start up to (but not including) the last two elements.\nSlicing works the same way for lists as it does for strings."
    },
    {
        "category": "lists",
        "question": "Suppose list1 is [2, 33, 222, 14, 25], What is list1[-1]?",
        "options": [
            "Error",
            "None",
            "25",
            "2"
        ],
        "correct": 2,
        "explanation": "In Python, negative indexing starts from the end of the list, where -1 refers to the last element. So, list1[-1] returns 25, which is the last item in the list [2, 33, 222, 14, 25]."
    },
    {
        "category": "lists",
        "question": "Suppose list1 is [2, 33, 222, 14, 25], What is list1[:-1]?",
        "options": [
            "[2, 33, 222, 14]",
            "Error",
            "25",
            "[25, 14, 222, 33, 2]"
        ],
        "correct": 0,
        "explanation": "list1[:-1] slices the list from the beginning up to (but not including) the last element. So it returns all elements except the last one, which gives [2, 33, 222, 14]."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nnames = ['Amir', 'Bear', 'Charlton', 'Daman']\nprint(names[-1][-1])\n```",
        "options": [
            "A",
            "Daman",
            "Error",
            "n"
        ],
        "correct": 3,
        "explanation": "The output of the given Python code is n. This happens because names[-1] accesses the last element in the list, which is the string ‘Daman’. Then, by adding another [-1], the code accesses the last character of that string, which is ‘n’. So, the final printed result is the character ‘n’."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nnames1 = ['Amir', 'Bear', 'Charlton', 'Daman']\nnames2 = names1\nnames3 = names1[:]\n \nnames2[0] = 'Alice'\nnames3[1] = 'Bob'\n \nsum = 0\nfor ls in (names1, names2, names3):\n    if ls[0] == 'Alice':\n        sum += 1\n    if ls[1] == 'Bob':\n        sum += 10\n \nprint (sum)\n```",
        "options": [
            "11",
            "12",
            "21",
            "22"
        ],
        "correct": 1,
        "explanation": "In this code, names2 is just another reference to the same list as names1, so changes to names2 also affect names1. However, names3 is a copy of names1 and can be modified independently. As a result, the sum counts the changes in both names1 and names2 for ‘Alice’ and in names3 for ‘Bob’, totaling 12."
    },
    {
        "category": "lists",
        "question": "Suppose list1 is [1, 3, 2], What is list1 * 2?",
        "options": [
            "[2, 6, 4]",
            "[1, 3, 2, 1, 3]",
            "[1, 3, 2, 1, 3, 2]",
            "[1, 3, 2, 3, 2, 1]"
        ],
        "correct": 2,
        "explanation": "When you multiply a list by an integer in Python, it repeats the list elements that many times. So, for the list [1, 3, 2], multiplying it by 2 will concatenate the list with itself, resulting in [1, 3, 2, 1, 3, 2]."
    },
    {
        "category": "lists",
        "question": "Suppose list1 = [0.5 * x for x in range(0, 4)], list1 is:",
        "options": [
            "[0, 1, 2, 3]",
            "[0, 1, 2, 3, 4]",
            "[0.0, 0.5, 1.0, 1.5]",
            "[0.0, 0.5, 1.0, 1.5, 2.0]"
        ],
        "correct": 2,
        "explanation": "The list comprehension multiplies each integer x in range(0, 4) by 0.5, producing [0*0.5, 1*0.5, 2*0.5, 3*0.5] which equals [0.0, 0.5, 1.0, 1.5]."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nlist1 = [11, 2, 23]\nlist2 = [11, 2, 2]\nprint(list1 < list2)\n```",
        "options": [
            "True",
            "False",
            "Error",
            "None"
        ],
        "correct": 1,
        "explanation": "In Python, when comparing two lists using the < operator, elements are compared lexicographically, just like strings. The comparison proceeds element by element until a difference is found. In the given example, [11, 2, 23] < [11, 2, 2] evaluates to False because 23 is greater than 2."
    },
    {
        "category": "lists",
        "question": "To add a new element to a list we use which command?",
        "options": [
            "list1.add(5)",
            "list1.append(5)",
            "list1.addLast(5)",
            "list1.addEnd(5)"
        ],
        "correct": 1,
        "explanation": "To add a new element to a list in Python, we use the append() method. This method adds the specified element to the end of the list. So, list1.append(5) correctly adds 5 to list1."
    },
    {
        "category": "lists",
        "question": "To insert 5 to the third position in list1, we use which command?",
        "options": [
            "list1.insert(3, 5)",
            "list1.insert(2, 5)",
            "list1.add(3, 5)",
            "list1.append(3, 5)"
        ],
        "correct": 1,
        "explanation": "To insert an element at a specific position in a Python list, we use the insert() method, which takes two arguments: the index and the element. Python uses 0-based indexing, so the third position corresponds to index 2. Hence, the correct command is: list1.insert(2, 5)."
    },
    {
        "category": "strings",
        "question": "To remove string “hello” from list1, we use which command?",
        "options": [
            "list1.remove(“hello”)",
            "list1.remove(hello)",
            "list1.removeAll(“hello”)",
            "list1.removeOne(“hello”)"
        ],
        "correct": 0,
        "explanation": "list.remove(value) searches for and removes the first occurrence of the specified value from the list. The correct syntax is list1.remove('hello')."
    },
    {
        "category": "lists",
        "question": "Suppose list1 is [3, 4, 5, 20, 5], what is list1.index(5)?",
        "options": [
            "0",
            "1",
            "4",
            "2"
        ],
        "correct": 3,
        "explanation": "The index() method returns the index of the first occurrence of the specified value.\nIn the list list1 = [3, 4, 5, 20, 5], the value 5 first appears at index 2 (0-based indexing), so list1.index(5) returns 2."
    },
    {
        "category": "lists",
        "question": "Suppose list1 is [3, 4, 5, 20, 5, 25, 1, 3], what is list1.count(5)?",
        "options": [
            "0",
            "4",
            "1",
            "2"
        ],
        "correct": 3,
        "explanation": "The count() method returns the number of times a specified value appears in the list. In list1 = [3, 4, 5, 20, 5, 25, 1, 3], the value 5 appears twice, so list1.count(5) returns 2."
    },
    {
        "category": "lists",
        "question": "Suppose list1 is [3, 4, 5, 20, 5, 25, 1, 3], what is list1 after list1.reverse()?",
        "options": [
            "[3, 4, 5, 20, 5, 25, 1, 3]",
            "[1, 3, 3, 4, 5, 5, 20, 25]",
            "[25, 20, 5, 5, 4, 3, 3, 1]",
            "[3, 1, 25, 5, 20, 5, 4, 3]"
        ],
        "correct": 3,
        "explanation": "The reverse() method in Python modifies the original list by reversing the order of its elements. For example, if list1 = [3, 4, 5, 20, 5, 25, 1, 3], then after list1.reverse(), the list becomes [3, 1, 25, 5, 20, 5, 4, 3]. This operation happens in-place, meaning no new list is created."
    },
    {
        "category": "lists",
        "question": "Suppose listExample is [3, 4, 5, 20, 5, 25, 1, 3], what is list1 after listExample.extend([34, 5])?",
        "options": [
            "[3, 4, 5, 20, 5, 25, 1, 3, 34, 5]",
            "[1, 3, 3, 4, 5, 5, 20, 25, 34, 5]",
            "[25, 20, 5, 5, 4, 3, 3, 1, 34, 5]",
            "[1, 3, 4, 5, 20, 5, 25, 3, 34, 5]"
        ],
        "correct": 0,
        "explanation": "The extend() method in Python adds each element from the iterable (in this case, [34, 5]) to the end of the list. Given listExample = [3, 4, 5, 20, 5, 25, 1, 3], after calling listExample.extend([34, 5]), the updated list becomes [3, 4, 5, 20, 5, 25, 1, 3, 34, 5]."
    },
    {
        "category": "lists",
        "question": "Suppose listExample is [3, 4, 5, 20, 5, 25, 1, 3], what is list1 after listExample.pop(1)?",
        "options": [
            "[3, 4, 5, 20, 5, 25, 1, 3]",
            "[1, 3, 3, 4, 5, 5, 20, 25]",
            "[3, 5, 20, 5, 25, 1, 3]",
            "[1, 3, 4, 5, 20, 5, 25]"
        ],
        "correct": 2,
        "explanation": "The pop() method removes and returns the element at the specified index. In the list listExample = [3, 4, 5, 20, 5, 25, 1, 3], calling listExample.pop(1) removes the element at index 1, which is 4. The updated list becomes [3, 5, 20, 5, 25, 1, 3]."
    },
    {
        "category": "lists",
        "question": "Suppose listExample is [3, 4, 5, 20, 5, 25, 1, 3], what is list1 after listExample.pop()?",
        "options": [
            "[3, 4, 5, 20, 5, 25, 1]",
            "[1, 3, 3, 4, 5, 5, 20, 25]",
            "[3, 5, 20, 5, 25, 1, 3]",
            "[1, 3, 4, 5, 20, 5, 25]"
        ],
        "correct": 0,
        "explanation": "The pop() method in Python removes and returns the last item from a list when no index is specified. In the given list [3, 4, 5, 20, 5, 25, 1, 3], calling pop() removes the last element 3, resulting in [3, 4, 5, 20, 5, 25, 1]."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(\"Welcome to Python\".split())\n```",
        "options": [
            "[‘Welcome’, ‘to’, ‘Python’]",
            "(“Welcome”, “to”, “Python”)",
            "{“Welcome”, “to”, “Python”}",
            "“Welcome”, “to”, “Python”"
        ],
        "correct": 0,
        "explanation": "The split() method in Python divides a string into a list using whitespace as the default delimiter. For example, “Welcome to Python”.split() returns [‘Welcome’, ‘to’, ‘Python’]. This is useful for breaking up sentences into words."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(list(\"a#b#c#d\".split('#')))\n```",
        "options": [
            "[‘a’, ‘b’, ‘c’, ‘d’]",
            "[‘a b c d’]",
            "[‘a#b#c#d’]",
            "[‘abcd’]"
        ],
        "correct": 0,
        "explanation": "The split(‘#’) method splits the string “a#b#c#d” at every # and returns a list of substrings: [‘a’, ‘b’, ‘c’, ‘d’]. Wrapping it with list() doesn’t change the structure since split() already returns a list. Therefore, the final output is [‘a’, ‘b’, ‘c’, ‘d’]."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nmyList = [1, 5, 5, 5, 5, 1]\nmax = myList[0]\nindexOfMax = 0\nfor i in range(1, len(myList)):\n    if myList[i] > max:\n        max = myList[i]\n        indexOfMax = i\n \nprint(indexOfMax)\n```",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "correct": 0,
        "explanation": "The code finds the index of the first occurrence of the maximum value in the list. Since the maximum value 5 appears first at index 1, the variable indexOfMax is set to 1. Therefore, the output of the code is 1."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\nmyList = [1, 2, 3, 4, 5, 6]\nfor i in range(1, 6):\n    myList[i - 1] = myList[i]\n \nfor i in range(0, 6): \n    print(myList[i], end = \" \")\n```",
        "options": [
            "2 3 4 5 6 1",
            "6 1 2 3 4 5",
            "2 3 4 5 6 6",
            "1 1 2 3 4 5"
        ],
        "correct": 2,
        "explanation": "The code shifts all elements of a list by one position towards the beginning, except the first element which is replaced by the second. The last element is duplicated since there is no next element to assign its value to. The output is “2 3 4 5 6 6”."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nlist1 = [1, 3]\nlist2 = list1\nlist1[0] = 4\nprint(list2)\n```",
        "options": [
            "[1, 3]",
            "[4, 3]",
            "[1, 4]",
            "[1, 3, 4]"
        ],
        "correct": 1,
        "explanation": "In the code, list2 = list1 creates a reference to the same list in memory. So when list1[0] is changed to 4, list2 also reflects that change. The output is [4, 3]."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef f(values):\n    values[0] = 44\n \nv = [1, 2, 3]\nf(v)\nprint(v)\n```",
        "options": [
            "[1, 44]",
            "[1, 2, 3, 44]",
            "[44, 2, 3]",
            "[1, 2, 3]"
        ],
        "correct": 2,
        "explanation": "In Python, lists are mutable and passed by reference to functions. The function f(values) modifies the first element of the list to 44. So, the original list v becomes [44, 2, 3] after the function call."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef f(i, values = []):\n    values.append(i)\n    return values\n \nf(1)\nf(2)\nv = f(3)\nprint(v)\n```",
        "options": [
            "[1] [2] [3]",
            "[1] [1, 2] [1, 2, 3]",
            "[1, 2, 3]",
            "1 2 3"
        ],
        "correct": 2,
        "explanation": "In Python, default arguments are evaluated only once when the function is defined. Since the default values is a mutable list, it retains changes across function calls. Thus, each call to f() appends to the same list, resulting in [1, 2, 3]."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nnames1 = ['Amir', 'Bala', 'Chales']\n \nif 'amir' in names1:\n    print(1)\nelse:\n    print(2)\n```",
        "options": [
            "None",
            "1",
            "2",
            "Error"
        ],
        "correct": 2,
        "explanation": "In the given code, the string ‘amir’ is checked for membership in the list [‘Amir’, ‘Bala’, ‘Chales’]. Since Python is case-sensitive, ‘amir’ (lowercase ‘a’) does not match ‘Amir’ (uppercase ‘A’), so the condition fails. Hence, the output is 2."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nnames1 = ['Amir', 'Bala', 'Charlie']\nnames2 = [name.lower() for name in names1]\n \nprint(names2[2][0])\n```",
        "options": [
            "None",
            "a",
            "b",
            "c"
        ],
        "correct": 3,
        "explanation": "The code uses list comprehension to convert each name in names1 to lowercase, resulting in [‘amir’, ‘bala’, ‘charlie’]. names2[2] refers to ‘charlie’, and names2[2][0] gives the first character ‘c’. Therefore, the output is c."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nnumbers = [1, 2, 3, 4]\n \nnumbers.append([5,6,7,8])\n \nprint(len(numbers))\n```",
        "options": [
            "4",
            "5",
            "8",
            "12"
        ],
        "correct": 1,
        "explanation": "The append() method adds its argument as a single element at the end of the list. Here, [5, 6, 7, 8] is appended as one sublist, not individual elements. So the list becomes [1, 2, 3, 4, [5, 6, 7, 8]], which has 5 elements."
    },
    {
        "category": "operators",
        "question": "To which of the following the “in” operator can be used to check if an item is in it?",
        "options": [
            "Lists",
            "Dictionary",
            "Set",
            "All of the mentioned"
        ],
        "correct": 3,
        "explanation": "The in operator is used to check for membership and works with lists, dictionaries, and sets. In lists and sets, it checks for presence of an element; in dictionaries, it checks for presence of a key. Therefore, it applies to all the mentioned data structures."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\nlist1 = [1, 2, 3, 4]\nlist2 = [5, 6, 7, 8]\n \nprint(len(list1 + list2))\n```",
        "options": [
            "2",
            "4",
            "5",
            "8"
        ],
        "correct": 3,
        "explanation": "The + operator concatenates two lists by combining all their elements into a new list. So list1 + list2 results in [1, 2, 3, 4, 5, 6, 7, 8], which has 8 elements. Therefore, len(list1 + list2) returns 8."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\ndef addItem(listParam):\n    listParam += [1]\n \nmylist = [1, 2, 3, 4]\naddItem(mylist)\nprint(len(mylist))\n```",
        "options": [
            "1",
            "4",
            "5",
            "8"
        ],
        "correct": 2,
        "explanation": "The function addItem uses += [1] to modify the list passed to it. Since lists are mutable and passed by reference, mylist is modified directly. After appending 1, it becomes [1, 2, 3, 4, 1], so its length is 5."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\ndef increment_items(L, increment):\n    i = 0\n    while i < len(L):\n        L[i] = L[i] + increment\n        i = i + 1\n \nvalues = [1, 2, 3]\nprint(increment_items(values, 2))\nprint(values)\n```",
        "options": [
            "/ None / [3, 4, 5]",
            "/ None / [1, 2, 3]",
            "/ [3, 4, 5] / [1, 2, 3]",
            "/ [3, 4, 5] / None"
        ],
        "correct": 0,
        "explanation": "The function increment_items modifies the list in-place by adding the increment value to each element. However, since it doesn’t return anything, the first print() outputs None. The second print() shows the updated list [3, 4, 5]."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\ndef example(L):\n    ''' (list) -> list\n    '''\n    i = 0\n    result = []\n    while i < len(L):\n        result.append(L[i])\n        i = i + 3\n    return result\n```",
        "options": [
            "Return a list containing every third item from L starting at index 0",
            "Return an empty list",
            "Return a list containing every third index from L starting at index 0",
            "Return a list containing the items from L starting from index 0, omitting every third item"
        ],
        "correct": 0,
        "explanation": "The function iterates over the list L, starting at index 0, and appends every third element (i = i + 3) to result. This means it collects items at indices 0, 3, 6, and so on, effectively returning every third item from the list starting at the first element."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nveggies = ['carrot', 'broccoli', 'potato', 'asparagus']\nveggies.insert(veggies.index('broccoli'), 'celery')\nprint(veggies)\n```",
        "options": [
            "[‘carrot’, ‘celery’, ‘broccoli’, ‘potato’, ‘asparagus’]",
            "[‘carrot’, ‘celery’, ‘potato’, ‘asparagus’]",
            "[‘carrot’, ‘broccoli’, ‘celery’, ‘potato’, ‘asparagus’]",
            "[‘celery’, ‘carrot’, ‘broccoli’, ‘potato’, ‘asparagus’]"
        ],
        "correct": 0,
        "explanation": "The insert() method inserts ‘celery’ at the index where ‘broccoli’ is found, which is position 1. This pushes ‘broccoli’ and the following elements one position to the right, resulting in the list: [‘carrot’, ‘celery’, ‘broccoli’, ‘potato’, ‘asparagus’]."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\nm = [[x, x + 1, x + 2] for x in range(0, 3)]\nprint(m)\n```",
        "options": [
            "[[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
            "[[0, 1, 2], [1, 2, 3], [2, 3, 4]]",
            "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
            "[0, 1, 2, 1, 2, 3, 2, 3, 4]"
        ],
        "correct": 1,
        "explanation": "The list comprehension creates a list of lists, where for each x in range(0, 3), it creates [x, x+1, x+2]. This results in [[0, 1, 2], [1, 2, 3], [2, 3, 4]]."
    },
    {
        "category": "control",
        "question": "How many elements are in m?\n\n```python\nm = [[x, y] for x in range(0, 4) for y in range(0, 4)]\nprint(m)\n```",
        "options": [
            "8",
            "12",
            "16",
            "32"
        ],
        "correct": 2,
        "explanation": "The nested list comprehension creates a pair [x, y] for every combination of x and y in range(0, 4), which has 4 values each. So total elements = 4 × 4 = 16."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nvalues = [[3, 4, 5, 1], [33, 6, 1, 2]]\n \nv = values[0][0]\nfor row in range(0, len(values)):\n    for column in range(0, len(values[row])):\n        if v < values[row][column]:\n            v = values[row][column]\n \nprint(v)\n```",
        "options": [
            "3",
            "5",
            "6",
            "33"
        ],
        "correct": 3,
        "explanation": "The code iterates through all elements in the 2D list values, updating v whenever it finds a larger number. The largest value in the nested lists is 33, so the output is 33."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nvalues = [[3, 4, 5, 1], [33, 6, 1, 2]]\n \nv = values[0][0]\nfor lst in values:\n    for element in lst:\n        if v > element:\n            v = element\n \nprint(v)\n```",
        "options": [
            "1",
            "3",
            "5",
            "6"
        ],
        "correct": 0,
        "explanation": "The code goes through all elements in the nested list values and updates v whenever it finds a smaller element (if v > element). Starting with v = 3, it finds smaller values 1 and updates v accordingly. The smallest element in the lists is 1, so the output is 1."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nvalues = [[3, 4, 5, 1 ], [33, 6, 1, 2]]\n \nfor row in values:\n    row.sort()\n    for element in row:\n        print(element, end = \" \")\n    print()\n```",
        "options": [
            "/ 3 4 5 1 / 1 2 6 33",
            "/ 3 4 5 1 / 33 6 1 2",
            "/ 1 3 4 5 / 1 2 6 33",
            "1 3 4 5"
        ],
        "correct": 2,
        "explanation": "The code sorts each sublist inside the main list, so the first list becomes [1, 3, 4, 5] and the second becomes [1, 2, 6, 33]. It then prints each sorted list on a separate line, resulting in two rows of sorted numbers."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nmatrix = [[1, 2, 3, 4],\n       [4, 5, 6, 7],\n       [8, 9, 10, 11],\n       [12, 13, 14, 15]]\n \nfor i in range(0, 4):\n    print(matrix[i][1], end = \" \")\n```",
        "options": [
            "1 2 3 4",
            "4 5 6 7",
            "1 3 8 12",
            "2 5 9 13"
        ],
        "correct": 3,
        "explanation": "The code prints the element at index 1 (the second element) from each of the 4 rows in matrix. These elements are 2, 5, 9, and 13, which are printed in order separated by spaces."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\ndef m(list):\n    v = list[0]\n    for e in list:\n      if v < e: v = e\n    return v\n \nvalues = [[3, 4, 5, 1], [33, 6, 1, 2]]\n \nfor row in values: \n    print(m(row), end = \" \")\n```",
        "options": [
            "3 33",
            "1 1",
            "5 6",
            "5 33"
        ],
        "correct": 3,
        "explanation": "The function m returns the maximum value in a given list by comparing each element. For the two sublists, it finds 5 as the max in [3, 4, 5, 1] and 33 as the max in [33, 6, 1, 2]. These are printed with a space separating them."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\ndata = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]\n \nprint(data[1][0][0])\n```",
        "options": [
            "1",
            "2",
            "4",
            "5"
        ],
        "correct": 3,
        "explanation": "data[1] accesses the second element of the outer list: [[5, 6], [7, 8]]. Then [0] accesses the first sublist [5, 6], and [0] again accesses the first element of that sublist, which is 5."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ndata = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]\n \ndef ttt(m):\n    v = m[0][0]\n \n    for row in m:\n        for element in row:\n           if v < element: v = element\n \n    return v\n \nprint(ttt(data[0]))\n```",
        "options": [
            "1",
            "2",
            "4",
            "5"
        ],
        "correct": 2,
        "explanation": "The function ttt finds the maximum element in the 2D list data[0], which is [[1, 2], [3, 4]]. The largest number here is 4, so the output is 4."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\npoints = [[1, 2], [3, 1.5], [0.5, 0.5]]\npoints.sort()\nprint(points)\n```",
        "options": [
            "[[1, 2], [3, 1.5], [0.5, 0.5]]",
            "[[3, 1.5], [1, 2], [0.5, 0.5]]",
            "[[0.5, 0.5], [1, 2], [3, 1.5]]",
            "[[0.5, 0.5], [3, 1.5], [1, 2]]"
        ],
        "correct": 2,
        "explanation": "The sort() method sorts lists of lists by comparing their elements lexicographically, starting from the first element of each sublist. Here, the points are sorted by their first coordinate, resulting in the order [[0.5, 0.5], [1, 2], [3, 1.5]]"
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\na=[10,23,56,[78]]\nb=list(a)\na[3][0]=95\na[1]=34\nprint(b)\n```",
        "options": [
            "[10, 34, 56, [95]]",
            "[10, 23, 56, [78]]",
            "[10, 23, 56, [95]]",
            "[10, 34, 56, [78]]"
        ],
        "correct": 2,
        "explanation": "The code creates a shallow copy of list a into b, meaning the outer list is copied, but inner objects like the sublist are shared between both. When a[3][0] is modified, the change reflects in b as well, but changing a[1] does not affect b[1] since integers are immutable and copied by value. Hence, the output is [10, 23, 56, [95]]."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(list(zip((1,2,3),('a'),('xxx','yyy'))))\nprint(list(zip((2,4),('b','c'),('yy','xx'))))\n```",
        "options": [
            "- [B] / [(1, 'a', 'xxx'),(2,’ ‘,’yyy’),(3,’ ‘,’ ‘)] / [(2, 'b', 'yy'), (4, 'c', 'xx')] /",
            "Syntax error",
            "/ [(1, 'a', 'xxx')] / [(2, 'b', 'yy'), (4, 'c', 'xx')]"
        ],
        "correct": 2,
        "explanation": "The zip() function pairs elements from multiple iterables and stops when the shortest iterable is exhausted. In the first case, ‘a’ is treated as a one-character string, so only one tuple is formed. The second zip() processes all elements since all iterables are of equal length, resulting in two tuples."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nimport copy\na=[10,23,56,[78]]\nb=copy.deepcopy(a)\na[3][0]=95\na[1]=34\nprint(b)\n```",
        "options": [
            "[10, 34, 56, [95]]",
            "[10, 23, 56, [78]]",
            "[10, 23, 56, [95]]",
            "[10, 34, 56, [78]]"
        ],
        "correct": 1,
        "explanation": "Using copy.deepcopy(a) creates a deep copy, meaning all nested objects (like the sublist [78]) are independently copied. So, any changes made to a or its sublists (like changing a[3][0] to 95 or a[1] to 34) do not affect b. Hence, b remains unchanged as [10, 23, 56, [78]]."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\ns=\"a@b@c@d\"\na=list(s.partition(\"@\"))\nprint(a)\nb=list(s.split(\"@\",3))\nprint(b)\n```",
        "options": [
            "/ [‘a’, ’b’, ’c’, ’d’] / [‘a’, ’b’, ’c’, ’d’]",
            "/ [‘a’,’@’,’b’,’@’,’c’,’@’,’d’] / [‘a’,’b’,’c’,’d’]",
            "/ ['a', '@', 'b@c@d'] / ['a', 'b', 'c', 'd']",
            "/ [‘a’,’@’,’b@c@d’] / [‘a’,’@’,’b’,’@’,’c’,’@’,’d’]"
        ],
        "correct": 2,
        "explanation": "The partition(“@”) method splits the string only at the first occurrence of “@” and includes the separator in the result, returning [‘a’, ‘@’, ‘b@c@d’]. The split(“@”, 3) method splits the string into at most 4 parts using “@” as the delimiter, resulting in [‘a’, ‘b’, ‘c’, ‘d’]."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\na=[1,2,3,4]\nb=[sum(a[0:x+1]) for x in range(0,len(a))]\nprint(b)\n```",
        "options": [
            "10",
            "[1, 3, 5, 7]",
            "4",
            "[1, 3, 6, 10]"
        ],
        "correct": 3,
        "explanation": "The list comprehension calculates the cumulative sum of elements in list a. For each index x, it sums a[0] to a[x]. So it produces [1, (1+2), (1+2+3), (1+2+3+4)] which results in [1, 3, 6, 10]."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\na=\"hello\"\nb=list((x.upper(),len(x)) for x in a)\nprint(b)\n```",
        "options": [
            "[(‘H’, 1), (‘E’, 1), (‘L’, 1), (‘L’, 1), (‘O’, 1)]",
            "[(‘HELLO’, 5)]",
            "[(‘H’, 5), (‘E’, 5), (‘L’, 5), (‘L’, 5), (‘O’, 5)]",
            "Syntax error"
        ],
        "correct": 0,
        "explanation": "The string “hello” is iterable, so the generator expression (x.upper(), len(x)) for x in a processes each character. x.upper() converts each character to uppercase, and len(x) is 1 because x is a single character. The result is a list of tuples: [(‘H’, 1), (‘E’, 1), (‘L’, 1), (‘L’, 1), (‘O’, 1)]."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\na = [2, 4, 6, 8]\nb = [sum(a[0:x+1]) for x in range(0, len(a))]\nprint(b)\n```",
        "options": [
            "10",
            "[2, 3, 6, 7]",
            "4",
            "[2, 6, 12, 20]"
        ],
        "correct": 3,
        "explanation": "The code computes the cumulative sum of elements in the list a = [2, 4, 6, 8] using list comprehension. For each index x, it calculates the sum of elements from the start of the list up to index x, resulting in [2, 6, 12, 20]."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na=[[]]*3\na[1].append(7)\nprint(a)\n```",
        "options": [
            "Syntax error",
            "[[7], [7], [7]]",
            "[[7], [], []]",
            "[[],7, [], []]"
        ],
        "correct": 1,
        "explanation": "The expression [[]]*3 creates a list with three references to the same empty list. When you append 7 to one of them (e.g., a[1]), it reflects in all because they all point to the same object. Hence, the output is [[7], [7], [7]]."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nb=[2,3,4,5]\na=list(filter(lambda x:x%2,b))\nprint(a)\n```",
        "options": [
            "[2, 4]",
            "[ ]",
            "[3, 5]",
            "Invalid arguments for filter function"
        ],
        "correct": 2,
        "explanation": "The filter() function applies the lambda function lambda x: x%2 to each element of list b. In Python, x%2 returns 1 for odd numbers and 0 for even ones. Since filter only keeps values where the result is truthy (non-zero), only the odd numbers [3, 5] are included in the output."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nlst=[3,4,6,1,2]\nlst[1:2]=[7,8]\nprint(lst)\n```",
        "options": [
            "[3, 7, 8, 6, 1, 2]",
            "Syntax error",
            "[3,[7,8],6,1,2]",
            "[3, 4, 6, 7, 8]"
        ],
        "correct": 0,
        "explanation": "The slice assignment lst[1:2] = [7, 8] replaces the elements from index 1 up to (but not including) index 2 with the new list [7, 8]. This effectively inserts 7 and 8 in place of the single element 4, resulting in [3, 7, 8, 6, 1, 2]."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na=[1,2,3]\nb=a.append(4)\nprint(a)\nprint(b)\n```",
        "options": [
            "/ [1, 2, 3, 4] / [1, 2, 3, 4] /",
            "/ [1, 2, 3, 4] / None",
            "Syntax error",
            "/ [1, 2, 3] / [1, 2, 3, 4]"
        ],
        "correct": 1,
        "explanation": "The append() method modifies the list in place and does not return a new list, so b = a.append(4) assigns None to b. However, a is updated to [1, 2, 3, 4], which is why print(a) shows the updated list while print(b) outputs None."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na=[14,52,7]\nb=a.copy()\nprint(b is a)\n```",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "The copy() method creates a shallow copy of the list, meaning b is a new list object with the same elements as a. Since b and a are different objects, b is a evaluates to False. Changes to one won’t affect the other’s identity."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na=[13,56,17]\na.append([87])\na.extend([45,67])\nprint(a)\n```",
        "options": [
            "[13, 56, 17, [87], 45, 67]",
            "[13, 56, 17, 87, 45, 67]",
            "[13, 56, 17, 87,[ 45, 67]]",
            "[13, 56, 17, [87], [45, 67]]"
        ],
        "correct": 0,
        "explanation": "The append([87]) adds the entire list [87] as a single element at the end of a, while extend([45, 67]) adds each element individually to the list. Hence, the final list is [13, 56, 17, [87], 45, 67]."
    },
    {
        "category": "lists",
        "question": "What is the output of the following piece of code?\n\n```python\na=list((45,)*4)\nprint((45)*4)\nprint(a)\n```",
        "options": [
            "/ 180 / [(45), (45), (45),(45)]",
            "/ (45, 45, 45, 45) / [45, 45, 45, 45]",
            "/ 180 / [45, 45, 45, 45]",
            "Syntax error"
        ],
        "correct": 2,
        "explanation": "The expression (45)*4 multiplies the integer 45 by 4, resulting in 180. The expression list((45,)*4) creates a tuple (45,) repeated 4 times, then converts it into a list [45, 45, 45, 45]. Note the comma makes (45,) a tuple, while (45) is just an integer in parentheses."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nlst=[[1,2],[3,4]]\nprint(sum(lst,[]))\n```",
        "options": [
            "[[3], [7]]",
            "[1, 2, 3, 4]",
            "Error",
            "[10]"
        ],
        "correct": 1,
        "explanation": "Using sum(lst, []) adds up the sublists starting from an empty list, effectively concatenating them into a single flat list [1, 2, 3, 4]. This is a common Python trick to flatten a list of lists by one level."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nword1=\"Apple\"\nword2=\"Apple\"\nlist1=[1,2,3]\nlist2=[1,2,3]\nprint(word1 is word2)\nprint(list1 is list2)\n```",
        "options": [
            "/ True / True",
            "/ False / True",
            "/ False / False",
            "/ True / False"
        ],
        "correct": 3,
        "explanation": "String literals like “Apple” are interned by Python, so word1 is word2 returns True because both refer to the same object. However, list1 and list2 are two separate list objects with the same content, so list1 is list2 returns False as they are not the same object in memory."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef unpack(a,b,c,d):\n    print(a+d)\nx = [1,2,3,4]\nunpack(*x)\n```",
        "options": [
            "Error",
            "[1, 4]",
            "[5]",
            "5"
        ],
        "correct": 3,
        "explanation": "The *x syntax unpacks the list [1, 2, 3, 4] into individual arguments a=1, b=2, c=3, d=4. Then, the function prints a + d, which is 1 + 4 = 5."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nplaces = ['Bangalore', 'Mumbai', 'Delhi']\nplaces1 = places\nplaces2 = places[:]\nplaces1[1]=\"Pune\"\nplaces2[2]=\"Hyderabad\"\nprint(places)\n```",
        "options": [
            "[‘Bangalore’, ‘Pune’, ‘Hyderabad’]",
            "[‘Bangalore’, ‘Pune’, ‘Delhi’]",
            "[‘Bangalore’, ‘Mumbai’, ‘Delhi’]",
            "[‘Bangalore’, ‘Mumbai’, ‘Hyderabad’]"
        ],
        "correct": 1,
        "explanation": "Since places1 is just a reference to the original places list, changing places1[1] also changes places[1] to ‘Pune’. On the other hand, places2 is a copy of places, so modifying places2[2] to ‘Hyderabad’ does not affect the original places list."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx=[[1],[2]]\nprint(\" \".join(list(map(str,x))))\n```",
        "options": [
            "[1] [2]",
            "[49] [50]",
            "Syntax error",
            "[[1]] [[2]]"
        ],
        "correct": 0,
        "explanation": "The code converts each sublist in x to a string, resulting in “[1]” and “[2]”. Then, it joins these string representations with a space between them. So, the output prints the two sublists as [1] [2]."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\na=165\nb=sum(list(map(int,str(a))))\nprint(b)\n```",
        "options": [
            "561",
            "5",
            "12",
            "Syntax error"
        ],
        "correct": 2,
        "explanation": "The code converts the integer a into a string, then maps each character back to an integer, creating a list of digits [1, 6, 5]. The sum function adds these digits together, resulting in 12. Hence, the output is 12."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\na= [1, 2, 3, 4, 5]\nfor i in range(1, 5):\n    a[i-1] = a[i]\nfor i in range(0, 5): \n    print(a[i],end = \" \")\n```",
        "options": [
            "5 5 1 2 3",
            "5 1 2 3 4",
            "2 3 4 5 1",
            "2 3 4 5 5"
        ],
        "correct": 3,
        "explanation": "The first loop shifts each element from index 1 to 4 to the previous index (i.e., a[0] = a[1], a[1] = a[2], and so on). This changes the list step by step to [2, 3, 4, 5, 5]. The second loop prints all elements in the updated list, resulting in 2 3 4 5 5."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef change(var, lst):\n    var = 1\n    lst[0] = 44\nk = 3\na = [1, 2, 3]\nchange(k, a)\nprint(k)\nprint(a)\n```",
        "options": [
            "/ 3 / [44, 2, 3]",
            "/ 1 / [1, 2, 3]",
            "/ 3 / [1, 2, 3]",
            "/ 1 / [44, 2, 3]"
        ],
        "correct": 0,
        "explanation": "In Python, integers are immutable, so assigning a new value to var inside the function doesn’t affect the original variable k. However, lists are mutable, so modifying lst[0] directly changes the original list a, resulting in [44, 2, 3]."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\na = [1, 5, 7, 9, 9, 1]\nb=a[0]\nx= 0\nfor x in range(1, len(a)):\n    if a[x] > b:\n        b = a[x]\n        b= x\nprint(b)\n```",
        "options": [
            "5",
            "3",
            "4",
            "0"
        ],
        "correct": 2,
        "explanation": "The code compares each element in the list and updates b with the index whenever a new maximum is found. Since b is overwritten with the index during each update, the final value represents the index of the last occurrence of the maximum element, which is at index 4."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na=[\"Apple\",\"Ball\",\"Cobra\"]\na.sort(key=len)\nprint(a)\n```",
        "options": [
            "[‘Apple’, ‘Ball’, ‘Cobra’]",
            "[‘Ball’, ‘Apple’, ‘Cobra’]",
            "[‘Cobra’, ‘Apple’, ‘Ball’]",
            "Invalid syntax for sort()"
        ],
        "correct": 1,
        "explanation": "The sort() function with key=len sorts the list based on the length of each string. Since “Ball” has 4 letters and both “Apple” and “Cobra” have 5, “Ball” comes first, followed by “Apple” and “Cobra” in their original order."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nnum = ['One', 'Two', 'Three']\nfor i, x in enumerate(num):\n    print('{}: {}'.format(i, x),end=\" \")\n```",
        "options": [
            "1: 2: 3:",
            "Exception is thrown",
            "One Two Three",
            "0: One 1: Two 2: Three"
        ],
        "correct": 3,
        "explanation": "The enumerate() function returns both the index and value from the list, starting with index 0 by default. Each pair is printed in the format index: value on the same line with spaces in between, resulting in 0: One 1: Two 2: Three."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nmy_string = \"hello world\"\nk = [print(i) for i in my_string if i not in \"aeiou\"]\n```",
        "options": [
            "prints all the vowels in my_string",
            "prints all the consonants in my_string",
            "prints all characters of my_string that aren’t vowels",
            "prints only on executing print(k)"
        ],
        "correct": 2,
        "explanation": "The list comprehension filters out vowels and prints only those characters in my_string that are not vowels. Since print(i) is inside the comprehension, it gets executed immediately for each non-vowel character."
    },
    {
        "category": "strings",
        "question": "What is the output of print(k) in the following Python code snippet?\n\n```python\nk = [print(i) for i in my_string if i not in \"aeiou\"]\nprint(k)\n```",
        "options": [
            "all characters of my_string that aren’t vowels",
            "a list of Nones",
            "list of Trues",
            "list of Falses"
        ],
        "correct": 1,
        "explanation": "The print(i) inside the list comprehension prints each non-vowel character immediately but returns None. Therefore, k becomes a list of None values, and printing k displays that list of Nones."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nmy_string = \"hello world\"\nk = [(i.upper(), len(i)) for i in my_string]\nprint(k)\n```",
        "options": [
            "[(‘HELLO’, 5), (‘WORLD’, 5)]",
            "[(‘H’, 1), (‘E’, 1), (‘L’, 1), (‘L’, 1), (‘O’, 1), (‘ ‘, 1), (‘W’, 1), (‘O’, 1), (‘R’, 1), (‘L’, 1), (‘D’, 1)]",
            "[(‘HELLO WORLD’, 11)]",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "The code iterates over each character in the string “hello world” and creates a list of tuples where each tuple contains the uppercase version of the character and its length (which is always 1). Since iteration is character-wise, the result includes individual letters and the space character. Thus, the output is a list of tuples like (‘H’, 1), (‘E’, 1), …, (‘D’, 1)."
    },
    {
        "category": "lists",
        "question": "Which of the following is the correct expansion of list_1 = [expr(i) for i in list_0 if func(i)]?",
        "options": [
            "/ list_1 = [] / for i in list_0: / if func(i): / list_1.append(i)",
            "/ for i in list_0: / if func(i): / list_1.append(expr(i))",
            "/ list_1 = [] / for i in list_0: / if func(i): / list_1.append(expr(i))",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The list comprehension builds a new list by evaluating expr(i) only for those elements of list_0 that satisfy func(i). This is correctly expanded by first initializing an empty list, looping through list_0, checking the condition, and appending the transformed result."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nx = [i**+1 for i in range(3)]; print(x);\n```",
        "options": [
            "[0, 1, 2]",
            "[1, 2, 5]",
            "error, **+ is not a valid operator",
            "error, ‘;’ is not allowed"
        ],
        "correct": 0,
        "explanation": "The expression i**+1 is evaluated as i raised to the power of +1, which is effectively i. Therefore, the list comprehension returns [0, 1, 2], and the semicolon used is syntactically valid in Python."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint([i.lower() for i in \"HELLO\"])\n```",
        "options": [
            "[‘h’, ‘e’, ‘l’, ‘l’, ‘o’]",
            "‘hello’",
            "[‘hello’]",
            "hello"
        ],
        "correct": 0,
        "explanation": "The code loops through each character in the string “HELLO” and converts each to lowercase using .lower(). The list comprehension collects these lowercase letters into a list and prints it."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint([i+j for i in \"abc\" for j in \"def\"])\n```",
        "options": [
            "[‘da’, ‘ea’, ‘fa’, ‘db’, ‘eb’, ‘fb’, ‘dc’, ‘ec’, ‘fc’]",
            "[[‘ad’, ‘bd’, ‘cd’], [‘ae’, ‘be’, ‘ce’], [‘af’, ‘bf’, ‘cf’]]",
            "[[‘da’, ‘db’, ‘dc’], [‘ea’, ‘eb’, ‘ec’], [‘fa’, ‘fb’, ‘fc’]]",
            "[‘ad’, ‘ae’, ‘af’, ‘bd’, ‘be’, ‘bf’, ‘cd’, ‘ce’, ‘cf’]"
        ],
        "correct": 3,
        "explanation": "The nested list comprehension combines each character i from “abc” with each character j from “def”, producing all possible concatenated pairs in the order of outer i and inner j."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint([[i+j for i in \"abc\"] for j in \"def\"])\n```",
        "options": [
            "[‘da’, ‘ea’, ‘fa’, ‘db’, ‘eb’, ‘fb’, ‘dc’, ‘ec’, ‘fc’]",
            "[[‘ad’, ‘bd’, ‘cd’], [‘ae’, ‘be’, ‘ce’], [‘af’, ‘bf’, ‘cf’]]",
            "[[‘da’, ‘db’, ‘dc’], [‘ea’, ‘eb’, ‘ec’], [‘fa’, ‘fb’, ‘fc’]]",
            "[‘ad’, ‘ae’, ‘af’, ‘bd’, ‘be’, ‘bf’, ‘cd’, ‘ce’, ‘cf’]"
        ],
        "correct": 1,
        "explanation": "The expression uses a nested list comprehension. For each character j in “def”, it iterates over “abc” with i, concatenating i + j. This forms inner lists like [‘ad’, ‘bd’, ‘cd’], [‘ae’, ‘be’, ‘ce’], and [‘af’, ‘bf’, ‘cf’], which are collected into a single outer list."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint([if i%2==0: i; else: i+1; for i in range(4)])\n```",
        "options": [
            "[0, 2, 2, 4]",
            "[1, 1, 3, 3]",
            "error",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The code uses an invalid syntax for conditional logic within a list comprehension. Python requires the ternary operator format (x if condition else y), not an if-else block with colons and semicolons."
    },
    {
        "category": "lists",
        "question": "Which of the following is the same as list(map(lambda x: x**-1, [1, 2, 3]))?",
        "options": [
            "[x**-1 for x in [(1, 2, 3)]]",
            "[1/x for x in [(1, 2, 3)]]",
            "[1/x for x in (1, 2, 3)]",
            "error"
        ],
        "correct": 2,
        "explanation": "The expression x**-1 is equivalent to 1/x. The map() function applies the lambda to each element of the list [1, 2, 3], just like the list comprehension in option c, which also iterates over a tuple (1, 2, 3) and evaluates 1/x for each element. Thus, both produce the same result: [1.0, 0.5, 0.333…]."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nl=[1,2,3,4,5]\nprint([x&1 for x in l])\n```",
        "options": [
            "[1, 1, 1, 1, 1]",
            "[1, 0, 1, 0, 1]",
            "[1, 0, 0, 0, 0]",
            "[0, 1, 0, 1, 0]"
        ],
        "correct": 1,
        "explanation": "The bitwise AND operator & checks whether each number is odd by evaluating x & 1. If the number is odd, it returns 1; otherwise, it returns 0. This results in the list [1, 0, 1, 0, 1]."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nl1=[1,2,3]\nl2=[4,5,6]\nprint([x*y for x in l1 for y in l2])\n```",
        "options": [
            "[4, 8, 12, 5, 10, 15, 6, 12, 18]",
            "[4, 10, 18]",
            "[4, 5, 6, 8, 10, 12, 12, 15, 18]",
            "[18, 12, 6, 15, 10, 5, 12, 8, 4]"
        ],
        "correct": 2,
        "explanation": "The given list comprehension multiplies each element from list l1 with every element from list l2, generating a Cartesian product of their multiplication. It first takes x from l1 and for each x, iterates through all y in l2, calculating x*y. This results in the list: [4, 5, 6, 8, 10, 12, 12, 15, 18]."
    },
    {
        "category": "lists",
        "question": "Write the list comprehension to pick out only negative integers from a given list ‘l’.",
        "options": [
            "[x<0 in l]",
            "[x for x<0 in l]",
            "[x in l for x<0]",
            "[x for x in l if x<0]"
        ],
        "correct": 3,
        "explanation": "The correct list comprehension to extract only negative integers from a list l is [x for x in l if x < 0]. This statement iterates over each element x in the list l and includes it in the new list only if x is less than zero. For example, given l = [-65, 2, 7, -99, -4, 3], this comprehension will produce [-65, -99, -4]."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\ns=[\"pune\", \"mumbai\", \"delhi\"]\nprint([(w.upper(), len(w)) for w in s])\n```",
        "options": [
            "Error",
            "[‘PUNE’, 4, ‘MUMBAI’, 6, ‘DELHI’, 5]",
            "[PUNE, 4, MUMBAI, 6, DELHI, 5]",
            "[(‘PUNE’, 4), (‘MUMBAI’, 6), (‘DELHI’, 5)]"
        ],
        "correct": 3,
        "explanation": "The output of the code is a list of tuples where each tuple contains a word from the list in uppercase and its length. This happens because the list comprehension iterates over each word w in the list s, converts it to uppercase using w.upper(), and pairs it with len(w) in a tuple. Thus, the output is: [(‘PUNE’, 4), (‘MUMBAI’, 6), (‘DELHI’, 5)]."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nl1=[2,4,6]\nl2=[-2,-4,-6]\nfor i in zip(l1, l2):\n\tprint(i)\n```",
        "options": [
            "/ 2, -2 / 4, -4 / 6, -6",
            "[(2, -2), (4, -4), (6, -6)]",
            "/ (2, -2) / (4, -4) / (6, -6)",
            "[-4, -16, -36]"
        ],
        "correct": 2,
        "explanation": "The output of the code shown will be:\n   (2, -2)\n   (4, -4)\n   (6, -6)\nThe zip function pairs elements from l1 and l2 into tuples. The for loop then prints each tuple on a new line, resulting in the tuple format with parentheses shown in the output."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nl1=[10, 20, 30]\nl2=[-10, -20, -30]\nl3=[x+y for x, y in zip(l1, l2)]\nprint(l3)\n```",
        "options": [
            "Error",
            "0",
            "[-20, -60, -80]",
            "[0, 0, 0]"
        ],
        "correct": 3,
        "explanation": "The zip function pairs elements from l1 and l2. The list comprehension sums each pair: 10 + (-10) = 0, 20 + (-20) = 0, and 30 + (-30) = 0. Hence, the resulting list is [0, 0, 0]."
    },
    {
        "category": "lists",
        "question": "Write a list comprehension for number and its cube for l=[1, 2, 3, 4, 5, 6, 7, 8, 9].",
        "options": [
            "[x**3 for x in l]",
            "[x^3 for x in l]",
            "[x**3 in l]",
            "[x^3 in l]"
        ],
        "correct": 0,
        "explanation": "The list comprehension [x**3 for x in l] computes the cube of each number in the list l. The ** operator is used for exponentiation in Python."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nl=[[1 ,2, 3], [4, 5, 6], [7, 8, 9]]\nprint([[row[i] for row in l] for i in range(3)])\n```",
        "options": [
            "Error",
            "[[1, 4, 7], [2, 5, 8], [3, 6, 9]]",
            "/ 1 4 7 / 2 5 8 / 3 6 9",
            "/ (1 4 7) / (2 5 8) / (3 6 9)"
        ],
        "correct": 1,
        "explanation": "This code is effectively transposing the matrix l. It takes the elements at index i from each row and creates a new list for each i in the range 0 to 2 (since there are 3 columns). So, it converts rows into columns, resulting in [[1, 4, 7], [2, 5, 8], [3, 6, 9]]."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nimport math\nprint([str(round(math.pi)) for i in range (1, 6)])\n```",
        "options": [
            "[‘3’, ‘3’, ‘3’, ‘3’, ‘3’, ‘3’]",
            "[‘3.1’, ‘3.14’, ‘3.142’, ‘3.1416’, ‘3.14159’, ‘3.141582’]",
            "[‘3’, ‘3’, ‘3’, ‘3’, ‘3’]",
            "[‘3.1’, ‘3.14’, ‘3.142’, ‘3.1416’, ‘3.14159’]"
        ],
        "correct": 2,
        "explanation": "The code rounds math.pi (which is approximately 3.14159) to the nearest integer using round(math.pi), which gives 3. This value is converted to a string and repeated 5 times in a list. So, the output is: [‘3’, ‘3’, ‘3’, ‘3’, ‘3’]."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nl1=[1,2,3]\nl2=[4,5,6]\nl3=[7,8,9]\nfor x, y, z in zip(l1, l2, l3):\n\tprint(x, y, z)\n```",
        "options": [
            "/ 1 4 7 / 2 5 8 / 3 6 9",
            "/ (1 4 7) / (2 5 8) / (3 6 9)",
            "[(1, 4, 7), (2, 5, 8), (3, 6, 9)]",
            "Error"
        ],
        "correct": 0,
        "explanation": "The zip() function combines l1, l2, and l3 element-wise into tuples like (1,4,7), (2,5,8), and (3,6,9). The for loop unpacks each tuple into x, y, z and prints them. Hence, the output is:\n1 4 7  \n2 5 8  \n3 6 9"
    },
    {
        "category": "lists",
        "question": "Read the information given below carefully and write a list comprehension such that the output is: [‘e’, ‘o’]\n\n```python\nw=\"hello\"\nv=('a', 'e', 'i', 'o', 'u')\n```",
        "options": [
            "[x for w in v if x in v]",
            "[x for x in w if x in v]",
            "[x for x in v if w in v]",
            "[x for v in w for x in w]"
        ],
        "correct": 1,
        "explanation": "The list comprehension [x for x in w if x in v] filters characters from the string w = “hello” that are also in the tuple v (which contains vowels). It returns only the vowels ‘e’ and ‘o’, producing the output: [‘e’, ‘o’]."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint([ord(ch) for ch in 'abc'])\n```",
        "options": [
            "[97, 98, 99]",
            "[‘97’, ‘98’, ‘99’]",
            "[65, 66, 67]",
            "Error"
        ],
        "correct": 0,
        "explanation": "The ord() function returns the ASCII value of a character. The list comprehension [ord(ch) for ch in ‘abc’] gives the ASCII values of ‘a’, ‘b’, and ‘c’, resulting in: [97, 98, 99]."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nt=32.00\nprint([round((x-32)*5/9) for x in t])\n```",
        "options": [
            "[0]",
            "0",
            "[0.00]",
            "Error"
        ],
        "correct": 3,
        "explanation": "The variable t = 32.00 is a float, and trying to iterate over it with for x in t will raise a TypeError because float objects are not iterable. Therefore, the code results in an error."
    },
    {
        "category": "lists",
        "question": "Write a list comprehension for producing a list of numbers between 1 and 1000 that are divisible by 3.",
        "options": [
            "[x in range(1, 1000) if x%3==0]",
            "[x for x in range(1, 1001) if x % 3 == 0]",
            "[x%3 for x in range(1, 1000)]",
            "[x%3=0 for x in range(1, 1000)]"
        ],
        "correct": 1,
        "explanation": "The list comprehension [x for x in range(1, 1001) if x % 3 == 0] correctly generates all numbers from 1 to 1000 (inclusive) that are divisible by 3. It uses a for loop inside the comprehension and filters values using the condition x % 3 == 0."
    },
    {
        "category": "lists",
        "question": "Write a list comprehension equivalent for the Python code shown below.\n\n```python\nfor i in range(1, 101):\n\tif int(i*0.5)==i*0.5:\n\t\tprint(i)\n```",
        "options": [
            "[i for i in range(1, 100) if int(i*0.5)==(i*0.5)]",
            "[i for i in range(1, 101) if int(i*0.5)==(i*0.5)]",
            "[i for i in range(1, 101) if int(i*0.5)=(i*0.5)]",
            "[i for i in range(1, 100) if int(i*0.5)=(i*0.5)]"
        ],
        "correct": 1,
        "explanation": "The list comprehension [i for i in range(1, 101) if int(i*0.5) == (i*0.5)] iterates over numbers from 1 to 100, and includes only those numbers where multiplying by 0.5 results in an integer (i.e., even numbers). This matches the behavior of the original for-loop with the conditional print."
    },
    {
        "category": "lists",
        "question": "What is the list comprehension equivalent for: list(map(lambda x:x**-1, [1, 2, 3]))?",
        "options": [
            "[1|x for x in [1, 2, 3]]",
            "[-1**x for x in [1, 2, 3]]",
            "[x**-1 for x in [1, 2, 3]]",
            "[x^-1 for x in range(4)]"
        ],
        "correct": 2,
        "explanation": "The list comprehension [x**-1 for x in [1, 2, 3]] computes the reciprocal of each element in the list, just like the map function with a lambda. Raising a number to the power of -1 means taking its inverse, so the output for both methods is the same: [1.0, 0.5, 0.3333…]."
    },
    {
        "category": "lists",
        "question": "Write a list comprehension to produce the list: [1, 2, 4, 8, 16……212].",
        "options": [
            "[(2**x) for x in range(0, 13)]",
            "[(x**2) for x in range(1, 13)]",
            "[(2**x) for x in range(1, 13)]",
            "[(x**2) for x in range(0, 13)]"
        ],
        "correct": 0,
        "explanation": "The list comprehension [2**x for x in range(0, 13)] generates powers of 2 starting from 20 = 1 up to 212 = 4096. It follows exponential growth using base 2."
    },
    {
        "category": "lists",
        "question": "What is the list comprehension equivalent for? {x : x is a whole number less than 20, x is even}    (including zero)",
        "options": [
            "[x for x in range(1, 20) if (x%2==0)]",
            "[x for x in range(0, 20) if (x//2==0)]",
            "[x for x in range(1, 20) if (x//2==0)]",
            "[x for x in range(0, 20) if (x%2==0)]"
        ],
        "correct": 3,
        "explanation": "This comprehension generates all whole numbers from 0 up to (but not including) 20 and includes only those that are even (i.e., x % 2 == 0). It matches the requirement of even whole numbers less than 20, including zero."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python list comprehension?\n\n```python\nprint([j for i in range(2,8) for j in range(i*2, 50, i)])\n```",
        "options": [
            "A list of prime numbers up to 50",
            "A list of numbers divisible by 2, up to 50",
            "A list of non prime numbers, up to 50",
            "Error"
        ],
        "correct": 2,
        "explanation": "The comprehension iterates over i from 2 to 7, and for each i, it generates multiples of i starting from i*2 up to 50 with a step of i. This effectively lists out composite numbers (non-primes) that have factors between 2 and 7, covering most non-prime numbers under 50."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nl=[\"good\", \"oh!\", \"excellent!\", \"#450\"]\nprint([n for n in l if n.isalpha() or n.isdigit()])\n```",
        "options": [
            "[‘good’, ‘oh’, ‘excellent’, ‘450’ ]",
            "[‘good’]",
            "[‘good’, ‘#450’]",
            "[‘oh!’, ‘excellent!’, ‘#450’]"
        ],
        "correct": 1,
        "explanation": "The list comprehension filters elements that are either fully alphabetic or fully numeric. Only “good” is purely alphabetic; others contain special characters or symbols, so they are excluded."
    },
    {
        "category": "tuples_dicts",
        "question": "Which of the following is a Python tuple?",
        "options": [
            "[1, 2, 3]",
            "(1, 2, 3)",
            "{1, 2, 3}",
            "{}"
        ],
        "correct": 1,
        "explanation": "A tuple in Python is an immutable sequence type and is defined using round brackets ( ). For example, (1, 2, 3) is a tuple."
    },
    {
        "category": "general",
        "question": "Suppose t = (1, 2, 4, 3), which of the following is incorrect?",
        "options": [
            "print(t[3])",
            "t[3] = 45",
            "print(max(t))",
            "print(len(t))"
        ],
        "correct": 1,
        "explanation": "Tuples are immutable, meaning their elements can’t be changed after creation. So, t[3] = 45 is invalid and will raise a TypeError."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nt=(1,2,4,3)\nprint(t[1:3])\n```",
        "options": [
            "(1, 2)",
            "(1, 2, 4)",
            "(2, 4)",
            "(2, 4, 3)"
        ],
        "correct": 2,
        "explanation": "t[1:3] extracts elements from index 1 up to (but not including) index 3. So it returns (2, 4) from the tuple (1, 2, 4, 3). Slicing in tuples works like in lists or strings."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nt=(1,2,4,3)\nprint(t[1:-1])\n```",
        "options": [
            "(1, 2)",
            "(1, 2, 4)",
            "(2, 4)",
            "(2, 4, 3)"
        ],
        "correct": 2,
        "explanation": "t[1:-1] slices the tuple from index 1 up to (but not including) the last element. So it returns (2, 4) from (1, 2, 4, 3). Negative indices count from the end, just like in lists or strings."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nt = (1, 2, 4, 3, 8, 9)\nprint([t[i] for i in range(0, len(t), 2)])\n```",
        "options": [
            "[2, 3, 9]",
            "[1, 2, 4, 3, 8, 9]",
            "[1, 4, 8]",
            "(1, 4, 8)"
        ],
        "correct": 2,
        "explanation": "The list comprehension picks every second element from the tuple starting at index 0. This gives elements at indices 0, 2, and 4, resulting in [1, 4, 8]."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nd = {\"john\":40, \"peter\":45}\nprint(d[\"john\"])\n```",
        "options": [
            "40",
            "45",
            "“john”",
            "“peter”"
        ],
        "correct": 0,
        "explanation": "The dictionary d stores key-value pairs. Accessing d[“john”] looks up the key “john” and returns its value, which is 40."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nt1 = (1, 2, 4, 3)\nt2 = (1, 2, 3, 4)\nprint(t1 < t2)\n```",
        "options": [
            "True",
            "False",
            "Error",
            "None"
        ],
        "correct": 1,
        "explanation": "Tuples are compared element by element. Since the third element in t1 (which is 4) is greater than that in t2 (which is 3), the comparison t1 < t2 evaluates to False."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nmy_tuple = (1, 2, 3, 4)\nmy_tuple.append( (5, 6, 7) )\nprint len(my_tuple)\n```",
        "options": [
            "1",
            "2",
            "5",
            "Error"
        ],
        "correct": 3,
        "explanation": "Tuples are immutable and do not have an append() method. So trying to call my_tuple.append(…) will raise an AttributeError."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\nnumberGames = {}\nnumberGames[(1,2,4)] = 8\nnumberGames[(4,2,1)] = 10\nnumberGames[(1,2)] = 12\nsum = 0\nfor k in numberGames:\n    sum += numberGames[k]\nprint(len(numberGames) + sum)\n```",
        "options": [
            "30",
            "24",
            "33",
            "12"
        ],
        "correct": 2,
        "explanation": "The dictionary has 3 unique tuple keys with values 8, 10, and 12. Their sum is 30. Adding the number of keys (3) gives the final result: 30 + 3 = 33."
    },
    {
        "category": "variables",
        "question": "What is the data type of (1)?",
        "options": [
            "Tuple",
            "Integer",
            "List",
            "Both tuple and integer"
        ],
        "correct": 1,
        "explanation": "The data type of (1) is integer because the parentheses alone don’t make it a tuple—they act as grouping. To create a tuple with one element, you must include a comma: (1,)."
    },
    {
        "category": "control",
        "question": "If a=(1,2,3,4), a[1:-1] is _________",
        "options": [
            "Error, tuple slicing doesn’t exist",
            "[2,3]",
            "(2,3,4)",
            "(2,3)"
        ],
        "correct": 3,
        "explanation": "Tuple slicing works just like list slicing. For a = (1, 2, 3, 4), a[1:-1] extracts elements from index 1 up to (but not including) the last element, which gives (2, 3)."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na=(1,2,(4,5))\nb=(1,2,(3,4))\nprint(a<b)\n```",
        "options": [
            "False",
            "True",
            "Error, < operator is not valid for tuples",
            "Error, < operator is valid for tuples but not if there are sub-tuples"
        ],
        "correct": 0,
        "explanation": "Python compares tuples element by element from left to right. Here, the first two elements of a and b are equal, so it compares the sub-tuples (4, 5) and (3, 4). Since 4 is greater than 3, a < b is False."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na=(\"Check\")*3\nprint(a)\n```",
        "options": [
            "(‘Check’,’Check’,’Check’)",
            "* Operator not valid for tuples",
            "(‘CheckCheckCheck’)",
            "Syntax error"
        ],
        "correct": 2,
        "explanation": "(“Check”) without a comma is just a string in parentheses, not a tuple. Multiplying the string by 3 repeats it three times, resulting in “CheckCheckCheck”."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na=(1,2,3,4)\nprint(del(a[2]))\n```",
        "options": [
            "Now, a=(1,2,4)",
            "Now, a=(1,3,4)",
            "Now a=(3,4)",
            "Error as tuple is immutable"
        ],
        "correct": 3,
        "explanation": "Tuples are immutable, so you cannot delete an element using del(a[2]). This operation raises a TypeError."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na=(2,3,4)\nprint(sum(a,3))\n```",
        "options": [
            "Too many arguments for sum() method",
            "The method sum() doesn’t exist for tuples",
            "12",
            "9"
        ],
        "correct": 2,
        "explanation": "The sum() function takes an iterable (here, the tuple a) and an optional start value (here, 3). It adds all elements of a and then adds the start value. So, sum(a, 3) = 2 + 3 + 4 + 3 = 12."
    },
    {
        "category": "general",
        "question": "Is the following Python code valid?\n\n```python\na=(1,2,3,4)\ndel a\n```",
        "options": [
            "No because tuple is immutable",
            "Yes, first element in the tuple is deleted",
            "Yes, the entire tuple is deleted",
            "No, invalid syntax for del method"
        ],
        "correct": 2,
        "explanation": "del a deletes the entire variable a, not just elements inside it. Even though tuples are immutable, deleting the whole variable is allowed."
    },
    {
        "category": "general",
        "question": "What type of data is: a=[(1,1),(2,4),(3,9)]?",
        "options": [
            "Array of tuples",
            "List of tuples",
            "Tuples of lists",
            "Invalid type"
        ],
        "correct": 1,
        "explanation": "The variable a is a list where each item is a tuple — for example, (1, 1), (2, 4), (3, 9). Hence, the data type is a list of tuples."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na=(0,1,2,3,4)\nb=slice(0,2)\nprint(a[b])\n```",
        "options": [
            "Invalid syntax for slicing",
            "[0,2]",
            "(0,1)",
            "(0,2)"
        ],
        "correct": 2,
        "explanation": "slice(0, 2) creates a slice object equivalent to [0:2]. So, a[b] returns elements from index 0 up to (but not including) 2, which is (0, 1)."
    },
    {
        "category": "tuples_dicts",
        "question": "Is the following Python code valid?\n\n```python\na=(1,2,3)\nb=('A','B','C')\nc=tuple(zip(a,b))\nprint(c)\n```",
        "options": [
            "Yes, c will be ((1, ‘A’), (2, ‘B’), (3, ‘C’))",
            "Yes, c will be ((1,2,3),(‘A’,’B’,’C’))",
            "No because tuples are immutable",
            "No because the syntax for zip function isn’t valid"
        ],
        "correct": 0,
        "explanation": "The zip(a, b) pairs elements from a and b one by one, creating tuples like (1, ‘A’), (2, ‘B’), (3, ‘C’). Wrapping it with tuple() converts the zipped object into a tuple of these pairs."
    },
    {
        "category": "general",
        "question": "Is the following Python code valid?\n\n```python\na,b,c=1,2,3\nprint (a,b,c)\n```",
        "options": [
            "Yes, [1,2,3] is printed",
            "No, invalid syntax",
            "Yes, (1,2,3) is printed",
            "1 is printed"
        ],
        "correct": 2,
        "explanation": "In Python, multiple assignment like a, b, c = 1, 2, 3 assigns values to variables a, b, and c simultaneously. When you just type a, b, c in the shell, it displays a tuple (1, 2, 3)."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\na = ('check',)\nn = 2\nfor i in range(int(n)):\n    a = (a,)\n    print(a)\n```",
        "options": [
            "Error, tuples are immutable",
            "((‘check’,)’check’,)",
            "/ (('check',)’check’,) / ((('check',)’check’,)’check’,)"
        ],
        "correct": 0,
        "explanation": "The code initializes a as a tuple with one element ‘check’. In each loop iteration, a is rewrapped in another tuple, adding one level of nesting. The output is two lines: ((‘check’,),) and (((‘check’,),),)."
    },
    {
        "category": "general",
        "question": "Is the following Python code valid?\n\n```python\na,b=1,2,3\n```",
        "options": [
            "Yes, this is an example of tuple unpacking. a=1 and b=2",
            "Yes, this is an example of tuple unpacking. a=(1,2) and b=3",
            "No, too many values to unpack",
            "Yes, this is an example of tuple unpacking. a=1 and b=(2,3)"
        ],
        "correct": 2,
        "explanation": "Unpacking requires the number of variables on the left to match the number of values on the right. Here, there are 2 variables (a, b) but 3 values (1, 2, 3). This mismatch causes Python to raise a “too many values to unpack” error."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na=(1,2)\nb=(3,4)\nc=a+b\nprint(c)\n```",
        "options": [
            "(4, 6)",
            "(1, 2, 3, 4)",
            "Error as tuples are immutable",
            "None"
        ],
        "correct": 1,
        "explanation": "The + operator concatenates two tuples by joining their elements in order. Since a is (1, 2) and b is (3, 4), a + b creates a new tuple (1, 2, 3, 4). Tuples remain unchanged because they are immutable, but concatenation produces a new tuple."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na,b=6,7\na,b=b,a\nprint(a,b)\n```",
        "options": [
            "6, 7",
            "Invalid syntax",
            "7, 6",
            "Nothing is printed"
        ],
        "correct": 2,
        "explanation": "The statement a, b = b, a swaps the values of a and b using tuple unpacking. Initially, a is 6 and b is 7, but after swapping, a becomes 7 and b becomes 6. This is a common Pythonic way to swap variables without a temporary variable."
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code?\n\n```python\nimport collections\na=collections.namedtuple('a',['i','j'])\nobj=a(i=4,j=7)\nprint(obj)\n```",
        "options": [
            "a(i=4, j=7)",
            "obj(i=4, j=7)",
            "(4,7)",
            "An exception is thrown"
        ],
        "correct": 0,
        "explanation": "The namedtuple creates a custom tuple class named ‘a’ with fields ‘i’ and ‘j’. When you create an object obj = a(i=4, j=7), it stores the values as a tuple with named fields. Printing obj shows a(i=4, j=7)."
    },
    {
        "category": "tuples_dicts",
        "question": "Tuples can’t be made keys of a dictionary.",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "Tuples can be used as dictionary keys because they are immutable. However, this only works if all elements inside the tuple are also immutable (e.g., numbers, strings). Mutable types like lists inside a tuple make it unhashable and unusable as a key."
    },
    {
        "category": "general",
        "question": "Is the following Python code valid?\n\n```python\na=2,3,4,5\nprint (a)\n```",
        "options": [
            "Yes, 2 is printed",
            "Yes, [2,3,4,5] is printed",
            "No, too many values to unpack",
            "Yes, (2, 3, 4, 5) is printed"
        ],
        "correct": 3,
        "explanation": "In Python, assigning values like a=2,3,4,5 without parentheses creates a tuple. So a becomes the tuple (2, 3, 4, 5) and printing a displays it in that format. Parentheses are optional when defining a tuple with multiple items."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\na=(2,3,1,5)\na.sort()\nprint(a)\n```",
        "options": [
            "(1,2,3,5)",
            "(2,3,1,5)",
            "None",
            "Error, tuple has no attribute sort"
        ],
        "correct": 3,
        "explanation": "Tuples are immutable in Python, meaning you can’t change their contents. The .sort() method is only available for mutable sequences like lists, not for tuples. Hence, calling a.sort() raises an AttributeError."
    },
    {
        "category": "tuples_dicts",
        "question": "Is the following Python code valid?\n\n```python\na=(1,2,3)\nprint(b=a.update(4,))\n```",
        "options": [
            "Yes, a=(1,2,3,4) and b=(1,2,3,4)",
            "Yes, a=(1,2,3) and b=(1,2,3,4)",
            "No because tuples are immutable",
            "No because wrong syntax for update() method"
        ],
        "correct": 2,
        "explanation": "Tuples in Python cannot be modified after creation, so there’s no update() method for tuples. Attempting to call a.update(4,) will raise an AttributeError. Tuples are immutable, meaning their contents cannot be changed or added to."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\na=[(2,4),(1,2),(3,9)]\na.sort()\nprint(a)\n```",
        "options": [
            "[(1, 2), (2, 4), (3, 9)]",
            "[(2, 4),(1, 2),(3, 9)]",
            "Error because tuples are immutable",
            "Error, tuple has no sort attribute"
        ],
        "correct": 0,
        "explanation": "The list a contains tuples, and calling a.sort() sorts the list based on the first element of each tuple (and the second if needed). Since lists are mutable, sorting works fine, even if the elements are immutable like tuples."
    },
    {
        "category": "operators",
        "question": "Which of these about a set is not true?",
        "options": [
            "Mutable data type",
            "Does not allow duplicate values",
            "Data type with unordered values",
            "Immutable data type"
        ],
        "correct": 3,
        "explanation": "A set in Python is a mutable data type, meaning its elements can be added or removed after creation. It does not allow duplicate values and stores elements in an unordered manner. Therefore, the statement that a set is an immutable data type is incorrect."
    },
    {
        "category": "general",
        "question": "Which of the following is not the correct syntax for creating a set?",
        "options": [
            "set([[1,2],[3,4]])",
            "set([1,2,2,3,4])",
            "set((1,2,3,4))",
            "{1,2,3,4}"
        ],
        "correct": 0,
        "explanation": "While sets require an iterable as input, all elements inside the iterable must also be hashable. Lists like [1,2] and [3,4] are unhashable, so set([[1,2],[3,4]]) will raise a TypeError. The other options use valid and hashable elements like integers or tuples."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nnums = set([1,1,2,3,3,3,4,4])\nprint(len(nums))\n```",
        "options": [
            "7",
            "Error, invalid syntax for formation of set",
            "4",
            "8"
        ],
        "correct": 2,
        "explanation": "In the code nums = set([1,1,2,3,3,3,4,4]), the list contains duplicates, but when it’s converted to a set, all duplicates are removed. The resulting set is {1, 2, 3, 4}, which has 4 unique elements. Thus, len(nums) returns 4."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\na = [5,5,6,7,7,7]\nb = set(a)\ndef test(lst):\n    if lst in b:\n        return 1\n    else:\n        return 0\nfor i in  filter(test, a):\n    print(i,end=\" \")\n```",
        "options": [
            "5 5 6",
            "5 6 7",
            "5 5 6 7 7 7",
            "5 6 7 7 7"
        ],
        "correct": 2,
        "explanation": "The test function checks whether each element of list a exists in set b. Since all elements of a are present in b, the filter includes every item in a. Therefore, the output is the full list: 5 5 6 7 7 7."
    },
    {
        "category": "variables",
        "question": "Which of the following statements is used to create an empty set?",
        "options": [
            "{ }",
            "set()",
            "[ ]",
            "( )"
        ],
        "correct": 1,
        "explanation": "In Python, using {} creates an empty dictionary, not a set. To create an empty set, you must use the set() constructor. Options like [] and () create empty list and tuple respectively, not sets. Therefore, only set() correctly creates an empty set."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na={5,4}\nb={1,2,4,5}\nprint(a<b)\n```",
        "options": [
            "{1,2}",
            "True",
            "False",
            "Invalid operation"
        ],
        "correct": 1,
        "explanation": "In Python, the < operator checks whether one set is a proper subset of another. In this case, a = {5, 4} and b = {1, 2, 4, 5}. All elements of set a are present in set b, and a is not equal to b, so a < b evaluates to True."
    },
    {
        "category": "control",
        "question": "If a={5,6,7,8}, which of the following statements is false?",
        "options": [
            "print(len(a))",
            "print(min(a))",
            "a.remove(5)",
            "a[2]=45"
        ],
        "correct": 3,
        "explanation": "Sets in Python are unordered collections, so their elements cannot be accessed or modified using indexing like a[2]. Therefore, a[2] = 45 is invalid and raises a TypeError, making it the false statement."
    },
    {
        "category": "control",
        "question": "If a={5,6,7}, what happens when a.add(5) is executed?",
        "options": [
            "a={5,5,6,7}",
            "a={5,6,7}",
            "Error as there is no add function for set data type",
            "Error as 5 already exists in the set"
        ],
        "correct": 1,
        "explanation": "In a set, duplicate elements are automatically ignored. So, adding 5 again does nothing since it already exists in the set. The set remains unchanged as {5, 6, 7}."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na={4,5,6}\nb={2,8,6}\nprint(a+b)\n```",
        "options": [
            "{4,5,6,2,8}",
            "{4,5,6,2,8,6}",
            "Error as unsupported operand type for sets",
            "Error as the duplicate item 6 is present in both sets"
        ],
        "correct": 2,
        "explanation": "The + operator is not supported between sets in Python. To combine two sets, you should use set methods like union() or the | operator. Using a + b results in a TypeError."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na={4,5,6}\nb={2,8,6}\nprint(a-b)\n```",
        "options": [
            "{4, 5}",
            "{6}",
            "Error as unsupported operand type for set data type",
            "Error as the duplicate item 6 is present in both sets"
        ],
        "correct": 0,
        "explanation": "The – operator performs set difference. It returns elements that are in set a but not in set b. Since 6 is present in both sets, it is excluded from the result, leaving {4, 5}."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na={5,6,7,8}\nb={7,8,10,11}\nprint(a^b)\n```",
        "options": [
            "{5, 6, 7, 8, 10, 11}",
            "{7, 8}",
            "Error as unsupported operand type of set data type",
            "{5, 6, 10, 11}"
        ],
        "correct": 3,
        "explanation": "The ^ operator performs a symmetric difference, which returns elements that are in either a or b, but not in both. Since 7 and 8 are common in both sets, they are excluded. The result is {5, 6, 10, 11}."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\ns={5,6}\nprint(s*3)\n```",
        "options": [
            "Error as unsupported operand type for set data type",
            "{5,6,5,6,5,6}",
            "{5,6}",
            "Error as multiplication creates duplicate elements which isn’t allowed"
        ],
        "correct": 0,
        "explanation": "The * operator is not defined for sets in Python. Sets do not support repetition through multiplication, so attempting s * 3 results in a TypeError."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na={5,6,7,8}\nb={7,5,6,8}\nprint(a==b)\n```",
        "options": [
            "True",
            "False"
        ],
        "correct": 0,
        "explanation": "Sets in Python are unordered collections, so the order of elements doesn’t matter during comparison. Since both sets contain the same elements, a == b evaluates to True."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na={3,4,5}\nb={5,6,7}\nprint(a|b)\n```",
        "options": [
            "Invalid operation",
            "{3, 4, 5, 6, 7}",
            "{5}",
            "{3, 4, 6, 7}"
        ],
        "correct": 1,
        "explanation": "The | operator performs a union of sets, which combines all unique elements from both sets. So, a | b results in {3, 4, 5, 6, 7}."
    },
    {
        "category": "builtins",
        "question": "Is the following Python code valid?\n\n```python\na={3,4,{7,5}}\nprint(a[2][0])\n```",
        "options": [
            "Yes, 7 is printed",
            "Error, elements of a set can’t be printed",
            "Error, subsets aren’t allowed",
            "Yes, {7,5} is printed"
        ],
        "correct": 2,
        "explanation": "In Python, set elements must be immutable (like integers, strings, tuples). Since sets themselves are mutable, trying to include a set {7, 5} as an element inside another set causes a TypeError. Therefore, subsets like {7, 5} inside a set are not allowed."
    },
    {
        "category": "operators",
        "question": "Which of these about a frozenset is not true?",
        "options": [
            "Mutable data type",
            "Allows duplicate values",
            "Data type with unordered values",
            "Immutable data type"
        ],
        "correct": 0,
        "explanation": "A frozenset is an immutable version of a set, meaning its elements cannot be changed after creation. Hence, calling it a mutable data type is not true. It does allow only unique elements and stores them in an unordered fashion."
    },
    {
        "category": "builtins",
        "question": "What is the syntax of the following Python code?\n\n```python\na=frozenset(set([5,6,7]))\nprint(a)\n```",
        "options": [
            "{5, 6, 7}",
            "frozenset({5, 6, 7})",
            "Error, not possible to convert set into frozenset",
            "Syntax error"
        ],
        "correct": 1,
        "explanation": "The code correctly converts a list to a set, and then to a frozenset. When printed, Python shows it as frozenset({5, 6, 7}), which indicates the data type and its contents."
    },
    {
        "category": "builtins",
        "question": "Is the following Python code valid?\n\n```python\na = frozenset([5, 6, 7])\nprint(a)\na.add(5)\n```",
        "options": [
            "Yes, now a is {5,5,6,7}",
            "No, frozen set is immutable",
            "No, invalid syntax for add method",
            "Yes, now a is {5,6,7}"
        ],
        "correct": 1,
        "explanation": "A frozenset is immutable, which means no elements can be added or removed after its creation. Calling a.add(5) will raise an AttributeError because frozenset objects do not support the .add() method."
    },
    {
        "category": "general",
        "question": "Set members must not be hashable.",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "Set members must be hashable, not the opposite. This means only immutable types like integers, strings, and tuples (with immutable elements) can be added to a set. Mutable types like lists or other sets cannot be elements of a set."
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code?\n\n```python\na={3,4,5}\na.update([1,2,3])\nprint(a)\n```",
        "options": [
            "Error, no method called update for set data type",
            "{1, 2, 3, 4, 5}",
            "Error, list can’t be added to set",
            "Error, duplicate item present in list"
        ],
        "correct": 1,
        "explanation": "The update() method adds elements from an iterable (like a list) to the set. Duplicate values are ignored, and the final set includes all unique elements: {1, 2, 3, 4, 5}."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na={1,2,3}\na.intersection_update({2,3,4,5})\nprint(a)\n```",
        "options": [
            "{2, 3}",
            "Error, duplicate item present in list",
            "Error, no method called intersection_update for set data type",
            "{1, 4, 5}"
        ],
        "correct": 0,
        "explanation": "The intersection_update() method updates the set by keeping only the elements that are also in the specified set. So, a becomes {2, 3} after removing elements not common to both sets."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na={1,2,3}\nb=a\nb.remove(3)\nprint(a)\n```",
        "options": [
            "{1, 2, 3}",
            "Error, copying of sets isn’t allowed",
            "{1, 2}",
            "Error, invalid syntax for remove"
        ],
        "correct": 2,
        "explanation": "In Python, b = a makes b refer to the same set object as a (not a copy). So any modification done through b reflects in a. Removing 3 from b also removes it from a, resulting in {1, 2}."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na={1,2,3}\nb=a.copy()\nb.add(4)\nprint(a)\n```",
        "options": [
            "{1, 2, 3}",
            "Error, invalid syntax for add",
            "{1, 2, 3, 4}",
            "Error, copying of sets isn’t allowed"
        ],
        "correct": 0,
        "explanation": "The copy() method creates a shallow copy of the set a, so b is an independent set. Adding 4 to b does not affect a. Therefore, printing a gives {1, 2, 3}."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na={1,2,3}\nb=a.add(4)\nprint(b)\n```",
        "options": [
            "0",
            "{1,2,3,4}",
            "{1,2,3}",
            "None"
        ],
        "correct": 3,
        "explanation": "In Python, the add() method adds an element to a set in-place and does not return anything. So when you write b = a.add(4), the value of b becomes None because add() returns None. The set a is updated to {1, 2, 3, 4}, but printing b outputs None."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na={1,2,3}\nb=frozenset([3,4,5])\nprint(a-b)\n```",
        "options": [
            "{1, 2}",
            "Error as difference between a set and frozenset can’t be found out",
            "Error as unsupported operand type for set data type",
            "frozenset({1, 2})"
        ],
        "correct": 0,
        "explanation": "In Python, you can perform set operations like difference (-) between a set and a frozenset because both are iterable and support set operations. Here, a = {1, 2, 3} and b = frozenset([3, 4, 5]). The difference a – b removes elements in b from a, resulting in {1, 2}. The result is still a regular set, not a frozenset."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na={5,6,7}\nprint(sum(a,5))\n```",
        "options": [
            "5",
            "23",
            "18",
            "Invalid syntax for sum method, too many arguments"
        ],
        "correct": 1,
        "explanation": "The sum() function in Python takes two arguments: an iterable and an optional starting value. In the code sum(a, 5), the set a = {5, 6, 7} is summed with a starting value of 5. So it calculates 5 (start) + 5 + 6 + 7 = 23. Therefore, the output is 23."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na={1,2,3}\nprint({x*2 for x in a|{4,5}})\n```",
        "options": [
            "{2, 4, 6}",
            "Error, set comprehensions aren’t allowed",
            "{2, 4, 6, 8, 10}",
            "{8, 10}"
        ],
        "correct": 2,
        "explanation": "The union operator | combines sets a and {4, 5} resulting in {1, 2, 3, 4, 5}. The set comprehension then multiplies each element by 2, producing {2, 4, 6, 8, 10}."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\na={5,6,7,8}\nb={7,8,9,10}\nprint(len(a+b))\n```",
        "options": [
            "8",
            "Error, unsupported operand ‘+’ for sets",
            "6",
            "Nothing is displayed"
        ],
        "correct": 1,
        "explanation": "In Python, the + operator is not supported for sets. You cannot directly add two sets using a + b; doing so will raise a TypeError. To combine sets, you should use set operations like a | b (union) or a.union(b). Therefore, the code results in an error."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na={1,2,3}\nb={1,2,3}\nc=a.issubset(b)\nprint(c)\n```",
        "options": [
            "True",
            "Error, no method called issubset() exists",
            "Syntax error for issubset() method",
            "False"
        ],
        "correct": 0,
        "explanation": "The issubset() method checks whether all elements of set a are present in set b. Here, both a and b are {1, 2, 3}, so a.issubset(b) returns True, since every element in a is also in b. The method is valid and correctly used."
    },
    {
        "category": "builtins",
        "question": "Is the following Python code valid?\n\n```python\na={1,2,3}\nb={1,2,3,4}\nc=a.issuperset(b)\nprint(c)\n```",
        "options": [
            "False",
            "True",
            "Syntax error for issuperset() method",
            "Error, no method called issuperset() exists"
        ],
        "correct": 0,
        "explanation": "The issuperset() method checks whether all elements of another set are contained in the calling set. In this case, a = {1, 2, 3} and b = {1, 2, 3, 4}. Since a does not contain all elements of b (it lacks 4), a.issuperset(b) returns False. The method is valid and correctly used."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\ns=set()\nprint(type(s))\n```",
        "options": [
            "<’set’>",
            "<class ‘set’>",
            "set",
            "class set"
        ],
        "correct": 1,
        "explanation": "When you create an empty set using s = set() and then print type(s), Python outputs the type of the object. Since s is a set, the output is <class ‘set’>, which indicates the data type of the variable."
    },
    {
        "category": "builtins",
        "question": "The following Python code results in an error.\n\n```python\ns={2, 3, 4, [5, 6]}\nprint(s)\n```",
        "options": [
            "True",
            "False"
        ],
        "correct": 0,
        "explanation": "In Python, sets can only contain hashable (immutable) elements. Lists like [5, 6] are mutable and unhashable, so trying to include a list inside a set (s = {2, 3, 4, [5, 6]}) will raise a TypeError. Therefore, the statement is True — the code results in an error."
    },
    {
        "category": "tuples_dicts",
        "question": "Set makes use of __________ Dictionary makes use of ____________",
        "options": [
            "keys, keys",
            "key values, keys",
            "keys, key values",
            "key values, key values"
        ],
        "correct": 2,
        "explanation": "A set in Python is implemented using a hash table and only stores keys (i.e., unique values without associated data). A dictionary also uses a hash table but stores both keys and their associated values (key-value pairs)."
    },
    {
        "category": "general",
        "question": "Which of the following lines of code will result in an error?",
        "options": [
            "s={abs}",
            "s={4, ‘abc’, (1,2)}",
            "s={2, 2.2, 3, ‘xyz’}",
            "s={san}"
        ],
        "correct": 3,
        "explanation": "Here,\nabs is a built-in function and is hashable, so s = {abs} is valid.\nThe set {4, ‘abc’, (1, 2)} contains immutable and hashable elements, so it’s valid.\nThe set {2, 2.2, 3, ‘xyz’} contains hashable types, so it’s valid.\nsan is undefined (not quoted or declared), so s = {san} raises a NameError because san is not defined."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\ns={2, 5, 6, 6, 7}\nprint(s)\n```",
        "options": [
            "{2, 5, 7}",
            "{2, 5, 6, 7}",
            "{2, 5, 6, 6, 7}",
            "Error"
        ],
        "correct": 1,
        "explanation": "Sets automatically remove duplicate elements. In the set s = {2, 5, 6, 6, 7}, the duplicate 6 will be removed, so printing s outputs {2, 5, 6, 7}."
    },
    {
        "category": "general",
        "question": "Input order is preserved in sets.",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "Sets in Python are unordered collections, meaning they do not preserve the order of elements. When you create or print a set, the order of elements can appear arbitrary and may vary. Only from Python 3.7+, dictionaries preserve insertion order, but sets do not."
    },
    {
        "category": "lists",
        "question": "Write a list comprehension for number and its cube for:\n\n```python\nl=[1, 2, 3, 4, 5, 6, 7, 8, 9]\n```",
        "options": [
            "[x**3 for x in l]",
            "[x^3 for x in l]",
            "[x**3 in l]",
            "[x^3 in l]"
        ],
        "correct": 0,
        "explanation": "In Python, ** is the exponentiation operator used to calculate the cube of a number (x**3). The list comprehension [x**3 for x in l] generates a new list with each element being the cube of the corresponding element in l. The ^ operator, used in options b and d, is a bitwise XOR, not exponentiation, so it’s incorrect here."
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code?\n\n```python\ns={1, 2, 3}\ns.update(4)\nprint(s)\n```",
        "options": [
            "{1, 2, 3, 4}",
            "{1, 2, 4, 3}",
            "{4, 1, 2, 3}",
            "Error"
        ],
        "correct": 3,
        "explanation": "The update() method expects an iterable as an argument (like a list, set, or tuple) to add multiple elements to the set. Passing an integer 4 directly is not iterable, so s.update(4) will raise a TypeError. To add a single element using update(), you need to pass it as an iterable, for example: s.update([4])."
    },
    {
        "category": "functions",
        "question": "Which of the following functions cannot be used on heterogeneous sets?",
        "options": [
            "pop",
            "remove",
            "update",
            "sum"
        ],
        "correct": 3,
        "explanation": "Functions like pop(), remove(), and update() can be used on sets regardless of whether the elements are heterogeneous (mixed data types) or homogeneous. However, sum() requires all elements to be numeric because it adds them up. If the set contains mixed types (like strings and numbers), sum() will raise a TypeError. Therefore, sum() cannot be used on heterogeneous sets."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\ns={4>3, 0, 3-3}\nprint(all(s))\nprint(any(s))\n```",
        "options": [
            "/ True / False",
            "/ False / True",
            "/ True / True",
            "/ False / False"
        ],
        "correct": 1,
        "explanation": "The set contains the values True, 0, and 0. The all() function returns False because not all elements are true—there are zeros which are considered false. The any() function returns True since at least one element (True) is True."
    },
    {
        "category": "functions",
        "question": "Which of the following functions will return the symmetric difference between two sets, x and y?",
        "options": [
            "x | y",
            "x ^ y",
            "x & y",
            "x – y"
        ],
        "correct": 1,
        "explanation": "The function x ^ y returns the symmetric difference between the two sets x and y. This is basically an XOR operation being performed on the two sets."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nz=set('abc$de')\nprint('a' in z)\n```",
        "options": [
            "True",
            "False",
            "No output",
            "Error"
        ],
        "correct": 0,
        "explanation": "The code shown above is used to check whether a particular item is a part of a given set or not. Since ‘a’ is a part of the set z, the output is true. Note that this code would result in an error in the absence of the quotes."
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nz=set('abc')\nz.add('san')\nz.update(set(['p', 'q']))\nprint(z)\n```",
        "options": [
            "{‘abc’, ‘p’, ‘q’, ‘san’}",
            "{‘a’, ‘b’, ‘c’, [‘p’, ‘q’], ‘san}",
            "{‘a’, ‘c’, ‘c’, ‘p’, ‘q’, ‘s’, ‘a’, ‘n’}",
            "{‘c’, ‘a’, ‘san’, ‘q’, ‘p’, ‘b’}"
        ],
        "correct": 3,
        "explanation": "The code shown first adds the element ‘san’ to the set z. The set z is then updated and two more elements, namely, ‘p’ and ‘q’ are added to it. Hence the output is: {‘a’, ‘b’, ‘c’, ‘p’, ‘q’, ‘san’}"
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\ns=set([1, 2, 3])\nprint(s.union([4, 5]))\nprint(s|([4, 5]))\n```",
        "options": [
            "- [B] / / Error / {1, 2, 3, 4, 5}",
            "/ {1, 2, 3, 4, 5} / Error",
            "/ Error / Error"
        ],
        "correct": 1,
        "explanation": "In this Python snippet, the set s is created with values {1, 2, 3}. The method s.union([4, 5]) successfully returns a new set {1, 2, 3, 4, 5} because the union() method can take any iterable, including a list. However, the next line attempts to use the set union operator | between a set and a list, which is not supported in Python and causes a TypeError. So, the first print statement displays the correct union, while the second one raises an error."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nfor x in set('pqr'):\n\tprint(x*2)\n```",
        "options": [
            "/ pp / qq / rr",
            "/ pqr / pqr",
            "ppqqrr",
            "pqrpqr"
        ],
        "correct": 0,
        "explanation": "The expression set(‘pqr’) creates a set with the characters ‘p’, ‘q’, and ‘r’, but in no guaranteed order because sets are unordered. The for loop iterates through each element in the set, and print(x*2) prints each character twice on a new line. Therefore, the output will be:\npp\nqq\nrr"
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nprint({a**2 for a in range(4)})\n```",
        "options": [
            "{1, 4, 9, 16}",
            "{0, 1, 4, 9, 16}",
            "Error",
            "{0, 1, 4, 9}"
        ],
        "correct": 3,
        "explanation": "The code uses set comprehension to compute squares of numbers in range(4), i.e., 0 to 3. It calculates 0**2, 1**2, 2**2, and 3**2, resulting in the set {0, 1, 4, 9}. Since sets are unordered and contain unique values, the output is {0, 1, 4, 9}."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python function?\n\n```python\nprint({x for x in 'abc'})\nprint({x*3 for x in 'abc'})\n```",
        "options": [
            "/ {abc} / aaa / bbb / ccc",
            "/ abc / abc abc abc",
            "/ {‘a’, ‘b’, ‘c’} / {‘aaa’, ‘bbb’, ‘ccc’}",
            "/ {‘a’, ‘b’, ‘c’} / abc / abc / abc"
        ],
        "correct": 2,
        "explanation": "The expression {x for x in ‘abc’} is a set comprehension that creates a set of individual characters from the string ‘abc’, resulting in {‘a’, ‘b’, ‘c’} (order may vary due to the unordered nature of sets). The expression {x*3 for x in ‘abc’} multiplies each character by 3, producing ‘aaa’, ‘bbb’, and ‘ccc’, and collects them into a set: {‘aaa’, ‘bbb’, ‘ccc’}.\nSo the output will be:\n    {‘a’, ‘b’, ‘c’}\n   {‘aaa’, ‘bbb’, ‘ccc’}"
    },
    {
        "category": "builtins",
        "question": "The output of the following code is: class<’set’>.\n\n```python\ntype({})\n```",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "The expression type({}) does not return <class ‘set’> it actually returns because {} by default creates an empty dictionary, not a set. To create an empty set, you must use set(). Hence, the output is not <class ‘set’>, and the statement is False."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\na=[1, 4, 3, 5, 2]\nb=[3, 1, 5, 2, 4]\nprint(a==b)\nprint(set(a)==set(b))\n```",
        "options": [
            "/ True / False",
            "/ False / False",
            "/ False / True",
            "/ True / True"
        ],
        "correct": 2,
        "explanation": "Here,\na == b compares the order and elements of both lists. Since a and b have the same elements but in a different order, this comparison returns False.\nset(a) == set(b) compares the set of elements, which ignores order and duplicates. Since both a and b contain the same elements, their sets are equal, so this returns True.\nThus, the output is:\n\n   False\n   True"
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nl=[1, 2, 4, 5, 2, 'xy', 4]\nprint(set(l))\nprint(l)\n```",
        "options": [
            "/ {1, 2, 4, 5, 2, ‘xy’, 4} / [1, 2, 4, 5, 2, ‘xy’, 4]",
            "/ {1, 2, 4, 5, ‘xy’} / [1, 2, 4, 5, 2, ‘xy’, 4]",
            "/ {1, 5, ‘xy’} / [1, 5, ‘xy’]",
            "/ {1, 2, 4, 5, ‘xy’} / [1, 2, 4, 5, ‘xy’]"
        ],
        "correct": 1,
        "explanation": "The set(l) function removes all duplicate elements from the list l and returns a set, which is an unordered collection of unique items. So set(l) gives {1, 2, 4, 5, ‘xy’}. However, print(l) displays the original list, which remains unchanged as [1, 2, 4, 5, 2, ‘xy’, 4].\nSo the output will be something like:\n\n{1, 2, 4, 5, 'xy'}\n[1, 2, 4, 5, 2, 'xy', 4]"
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\ns1={3, 4}\ns2={1, 2}\ns3=set()\ni=0\nj=0\nfor i in s1:\n    for j in s2:\n        s3.add((i,j))\n        i+=1\n        j+=1\nprint(s3)\n```",
        "options": [
            "{(3, 4), (1, 2)}",
            "Error",
            "{(4, 2), (3, 1), (4, 1), (5, 2)}",
            "{(3, 1), (4, 2)}"
        ],
        "correct": 2,
        "explanation": "The code shown above finds the Cartesian product of the two sets, s1 and s2. The Cartesian product of these two sets is stored in a third set, that is, s3. Hence the output of this code is: {(4, 2), (3, 1), (4, 1), (5, 2)}."
    },
    {
        "category": "lists",
        "question": "The ____________ function removes the first element of a set and the last element of a list.",
        "options": [
            "remove",
            "pop",
            "discard",
            "dispose"
        ],
        "correct": 1,
        "explanation": "The pop() function removes and returns an arbitrary element from a set (since sets are unordered) and removes the last element from a list by default. It behaves differently based on the data type."
    },
    {
        "category": "functions",
        "question": "The difference between the functions discard and remove is that:",
        "options": [
            "Discard removes the last element of the set whereas remove removes the first element of the set",
            "Discard throws an error if the specified element is not present in the set whereas remove does not throw an error in case of absence of the specified element",
            "Remove removes the last element of the set whereas discard removes the first element of the set",
            "Remove throws an error if the specified element is not present in the set whereas discard does not throw an error in case of absence of the specified element"
        ],
        "correct": 3,
        "explanation": "The difference between remove and discard in sets is that remove will raise an error if the element to be removed is not present, while discard will not raise any error and simply do nothing if the element is missing. This makes discard safer to use when you’re unsure if the element exists in the set."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\ns1={1, 2, 3}\ns2={3, 4, 5, 6}\nprint(s1.difference(s2))\nprint(s2.difference(s1))\n```",
        "options": [
            "/ / {1, 2} / {4, 5, 6}",
            "- [C] / {4, 5, 6} / {1, 2}",
            "/ / {4, 5, 6} / {4, 5, 6}"
        ],
        "correct": 0,
        "explanation": "The function s1.difference(s2) returns a set containing the elements which are present in the set s1 but not in the set s2. Similarly, the function s2.difference(s1) returns a set containing elements which are present in the set s2 but not in the set s1. Hence the output of the code shown above will be:\n \n{1, 2}\n{4, 5, 6}\n."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\ns1={1, 2, 3}\ns2={4, 5, 6}\nprint(s1.isdisjoint(s2))\nprint(s2.isdisjoint(s1))\n```",
        "options": [
            "/ True / False",
            "/ False / True",
            "/ True / True",
            "/ False / False"
        ],
        "correct": 2,
        "explanation": "The isdisjoint() method returns True if two sets have no elements in common. Since s1 = {1, 2, 3} and s2 = {4, 5, 6} share no elements, both s1.isdisjoint(s2) and s2.isdisjoint(s1) return True."
    },
    {
        "category": "control",
        "question": "If we have two sets, s1 and s2, and we want to check if all the elements of s1 are present in s2 or not, we can use the function:",
        "options": [
            "s2.issubset(s1)",
            "s2.issuperset(s1)",
            "s1.issuperset(s2)",
            "s1.isset(s2)"
        ],
        "correct": 1,
        "explanation": "To check if all elements of s1 are present in s2, you want to verify if s2 is a superset of s1. The issuperset() method returns True if the set on which it’s called contains all elements of the specified set. So, s2.issuperset(s1) checks exactly that."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\ns1={1, 2, 3, 8}\ns2={3, 4, 5, 6}\nprint(s1|s2)\nprint(s1.union(s2))\n```",
        "options": [
            "/ {3} / {1, 2, 3, 4, 5, 6, 8}",
            "/ {1, 2, 4, 5, 6, 8} / {1, 2, 4, 5, 6, 8}",
            "/ {3} / {3}",
            "/ {1, 2, 3, 4, 5, 6, 8} / {1, 2, 3, 4, 5, 6, 8}"
        ],
        "correct": 3,
        "explanation": "The function s1|s2 as well as the function s1.union(s2) returns a union of the two sets s1 and s2. Hence the output of both of these functions is: {1, 2, 3, 4, 5, 6, 8}."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na=set('abc')\nb=set('def')\nb.intersection_update(a)\nprint(a)\nprint(b)\n```",
        "options": [
            "/ set() / (‘e’, ‘d’, ‘f’}",
            "/ {} / {}",
            "/ {‘b’, ‘c’, ‘a’} / set()",
            "/ set() / set()"
        ],
        "correct": 2,
        "explanation": "The function b.intersection_update(a) puts those elements in the set b which are common to both the sets a and b. The set a remains as it is. Since there are no common elements between the sets a and b, the output is:\n{‘b’, ‘c’, ‘a’}\nset()"
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\ns1= {1, 2, 3}\nprint(s1.issubset(s1))\n```",
        "options": [
            "True",
            "Error",
            "No output",
            "False"
        ],
        "correct": 0,
        "explanation": "The method issubset() checks if all elements of a set are contained in another set. Since a set is always a subset of itself, s1.issubset(s1) returns True."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nx=set('abcde')\ny=set('xyzbd')\nx.difference_update(y)\nprint(x)\nprint(y)\n```",
        "options": [
            "/ {‘a’, ‘b’, ‘c’, ‘d’, ‘e’} / {‘x’, ‘y’, ‘z’}",
            "/ {‘a’, ‘c’, ‘e’} / {‘x’, ‘y’, ‘z’, ‘b’, ‘d’}",
            "/ {‘b’, ‘d’} / {‘b’, ‘d’}",
            "/ {‘a’, ‘c’, ‘e’} / {‘x’, ‘y’, ‘z’}"
        ],
        "correct": 1,
        "explanation": "The function x.difference_update(y) removes all the elements of the set y from the set x. Hence the output of the code is:\n   {‘a’, ‘c’, ‘e’}\n   {‘x’, ‘y’, ‘z’, ‘b’, ‘d’}"
    },
    {
        "category": "tuples_dicts",
        "question": "Which of the following statements create a dictionary?",
        "options": [
            "d = {}",
            "d = {“john”:40, “peter”:45}",
            "d = {40:”john”, 45:”peter”}",
            "All of the mentioned"
        ],
        "correct": 3,
        "explanation": "d = {} creates an empty dictionary.\nd = {“john”: 40, “peter”: 45} creates a dictionary with string keys and integer values.\nd = {40: “john”, 45: “peter”} creates a dictionary with integer keys and string values.\nAll of these are valid ways to create dictionaries in Python."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nd = {\"john\":40, \"peter\":45}\nprint(d)\n```",
        "options": [
            "“john”, 40, “peter”, 45",
            "{‘john’: 40, ‘peter’: 45}",
            "40 and 45",
            "d = (40:”john”, 45:”peter”)"
        ],
        "correct": 1,
        "explanation": "Dictionaries in Python are displayed as key-value pairs inside curly braces. The keys are associated with their values using a colon (:). Hence, printing the dictionary shows `{‘john’: 40, ‘peter’: 45}`."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nd = {\"john\":40, \"peter\":45}\nprint(\"john\" in d)\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 0,
        "explanation": "The “in” operator checks if the specified key (“john”) exists in the dictionary d. Since “john” is a key, it returns True."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nd1 = {\"john\":40, \"peter\":45}\nd2 = {\"john\":466, \"peter\":45}\nprint(d1 == d2)\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 1,
        "explanation": "Two dictionaries are equal only if they have the same keys and corresponding values. Since d1 has “john”: 40 and d2 has “john”: 466, the dictionaries are not equal."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nd1 = {\"john\":40, \"peter\":45}\nd2 = {\"john\":466, \"peter\":45}\nprint(d1 > d2)\n```",
        "options": [
            "True",
            "False",
            "Error",
            "None"
        ],
        "correct": 2,
        "explanation": "Python does not support comparison operators like > between dictionaries. Trying to do d1 > d2 raises a TypeError."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nd = {\"john\":40, \"peter\":45}\nprint(d[\"john\"])\n```",
        "options": [
            "40",
            "45",
            "“john”",
            "“peter”"
        ],
        "correct": 0,
        "explanation": "Accessing a dictionary with a key like d[“john”] retrieves the value associated with that key. Since “john” maps to 40 in the dictionary, the output is 40."
    },
    {
        "category": "general",
        "question": "Suppose d = {“john”:40, “peter”:45}, to delete the entry for “john” what command do we use?",
        "options": [
            "d.delete(“john”:40)",
            "d.delete(“john”)",
            "del d[“john”]",
            "del d(“john”:40)"
        ],
        "correct": 2,
        "explanation": "To delete a key-value pair from a dictionary, you use the `del` statement followed by the dictionary and key inside square brackets. So, `del d[“john”]` removes the entry with key `”john”`."
    },
    {
        "category": "tuples_dicts",
        "question": "Suppose d = {“john”:40, “peter”:45}. To obtain the number of entries in dictionary which command do we use?",
        "options": [
            "d.size()",
            "len(d)",
            "size(d)",
            "d.len()"
        ],
        "correct": 1,
        "explanation": "The built-in `len()` function returns the number of key-value pairs in a dictionary. So, `len(d)` returns `2` for this dictionary."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nd = {\"john\":40, \"peter\":45}\nprint(list(d.keys()))\n```",
        "options": [
            "[“john”, “peter”]",
            "[“john”:40, “peter”:45]",
            "(“john”, “peter”)",
            "(“john”:40, “peter”:45)"
        ],
        "correct": 0,
        "explanation": "`d.keys()` returns a view object containing the keys of the dictionary. Using `list()` converts this view into a list of keys, so the output is `[“john”, “peter”]`."
    },
    {
        "category": "general",
        "question": "Suppose d = {“john”:40, “peter”:45}, what happens when we try to retrieve a value using the expression d[“susan”]?",
        "options": [
            "Since “susan” is not a value in the set, Python raises a KeyError exception",
            "It is executed fine and no exception is raised, and it returns None",
            "Since “susan” is not a key in the set, Python raises a KeyError exception",
            "Since “susan” is not a key in the set, Python raises a syntax error"
        ],
        "correct": 2,
        "explanation": "When you try to access a dictionary key that does not exist using d[“susan”], Python raises a KeyError because “susan” is not found in the dictionary keys."
    },
    {
        "category": "tuples_dicts",
        "question": "Which of these about a dictionary is false?",
        "options": [
            "The values of a dictionary can be accessed using keys",
            "The keys of a dictionary can be accessed using values",
            "Dictionaries aren’t ordered",
            "Dictionaries are mutable"
        ],
        "correct": 1,
        "explanation": "In Python, you can access values by using their keys (e.g., d[key]), but the reverse is not directly possible—you cannot access keys using values unless you explicitly search through the dictionary. This makes option “The keys of a dictionary can be accessed using values” false."
    },
    {
        "category": "tuples_dicts",
        "question": "Which of the following is not a declaration of the dictionary?",
        "options": [
            "{1: ‘A’, 2: ‘B’}",
            "dict([[1,”A”],[2,”B”]])",
            "{1,”A”,2”B”}",
            "{ }"
        ],
        "correct": 2,
        "explanation": "{1, “A”, 2, “B”} is not a valid dictionary declaration—it resembles a set with multiple elements, not key-value pairs. A dictionary must contain key-value pairs separated by colons. The other options are valid ways to define dictionaries."
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code snippet?\n\n```python\na={1:\"A\",2:\"B\",3:\"C\"}\nfor i,j in a.items():\n    print(i,j,end=\" \")\n```",
        "options": [
            "1 A 2 B 3 C",
            "1 2 3",
            "A B C",
            "1:”A” 2:”B” 3:”C”"
        ],
        "correct": 0,
        "explanation": "The items() method returns key-value pairs from the dictionary. The for loop unpacks each pair into i (key) and j (value), and prints them with a space between, all on the same line due to end=” “."
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code snippet?\n\n```python\na={1:\"A\",2:\"B\",3:\"C\"}\nprint(a.get(1,4))\n```",
        "options": [
            "1",
            "A",
            "4",
            "Invalid syntax for get method"
        ],
        "correct": 1,
        "explanation": "The get() method is used to retrieve the value for a given key. In a.get(1, 4), the key 1 exists in the dictionary, so it returns its value, which is “A”. The second argument 4 is ignored because the key is found."
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code snippet?\n\n```python\na={1:\"A\",2:\"B\",3:\"C\"}\nprint(a.get(5,4))\n```",
        "options": [
            "Error, invalid syntax",
            "A",
            "5",
            "4"
        ],
        "correct": 3,
        "explanation": "The get() method returns the value for the specified key if it exists; otherwise, it returns the default value provided. In this case, key 5 is not in the dictionary, so a.get(5, 4) returns the default value 4."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\na={1:\"A\",2:\"B\",3:\"C\"}\nprint(a.setdefault(3))\n```",
        "options": [
            "{1: ‘A’, 2: ‘B’, 3: ‘C’}",
            "C",
            "{1: 3, 2: 3, 3: 3}",
            "No method called setdefault() exists for dictionary"
        ],
        "correct": 1,
        "explanation": "The setdefault() method returns the value of the given key if it exists. If the key doesn’t exist, it adds the key with the specified default value. In this case, key 3 already exists in the dictionary with the value “C”, so a.setdefault(3) simply returns “C”."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\na={1:\"A\",2:\"B\",3:\"C\"}\na.setdefault(4,\"D\")\nprint(a)\n```",
        "options": [
            "{1: ‘A’, 2: ‘B’, 3: ‘C’, 4: ‘D’}",
            "None",
            "Error",
            "[1,3,6,10]"
        ],
        "correct": 0,
        "explanation": "The setdefault() method adds a key with a specified default value if the key is not already in the dictionary. Here, key 4 is not present in a, so a.setdefault(4, “D”) adds the key-value pair 4: “D” to the dictionary. The updated dictionary is {1: ‘A’, 2: ‘B’, 3: ‘C’, 4: ‘D’}."
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code?\n\n```python\na={1:\"A\",2:\"B\",3:\"C\"}\nb={4:\"D\",5:\"E\"}\na.update(b)\nprint(a)\n```",
        "options": [
            "{1: ‘A’, 2: ‘B’, 3: ‘C’}",
            "Method update() doesn’t exist for dictionaries",
            "{1: ‘A’, 2: ‘B’, 3: ‘C’, 4: ‘D’, 5: ‘E’}",
            "{4: ‘D’, 5: ‘E’}"
        ],
        "correct": 2,
        "explanation": "The update() method merges one dictionary into another by adding key-value pairs. Here, a.update(b) adds all items from dictionary b into a, resulting in: {1: ‘A’, 2: ‘B’, 3: ‘C’, 4: ‘D’, 5: ‘E’}."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na={1:\"A\",2:\"B\",3:\"C\"}\nb=a.copy()\nb[2]=\"D\"\nprint(a)\n```",
        "options": [
            "Error, copy() method doesn’t exist for dictionaries",
            "{1: ‘A’, 2: ‘B’, 3: ‘C’}",
            "{1: ‘A’, 2: ‘D’, 3: ‘C’}",
            "“None” is printed"
        ],
        "correct": 1,
        "explanation": "The copy() method creates a shallow copy of the dictionary. When b[2] is changed to “D”, it only affects the copy b and not the original dictionary a. So, printing a shows the original unchanged dictionary {1: ‘A’, 2: ‘B’, 3: ‘C’}."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na={1:\"A\",2:\"B\",3:\"C\"}\na.clear()\nprint(a)\n```",
        "options": [
            "None",
            "{ None:None, None:None, None:None}",
            "{1:None, 2:None, 3:None}",
            "{ }"
        ],
        "correct": 3,
        "explanation": "The clear() method empties the dictionary by removing all key-value pairs. After calling a.clear(), the dictionary a becomes empty, so printing it shows {}."
    },
    {
        "category": "tuples_dicts",
        "question": "Which of the following isn’t true about dictionary keys?",
        "options": [
            "More than one key isn’t allowed",
            "Keys must be immutable",
            "Keys must be integers",
            "When duplicate keys encountered, the last assignment wins"
        ],
        "correct": 2,
        "explanation": "Dictionary keys in Python must be immutable but can be of various types like strings, numbers, or tuples — they do not have to be integers specifically. So, saying “Keys must be integers” is false. The other statements are true: duplicate keys overwrite previous values, keys must be immutable, and keys must be unique."
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code?\n\n```python\na={1:5,2:3,3:4}\nprint(a.pop(4,9))\n```",
        "options": [
            "9",
            "3",
            "Too many arguments for pop() method",
            "4"
        ],
        "correct": 0,
        "explanation": "The pop() method removes the specified key and returns its value. If the key doesn’t exist, it returns the default value provided as the second argument. Here, key 4 is not in the dictionary, so a.pop(4, 9) returns 9."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na={1:\"A\",2:\"B\",3:\"C\"}\nfor i in a:\n    print(i,end=\" \")\n```",
        "options": [
            "1 2 3",
            "‘A’ ‘B’ ‘C’",
            "1 ‘A’ 2 ‘B’ 3 ‘C’",
            "Error, it should be: for i in a.items():"
        ],
        "correct": 0,
        "explanation": "When you iterate over a dictionary using `for i in a`, it iterates over the **keys** by default. So the output is the keys: `1 2 3`."
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code?\n\n```python\na={1:\"A\",2:\"B\",3:\"C\"}\nprint(a.items())\n```",
        "options": [
            "Syntax error",
            "dict_items([(‘A’), (‘B’), (‘C’)])",
            "dict_items([(1,2,3)])",
            "dict_items([(1, ‘A’), (2, ‘B’), (3, ‘C’)])"
        ],
        "correct": 3,
        "explanation": "The `a.items()` method returns a view object containing the dictionary’s key-value pairs as tuples. So the output is `dict_items([(1, ‘A’), (2, ‘B’), (3, ‘C’)])`."
    },
    {
        "category": "tuples_dicts",
        "question": "Which of the statements about dictionary values if false?",
        "options": [
            "More than one key can have the same value",
            "The values of the dictionary can be accessed as dict[key]",
            "Values of a dictionary must be unique",
            "Values of a dictionary can be a mixture of letters and numbers"
        ],
        "correct": 2,
        "explanation": "Dictionary values do not have to be unique — multiple keys can have the same value. Only keys must be unique. So, the statement “Values of a dictionary must be unique” is false."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\na = {1: \"A\", 2: \"B\", 3: \"C\"}\ndel a\nprint(a)\n```",
        "options": [
            "method del doesn’t exist for the dictionary",
            "del deletes the values in the dictionary",
            "del deletes the entire dictionary",
            "del deletes the keys in the dictionary"
        ],
        "correct": 2,
        "explanation": "The del statement deletes the entire dictionary object from memory. After del a, the variable a no longer exists. Attempting to access it afterward would raise a NameError."
    },
    {
        "category": "tuples_dicts",
        "question": "If a is a dictionary with some key-value pairs, what does a.popitem() do?",
        "options": [
            "Removes an arbitrary element",
            "Removes all the key-value pairs",
            "Removes the key-value pair for the key given as an argument",
            "Invalid method for dictionary"
        ],
        "correct": 0,
        "explanation": "The a.popitem() method removes and returns an arbitrary key-value pair from the dictionary. In Python 3.7 and later, it removes the last inserted item due to insertion-order preservation."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\ntotal={}\ndef insert(items):\n    if items in total:\n        total[items] += 1\n    else:\n        total[items] = 1\ninsert('Apple')\ninsert('Ball')\ninsert('Apple')\nprint (len(total))\n```",
        "options": [
            "3",
            "1",
            "2",
            "0"
        ],
        "correct": 2,
        "explanation": "The insert() function keeps track of how many times an item is inserted using a dictionary named total.\n‘Apple’ is inserted first → total = {‘Apple’: 1}\n‘Ball’ is inserted → total = {‘Apple’: 1, ‘Ball’: 1}\n‘Apple’ is inserted again → count updated → total = {‘Apple’: 2, ‘Ball’: 1}\nThe length of the dictionary (len(total)) is 2, since there are two unique keys: ‘Apple’ and ‘Ball’."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\na = {}\na[1] = 1\na['1'] = 2\na[1]=a[1]+1\ncount = 0\nfor i in a:\n    count += a[i]\nprint(count)\n```",
        "options": [
            "1",
            "2",
            "4",
            "Error, the keys can’t be a mixture of letters and numbers"
        ],
        "correct": 2,
        "explanation": "In the given code, a dictionary is created with both an integer key 1 and a string key ‘1’, which are treated as separate keys in Python. The values for both keys are updated and then summed using a loop. The final output is 4, since both keys have the value 2."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nnumbers = {}\nletters = {}\ncomb = {}\nnumbers[1] = 56\nnumbers[3] = 7\nletters[4] = 'B'\ncomb['Numbers'] = numbers\ncomb['Letters'] = letters\nprint(comb)\n```",
        "options": [
            "Error, dictionary in a dictionary can’t exist",
            "‘Numbers’: {1: 56, 3: 7}",
            "{‘Numbers’: {1: 56}, ‘Letters’: {4: ‘B’}}",
            "{‘Numbers’: {1: 56, 3: 7}, ‘Letters’: {4: ‘B’}}"
        ],
        "correct": 3,
        "explanation": "In this code, two dictionaries numbers and letters are created and then assigned as values to keys ‘Numbers’ and ‘Letters’ in another dictionary comb. Python supports nested dictionaries, so the output will be: {‘Numbers’: {1: 56, 3: 7}, ‘Letters’: {4: ‘B’}}."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\ntest = {1:'A', 2:'B', 3:'C'}\ntest = {}\nprint(len(test))\n```",
        "options": [
            "0",
            "None",
            "3",
            "An exception is thrown"
        ],
        "correct": 0,
        "explanation": "The dictionary test is first initialized with three key-value pairs but is then reassigned to an empty dictionary using test = {}. So, len(test) returns 0."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code snippet?\n\n```python\ntest = {1:'A', 2:'B', 3:'C'}\ndel test[1]\ntest[1] = 'D'\ndel test[2]\nprint(len(test))\n```",
        "options": [
            "0",
            "2",
            "Error as the key-value pair of 1:’A’ is already deleted",
            "1"
        ],
        "correct": 1,
        "explanation": "The dictionary starts with 3 items. Key 1 is deleted and then re-added with a new value. Key 2 is deleted, leaving only two keys: 1 and 3. So, len(test) returns 2."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\na = {}\na[1] = 1\na['1'] = 2\na[1.0]=4\ncount = 0\nfor i in a:\n    count += a[i]\nprint(count)\n```",
        "options": [
            "An exception is thrown",
            "3",
            "6",
            "2"
        ],
        "correct": 2,
        "explanation": "In Python, 1 (int) and 1.0 (float) are considered the same dictionary key. So when a[1.0] = 4 is assigned, it overwrites a[1] = 1. The dictionary becomes: {1: 4, ‘1’: 2}\nThe loop adds 4 + 2, so the final output is 6."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\na={}\na['a']=1\na['b']=[2,3,4]\nprint(a)\n```",
        "options": [
            "Exception is thrown",
            "{‘b’: [2], ‘a’: 1}",
            "{‘b’: [2], ‘a’: [3]}",
            "{‘b’: [2, 3, 4], ‘a’: 1}"
        ],
        "correct": 3,
        "explanation": "The dictionary a is assigned two key-value pairs: ‘a’ maps to 1 and ‘b’ maps to the list [2, 3, 4]. Printing a outputs the dictionary with both these entries exactly as assigned, so the output is {‘b’: [2, 3, 4], ‘a’: 1}."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nimport collections\na=collections.Counter([1,1,2,3,3,4,4,4])\nprint(a)\n```",
        "options": [
            "{1,2,3,4}",
            "Counter({4, 1, 3, 2})",
            "Counter({4: 3, 1: 2, 3: 2, 2: 1})",
            "{4: 3, 1: 2, 3: 2, 2: 1}"
        ],
        "correct": 2,
        "explanation": "The code uses collections.Counter to count the occurrences of each element in the list [1,1,2,3,3,4,4,4]. It returns a Counter object showing how many times each number appears: 4 appears 3 times, 1 and 3 appear twice each, and 2 appears once. Therefore, the output is Counter({4: 3, 1: 2, 3: 2, 2: 1})."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nimport collections\nb=collections.Counter([2,2,3,4,4,4])\nprint(b.most_common(1))\n```",
        "options": [
            "Counter({4: 3, 2: 2, 3: 1})",
            "{3:1}",
            "{4:3}",
            "[(4, 3)]"
        ],
        "correct": 3,
        "explanation": "The code uses collections.Counter to count the occurrences of each element in the list [2,2,3,4,4,4]. The most_common(1) method returns a list with the single most common element and its count as a tuple. Since 4 appears 3 times (the most), the output is [(4, 3)]."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nimport collections\nb=collections.Counter([2,2,3,4,4,4])\nprint(b.most_common(0))\n```",
        "options": [
            "Counter({4: 3, 2: 2, 3: 1})",
            "{3:1}",
            "{4:3}",
            "[]"
        ],
        "correct": 3,
        "explanation": "The most_common(0) method returns an empty list because it asks for zero most common elements. So, the output is []."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nimport collections\na=collections.Counter([2,2,3,3,3,4])\nb=collections.Counter([2,2,3,4,4])\nprint(a|b)\n```",
        "options": [
            "Counter({3: 3, 2: 2, 4: 2})",
            "Counter({2: 2, 3: 1, 4: 1})",
            "Counter({3: 2})",
            "Counter({4: 1})"
        ],
        "correct": 0,
        "explanation": "The | operator on Counter objects returns the element-wise maximum of counts from both counters. For each key, it takes the higher count between the two counters.\nFor 2, counts are 2 in both a and b, so max is 2.\nFor 3, counts are 3 in a and 1 in b, so max is 3.\nFor 4, counts are 1 in a and 2 in b, so max is 2.\nHence, the result is Counter({3: 3, 2: 2, 4: 2})."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code snippet?\n\n```python\nimport collections\na=collections.Counter([3,3,4,5])\nb=collections.Counter([3,4,4,5,5,5])\nprint(a&b)\n```",
        "options": [
            "Counter({3: 12, 4: 1, 5: 1})",
            "Counter({3: 1, 4: 1, 5: 1})",
            "Counter({4: 2})",
            "Counter({5: 1})"
        ],
        "correct": 1,
        "explanation": "The & operator on Counter objects returns the intersection, which is the minimum count for each element present in both counters.\nFor 3, counts are 2 in a and 1 in b, so min is 1.\nFor 4, counts are 1 in a and 2 in b, so min is 1.\nFor 5, counts are 1 in a and 3 in b, so min is 1.\nSo the result is Counter({3: 1, 4: 1, 5: 1})."
    },
    {
        "category": "tuples_dicts",
        "question": "The following Python code is invalid.\n\n```python\nclass demo(dict):\n  def __test__(self,key):\n    return []\na = demo()\na['test'] = 7\nprint(a)\n```",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "The code runs successfully and prints {‘test’: 7}, so it is valid Python code. It defines a class inheriting from dict, adds an unused method __test__, sets a key ‘test’, and prints the dictionary. There is no syntax or runtime error. Therefore, the code is not invalid, and the correct answer is False."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\ncount={}\ncount[(1,2,4)] = 5\ncount[(4,2,1)] = 7\ncount[(1,2)] = 6\ncount[(4,2,1)] = 2\ntot = 0\nfor i in count:\n    tot=tot+count[i]\nprint(len(count)+tot)\n```",
        "options": [
            "25",
            "17",
            "16",
            "Tuples can’t be made keys of a dictionary"
        ],
        "correct": 2,
        "explanation": "The dictionary uses tuples as keys, which is valid since tuples are immutable. The key (4,2,1) is assigned twice, so the second value (2) overwrites the first (7). The final dictionary has 3 keys, and the sum of the values is 5 + 2 + 6 = 13. Thus, the output is 3 + 13 = 16, so the correct answer is 16."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na={}\na[2]=1\na[1]=[2,3,4]\nprint(a[1][1])\n```",
        "options": [
            "[2,3,4]",
            "3",
            "2",
            "An exception is thrown"
        ],
        "correct": 1,
        "explanation": "The dictionary a stores an integer under key 2 and a list under key 1. The expression a[1][1] first retrieves the list [2, 3, 4], then accesses its second element, which is 3. Hence, the output is 3."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\na={'B':5,'A':9,'C':7}\nprint(sorted(a))\n```",
        "options": [
            "[‘A’, ’B’, ’C’]",
            "[‘B’, ’C’, ’A’]",
            "[5, 7, 9]",
            "[9, 5, 7]"
        ],
        "correct": 0,
        "explanation": "The sorted() function sorts the dictionary keys in ascending (alphabetical) order. Since the keys are ‘B’, ‘A’, and ‘C’, sorting them gives [‘A’, ‘B’, ‘C’]."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\na={i: i*i for i in range(6)}\nprint(a)\n```",
        "options": [
            "Dictionary comprehension doesn’t exist",
            "{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6:36}",
            "{0: 0, 1: 1, 4: 4, 9: 9, 16: 16, 25: 25}",
            "{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}"
        ],
        "correct": 3,
        "explanation": "This is a dictionary comprehension that generates a dictionary where each key i is mapped to its square i*i for i in range(6), i.e., 0 to 5. So the output is: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}"
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na={}\nprint(a.fromkeys([1,2,3],\"check\"))\n```",
        "options": [
            "Syntax error",
            "{1: ‘check’, 2: ‘check’, 3: ‘check’}",
            "“check”",
            "{1:None,2:None,3:None}"
        ],
        "correct": 1,
        "explanation": "The fromkeys() method creates a new dictionary with the specified keys and assigns each key the same value. Here, keys [1, 2, 3] are all given the value “check”. So the output is {1: ‘check’, 2: ‘check’, 3: ‘check’}."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nb={}\nprint(all(b))\n```",
        "options": [
            "{ }",
            "False",
            "True",
            "An exception is thrown"
        ],
        "correct": 2,
        "explanation": "The all() function returns True when called on an empty iterable, as there are no false elements to contradict it. Since b is an empty dictionary, all(b) returns True. Hence, the output is True."
    },
    {
        "category": "tuples_dicts",
        "question": "If b is a dictionary, what does any(b) do?",
        "options": [
            "Returns True if any key of the dictionary is true",
            "Returns False if any key of the dictionary is false",
            "Returns True if all keys of the dictionary are true",
            "Method any() doesn’t exist for dictionary"
        ],
        "correct": 0,
        "explanation": "The any() function returns True if any element of the iterable is True. When used on a dictionary, it checks the keys (not the values). So any(b) returns True if at least one key is truthy (e.g., not 0, not False, not empty string).\nExample:\n\nb = {0: 'x', 1: 'y'}\nany(b) → True  (because key 1 is truthy)"
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code?\n\n```python\na={\"a\":1,\"b\":2,\"c\":3}\nb=dict(zip(a.values(),a.keys()))\nprint(b)\n```",
        "options": [
            "{‘a’: 1, ‘b’: 2, ‘c’: 3}",
            "An exception is thrown",
            "{‘a’: ‘b’: ‘c’: }",
            "{1: ‘a’, 2: ‘b’, 3: ‘c’}"
        ],
        "correct": 3,
        "explanation": "The zip(a.values(), a.keys()) pairs each value with its corresponding key, effectively reversing the dictionary’s key-value order. Using dict() on this zipped object creates a new dictionary with values as keys and keys as values. So, the output is {1: ‘a’, 2: ‘b’, 3: ‘c’}."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\na={i: 'A' + str(i) for i in range(5)}\nprint(a)\n```",
        "options": [
            "An exception is thrown",
            "{0: ‘A0’, 1: ‘A1’, 2: ‘A2’, 3: ‘A3’, 4: ‘A4’}",
            "{0: ‘A’, 1: ‘A’, 2: ‘A’, 3: ‘A’, 4: ‘A’}",
            "{0: ‘0’, 1: ‘1’, 2: ‘2’, 3: ‘3’, 4: ‘4’}"
        ],
        "correct": 1,
        "explanation": "The dictionary comprehension creates keys from 0 to 4 and assigns each key a value formed by concatenating ‘A’ with the string of the key. This results in {0: ‘A0’, 1: ‘A1’, 2: ‘A2’, 3: ‘A3’, 4: ‘A4’}."
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code?\n\n```python\na=dict()\nprint(a[1])\n```",
        "options": [
            "An exception is thrown since the dictionary is empty",
            "‘ ‘",
            "1",
            "0"
        ],
        "correct": 0,
        "explanation": "The dictionary a is empty and does not contain the key 1. Attempting to access a non-existent key using square brackets (a[1]) raises a KeyError in Python. To avoid this, the get() method can be used instead, which returns None or a default value if the key is missing."
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code?\n\n```python\nimport collections\na=dict()\na=collections.defaultdict(int)\nprint(a[1])\n```",
        "options": [
            "1",
            "0",
            "An exception is thrown",
            "‘ ‘"
        ],
        "correct": 1,
        "explanation": "The code uses collections.defaultdict with int as the default factory function. When a[1] is accessed and the key 1 doesn’t exist, defaultdict automatically creates it with a default value of int(), which is 0. So the output is 0, and no exception is raised."
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code?\n\n```python\nimport collections\na=dict()\na=collections.defaultdict(str)\nprint(a['A'])\n```",
        "options": [
            "An exception is thrown since the dictionary is empty",
            "‘ ‘",
            "‘A’",
            "0"
        ],
        "correct": 1,
        "explanation": "The collections.defaultdict(str) creates a dictionary that returns a default value when a missing key is accessed. Since the default factory is str, which returns an empty string (”), accessing a missing key like ‘A’ doesn’t raise an error—it simply returns ”. Therefore, the output is an empty string."
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code?\n\n```python\nimport collections\nb=dict()\nb=collections.defaultdict(lambda: 7)\nprint(b[4])\n```",
        "options": [
            "4",
            "0",
            "An exception is thrown",
            "7"
        ],
        "correct": 3,
        "explanation": "The defaultdict is initialized with a lambda function that returns 7. When the key 4 is accessed and not found, the lambda function is called to provide a default value. So, b[4] returns 7 without raising an error."
    },
    {
        "category": "tuples_dicts",
        "question": "What will be the output of the following Python code?\n\n```python\nimport collections\na=collections.OrderedDict((str(x),x) for x in range(3))\nprint(a)\n```",
        "options": [
            "{‘2’:2, ‘0’:0, ‘1’:1}",
            "OrderedDict([(‘0’, 0), (‘1’, 1), (‘2’, 2)])",
            "An exception is thrown",
            "‘ ‘"
        ],
        "correct": 1,
        "explanation": "The OrderedDict stores items in the order they are added. The expression creates key-value pairs from 0 to 2 with keys as strings. So, the output maintains insertion order and prints: OrderedDict([(‘0’, 0), (‘1’, 1), (‘2’, 2)])."
    },
    {
        "category": "functions",
        "question": "Which of the following functions is a built-in function in python?",
        "options": [
            "seed()",
            "sqrt()",
            "factorial()",
            "print()"
        ],
        "correct": 3,
        "explanation": "The function seed is a function which is present in the random module. The functions sqrt and factorial are a part of the math module. The print function is a built-in function which prints a value directly to the system output."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python expression?\n\n```python\nprint(round(4.576))\n```",
        "options": [
            "4.5",
            "5",
            "4",
            "4.6"
        ],
        "correct": 1,
        "explanation": "The round() function rounds the number to the nearest integer by default. Since 4.576 is closer to 5 than 4, round(4.576) returns 5. Therefore, the output is 5."
    },
    {
        "category": "functions",
        "question": "The function pow(x,y,z) is evaluated as:",
        "options": [
            "(x**y)**z",
            "(x**y) / z",
            "(x**y) % z",
            "(x**y)*z"
        ],
        "correct": 2,
        "explanation": "The built-in pow() function with three arguments computes (x ** y) % z. With two arguments, it simply calculates x ** y. So, for three arguments, the result is the modular exponentiation (x**y) % z. Therefore, the correct answer is (x**y) % z."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python function?\n\n```python\nprint(all([2,4,0,6]))\n```",
        "options": [
            "Error",
            "True",
            "False",
            "0"
        ],
        "correct": 2,
        "explanation": "The all() function returns True only if all elements in the iterable are truthy. In the list [2, 4, 0, 6], the value 0 is considered falsy in Python. Since not all elements are truthy, all() returns False."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python expression?\n\n```python\nprint(round(4.5676,2))\n```",
        "options": [
            "4.5",
            "4.6",
            "4.57",
            "4.56"
        ],
        "correct": 2,
        "explanation": "The round() function rounds a number to the specified number of decimal places. In round(4.5676, 2), the number is rounded to two decimal places, resulting in 4.57. So, the correct output is 4.57."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python function?\n\n```python\nprint(any([2>8, 4>2, 1>2]))\n```",
        "options": [
            "Error",
            "True",
            "False",
            "4>2"
        ],
        "correct": 1,
        "explanation": "The any() function returns True if at least one element in the iterable is truthy. In the list [2>8, 4>2, 1>2], only 4>2 is True, while the others are False. Since there’s at least one True value, any() returns True."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python function?\n\n```python\nimport math\nabs(math.sqrt(25))\n```",
        "options": [
            "Error",
            "-5",
            "5",
            "5.0"
        ],
        "correct": 3,
        "explanation": "The expression math.sqrt(25) returns 5.0, the square root of 25 as a float. The abs() function returns the absolute value, which doesn’t change anything here since 5.0 is already positive. So the final output is 5.0."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python function?\n\n```python\nprint(sum([1,2,3]))\nprint(sum(2,4,6))\n```",
        "options": [
            "6, Error",
            "12, Error",
            "12, 6",
            "Error, Error"
        ],
        "correct": 0,
        "explanation": "The first sum() call works correctly because it sums the elements of the list [1, 2, 3] resulting in 6. The second call causes an error because sum() expects an iterable as the first argument, but 2 is an integer, not an iterable, and the function doesn’t accept three separate positional arguments. This leads to a TypeError."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python function?\n\n```python\nprint(all(3,0,4.2))\n```",
        "options": [
            "True",
            "False",
            "Error",
            "0"
        ],
        "correct": 2,
        "explanation": "The all() function expects a single iterable (like a list or tuple), not multiple separate arguments. Calling all(3, 0, 4.2) raises a TypeError because you’re passing multiple non-iterable arguments."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python function?\n\n```python\nprint(min(max(False,-3,-4), 2,7))\n```",
        "options": [
            "2",
            "False",
            "-3",
            "-4"
        ],
        "correct": 1,
        "explanation": "The max(False, -3, -4) evaluates to 0 because False is treated as 0, and 0 is greater than -3 and -4. Then, min(0, 2, 7) returns 0. Since 0 is equivalent to False, the output is False."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python functions?\n\n```python\nprint(chr(97))\nprint(chr(‘97’))\n```",
        "options": [
            "/ a / Error /",
            "/ ‘a’ / a",
            "- [D] / Error / Error"
        ],
        "correct": 0,
        "explanation": "The chr() function expects an integer representing a Unicode code point. chr(97) correctly returns ‘a’ since 97 is the Unicode code for ‘a’. However, chr(’97’) raises a TypeError because the argument ’97’ is a string, not an integer."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python function?\n\n```python\nprint(complex(1+2j))\n```",
        "options": [
            "Error",
            "1",
            "2j",
            "1+2j"
        ],
        "correct": 3,
        "explanation": "The complex() function converts the argument into a complex number. Since 1+2j is already a complex number, complex(1+2j) simply returns 1+2j without any changes."
    },
    {
        "category": "functions",
        "question": "What is the output of the function complex()?",
        "options": [
            "0j",
            "0+0j",
            "0",
            "Error"
        ],
        "correct": 0,
        "explanation": "When called without any arguments, the complex() function returns a complex number with both real and imaginary parts as zero, which is represented as 0j in Python. Note that 0j is the canonical way Python shows a zero-valued complex number with an imaginary part."
    },
    {
        "category": "functions",
        "question": "The function divmod(a,b), where both ‘a’ and ‘b’ are integers is evaluated as:",
        "options": [
            "(a%b, a//b)",
            "(a//b, a%b)",
            "(a//b, a*b)",
            "(a/b, a%b)"
        ],
        "correct": 1,
        "explanation": "The divmod(a, b) function returns a tuple containing the quotient and the remainder when a is divided by b. Specifically, it evaluates as (a // b, a % b). The first element is integer division, and the second is the modulus."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python function?\n\n```python\nprint(divmod(10.5,5))\nprint(divmod(2.4,1.2))\n```",
        "options": [
            "/ (2.00, 0.50) / (2.00, 0.00)",
            "/ (2, 0.5) / (2, 0)",
            "/ (2.0, 0.5) / (2.0, 0.0)",
            "/ (2, 0.5) / (2)"
        ],
        "correct": 2,
        "explanation": "When divmod() is used with float arguments, it returns a tuple of two floats: the quotient (using floor division) and the remainder. For divmod(10.5, 5), 10.5 // 5 is 2.0, and the remainder is 0.5. Similarly, divmod(2.4, 1.2) gives 2.0 and 0.0. Therefore, the output is (2.0, 0.5) and (2.0, 0.0)."
    },
    {
        "category": "functions",
        "question": "The function complex(‘2-3j’) is valid but the function complex(‘2 – 3j’) is invalid.",
        "options": [
            "True",
            "False"
        ],
        "correct": 0,
        "explanation": "The function complex(‘2-3j’) is valid because the string is in the correct format for Python to interpret as a complex number. However, complex(‘2 – 3j’) is invalid due to the presence of an en dash (–, Unicode U+2013) instead of a regular minus sign (-, ASCII 0x2D). Python does not recognize the en dash as a valid operator in numeric expressions, leading to a ValueError."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python function?\n\n```python\nprint(list(enumerate([2, 3])))\n```",
        "options": [
            "Error",
            "[(1, 2), (2, 3)]",
            "[(0, 2), (1, 3)]",
            "[(2, 3)]"
        ],
        "correct": 2,
        "explanation": "The enumerate() function in Python adds a counter to an iterable and returns it as an enumerate object. When converted to a list, each item is a tuple of the form (index, value). So, list(enumerate([2, 3])) results in [(0, 2), (1, 3)], where 0 and 1 are the indices of the elements 2 and 3 respectively."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python functions?\n\n```python\nx=3\nprint(eval('x^2'))\n```",
        "options": [
            "Error",
            "1",
            "9",
            "6"
        ],
        "correct": 1,
        "explanation": "The expression eval(‘x^2’) evaluates the string ‘x^2’ as Python code. In Python, the ^ operator is a bitwise XOR, not exponentiation.\nGiven x = 3, the expression 3 ^ 2 (i.e., 3 XOR 2 in binary) equals 1, because:\n\n3 in binary is 011\n2 in binary is 010\nXOR of 011 and 010 is 001, which is 1 in decimal. Hence, the output is 1."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python functions?\n\n```python\nprint(float('1e-003'))\nprint(float('2e+003'))\n```",
        "options": [
            "/ 3.00 / 300",
            "/ 0.001 / 2000.0",
            "/ 0.001 / 200",
            "/ Error / 2003"
        ],
        "correct": 1,
        "explanation": "The float() function in Python can parse strings representing numbers in scientific notation.\n‘1e-003’ means 1×10−3 = 0.001.\n‘2e+003’ means 2×103 = 2000.0\nSo the output will be:"
    },
    {
        "category": "functions",
        "question": "Which of the following functions does not necessarily accept only iterables as arguments?",
        "options": [
            "enumerate()",
            "all()",
            "chr()",
            "max()"
        ],
        "correct": 2,
        "explanation": "The chr() function takes a single integer (representing a Unicode code point) as its argument, not an iterable. In contrast, enumerate(), all(), and max() typically operate on iterables like lists, tuples, or strings. Therefore, chr() is the one that does not necessarily accept an iterable as an argument."
    },
    {
        "category": "functions",
        "question": "Which of the following functions accepts only integers as arguments?",
        "options": [
            "ord()",
            "min()",
            "chr()",
            "any()"
        ],
        "correct": 2,
        "explanation": "The chr() function accepts only integers as arguments and returns the corresponding Unicode character. For example, chr(97) returns ‘a’. In contrast, ord() takes a string of a single Unicode character, min() works with iterables, and any() also takes an iterable."
    },
    {
        "category": "lists",
        "question": "Suppose there is a list such that: l=[2,3,4]. If we want to print this list in reverse order, which of the following methods should be used?",
        "options": [
            "reverse(l)",
            "list(reverse[(l)])",
            "reversed(l)",
            "list(reversed(l))"
        ],
        "correct": 3,
        "explanation": "The correct way to reverse and print a list in Python is to use list(reversed(l)). The reversed() function returns an iterator that yields the elements of the list in reverse order. Wrapping it with list() converts the iterator into a list. So, for l = [2, 3, 4], list(reversed(l)) will output [4, 3, 2]."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python function?\n\n```python\nprint(float('   -12345\\n'))\n(Note that the number of blank spaces before the number is 5)\n```",
        "options": [
            "-12345.0 (5 blank spaces before the number)",
            "-12345.0",
            "Error",
            "-12345.000000000…. (infinite decimal places)"
        ],
        "correct": 1,
        "explanation": "The float() function in Python automatically strips leading and trailing whitespace (including spaces and newline characters) from the input string before converting it to a floating-point number. So, float(‘ -12345\\n’) correctly returns -12345.0 without raising an error or preserving whitespace."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python function?\n\n```python\nprint(ord(‘A’))\nprint(ord(65))\n```",
        "options": [
            "/ A / 65 /",
            "/ 65 / Error",
            "/ A / Error",
            "/ Error / Error"
        ],
        "correct": 1,
        "explanation": "Here,\nord(‘A’) returns the ASCII (Unicode) integer value of the character ‘A’, which is 65.\nord(65) will cause a TypeError because ord() expects a single character string, not an integer.\nSo the output will be:\n\n65\nError"
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python function?\n\n```python\nprint(float('-infinity'))\nprint(float('inf'))\n```",
        "options": [
            "/ –inf / inf",
            "/ –infinity / inf",
            "/ Error / Error",
            "/ Error / Junk value"
        ],
        "correct": 0,
        "explanation": "The float() function in Python can convert special string representations of floating-point numbers such as ‘inf’ for positive infinity and ‘-infinity’ (or ‘-inf’) for negative infinity. Thus, float(‘-infinity’) returns negative infinity (-inf) and float(‘inf’) returns positive infinity (inf)."
    },
    {
        "category": "control",
        "question": "Which of the following functions will not result in an error when no arguments are passed to it?",
        "options": [
            "min()",
            "divmod()",
            "all()",
            "float()"
        ],
        "correct": 3,
        "explanation": "The built-in functions min(), max(), divmod(), ord(), any(), all() etc throw an error when no arguments are passed to them. However there are some built-in functions like float(), complex() etc which do not throw an error when no arguments are passed to them. The output of float() is 0.0."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python function?\n\n```python\nprint(hex(15))\n```",
        "options": [
            "f",
            "0xF",
            "0Xf",
            "0xf"
        ],
        "correct": 3,
        "explanation": "The hex() function converts an integer to its hexadecimal string representation using lowercase letters and includes the 0x prefix. So, hex(15) returns ‘0xf’."
    },
    {
        "category": "functions",
        "question": "Which of the following functions does not throw an error?",
        "options": [
            "ord()",
            "ord(‘ ‘)",
            "ord(”)",
            "ord(“”)"
        ],
        "correct": 1,
        "explanation": "The ord() function in Python returns the Unicode code point for a given single character. When you pass a blank space ‘ ‘ to ord(), it returns 32, which is the ASCII value for a space character, so it does not throw an error. However, calling ord() without any argument or passing an empty string “” causes an error because ord() requires exactly one character as input. Therefore, only ord(‘ ‘) among the given options does not raise an error."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python function?\n\n```python\nprint(len([\"hello\",2, 4, 6]))\n```",
        "options": [
            "4",
            "3",
            "Error",
            "6"
        ],
        "correct": 0,
        "explanation": "The len() function returns the number of elements in the list, regardless of their types. In this case, the list [“hello”, 2, 4, 6] contains four elements, so len() returns 4."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python function?\n\n```python\nprint(oct(7))\nprint(oct('7'))\n```",
        "options": [
            "/ Error / 07",
            "/ 0o7 / 7",
            "/ 0o7 / Error",
            "/ 07 / 0o7"
        ],
        "correct": 2,
        "explanation": "The oct() function in Python converts an integer into its octal string representation. When you pass the integer 7 to oct(7), it returns the string ‘0o7’, which is the octal equivalent of the decimal number 7. However, if you try to pass a string like ‘7’ to the oct() function, it will result in a TypeError because oct() only accepts integers as valid input. Thus, the first call outputs 0o7, while the second call raises an error."
    },
    {
        "category": "functions",
        "question": "Which of the following is the use of function in python?",
        "options": [
            "Functions are reusable pieces of programs",
            "Functions don’t provide better modularity for your application",
            "you can’t also create your own functions",
            "All of the mentioned"
        ],
        "correct": 0,
        "explanation": "Functions in Python are reusable blocks of code that perform a specific task. They improve modularity, make code easier to read and maintain, and help avoid repetition. You can also define your own functions using the def keyword."
    },
    {
        "category": "functions",
        "question": "Which keyword is used for function?",
        "options": [
            "Fun",
            "Define",
            "def",
            "Function"
        ],
        "correct": 2,
        "explanation": "The def keyword is used in Python to define a function. It is followed by the function name and parentheses that may include parameters. For example: def my_function():."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef sayHello():\n    print('Hello World!') \nsayHello() \nsayHello()\n```",
        "options": [
            "/ 'Hello World!' / 'Hello World!'",
            "/ Hello / Hello /",
            "None of the mentioned"
        ],
        "correct": 0,
        "explanation": "The function sayHello() prints “Hello World!” each time it’s called. Since it is called twice, the output is printed twice on separate lines. Functions help avoid code repetition."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ndef printMax(a, b):\n    if a > b:\n        print(a, 'is maximum')\n    elif a == b:\n        print(a, 'is equal to', b)\n    else:\n        print(b, 'is maximum')\nprintMax(3, 4)\n```",
        "options": [
            "3",
            "4",
            "4 is maximum",
            "None of the mentioned"
        ],
        "correct": 2,
        "explanation": "The function printMax(a, b) compares two numbers and prints which one is greater or if they are equal. In the call printMax(3, 4), since 4 is greater than 3, the else block is executed and it prints 4 is maximum."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nx = 50\ndef func(x):\n    print('x is', x)\n    x = 2\n    print('Changed local x to', x)\nfunc(x)\nprint('x is now', x)\n```",
        "options": [
            "/ x is 50 / Changed local x to 2 / x is now 50",
            "/ x is 50 / Changed local x to 2 / x is now 2",
            "/ x is 50 / Changed local x to 2 / x is now 100",
            "None of the mentioned"
        ],
        "correct": 0,
        "explanation": "The function func(x) takes a parameter x and prints its value. Inside the function, the value of x is reassigned to 2, which is a local change and does not affect the global variable x. So, when func(x) is called, it prints x is 50 followed by Changed local x to 2. Outside the function, the global x is still 50, so print(‘x is now’, x) outputs x is now 50."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nx = 50\ndef func():\n    global x\n    print('x is', x)\n    x = 2\n    print('Changed global x to', x)\nfunc()\nprint('Value of x is', x)\n```",
        "options": [
            "/ x is 50 / Changed global x to 2 / Value of x is 50",
            "/ x is 50 / Changed global x to 2 / Value of x is 2",
            "/ x is 50 / Changed global x to 50 / Value of x is 50",
            "None of the mentioned"
        ],
        "correct": 1,
        "explanation": "The global keyword is used to indicate that x inside the function refers to the global variable. So, when x = 2 is executed inside func(), it modifies the global x. Hence, after calling the function, the global variable x becomes 2."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef say(message, times = 1):\n    print(message * times)\nsay('Hello')\nsay('World', 5)\n```",
        "options": [
            "/ Hello / WorldWorldWorldWorldWorld",
            "/ Hello / World 5",
            "/ Hello / World,World,World,World,World",
            "/ Hello / HelloHelloHelloHelloHello"
        ],
        "correct": 0,
        "explanation": "The function say() takes two parameters: message & times, with times defaulting to 1.\nsay(‘Hello’) prints “Hello” once because times defaults to 1.\nsay(‘World’, 5) prints “World” five times, concatenated together (i.e., WorldWorldWorldWorldWorld).\nThis demonstrates Python’s default arguments feature, allowing functions to have optional parameters."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef func(a, b=5, c=10):\n    print('a is', a, 'and b is', b, 'and c is', c)\n \nfunc(3, 7)\nfunc(25, c = 24)\nfunc(c = 50, a = 100)\n```",
        "options": [
            "/ a is 7 and b is 3 and c is 10 / a is 25 and b is 5 and c is 24 / a is 5 and b is 100 and c is 50",
            "/ a is 3 and b is 7 and c is 10 / a is 5 and b is 25 and c is 24 / a is 50 and b is 100 and c is 5",
            "/ a is 3 and b is 7 and c is 10 / a is 25 and b is 5 and c is 24 / a is 100 and b is 5 and c is 50",
            "None of the mentioned"
        ],
        "correct": 2,
        "explanation": "Here,\nfunc(3, 7) assigns a=3, b=7, and uses default c=10.\nfunc(25, c=24) assigns a=25 (positional), c=24 (keyword), and default b=5.\nfunc(c=50, a=100) uses keyword arguments, so a=100, c=50, and default b=5.\nThis shows how keyword arguments let you specify parameters out of order and selectively override defaults."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ndef maximum(x, y):\n    if x > y:\n        return x\n    elif x == y:\n        return 'The numbers are equal'\n    else:\n        return y\n \nprint(maximum(2, 3))\n```",
        "options": [
            "2",
            "3",
            "The numbers are equal",
            "None of the mentioned"
        ],
        "correct": 1,
        "explanation": "The function maximum(x, y) compares two numbers. Since 2 < 3, it goes to the else block and returns y, which is 3."
    },
    {
        "category": "strings",
        "question": "Which of the following is a feature of DocString?",
        "options": [
            "Provide a convenient way of associating documentation with Python modules, functions, classes, and methods",
            "All functions should have a docstring",
            "Docstrings can be accessed by the __doc__ attribute on objects",
            "All of the mentioned"
        ],
        "correct": 3,
        "explanation": "DocStrings provide built-in documentation for Python modules, functions, classes, and methods. They are accessed via the __doc__ attribute and it’s recommended that all functions have them for better code clarity and maintainability. Hence, all the mentioned points are true."
    },
    {
        "category": "functions",
        "question": "Which are the advantages of functions in python?",
        "options": [
            "Reducing duplication of code",
            "Decomposing complex problems into simpler pieces",
            "Improving clarity of the code",
            "All of the mentioned"
        ],
        "correct": 3,
        "explanation": "Functions in Python offer several advantages:\nReducing duplication of code: You can reuse functions instead of repeating code.\nDecomposing complex problems: Functions allow you to break down a big problem into smaller, manageable parts.\nImproving clarity: By using descriptive names and organizing code into functions, your code becomes easier to read and maintain.\nSo, all the mentioned options are correct."
    },
    {
        "category": "functions",
        "question": "What are the two main types of functions?",
        "options": [
            "Custom function",
            "Built-in function & User defined function",
            "User function",
            "System function"
        ],
        "correct": 1,
        "explanation": "Python functions are of two main types: built-in and user-defined. Built-in functions like print(), len(), and abs() are available by default. User-defined functions are created using the def keyword to organize code into reusable, modular blocks."
    },
    {
        "category": "functions",
        "question": "Where is function defined?",
        "options": [
            "Module",
            "Class",
            "Another function",
            "All of the mentioned"
        ],
        "correct": 3,
        "explanation": "Functions in Python can be defined in various places, including modules, classes, and even inside other functions. When defined in a module, the function is available throughout the module or can be imported elsewhere. Inside a class, functions are defined as methods, and within another function, they become nested or inner functions. Hence, all of the mentioned options are valid."
    },
    {
        "category": "functions",
        "question": "What is called when a function is defined inside a class?",
        "options": [
            "Module",
            "Class",
            "Another function",
            "Method"
        ],
        "correct": 3,
        "explanation": "When a function is defined inside a class, it is called a method. Methods are functions that are associated with a class and can operate on instances of that class, often using the self keyword to access or modify the object’s attributes."
    },
    {
        "category": "functions",
        "question": "Which of the following is the use of id() function in python?",
        "options": [
            "Id returns the identity of the object",
            "Every object doesn’t have a unique id",
            "All of the mentioned",
            "None of the mentioned"
        ],
        "correct": 0,
        "explanation": "The id() function in Python returns the identity of an object. This identity is a unique integer (or memory address) that remains constant for the object during its lifetime. Every object in Python has a unique id, which helps in comparing object references."
    },
    {
        "category": "functions",
        "question": "Which of the following refers to mathematical function?",
        "options": [
            "sqrt",
            "rhombus",
            "add",
            "rhombus"
        ],
        "correct": 0,
        "explanation": "The sqrt function refers to the square root, which is a mathematical operation. In Python, it is typically used from the math module as math.sqrt(). Other options like “rhombus” and “add” are not standard mathematical functions in Python."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef cube(x):\n    return x * x * x      \nx = cube(3)    \nprint (x)\n```",
        "options": [
            "9",
            "3",
            "27",
            "30"
        ],
        "correct": 2,
        "explanation": "The function cube(x) returns the cube of the input number x, calculated as x * x * x.\nWhen called with cube(3), it computes 3 * 3 * 3 = 27, so the value of x becomes 27.\nThus, print(x) outputs 27."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\ndef C2F(c):\n    return c * 9/5 + 32\nprint(C2F(100))\nprint(C2F(0))\n```",
        "options": [
            "/ 212.0 / 32.0",
            "/ 314.0 / 24.0",
            "/ 567.0 / 98.0",
            "None of the mentioned"
        ],
        "correct": 0,
        "explanation": "This function converts Celsius temperatures to Fahrenheit using the formula (C * 9/5) + 32. When called with 100, it returns 212.0, and with 0, it returns 32.0, which are the correct Fahrenheit equivalents for these Celsius values."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ndef power(x, y=2):\n    r = 1\n    for i in range(y):\n       r = r * x\n    return r\nprint (power(3))\nprint (power(3, 3))\n```",
        "options": [
            "/ 212 / 32",
            "/ 9 / 27",
            "/ 567 / 98",
            "None of the mentioned"
        ],
        "correct": 1,
        "explanation": "This function calculates the power of a number x raised to y. The default value of y is 2, so if no second argument is provided, it squares x.\npower(3) returns 32 = 9\npower(3, 3) returns 33 = 27\nSo the output is:\n\n9\n27"
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\ndef sum(*args):\n   '''Function returns the sum of all values'''\n   r = 0\n   for i in args:\n      r += i\n   return r\nprint(sum.__doc__)\nprint(sum(1, 2, 3))\nprint(sum(1, 2, 3, 4, 5))\n```",
        "options": [
            "/ Function returns the sum of all values / 6 / 15",
            "/ 6 / 100",
            "/ 123 / 12345",
            "None of the mentioned"
        ],
        "correct": 0,
        "explanation": "The function sum(*args) uses *args to accept any number of arguments and returns their total sum.\nsum.__doc__ prints the docstring: “Function returns the sum of all values”\nsum(1, 2, 3) calculates 1 + 2 + 3 = 6\nsum(1, 2, 3, 4, 5) calculates 1 + 2 + 3 + 4 + 5 = 15\nSo the output is:\n\nFunction returns the sum of all values\n6\n15"
    },
    {
        "category": "functions",
        "question": "Python supports the creation of anonymous functions at runtime, using a construct called __________",
        "options": [
            "lambda",
            "pi",
            "anonymous",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "In Python, lambda functions are anonymous, meaning they don’t have a name. They are defined using the lambda keyword and can take any number of arguments but only have one expression. Lambdas are useful for creating small, throwaway functions quickly without formally defining them using def."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ny = 6\nz = lambda x: x * y\nprint (z(8))\n```",
        "options": [
            "48",
            "14",
            "64",
            "None of the mentioned"
        ],
        "correct": 0,
        "explanation": "The lambda function takes x as input and multiplies it by the variable y which is 6. When z(8) is called, it calculates 8 * 6, resulting in 48. Thus, the output is 48."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\nlamb = lambda x: x ** 3\nprint(lamb(5))\n```",
        "options": [
            "15",
            "555",
            "125",
            "None of the mentioned"
        ],
        "correct": 2,
        "explanation": "The lambda function calculates the cube of the input x. So, when lamb(5) is called, it computes 53 = 125. Hence, the output is 125."
    },
    {
        "category": "functions",
        "question": "Does Lambda contains return statements?",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "In Python, lambda functions do not contain return statements. Unlike regular functions defined using def, lambda functions are anonymous and consist of a single expression. This expression is automatically returned when the lambda is called, making the use of the return keyword unnecessary and invalid within a lambda. For example, lambda x: x * 2 will return the result of x * 2 when invoked. This concise syntax is useful for small, throwaway functions."
    },
    {
        "category": "functions",
        "question": "Lambda is a statement.",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "Lambda is not a statement; it is an expression in Python. This means it returns a function object and can be used wherever expressions are allowed, such as in function calls or assignments. Since it’s an expression, it cannot include statements like return, pass, or print inside its body."
    },
    {
        "category": "functions",
        "question": "Lambda contains block of statements.",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "A lambda in Python can only contain a single expression, not a block of statements. This expression is evaluated and returned. You cannot include multiple lines, control flow statements like if, for, or while, or use return within a lambda."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\ndef f(x, y, z): return x + y + z\nprint(f(2, 30, 400))\n```",
        "options": [
            "432",
            "24000",
            "430",
            "No output"
        ],
        "correct": 0,
        "explanation": "The function f(x, y, z) returns the sum of the three arguments. So, f(2, 30, 400) results in: 2 + 30 + 400 = 432."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\ndef writer():\n\ttitle = 'Sir'\n\tname = (lambda x:title + ' ' + x)\n\treturn name\n \nwho = writer()\nprint(who('Arthur'))\n```",
        "options": [
            "Arthur Sir",
            "Sir Arthur",
            "Arthur",
            "None of the mentioned"
        ],
        "correct": 1,
        "explanation": "In the code, the function writer() defines a local variable title with the value ‘Sir’. It then creates and returns a lambda function name that takes an argument x and returns the string title + ‘ ‘ + x. Since the lambda function closes over the title variable (a closure), when you call who(‘Arthur’), it returns ‘Sir Arthur’."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\nL = [lambda x: x ** 2,\n         lambda x: x ** 3,\n         lambda x: x ** 4]\n \nfor f in L:\n\tprint(f(3))\n```",
        "options": [
            "/ 27 / 81 / 343",
            "/ 6 / 9 / 12",
            "/ 9 / 27 / 81",
            "None of the mentioned"
        ],
        "correct": 2,
        "explanation": "The list L contains three lambda functions that calculate the square, cube, and fourth power of a number.\nThe first computes the square (x ** 2), so 3 ** 2 = 9.\nThe second computes the cube (x ** 3), so 3 ** 3 = 27.\nThe third computes the fourth power (x ** 4), so 3 ** 4 = 81.\nThe for loop calls each lambda function with argument 3, printing their respective results."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nmin = (lambda x, y: x if x < y else y)\nprint(min(101*99, 102*98))\n```",
        "options": [
            "9997",
            "9999",
            "9996",
            "None of the mentioned"
        ],
        "correct": 2,
        "explanation": "The lambda function compares two numbers and returns the smaller one. Since 101 * 99 equals 9999 and 102 * 98 equals 9996, the function returns 9996, which is the smaller value. Hence, the output is 9996."
    },
    {
        "category": "functions",
        "question": "What is a variable defined outside a function referred to as?",
        "options": [
            "A static variable",
            "A global variable",
            "A local variable",
            "An automatic variable"
        ],
        "correct": 1,
        "explanation": "A variable defined outside of any function is known as a global variable. It can be accessed inside functions using the global keyword if you want to modify its value; otherwise, it can only be read inside functions."
    },
    {
        "category": "functions",
        "question": "What is a variable defined inside a function referred to as?",
        "options": [
            "A global variable",
            "A volatile variable",
            "A local variable",
            "An automatic variable"
        ],
        "correct": 2,
        "explanation": "A variable defined inside a function is called a local variable. It is only accessible within the function where it is defined and is created when the function is called and destroyed when the function ends."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ni=0\ndef change(i):\n   i=i+1\n   return i\nchange(1)\nprint(i)\n```",
        "options": [
            "1",
            "Nothing is displayed",
            "0",
            "An exception is thrown"
        ],
        "correct": 2,
        "explanation": "The variable i defined outside the function is a global variable, and the i inside the change() function is local to that function. When change(1) is called, it returns 2, but this return value is not stored or used. The global i remains unchanged and retains its original value 0. Hence, print(i) outputs 0."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\ndef a(b):\n    b = b + [5]\n \nc = [1, 2, 3, 4]\na(c)\nprint(len(c))\n```",
        "options": [
            "4",
            "5",
            "1",
            "An exception is thrown"
        ],
        "correct": 0,
        "explanation": "The list c = [1, 2, 3, 4] is passed to function a(b), but inside the function, the operation b = b + [5] creates a new list and assigns it to the local variable b. It does not modify the original list c because the + operator creates a new object instead of modifying the list in-place. Therefore, the length of c remains 4."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\na=10\nb=20\ndef change():\n    global b\n    a=45\n    b=56\nchange()\nprint(a)\nprint(b)\n```",
        "options": [
            "/ 10 / 56",
            "/ 45 / 56",
            "/ 10 / 20",
            "Syntax Error"
        ],
        "correct": 0,
        "explanation": "In the given code: a = 10 and b = 20 are defined in the global scope.\nInside the change() function:\n\na = 45 is a local assignment, so it does not affect the global variable a.\nglobal b declares that the function will modify the global variable b, so b becomes 56 globally.\nTherefore, print(a) outputs 10 (unchanged global value) and print(b) outputs 56 (modified global value)."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\ndef change(i = 1, j = 2):\n    i = i + j\n    j = j + 1\n    print(i, j)\nchange(j = 1, i = 2)\n```",
        "options": [
            "An exception is thrown because of conflicting values",
            "1 2",
            "3 3",
            "3 2"
        ],
        "correct": 3,
        "explanation": "The function change has default parameters i = 1 and j = 2. However, when calling change(j = 1, i = 2), we’re explicitly passing i = 2 and j = 1, overriding the defaults.\nInside the function:\n\ni = i + j  # i = 2 + 1 = 3\nj = j + 1  # j = 1 + 1 = 2\nSo the output is: 3 2"
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef change(one, *two):\n   print(type(two))\nchange(1,2,3,4)\n```",
        "options": [
            "Integer",
            "<class ‘tuple’>",
            "<class ‘Dict’>",
            "An exception is thrown"
        ],
        "correct": 1,
        "explanation": "When a function in Python is defined with a parameter preceded by an asterisk (*), such as *two, it gathers any extra positional arguments passed into the function into a tuple. In the given code, the function change(1, 2, 3, 4) is called with more than one argument. The first value 1 is assigned to the parameter one, while the rest—2, 3, and 4—are captured as a tuple in two. Therefore, the print(type(two)) statement outputs <class ‘tuple’>, indicating that two is indeed a tuple."
    },
    {
        "category": "control",
        "question": "If a function doesn’t have a return statement, which of the following does the function return?",
        "options": [
            "int",
            "null",
            "None",
            "An exception is thrown without the return statement"
        ],
        "correct": 2,
        "explanation": "If a function in Python does not include a return statement, it returns None by default. This indicates the absence of a return value but still allows the function to complete successfully."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\ndef display(b, n):\n    while n > 0:\n        print(b,end=\"\")\n        n=n-1\ndisplay('z',3)\n```",
        "options": [
            "zzz",
            "zz",
            "An exception is executed",
            "Infinite loop"
        ],
        "correct": 0,
        "explanation": "The function display takes a character b and an integer n, and uses a while loop to print the character n times without newline (due to end=””). When display(‘z’, 3) is called, it prints ‘z’ three times, resulting in the output zzz."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef find(a, **b):\n   print(type(b))\nfind('letters',A='1',B='2')\n```",
        "options": [
            "<class ‘string’>",
            "<class ‘tuple’>",
            "<class ‘dict’>",
            "An exception is thrown"
        ],
        "correct": 2,
        "explanation": "In Python, the **b syntax collects all additional keyword arguments into a dictionary. In the function find(‘letters’, A=’1′, B=’2′), a gets ‘letters’, and b becomes {‘A’: ‘1’, ‘B’: ‘2’}. Hence, type(b) returns <class ‘dict’>."
    },
    {
        "category": "modules",
        "question": "What is the type of each element in sys.argv?",
        "options": [
            "set",
            "list",
            "tuple",
            "string"
        ],
        "correct": 3,
        "explanation": "sys.argv is a list in Python that contains command-line arguments passed to the script. Each element in sys.argv is of type string, regardless of whether it looks like a number or not. The first element (sys.argv[0]) is the script name."
    },
    {
        "category": "modules",
        "question": "What is the length of sys.argv?",
        "options": [
            "number of arguments",
            "number of arguments + 1",
            "number of arguments – 1",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "sys.argv includes the name of the script as the first element (sys.argv[0]), followed by the actual command-line arguments. So, if there are n command-line arguments, the length of sys.argv will be number of arguments + 1."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef foo(k):\n    k[0] = 1\nq = [0]\nfoo(q)\nprint(q)\n```",
        "options": [
            "[0]",
            "[1]",
            "[1, 0]",
            "[0, 1]"
        ],
        "correct": 1,
        "explanation": "Lists in Python are mutable, so when the list q is passed to the function foo, the change made (k[0] = 1) modifies the original list. Therefore, after the function call, q becomes [1]."
    },
    {
        "category": "functions",
        "question": "How are keyword arguments specified in the function heading?",
        "options": [
            "one-star followed by a valid identifier",
            "one underscore followed by a valid identifier",
            "two stars followed by a valid identifier",
            "two underscores followed by a valid identifier"
        ],
        "correct": 2,
        "explanation": "In Python, keyword arguments (also known as **kwargs) are specified in the function heading using two asterisks (**) followed by a valid identifier. For example:\ndef func(**kwargs):\n    print(kwargs)\nThis allows the function to accept an arbitrary number of keyword arguments as a dictionary."
    },
    {
        "category": "control",
        "question": "How many keyword arguments can be passed to a function in a single function call?",
        "options": [
            "zero",
            "one",
            "zero or more",
            "one or more"
        ],
        "correct": 2,
        "explanation": "In Python, a function can accept zero or more keyword arguments during a single call. These keyword arguments are specified by explicitly naming the parameters (e.g., func(a=1, b=2)), and Python functions can handle any number of such arguments, including none."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef foo(fname, val):\n    print(fname(val))\nfoo(max, [1, 2, 3])\nfoo(min, [1, 2, 3])\n```",
        "options": [
            "/ 3 / 1",
            "/ 1 / 3",
            "error",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The function foo takes a function fname and a value val as arguments. It then applies fname to val and prints the result.\nfoo(max, [1, 2, 3]) applies max() to the list, which returns 3.\nfoo(min, [1, 2, 3]) applies min() to the list, which returns 1.\nSo, the output is:\n\n3\n1"
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\ndef foo():\n    return total + 1\ntotal = 0\nprint(foo())\n```",
        "options": [
            "0",
            "1",
            "error",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "The function foo() returns total + 1. Even though total is not defined inside the function, it is defined in the global scope before the function is called. Python allows reading a global variable inside a function unless you try to assign to it. So total = 0 globally, and foo() returns 0 + 1 = 1."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef foo():\n    total += 1\n    return total\ntotal = 0\nprint(foo())\n```",
        "options": [
            "0",
            "1",
            "error",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The code results in an error because inside the function foo(), you are trying to modify the variable total without declaring it as global. Python treats total as a local variable, but it’s being used before assignment, leading to an UnboundLocalError."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef foo(x):\n    x = ['def', 'abc']\n    return id(x)\nq = ['abc', 'def']\nprint(id(q) == foo(q))\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 1,
        "explanation": "The function foo(x) assigns a new list [‘def’, ‘abc’] to x, so x now points to a different object in memory. Therefore, the id(x) inside foo() will differ from id(q) outside the function, and id(q) == foo(q) will return False."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ndef foo(i, x=[]):\n    x.append(i)\n    return x\nfor i in range(3):\n    print(foo(i))\n```",
        "options": [
            "/ [0] / [1] / [2]",
            "/ [0] / [0, 1] / [0, 1, 2]",
            "/ [1] / [2] / [3]",
            "None of the mentioned"
        ],
        "correct": 1,
        "explanation": "The default argument x=[] is evaluated only once when the function is defined, not each time it’s called. So the same list is used and modified across all calls to foo(). As a result, each call appends to the same list, and the list grows with each iteration.\n[0]\n[0, 1]\n[0, 1, 2]"
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef foo(k):\n    k = [1]\nq = [0]\nfoo(q)\nprint(q)\n```",
        "options": [
            "[0]",
            "[1]",
            "[1, 0]",
            "[0, 1]"
        ],
        "correct": 0,
        "explanation": "In this code, the function foo(k) assigns a new list [1] to the local variable k, which does not affect the original list q. Since the reference is reassigned inside the function, it doesn’t modify the external variable. Therefore, print(q) still outputs the original list: [0]."
    },
    {
        "category": "functions",
        "question": "How are variable length arguments specified in the function heading?",
        "options": [
            "one star followed by a valid identifier",
            "one underscore followed by a valid identifier",
            "two stars followed by a valid identifier",
            "two underscores followed by a valid identifier"
        ],
        "correct": 0,
        "explanation": "In Python, variable-length arguments are specified using a single asterisk (*) followed by a valid identifier in the function definition. This collects any extra positional arguments into a tuple. For example:\ndef func(*args):\n    for arg in args:\n        print(arg)\nHere, *args can take any number of positional arguments.\n\n👉 Join Sanfoundry classes at Telegram or Youtube"
    },
    {
        "category": "modules",
        "question": "Which module in the python standard library parses options received from the command line?",
        "options": [
            "getopt",
            "os",
            "getarg",
            "main"
        ],
        "correct": 0,
        "explanation": "The getopt module in Python’s standard library is used to parse command-line options and arguments. It allows the script to accept flags and parameters (like -h or –help) similar to those in shell scripts. For example:\nimport getopt, sys\nopts, args = getopt.getopt(sys.argv[1:], \"h\", [\"help\"])\nThis line parses short option -h and long option –help."
    },
    {
        "category": "modules",
        "question": "What is the type of sys.argv?",
        "options": [
            "set",
            "list",
            "tuple",
            "string"
        ],
        "correct": 1,
        "explanation": "In Python, sys.argv is a list in the sys module that contains the command-line arguments passed to a script. The first element (sys.argv[0]) is the name of the script itself, and the remaining elements are the arguments provided by the user. So the type of sys.argv is list."
    },
    {
        "category": "modules",
        "question": "What is the value stored in sys.argv[0]?",
        "options": [
            "null",
            "you cannot access it",
            "the program’s name",
            "the first argument"
        ],
        "correct": 2,
        "explanation": "sys.argv[0] stores the name of the Python script being executed. It’s the first element of the sys.argv list, which always contains the script name, followed by any command-line arguments provided."
    },
    {
        "category": "functions",
        "question": "How are default arguments specified in the function heading?",
        "options": [
            "identifier followed by an equal to sign and the default value",
            "identifier followed by the default value within backticks (“)",
            "identifier followed by the default value within square brackets ([])",
            "identifier"
        ],
        "correct": 0,
        "explanation": "Default arguments in Python are assigned using the = sign in the function definition. If a value is not provided during the function call, the default is used. This helps make function calls simpler and avoids errors from missing arguments."
    },
    {
        "category": "functions",
        "question": "How are required arguments specified in the function heading?",
        "options": [
            "identifier followed by an equal to sign and the default value",
            "identifier followed by the default value within backticks (“)",
            "identifier followed by the default value within square brackets ([])",
            "identifier"
        ],
        "correct": 3,
        "explanation": "Required arguments in a Python function are specified simply by using the parameter name (identifier) without assigning any default value. These arguments must be passed when the function is called. For example:\ndef greet(name):\n    print(\"Hello\", name)\nHere, name is a required argument—omitting it in a function call would raise an error."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef foo(x):\n    x[0] = ['def']\n    x[1] = ['abc']\n    return id(x)\nq = ['abc', 'def']\nprint(id(q) == foo(q))\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 0,
        "explanation": "The list q is passed by reference to the function foo, so both x and q refer to the same object in memory. The id() function returns the memory address of the object, which remains unchanged. Therefore, id(q) == foo(q) evaluates to True."
    },
    {
        "category": "modules",
        "question": "Where are the arguments received from the command line stored?",
        "options": [
            "sys.argv",
            "os.argv",
            "argv",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "In Python, command-line arguments are stored in sys.argv, which is a list provided by the sys module. The first element (sys.argv[0]) is the script name, and the subsequent elements are the command-line arguments passed to the script."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ndef foo(i, x=[]):\n    x.append(x.append(i))\n    return x\nfor i in range(3):\n    y = foo(i)\nprint(y)\n```",
        "options": [
            "[[[0]], [[[0]], [1]], [[[0]], [[[0]], [1]], [2]]]",
            "[[0], [[0], 1], [[0], [[0], 1], 2]]",
            "[0, None, 1, None, 2, None]",
            "[[[0]], [[[0]], [1]], [[[0]], [[[0]], [1]], [2]]]"
        ],
        "correct": 2,
        "explanation": "In this code, x.append(i) adds i to the list, but since append() returns None, x.append(x.append(i)) ends up adding both i and None to the list. This happens in each iteration, resulting in the final list: [0, None, 1, None, 2, None]."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef f1():\n    x=15\n    print(x)\nx=12\nf1()\n```",
        "options": [
            "Error",
            "12",
            "15",
            "1512"
        ],
        "correct": 2,
        "explanation": "The function f1() defines a local variable x with the value 15 and prints it. Even though there is a global x with value 12, the function uses its local x, so the output is 15."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef f1():\n    x=100\n    print(x)\nx=+1\nf1()\n```",
        "options": [
            "Error",
            "100",
            "101",
            "99"
        ],
        "correct": 1,
        "explanation": "In this code, x = +1 sets the global variable x to 1 (unary plus doesn’t change the value). Inside the function f1(), a new local variable x is defined and assigned the value 100. The function then prints this local variable, so the output is 100. The global x has no effect on the output of f1()."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef san(x):\n    print(x+1)\nx=-2\nx=4\nsan(12)\n```",
        "options": [
            "13",
            "10",
            "2",
            "5"
        ],
        "correct": 0,
        "explanation": "The function san takes the argument x and prints x + 1. When called as san(12), it prints 12 + 1 = 13. The global variables x = -2 and x = 4 are not used inside the function call. So the output is 13."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef f1():\n    global x\n    x+=1\n    print(x)\nx=12\nprint(\"x\")\n```",
        "options": [
            "Error",
            "13",
            "/ 13 / x",
            "x"
        ],
        "correct": 3,
        "explanation": "The code first defines a function f1() that uses the global variable x and increments it, but f1() is never called. Then it sets x = 12 and prints the string “x” (because “x” is in quotes, it prints the literal letter x). So the output is just: x."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef f1(x):\n    global x\n    x+=1\n    print(x)\nf1(15)\nprint(\"hello\")\n```",
        "options": [
            "error",
            "hello",
            "16",
            "/ 16 / hello"
        ],
        "correct": 0,
        "explanation": "This code throws an error because you’re trying to declare a function parameter x as global, which is not allowed in Python. The global statement can only be used for variables defined at the module level, not for function parameters. Therefore, the line global x after x has already been defined as a parameter causes a SyntaxError."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nx=12\ndef f1(a,b=x):\n    print(a,b)\nx=15\nf1(4)\n```",
        "options": [
            "Error",
            "12 4",
            "4 12",
            "4 15"
        ],
        "correct": 2,
        "explanation": "Default argument values are evaluated only once at the time the function is defined, not each time the function is called. Here, b gets the default value of x at the time of function definition, which was 12. Even though x is later changed to 15, the default value remains 12. So calling f1(4) prints 4 12."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef f():\n    global a\n    print(a)\n    a = \"hello\"\n    print(a) \na = \"world\" \nf()\nprint(a)\n```",
        "options": [
            "/ hello / hello / world",
            "/ world / hello / hello",
            "/ hello / world / world",
            "/ world / hello / world"
        ],
        "correct": 1,
        "explanation": "The variable a is initially set to “world” in the global scope. Inside the function f(), global a allows access and modification of the global variable a. The first print(a) outputs “world”, then a is updated to “hello” and printed again. After the function call, since a has been modified globally, the final print(a) also outputs “hello”."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef f1(a,b=[]):\n    b.append(a)\n    return b\nprint(f1(2,[3,4]))\n```",
        "options": [
            "[3, 2, 4]",
            "[2, 3, 4]",
            "Error",
            "[3, 4, 2]"
        ],
        "correct": 3,
        "explanation": "In the function f1, a is added to the list b using b.append(a). The list [3, 4] is passed explicitly as an argument, so a=2 is appended to it, resulting in [3, 4, 2]. Hence, the output is: [3, 4, 2]."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef f(p, q, r):\n    global s\n    p = 10\n    q = 20\n    r = 30\n    s = 40\n    print(p,q,r,s)\np,q,r,s = 1,2,3,4\nf(5,10,15)\n```",
        "options": [
            "1 2 3 4",
            "5 10 15 4",
            "10 20 30 40",
            "5 10 15 40"
        ],
        "correct": 2,
        "explanation": "In the function f(p, q, r), the values of p, q, and r are reassigned locally to 10, 20, and 30 respectively. The variable s is declared global, so s = 40 updates the global variable. The print statement inside the function prints the local p, q, r, and global s, resulting in: 10 20 30 40."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef f(x):\n    print(\"outer\")\n    def f1(a):\n        print(\"inner\")\n        print(a,x)\nf(3)\nf1(1)\n```",
        "options": [
            "/ outer / error",
            "/ inner / error",
            "/ outer / inner",
            "error"
        ],
        "correct": 0,
        "explanation": "The function f defines an inner function f1, but f1 is local to f and cannot be accessed outside it. When f(3) is called, it prints “outer” and defines f1, but since f1 is not returned or called inside f, it remains inaccessible from the outside.\nSo when f1(1) is called outside f, Python throws a NameError because f1 is not defined in the global scope."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nx = 5 \ndef f1():\n    global x\n    x = 4\ndef f2(a,b):\n    global x\n    return a+b+x\nf1()\ntotal = f2(1,2)\nprint(total)\n```",
        "options": [
            "Error",
            "7",
            "8",
            "15"
        ],
        "correct": 1,
        "explanation": "The function f1() sets the global variable x to 4. Then f2(1, 2) adds 1 + 2 + x (which is 4) and returns 7. Thus, the output is 7."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nx=100\ndef f1():\n    global x\n    x=90\ndef f2():\n    global x\n    x=80\nprint(x)\n```",
        "options": [
            "100",
            "90",
            "80",
            "Error"
        ],
        "correct": 0,
        "explanation": "The functions f1() and f2() are defined but not called, so the global variable x remains unchanged at its original value of 100. Therefore, print(x) outputs 100."
    },
    {
        "category": "functions",
        "question": "Read the following Python code carefully and point out the global variables?\n\n```python\ny, z = 1, 2\ndef f():\n    global x\n    x = y+z\n```",
        "options": [
            "x",
            "y and z",
            "x, y and z",
            "Neither x, nor y, nor z"
        ],
        "correct": 2,
        "explanation": "y and z are defined at the module level, so they are global variables. Inside the function f(), x is declared with the global keyword, meaning it refers to a variable in the global scope and will be created or modified there. Thus, all three variables x, y, and z are global."
    },
    {
        "category": "functions",
        "question": "Which of the following data structures is returned by the functions globals() and locals()?",
        "options": [
            "list",
            "set",
            "dictionary",
            "tuple"
        ],
        "correct": 2,
        "explanation": "Both globals() and locals() return dictionaries that represent the current global and local symbol tables, respectively. These dictionaries contain variable names as keys and their corresponding values. They are useful for introspection and dynamic access to variables."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nx=1\ndef cg():\n\tglobal x\n\tx=x+1\t\ncg()\nprint(x)\n```",
        "options": [
            "2",
            "1",
            "0",
            "Error"
        ],
        "correct": 0,
        "explanation": "The function cg() uses the global keyword to modify the global variable x. It increments x by 1, so after calling cg(), the value of x becomes 2. Hence, the output is 2."
    },
    {
        "category": "functions",
        "question": "On assigning a value to a variable inside a function, it automatically becomes a global variable.",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "Assigning a value to a variable inside a function creates a local variable by default. To modify a global variable inside a function, you must explicitly declare it as global. Otherwise, the variable remains local to the function."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ne=\"butter\"\ndef f(a): print(a)+e\nf(\"bitter\")\n```",
        "options": [
            "error",
            "/ butter / error /",
            "/ bitter / error",
            "bitterbutter"
        ],
        "correct": 2,
        "explanation": "The function f(a) tries to execute print(a) + e, but print(a) returns None, and adding None + e raises a TypeError. However, print(a) executes before the error occurs, so “bitter” is printed, followed by an error due to the invalid addition."
    },
    {
        "category": "control",
        "question": "What happens if a local variable exists with the same name as the global variable you want to access?",
        "options": [
            "Error",
            "The local variable is shadowed",
            "Undefined behavior",
            "The global variable is shadowed"
        ],
        "correct": 3,
        "explanation": "When a local variable has the same name as a global variable, the local variable shadows the global one within that function or scope. This means the global variable is not accessible in that local context unless explicitly accessed using the global keyword."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\na=10\nglobals()['a']=25\nprint(a)\n```",
        "options": [
            "10",
            "25",
            "Junk value",
            "Error"
        ],
        "correct": 1,
        "explanation": "globals() returns a dictionary representing the current global symbol table. When you do globals()[‘a’] = 25, you are directly modifying the global variable a to 25. So, when you print a afterward, it reflects the updated value 25."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef f(): x=4\nx=1\nf()\nprint(x)\n```",
        "options": [
            "Error",
            "4",
            "Junk value",
            "1"
        ],
        "correct": 3,
        "explanation": "Inside the function f(), x = 4 creates a local variable x that exists only within the function scope. The global variable x remains unchanged with the value 1. Since f() doesn’t modify the global x, when you print x outside the function, it prints 1."
    },
    {
        "category": "tuples_dicts",
        "question": "______________ returns a dictionary of the module namespace. ________________ returns a dictionary of the current namespace.",
        "options": [
            "/ locals() / globals()",
            "/ locals() / locals()",
            "/ globals() / locals()",
            "/ globals() / globals()"
        ],
        "correct": 2,
        "explanation": "globals() returns a dictionary representing the current global symbol table (module namespace). locals() returns a dictionary representing the current local symbol table (current namespace inside a function or block)."
    },
    {
        "category": "functions",
        "question": "Which is the most appropriate definition for recursion?",
        "options": [
            "A function that calls itself",
            "A function execution instance that calls another execution instance of the same function",
            "A class method that calls another class method",
            "An in-built method that is automatically called"
        ],
        "correct": 1,
        "explanation": "The most appropriate and precise definition of recursion is “a function execution instance that calls another execution instance of the same function.” This emphasizes not just the function referring to itself, but the actual runtime behavior where a new invocation of the same function is made during execution."
    },
    {
        "category": "functions",
        "question": "Only problems that are recursively defined can be solved using recursion.",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "The statement is False. While recursion is a natural fit for problems that are recursively defined (like tree traversals, factorial, Fibonacci, etc.), any problem that can be broken down into smaller subproblems can potentially be solved using recursion. Many problems that aren’t inherently recursive can still be approached recursively, though they might be more efficiently handled using iteration."
    },
    {
        "category": "functions",
        "question": "Which of these is false about recursion?",
        "options": [
            "Recursive function can be replaced by a non-recursive function",
            "Recursive functions usually take more memory space than non-recursive function",
            "Recursive functions run faster than non-recursive function",
            "Recursion makes programs easier to understand"
        ],
        "correct": 2,
        "explanation": "Recursive functions are often slower and consume more memory than their non-recursive counterparts due to the overhead of multiple function calls and maintaining the call stack. While recursion can make code easier to read and understand for problems like tree traversal or factorials, it is generally less efficient than an iterative solution."
    },
    {
        "category": "control",
        "question": "Fill in the line of the following Python code for calculating the factorial of a number.\n\n```python\ndef fact(num):\n    if num == 0: \n        return 1\n    else:\n        return _____________________\n```",
        "options": [
            "num*fact(num-1)",
            "(num-1)*(num-2)",
            "num*(num-1)",
            "fact(num)*fact(num-1)"
        ],
        "correct": 0,
        "explanation": "This is a classic example of a recursive function to calculate the factorial of a number.\nIn recursion, the function calls itself with a reduced value until it reaches the base case (num == 0).\nSo, the correct recursive step is:\nreturn num * fact(num - 1)"
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ndef test(i,j):\n    if(i==0):\n        return j\n    else:\n        return test(i-1,i+j)\nprint(test(4,7))\n```",
        "options": [
            "13",
            "7",
            "Infinite loop",
            "17"
        ],
        "correct": 3,
        "explanation": "The function test(i, j) recursively calls itself by decreasing i and adding i + j each time. Starting from test(4, 7), the values evolve as test(3,11), test(2,14), test(1,16), and finally test(0,17). When i becomes 0, it returns j, which is 17."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nl=[]\ndef convert(b):\n    if(b==0):\n        return l\n    dig=b%2\n    l.append(dig)\n    convert(b//2)\nconvert(6)\nl.reverse()\nfor i in l:\n    print(i,end=\"\")\n```",
        "options": [
            "011",
            "110",
            "3",
            "Infinite loop"
        ],
        "correct": 1,
        "explanation": "The function recursively divides the number by 2, appending the remainder to list l. For 6, the remainders collected are [0, 1, 1]. After reversing, it becomes [1, 1, 0], which is the binary form of 6. Printing the list outputs 110."
    },
    {
        "category": "functions",
        "question": "What is tail recursion?",
        "options": [
            "A recursive function that has two base cases",
            "A function where the recursive functions leads to an infinite loop",
            "A recursive function where the function doesn’t return anything and just prints the values",
            "A function where the recursive call is the last thing executed by the function"
        ],
        "correct": 3,
        "explanation": "In tail recursion, the recursive call is the last operation in the function before it returns the result. This allows some compilers or interpreters to optimize the recursion by reusing the current function’s stack frame, making it more memory-efficient and avoiding stack overflow issues."
    },
    {
        "category": "operators",
        "question": "Observe the following Python code?\n\n```python\ndef a(n):\n    if n == 0:\n        return 0\n    else:\n        return n*a(n - 1)\ndef b(n, tot):\n    if n == 0:\n        return tot\n    else:\n        return b(n-2, tot-2)\n```",
        "options": [
            "Both a() and b() aren’t tail recursive",
            "Both a() and b() are tail recursive",
            "b() is tail recursive but a() isn’t",
            "a() is tail recursive but b() isn’t"
        ],
        "correct": 2,
        "explanation": "In tail recursion, the recursive call is the last operation in the function. In a(n), the multiplication (n * a(n – 1)) is performed after the recursive call, which prevents it from being tail recursive. On the other hand, in b(n, tot), the recursive call b(n – 2, tot – 2) is the last operation, making b() tail recursive."
    },
    {
        "category": "functions",
        "question": "Which of the following statements is false about recursion?",
        "options": [
            "Every recursive function must have a base case",
            "Infinite recursion can occur if the base case isn’t properly mentioned",
            "A recursive function makes the code easier to understand",
            "Every recursive function must have a return value"
        ],
        "correct": 3,
        "explanation": "Not every recursive function needs to return a value. Some recursive functions, like those used for printing or performing actions (e.g., traversing a data structure), may not return anything—they just perform operations. Thus, option “Every recursive function must have a return value” is false. The other statements are true: a base case is essential to avoid infinite recursion, and recursion can simplify certain algorithms."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\ndef fun(n):\n    if (n > 100):\n        return n - 5\n    return fun(fun(n+11));\n \nprint(fun(45))\n```",
        "options": [
            "50",
            "100",
            "74",
            "Infinite loop"
        ],
        "correct": 1,
        "explanation": "The function fun(n) uses nested recursion. For any input n ≤ 100, it keeps calling itself with n + 11 until n > 100, at which point it returns n – 5. Despite the complexity, the recursion stabilizes and always returns 100 for inputs ≤ 100. This is a variation of the McCarthy 91 function."
    },
    {
        "category": "functions",
        "question": "Recursion and iteration are the same programming approach.",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "Recursion and iteration are not the same. Recursion involves a function calling itself to solve smaller instances of a problem. Iteration uses looping constructs (like for or while) to repeatedly execute a block of code. They can solve similar problems, but their approach, memory usage, and structure differ significantly."
    },
    {
        "category": "control",
        "question": "What happens if the base condition isn’t defined in recursive programs?",
        "options": [
            "Program gets into an infinite loop",
            "Program runs once",
            "Program runs n number of times where n is the argument given to the function",
            "An exception is thrown"
        ],
        "correct": 0,
        "explanation": "If a base condition is not defined in a recursive function, the function will keep calling itself indefinitely. This leads to an infinite recursion, eventually causing a stack overflow error or RecursionError in Python. The base condition is essential to stop the recursion at the right point."
    },
    {
        "category": "operators",
        "question": "Which of these is not true about recursion?",
        "options": [
            "Making the code look clean",
            "A complex task can be broken into sub-problems",
            "Recursive calls take up less memory",
            "Sequence generation is easier than a nested iteration"
        ],
        "correct": 2,
        "explanation": "Recursion usually takes up more memory compared to iteration because each recursive call adds a new frame to the call stack, which can lead to stack overflow if not handled properly (especially in deep recursion)."
    },
    {
        "category": "operators",
        "question": "Which of these is not true about recursion?",
        "options": [
            "It’s easier to code some real-world problems using recursion than non-recursive equivalent",
            "Recursive functions are easy to debug",
            "Recursive calls take up a lot of memory",
            "Programs using recursion take longer time than their non-recursive equivalent"
        ],
        "correct": 1,
        "explanation": "While recursion can simplify certain problems (like tree traversals or factorial calculations), it can make debugging more difficult because of the multiple recursive calls, which can obscure the flow of execution and make it harder to track state across calls."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ndef a(n):\n    if n == 0:\n        return 0\n    elif n == 1:\n        return 1\n    else:\n        return a(n-1)+a(n-2)\nfor i in range(0,4):\n    print(a(i),end=\" \")\n```",
        "options": [
            "0 1 2 3",
            "An exception is thrown",
            "0 1 1 2 3",
            "0 1 1 2"
        ],
        "correct": 3,
        "explanation": "The function a(n) calculates the Fibonacci sequence. For each value of n, it recursively computes the sum of the two previous numbers. For i = 0, 1, 2, 3, the results are 0, 1, 1, and 2 respectively, producing the output 0 1 1 2."
    },
    {
        "category": "lists",
        "question": "Which type of copy is shown in the following python code?\n\n```python\nl1=[[10, 20], [30, 40], [50, 60]]\nls=list(l1)\nls\n[[10, 20], [30, 40], [50, 60]]\n```",
        "options": [
            "Shallow copy",
            "Deep copy",
            "memberwise",
            "All of the mentioned"
        ],
        "correct": 0,
        "explanation": "The list() constructor creates a shallow copy of the list. It copies the outer list structure, but not the inner nested lists—so both l1 and ls share references to the same inner lists. Changes to those nested lists via either reference will be reflected in both."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nl=[2, 3, [4, 5]]\nl2=l.copy()\nl2[0]=88\nprint(l)\nprint(l2)\n```",
        "options": [
            "- **[B] / [2, 3, [4, 5]] / [88, 3, [4, 5]] /",
            "/ [88, 2, 3, [4, 5]] / [2, 3, [4, 5]]",
            "/ [2, 3, [4, 5]] / [2, 3, [4, 5]]"
        ],
        "correct": 0,
        "explanation": "l.copy() creates a shallow copy of list l. This means l2 has its own outer list, but the nested list [4, 5] is still shared. Changing l2[0] to 88 does not affect l, so l remains [2, 3, [4, 5]], while l2 becomes [88, 3, [4, 5]]."
    },
    {
        "category": "general",
        "question": "In _______________ copy, the base address of the objects are copied. In _______________ copy, the base address of the objects are not copied.",
        "options": [
            "deep. shallow",
            "memberwise, shallow",
            "shallow, deep",
            "deep, memberwise"
        ],
        "correct": 2,
        "explanation": "In a shallow copy, only the outer object is copied and its base address is referenced, so changes in nested objects affect both copies. In a deep copy, all objects (including nested ones) are recursively copied, so their base addresses are not the same, and modifications do not affect each other."
    },
    {
        "category": "lists",
        "question": "The nested list undergoes shallow copy even when the list as a whole undergoes deep copy.",
        "options": [
            "True",
            "False"
        ],
        "correct": 0,
        "explanation": "In Python, a shallow copy creates a new outer list, but the nested (inner) lists remain as references to the original objects. This means that changes made to the nested elements in the copied list will also reflect in the original list. Even though the outer list is copied, the inner lists are not duplicated unless a deep copy is explicitly performed using the copy module’s deepcopy() function. Therefore, the nested lists undergo a shallow copy even when the outer list seems to be deeply copied."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code and state the type of copy that is depicted?\n\n```python\nl1=[2, 4, 6, 8]\nl2=[1, 2, 3]\nl1=l2\nprint(l2)\n```",
        "options": [
            "[2, 4, 6, 8], shallow copy",
            "[2, 4, 6, 8], deep copy",
            "[1, 2, 3], shallow copy",
            "[1, 2, 3], deep copy"
        ],
        "correct": 2,
        "explanation": "The line l1 = l2 doesn’t create a new copy; it just makes l1 refer to the same object as l2. This is a shallow copy, where both variables point to the same list in memory. Printing l2 gives [1, 2, 3]."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nl1=[10, 20, 30]\nl2=l1\nprint(id(l1)==id(l2))\n \nl2=l1.copy()\nprint(id(l1)==id(l2))\n```",
        "options": [
            "False, False",
            "False, True",
            "True, True",
            "True, False"
        ],
        "correct": 3,
        "explanation": "In the given code, l2 = l1 assigns l2 to reference the same list object as l1, so id(l1) == id(l2) returns True. However, when l2 = l1.copy() is used, it creates a new list with the same elements, resulting in a different object in memory. Therefore, id(l1) == id(l2) now returns False. This demonstrates the difference between assigning a reference and creating a shallow copy of a list."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nl1=[1, 2, 3, [4]]\nl2=list(l1)\nprint(id(l1)==id(l2))\n```",
        "options": [
            "True",
            "False",
            "Error",
            "Address of l1"
        ],
        "correct": 1,
        "explanation": "In the code, l2 = list(l1) creates a shallow copy of the list l1. This means l2 is a new list object with the same elements as l1, so id(l1) == id(l2) evaluates to False. Although the outer lists are different objects, they still share the same inner list [4] due to shallow copying."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nimport copy\nl1=[10, 20, 30, [40]]\nl2=copy.deepcopy(l1)\nl1[3][0]=90\nprint(l1)\nprint(l2)\n```",
        "options": [
            "/ [10, 20, 30, [40]] / [10, 20, 30, 90]",
            "Error",
            "/ [10, 20, 30 [90]] / [10, 20, 30, [40]]",
            "/ [10, 20, 30, [40]] / [10, 20, 30, [90]]"
        ],
        "correct": 2,
        "explanation": "The code uses copy.deepcopy() to create a completely independent copy of l1, including the nested list [40].\nWhen l1[3][0] = 90 is executed, it modifies only l1, not l2, because they no longer share the same inner list.\nAs a result, the output is:\n[10, 20, 30 [90]]\n[10, 20, 30, [40]]"
    },
    {
        "category": "lists",
        "question": "In ____________________ copy, the modification done on one list affects the other list. In ____________________ copy, the modification done on one list does not affect the other list.",
        "options": [
            "shallow, deep",
            "memberwise, shallow",
            "deep, shallow",
            "deep, memberwise"
        ],
        "correct": 0,
        "explanation": "In a shallow copy, the outer list is copied, but nested objects (like inner lists) are still referenced. So, changes to nested elements in one list affect the other. In a deep copy, all objects are recursively copied, making the two lists completely independent. Hence, modifications in one list do not affect the other."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nl1=[1, 2, 3, (4)]\nl2=l1.copy()\nprint(l2)\nprint(l1)\n```",
        "options": [
            "/ [1, 2, 3, (4)] / [1, 2, 3, 4]",
            "/ [1, 2, 3, 4] / [1, 2, 3, (4)]",
            "/ [1, 2, 3, 4] / [1, 2, 3, 4]",
            "/ [1, 2, 3, (4)] / [1, 2, 3, (4)]"
        ],
        "correct": 2,
        "explanation": "Here,\n(4) is just an integer 4 enclosed in parentheses, not a tuple because a single-element tuple needs a trailing comma (4,).\nSo, l1 is [1, 2, 3, 4] (the last element is integer 4, not a tuple).\nl2 = l1.copy() creates a shallow copy of the list.\nPrinting l1 and l2 will both display [1, 2, 3, 4]."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\ndef check(n):\n    if n < 2:\n        return n % 2 == 0\n    return check(n - 2)\nprint(check(11))\n```",
        "options": [
            "False",
            "True",
            "1",
            "An exception is thrown"
        ],
        "correct": 0,
        "explanation": "The function check(n) recursively subtracts 2 until n < 2. Then it returns n % 2 == 0. For n = 11, the recursion reaches n = 1, and 1 % 2 == 0 is False. So, the output is False."
    },
    {
        "category": "general",
        "question": "What is the base case in the Merge Sort algorithm when it is solved recursively?",
        "options": [
            "n=0",
            "n=1",
            "A list of length one",
            "An empty list"
        ],
        "correct": 2,
        "explanation": "In the recursive Merge Sort algorithm, the base case occurs when the list to be sorted has only one element. At this point, the list is already sorted by definition, so no further splitting or sorting is needed."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\na = [1, 2, 3, 4, 5]\nb = lambda x: (b (x[1:]) + x[:1] if x else []) \nprint(b (a))\n```",
        "options": [
            "1 2 3 4 5",
            "[5, 4, 3, 2, 1]",
            "[]",
            "Error, lambda functions can’t be called recursively"
        ],
        "correct": 1,
        "explanation": "The lambda function b is recursively called on the sliced list x[1:] until the list is empty (x == []). It builds the reversed list by appending the first element (x[:1]) at the end during each return. This effectively reverses the list. So, for a = [1, 2, 3, 4, 5], it returns [5, 4, 3, 2, 1]."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nodd=lambda x: bool(x%2)\nnumbers=[n for n in range(10)]\nprint(numbers)\nn=list()\nfor i in numbers:\n    if odd(i):\n        continue\n    else:\n        break\n```",
        "options": [
            "[0, 2, 4, 6, 8, 10]",
            "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]",
            "[1, 3, 5, 7, 9]",
            "Error"
        ],
        "correct": 1,
        "explanation": "The list numbers is created using range(10), which gives [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], and it is printed directly. The for loop that follows checks each number, and since the first number 0 is even, the else block triggers break, exiting the loop immediately without modifying or printing anything. Hence, the printed output is just the original list."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nf=lambda x:bool(x%2)\nprint(f(20), f(21))\n```",
        "options": [
            "False True",
            "False False",
            "True True",
            "True False"
        ],
        "correct": 0,
        "explanation": "The lambda function f = lambda x: bool(x % 2) returns True if x is odd (x % 2 == 1), and False if x is even (x % 2 == 0).\nf(20) → 20 % 2 = 0 → bool(0) → False\nf(21) → 21 % 2 = 1 → bool(1) → True\nSo the output is:\n\nFalse True"
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nimport functools\nl=[1,2,3,4]\nprint(functools.reduce(lambda x,y:x*y,l))\n```",
        "options": [
            "Error",
            "10",
            "24",
            "No output"
        ],
        "correct": 2,
        "explanation": "The code uses functools.reduce() to multiply all elements in the list l = [1, 2, 3, 4].\nreduce(lambda x, y: x * y, l) computes:\n1 * 2 = 2\n2 * 3 = 6\n6 * 4 = 24\nSo the final result printed is 24."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nl=[1, -2, -3, 4, 5]\ndef f1(x):\n    return x<2\nm1=filter(f1, l)\nprint(list(m1))\n```",
        "options": [
            "[1, 4, 5 ]",
            "Error",
            "[-2, -3]",
            "[1, -2, -3]"
        ],
        "correct": 3,
        "explanation": "The function f1(x) filters values less than 2 from the list l. Since 1, -2, and -3 meet this condition, they are included. The output is [1, -2, -3]."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nl=[-2, 4]\nm=map(lambda x:x*2, l)\nprint(m)\n```",
        "options": [
            "[-4, 16]",
            "Address of m",
            "Error",
            "/ -4 / 16"
        ],
        "correct": 1,
        "explanation": "The map() function returns a map object, which is an iterator. When printed directly without converting it to a list or iterating over it, it displays its memory address (e.g., <map object at 0x…>). To see the values, you’d need to do print(list(m))."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nl=[1, -2, -3, 4, 5]\ndef f1(x):\n    return x<-1\nm1=map(f1, l)\nprint(list(m1))\n```",
        "options": [
            "[False, False, False, False, False]",
            "[False, True, True, False, False]",
            "[True, False, False, True, True]",
            "[True, True, True, True, True]"
        ],
        "correct": 1,
        "explanation": "The function checks if each element is less than -1. Only -2 and -3 satisfy this, so their results are True, while others are False. Hence, the output list is [False, True, True, False, False]."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nl=[1, 2, 3, 4, 5]\nm=map(lambda x:2**x, l)\nprint(list(m))\n```",
        "options": [
            "[1, 4, 9, 16, 25 ]",
            "[2, 4, 8, 16, 32 ]",
            "[1, 0, 1, 0, 1]",
            "Error"
        ],
        "correct": 1,
        "explanation": "The map function applies lambda x: 2**x to each element in list l. So, it calculates powers of 2 for each element: 21, 22, 23, 24, 25, resulting in [2, 4, 8, 16, 32]."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nimport functools\nl=[1, 2, 3, 4, 5]\nm=functools.reduce(lambda x, y:x if x>y else y, l)\nprint(m)\n```",
        "options": [
            "Error",
            "Address of m",
            "1",
            "5"
        ],
        "correct": 3,
        "explanation": "functools.reduce applies the lambda function cumulatively to the items in the list l. The lambda compares two values and returns the greater one. So it effectively finds the maximum value in the list, which is 5."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nl=[n for n in range(5)]\nf=lambda x:bool(x%2)\nprint(f(3), f(1))\nfor i in range(len(l)):\n    if f(l[i]):\n        del l[i]\n        print(i)\n```",
        "options": [
            "/ True True / 1 / 2 / Error",
            "/ False False / 1 / 2",
            "/ True False / 1 / 2 / Error",
            "/ False True / 1 / 2"
        ],
        "correct": 0,
        "explanation": "The code prints True True because both 3 and 1 are odd numbers. It then tries to delete elements from the list while iterating over it using indices, which causes the list size to change and the loop to access an invalid index. This results in an IndexError after printing 1 and 2."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nm=reduce(lambda x: x-3 in range(4, 10))\nprint(list(m))\n```",
        "options": [
            "[1, 2, 3, 4, 5, 6, 7]",
            "No output",
            "[1, 2, 3, 4, 5, 6]",
            "Error"
        ],
        "correct": 3,
        "explanation": "The code results in an error because reduce requires two arguments: a function with two parameters and an iterable. Here, only a lambda with one parameter is given, and no iterable is provided. Also, reduce is not imported, causing a NameError. Hence, the code fails with an error."
    },
    {
        "category": "lists",
        "question": "Which of the following numbers will not be a part of the output list of the following Python code?\n\n```python\ndef sf(a):\n    return a%3!=0 and a%5!=0\nm=filter(sf, range(1, 31))\nprint(list(m))\n```",
        "options": [
            "1",
            "29",
            "16",
            "10"
        ],
        "correct": 3,
        "explanation": "The function sf(a) filters out numbers divisible by 3 or 5. Since 10 is divisible by 5, it gets excluded. The other options (1, 16, 29) are not divisible by 3 or 5, so they are included."
    },
    {
        "category": "lists",
        "question": "The single line equivalent of the following Python code?\n\n```python\nl=[1, 2, 3, 4, 5]\ndef f1(x):\n    return x<0\nm1=filter(f1, l)\nprint(list(m1))\n```",
        "options": [
            "filter(lambda x:x<0, l)",
            "filter(lambda x, y: x<0, l)",
            "filter(reduce x<0, l)",
            "reduce(x: x<0, l)"
        ],
        "correct": 0,
        "explanation": "The code shown above returns a new list containing only those elements from list l, which are less than 0. Since there are no such elements in the list l, the output of this code is: []. The single line equivalent of this code is filter(lambda x:x<0, l)."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(list(map((lambda x:x^2), range(10))))\n```",
        "options": [
            "[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]",
            "Error",
            "[2, 3, 0, 1, 6, 7, 4, 5, 10, 11]",
            "No output"
        ],
        "correct": 2,
        "explanation": "The code uses the ^ operator, which performs a bitwise XOR, not exponentiation. For each element x in the range, it calculates x^2, which results in a different sequence of numbers than expected from squaring. This leads to the output [2, 3, 0, 1, 6, 7, 4, 5, 10, 11] based on the bitwise XOR operation between each number and 2."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(list(map((lambda x:x**2), filter((lambda x:x%2==0), range(10)))))\n```",
        "options": [
            "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]",
            "[0, 4, 16, 36, 64]",
            "Error",
            "No output"
        ],
        "correct": 1,
        "explanation": "The code uses filter() to keep only even numbers from range(10), i.e., [0, 2, 4, 6, 8].\nThen, map() applies the lambda function x**2 to each of these even numbers, producing [0, 4, 16, 36, 64]."
    },
    {
        "category": "lists",
        "question": "The output of the following codes are the same.\n\n```python\nprint([x**2 for x in range(10)])\nprint(list(map((lambda x:x**2), range(10))))\n```",
        "options": [
            "True",
            "False"
        ],
        "correct": 0,
        "explanation": "Both of the codes shown above print each whole number up to 10, raised to the power 2. Hence the output of both of these codes is: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]. Therefore, the statement is true."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nelements = [0, 1, 2]\ndef incr(x):\n    return x+1\nprint(list(map(elements, incr)))\n```",
        "options": [
            "[1, 2, 3]",
            "[0, 1, 2]",
            "error",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The code causes an error because the map() function is used incorrectly. The correct syntax is map(function, iterable), but here elements (a list) is passed as the function, and incr (a function) as the iterable. Since a list isn’t callable, this raises a TypeError."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nelements = [0, 1, 2]\ndef incr(x):\n    return x+1\nprint(list(map(incr, elements)))\n```",
        "options": [
            "[1, 2, 3]",
            "[0, 1, 2]",
            "error",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The function incr(x) returns x + 1. The map() function applies incr to each element of the elements list [0, 1, 2]. This results in the list [1, 2, 3]. Hence, the output is [1, 2, 3]."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nx = ['ab', 'cd']\nprint(list(map(upper, x)))\n```",
        "options": [
            "[‘AB’, ‘CD’]",
            "[‘ab’, ‘cd’]",
            "error",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The function upper is not defined or imported in the code. In Python, strings have a method .upper() (e.g., ‘ab’.upper() returns ‘AB’), but upper by itself is not a built-in function unless explicitly imported or defined. Therefore, trying to use map(upper, x) will result in a NameError at runtime."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\ndef to_upper(k):\n    return k.upper()\nx = ['ab', 'cd']\nprint(list(map(upper, x)))\n```",
        "options": [
            "[‘AB’, ‘CD’]",
            "[‘ab’, ‘cd’]",
            "none of the mentioned",
            "error"
        ],
        "correct": 3,
        "explanation": "The code will result in an error because the function upper is not defined anywhere. Even though to_upper(k) is defined correctly, it is not used in the map() call. Instead, the undefined name upper is passed to map(). This will result in a NameError. The correct way would be:\nprint(list(map(to_upper, x)))"
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\ndef to_upper(k):\n    return k.upper()\nx = ['ab', 'cd']\nprint(list(map(to_upper, x)))\n```",
        "options": [
            "[‘AB’, ‘CD’]",
            "[‘ab’, ‘cd’]",
            "none of the mentioned",
            "error"
        ],
        "correct": 0,
        "explanation": "The function to_upper(k) converts each string in the list to uppercase using k.upper(). The map() function applies to_upper to each element in [‘ab’, ‘cd’], resulting in [‘AB’, ‘CD’]. Hence, the output is uppercase versions of the original strings."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\ndef to_upper(k):\n    k.upper()\nx = ['ab', 'cd']\nprint(list(map(to_upper, x)))\n```",
        "options": [
            "[‘AB’, ‘CD’]",
            "[‘ab’, ‘cd’]",
            "[None, None]",
            "error"
        ],
        "correct": 2,
        "explanation": "In the function to_upper(k), the line k.upper() performs the conversion to uppercase but does not return the result. Since there is no return statement, Python returns None by default. So, when map(to_upper, x) is executed, it applies to_upper to each element, but since to_upper returns None, the result is [None, None]."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nx = ['ab', 'cd']\nprint(map(len, x))\n```",
        "options": [
            "[‘ab’, ‘cd’]",
            "[2, 2]",
            "[‘2’, ‘2’]",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "The code map(len, x) returns a map object, not a list. To see the output, it must be converted using list(map(len, x)). So, as written, it just prints something like <map object at …> — not the actual list."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nx = ['ab', 'cd']\nprint(list(map(len, x)))\n```",
        "options": [
            "[‘ab’, ‘cd’]",
            "[2, 2]",
            "[‘2’, ‘2’]",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "The map(len, x) function applies the len function to each element of the list x = [‘ab’, ‘cd’]. The length of both ‘ab’ and ‘cd’ is 2, so the result is [2, 2]. Wrapping it with list() converts the map object into a list."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = ['ab', 'cd']\nprint(len(map(list, x)))\n```",
        "options": [
            "[2, 2]",
            "2",
            "4",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "In Python, map(list, x) returns a map object, not a list. You cannot directly apply len() to a map object unless it’s first converted to a list. So len(map(list, x)) raises a TypeError."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = ['ab', 'cd']\nprint(len(list(map(list, x))))\n```",
        "options": [
            "2",
            "4",
            "error",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "map(list, x) applies list() to each element of x. Each string like ‘ab’ becomes [‘a’, ‘b’]. Converting the map object to a list gives [[‘a’, ‘b’], [‘c’, ‘d’]] which has length 2. So, len(list(map(list, x))) outputs 2."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = ['ab', 'cd']\nprint(len(list(map(list, x))))))\n```",
        "options": [
            "2",
            "4",
            "error",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The code has a syntax error due to an extra closing parenthesis )))) at the end. Python will raise a SyntaxError when trying to parse the code."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nx = ['ab', 'cd']\nprint(list(map(list, x)))\n```",
        "options": [
            "[‘a’, ‘b’, ‘c’, ‘d’]",
            "[[‘ab’], [‘cd’]]",
            "[[‘a’, ‘b’], [‘c’, ‘d’]]",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "In the given Python code, the map() function is used to apply the list() function to each element of the list x, which contains the strings ‘ab’ and ‘cd’. The list() function, when applied to a string, converts it into a list of its individual characters. As a result, ‘ab’ becomes [‘a’, ‘b’] and ‘cd’ becomes [‘c’, ‘d’]. Therefore, the output of the code is a list of these lists: [[‘a’, ‘b’], [‘c’, ‘d’]]."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = [12, 34]\nprint(len(list(map(len, x))))\n```",
        "options": [
            "2",
            "1",
            "error",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The given code will raise a TypeError. The map() function is attempting to apply len() to each element in the list x, which contains integers (12 and 34). Since len() is only valid for iterable types like strings, lists, etc., using it on integers results in an error."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = [12, 34]\nprint(len(list(map(int, x))))\n```",
        "options": [
            "2",
            "1",
            "error",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The list x = [12, 34] contains integers. The map(int, x) applies the int() function to each element, which has no effect since they are already integers. The list() converts the result to [12, 34]. Finally, len(…) returns the length of the list, which is 2."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = [12, 34]\nprint(len(''.join(list(map(int, x)))))\n```",
        "options": [
            "4",
            "2",
            "error",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The code tries to join integers using ”.join(), which expects a sequence of strings, not integers. Since map(int, x) gives integers, trying to join them with ” results in a TypeError."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = [12, 34]\nprint(len(''.join(list(map(str, x)))))\n```",
        "options": [
            "4",
            "5",
            "6",
            "error"
        ],
        "correct": 0,
        "explanation": "The code converts the integers [12, 34] to strings [’12’, ’34’] using map(str, x), then joins them into a single string ‘1234’. The len() function returns the length of this string, which is 4."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = [12, 34]\nprint(len(' '.join(list(map(int, x)))))\n```",
        "options": [
            "4",
            "5",
            "6",
            "error"
        ],
        "correct": 3,
        "explanation": "The code attempts to use ‘ ‘.join() on a list of integers: list(map(int, x)) gives [12, 34], but join() requires all elements to be strings, not integers. Since you can’t join integers directly, this raises a TypeError."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = [12.1, 34.0]\nprint(len(' '.join(list(map(str, x)))))\n```",
        "options": [
            "6",
            "8",
            "9",
            "error"
        ],
        "correct": 2,
        "explanation": "In the given code, the floating-point numbers in the list [12.1, 34.0] are first converted to strings using map(str, x), resulting in [‘12.1’, ‘34.0’]. These are then joined with a space using ‘ ‘.join(…), forming the string ‘12.1 34.0’. The length of this string is 9 characters, including the space."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = [12.1, 34.0]\nprint(' '.join(list(map(str, x))))\n```",
        "options": [
            "12 1 34 0",
            "12.1 34",
            "121 340",
            "12.1 34.0"
        ],
        "correct": 3,
        "explanation": "In this code, each float in the list x = [12.1, 34.0] is converted to a string using map(str, x), resulting in [‘12.1’, ‘34.0’]. The ‘ ‘.join(…) function then joins these strings with a space, producing the final output ‘12.1 34.0’."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = [[0], [1]]\nprint(len(' '.join(list(map(str, x)))))\n```",
        "options": [
            "2",
            "3",
            "7",
            "8"
        ],
        "correct": 2,
        "explanation": "The code converts each list inside x to a string, resulting in the strings “[0]” and “[1]”. Joining them with a space produces the string “[0] [1]”, which has 7 characters (including the space). Therefore, the output is 7."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = [[0], [1]]\nprint((' '.join(list(map(str, x)))))\n```",
        "options": [
            "(‘[0] [1]’,)",
            "(’01’,)",
            "[0] [1]",
            "01"
        ],
        "correct": 2,
        "explanation": "The code uses map(str, x) to convert each sublist [0] and [1] into their string representations “[0]” and “[1]”. Then ‘ ‘.join() joins these strings with a space, resulting in the output [0] [1]."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = [[0], [1]]\nprint((' '.join(list(map(str, x))),))\n```",
        "options": [
            "(‘[0] [1]’,)",
            "(’01’)",
            "[0] [1]",
            "01"
        ],
        "correct": 0,
        "explanation": "In this code, map(str, x) converts each inner list [0] and [1] into strings: “[0]” and “[1]”. Then ‘ ‘.join(…) creates the string “[0] [1]”. Finally, it is wrapped in a tuple using the comma syntax, resulting in (‘[0] [1]’,).\n👉 Join Sanfoundry classes at Telegram or Youtube"
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = [34, 56]\nprint((''.join(list(map(str, x))),))\n```",
        "options": [
            "3456",
            "(3456)",
            "(‘3456’)",
            "(‘3456’,)"
        ],
        "correct": 3,
        "explanation": "The code converts each integer in the list x = [34, 56] to a string using map(str, x), resulting in [“34”, “56”]. These are then joined into a single string: “3456”. Finally, wrapping this in parentheses with a comma makes it a tuple containing the string: (‘3456’,)."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = [34, 56]\nprint((''.join(list(map(str, x)))),)\n```",
        "options": [
            "3456",
            "(3456)",
            "(‘3456’)",
            "(‘3456’,)"
        ],
        "correct": 0,
        "explanation": "The expression ”.join(list(map(str, x))) converts each integer in the list x = [34, 56] into strings ([“34”, “56”]) and joins them into “3456”. The comma after the print function does not affect the output, as it is outside the parentheses of the print() function. So the final output is 3456."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nx = [34, 56]\nprint(len(map(str, x)))\n```",
        "options": [
            "[34, 56]",
            "[’34’, ’56’]",
            "34 56",
            "error"
        ],
        "correct": 3,
        "explanation": "In Python, map() returns an iterator, not a list. Calling len() on a map object directly raises a TypeError because iterators do not have a predefined length. You must first convert it to a list using list(map(…)) before applying len()."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nx = 'abcd'\nprint(list(map(list, x)))\n```",
        "options": [
            "[‘a’, ‘b’, ‘c’, ‘d’]",
            "[‘abcd’]",
            "[[‘a’], [‘b’], [‘c’], [‘d’]]",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "In this Python code, the string ‘abcd’ is passed to the map() function along with list as the mapping function. The map() applies list() to each character of the string. Since strings are iterable, list(‘a’) becomes [‘a’], and similarly for the other characters. Therefore, the output is a list of lists: [[‘a’], [‘b’], [‘c’], [‘d’]]."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nx = abcd\nprint(list(map(list, x)))\n```",
        "options": [
            "[‘a’, ‘b’, ‘c’, ‘d’]",
            "[‘abcd’]",
            "[[‘a’], [‘b’], [‘c’], [‘d’]]",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "The given code will raise an error because the value abcd is not defined or enclosed in quotes. In Python, string literals must be enclosed in either single (‘abcd’) or double (“abcd”) quotes. Without quotes, Python treats abcd as a variable name, and since it hasn’t been defined, a NameError will be thrown."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nx = 1234\nprint(list(map(list, x)))\n```",
        "options": [
            "[1, 2, 3, 4]",
            "[1234]",
            "[[1], [2], [3], [4]]",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "The given code will result in an error because map(list, x) expects x to be an iterable (like a string, list, etc.), but here x is an integer, which is not iterable. Since integers can’t be directly used with map() in this way, Python will raise a TypeError."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nx = 1234\nprint(list(map(list, [x])))\n```",
        "options": [
            "[1, 2, 3, 4]",
            "[1234]",
            "[[1], [2], [3], [4]]",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "Here, x is an integer (1234), and [x] is a list containing that integer: [1234]. When map(list, [x]) is called, it tries to apply list() to the integer 1234. But integers are not iterable, so this causes a TypeError. Hence, the code will throw an error and not produce any of the listed outputs."
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\nx = 'abcd'\nprint(list(map([], x)))\n```",
        "options": [
            "[‘a’, ‘b’, ‘c’, ‘d’]",
            "[‘abcd’]",
            "[[‘a’], [‘b’], [‘c’], [‘d’]]",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "In map([], x), the first argument to map should be a function, but here it is an empty list [], which is not callable. This will raise a TypeError because Python expects a function to apply to each element of x. Hence, the output is an error and none of the given options match."
    },
    {
        "category": "general",
        "question": "Is Python code compiled or interpreted?",
        "options": [
            "Python code is only compiled",
            "Python code is both compiled and interpreted",
            "Python code is only interpreted",
            "Python code is neither compiled nor interpreted"
        ],
        "correct": 1,
        "explanation": "Python code is both compiled and interpreted. When a Python script is run, it is first compiled into bytecode (.pyc files), which is a lower-level, platform-independent representation of the source code. This bytecode is then interpreted by the Python Virtual Machine (PVM), which executes the instructions line by line. Hence, Python involves a combination of compilation and interpretation."
    },
    {
        "category": "general",
        "question": "Which of these is the definition for packages in Python?",
        "options": [
            "A folder of python modules",
            "A set of programs making use of Python modules",
            "A set of main modules",
            "A number of files containing Python definitions and statements"
        ],
        "correct": 0,
        "explanation": "In Python, a package is defined as a folder containing multiple Python modules, along with a special __init__.py file that indicates the directory is a package. Packages help in organizing related modules into a single directory hierarchy, making the codebase more modular and manageable."
    },
    {
        "category": "general",
        "question": "Which of these is false about a package?",
        "options": [
            "A package can have subfolders and modules",
            "Each import package need not introduce a namespace",
            "import folder.subfolder.mod1 imports packages",
            "from folder.subfolder.mod1 import objects imports packages"
        ],
        "correct": 1,
        "explanation": "In Python, when you import a package, it introduces a namespace, which is crucial for keeping the package’s components organized and avoiding name clashes. Each import ensures that the package or module resides within its namespace, which allows for clear organization and easy access to its components. Therefore, option “Each import package need not introduce a namespace” is incorrect."
    },
    {
        "category": "modules",
        "question": "Which of these definitions correctly describes a module?",
        "options": [
            "Denoted by triple quotes for providing the specification of certain program elements",
            "Design and implementation of specific functionality to be incorporated into a program",
            "Defines the specification of how it is to be used",
            "Any program that reuses code"
        ],
        "correct": 1,
        "explanation": "In Python, a module is essentially a file containing Python definitions and statements, which includes functions, classes, and variables. It is designed to provide specific functionality, which can then be reused across different parts of a program or even in different programs by importing the module."
    },
    {
        "category": "modules",
        "question": "Which of the following is not an advantage of using modules?",
        "options": [
            "Provides a means of reuse of program code",
            "Provides a means of dividing up tasks",
            "Provides a means of reducing the size of the program",
            "Provides a means of testing individual parts of the program"
        ],
        "correct": 2,
        "explanation": "Modules do not reduce the actual size of a program but help organize code better by dividing it into logical components. The main advantages include code reuse, task separation, and easier testing. The size of the overall program may stay the same or even increase slightly due to imports."
    },
    {
        "category": "modules",
        "question": "Program code making use of a given module is called a ______ of the module.",
        "options": [
            "Client",
            "Docstring",
            "Interface",
            "Modularity"
        ],
        "correct": 0,
        "explanation": "In Python, a program that uses functions or classes from a module is called a client of that module. The client interacts with the module through its public interface, using its functionalities without needing to know the internal implementation."
    },
    {
        "category": "strings",
        "question": "______ is a string literal denoted by triple quotes for providing the specifications of certain program elements.",
        "options": [
            "Interface",
            "Modularity",
            "Client",
            "Docstring"
        ],
        "correct": 3,
        "explanation": "A docstring is a string literal enclosed in triple quotes (”’ or “””) used to document modules, functions, classes, or methods in Python. It provides specifications and helps users understand what the program element does."
    },
    {
        "category": "general",
        "question": "Which of the following is true about top-down design process?",
        "options": [
            "The details of a program design are addressed before the overall design",
            "Only the details of the program are addressed",
            "The overall design of the program is addressed before the details",
            "Only the design of the program is addressed"
        ],
        "correct": 2,
        "explanation": "In the top-down design process, the system is broken down from the overall high-level design first, and then progressively into smaller, detailed components. This approach focuses on understanding the big picture before refining the details."
    },
    {
        "category": "modules",
        "question": "In top-down design every module is broken into same number of submodules.",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "In top-down design, modules are broken down into submodules based on the functionality and complexity needed, and not necessarily into the same number of submodules. The division depends on logical separation, not equal partitioning."
    },
    {
        "category": "general",
        "question": "All modular designs are because of a top-down design process.",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "Not all modular designs result from a top-down approach. Modular design can also come from a bottom-up process or other design strategies, where modules are developed independently and then integrated. So, modularity isn’t exclusive to top-down design."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\n#mod1\ndef change(a):\n    b=[x*2 for x in a]\n    print(b)\n#mod2\ndef change(a):\n    b=[x*x for x in a]\n    print(b)\nfrom mod1 import change\nfrom mod2 import change\n#main\ns=[1,2,3]\nchange(s)\n```",
        "options": [
            "[2,4,6]",
            "[1,4,9]",
            "/ [2,4,6] / [1,4,9]",
            "There is a name clash"
        ],
        "correct": 3,
        "explanation": "In the given code, both mod1 and mod2 define a function named change(). When from mod1 import change is followed by from mod2 import change, the second import overrides the first due to the same function name. This causes a name clash, as only one version of change() will be available in the current namespace, leading to confusion or unintended behavior."
    },
    {
        "category": "modules",
        "question": "Which of the following isn’t true about main modules?",
        "options": [
            "When a python file is directly executed, it is considered main module of a program",
            "Main modules may import any number of modules",
            "Special name given to main modules is: __main__",
            "Other main modules can import main modules"
        ],
        "correct": 3,
        "explanation": "In Python, the main module is typically the module that is executed when the program starts. It is identified by the special name __main__. While a main module can import other modules, other main modules should not import the main module. This is because it could create circular dependencies and unintended behavior. Each module that is executed as the main module should be self-contained and not imported by other main modules."
    },
    {
        "category": "general",
        "question": "Which of the following is not a valid namespace?",
        "options": [
            "Global namespace",
            "Public namespace",
            "Built-in namespace",
            "Local namespace"
        ],
        "correct": 1,
        "explanation": "In Python, namespaces are categorized into global, local, and built-in namespaces. The global namespace holds global variables, the built-in namespace contains Python’s built-in functions and exceptions, and the local namespace stores local variables within functions. Public namespace is not a recognized type of namespace in Python, making it the incorrect choice."
    },
    {
        "category": "modules",
        "question": "Which of the following is false about “import modulename” form of import?",
        "options": [
            "The namespace of imported module becomes part of importing module",
            "This form of import prevents name clash",
            "The namespace of imported module becomes available to importing module",
            "The identifiers in module are accessed as: modulename.identifier"
        ],
        "correct": 0,
        "explanation": "In the “import modulename” form of import, the namespace of the imported module becomes available to the importing module, but it doesn’t directly become a part of it. This form of import keeps the namespaces separate, allowing the importing module to access the identifiers of the imported module using the syntax modulename.identifier. By doing this, it prevents name clashes between the identifiers in the two modules."
    },
    {
        "category": "modules",
        "question": "Which of the following is false about “from-import” form of import?",
        "options": [
            "The syntax is: from modulename import identifier",
            "This form of import prevents name clash",
            "The namespace of imported module becomes part of importing module",
            "The identifiers in module are accessed directly as: identifier"
        ],
        "correct": 1,
        "explanation": "In the from-import form, specific identifiers (like functions, classes, or variables) are imported directly into the current namespace. While this allows direct access (e.g., identifier instead of module.identifier), it does not prevent name clashes. If two modules have identifiers with the same name and both are imported using from-import, the later one will overwrite the previous one"
    },
    {
        "category": "modules",
        "question": "Which of the statements about modules is false?",
        "options": [
            "In the “from-import” form of import, identifiers beginning with two underscores are private and aren’t imported",
            "dir() built-in function monitors the items in the namespace of the main module",
            "In the “from-import” form of import, all identifiers regardless of whether they are private or public are imported",
            "When a module is loaded, a compiled version of the module with file extension .pyc is automatically produced"
        ],
        "correct": 2,
        "explanation": "In Python’s “from-import” form, identifiers that start with two underscores are considered private and are not imported by default. Only public identifiers are brought into the current namespace unless specifically stated otherwise. Therefore, it’s incorrect to say that all identifiers, including private ones, are imported automatically."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nfrom math import factorial\nprint(math.factorial(5))\n```",
        "options": [
            "120",
            "Nothing is printed",
            "Error, method factorial doesn’t exist in math module",
            "Error, the statement should be: print(factorial(5))"
        ],
        "correct": 3,
        "explanation": "The code imports factorial directly from the math module, so you should call it as factorial(5), not math.factorial(5). Using math.factorial(5) causes an error because math itself wasn’t imported—only the factorial function was."
    },
    {
        "category": "general",
        "question": "What is the order of namespaces in which Python looks for an identifier?",
        "options": [
            "Python first searches the global namespace, then the local namespace and finally the built-in namespace",
            "Python first searches the local namespace, then the global namespace and finally the built-in namespace",
            "Python first searches the built-in namespace, then the global namespace and finally the local namespace",
            "Python first searches the built-in namespace, then the local namespace and finally the global namespace"
        ],
        "correct": 1,
        "explanation": "When Python encounters an identifier (like a variable or function name), it follows the LEGB rule to resolve it. It first looks in the Local namespace (inside the current function), then in the Enclosing namespace (if it’s a nested function), followed by the Global namespace (top-level of the module), and finally the Built-in namespace (predefined functions like len(), sum(), etc.). So, the correct search order for namespaces is: local → global → built-in."
    },
    {
        "category": "functions",
        "question": "What is returned by math.ceil(3.4)?",
        "options": [
            "3",
            "4",
            "4.0",
            "3.0"
        ],
        "correct": 1,
        "explanation": "math.ceil(3.4) returns the smallest integer greater than or equal to 3.4, which is 4. The ceil() function always rounds a number up to the nearest integer, and it returns the result as an integer, not a float."
    },
    {
        "category": "functions",
        "question": "What is the value returned by math.floor(3.4)?",
        "options": [
            "3",
            "4",
            "4.0",
            "3.0"
        ],
        "correct": 0,
        "explanation": "math.floor(3.4) returns the largest integer less than or equal to 3.4, which is 3. The floor() function always rounds a number down to the nearest integer and returns the result as an integer."
    },
    {
        "category": "builtins",
        "question": "What will be the output of print(math.copysign(3, -1))?",
        "options": [
            "1",
            "1.0",
            "-3",
            "-3.0"
        ],
        "correct": 3,
        "explanation": "math.copysign(3, -1) returns a float value with the magnitude of the first argument (3) and the sign of the second argument (-1). So, the result is -3.0 — the sign of -1 is applied to 3."
    },
    {
        "category": "builtins",
        "question": "What is displayed on executing print(math.fabs(-3.4))?",
        "options": [
            "-3.4",
            "3.4",
            "3",
            "-3"
        ],
        "correct": 1,
        "explanation": "math.fabs(-3.4) returns the absolute value of the number as a float, even if the input is already a float. So, the output is 3.4."
    },
    {
        "category": "functions",
        "question": "Is the output of the function abs() the same as that of the function math.fabs()?",
        "options": [
            "sometimes",
            "always",
            "never",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The built-in abs() function works with integers, floats, and complex numbers, while math.fabs() works only with floats and integers, always returning a float. So, for float or int inputs, both give the same numeric result, but abs() may return an int or float depending on input, while math.fabs() always returns a float. Hence, the outputs are the same only sometimes."
    },
    {
        "category": "functions",
        "question": "What is the value returned by math.fact(6)?",
        "options": [
            "720",
            "6",
            "[1, 2, 3, 6]",
            "error"
        ],
        "correct": 3,
        "explanation": "There is no function named math.fact() in the Python math module. The correct function for computing factorials is math.factorial(). Therefore, calling math.fact(6) will raise an AttributeError, resulting in an error."
    },
    {
        "category": "control",
        "question": "What is the value of x if x = math.factorial(0)?",
        "options": [
            "0",
            "1",
            "error",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "The factorial of 0 is defined as 1 in mathematics. So, math.factorial(0) in Python returns 1, not an error or 0."
    },
    {
        "category": "modules",
        "question": "What is math.factorial(4.0)?",
        "options": [
            "24",
            "1",
            "error",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The math.factorial() function in Python only accepts integers as its argument. Passing a float, like 4.0, will raise a ValueError. Even though 4.0 is mathematically equivalent to an integer, it is still treated as a float in Python."
    },
    {
        "category": "builtins",
        "question": "What will be the output of print(math.factorial(4.5))?",
        "options": [
            "24",
            "120",
            "error",
            "24.0"
        ],
        "correct": 2,
        "explanation": "The math.factorial() function only works with non-negative integers. Since 4.5 is a float, calling math.factorial(4.5) raises a ValueError. Factorials are undefined for non-integer values in this context."
    },
    {
        "category": "modules",
        "question": "What is math.floor(0o10)?",
        "options": [
            "8",
            "10",
            "0",
            "9"
        ],
        "correct": 0,
        "explanation": "0o10 is the octal (base-8) representation of the number 8 in decimal. The math.floor() function returns the greatest integer less than or equal to the number, and since 8 is already an integer, math.floor(0o10) returns 8."
    },
    {
        "category": "functions",
        "question": "What does the function math.frexp(x) return?",
        "options": [
            "a tuple containing the mantissa and the exponent of x",
            "a list containing the mantissa and the exponent of x",
            "a tuple containing the mantissa of x",
            "a list containing the exponent of x"
        ],
        "correct": 0,
        "explanation": "The function math.frexp(x) breaks down the floating-point number x into its mantissa and exponent, returning them as a tuple (mantissa, exponent) such that x = mantissa * 2**exponent and the mantissa is a float in the range [0.5, 1)."
    },
    {
        "category": "operators",
        "question": "What is the result of math.fsum([.1 for i in range(20)])?",
        "options": [
            "2.0",
            "20",
            "2",
            "2.0000000000000004"
        ],
        "correct": 0,
        "explanation": "The function math.fsum() accurately sums floating-point numbers by minimizing precision errors. The list [0.1 for i in range(20)] contains twenty 0.1 values, and using math.fsum() returns the exact result 2.0. This is more precise than using the built-in sum() function."
    },
    {
        "category": "operators",
        "question": "What is the result of sum([.1 for i in range(20)]) in Python?",
        "options": [
            "2.0",
            "20",
            "2",
            "2.0000000000000004"
        ],
        "correct": 3,
        "explanation": "The expression sum([.1 for i in range(20)]) adds the float value 0.1 twenty times. While mathematically this should equal 2.0, Python (like most programming languages) uses binary floating-point representation, which cannot exactly represent 0.1. This leads to a small rounding error, resulting in 2.0000000000000004. To avoid such inaccuracies, Python provides math.fsum() for better precision with floats."
    },
    {
        "category": "functions",
        "question": "What is returned by math.isfinite(float(‘inf’))?",
        "options": [
            "True",
            "False",
            "None",
            "error"
        ],
        "correct": 1,
        "explanation": "The math.isfinite() function checks whether a number is finite (i.e., not infinity or NaN). float(‘inf’) represents positive infinity, which is not finite, so math.isfinite(float(‘inf’)) returns False."
    },
    {
        "category": "functions",
        "question": "What is returned by math.isfinite(float(‘nan’))?",
        "options": [
            "True",
            "False",
            "None",
            "error"
        ],
        "correct": 1,
        "explanation": "The function math.isfinite(x) returns True if x is a finite number, and False if x is infinity or NaN (Not a Number). When you use float(‘nan’), it creates a NaN value, which is not considered finite. Therefore, math.isfinite(float(‘nan’)) returns False."
    },
    {
        "category": "control",
        "question": "What is x if x = math.isfinite(float(‘0.0’))?",
        "options": [
            "True",
            "False",
            "None",
            "error"
        ],
        "correct": 0,
        "explanation": "math.isfinite(float(‘0.0’)) checks if the number 0.0 is finite. Since 0.0 is a valid finite floating-point number, the function returns True."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(-float('inf') + float('inf'))\n```",
        "options": [
            "inf",
            "nan",
            "0",
            "0.0"
        ],
        "correct": 1,
        "explanation": "In Python, adding -float(‘inf’) and float(‘inf’) results in an undefined operation (negative infinity plus positive infinity). This produces NaN (Not a Number), indicating an undefined or unrepresentable result in floating-point arithmetic."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(math.isinf(float('-inf')))\n```",
        "options": [
            "error, the minus sign shouldn’t have been inside the brackets",
            "error, there is no function called isinf",
            "True",
            "False"
        ],
        "correct": 2,
        "explanation": "The function math.isinf() checks whether the given number is positive or negative infinity. Since float(‘-inf’) represents negative infinity, math.isinf(float(‘-inf’)) returns True."
    },
    {
        "category": "control",
        "question": "What is the value of x if x = math.ldexp(0.5, 1)?",
        "options": [
            "1",
            "2.0",
            "0.5",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "The value returned by ldexp(x, y) is x * (2 ** y). In the current case x is 1.0."
    },
    {
        "category": "functions",
        "question": "What is returned by math.modf(1.0)?",
        "options": [
            "(0.0, 1.0)",
            "(1.0, 0.0)",
            "(0.5, 1)",
            "(0.5, 1.0)"
        ],
        "correct": 0,
        "explanation": "The math.modf(x) function splits a floating-point number into its fractional and integer parts, both returned as floats. For x = 1.0, it returns (0.0, 1.0) — where 0.0 is the fractional part and 1.0 is the integer part."
    },
    {
        "category": "operators",
        "question": "What is the result of math.trunc(3.1)?",
        "options": [
            "3.0",
            "3",
            "0.1",
            "1"
        ],
        "correct": 1,
        "explanation": "The math.trunc(x) function returns the integer part of a number by truncating (removing) the fractional part, without rounding. So, math.trunc(3.1) returns 3, not 3.0."
    },
    {
        "category": "builtins",
        "question": "What is the output of print(math.trunc(‘3.1’))?",
        "options": [
            "3",
            "3.0",
            "error",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The output is an error because math.trunc() expects a numeric type (like int or float), but ‘3.1’ is a string. Python raises a TypeError when trying to apply math.trunc() to a string, even if it looks like a number."
    },
    {
        "category": "modules",
        "question": "Which of the following is the same as math.exp(p)?",
        "options": [
            "e ** p",
            "math.e ** p",
            "p ** e",
            "p ** math.e"
        ],
        "correct": 1,
        "explanation": "The function math.exp(p) returns the value of e raised to the power p (i.e., e^p), where e is Euler’s number (~2.718). This is equivalent to math.e ** p in Python."
    },
    {
        "category": "functions",
        "question": "What is returned by math.expm1(p)?",
        "options": [
            "(math.e ** p) – 1",
            "math.e ** (p – 1)",
            "error",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The function math.expm1(p) returns the value of (e^p) – 1, where e is the base of natural logarithms. This function is more accurate for very small values of p than computing math.exp(p) – 1 directly."
    },
    {
        "category": "modules",
        "question": "What is the default base used when math.log(x) is found?",
        "options": [
            "e",
            "10",
            "2",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The math.log(x) function in Python computes the natural logarithm of x, which means it uses base e (Euler’s number, approximately 2.718). If you want to specify a different base, you can use math.log(x, base)."
    },
    {
        "category": "modules",
        "question": "Which of the following aren’t defined in the math module?",
        "options": [
            "log2()",
            "log10()",
            "logx()",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The math module in Python provides logarithmic functions like math.log2() (log base 2), math.log10() (log base 10), and math.log() (natural log or log with custom base). However, there is no function named logx() in the module. Hence, logx() is not defined in the math module."
    },
    {
        "category": "functions",
        "question": "What is returned by int(math.pow(3, 2))?",
        "options": [
            "6",
            "9",
            "error, third argument required",
            "error, too many arguments"
        ],
        "correct": 1,
        "explanation": "The math.pow(3, 2) function returns the result of 3 raised to the power of 2, which is 9.0 (a float). Wrapping it with int() converts it to an integer, so the final result is 9."
    },
    {
        "category": "builtins",
        "question": "What is output of print(math.pow(3, 2))?",
        "options": [
            "9",
            "9.0",
            "None",
            "None of the mentioned"
        ],
        "correct": 1,
        "explanation": "The function math.pow(3, 2) calculates 3 raised to the power of 2 and always returns a floating-point number. So the output is 9.0, not the integer 9."
    },
    {
        "category": "control",
        "question": "What is the value of x if x = math.sqrt(4)?",
        "options": [
            "2",
            "2.0",
            "(2, -2)",
            "(2.0, -2.0)"
        ],
        "correct": 1,
        "explanation": "The math.sqrt() function returns the square root of a number as a float. So, math.sqrt(4) returns 2.0, not the integer 2. It also does not return negative roots or tuples."
    },
    {
        "category": "modules",
        "question": "What does math.sqrt(X, Y) do?",
        "options": [
            "calculate the Xth root of Y",
            "calculate the Yth root of X",
            "error",
            "return a tuple with the square root of X and Y"
        ],
        "correct": 2,
        "explanation": "The math.sqrt() function in Python takes only one argument, which must be a non-negative number. Passing two arguments like math.sqrt(X, Y) results in a TypeError. Therefore, it raises an error.\n. What will be the output of the following Python code?\n\nimport datetime\nd=datetime.date(2016,7,24)\nprint(d)\na) Error\nb) 2016-07-24\nc) 2017-7-24\nd) 24-7-2017"
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nimport datetime\nd=datetime.date(2017,06,18)\nprint(d)\n```",
        "options": [
            "Error",
            "2017-06-18",
            "18-06-2017",
            "06-18-2017"
        ],
        "correct": 0,
        "explanation": "In Python, leading zeros in integer literals are not allowed (unless specifying an octal number using 0o prefix). Writing 06 is treated as a syntax error in Python 3. So, datetime.date(2017, 06, 18) raises a SyntaxError."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code if the system date is 18th August, 2016?\n\n```python\nimport datetime\ntday=datetime.date.today()\nprint(tday.month)\n```",
        "options": [
            "August",
            "Aug",
            "08",
            "18"
        ],
        "correct": 2,
        "explanation": "The tday object is a date object representing the current date. When tday.month is printed, it returns the month as an integer, not a string. If the system date is 18th August 2016, tday.month will return 8 (which is 08 if formatted), hence the correct answer should be 08."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code if the system date is 18th June, 2017 (Sunday)?\n\n```python\nimport datetime\ntday=datetime.date.today()\nprint(tday)\n```",
        "options": [
            "18-06-2017",
            "06-18-2017",
            "2017-06-18",
            "Error"
        ],
        "correct": 2,
        "explanation": "The datetime.date.today() function returns the current local date in the format YYYY-MM-DD. So if the system date is 18th June 2017, the output will be 2017-06-18."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code if the system date is 18th June, 2017 (Sunday)?\n\n```python\nimport datetime\ntday=datetime.date.today()\nprint(tday.weekday())\n```",
        "options": [
            "6",
            "1",
            "0",
            "7"
        ],
        "correct": 0,
        "explanation": "The method tday.weekday() returns the day of the week as an integer, where Monday is 0 and Sunday is 6. So, if the date is 18th June 2017 (which was a Sunday), tday.weekday() will return 6."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code if the system date is 21st June, 2017 (Wednesday)?\n\n```python\nimport datetime\ntday=datetime.date.today()\nprint(tday.isoweekday())\n```",
        "options": [
            "Wed",
            "Wednesday",
            "2",
            "3"
        ],
        "correct": 3,
        "explanation": "The isoweekday() method returns the day of the week as an integer where Monday is 1 and Sunday is 7. Since 21st June 2017 was a Wednesday, the output will be 3."
    },
    {
        "category": "control",
        "question": "Point out the error (if any) in the code shown below if the system date is 18th June, 2017?\n\n```python\nimport datetime\ntday=datetime.date.today()\nbday=datetime.date(2017,9,18)\ntill_bday=bday-tday\nprint(till_bday)\n```",
        "options": [
            "3 months, 0:00:00",
            "90 days, 0:00:00",
            "3 months 2 days, 0:00:00",
            "92 days, 0:00:00"
        ],
        "correct": 3,
        "explanation": "The code subtracts two datetime.date objects — bday (18 Sept 2017) and tday (18 June 2017). This returns a timedelta object representing the number of days between the two dates.\nFrom June 18 to September 18 is exactly 92 days, so the result is 92 days, 0:00:00."
    },
    {
        "category": "control",
        "question": "The value returned when we use the function isoweekday() is ______ and that for the function weekday() is ________ if the system date is 19th June, 2017 (Monday).",
        "options": [
            "0,0",
            "0,1",
            "1,0",
            "1,1"
        ],
        "correct": 2,
        "explanation": "The function isoweekday() returns 1 for Monday, representing Monday as the first day of the week. The weekday() function returns 0 for Monday, where Monday is counted as day zero. Hence, for 19th June 2017 (Monday), the returned values are 1 and 0 respectively."
    },
    {
        "category": "control",
        "question": "Which of the following will throw an error if used after the following Python code?\n\n```python\nimport datetime\ntday=datetime.date.today()\nbday=datetime.date(2017,9,18)\nt_day=bday-tday\n```",
        "options": [
            "print(t_day.seconds)",
            "print(t_day.months)",
            "print(t_day.max)",
            "print(t_day.resolution)"
        ],
        "correct": 1,
        "explanation": "The expression print(t_day.months) will throw an error because datetime.timedelta objects (like t_day) do not have a months attribute. They represent the difference between two dates in terms of days and seconds, not calendar months. Other attributes like seconds, max, and resolution are valid."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code if the system date is: 6/19/2017\n\n```python\nimport datetime\ntday=datetime.date.today()\ntdelta=datetime.timedelta(days=10)\nprint(tday+tdelta)\n```",
        "options": [
            "2017-16-19",
            "2017-06-9",
            "2017-06-29",
            "Error"
        ],
        "correct": 2,
        "explanation": "The code adds a timedelta of 10 days to the current date (19th June 2017). So, adding 10 days to 19th June results in 29th June 2017, which is displayed in the YYYY-MM-DD format as 2017-06-29."
    },
    {
        "category": "builtins",
        "question": "The output of both of the print statements is the same.\n\n```python\nimport datetime\ndt_1 = datetime.datetime.today()\ndt_2 = datetime.datetime.now()\nprint(dt_1)\nprint(dt_2)\n```",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "Although both datetime.datetime.today() and datetime.datetime.now() return the current local date and time, they are not guaranteed to return exactly the same value down to the microsecond, since there’s a very tiny time difference between the two function calls. Hence, their outputs will typically differ slightly, making the answer False."
    },
    {
        "category": "functions",
        "question": "Which of the following functions can be used to find the coordinated universal time, assuming that the datetime module has already been imported?",
        "options": [
            "datetime.utc()",
            "datetime.datetime.utc()",
            "datetime.utcnow()",
            "datetime.datetime.utcnow()"
        ],
        "correct": 3,
        "explanation": "To get the current Coordinated Universal Time (UTC), you use the utcnow() function from the datetime class within the datetime module. So the full call is datetime.datetime.utcnow()."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nimport time\nprint(time.asctime())\n```",
        "options": [
            "The number of hours passed since 1st January, 1970",
            "The number of days passed since 1st January, 1970",
            "The number of seconds passed since 1st January, 1970",
            "The number of minutes passed since 1st January, 1970"
        ],
        "correct": 2,
        "explanation": "The time.time() function returns the current time as the number of seconds (including fractions of a second) since the Unix epoch, which is January 1, 1970, 00:00:00 UTC."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code, if the time module has already been imported?\n\n```python\ndef num(m):\n\tt1 = time.time()\n\tfor i in range(0,m):\n\t\tprint(i)\n\tt2 = time.time()\n\tprint(str(t2-t1))\n \n    num(3)\n```",
        "options": [
            "/ 0 / 1 / 2 / The time taken for the execution of the code",
            "/ 2 / The time taken for the execution of the code",
            "/ 0 / 1 / 2 / UTC time",
            "/ 2 / UTC time"
        ],
        "correct": 0,
        "explanation": "The function num(m) prints numbers from 0 to m-1. It also calculates the time taken to execute the loop using time.time(), which returns the current time in seconds since the Unix epoch. The difference t2 – t1 gives the duration of the loop execution in seconds. Thus, the code prints 0, 1, 2, followed by the execution time."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nimport time\nprint(time.asctime())\n```",
        "options": [
            "Current date only",
            "UTC time",
            "Current date and time",
            "Current time only"
        ],
        "correct": 2,
        "explanation": "The function time.asctime() returns a string representing the current local time in the format: ‘Day Mon DD HH:MM:SS YYYY’. This includes both the date and time components, hence the output is the current date and time."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nimport time\nt=(2010, 9, 20, 8, 15, 12, 6)\nprint(time.asctime(t))\n```",
        "options": [
            "‘20 Sep 2010 8:15:12 Sun’",
            "‘2010 20 Sept 08:15:12 Sun’",
            "‘Sun Sept 20 8:15:12 2010’",
            "Error"
        ],
        "correct": 3,
        "explanation": "The time.asctime() function expects a time tuple with exactly 9 elements, but the given tuple has only 7. This causes Python to raise a TypeError due to the missing fields like yearday and dst. Therefore, the function call results in an error."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nimport time\nt=(2010, 9, 20, 8, 45, 12, 6, 0, 0)\nprint(time.asctime(t))\n```",
        "options": [
            "‘Sep 20 2010 08:45:12 Sun’",
            "‘Sun Sep 20 08:45:12 2010’",
            "’20 Sep 08:45:12 Sun 2010’",
            "‘2010 20 Sep 08:45:12 Sun’"
        ],
        "correct": 1,
        "explanation": "The time.asctime(t) function converts a 9-element time tuple into a readable string format: ‘Weekday Month Day HH:MM:SS Year’.\nIn the given tuple:\n\nt = (2010, 9, 20, 8, 45, 12, 6, 0, 0)\nYear: 2010\nMonth: 9 (September)\nDay: 20\nHour: 8\nMinute: 45\nSecond: 12\nWeekday: 6 (Sunday)\nSo, time.asctime(t) returns: ‘Sun Sep 20 08:45:12 2010’."
    },
    {
        "category": "functions",
        "question": "The sleep function (under the time module) is used to ___________",
        "options": [
            "Pause the code for the specified number of seconds",
            "Return the specified number of seconds, in terms of milliseconds",
            "Stop the execution of the code",
            "Return the output of the code had it been executed earlier by the specified number of seconds"
        ],
        "correct": 0,
        "explanation": "The sleep function (under the time module) is used to pause the code for the specified number of seconds. The number of seconds is taken as an argument by this function."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nimport time\nfor i in range(0,5):\n\tprint(i)\n\ttime.sleep(2)\n```",
        "options": [
            "After an interval of 2 seconds, the numbers 1, 2, 3, 4, 5 are printed all together",
            "After an interval of 2 seconds, the numbers 0, 1, 2, 3, 4 are printed all together",
            "Prints the numbers 1, 2, 3, 4, 5 at an interval of 2 seconds between each number",
            "Prints the numbers 0, 1, 2, 3, 4 at an interval of 2 seconds between each number"
        ],
        "correct": 3,
        "explanation": "The time.sleep(2) function pauses execution for 2 seconds during each iteration of the loop. Since the range(0,5) generates values 0 to 4, each number is printed with a 2-second delay between them."
    },
    {
        "category": "control",
        "question": "What will be the output if we try to extract only the year from the following Python code? (time.struct_time(tm_year=2017, tm_mon=6, tm_mday=25, tm_hour=18, tm_min=26, tm_sec=6, tm_wday=6, tm_yday=176, tm_isdst=0))\n\n```python\nimport time\nt=time.localtime()\nprint(t)\n```",
        "options": [
            "t[1]",
            "tm_year",
            "t[0]",
            "t_year"
        ],
        "correct": 2,
        "explanation": "The time.localtime() function returns a time.struct_time object, which is a tuple-like object. To extract the year, you can use index 0 (i.e., t[0]), since the structure follows the order: (tm_year, tm_mon, tm_mday, …). Therefore, t[0] correctly gives the year, which is 2017 in this case."
    },
    {
        "category": "operators",
        "question": "State whether true or false.\n\n```python\nimport time\ns = time.time()\nt = time.time()\nprint(s == t)\n```",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "The time.time() function returns the current time in seconds as a floating-point number. Since there’s a very small delay between the two calls (s = time.time() and t = time.time()), the values of s and t will not be exactly equal, even if the difference is minimal. Thus, s == t evaluates to False."
    },
    {
        "category": "functions",
        "question": "To include the use of functions which are present in the random library, we must use the option:",
        "options": [
            "import random",
            "random.h",
            "import.random",
            "random.random"
        ],
        "correct": 0,
        "explanation": "To use functions from the random library in Python, you need to import the module first with the statement import random. This allows you to access its functions like random.random() or random.randint()."
    },
    {
        "category": "builtins",
        "question": "The output of the following Python code is either 1 or 2.\n\n```python\nimport random\nprint(random.randint(1,2))\n```",
        "options": [
            "True",
            "False"
        ],
        "correct": 0,
        "explanation": "The function random.randint(a, b) returns a random integer N such that a ≤ N ≤ b. So, random.randint(1, 2) will randomly return either 1 or 2 — both inclusive. Hence, the output is either 1 or 2, making the statement True."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nimport random\nprint(random.choice(2,3,4))\n```",
        "options": [
            "An integer other than 2, 3 and 4",
            "Either 2, 3 or 4",
            "Error",
            "3 only"
        ],
        "correct": 2,
        "explanation": "The random.choice() function expects a single sequence (like a list or tuple) as its argument, not multiple separate values. Passing random.choice(2,3,4) raises a TypeError because it receives multiple arguments instead of one iterable. The correct usage would be random.choice([2, 3, 4])."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nimport random\nprint(random.choice([10.4, 56.99, 76]))\n```",
        "options": [
            "Error",
            "Either 10.4, 56.99 or 76",
            "Any number other than 10.4, 56.99 and 76",
            "56.99 only"
        ],
        "correct": 1,
        "explanation": "The function random.choice(sequence) returns a random element from the given sequence. In this case, the list [10.4, 56.99, 76] contains three elements. So, random.choice([10.4, 56.99, 76]) will randomly return either 10.4, 56.99, or 76."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python function (random module has already been imported)?\n\n```python\nimport random\nprint(random.choice('sun'))\n```",
        "options": [
            "sun",
            "u",
            "either s, u or n",
            "error"
        ],
        "correct": 2,
        "explanation": "The random.choice() function selects a random element from a sequence (like a list, tuple, or string). In this case, ‘sun’ is a string, and strings are sequences of characters. So random.choice(‘sun’) will return one of the characters: ‘s’, ‘u’, or ‘n’."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python function, assuming that the random module has already been imported?\n\n```python\nimport random\nprint(random.uniform(3,4))\n```",
        "options": [
            "Error",
            "Either 3 or 4",
            "Any integer other than 3 and 4",
            "Any decimal value between 3 and 4"
        ],
        "correct": 3,
        "explanation": "The function random.uniform(a, b) returns a random floating-point number N such that a ≤ N ≤ b. So, random.uniform(3, 4) will generate a random decimal value between 3 and 4, such as 3.274 or 3.987."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python function if the random module has already been imported?\n\n```python\nimport random\nprint(random.randint(3.5,7))\n```",
        "options": [
            "Error",
            "Any integer between 3.5 and 7, including 7",
            "Any integer between 3.5 and 7, excluding 7",
            "The integer closest to the mean of 3.5 and 7"
        ],
        "correct": 0,
        "explanation": "The function random.randint(a, b) requires both a and b to be integers. If you pass a float like 3.5 as an argument, Python will raise a TypeError. So, random.randint(3.5, 7) is invalid, and the code will result in an error."
    },
    {
        "category": "lists",
        "question": "Which of the following functions helps us to randomize the items of a list?",
        "options": [
            "seed",
            "randomise",
            "shuffle",
            "uniform"
        ],
        "correct": 2,
        "explanation": "The random.shuffle() function randomly rearranges the elements of a list in place. It’s the standard way to mix up items in a list, such as shuffling cards. Functions like seed, randomise, and uniform don’t perform this task."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nimport random\n \nrandom.seed(3)\nprint(random.randint(1, 5))\n \nrandom.seed(3)\nprint(random.randint(1, 5))\n```",
        "options": [
            "3",
            "2",
            "Any integer between 1 and 5, including 1 and 5",
            "Any integer between 1 and 5, excluding 1 and 5"
        ],
        "correct": 1,
        "explanation": "The random.seed() function initializes the random number generator with a fixed seed value, making the random output deterministic (i.e., repeatable).\nIn the code:\n\nrandom.seed(3)\nrandom.randint(1,5)  # Returns 2\nrandom.seed(3)\nrandom.randint(1,5)  # Also returns 2\nSince the seed is the same (3), the output of random.randint(1, 5) is reproducible and will always return 2. Therefore, the correct answer is 2."
    },
    {
        "category": "functions",
        "question": "What is the interval of the value generated by the function random.random(), assuming that the random module has already been imported?",
        "options": [
            "(0,1)",
            "(0,1]",
            "[0,1]",
            "[0,1)"
        ],
        "correct": 3,
        "explanation": "The function random.random() generates a floating-point number greater than or equal to 0 and less than 1. This means it can return 0 but will never return 1, so the interval is [0, 1)."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nimport random\nprint(random.randrange(0,91,5))\n```",
        "options": [
            "10",
            "18",
            "79",
            "95"
        ],
        "correct": 0,
        "explanation": "The random.randrange(0, 91, 5) function picks a random number from 0 up to 90 (91 excluded) in steps of 5. So, possible values are 0, 5, 10, …, 90. Among the options given, only 10 fits this pattern, making it the correct output."
    },
    {
        "category": "functions",
        "question": "Both the functions randint and uniform accept ____________ parameters.",
        "options": [
            "0",
            "1",
            "3",
            "2"
        ],
        "correct": 3,
        "explanation": "Both functions belong to the random module and require two arguments to specify the range from which the random value is selected. For example, random.randint(a, b) returns an integer between a and b (inclusive), and random.uniform(a, b) returns a floating-point number between a and b."
    },
    {
        "category": "functions",
        "question": "The randrange function returns only an integer value.",
        "options": [
            "True",
            "False"
        ],
        "correct": 0,
        "explanation": "The random.randrange() function returns a randomly selected integer from the specified range. It does not return floating-point numbers."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nimport random\nprint(random.randrange(1,100,10))\n```",
        "options": [
            "32",
            "67",
            "91",
            "80"
        ],
        "correct": 2,
        "explanation": "The output of this function can be any value which is a multiple of 10, plus 1. Hence a value like 11, 21, 31, 41…91 can be the output. Also, the value should necessarily be between 1 and 100. The only option which satisfies this criteria is 91."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python function, assuming that the random library has already been included?\n\n```python\nimport random\nprint(random.shuffle[1,2,24])\n```",
        "options": [
            "Randomized list containing the same numbers in any order",
            "The same list, that is [1,2,24]",
            "A list containing any random numbers between 1 and 24",
            "Error"
        ],
        "correct": 3,
        "explanation": "The function shown above will result in an error because this is the incorrect syntax for the usage of the function shuffle(). The list should be previously declared and then passed to this function to get an output.\nAn example of the correct syntax:\nl=['a','b','c','d']\nrandom.shuffle(l)\nprint(l)"
    },
    {
        "category": "functions",
        "question": "What the does random.seed(3) return?",
        "options": [
            "True",
            "None",
            "3",
            "1"
        ],
        "correct": 1,
        "explanation": "The function random.seed(3) is used to initialize the random number generator with a fixed seed value (in this case, 3) to produce reproducible results. However, it does not return any value — it only affects the internal state of the generator. Therefore, it returns None."
    },
    {
        "category": "control",
        "question": "Which of the following cannot be returned by random.randrange(4)?",
        "options": [
            "0",
            "3",
            "2.3",
            "1"
        ],
        "correct": 2,
        "explanation": "The function random.randrange(4) returns a random integer from the range 0 to 3 (i.e., from 0 up to but not including 4). It cannot return floating-point numbers like 2.3. So, 2.3 is not a valid output."
    },
    {
        "category": "control",
        "question": "Which of the following is equivalent to random.randrange(3)?",
        "options": [
            "range(3)",
            "random.choice(range(0, 3))",
            "random.shuffle(range(3))",
            "random.select(range(3))"
        ],
        "correct": 1,
        "explanation": "random.randrange(3) returns a random integer from 0 up to (but not including) 3 — i.e., 0, 1, or 2. This is equivalent to first creating the range range(0, 3) and then picking a random value from it using random.choice(). Hence, random.choice(range(0, 3)) gives the same result."
    },
    {
        "category": "functions",
        "question": "The function random.randint(4) can return only one of the following values. Which?",
        "options": [
            "4",
            "3.4",
            "error",
            "5"
        ],
        "correct": 2,
        "explanation": "The function random.randint() requires two integer arguments: a lower and an upper bound. Calling random.randint(4) with only one argument results in a TypeError because Python doesn’t know the range to choose from."
    },
    {
        "category": "builtins",
        "question": "Which of the following is equivalent to random.randint(3, 6)?",
        "options": [
            "random.choice([3, 6])",
            "random.randrange(3, 6)",
            "3 + random.randrange(3)",
            "3 + random.randrange(4)"
        ],
        "correct": 3,
        "explanation": "random.randint(3, 6) returns a random integer between 3 and 6, inclusive (i.e., 3, 4, 5, or 6). To achieve the same result using random.randrange, you can generate a number from 0 to 3 (using random.randrange(4)) and add 3 to it. This gives you values in the range 3 + 0 to 3 + 3, i.e., 3 to 6 — which is equivalent to random.randint(3, 6)."
    },
    {
        "category": "functions",
        "question": "Which of the following will not be returned by random.choice(“1 ,”)?",
        "options": [
            "1",
            "(space)",
            ",",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "The function random.choice(“1 ,”) selects a random character from the string “1 ,”, which contains three characterss: ‘1’, ‘ ‘, and ‘,’. All of the options — 1, space, and comma — are valid characters in the string, so none of them are excluded from being returned."
    },
    {
        "category": "builtins",
        "question": "Which of the following will never be displayed on executing print(random.choice({0: 1, 2: 3}))?",
        "options": [
            "0",
            "1",
            "error",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The function random.choice() requires a sequence like a list or string, but a dictionary is not a sequence. Passing a dictionary directly, as in random.choice({0: 1, 2: 3}), raises a TypeError. Therefore, no key or value like 0 will be displayed, and the function won’t work as written."
    },
    {
        "category": "modules",
        "question": "What does random.shuffle(x) do when x = [1, 2, 3]?",
        "options": [
            "error",
            "do nothing, it is a placeholder for a function that is yet to be implemented",
            "shuffle the elements of the list in-place",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "random.shuffle(x) randomly rearranges the elements of the list x in-place, meaning it modifies the original list without returning a new one. For example, [1, 2, 3] may become [3, 1, 2]."
    },
    {
        "category": "modules",
        "question": "Which type of elements are accepted by random.shuffle()?",
        "options": [
            "strings",
            "lists",
            "tuples",
            "integers"
        ],
        "correct": 1,
        "explanation": "random.shuffle() requires a mutable sequence. Lists are mutable and are accepted. Strings and tuples are immutable and will cause a TypeError."
    },
    {
        "category": "functions",
        "question": "What is the range of values that random.random() can return?",
        "options": [
            "[0.0, 1.0]",
            "(0.0, 1.0]",
            "(0.0, 1.0)",
            "[0.0, 1.0)"
        ],
        "correct": 3,
        "explanation": "The function random.random() returns a floating-point number in the range [0.0, 1.0) — including 0.0 but excluding 1.0. It is used to generate random numbers for simulations and probabilistic models."
    },
    {
        "category": "functions",
        "question": "Which of the following functions can help us to find the version of python that we are currently working on?",
        "options": [
            "sys.version",
            "sys.version()",
            "sys.version(0)",
            "sys.version(1)"
        ],
        "correct": 0,
        "explanation": "The sys.version attribute (not a function) returns a string containing information about the Python version currently in use. For example, it might return something like “3.11.4 (main, …) …”. Since it’s an attribute, no parentheses are used."
    },
    {
        "category": "functions",
        "question": "Which of the following functions is not defined under the sys module?",
        "options": [
            "sys.platform",
            "sys.path",
            "sys.readline",
            "sys.argv"
        ],
        "correct": 2,
        "explanation": "The sys module provides functions and attributes like sys.platform, sys.path, and sys.argv, which are commonly used for platform identification, module search paths, and command-line arguments. However, sys.readline is not part of the sys module — it does not exist. Reading input is handled by functions like input() or sys.stdin.readline(), not sys.readline."
    },
    {
        "category": "strings",
        "question": "The output of the functions len(“abc”) and sys.getsizeof(“abc”) will be the same.",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "The output of len(“abc”) and sys.getsizeof(“abc”) will not be the same. The len() function returns the number of characters in the string, which in this case is 3. On the other hand, sys.getsizeof() returns the total memory size in bytes that the string object occupies in memory, including additional overhead for managing the object. Because of this, the value returned by sys.getsizeof() is usually much larger than the character count, so the two outputs differ significantly."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code, if the code is run on Windows operating system?\n\n```python\nimport sys\nif sys.platform[:2]== 'wi':\n\tprint(\"Hello\")\n```",
        "options": [
            "Error",
            "Hello",
            "No output",
            "Junk value"
        ],
        "correct": 1,
        "explanation": "On Windows, sys.platform typically returns a string starting with ‘win’ (like ‘win32’). Since the code checks if the first two characters sys.platform[:2] equal ‘wi’, the condition is true on Windows, so it prints “Hello”."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code, if the sys module has already been imported? sys.stdout.write(\"hello world\")",
        "options": [
            "helloworld",
            "hello world10",
            "hello world11",
            "error"
        ],
        "correct": 2,
        "explanation": "The sys.stdout.write(“hello world”) function writes the string “hello world” directly to the standard output without adding a newline character. Unlike print(), it doesn’t automatically add anything extra. However, the output shows hello world11 because when sys.stdout.write() is used in an interactive environment like a Python shell, it returns the number of characters written — which is 11 for “hello world”. This return value (11) is then displayed by the interpreter, resulting in the output: hello world11."
    },
    {
        "category": "files",
        "question": "What will be the output of the following Python code?\n\n```python\nimport sys\nsys.stdin.readline()\nSanfoundry\n```",
        "options": [
            "‘Sanfoundry\\n’",
            "‘Sanfoundry’",
            "‘Sanfoundry10’",
            "Error"
        ],
        "correct": 0,
        "explanation": "The method sys.stdin.readline() reads a full line from standard input including the newline character at the end. So, if the input is Sanfoundry followed by pressing Enter, the returned string will be ‘Sanfoundry\\n’."
    },
    {
        "category": "files",
        "question": "What will be the output of the following Python code?\n\n```python\nimport sys\neval(sys.stdin.readline())\n\"India\"\n```",
        "options": [
            "India5",
            "India",
            "‘India\\n’",
            "‘India’"
        ],
        "correct": 3,
        "explanation": "sys.stdin.readline() reads the input line including the newline character, so it reads “India\\n”. The eval() function evaluates this as a Python expression — since “India” (with quotes) is a valid string literal, eval() returns the string ‘India’ without the newline."
    },
    {
        "category": "files",
        "question": "What will be the output of the following Python code?\n\n```python\nimport sys\neval(sys.stdin.readline())\nComputer\n```",
        "options": [
            "Error",
            "‘Computer\\n’",
            "Computer8",
            "Computer"
        ],
        "correct": 0,
        "explanation": "When eval() receives the input Computer without quotes, it tries to evaluate it as a variable or expression. Since Computer is not defined anywhere in the program, Python raises a NameError. Only quoted strings like “Computer” can be evaluated successfully as string literals. Hence, the code results in an error."
    },
    {
        "category": "modules",
        "question": "What will be the output of the following Python code?\n\n```python\nimport sys\nsys.argv[0]\n```",
        "options": [
            "Junk value",
            "‘ ‘",
            "No output",
            "Error"
        ],
        "correct": 1,
        "explanation": "In Python, sys.argv[0] typically contains the name of the script that was executed. If you’re running code in an interactive environment or certain IDEs, it might return an empty string ‘ ‘. This can vary depending on the environment, but generally, it does not throw an error and returns either the script name or an empty string."
    },
    {
        "category": "files",
        "question": "What will be the output of the following Python code?\n\n```python\nimport sys\nsys.stderr.write(“hello”)\n```",
        "options": [
            "‘hello’",
            "‘hello\\n’",
            "hello",
            "hello5"
        ],
        "correct": 3,
        "explanation": "The statement sys.stderr.write(“hello”) writes the string “hello” to the standard error (stderr) without adding a newline. The write() function also returns the number of characters written, which is 5 in this case. If you print the return value of sys.stderr.write(“hello”), you see hello5 because “hello” is printed to stderr, and 5 (the return value) is printed to stdout."
    },
    {
        "category": "modules",
        "question": "What will be the output of the following Python code?\n\n```python\nimport sys\nsys.argv\n```",
        "options": [
            "‘ ‘",
            "[ ]",
            "[‘ ‘]",
            "Error"
        ],
        "correct": 2,
        "explanation": "sys.argv is a list containing the command-line arguments passed to the Python script. By default, it always contains at least one element — the name of the script being executed. When run interactively or without arguments, sys.argv will be a list with a single empty string [”]."
    },
    {
        "category": "lists",
        "question": "To obtain a list of all the functions defined under sys module, which of the following functions can be used?",
        "options": [
            "print(sys)",
            "print(dir.sys)",
            "print(dir[sys])",
            "print(dir(sys))"
        ],
        "correct": 3,
        "explanation": "The built-in dir() function returns a list of all the attributes and functions defined in a module. To list everything in the sys module, we use dir(sys) inside the print() function, i.e., print(dir(sys))."
    },
    {
        "category": "strings",
        "question": "The output of the function len(sys.argv) is ____________",
        "options": [
            "Error",
            "1",
            "0",
            "Junk value"
        ],
        "correct": 1,
        "explanation": "sys.argv is a list that contains the command-line arguments passed to a Python script. It always includes at least one element—the script name—so len(sys.argv) is always at least 1, even if no additional arguments are provided.\nSanfoundry Global Education & Learning Series – Python."
    },
    {
        "category": "modules",
        "question": "What does os.name contain?",
        "options": [
            "the name of the operating system dependent module imported",
            "the address of the module os",
            "error, it should’ve been os.name()",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "os.name is a string that indicates the name of the operating system dependent module imported by Python (like ‘posix’, ‘nt’, or ‘java’). It helps identify the underlying OS environment."
    },
    {
        "category": "builtins",
        "question": "What does print(os.geteuid()) print?",
        "options": [
            "the group id of the current process",
            "the user id of the current process",
            "both the group id and the user of the current process",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "The function os.geteuid() returns the effective user ID of the current process, which is a unique number identifying the user running the process. It does not provide the group ID or both."
    },
    {
        "category": "functions",
        "question": "What does os.getlogin() return?",
        "options": [
            "name of the current user logged in",
            "name of the superuser",
            "gets a form to login as a different user",
            "all of the mentioned"
        ],
        "correct": 0,
        "explanation": "os.getlogin() returns the name of the user currently logged into the controlling terminal of the process. It does not provide superuser information or login forms."
    },
    {
        "category": "modules",
        "question": "What does os.close(f) do?",
        "options": [
            "terminate the process f",
            "terminate the process f if f is not responding",
            "close the file descriptor f",
            "return an integer telling how close the file pointer is to the end of file"
        ],
        "correct": 2,
        "explanation": "os.close(f) closes the low-level file descriptor f (an integer), not a file object. It is used when working with files at the OS level (e.g., after using os.open()). It does not terminate a process."
    },
    {
        "category": "modules",
        "question": "What does os.fchmod(fd, mode) do?",
        "options": [
            "change permission bits of the file",
            "change permission bits of the directory",
            "change permission bits of either the file or the directory",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "os.fchmod(fd, mode) changes the permission bits (like read, write, execute) of the file referred to by the file descriptor fd. It works only for files, not directories directly."
    },
    {
        "category": "functions",
        "question": "Which of the following functions can be used to read data from a file using a file descriptor?",
        "options": [
            "os.reader()",
            "os.read()",
            "os.quick_read()",
            "os.scan()"
        ],
        "correct": 1,
        "explanation": "os.read(fd, n) reads up to n bytes from the file associated with the file descriptor fd. It’s a low-level function used for reading data directly from a file or device."
    },
    {
        "category": "strings",
        "question": "Which of the following returns a string that represents the present working directory?",
        "options": [
            "os.getcwd()",
            "os.cwd()",
            "os.getpwd()",
            "os.pwd()"
        ],
        "correct": 0,
        "explanation": "os.getcwd() returns the current working directory as a string. It’s a standard function in the os module used to find out where your Python script is running."
    },
    {
        "category": "modules",
        "question": "What does os.link() do?",
        "options": [
            "create a symbolic link",
            "create a hard link",
            "create a soft link",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "os.link(src, dst) creates a hard link pointing from dst to the file at src. A hard link makes dst another name for the same file content on disk, sharing the same inode."
    },
    {
        "category": "general",
        "question": "Which of the following can be used to create a directory?",
        "options": [
            "os.mkdir()",
            "os.creat_dir()",
            "os.create_dir()",
            "os.make_dir()"
        ],
        "correct": 0,
        "explanation": "os.mkdir(path) is used to create a new directory at the specified path. It’s a standard function in the os module for directory creation in Python."
    },
    {
        "category": "general",
        "question": "Which of the following can be used to create a symbolic link?",
        "options": [
            "os.symlink()",
            "os.symb_link()",
            "os.symblin()",
            "os.ln()"
        ],
        "correct": 0,
        "explanation": "os.symlink(source, link_name) creates a symbolic (soft) link pointing to source with the name link_name. It’s used to link to files or directories without duplicating their content."
    },
    {
        "category": "control",
        "question": "What will be the output shape of the following Python code?\n\n```python\nimport turtle\nt=turtle.Pen()\nfor i in range(0,4):\n\tt.forward(100)\n\tt.left(120)\n```",
        "options": [
            "square",
            "rectangle",
            "triangle",
            "kite"
        ],
        "correct": 2,
        "explanation": "The code uses the Turtle graphics library to draw a shape. The t.left(120) command turns the turtle left by 120 degrees after moving forward by 100 units. Repeating this 4 times causes the turtle to trace an equilateral triangle, as turning by 120 degrees three times completes a 360-degree rotation, forming a triangle."
    },
    {
        "category": "control",
        "question": "The number of lines drawn in each case, assuming that the turtle module has been imported:\n\n```python\nCase 1:\nfor i in range(0,10):\n\tturtle.forward(100)\n\tturtle.left(90)\nCase 2:\nfor i in range(1,10):\n\tturtle.forward(100)\n\tturtle.left(90)\n```",
        "options": [
            "10, 9",
            "9, 10",
            "9, 9",
            "10, 10"
        ],
        "correct": 0,
        "explanation": "In Case 1, the loop runs from i = 0 to i = 9, which means it executes 10 times, drawing 10 lines. In Case 2, the loop runs from i = 1 to i = 9, executing 9 times, so it draws 9 lines. Hence, the number of lines drawn are 10 and 9 respectively."
    },
    {
        "category": "general",
        "question": "The command which helps us to reset the pen (turtle):",
        "options": [
            "turtle.reset",
            "turtle.penreset",
            "turtle.penreset()",
            "turtle.reset()"
        ],
        "correct": 3,
        "explanation": "turtle.reset() clears the drawing, resets the turtle’s state (position, heading, etc.) to the default, effectively resetting the pen. It must be called with parentheses since it’s a function."
    },
    {
        "category": "control",
        "question": "Fill in the blank such that the following Python code results in the formation of an inverted, equilateral triangle.\n\n```python\nimport turtle\nt=turtle.Pen()\nfor i in range(0,3):\n\tt.forward(150)\n\tt.right(_____)\n```",
        "options": [
            "-60",
            "120",
            "-120",
            "60"
        ],
        "correct": 1,
        "explanation": "To form an inverted equilateral triangle using turtle graphics, the turtle needs to turn right by 120 degrees after each side. This makes each internal angle 60°, completing a 3-sided figure pointing downward."
    },
    {
        "category": "control",
        "question": "What will be the output shape of the following Python code?\n\n```python\nimport turtle\nt=turtle.Pen()\nfor i in range(1,4):\n\tt.forward(60)\n\tt.left(90)\n```",
        "options": [
            "Rectangle",
            "Trapezium",
            "Triangle",
            "Square"
        ],
        "correct": 3,
        "explanation": "The turtle moves forward 60 units and turns left 90 degrees three times. Although only three sides are explicitly drawn, the fourth side is implied as the turtle completes the square’s shape by aligning back to the starting point. The turning angles of 90° suggest a square structure."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nimport turtle\nt=turtle.Pen()\nfor i in range(0,4):\n\tt.forward(100)\n\tt.left(90)\n \nt.penup()\nt.left(90)\nt.forward(200)\nfor i in range(0,4):\n\tt.forward(100)\n\tt.left(90)\n```",
        "options": [
            "Error",
            "1 square",
            "2 squares, at a separation of100 units, joined by a straight line",
            "2 squares, at a separation of 100 units, without a line joining them"
        ],
        "correct": 1,
        "explanation": "The code first draws a square by moving forward and turning left 90 degrees four times. Then, t.penup() lifts the pen, so when the turtle moves forward 200 units and turns, it does so without drawing any lines. Since the pen is never put down again using t.pendown(), the second loop moves the turtle but does not draw the second square. Therefore, only one square is visible."
    },
    {
        "category": "functions",
        "question": "Which of the following functions does not accept any arguments?",
        "options": [
            "position",
            "fillcolor",
            "goto",
            "setheading()"
        ],
        "correct": 0,
        "explanation": "The position() function (from the turtle module) does not require any arguments. It simply returns the current position of the turtle as a tuple (x, y). In contrast, fillcolor, goto, and setheading() all require arguments to specify color, coordinates, or direction respectively."
    },
    {
        "category": "modules",
        "question": "What will be the output of the following Python code?\n\n```python\nimport turtle\nt=turtle.Pen()\nt.goto(300,9)\nt.position()\n```",
        "options": [
            "300.00, 9.00",
            "9, 300",
            "300, 9",
            "9.00, 300.00"
        ],
        "correct": 0,
        "explanation": "The t.goto(300, 9) command moves the turtle to the position (300, 9). When t.position() is called, it returns the current position of the turtle as a tuple with float values. Hence, the output will be (300.00, 9.00) in float format."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nimport turtle\nt=turtle.Pen()\nfor i in range(0,5):\n        t.left(144)\n        t.forward(100)\n```",
        "options": [
            "Trapezium",
            "Parallelepiped",
            "Tetrahedron",
            "Star"
        ],
        "correct": 3,
        "explanation": "The code uses a loop to draw 5 lines, each turning left by 144 degrees and moving forward 100 units. This specific turning angle and repetition count is a classic method to draw a five-pointed star using the turtle graphics module. The shape formed is not a regular polygon, but a star due to the crossing lines created by turning 144 degrees each time."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python functions?\n\n```python\nimport turtle\nt=turtle.Pen()\nfor i in range(0,3):\n\tt.forward(100)\n\tt.left(120)\n \nt.back(100)\nfor i in range(0,3):\n\tt.forward(100)\n\tt.left(120)\n```",
        "options": [
            "Error",
            "Two triangles, joined by a straight line",
            "Two triangles, joined at one vertex",
            "Two separate triangles, not connected by a line"
        ],
        "correct": 2,
        "explanation": "The first for loop draws an equilateral triangle with sides of 100 units. The command t.back(100) moves the turtle backward along its current heading without changing its direction, positioning it to start the next triangle from the same vertex. The second triangle begins from this new point and follows the same turning pattern, resulting in another triangle connected at the shared vertex."
    },
    {
        "category": "modules",
        "question": "What will be the output of the following Python code?\n\n```python\nimport turtle\nt=turtle.Pen()\nt.color(0,0,1)\nt.begin_fill()\nt.circle(15)\nt.end_fill()\n```",
        "options": [
            "Error",
            "A circle filled in with the colour red",
            "A circle filled in with the colour blue",
            "A circle filled in with the colour green"
        ],
        "correct": 2,
        "explanation": "The t.color(0, 0, 1) function sets the turtle’s pen and fill color using RGB values, where (0, 0, 1) represents pure blue (with red and green set to zero). The begin_fill() and end_fill() functions are used to fill the shape drawn between them. In this case, a circle with a radius of 15 units is filled with the specified color. As a result, the output is a blue-filled circle."
    },
    {
        "category": "functions",
        "question": "Which of the following functions can be used to make the arrow black?",
        "options": [
            "turtle.color(0,1,0)",
            "turtle.color(1,0,0)",
            "turtle.color(0,0,1)",
            "turtle.color(0,0,0)"
        ],
        "correct": 3,
        "explanation": "The turtle.color(r, g, b) function sets the pen and fill color using RGB values where each value ranges from 0 to 1. The function turtle.color(0,1,0) will make the arrow green. The function turtle.color(1,0,0) will make the arrow red. The function turtle.color(0,0,1) will make the arrow blue. The function turtle.color(0,0,0) will make the arrow black."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nimport turtle\nt=turtle.Pen()\nt.color(1,1,1)\nt.begin_fill()\nfor i in range(0,3):\n\tt.forward(100)\n\tt.right(120)\n              t.end_fill()\n```",
        "options": [
            "Blank page",
            "A triangle filled in with the colour yellow",
            "A triangle which is not filled in with any colour",
            "Error"
        ],
        "correct": 0,
        "explanation": "The t.color(1,1,1) sets the pen and fill color to white using RGB values, and the turtle graphics window also has a white background by default. So, even though a triangle is drawn and filled, it is the same color as the background, making it invisible, resulting in what appears to be a blank page."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nimport turtle\nt=turtle.Pen()\nt.color(0,1,0)\nt.begin_fill()\nfor i in range(0,4):\n\tt.forward(100)\n\tt.right(90)\n```",
        "options": [
            "A square filled in with the colour green",
            "A square outlined with the colour green",
            "Blank canvas",
            "Error"
        ],
        "correct": 1,
        "explanation": "The code sets the pen color to green using t.color(0,1,0) and begins a fill with t.begin_fill(), but does not call t.end_fill(), which is necessary to actually fill the shape. As a result, only the outline of the square is drawn in green, and the shape is not filled."
    },
    {
        "category": "general",
        "question": "In which direction is the turtle pointed by default?",
        "options": [
            "North",
            "South",
            "East",
            "West"
        ],
        "correct": 2,
        "explanation": "By default, in Python’s turtle module, the turtle starts at the center of the screen and faces East (i.e., towards the right side of the screen). This is the 0-degree direction in turtle graphics."
    },
    {
        "category": "general",
        "question": "The command used to set only the x coordinate of the turtle at 45 units is:",
        "options": [
            "reset(45)",
            "setx(45)",
            "xset(45)",
            "xreset(45)"
        ],
        "correct": 1,
        "explanation": "The setx() function in the turtle module is used to set the turtle’s x-coordinate to a specified value while keeping the y-coordinate unchanged. So, setx(45) moves the turtle horizontally to x = 45."
    },
    {
        "category": "functions",
        "question": "Which of the following functions returns a value in degrees, counterclockwise from the horizontal right?",
        "options": [
            "heading()",
            "degrees()",
            "position()",
            "window_height()"
        ],
        "correct": 0,
        "explanation": "The heading() function in the turtle module returns the current orientation of the turtle in degrees. The angle is measured counterclockwise from the horizontal right (which is 0 degrees)."
    },
    {
        "category": "modules",
        "question": "What will be the output of the following Python code?\n\n```python\nimport turtle\nt=turtle.Pen()\nt.right(90)\nt.forward(100)\nt.heading()\n```",
        "options": [
            "0.0",
            "90.0",
            "270.0",
            "360.0"
        ],
        "correct": 2,
        "explanation": "The turtle starts facing east (0 degrees). After turning right by 90 degrees, it faces south (270 degrees, since angles increase counterclockwise). Moving forward doesn’t change the heading, so t.heading() returns 270.0."
    },
    {
        "category": "modules",
        "question": "What will be the output of the following Python code?\n\n```python\nimport turtle\nt=turtle.Pen()\nt.clear()\nt.isvisible()\n```",
        "options": [
            "Yes",
            "True",
            "No",
            "False"
        ],
        "correct": 1,
        "explanation": "The clear() method clears all drawings made by the turtle but does not hide the turtle itself. Therefore, t.isvisible() returns True because the turtle is still visible on the screen."
    },
    {
        "category": "modules",
        "question": "What will be the output of the following Python code?\n\n```python\nimport turtle\nt=turtle.Pen()\nt.forward(100)\nt.left(90)\nt.clear()\nt.position()\n```",
        "options": [
            "0.00, 90.00",
            "0.00, 0.00",
            "100.00, 90.00",
            "100.00, 100.00"
        ],
        "correct": 3,
        "explanation": "The clear() method only erases the drawing but does not move the turtle or change its position. After moving forward 100 units and turning left 90 degrees, the turtle’s position remains at (100, 0). So, calling position() will return the current coordinates without any change from clear()."
    },
    {
        "category": "functions",
        "question": "Which of the following functions results in an error?",
        "options": [
            "turtle.shape(“turtle”)",
            "turtle.shape(“square”)",
            "turtle.shape(“triangle”)",
            "turtle.shape(“rectangle”)"
        ],
        "correct": 3,
        "explanation": "The turtle.shape() function accepts only specific shape names like “turtle”, “square”, and “triangle”. Since “rectangle” is not a valid predefined shape in the turtle module, calling turtle.shape(“rectangle”) results in an error."
    },
    {
        "category": "modules",
        "question": "What will be the output of the following Python code?\n\n```python\nimport turtle\nt=turtle.Pen\nt.tilt(75)\nt.forward(100)\n```",
        "options": [
            "A straight line of 100 units tiled at 75 degrees from the horizontal",
            "A straight line of 100 units tilted at 15 degrees from the horizontal",
            "A straight line of 100 units lying along the horizontal",
            "Error"
        ],
        "correct": 3,
        "explanation": "In the code, t = turtle.Pen assigns the class Pen itself to t instead of creating an instance (which should be t = turtle.Pen()). Also, the tilt() method is not a standard method of the turtle pen object. Due to these issues, the code will cause an error when executed."
    },
    {
        "category": "modules",
        "question": "What will be the output of the following Python code?\n\n```python\nimport turtle\nt=turtle.Pen()\nt.backward(100)\nt.penup()\nt.right(45)\nt.isdown()\n```",
        "options": [
            "True",
            "False",
            "Yes",
            "No"
        ],
        "correct": 1,
        "explanation": "The method penup() lifts the pen, so the turtle stops drawing while moving. Once penup() is called, the pen is no longer down. We did not use the pendown() function to lower the pen again. Therefore, when we call turtle.isdown(), it returns False because the pen is up."
    },
    {
        "category": "functions",
        "question": "The function used to alter the thickness of the pen to ‘x’ units:",
        "options": [
            "turtle.width(x)",
            "turtle.span(x)",
            "turtle.girth(x)",
            "turtle.thickness(x)"
        ],
        "correct": 0,
        "explanation": "The function turtle.width(x) is used to set the thickness of the turtle’s pen to x units, controlling how thick the lines drawn by the turtle will be."
    },
    {
        "category": "modules",
        "question": "What will be the output of the following Python code?\n\n```python\nimport turtle\nt=turtle.Pen()\nt.goto(100,0)\nt.towards(0,0)\n```",
        "options": [
            "0.0",
            "180.0",
            "270.0",
            "360.0"
        ],
        "correct": 1,
        "explanation": "The turtle starts at the default position (0,0). After moving to (100,0) with t.goto(100,0), the turtle’s position is at x=100, y=0. The function t.towards(0,0) returns the angle (in degrees) from the current position (100,0) toward the point (0,0). Since the target point is directly to the left, the angle is 180 degrees."
    },
    {
        "category": "modules",
        "question": "What will be the output of the following Python code?\n\n```python\nimport turtle\nt=turtle.Pen()\nt.position()\n(100.00,0.00)\nt.goto(100,100)\nt.distance(100,0)\n```",
        "options": [
            "0.0",
            "Error",
            "100.0, 100.0",
            "100.0"
        ],
        "correct": 3,
        "explanation": "Initially, t.position() returns the turtle’s current position, which is (100.00, 0.00), indicating that the turtle is already at (100, 0). Then, t.goto(100, 100) moves the turtle to the position (100, 100). Finally, t.distance(100, 0) calculates the vertical distance between the current position (100, 100) and the point (100, 0), which is 100 units. Therefore, the output is 100.0."
    },
    {
        "category": "modules",
        "question": "The output of the following Python code will result in a shape similar to the alphabet ___________\n\n```python\nimport turtle\nt=turtle.Turtle()\nt1=turtle.Turtle()\nt.left(45)\nt1.left(135)\nt.forward(100)\nt1.forward(100)\n```",
        "options": [
            "V",
            "Inverted V",
            "X",
            "T"
        ],
        "correct": 0,
        "explanation": "The two turtles start facing different directions — one is turned left by 45°, and the other by 135°. When both move forward the same distance, their paths form two straight lines that meet at a point, creating a shape similar to the letter “V”."
    },
    {
        "category": "modules",
        "question": "The output of the following Python code is similar to the alphabet _______________\n\n```python\nimport turtle\nt=turtle.Pen()\nt1=turtle.Pen()\nt2=turtle.Pen()\nt.forward(100)\nt1.forward(100)\nt2.forward(100)\nt1.left(90)\nt1.forward(75)\nt2.right(90)\nt2.forward(75)\n```",
        "options": [
            "X",
            "N",
            "T",
            "M"
        ],
        "correct": 2,
        "explanation": "The first turtle draws a vertical line (forward 100), the second turtle moves forward then turns left 90° and moves 75 (forming the top horizontal line), and the third turtle moves forward then turns right 90° and moves 75. Together, these lines form a shape resembling the letter T."
    },
    {
        "category": "modules",
        "question": "The following Python code will result in an error.\n\n```python\nimport turtle\nt=turtle.Pen()\nt.speed(-45)\nt.circle(30)\n```",
        "options": [
            "True",
            "False"
        ],
        "correct": 0,
        "explanation": "The speed() function in the turtle module accepts values from 0 to 10 (or special values like 0 for fastest). Passing a negative value like -45 is invalid and will cause an error."
    },
    {
        "category": "modules",
        "question": "What will be the output of the following Python code?\n\n```python\nimport turtle\nt=turtle.Pen()\nt.goto(50,60)\nt1=t.clone()\nt1.ycor()\n```",
        "options": [
            "0.0",
            "50.0",
            "60.0",
            "Error"
        ],
        "correct": 2,
        "explanation": "The turtle t moves to the position (50, 60). When t1 = t.clone() is called, t1 is created at the same position as t, which is (50, 60). So, t1.ycor() returns the y-coordinate of t1, which is 60.0."
    },
    {
        "category": "control",
        "question": "What will be the output shape of the following Python code?\n\n```python\nimport turtle\nt=turtle.Pen()\nfor i in range(0,6):\n\tt.forward(100)\n\tt.left(60)\n```",
        "options": [
            "Hexagon",
            "Octagon",
            "Pentagon",
            "Heptagon"
        ],
        "correct": 0,
        "explanation": "The loop runs 6 times, and after each forward movement of 100 units, the turtle turns left by 60 degrees. Since the sum of external angles for any polygon is 360°, dividing 360° by 60° gives 6 sides, which forms a hexagon."
    },
    {
        "category": "modules",
        "question": "What will be the output of the following Python code?\n\n```python\nimport turtle\nt=turtle.Pen()\nt.resizemode(“user”)\nt.resizemode()\n```",
        "options": [
            "user",
            "auto",
            "nonresize",
            "error"
        ],
        "correct": 2,
        "explanation": "The resizemode() function in the turtle module can both set and get the current resizing behavior of the turtle. When t.resizemode(“user”) is called, it sets the resizing mode to “user”, allowing manual control over the turtle’s size. A subsequent call to t.resizemode() returns the current mode, which is “user”. This is one of three valid modes: “auto”, “user”, and “noresize” (default)."
    },
    {
        "category": "general",
        "question": "The process of pickling in Python includes:",
        "options": [
            "conversion of a list into a datatable",
            "conversion of a byte stream into Python object hierarchy",
            "conversion of a Python object hierarchy into byte stream",
            "conversion of a datatable into a list"
        ],
        "correct": 2,
        "explanation": "Pickling in Python refers to the process of serializing a Python object structure (like lists, dictionaries, or custom objects) into a byte stream so that it can be saved to a file or transmitted over a network. This byte stream can later be “unpickled” to reconstruct the original object using the pickle module."
    },
    {
        "category": "functions",
        "question": "To sterilize an object hierarchy, the _____________ function must be called. To desterilize a data stream, the ______________ function must be called.",
        "options": [
            "dumps(), undumps()",
            "loads(), unloads()",
            "loads(), dumps()",
            "dumps(), loads()"
        ],
        "correct": 3,
        "explanation": "To serialize (convert to byte stream) a Python object hierarchy, you use pickle.dumps() or pickle.dump() (for writing to a file). To deserialize (reconstruct the object from byte stream), you use pickle.loads() or pickle.load(). These are the core functions of the pickle module for object persistence in Python."
    },
    {
        "category": "modules",
        "question": "Pick the correct statement regarding pickle and marshal modules.",
        "options": [
            "The pickle module supports primarily .pyc files whereas marshal module is used to sterilize Python objects",
            "The pickle module keeps track of the objects that have already been sterilized whereas the marshal module does not do this",
            "The pickle module cannot be used to sterilize user defined classes and their instances whereas marshal module can be used to perform this task",
            "The format of sterilization of the pickle module is not guaranteed to be supported across all versions of Python. The marshal module sterilization is compatible across all the versions of Python"
        ],
        "correct": 1,
        "explanation": "The pickle module is more powerful and flexible than marshal. It can serialize a wider range of Python objects and also keeps track of objects already serialized to avoid infinite recursion with self-referencing objects. On the other hand, the marshal module is mainly used for writing and reading Python’s compiled bytecode (.pyc files) and does not support reference tracking or custom classes."
    },
    {
        "category": "functions",
        "question": "Which of the following attributes in the pickle module returns the highest supported protocol number for pickling in the Python version? pickle.HIGHEST_PROTOCOL",
        "options": [
            "pickle.PROTOCOL_VERSION",
            "pickle.MAX_PROTOCOL",
            "pickle.HIGHEST_PROTOCOL",
            "pickle.TOP_PROTOCOL"
        ],
        "correct": 2,
        "explanation": "pickle.HIGHEST_PROTOCOL gives the highest protocol number available for the current version of Python, ensuring the most efficient pickling."
    },
    {
        "category": "general",
        "question": "Which of the following Python codes will result in an error? object = ‘a’",
        "options": [
            "pickle.dumps(object)",
            "pickle.dumps(object, 3)",
            "pickle.dumps(object, 3, True)",
            "pickle.dumps(‘a’, 2)"
        ],
        "correct": 2,
        "explanation": "The pickle.dumps() function’s third parameter (fix_imports) must be passed as a keyword argument, not positionally. So, pickle.dumps(object, 3, True) causes a TypeError because True is given as a positional argument. The correct way is pickle.dumps(object, 3, fix_imports=True)."
    },
    {
        "category": "functions",
        "question": "Which of the following functions can be used to find the protocol version of the pickle module currently being used?",
        "options": [
            "pickle.DEFAULT",
            "pickle.CURRENT",
            "pickle.CURRENT_PROTOCOL",
            "pickle.DEFAULT_PROTOCOL"
        ],
        "correct": 3,
        "explanation": "The function pickle.DEFAULT_PROTOCOL can be used to find the protocol version of the pickle module currently being used by the system."
    },
    {
        "category": "builtins",
        "question": "The output of the following two Python codes is exactly the same.\n\n```python\nimport pickle\n \nobject = 'a'\n \ncode1 = pickle.dumps('a', 3)\ncode2 = pickle.dumps(object, 3)\n \nprint(code1 == code2)\n```",
        "options": [
            "True",
            "False"
        ],
        "correct": 0,
        "explanation": "Since object is assigned the string ‘a’, both pickle.dumps(‘a’, 3) and pickle.dumps(object, 3) serialize the same string. Therefore, the resulting byte outputs are identical, making the comparison True."
    },
    {
        "category": "functions",
        "question": "Which of the following functions can accept more than one positional argument?",
        "options": [
            "pickle.dumps",
            "pickle.loads",
            "pickle.loadfile",
            "pickle.load"
        ],
        "correct": 0,
        "explanation": "pickle.dumps() can accept more than one positional argument, such as the object to pickle and the protocol version (e.g., pickle.dumps(obj, 3)). Other functions like pickle.loads() and pickle.load() accept only one positional argument; additional parameters must be passed as keyword arguments."
    },
    {
        "category": "functions",
        "question": "Which of the following functions raises an error when an unpicklable object is encountered by Pickler?",
        "options": [
            "pickle.PickleError",
            "pickle.PicklingError",
            "pickle.UnpickleError",
            "pickle.UnpicklingError"
        ],
        "correct": 1,
        "explanation": "The pickle.PicklingError is raised when the Pickler encounters an object that cannot be pickled (e.g., open file handles, sockets, or lambda functions).\npickle.UnpicklingError is raised when loading (not saving) fails.\npickle.PickleError is the base class for both pickling and unpickling errors, but it’s not raised directly."
    },
    {
        "category": "files",
        "question": "The pickle module defines ______ exceptions and exports _______ classes.",
        "options": [
            "2, 3",
            "3, 4",
            "3, 2",
            "4, 3"
        ],
        "correct": 2,
        "explanation": "The pickle module defines 3 exceptions (PickleError, PicklingError, and UnpicklingError) to handle serialization errors. It also exports 2 classes (Pickler and Unpickler) used for customizing the pickling and unpickling process."
    },
    {
        "category": "general",
        "question": "Which of the following cannot be pickled?",
        "options": [
            "Functions which are defined at the top level of a module with lambda",
            "Functions which are defined at the top level of a module with def",
            "Built-in functions which are defined at the top level of a module",
            "Classes which are defined at the top level of a module"
        ],
        "correct": 0,
        "explanation": "Lambda functions cannot be pickled because they are anonymous and don’t have a qualified name that can be referenced by the pickle module. Only functions, classes, and objects defined at the top level of a module using def or class can be pickled reliably."
    },
    {
        "category": "control",
        "question": "If __getstate__() returns _______________ the __setstate__() module will not be called on pickling.",
        "options": [
            "True value",
            "False value",
            "ValueError",
            "OverflowError"
        ],
        "correct": 1,
        "explanation": "If __getstate__() returns a false value (like None, False, 0, or an empty container), the __setstate__() method will not be called during unpickling. This is because there’s no state to restore, so Python skips the call."
    },
    {
        "category": "functions",
        "question": "Lambda functions cannot be pickled because:",
        "options": [
            "Lambda functions only deal with binary values, that is, 0 and 1",
            "Lambda functions cannot be called directly",
            "Lambda functions cannot be identified by the functions of the pickle module",
            "All lambda functions have the same name, that is, <lambda>"
        ],
        "correct": 3,
        "explanation": "Lambda functions cannot be pickled because they are anonymous and all have the same name (<lambda>). This makes it impossible for the pickle module to reference and recreate them properly during unpickling."
    },
    {
        "category": "modules",
        "question": "The module _______________ is a comparatively faster implementation of the pickle module.",
        "options": [
            "cPickle",
            "nPickle",
            "gPickle",
            "tPickle"
        ],
        "correct": 0,
        "explanation": "cPickle is a faster, C-implemented version of the pickle module that improves serialization speed while maintaining the same interface. It’s commonly used in Python 2; in Python 3, the standard pickle module uses the C implementation by default."
    },
    {
        "category": "modules",
        "question": "The copy module uses the ___________________ protocol for shallow and deep copy.",
        "options": [
            "pickle",
            "marshal",
            "shelve",
            "copyreg"
        ],
        "correct": 0,
        "explanation": "The copy module in Python uses the pickle protocol to perform deep copying of objects. This allows it to serialize and reconstruct complex objects, ensuring that the copied object is a completely independent duplicate of the original."
    },
    {
        "category": "files",
        "question": "To open a file c:\\scores.txt for reading, we use _____________",
        "options": [
            "infile = open(“c:\\scores.txt”, “r”)",
            "infile = open(“c:\\\\scores.txt”, “r”)",
            "infile = open(file = “c:\\scores.txt”, “r”)",
            "infile = open(file = “c:\\\\scores.txt”, “r”)"
        ],
        "correct": 1,
        "explanation": "In Python strings, backslashes (\\) are escape characters, so to specify a Windows path like c:\\scores.txt, you need to escape the backslash by using double backslashes (\\\\). Thus, open(“c:\\\\scores.txt”, “r”) correctly opens the file for reading."
    },
    {
        "category": "files",
        "question": "To open a file c:\\scores.txt for writing, we use ____________",
        "options": [
            "outfile = open(“c:\\scores.txt”, “w”)",
            "outfile = open(“c:\\\\scores.txt”, “w”)",
            "outfile = open(file = “c:\\scores.txt”, “w”)",
            "outfile = open(file = “c:\\\\scores.txt”, “w”)"
        ],
        "correct": 1,
        "explanation": "To open a file for writing in Python on Windows, you need to specify the correct file path. Since backslashes are escape characters, each backslash in the path should be doubled (\\\\).\nSo, “c:\\\\scores.txt” correctly represents the file path, and “w” mode opens the file for writing."
    },
    {
        "category": "files",
        "question": "To open a file c:\\scores.txt for appending data, we use ____________",
        "options": [
            "outfile = open(“c:\\\\scores.txt”, “a”)",
            "outfile = open(“c:\\\\scores.txt”, “rw”)",
            "outfile = open(file = “c:\\scores.txt”, “w”)",
            "outfile = open(file = “c:\\\\scores.txt”, “w”)"
        ],
        "correct": 0,
        "explanation": "To open a file for appending, use mode “a” which adds data to the file without overwriting existing content. The file path on Windows must use double backslashes (\\\\) to avoid escape errors. Thus, open(“c:\\\\scores.txt”, “a”) correctly opens the file for appending."
    },
    {
        "category": "general",
        "question": "Which of the following statements are true?",
        "options": [
            "When you open a file for reading, if the file does not exist, an error occurs",
            "When you open a file for writing, if the file does not exist, a new file is created",
            "When you open a file for writing, if the file exists, the existing file is overwritten with the new file",
            "All of the mentioned"
        ],
        "correct": 3,
        "explanation": "When opening a file in read mode, an error occurs if the file doesn’t exist. In write mode, Python creates a new file if it’s missing and overwrites it if it already exists. So, all these statements about file modes are correct."
    },
    {
        "category": "files",
        "question": "To read two characters from a file object infile, we use ____________",
        "options": [
            "infile.read(2)",
            "infile.read()",
            "infile.readline()",
            "infile.readlines()"
        ],
        "correct": 0,
        "explanation": "infile.read(2) reads exactly two characters from the file. The read(n) method reads n number of characters from the file object. Other options are used to read the entire file or lines, not specific character counts."
    },
    {
        "category": "strings",
        "question": "To read the entire remaining contents of the file as a string from a file object infile, we use ____________",
        "options": [
            "infile.read(2)",
            "infile.read()",
            "infile.readline()",
            "infile.readlines()"
        ],
        "correct": 1,
        "explanation": "infile.read() without any arguments reads the entire remaining contents of the file and returns it as a string. It reads from the current file pointer position to the end of the file."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nf = None\nfor i in range (5):\n    with open(\"data.txt\", \"w\") as f:\n        if i > 2:\n            break\nprint(f.closed)\n```",
        "options": [
            "True",
            "False",
            "None",
            "Error"
        ],
        "correct": 0,
        "explanation": "The with statement ensures the file is automatically closed when the block is exited, even if break is executed. When i becomes 3, the condition i > 2 is true, so the loop breaks, but before that, the with block closes the file. Therefore, f.closed is True."
    },
    {
        "category": "files",
        "question": "To read the next line of the file from a file object infile, we use ____________",
        "options": [
            "infile.read(2)",
            "infile.read()",
            "infile.readline()",
            "infile.readlines()"
        ],
        "correct": 2,
        "explanation": "infile.readline() reads the next line from the file, stopping at the newline character. It returns that line as a string, including the newline at the end (if present). This is useful for processing a file line by line."
    },
    {
        "category": "files",
        "question": "To read the remaining lines of the file from a file object infile, we use ____________",
        "options": [
            "infile.read(2)",
            "infile.read()",
            "infile.readline()",
            "infile.readlines()"
        ],
        "correct": 3,
        "explanation": "infile.readlines() reads all the remaining lines from the file and returns them as a list of strings, where each string is one line from the file. This is useful when you want to process or store all the lines at once."
    },
    {
        "category": "functions",
        "question": "The readlines() method returns ____________",
        "options": [
            "str",
            "a list of lines",
            "a list of single characters",
            "a list of integers"
        ],
        "correct": 1,
        "explanation": "The readlines() method reads all the remaining lines in a file and returns them as a list of strings, where each string represents one line (including the newline character \\n if present)."
    },
    {
        "category": "functions",
        "question": "Which Python function is used to read a single line of text from the user input?",
        "options": [
            "print()",
            "input()",
            "open()",
            "read()"
        ],
        "correct": 1,
        "explanation": "The input() function reads a single line of text entered by the user from standard input (keyboard) and returns it as a string."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nstr = input(\"Enter your input: \");\nprint (\"Received input is : \", str)\n```",
        "options": [
            "/ Enter your input: Hello Python / Received input is :  Hello Python /",
            "- [C] / Enter your input: Hello Python / Received input is :  Python",
            "None of the mentioned"
        ],
        "correct": 0,
        "explanation": "The input() function reads the entire line of text entered by the user (including spaces) as a string. So typing Hello Python returns “Hello Python”. The print() statement then displays the full input after the message."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nstr = input(\"Enter your input: \");\nprint (\"Received input is : \", str)\n```",
        "options": [
            "/ Enter your input: [x*5 for x in range(2,10,2)] / Received input is :  [x*5 for x in range(2,10,2)]",
            "/ Enter your input: [x*5 for x in range(2,10,2)] / Received input is :  [10, 30, 20, 40]",
            "/ Enter your input: [x*5 for x in range(2,10,2)] / Received input is :  [10, 10, 30, 40]",
            "None of the mentioned"
        ],
        "correct": 0,
        "explanation": "The input() function reads user input as a string, not as a Python expression. So when you enter [x*5 for x in range(2,10,2)], it treats it as a string rather than evaluating it as a list comprehension. Thus, it prints the exact input string."
    },
    {
        "category": "files",
        "question": "Which one of the following is not attributes of file?",
        "options": [
            "closed",
            "softspace",
            "rename",
            "mode"
        ],
        "correct": 2,
        "explanation": "closed, softspace, and mode are built-in attributes of a file object that provide information about the file’s state or how it was opened. rename is not an attribute of a file object; it’s a separate function used to change a file’s name."
    },
    {
        "category": "general",
        "question": "What is the use of tell() method in python?",
        "options": [
            "tells you the current position within the file",
            "tells you the end position within the file",
            "tells you the file is opened or not",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The tell() method returns the current position (offset) of the file pointer within the file, indicating where the next read or write will occur."
    },
    {
        "category": "files",
        "question": "What is the current syntax of rename() a file?",
        "options": [
            "rename(current_file_name, new_file_name)",
            "rename(new_file_name, current_file_name,)",
            "rename(()(current_file_name, new_file_name))",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The rename() function from the os module is used to rename files. The correct syntax is: os.rename(current_file_name, new_file_name), where the first argument is the existing file name and the second is the new name you want to assign."
    },
    {
        "category": "lists",
        "question": "What is the current syntax of remove() a file?",
        "options": [
            "remove(file_name)",
            "remove(new_file_name, current_file_name,)",
            "remove(() , file_name))",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The remove() function from the os module is used to delete a file. The correct syntax is: os.remove(file_name), where file_name is the name (or path) of the file to be deleted."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\nfo = open(\"foo.txt\", \"rw+\")\nprint(\"Name of the file: \", fo.name)\n \n# Assuming file has following 5 lines\n# This is 1st line\n# This is 2nd line\n# This is 3rd line\n# This is 4th line\n# This is 5th line\n \nfor index in range(5):\n    line = fo.next()\n    print(\"Line No %d - %s\" % (index, line))\n \n# Close opened file\nfo.close()\n```",
        "options": [
            "Compilation Error",
            "Syntax Error",
            "Displays Output",
            "None of the mentioned"
        ],
        "correct": 1,
        "explanation": "The given Python code contains syntax issues that prevent it from running correctly:\nInvalid File Mode (“rw+”) → “rw+” is not a valid mode in Python. Use “r+” instead.\nIncorrect print Statement → The syntax used for print is incorrect. print should be written properly as a function.\nIncorrect Use of next() → The method next() is not directly available for file objects in this way. The correct way to read the next line is next(fo)."
    },
    {
        "category": "files",
        "question": "What is the use of seek() method in files?",
        "options": [
            "sets the file’s current position at the offset",
            "sets the file’s previous position at the offset",
            "sets the file’s current position within the file",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The seek() method is used to move the file pointer to a specific position within the file. This position is defined by the offset (number of bytes from the beginning, or another reference point if specified). It’s useful for reading or writing at specific locations in a file."
    },
    {
        "category": "files",
        "question": "What is the use of truncate() method in file?",
        "options": [
            "truncates the file size",
            "deletes the content of the file",
            "deletes the file size",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The truncate() method is used to resize the file to a specified size. If no size is specified, it truncates the file at the current file pointer position. This can effectively reduce the file’s content by cutting off data beyond the set size."
    },
    {
        "category": "files",
        "question": "Which is/are the basic I/O connections in file?",
        "options": [
            "Standard Input",
            "Standard Output",
            "Standard Errors",
            "All of the mentioned"
        ],
        "correct": 3,
        "explanation": "The basic I/O connections in files include Standard Input (stdin), Standard Output (stdout), and Standard Errors (stderr), which are fundamental streams used for input and output operations.\nStandard Input is used to receive input data (usually from the keyboard).\nStandard Output is used to display output data (usually to the screen).\nStandard Errors is used to output error messages separately from standard output, allowing error handling and logging."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code? (If entered name is sanfoundry)\n\n```python\nimport sys\nprint('Enter your name: ', end='')\nname = ''\nwhile True:\n    c = sys.stdin.read(1)\n    if c == '\\n':\n        break\n    name += c\n \nprint('Your name is:', name)\n```",
        "options": [
            "sanfoundry",
            "/ Enter your name: sanfoundry / Your name is: sanfoundry /",
            "Your name is: san",
            "Enter your name: sanfoundry Your name is: sanfoundry"
        ],
        "correct": 1,
        "explanation": "This code reads one character at a time from standard input using sys.stdin.read(1).\nIt continues reading until a newline character (\\n) is encountered (when the user presses Enter).\nIf the input is sanfoundry, then name becomes sanfoundry. The final print statement displays:\nYour name is: sanfoundry"
    },
    {
        "category": "files",
        "question": "What will be the output of the following Python code? import sys sys.stdout.write(' Hello\\n') sys.stdout.write('Python\\n')",
        "options": [
            "Compilation Error",
            "Runtime Error",
            "Hello Python",
            "/ Hello / Python"
        ],
        "correct": 3,
        "explanation": "The sys.stdout.write() function writes text to the output without adding a newline automatically. Since both strings in the code include \\n, each line is printed on a new line as written. Therefore, the output is:\nHello\nPython"
    },
    {
        "category": "general",
        "question": "Which of the following mode will refer to binary data?",
        "options": [
            "r",
            "w",
            "+",
            "b"
        ],
        "correct": 3,
        "explanation": "The ‘b’ mode in file operations refers to binary mode. It’s used when reading or writing binary files (like images, videos, or executable files). For example:\n‘rb’ opens a file for reading in binary mode.\n‘wb’ opens a file for writing in binary mode.\nOther modes like ‘r’, ‘w’, and ‘+’ relate to text file operations or read/write permissions, not specifically binary data."
    },
    {
        "category": "general",
        "question": "What is the pickling?",
        "options": [
            "It is used for object serialization",
            "It is used for object deserialization",
            "None of the mentioned",
            "All of the mentioned"
        ],
        "correct": 0,
        "explanation": "Pickling is the process of converting a Python object into a byte stream, also known as serialization. This enables the object to be saved to a file or transmitted over a network. The reverse process, converting the byte stream back into a Python object, is called unpickling or deserialization. The pickle.dump() function is used to serialize (pickle) an object, while pickle.load() is used to deserialize (unpickle) it."
    },
    {
        "category": "general",
        "question": "What is unpickling?",
        "options": [
            "It is used for object serialization",
            "It is used for object deserialization",
            "None of the mentioned",
            "All of the mentioned"
        ],
        "correct": 1,
        "explanation": "Unpickling is the process of deserializing a pickled (serialized) object — that is, converting the byte stream back into a Python object. It is the reverse of pickling and is done using functions like pickle.load()."
    },
    {
        "category": "functions",
        "question": "What is the correct syntax of open() function?",
        "options": [
            "file = open(file_name [, access_mode][, buffering])",
            "file object = open(file_name [, access_mode][, buffering])",
            "file object = open(file_name)",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The correct and general syntax of the open() function in Python is:\nfile = open(file_name [, access_mode][, buffering])\nfile_name: Name of the file to be opened.\naccess_mode: Optional; specifies the mode in which the file is opened (‘r’, ‘w’, ‘a’, ‘rb’, etc.).\nbuffering: Optional; sets buffering policy."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nfo = open(\"foo.txt\", \"wb\")\nprint(\"Name of the file: \", fo.name)\nfo.flush()\nfo.close()\n```",
        "options": [
            "Compilation Error",
            "Runtime Error",
            "No Output",
            "Flushes the file when closing them"
        ],
        "correct": 3,
        "explanation": "The code opens a file in binary write mode and prints its name. The flush() method ensures any buffered data is written to the file. When close() is called, it automatically flushes the buffer as well, so the file is safely saved."
    },
    {
        "category": "files",
        "question": "Correct syntax of file.writelines() is?",
        "options": [
            "file.writelines(sequence)",
            "fileObject.writelines()",
            "fileObject.writelines(sequence)",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "The writelines() method is called on a file object and takes a sequence (like a list or tuple) of strings as its argument. It writes each string in the sequence to the file without adding newlines automatically. So, the proper syntax is:\nfileObject.writelines(sequence)"
    },
    {
        "category": "files",
        "question": "Correct syntax of file.readlines() is?",
        "options": [
            "fileObject.readlines( sizehint );",
            "fileObject.readlines();",
            "fileObject.readlines(sequence)",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The readlines() method reads all the lines from a file and returns them as a list of strings. It optionally accepts a sizehint argument, which is an approximate number of bytes to read. The correct syntax is:\nfileObject.readlines(sizehint)\nwhere sizehint is optional."
    },
    {
        "category": "files",
        "question": "In file handling, what does this terms means “r, a”?",
        "options": [
            "read, append",
            "append, read",
            "write, append",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "In file handling, “r” mode opens a file for reading, while “a” mode opens a file for appending, allowing new data to be added at the end of the file without overwriting existing content."
    },
    {
        "category": "files",
        "question": "What is the use of “w” in file handling?",
        "options": [
            "read",
            "write",
            "append",
            "none of the mentioned"
        ],
        "correct": 1,
        "explanation": "The “w” mode in file handling is used to write to a file. If the file already exists, it overwrites the content. If the file doesn’t exist, it creates a new file."
    },
    {
        "category": "files",
        "question": "What is the use of “a” in file handling?",
        "options": [
            "read",
            "write",
            "append",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "In file handling, the mode “a” stands for append. It opens the file for writing but adds new data at the end of the file without deleting the existing content. If the file doesn’t exist, it creates a new one."
    },
    {
        "category": "functions",
        "question": "Which function is used to read all the characters?",
        "options": [
            "read()",
            "readcharacters()",
            "readall()",
            "readchar()"
        ],
        "correct": 0,
        "explanation": "The function to read all characters from a file is read(). It reads the entire content of the file as a single string. The other options are not valid Python file methods."
    },
    {
        "category": "functions",
        "question": "Which function is used to read single line from file?",
        "options": [
            "readline()",
            "readlines()",
            "readstatement()",
            "readfullline()"
        ],
        "correct": 0,
        "explanation": "The readline() function reads one line at a time from a file. It returns the next line in the file each time it is called."
    },
    {
        "category": "functions",
        "question": "Which function is used to write all the characters?",
        "options": [
            "write()",
            "writecharacters()",
            "writeall()",
            "writechar()"
        ],
        "correct": 0,
        "explanation": "The write() function is used to write a string of characters to a file. It can be used to write a single character, a word, a sentence, or an entire block of text, depending on the input given. The other options are not valid Python file functions."
    },
    {
        "category": "strings",
        "question": "Which function is used to write a list of string in a file?",
        "options": [
            "writeline()",
            "writelines()",
            "writestatement()",
            "writefullline()"
        ],
        "correct": 1,
        "explanation": "The writelines() function writes a list (or any iterable) of strings to a file without adding newline characters automatically. To write each string on a new line, you must include \\n at the end of each string. It efficiently writes multiple lines in one call."
    },
    {
        "category": "functions",
        "question": "Which function is used to close a file in python?",
        "options": [
            "close()",
            "stop()",
            "end()",
            "closefile()"
        ],
        "correct": 0,
        "explanation": "The close() function is used to close an open file in Python. It is important to close a file after completing operations on it to free up system resources."
    },
    {
        "category": "files",
        "question": "Is it possible to create a text file in python?",
        "options": [
            "Yes",
            "No",
            "Machine dependent",
            "All of the mentioned"
        ],
        "correct": 0,
        "explanation": "Yes, it is possible to create a text file in Python using the open() function with modes like “w” (write) or “a” (append). If the specified file does not exist, Python will create it automatically."
    },
    {
        "category": "files",
        "question": "Which of the following are the modes of both writing and reading in binary format in file?",
        "options": [
            "wb+",
            "w",
            "wb",
            "w+"
        ],
        "correct": 0,
        "explanation": "Here is the description below\n“w”: Opens a file for writing only in text mode. Overwrites the file if it exists or creates a new one.\n“wb”: Opens a file for writing only in binary mode. Overwrites the file if it exists or creates a new one.\n“w+”: Opens a file for both writing and reading in text mode. Overwrites if the file exists or creates a new one.\n“wb+”: Opens a file for both writing and reading in binary mode. Overwrites if the file exists or creates a new one."
    },
    {
        "category": "files",
        "question": "Which of the following is not a valid mode to open a file?",
        "options": [
            "ab",
            "rw",
            "r+",
            "w+"
        ],
        "correct": 1,
        "explanation": "In Python, file modes like ab, r+, and w+ are valid. ab opens a file for appending in binary mode, r+ opens a file for both reading and writing, and w+ opens a file for both writing and reading (overwriting the existing file or creating a new one). However, rw is not a valid file mode in Python and will raise a ValueError if used."
    },
    {
        "category": "operators",
        "question": "What is the difference between r+ and w+ modes?",
        "options": [
            "no difference",
            "both r+ and w+ place the pointer at the beginning of the file, but w+ truncates (clears) the file, while r+ keeps its content",
            "in w+ the pointer is initially placed at the beginning of the file and the pointer is at the end for r+",
            "depends on the operating system"
        ],
        "correct": 1,
        "explanation": "Both r+ and w+ open the file for reading and writing. However, r+ requires the file to exist and does not truncate its content — it keeps the original data. On the other hand, w+ creates a new file if it doesn’t exist or clears the contents of the file if it does. In both cases, the file pointer is placed at the beginning of the file."
    },
    {
        "category": "files",
        "question": "How do you get the name of a file from a file object (fp)?",
        "options": [
            "fp.name",
            "fp.file(name)",
            "self.__name__(fp)",
            "fp.__name__()"
        ],
        "correct": 0,
        "explanation": "In Python, every file object has an attribute .name that stores the name of the file associated with that file object. So, fp.name returns the name of the file opened using that file object."
    },
    {
        "category": "files",
        "question": "Which of the following is not a valid attribute of a file object (fp)?",
        "options": [
            "fp.name",
            "fp.closed",
            "fp.mode",
            "fp.size"
        ],
        "correct": 3,
        "explanation": "In Python, file objects have attributes like:\nfp.name: the name of the file,\nfp.closed: a boolean indicating whether the file is closed,\nfp.mode: the mode in which the file was opened.\nHowever, fp.size is not a valid attribute of a file object. If you want to get the size of a file, you would typically use os.path.getsize(filename) instead."
    },
    {
        "category": "files",
        "question": "How do you close a file object (fp)?",
        "options": [
            "close(fp)",
            "fclose(fp)",
            "fp.close()",
            "fp.__close__()"
        ],
        "correct": 2,
        "explanation": "The correct way to close a file object fp in Python is fp.close(). This method ensures that any buffered output is flushed to the file and releases the file resource. It’s the standard and recommended way to close a file in Python."
    },
    {
        "category": "files",
        "question": "How do you get the current position within the file?",
        "options": [
            "fp.seek()",
            "fp.tell()",
            "fp.loc",
            "fp.pos"
        ],
        "correct": 1,
        "explanation": "The correct method to get the current position within a file is fp.tell(). This function returns the current position of the file pointer in bytes from the beginning of the file. It is commonly used to monitor the progress of reading or writing operations."
    },
    {
        "category": "files",
        "question": "How do you rename a file?",
        "options": [
            "fp.name = ‘new_name.txt’",
            "os.rename(existing_name, new_name)",
            "os.rename(fp, new_name)",
            "os.set_name(existing_name, new_name)"
        ],
        "correct": 1,
        "explanation": "In Python, to rename a file, the correct method is os.rename(old_name, new_name). This updates the file’s name on the filesystem. Modifying the fp.name attribute does not affect the actual file, and functions like os.set_name or using the file object directly with os.rename() are not valid."
    },
    {
        "category": "files",
        "question": "How do you delete a file?",
        "options": [
            "del(fp)",
            "fp.delete()",
            "os.remove(‘file’)",
            "os.delete(‘file’)"
        ],
        "correct": 2,
        "explanation": "The correct way to delete a file in Python is os.remove(‘file’). This function from the os module permanently deletes the file specified by the given path. It does not move it to the recycle bin. Make sure to import the os module before using it:\nimport os\nos.remove('file.txt')"
    },
    {
        "category": "files",
        "question": "How do you change the file position to an offset value from the start?",
        "options": [
            "fp.seek(offset, 0)",
            "fp.seek(offset, 1)",
            "fp.seek(offset, 2)",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The seek() method is used to change the file’s current position. The second argument specifies the reference point: 0 means from the beginning of the file, 1 means from the current position, and 2 means from the end of the file. Therefore, fp.seek(offset, 0) moves the pointer to offset bytes from the start."
    },
    {
        "category": "control",
        "question": "What happens if no arguments are passed to the seek function?",
        "options": [
            "file position is set to the start of file",
            "file position is set to the end of file",
            "file position remains unchanged",
            "error"
        ],
        "correct": 3,
        "explanation": "The seek() function requires at least one argument (the offset). If called without arguments, it raises a TypeError because the mandatory offset parameter is missing."
    },
    {
        "category": "functions",
        "question": "Which function is called when the following Python code is executed?\n\n```python\nf = foo()\nformat(f)\n```",
        "options": [
            "format()",
            "__format__()",
            "str()",
            "__str__()"
        ],
        "correct": 1,
        "explanation": "When format(f) is called, Python internally invokes the special method f.__format__(). This is different from str(f) or f.__str__() which are used for string conversion. The __format__() method defines how the object should be formatted using the format() function."
    },
    {
        "category": "builtins",
        "question": "Which of the following Python code will print True?\n\n```python\na = foo(2)\nb = foo(3)\nprint(a < b)\n```",
        "options": [
            "- [B] / / class foo: / def __init__(self, x): / self.x = x / def __less__(self, other): / if self.x > other.x: / return False / else: / return True",
            "/ class foo: / def __init__(self, x): / self.x = x / def __lt__(self, other): / if self.x < other.x: / return True / else: / return False",
            "/ class foo: / def __init__(self, x): / self.x = x / def __less__(self, other): / if self.x < other.x: / return False / else: / return True"
        ],
        "correct": 1,
        "explanation": "Python uses the special method __lt__(self, other) to implement the < operator. The code that defines __lt__() and returns self.x < other.x will correctly compare the two foo objects. Given a = foo(2) and b = foo(3), this comparison results in 2 < 3, which is True."
    },
    {
        "category": "operators",
        "question": "Which function overloads the + operator?",
        "options": [
            "__add__()",
            "__plus__()",
            "__sum__()",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The function that overloads the + operator in Python is __add__(). When you use the + operator between two objects, Python internally calls the __add__() method of the first object to perform the addition. Other options like __plus__() and __sum__() do not exist as special methods in Python."
    },
    {
        "category": "operators",
        "question": "Which operator is overloaded by __invert__()?",
        "options": [
            "!",
            "~",
            "^",
            "–"
        ],
        "correct": 1,
        "explanation": "The __invert__() method is used to overload the bitwise NOT operator (~) in Python. When you use ~x, Python internally calls x.__invert__() to compute the result."
    },
    {
        "category": "operators",
        "question": "Which function overloads the == operator?",
        "options": [
            "__eq__()",
            "__equ__()",
            "__isequal__()",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "The __eq__() method is used to overload the == operator in Python. When you compare two objects using ==, Python internally calls obj1.__eq__(obj2) to determine equality."
    },
    {
        "category": "operators",
        "question": "Which operator is overloaded by __lg__()?",
        "options": [
            "<",
            ">",
            "!=",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "There is no special method __lg__() in Python for operator overloading. Comparison operators like < and > are overloaded using __lt__() and __gt__() respectively. Hence, __lg__() does not overload any operator."
    },
    {
        "category": "operators",
        "question": "Which function overloads the >> operator?",
        "options": [
            "__more__()",
            "__gt__()",
            "__ge__()",
            "none of the mentioned"
        ],
        "correct": 3,
        "explanation": "The >> (right shift) operator is overloaded in Python using the __rshift__() method. None of the given options (like __gt__() or __ge__()) are used for shifting operations. Hence, the correct answer is “none of the mentioned”."
    },
    {
        "category": "operators",
        "question": "Let A and B be objects of class Foo. Which functions are called when print(A + B) is executed?",
        "options": [
            "__add__(), __str__()",
            "__str__(), __add__()",
            "__sum__(), __str__()",
            "__str__(), __sum__()"
        ],
        "correct": 0,
        "explanation": "When print(A + B) is executed, Python first evaluates the expression A + B, which calls the __add__() method of class Foo. The result of this addition (which is usually another object) is then passed to print(), which calls the __str__() method on it to convert it to a string for display."
    },
    {
        "category": "operators",
        "question": "Which operator is overloaded by the __or__() function?",
        "options": [
            "||",
            "|",
            "//",
            "/"
        ],
        "correct": 1,
        "explanation": "The __or__() function is used to overload the bitwise OR (|) operator in Python. This allows custom behavior when using | with objects of user-defined classes."
    },
    {
        "category": "operators",
        "question": "Which function overloads the // operator?",
        "options": [
            "__div__()",
            "__ceildiv__()",
            "__floordiv__()",
            "__truediv__()"
        ],
        "correct": 2,
        "explanation": "The __floordiv__() method is used to overload the floor division operator (//) in Python. It defines the behavior of // when used between objects of a custom class."
    },
    {
        "category": "general",
        "question": "_____ represents an entity in the real world with its identity and behaviour.",
        "options": [
            "A method",
            "An object",
            "A class",
            "An operator"
        ],
        "correct": 1,
        "explanation": "An object represents a real-world entity with state (identity) and behavior in object-oriented programming. It is an instance of a class and encapsulates data and functions that operate on that data."
    },
    {
        "category": "general",
        "question": "_____ is used to create an object.",
        "options": [
            "class",
            "constructor",
            "User-defined functions",
            "In-built functions"
        ],
        "correct": 1,
        "explanation": "A constructor is a special method (usually __init__ in Python) used to create and initialize an object of a class. It is automatically invoked when a new object is created using the class."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nclass test:\n     def __init__(self,a=\"Hello World\"):\n         self.a=a\n \n     def display(self):\n         print(self.a)\nobj=test()\nobj.display()\n```",
        "options": [
            "The program has an error because constructor can’t have default arguments",
            "Nothing is displayed",
            "“Hello World” is displayed",
            "The program has an error display function doesn’t have parameters"
        ],
        "correct": 2,
        "explanation": "The constructor __init__ has a default argument “Hello World”, which is perfectly valid in Python. When obj = test() is called without arguments, the default value is used. Then obj.display() prints the value of self.a, which is “Hello World”."
    },
    {
        "category": "general",
        "question": "What is setattr() used for?",
        "options": [
            "To access the attribute of the object",
            "To set an attribute",
            "To check if an attribute exists or not",
            "To delete an attribute"
        ],
        "correct": 1,
        "explanation": "The setattr() function in Python is used to assign a value to an object’s attribute. It takes three arguments: the object, the name of the attribute as a string, and the value to set. For example, setattr(obj, ‘x’, 10) sets obj.x = 10."
    },
    {
        "category": "general",
        "question": "What is getattr() used for?",
        "options": [
            "To access the attribute of the object",
            "To delete an attribute",
            "To check if an attribute exists or not",
            "To set an attribute"
        ],
        "correct": 0,
        "explanation": "The getattr() function is used to retrieve the value of an attribute from an object. It takes the object and attribute name (as a string) as arguments. For example, getattr(obj, ‘name’) returns the value of obj.name."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\nclass change:\n    def __init__(self, x, y, z):\n        self.a = x + y + z\n \nx = change(1,2,3)\ny = getattr(x, 'a')\nsetattr(x, 'a', y+1)\nprint(x.a)\n```",
        "options": [
            "6",
            "7",
            "Error",
            "0"
        ],
        "correct": 1,
        "explanation": "The change class constructor initializes self.a to the sum of x, y, and z, which is 1 + 2 + 3 = 6.\ngetattr(x, ‘a’) retrieves the value 6.\nsetattr(x, ‘a’, y + 1) updates x.a to 7.\nSo, print(x.a) outputs 7."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nclass test:\n     def __init__(self,a):\n         self.a=a\n \n     def display(self):\n         print(self.a)\nobj=test()\nobj.display()\n```",
        "options": [
            "Runs normally, doesn’t display anything",
            "Displays 0, which is the automatic default value",
            "Error as one argument is required while creating the object",
            "Error as display function requires additional argument"
        ],
        "correct": 2,
        "explanation": "The __init__ method in the test class requires one argument a besides self. When creating the object with obj = test(), no argument is passed, which leads to a TypeError because Python expects one argument. Hence, the program results in an error due to the missing required argument during object creation."
    },
    {
        "category": "functions",
        "question": "Is the following Python code correct?\n\n```python\nclass A:\n    def __init__(self,b):\n        self.b=b\n    def display(self):\n        print(self.b)\nobj=A(\"Hello\")\ndel obj\n```",
        "options": [
            "True",
            "False"
        ],
        "correct": 0,
        "explanation": "Yes, the code is correct. The class A is defined properly with an __init__ method and a display method. An object obj of class A is created with the argument “Hello”. Using del obj deletes the reference to the object without causing any error. Hence, the answer is True."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nclass test:\n    def __init__(self):\n        self.variable = 'Old'\n        self.Change(self.variable)\n    def Change(self, var):\n        var = 'New'\nobj=test()\nprint(obj.variable)\n```",
        "options": [
            "Error because function change can’t be called in the __init__ function",
            "‘New’ is printed",
            "‘Old’ is printed",
            "Nothing is printed"
        ],
        "correct": 2,
        "explanation": "In the __init__ method, self.variable is set to ‘Old’. Then, self.Change(self.variable) is called, passing the string ‘Old’ as an argument. Inside the Change method, the parameter var is assigned ‘New’, but this only changes the local variable var and does not affect self.variable. Therefore, when print(obj.variable) is called, it prints the original value ‘Old’."
    },
    {
        "category": "general",
        "question": "What is Instantiation in terms of OOP terminology?",
        "options": [
            "Deleting an instance of class",
            "Modifying an instance of class",
            "Copying an instance of class",
            "Creating an instance of class"
        ],
        "correct": 3,
        "explanation": "Instantiation in Object-Oriented Programming (OOP) refers to the process of creating a specific object (instance) from a class. When a class is instantiated, memory is allocated for the new object, and its constructor (like __init__ in Python) is called to initialize it. Thus, instantiation means creating an instance of a class."
    },
    {
        "category": "strings",
        "question": "What will be the output of the following Python code?\n\n```python\nclass fruits:\n    def __init__(self, price):\n        self.price = price\nobj=fruits(50)\n \nobj.quantity=10\nobj.bags=2\n \nprint(obj.quantity+len(obj.__dict__))\n```",
        "options": [
            "12",
            "52",
            "13",
            "60"
        ],
        "correct": 2,
        "explanation": "Here,\nobj.quantity is set to 10.\nobj.__dict__ stores all instance attributes as a dictionary. Here it contains ‘price’, ‘quantity’, and ‘bags’, so its length is 3.\nThe expression obj.quantity + len(obj.__dict__) evaluates to 10 + 3 = 13."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\nclass Demo:\n    def __init__(self):\n        pass\n \n    def test(self):\n        print(__name__)\n \nobj = Demo()\nobj.test()\n```",
        "options": [
            "Exception is thrown",
            "__main__",
            "Demo",
            "test"
        ],
        "correct": 1,
        "explanation": "In Python, the special variable __name__ represents the name of the current module. When a script is run directly (not imported), __name__ is set to ‘__main__’. In this code, the function test() prints the value of __name__. Since the script is being executed as the main program, the output will be ‘__main__’."
    },
    {
        "category": "operators",
        "question": "The assignment of more than one function to a particular operator is _______",
        "options": [
            "Operator over-assignment",
            "Operator overriding",
            "Operator overloading",
            "Operator instance"
        ],
        "correct": 2,
        "explanation": "Operator overloading allows a class to define or customize the behavior of standard operators (such as +, -, *) for its own objects by implementing special methods like __add__(), __sub__(), and others. This enables the same operator to perform different operations depending on the context or the types of objects involved."
    },
    {
        "category": "general",
        "question": "Which of the following is not a class method?",
        "options": [
            "Non-static",
            "Static",
            "Bounded",
            "Unbounded"
        ],
        "correct": 0,
        "explanation": "The three different class methods in Python are static, bounded and unbounded methods. A non-static method typically refers to an instance method, which is not considered a class method. Class methods are those that take the class (cls) as the first argument and are marked with the @classmethod decorator. Static methods (@staticmethod) and unbounded methods can still be associated with classes."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ndef add(c,k):\n    c.test=c.test+1\n    k=k+1\nclass A:\n    def __init__(self):\n        self.test = 0\ndef main():\n    Count=A()\n    k=0\n \n    for i in range(0,25):\n        add(Count,k)\n    print(\"Count.test=\", Count.test)\n    print(\"k =\", k)\nmain()\n```",
        "options": [
            "Exception is thrown",
            "- **[C] / Count.test=25 / k = 0",
            "/ Count.test=0 / k = 0"
        ],
        "correct": 0,
        "explanation": "The add function increases the object’s attribute test by 1 each time, so after 25 calls, Count.test becomes 25. However, k inside add is a local copy and changing it does not affect the original k in main(), so k stays 0."
    },
    {
        "category": "general",
        "question": "Which of the following Python code creates an empty class?",
        "options": [
            "/ class A: / return",
            "/ class A: / pass",
            "/ class A:",
            "It is not possible to create an empty class"
        ],
        "correct": 1,
        "explanation": "In Python, an empty class cannot have no statements inside the body—this causes a syntax error. The pass statement acts as a placeholder and allows defining an empty class without error. Using return inside the class body is invalid syntax, and leaving the class body completely empty also raises a syntax error."
    },
    {
        "category": "functions",
        "question": "Is the following Python code valid?\n\n```python\nclass B(object):\n  def first(self):\n    print(\"First method called\")\n  def second():\n    print(\"Second method called\")\nob = B()\nB.first(ob)\n```",
        "options": [
            "It isn’t as the object declaration isn’t right",
            "It isn’t as there isn’t any __init__ method for initializing class members",
            "Yes, this method of calling is called unbounded method call",
            "Yes, this method of calling is called bounded method call"
        ],
        "correct": 2,
        "explanation": "Yes, the code is valid. Calling B.first(ob) is an example of an unbounded method call, where the method is called on the class and you explicitly pass the instance (ob) as the first argument (self). Note that second() is invalid here because it lacks the self parameter."
    },
    {
        "category": "general",
        "question": "What are the methods which begin and end with two underscore characters called?",
        "options": [
            "Special methods",
            "In-built methods",
            "User-defined methods",
            "Additional methods"
        ],
        "correct": 0,
        "explanation": "Methods that begin and end with double underscores (like __init__, __str__, __lt__) are called special methods (or sometimes magic methods). They define special behavior in Python classes."
    },
    {
        "category": "general",
        "question": "Special methods need to be explicitly called during object creation.",
        "options": [
            "True",
            "False"
        ],
        "correct": 1,
        "explanation": "Special methods (like __init__) are automatically called by Python during object creation or certain operations; you don’t need to call them explicitly. For example, __init__ runs automatically when you create an instance."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nclass demo():\n    def __repr__(self):\n        return '__repr__ built-in function called'\n    def __str__(self):\n        return '__str__ built-in function called'\ns=demo()\nprint(s)\n```",
        "options": [
            "Error",
            "Nothing is printed",
            "__str__ built-in function called",
            "__repr__ built-in function called"
        ],
        "correct": 2,
        "explanation": "When you print an object, Python first tries to call its __str__() method to get a user-friendly string representation. If __str__() is not defined, then it falls back to __repr__(). Since both methods are defined here, print(s) calls s.__str__(), so the output is __str__ built-in function called."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nclass demo():\n    def __repr__(self):\n        return '__repr__ built-in function called'\n    def __str__(self):\n        return '__str__  built-in function called'\ns=demo()\nprint(s)\n```",
        "options": [
            "__str__ built-in function called",
            "__repr__ built-in function called",
            "Error",
            "Nothing is printed"
        ],
        "correct": 1,
        "explanation": "In Python, __repr__() is called when repr() is used or when an object is displayed in the interpreter. In the code, repr(s) explicitly calls __repr__(), so the output is __repr__ built-in function called."
    },
    {
        "category": "general",
        "question": "What is hasattr(obj,name) used for?",
        "options": [
            "To access the attribute of the object",
            "To delete an attribute",
            "To check if an attribute exists or not",
            "To set an attribute"
        ],
        "correct": 2,
        "explanation": "The hasattr(obj, name) function checks whether the object obj has an attribute with the name name. It returns True if the attribute exists, otherwise False."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nclass stud:\n   def __init__(self, roll_no, grade):\n      self.roll_no = roll_no\n      self.grade = grade\n   def display (self):\n      print(\"Roll no : \", self.roll_no,  \", Grade: \", self.grade)\nstud1 = stud(34, 'S')\nstud1.age=7\nprint(hasattr(stud1, 'age'))\n```",
        "options": [
            "Error as age isn’t defined",
            "True",
            "False",
            "7"
        ],
        "correct": 1,
        "explanation": "In Python, attributes can be added to objects dynamically. In the given code, stud1.age = 7 adds an age attribute to the stud1 object. The function hasattr(stud1, ‘age’) then checks for the existence of this attribute, returning True since it was successfully added."
    },
    {
        "category": "general",
        "question": "What is delattr(obj,name) used for?",
        "options": [
            "To print deleted attribute",
            "To delete an attribute",
            "To check if an attribute is deleted or not",
            "To set an attribute"
        ],
        "correct": 1,
        "explanation": "The delattr(obj, name) function in Python is used to delete an attribute from an object. If the attribute specified by name exists, it will be removed from the object obj."
    },
    {
        "category": "general",
        "question": "__del__ method is used to destroy instances of a class.",
        "options": [
            "True",
            "False"
        ],
        "correct": 0,
        "explanation": "Yes, the __del__ method in Python is known as a destructor. It is automatically called when an object is about to be destroyed, typically during garbage collection. This method can be used to clean up resources like closing files or network connections."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\nclass student:\n   ‘Base class for all students’\n   def __init__(self, roll_no, grade):\n      self.roll_no = roll_no\n      self.grade = grade\n   def display (self):\n      print(\"Roll no : \", self.roll_no,  \", Grade: \", self.grade)\nprint(student.__doc__)\n```",
        "options": [
            "Exception is thrown",
            "__main__",
            "Nothing is displayed",
            "Base class for all students"
        ],
        "correct": 3,
        "explanation": "In Python, a docstring is a special string placed right after the definition of a class, function, or module. It describes the purpose of that block and can be accessed using the __doc__ attribute. Here, student.__doc__ returns “Base class for all students”."
    },
    {
        "category": "builtins",
        "question": "What does print(Test.__name__) display (assuming Test is the name of the class)?",
        "options": [
            "()",
            "Exception is thrown",
            "Test",
            "__main__"
        ],
        "correct": 2,
        "explanation": "Test.__name__ returns the name of the class as a string. So, if the class is defined as class Test:, then print(Test.__name__) will output “Test”."
    },
    {
        "category": "files",
        "question": "How many except statements can a try-except block have?",
        "options": [
            "zero",
            "one",
            "more than one",
            "more than zero"
        ],
        "correct": 3,
        "explanation": "A try block can have one or more except clauses to handle different exceptions. It must have at least one except block to catch errors."
    },
    {
        "category": "control",
        "question": "When will the else part of try-except-else be executed?",
        "options": [
            "always",
            "when an exception occurs",
            "when no exception occurs",
            "when an exception occurs in to except block"
        ],
        "correct": 2,
        "explanation": "In a try-except-else block, the else part is executed only if no exception is raised in the try block. If an exception occurs, the except block runs instead, and the else block is skipped."
    },
    {
        "category": "files",
        "question": "Is the following Python code valid?\n\n```python\ntry:\n    # Do something\nexcept:\n    # Do something\nfinally:\n    # Do something\n```",
        "options": [
            "no, there is no such thing as finally",
            "no, finally cannot be used with except",
            "no, finally must come before except",
            "yes"
        ],
        "correct": 3,
        "explanation": "In Python, it is perfectly valid to use a try-except-finally block. The finally clause is always executed, regardless of whether an exception occurred or was handled."
    },
    {
        "category": "control",
        "question": "Is the following Python code valid?\n\n```python\ntry:\n    # Do something\nexcept:\n    # Do something\nelse:\n    # Do something\n```",
        "options": [
            "no, there is no such thing as else",
            "no, else cannot be used with except",
            "no, else must come before except",
            "yes"
        ],
        "correct": 3,
        "explanation": "In Python, the try-except-else construct is valid. The else block is executed only if no exception occurs in the try block."
    },
    {
        "category": "files",
        "question": "Can a single except block handle multiple exceptions in Python?",
        "options": [
            "Yes, like except TypeError, SyntaxError",
            "Yes, like except [TypeError, SyntaxError]",
            "Yes, like except (TypeError, SyntaxError)",
            "No"
        ],
        "correct": 2,
        "explanation": "In Python, a single except block can handle multiple exceptions by grouping them inside parentheses as a tuple. This syntax allows one block to catch and handle different exception types together.\nExample:\n\ntry:\n    # code that may raise TypeError or SyntaxError\nexcept (TypeError, SyntaxError):\n    # handle both exceptions here"
    },
    {
        "category": "files",
        "question": "When is the finally block executed?",
        "options": [
            "when there is no exception",
            "when there is an exception",
            "only if some condition that has been specified is satisfied",
            "always"
        ],
        "correct": 3,
        "explanation": "The finally block is always executed, regardless of whether an exception occurs or not. It is typically used for cleanup actions like closing files or releasing resources, ensuring that such code runs no matter what happens in the try or except blocks."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef foo():\n    try:\n        return 1\n    finally:\n        return 2\nk = foo()\nprint(k)\n```",
        "options": [
            "1",
            "2",
            "3",
            "error, there is more than one return statement in a single try-finally block"
        ],
        "correct": 1,
        "explanation": "In Python, if both the try block and the finally block contain return statements, the return in the finally block overrides the one in the try block. So, even though return 1 is in the try, the function ends up returning 2 because of the finally block."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef foo():\n    try:\n        print(1)\n    finally:\n        print(2)\nfoo()\n```",
        "options": [
            "/ 1 / 2",
            "1",
            "2",
            "none of the mentioned"
        ],
        "correct": 0,
        "explanation": "In this code, the try block executes and prints 1. The finally block always executes, regardless of whether an exception occurs, so it prints 2. Therefore, the output is both 1 and 2, printed in order."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ntry:\n    if '1' != 1:\n        raise \"someError\"\n    else:\n        print(\"someError has not occurred\")\nexcept \"someError\":\n    print (\"someError has occurred\")\n```",
        "options": [
            "someError has occurred",
            "someError has not occurred",
            "invalid code",
            "none of the mentioned"
        ],
        "correct": 2,
        "explanation": "In Python, exceptions must be derived from the built-in BaseException class (usually subclasses of Exception). You cannot raise a string like “someError”. Also, the except clause expects an exception type, not a string. This code will raise a TypeError at runtime, making it invalid."
    },
    {
        "category": "general",
        "question": "What happens when ‘1’ == 1 is executed?",
        "options": [
            "we get a True",
            "we get a False",
            "an TypeError occurs",
            "a ValueError occurs"
        ],
        "correct": 1,
        "explanation": "In Python, ‘1’ is a string and 1 is an integer. Comparing them using == returns False, because they are of different data types and do not hold the same value in Python’s type system."
    },
    {
        "category": "control",
        "question": "The following Python code will result in an error if the input value is entered as -5.\n\n```python\nx = int(input(\"Enter a number: \"))\nprint(\"You entered:\", x)\n \nif x < 0:\n    assert False, 'Spanish'\n```",
        "options": [
            "True",
            "False"
        ],
        "correct": 0,
        "explanation": "The statement assert False, ‘Spanish’ will always raise an AssertionError with the message ‘Spanish’ regardless of any input because the condition is explicitly False. Therefore, if this line runs, it will result in an error (AssertionError)."
    },
    {
        "category": "output",
        "question": "What will be the output of the following Python code?\n\n```python\nx=10\ny=8\nassert x>y, 'X too small'\n```",
        "options": [
            "Assertion Error",
            "10 8",
            "No output",
            "108"
        ],
        "correct": 2,
        "explanation": "The code shown above results in an error if and only if x<y. However, in the above case, since x>y, there is no error. Since there is no print statement, hence there is no output."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\n#generator\ndef f(x):\n    yield x+1\ng=f(8)\nprint(next(g))\n```",
        "options": [
            "8",
            "9",
            "7",
            "Error"
        ],
        "correct": 1,
        "explanation": "The function f(x) is a generator that yields x + 1. When f(8) is called, it returns a generator object g. Calling next(g) executes the function up to the yield statement, which yields 8 + 1 = 9. Hence, the output is 9."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef f(x):\n    yield x+1\n    print(\"test\")\n    yield x+2\ng=f(9)\n```",
        "options": [
            "Error",
            "test",
            "/ test / 10 / 12",
            "No output"
        ],
        "correct": 3,
        "explanation": "The generator f(9) is defined, and g is assigned the generator object, but since next() is never called on g, the generator’s code never runs, so nothing is printed or yielded. Therefore, the output is none (no output)."
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef f(x):\n    yield x+1\n    print(\"test\")\n    yield x+2\ng=f(10)\nprint(next(g))\nprint(next(g))\n```",
        "options": [
            "No output",
            "/ 11 / test / 12",
            "/ 11 / test",
            "11"
        ],
        "correct": 1,
        "explanation": "The first call to next(g) runs the generator until it reaches the first yield, which returns x + 1 → 11. The second call to next(g) resumes execution right after the first yield, prints “test”, and then reaches the second yield, which returns x + 2 → 12.\nTherefore, the output is:\n\n11\ntest\n12"
    },
    {
        "category": "functions",
        "question": "What will be the output of the following Python code?\n\n```python\ndef a():\n    try:\n        f(x, 4)\n    finally:\n        print('after f')\n    print('after f?')\na()\n```",
        "options": [
            "No output",
            "after f?",
            "/ after f / error",
            "after f"
        ],
        "correct": 2,
        "explanation": "The function f is called inside the try block with x undefined, which raises a NameError. The finally block executes and prints “after f”. However, since the exception is not caught (no except block), the error propagates, and the line print(‘after f?’) is never executed. Therefore, the program results in an error after printing “after f”.\nThe output will be:\nafter f\nTraceback (most recent call last):\n  ...\nNameError: name 'x' is not defined"
    },
    {
        "category": "lists",
        "question": "What will be the output of the following Python code?\n\n```python\ndef f(x):\n    for i in range(5):\n        yield i\ng=f(8)\nprint(list(g))\n```",
        "options": [
            "[0, 1, 2, 3, 4]",
            "[1, 2, 3, 4, 5, 6, 7, 8]",
            "[1, 2, 3, 4, 5]",
            "[0, 1, 2, 3, 4, 5, 6, 7]"
        ],
        "correct": 0,
        "explanation": "The parameter x is not used inside the function f(). The function simply yields numbers from 0 to 4 using range(5). So, converting the generator g to a list prints [0, 1, 2, 3, 4]."
    },
    {
        "category": "builtins",
        "question": "The error displayed in the following Python code is?\n\n```python\nimport itertools\nl1=(1, 2, 3)\nl2=[4, 5, 6]\nl=itertools.chain(l1, l2)\nprint(next(l1))\n```",
        "options": [
            "‘list’ object is not iterator",
            "‘tuple’ object is not iterator",
            "‘list’ object is iterator",
            "‘tuple’ object is iterator"
        ],
        "correct": 1,
        "explanation": "The error occurs because l1 is a tuple, which is iterable but not an iterator. The next() function requires an iterator, so calling next(l1) directly raises a TypeError. To fix it, use next(iter(l1))."
    },
    {
        "category": "files",
        "question": "Which of the following is not an exception handling keyword in Python?",
        "options": [
            "try",
            "except",
            "accept",
            "finally"
        ],
        "correct": 2,
        "explanation": "In Python, the keywords used for exception handling are try, except, else, and finally. The word accept is not a valid Python keyword for exception handling and will result in a syntax error if used."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ng = (i for i in range(5))\nprint(type(g))\n```",
        "options": [
            "class <’loop’>",
            "class <‘iteration’>",
            "class <’range’>",
            "class <’generator’>"
        ],
        "correct": 3,
        "explanation": "The expression (i for i in range(5)) creates a generator object in Python. When you check its type using type(g), it returns <class ‘generator’>, which indicates that g is a generator. Generators are used for lazy iteration and are created using generator expressions or functions with yield."
    },
    {
        "category": "control",
        "question": "What happens if the file is not found in the following Python code?\n\n```python\na=False\nwhile not a:\n    try:\n        f_n = input(\"Enter file name\")\n        i_f = open(f_n, 'r')\n    except:\n        print(\"Input file not found\")\n```",
        "options": [
            "No error",
            "Assertion error",
            "Input output error",
            "Name error"
        ],
        "correct": 0,
        "explanation": "If the file is not found, the open(f_n, ‘r’) line will raise a FileNotFoundError, which is caught by the except block. The message “Input file not found” is printed, and the program continues due to the while not a: loop. Since the exception is handled gracefully, no unhandled error is raised, making the answer “No error.”"
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nlst = [1, 2, 3]\nprint(lst[3])\n```",
        "options": [
            "NameError",
            "ValueError",
            "IndexError",
            "TypeError"
        ],
        "correct": 2,
        "explanation": "The list lst has elements at indices 0, 1, and 2. Trying to access lst[3] is out of range, as index 3 does not exist. This raises an IndexError, which occurs when a sequence subscript is out of range."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(t[5])\n```",
        "options": [
            "IndexError",
            "NameError",
            "TypeError",
            "ValeError"
        ],
        "correct": 1,
        "explanation": "In the expression t[5], the variable t is used without being defined anywhere in the code. This results in a NameError, which occurs when a local or global name is not found. Python raises this error when it encounters a name that it doesn’t recognize."
    },
    {
        "category": "operators",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(4 + '3')\n```",
        "options": [
            "NameError",
            "IndexError",
            "ValueError",
            "TypeError"
        ],
        "correct": 3,
        "explanation": "The expression 4 + ‘3’ tries to add an integer (4) and a string (‘3’), which are incompatible types for the + operator in Python. This results in a TypeError."
    },
    {
        "category": "builtins",
        "question": "What will be the output of the following Python code?\n\n```python\nprint(int('65.43'))\n```",
        "options": [
            "ImportError",
            "ValueError",
            "TypeError",
            "NameError"
        ],
        "correct": 1,
        "explanation": "The string ‘65.43’ represents a floating-point number, not an integer. The int() function cannot directly convert a string containing a decimal point to an integer, so it raises a ValueError. To convert such a string, you must first convert it to a float, then to an int."
    },
    {
        "category": "control",
        "question": "Compare the following two Python codes shown below and state the output if the input entered in each case is -6?\n\n```python\nCODE 1\nimport math\nnum=int(input(\"Enter a number of whose factorial you want to find\"))\nprint(math.factorial(num))\n \nCODE 2\nnum=int(input(\"Enter a number of whose factorial you want to find\"))\nprint(math.factorial(num))\n```",
        "options": [
            "ValueError, NameError",
            "AttributeError, ValueError",
            "NameError, TypeError",
            "TypeError, ValueError"
        ],
        "correct": 0,
        "explanation": "In Code 1, the math module is imported, but calling math.factorial(-6) raises a ValueError because factorials are only defined for non-negative integers. In Code 2, since math is not imported, calling math.factorial(-6) raises a NameError as Python doesn’t recognize the name math."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code?\n\n```python\ndef getMonth(m):\n    if m<1 or m>12:\n        raise ValueError(\"Invalid\")\n    print(m)\ngetMonth(6)\n```",
        "options": [
            "ValueError",
            "Invalid",
            "6",
            "ValueError(“Invalid”)"
        ],
        "correct": 2,
        "explanation": "The function getMonth checks whether the value of m is outside the range 1 to 12. Since 6 falls within this valid range, the condition m < 1 or m > 12 evaluates to False, so the raise statement is not executed. The function then proceeds to print m, which outputs 6."
    },
    {
        "category": "control",
        "question": "What will be the output of the following Python code if the input entered is 6?\n\n```python\nvalid = False\nwhile not valid:\n    try:\n        n=int(input(\"Enter a number\"))\n        while n%2==0:\n            print(\"Bye\")\n        valid = True\n    except ValueError:\n        print(\"Invalid\")\n```",
        "options": [
            "Bye (printed once)",
            "No output",
            "Invalid (printed once)",
            "Bye (printed infinite number of times)"
        ],
        "correct": 3,
        "explanation": "When n is 6 (an even number), the inner while n%2 == 0: loop will run infinitely because n never changes inside the loop. Therefore, “Bye” will be printed endlessly, causing an infinite loop."
    },
    {
        "category": "builtins",
        "question": "Identify the type of error in the following Python codes?\n\n```python\nPrint(“Good Morning”)\nprint(“Good night)\n```",
        "options": [
            "Syntax, Syntax",
            "Semantic, Syntax",
            "Semantic, Semantic",
            "Syntax, Semantic"
        ],
        "correct": 0,
        "explanation": "Print(“Good Morning”) causes a SyntaxError because Python is case-sensitive, and the correct function name is print (all lowercase).\nprint(“Good night) also results in a SyntaxError due to a missing closing quotation mark, making the string improperly formatted.\nBoth are syntax errors, not semantic errors, because they violate the rules of Python syntax."
    },
    {
        "category": "general",
        "question": "Which of the following statements is true?",
        "options": [
            "The standard exceptions are automatically imported into Python programs",
            "All raised standard exceptions must be handled in Python",
            "When there is a deviation from the rules of a programming language, a semantic error is thrown",
            "If any exception is thrown in try block, else block is executed"
        ],
        "correct": 0,
        "explanation": "Python’s standard exceptions (like ValueError, TypeError, etc.) are built-in and available by default, so you don’t need to import them explicitly. The other options are incorrect because:\nNot all raised exceptions must be handled.\nSemantic errors are different from exceptions.\nThe else block runs only if no exception occurs in the try block."
    },
    {
        "category": "files",
        "question": "Which of the following is not a standard exception in Python?",
        "options": [
            "NameError",
            "IOError",
            "AssignmentError",
            "ValueError"
        ],
        "correct": 2,
        "explanation": "AssignmentError is not a standard exception in Python. Common standard exceptions include NameError (when a variable is not defined), IOError (input/output operation failure), and ValueError (when a function receives an argument of the right type but inappropriate value)."
    },
    {
        "category": "general",
        "question": "Syntax errors are also known as parsing errors.",
        "options": [
            "True",
            "False"
        ],
        "correct": 0,
        "explanation": "Syntax errors occur when the code violates the rules of the programming language grammar. They are also called parsing errors because the parser fails to interpret the code structure correctly."
    },
    {
        "category": "files",
        "question": "An exception is ____________",
        "options": [
            "an object",
            "a special function",
            "a standard module",
            "a module"
        ],
        "correct": 0,
        "explanation": "In Python, exceptions are objects that are instances of classes derived from the BaseException class. When an error occurs, an exception object is created and can be handled using try-except blocks."
    },
    {
        "category": "operators",
        "question": "_______________________ exceptions are raised as a result of an error in opening a particular file.",
        "options": [
            "ValueError",
            "TypeError",
            "ImportError",
            "IOError"
        ],
        "correct": 3,
        "explanation": "IOError exceptions occur when there is a failure in input/output operations, such as errors in opening, reading, or writing a file. If a file cannot be opened (e.g., because it does not exist or permission is denied), an IOError is raised."
    },
    {
        "category": "files",
        "question": "Which of the following blocks will be executed whether an exception is thrown or not?",
        "options": [
            "except",
            "else",
            "finally",
            "assert"
        ],
        "correct": 2,
        "explanation": "The finally block in Python is always executed, regardless of whether an exception was raised or handled. It is typically used for cleanup actions that must happen no matter what."
    }
];
