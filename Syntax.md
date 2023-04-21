## Hello there!

```csharp
// This is a comment in one line  
/* This is a comment  
over multiple lines */

int nr = 2;
string name;
name = "Brent";
const string myName = "Brent Simons";
```

### If-else

```csharp
if (name == "Yarin")
{
	Console.WriteLine("Hello Yarin!");
}
else if(name == "Wouter")
{
	Console.WriteLine("Hello Wouter!");
}
else
{
	Console.WriteLine("Hello Brent");
}
```

### Switch case

```csharp
// % = rest na deling
switch (nr % 2)
{
	case 0:
		Console.WriteLine("Even");
		break;
	case 1:
		Console.WriteLine("Odd");
		break;
}
```

### For loop

```csharp
int[] diceRolls = new int[5];

Random rnd = new Random();

for (int i = 0; i < diceRolls.Length; i++)
{
	diceRolls[i] = rnd.Next(1,7);
}

foreach (var roll in diceRolls)
{
	Console.WriteLine(roll);
}
```

### While loop

```csharp
List<int> numbers = new List<int>();
int i = 1;

while(i <= 10)
{
	numbers.Add(i);
	i++;
}
```

## Collections

```csharp
//List
List<int> nrList = new List<int>();
nrList.Add(1);
nrList.Add(2);
nrList.Add(3);

foreach (int number in nrList){
    Console.WriteLine(number);
}
```

### Function in C#

Here is a short summary of some functions you might want to use:

```csharp
// Console.WriteLine() - print output to the console
Console.WriteLine("Hello World!");

// Console.ReadLine() - read input from the console
string input = Console.ReadLine();

// string.Length - get the length of a string
string str = "Hello World!";
int length = str.Length;

// string.Substring() - extract a substring from a string
string subStr = str.Substring(6, 5);
// This would extract Hello from Hello World

// Math.Max() - get the maximum value between two values
int x = 10;
int y = 20;
int max = Math.Max(x, y);

// Math.Min() - get the minimum value between two values
int min = Math.Min(x, y);

// string.ToUpper() - convert a string to uppercase
string upperStr = str.ToUpper();

// string.ToLower() - convert a string to lowercase
string lowerStr = str.ToLower();

// string.Trim() - remove leading and trailing white space from a string
string str2 = "   Hello World!   ";
string trimmedStr = str2.Trim();

// Convert.ToInt32() - convert a string to an integer
string numStr = "123";
int num = Convert.ToInt32(numStr);
```

## FAQ

##### Q: Wat is een klasse in C#?

A: In C#, is een klasse een sjabloon voor het maken van objecten. Het bevat gegevens (variabelen) en methoden (functies) die op die gegevens kunnen werken.

##### Q: Wat zijn objecten in C#?

A: Objecten in C# zijn exemplaren van klassen. Een object bevat gegevens en methoden zoals gedefinieerd in de klasse. Het creëren van objecten is essentieel voor OOP in C#.

##### Q: Wat is overerving in C#?

A: Overerving in C# is een mechanisme waarbij een nieuwe klasse wordt gemaakt die de eigenschappen en methoden erft van een bestaande klasse. De nieuwe klasse kan extra functies of eigenschappen toevoegen en bestaande functies of eigenschappen overschrijven.

##### Q: Wat is polymorfisme in C#?

A: Polymorfisme in C# is een techniek waarbij een enkele functie of methode verschillende vormen kan aannemen, afhankelijk van de context. Dit wordt bereikt door het gebruik van overbelasting, overerving en interfaces.

##### Q: Wat zijn interfaces in C#?

A: Een interface in C# definieert een contract waaraan een klasse moet voldoen om te worden beschouwd als een implementatie van die interface. Interfaces worden gebruikt om abstractie en polymorfisme te bereiken.

##### Q: Wat is abstractie in C#?

A: Abstractie in C# is een techniek om alleen de essentiële kenmerken van een object of klasse te benadrukken en de details te verbergen. Dit kan worden bereikt door het gebruik van abstracte klassen en interfaces.

##### Q: Wat zijn namespaces in C#?

A: Namespaces in C# worden gebruikt om namen te organiseren en te groeperen. Het biedt een manier om te voorkomen dat namen in botsing komen met elkaar en om code te structureren en te beheren.
