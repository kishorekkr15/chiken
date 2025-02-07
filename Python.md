install python from microsoft store

to check python --version

pip install -r requirements.txt

python run.py

in app.run debug=true is equivalent to nodemon. it monitors chamges in python code and restart again

# ===========================================================================================================
# python interpretor

A Python interpreter is a computer program that reads and executes Python code line by line: 
What it does
The interpreter translates Python code into machine-readable bytecode, which the computer can then execute.
# ===========================================================================================================

__name__ =="__main__" used to determine whether the script is run as a main program or if it is imported as a module from another script.

Without host="0.0.0.0", Flask defaults to 127.0.0.1 (localhost), meaning the app will only be accessible from the same machine (not from other devices on the network).
# ===========================================================================================================

# __init.py__

The __init__.py file indicates that the directory is a package and may include initialization code.

# ===========================================================================================================

To create a global variable inside a function, you can use the global keyword.

def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x)

# Python is fantastic

# ===========================================================================================================
x = float(1)     # x will be 1.0
y = float(2.8)   # y will be 2.8
z = float("3")   # z will be 3.0
w = float("4.2") # w will be 4.2
# ===========================================================================================================
You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

print("He is called 'Johnny'")
print('He is called "Johnny"')

# ===========================================================================================================
You can assign a multiline string to a variable by using three quotes:

a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""

# ===========================================================================================================
a = "Hello, World!"
print(a[1])

# e

# ===========================================================================================================
for x in "banana":
  print(x) 

b
a
n
a
n
a

# ===========================================================================================================
to find length

a = "Hello, World!"   
print(len(a))


# 13
# ===========================================================================================================
Check if "free" is present in the following text:

txt = "The best things in life are free!"
print("free" in txt)
# true


thislist = ["apple", "banana", "cherry"]
if "apple" in thislist:
  print("Yes, 'apple' is in the fruits list")


# ===========================================================================================================
Print only if "free" is present:

txt = "The best things in life are free!"
if "free" in txt:
  print("Yes, 'free' is present.")

# ===========================================================================================================
Check if "expensive" is NOT present in the following text:

txt = "The best things in life are free!"
print("expensive" not in txt)

# ===========================================================================================================
print only if "expensive" is NOT present:

txt = "The best things in life are free!"
if "expensive" not in txt:
  print("No, 'expensive' is NOT present.")

# ===========================================================================================================
Get the characters from position 2 to position 5 (not included):
it is called range
b = "Hello, World!"
print(b[2:5])
# llo

thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:5])
# ['cherry', 'orange', 'kiwi']

# ===========================================================================================================
Get the characters from the start to position 5 (not included):

b = "Hello, World!"
print(b[:5])
# Hello


thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[:4])
# ['apple', 'banana', 'cherry', 'orange']
# ===========================================================================================================

Get the characters from position 2, and all the way to the end:

b = "Hello, World!"
print(b[2:])
# llo, World!

thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:])
# ['cherry', 'orange', 'kiwi', 'melon', 'mango']
# ===========================================================================================================

To, but not included: "d" in "World!" (position -2):

b = "Hello, World!"
print(b[-5:-2])
# orl


thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[-4:-1])
# ['orange', 'kiwi', 'melon']
# ===========================================================================================================
uppercase

a = "Hello, World!"
print(a.upper())

# HELLO, WORLD!
# ===========================================================================================================
lowercase

The lower() method returns the string in lower case:

a = "Hello, World!"
print(a.lower())

# hello, world!

# ===========================================================================================================
The strip() method removes any whitespace from the beginning or the end:

a = " Hello, World! "
print(a.strip()) 

# returns "Hello, World!"

# ===========================================================================================================
The replace() method replaces a string with another string:

a = "Hello, World!"
print(a.replace("H", "J"))

# Jello, World!

# ===========================================================================================================
a = "Hello, World!"
print(a.split(",")) 

# returns ['Hello', ' World!']

# ===========================================================================================================
To specify a string as an f-string, simply put an f in front of the string literal, and add curly brackets {} as placeholders for variables and other operations.

age = 36
txt = f"My name is John, I am {age}"
print(txt)

# My name is John, I am 36

# ===========================================================================================================
Display the price with 2 decimals: using .2f , f means fixed point

price = 59
txt = f"The price is {price:.2f} dollars"
print(txt)


 # The price is 59.00 dollars

# ===========================================================================================================
The escape character allows you to use double quotes when you normally would not be allowed:

txt = "We are the so-called \"Vikings\" from the north."

# We are the so-called "Vikings" from the north.

# ===========================================================================================================

txt = "This will insert one \\ (backslash)."
print(txt) 
# This will insert one \ (backslash).


----new line
txt = "Hello\nWorld!"
print(txt) 
# Hello
# World!

----tab
txt = "Hello\tWorld!"
print(txt) 
# Hello   World!

----backspace
txt = "Hello \bWorld!"
print(txt)
# HelloWorld!

----Octal value
txt = "\110\145\154\154\157"
print(txt) 
# Hello

----hex value
txt = "\x48\x65\x6c\x6c\x6f"
print(txt)
# hello
# ===========================================================================================================

The first character is converted to upper case, and the rest are converted to lower case:
txt = "hello WORLD"
x = txt.capitalize()
print (x)
# Hello world
# ===========================================================================================================

txt = "Hello, And Welcome To My World!"
x = txt.casefold()
print(x)

# hello, and welcome to my world!

# ===========================================================================================================
Print the word "banana", taking up the space of 20 characters, with "banana" in the middle:
string.center(length, character)

txt = "banana"
x = txt.center(20)
print(x)

#        banana




txt = "banana"
x = txt.center(20, "O")
print(x)

# OOOOOOObananaOOOOOOO
# ===========================================================================================================
string.count(value, start, end)

txt = "I love apples, apple are my favorite fruit"
x = txt.count("apple")
print(x)
# 2

----Search from position 10 to 24:
txt = "I love apples, apple are my favorite fruit"
x = txt.count("apple", 10, 24)
print(x)
# 1

----Check if the string ends with a punctuation sign (.)
string.endswith(value, start, end)
txt = "Hello, welcome to my world."
x = txt.endswith("my world.", 5, 11)
print(x)
# false

----Check if the string ends with either the phrase "world." or "castle.":
txt = "Hello, welcome to my castle."
x = txt.endswith(("world.", "castle."))
print(x)
# true

----The expandtabs() method sets the tab size to the specified number of whitespaces
txt = "H\te\tl\tl\to"

print(txt)
print(txt.expandtabs())
print(txt.expandtabs(2))
print(txt.expandtabs(4))
print(txt.expandtabs(10))

H       e       l       l       o
H       e       l       l       o
H e l l o
H   e   l   l   o
H         e         l         l         o



----The find() method finds the first occurrence of the specified value.
string.find(value, start, end)
txt = "Hello, welcome to my world."
x = txt.find("e",5,10)
print(x)
# 8


----format

#named indexes:
txt1 = "My name is {fname}, I'm {age}".format(fname = "John", age = 36)
#numbered indexes:
txt2 = "My name is {0}, I'm {1}".format("John",36)
#empty placeholders:
txt3 = "My name is {}, I'm {}".format("John",36)

print(txt1)
print(txt2)
print(txt3)


# The format() method formats the specified value(s) and insert them inside the string's placeholder.
txt1 = "My name is {fname}, I'm {age}".format(fname = "John", age = 36)
txt2 = "My name is {0}, I'm {1}".format("John",36)
txt3 = "My name is {}, I'm {}".format("John",36)
print(txt1)
print(txt2)
print(txt3)
My name is John, I'm 36
My name is John, I'm 36
My name is John, I'm 36

# The index() method finds the first occurrence of the specified value.
string.index(value, start, end)
txt = "Hello, welcome to my world."
x = txt.index("e", 5, 10)
print(x)
# 8


----The isalnum() method returns True if all the characters are alphanumeric, meaning alphabet letter (a-z) and numbers (0-9).
Example of characters that are not alphanumeric: (space)!#%&? etc.
txt = "Company12"
x = txt.isalnum()
print(x)
# true

----The isalpha() method returns True if all the characters are alphabet letters (a-z).
----The isascii() method returns True if all the characters are ascii characters  (a-z).
ASCII includes:
Control characters (e.g., \n, \r, \t)
Printable characters:
Digits: 0-9
Uppercase letters: A-Z
Lowercase letters: a-z
Symbols: !@#$%^&*()_+-=[]{}|;:',.<>?/
Space character: ' '
----The isdecimal() method returns True if all the characters are decimals (0-9).
----The isdigit() method returns True if all the characters are digits, otherwise False.
----The isidentifier() method returns True if the string is a valid identifier, otherwise False.
    A string is considered a valid identifier if it only contains alphanumeric letters (a-z) and (0-9), or underscores (_). A valid identifier cannot start with a number, or contain any spaces.
----The islower() method returns True if all the characters are in lower case, otherwise False.
----The isnumeric() method returns True if all the characters are numeric (0-9), otherwise False.
----The isprintable() method returns True if all the characters are printable, otherwise False.
    Example of none printable character can be carriage return and line feed.
----The isspace() method returns True if all the characters in a string are whitespaces, otherwise False.
----The istitle() method returns True if all words in a text start with a upper case letter, AND the rest of the word are lower case letters, otherwise False.
----The isupper() method returns True if all the characters are in upper case, otherwise False.
----Note: When using a dictionary as an iterable, the returned values are the keys, not the values.
----The join() method takes all items in an iterable and joins them into one string.
    myTuple = ("John", "Peter", "Vicky")
    x = "#".join(myTuple)
    print(x)
    John#Peter#Vicky
----The lower() method returns a string where all characters are lower case.
----The maketrans() method returns a mapping table that can be used with the translate() method to 
    replace specified characters.
txt = "Hi Sam!"
x = "mSa"
y = "eJo"
mytable = str.maketrans(x, y)
print(txt.translate(mytable))
# Hi Joe
---- A dictionary in Python is a built-in data structure that allows you to store data as key-value pairs
my_dict = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

----The partition() method searches for a specified string, and splits the string into a tuple containing three elements.
txt = "I could eat bananas all day"
x = txt.partition("bananas")
print(x)
('I could eat ', 'bananas', ' all day')

----The replace() method replaces a specified phrase with another specified phrase.
Note: All occurrences of the specified phrase will be replaced, if nothing else is specified.
string.replace(oldvalue, newvalue, count)
txt = "one one was a race horse, two two was one too."
x = txt.replace("one", "three", 2)
print(x)
three three was a race horse, two two was one too."


----The rindex() method finds the last occurrence of the specified value.
----The rpartition() method searches for the last occurrence of a specified string, and splits the string into a tuple containing three elements.
----The rstrip() method removes any trailing characters (characters at the end a string), space is the default trailing character to remove.
----The splitlines() method splits a string into a list. The splitting is done at line breaks.
----The startswith() method returns True if the string starts with the specified value, otherwise False.
----The swapcase() method returns a string where all the upper case letters are lower case and vice versa.
----The title() method returns a string where the first character in every word is upper case. Like a header, or a title.
----The translate() method returns a string where some specified characters are replaced with the character described in a dictionary, or in a mapping table.
----The zfill() method adds zeros (0) at the beginning of the string, until it reaches the specified length.
----Check if an object is an integer or not:
x = 200
print(isinstance(x, int))

# ===========================================================================================================
python operators

x = 2
y = 5
print(x ** y) 
# same as 2*2*2*2*2



x = 15
y = 2
print(x // y) -----7
print(x += 3) -----15+3=18
print(x -= 3) -----15-3=12
print(x *= 3) -----15*3=45
print(x /= 3) -----15/3=5
print(x %= 3) -----15%3=0
print(x //= 3) -----15//3=5 but as whole number
print(x **= 3) -----15*15*15=3375
print(x **= 3) -----15*15*15=3375
print(x &= 3) -----15&3=3 (1111 & 0011 => 0011 = 3) AND
print(x |= 3) -----15|3=15 (1111 | 0011 => 1111 = 15) OR
print(x ^= 3) -----15^3=12 (1111 | 0011 => 1100 = 12) XOR

# ===========================================================================================================

print(x >>= 3)

Let's break down what happens when you execute x >>= 3 with x = 15.

Step-by-Step Explanation:
Initial Value of x:

x = 15
Convert x to binary:

15 in binary: 1111
Right Shift by 3 Positions:

Perform the operation x >>= 3, which means shifting the bits of x (1111) three positions to the right.
The shift looks like this:

1111  (binary for 15)
Shift right by 3 positions:
0001  (result of right shifting)
The bits that are shifted out of the right end are discarded, and zeros are filled in from the left.
New Value of x:

After the shift, x becomes 1, which is the binary 0001.
Final Answer:
After performing x >>= 3 on x = 15, the value of x becomes 1.

Explanation:
Right shifting by 3 positions is equivalent to dividing 15 by 2^3 = 8 and rounding down to the nearest integer:

arduino
Copy code
15 // 8 = 1
Thus, the result of the shift is 1.

# ===========================================================================================================
Let's break down what happens when you execute x <<= 3 with x = 5.

Step-by-Step Explanation:
Initial Value of x:

x = 5
Convert x to binary:

5 in binary: 0101
Left Shift by 3 Positions:

Perform the operation x <<= 3, which means shifting the bits of x (0101) three positions to the left.
The shift looks like this:

sql
Copy code
0101  (binary for 5)
Shift left by 3 positions:
0101000  (result of left shifting)
The bits that are shifted out of the left end are discarded, and zeros are filled in from the right.
New Value of x:

After the shift, x becomes 0101000, which is the binary for 40.
Final Answer:
After performing x <<= 3 on x = 5, the value of x becomes 40.

Explanation:
Left shifting by 3 positions is equivalent to multiplying 5 by 2^3 = 8:

Copy code
5 * 8 = 40
Thus, the result of the shift is 40.
# ===========================================================================================================

Let's walk through the example with the walrus operator:


while (user_input := input("Enter something: ")) != "exit":
    print(f"You entered: {user_input}")
Explanation:
(user_input := input("Enter something: ")):

The walrus operator := assigns the result of input("Enter something: ") to the variable user_input.
This will prompt the user to type something, and the typed input will be assigned to user_input.
If the user types "exit", the loop will stop because of the condition (user_input != "exit").
while (user_input := input("Enter something: ")) != "exit"::

The condition (user_input != "exit") checks whether the user input is not equal to "exit".
If the user types anything other than "exit", the loop will continue. If the user types "exit", the loop will break (exit).
print(f"You entered: {user_input}):

Inside the loop, the print() function will display the user's input (stored in user_input).
Example Flow:
The loop starts and asks the user to enter something.

Example input 1:

mathematica
Copy code
Enter something: Hello
Output:

yaml
Copy code
You entered: Hello
The loop continues because "Hello" is not "exit".

Next, the loop asks for input again.

Example input 2:

mathematica
Copy code
Enter something: How are you?
Output:

sql
Copy code
You entered: How are you?
The loop continues because "How are you?" is not "exit".

If the user types "exit":

Example input 3:

bash
Copy code
Enter something: exit
The loop ends because the condition (user_input != "exit") is no longer satisfied.

Final Result:
The loop keeps asking the user for input until they type "exit".
Each time they type something other than "exit", the program will print "You entered: <input>".
When "exit" is entered, the loop will terminate.
Sample Output:
yaml
Copy code
Enter something: Hello
You entered: Hello
Enter something: How are you?
You entered: How are you?
Enter something: exit
Key Point:
The walrus operator := allows the assignment of the input to user_input while checking the condition in the while loop at the same time. It avoids writing user_input = input() on a separate line and lets us both assign and check the value in a single expression.

# =========================================================================================================== 
and --->	Returns True if both statements are true	                x < 5 and  x < 10	
or	---> Returns True if one of the statements is true	            x < 5 or x < 4	
not	---> Reverse the result, returns False if the result is true	  not(x < 5 and x < 10)

# =========================================================================================================== 

x = ["apple", "banana"]
y = ["apple", "banana"]
z = x

print(x is z) TRUE

# returns True because z is the same object as x

print(x is y) FALSE

# returns False because x is not the same object as y, even if they have the same content

print(x == y) true

# to demonstrate the difference betweeen "is" and "==": this comparison returns True because x is equal to y

# =========================================================================================================== 
Python Variable Reference and is Operator
is Operator:

Checks if two variables point to the same object in memory.
Example:

a = 10
b = 10
print(a is b)  # True, both point to the same object
Immutable Data Types:

Data types like integers, strings, and tuples are immutable.
If you change the value of a variable, a new object is created.
Example:

a = 10
b = 10
a = 20  # 'a' now points to a new object
print(b)  # 10, remains unchanged
Rebinding Variables:

Reassigning a variable does not affect other variables, even if they initially pointed to the same object.
Mutable Data Types (e.g., lists):

For mutable objects, changes made to one variable will reflect in the other if they point to the same object.
Example:

x = [1, 2, 3]
y = x
x.append(4)
print(y)  # [1, 2, 3, 4], because 'x' and 'y' point to the same object
Key Takeaway:

Use is to check object identity.
Use == to check value equality.

# =========================================================================================================== 

# AND
The & operator compares each bit and set it to 1 if both are 1, otherwise it is set to 0:
# OR
The | operator compares each bit and set it to 1 if one or both is 1, otherwise it is set to 0:

# XOR
print(6 ^ 3)
The ^ operator compares each bit and set it to 1 if only one is 1, otherwise (if both are 1 or both are 0) it is set to 0:

6 = 0000000000000110
3 = 0000000000000011
--------------------
5 = 0000000000000101
====================

# NOT
The ~ operator inverts each bit (0 becomes 1 and 1 becomes 0).
print(~3)
Inverted 3 becomes -4:
 3 = 0000000000000011
-4 = 1111111111111100

# Zero fill left shift

The << operator inserts the specified number of 0's (in this case 2) from the right and let the same amount of leftmost bits fall off:

If you push 00 in from the left:
 3 = 0000000000000011
becomes
12 = 0000000000001100


# Signed right shift
The >> operator moves each bit the specified number of times to the right. Empty holes at the left are filled with 0's.

If you move each bit 2 times to the right, 8 becomes 2:
 8 = 0000000000001000
becomes
 2 = 0000000000000010

# =========================================================================================================== 
# python list

A list with strings, integers and boolean values:
list1 = ["abc", 34, True, 40, "male"]


Using the list() constructor to make a List:
thislist = list(("apple", "banana", "cherry"))
print(thislist)
['apple', 'banana', 'cherry']


egative indexing means start from the end
-1 refers to the last item, -2 refers to the second last item etc.
Example
Print the last item of the list:
thislist = ["apple", "banana", "cherry"]
print(thislist[-1])
"cherry"
# =========================================================================================================== 
# Change a Range of Item Values for lists

thislist = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
thislist[1:3] = ["blackcurrant", "watermelon"]
print(thislist)
['apple', 'blackcurrant', 'watermelon', 'orange', 'kiwi', 'mango']



thislist = ["apple", "banana", "cherry"]
thislist[1:2] = ["blackcurrant", "watermelon"]
print(thislist)
['apple', 'blackcurrant', 'watermelon', 'cherry']


thislist = ["apple", "banana", "cherry"]
thislist[1:3] = ["watermelon"]
print(thislist)
['apple', 'watermelon']


thislist = ["apple", "banana", "cherry"]
thislist.insert(2, "watermelon")
print(thislist)
['apple', 'banana', 'watermelon', 'cherry']



# =========================================================================================================== 
# python imports

1. Full Module Import
import math  # Access everything in the module with a prefix.
print(math.sqrt(16))  # Output: 4.0


2. Specific Imports
from math import sqrt, pi  # Import specific items directly.
print(sqrt(16), pi)  # Output: 4.0 3.141592653589793


3. Import All (*)
from math import *  # Import all public objects (not recommended).
print(sqrt(16), pi)  # Output: 4.0 3.141592653589793


4. Aliased Import
import numpy as np  # Alias for convenience.
print(np.array([1, 2, 3]))  # Output: [1 2 3]


5. Import from Custom Modules
from utils import greet  # Import a function from another file.
print(greet("Alice"))  # Output: Hello, Alice!


6. Controlling Exports with __all__
# In utils.py
__all__ = ['greet']  # Restrict exports.
def greet(name): return f"Hello, {name}!"
from utils import *  # Only items in __all__ are imported.
print(greet("Alice"))  # Output: Hello, Alice!


  7. Combining Different Import Styles
# basically no need
  import math  # Full module import.
  from math import pi  # Specific item import.
  print(math.sqrt(16), pi)  # Output: 4.0 3.141592653589793

#  Same Folder Import:
Use from helper import greet if both files are in the same folder.
This is the most straightforward import style.

# Different Folder (Subfolder) Import:
Use from utils.helper import greet if helper.py is inside a subfolder like utils.
Python automatically looks for utils as a package due to the folder structure.

# Import from Parent Folder Using Relative Import
If your folder structure changes to this:

my_project/
  ├── app/
  │    └── main.py
  └── helper.py

Now, main.py is inside the app subfolder, and helper.py is in the parent folder (my_project/).

To import helper.py into main.py, you need to navigate up one directory from app to my_project.

Code in helper.py:
# helper.py
def greet(name):
    return f"Hello, {name}!"


Code in main.py:
# app/main.py
from ..helper import greet  # Using relative import to go up one directory

print(greet("Alice"))  # Output: Hello, Alice!

# real time application

from app.controllers.admin_controller import (admin_create,admin_login,admin_signout,get_all_admins,update_admin,admin_current_login_list,
delete_admin,delete_admin,get_subscribe,change_password,user_login_list,get_current_subscription_details,
forgot_password,forgot_password_verify,user_preference,reset_password_verify,
create_admin_notification,get_all_notifications,delete_admin_notification,update_admin_notification_status,
recommend_list,bookmark_list,delete_user)


# readability import where all functions are imported
from app.controllers.auth_controller import signup, verify_email,token_verified,signin,email_verified, change_password, forgot_password, reset_password, subscribe, pincode, signout

i import all functions . simplify

ChatGPT said:
ChatGPT
You can simplify the import of all functions from auth_controller by using the * import syntax, which imports all the functions from the module. Here's how you can do it:

python
Copy code
from app.controllers.auth_controller import *  # Import all functions from auth_controller
However, while this works, it is generally not recommended because:

It can make it unclear which functions are being used from the module.
It could potentially import unnecessary functions or variables, leading to namespace pollution.
If you're okay with it and want a cleaner import, you can go with this approach. But if you want more clarity and control, it is better to keep the explicit import list.

If you want to stick to a more explicit and organized approach, you could also import the entire module and then use the functions with a module prefix:

python
Copy code
import app.controllers.auth_controller as auth_controller

# Usage
auth_controller.signup()
auth_controller.signin()
# etc.
This approach reduces the chance of name clashes and keeps the code more maintainable in the long run.

# =========================================================================================================== 


 Flask(__name__) in __init__.py
When the Flask app is created in __init__.py, the __name__ variable is set to the package name (e.g., myapp). This helps Flask determine the app's root directory for locating templates, static files, and other resources.


In Python, __name__ is a special built-in variable that represents the name of the module in which it is used. Its behavior changes depending on how the module is being executed:

When a Python script is run directly:

__name__ is set to "__main__".
This indicates that the script is being executed as the main program.
When a Python script is imported as a module:

__name__ is set to the name of the module (the filename without the .py extension).

# =========================================================================================================== 
# flask