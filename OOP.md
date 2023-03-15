# Object Oriented Programming in C#

## Creating a class

In OOP, we organize our code into classes which contain data and methods. Later we can use these Classes to create objects/variables.
To make a variable first make a new class in Visual Studio: start by rightclicking on your solution explorer:

![Right click solution explorer -> new item](/images/class/class_1.jpg)

Then click on "Class", fill in a name (e.g. Car.cs)

![Click on class, fil in name](/images/class/class_2.jpg)

After pressing "Add" you should get a new page car.cs in your solution explorer. Now you should see this code:

![Code](/images/class/class_3.jpg)

## Adding data and methods

```csharp
class Person {
    // properties (data)
    public string Name { get; set; }
    public int Age { get; set; }
    
    // methods
    public void SayHello() {
        Console.WriteLine("Hello, my name is " + Name + " and I am " + Age + " years old.");
    }
}
```

#### Constructor

The constructor in this example allows us to create new instances of the Person class with specific initial values for the Name and Age properties.

```csharp
class Person {
    // properties (data)
    public string Name { get; set; }
    public int Age { get; set; }
    
    public Person(string name, int age) {
        Name = name;
        Age = age;
    }
}
```

## How do we use a class in code? NOT DONE
```csharp
// Add import 
using Person; // prbly wrong
Person person1 = new Person("Alice", 25);

person1.SayHello();

// Using getters and setters: VERIFY THIS CODE IDK IF WORKS
Console.WiteLine(person1.Name);
person1.Age = 24;
Console.WriteLine(person1.Age)
```
Outputs:
```md
Hello, my name is Alice and I am 25 years old.
```

to add:
To String overwrite and default
Using this.Name inside object 
Inheritance
Public Private etc