## Exercise 1: Console Applicatie Garage

In deze oefening maken we een simpele garage applicatie. De vereisten zijn enkel het toevoegen van autos aan de garage en bekijken van al de autos in de garage.

Bij deze oefeningen krijg je de grote lijnen van de code al, je moet enkel OOP code toevoegen.
Voor deze oefening kan je best kijken naar het Hoofdstuk OOP: Titels [Creating a class, Constructor en ToString function]

Hieronder staat de code die je in de oefening moet gebruiken, begin eerst met een Console applicatie genaamd Parking aan te maken, als je het project een andere naam geeft krijg je problemen met het importen.
```csharp
// Om een class te importeren moet je de namespace waarin de class zich bevind importeren
using Parking;

List< > autoLijst = new List< >();

while (true)
{
    Console.Clear();
    Console.WriteLine("\n Welkom in het Garagesysteem: \n ---------------------------- \n");
    Console.WriteLine("Typ 1 om alle autos in het systeem te bekijken.");
    Console.WriteLine("Typ 2 om een nieuwe auto in het systeem toetevoegen");
    Console.WriteLine("Typ 3 om het systeem te verlaten \n");

    int keuze = int.Parse(Console.ReadLine());
    Console.Clear();

    if (keuze == 1)
    {
        Console.WriteLine("Overzicht autos in de garage: \n \n ");
        /*
        Hier moet je code maken om door de lijst van autoLijst te loopen, en voor elke auto de ToString functie uitvoeren
        */


        // Laat deze ReadLine staan zodat het overzicht van autos niet meteen sluit
        Console.ReadLine();
    }
    else if (keuze == 2)
    {
        // Dit zijn de variabelen die je nodig gaat hebben in je nieuw Object
        Console.WriteLine("Nummerplaat nieuwe auto: ");
        string nummerPlaat = Console.ReadLine();

        Console.WriteLine("Merk nieuwe auto: ");
        string merk = Console.ReadLine();

        Console.WriteLine("Model nieuwe auto: ");
        string model = Console.ReadLine();

        Console.WriteLine("Aantal deuren van de nieuwe auto: ");
        int aantalDeuren = int.Parse(Console.ReadLine());

        // Maak hier een nieuwe auto aan en voeg deze toe aan autoLijst



    }
    else if (keuze == 3)
    {
        break;
    }
    else
    {
        Console.WriteLine("\n \n Incorrecte ingave, klik op enter om doortegaan");
        Console.ReadLine();
    }
}
```

Zie hier nog wat fotos hoe het eindeproduct eruit moet zien

#### Overzicht autos:
![ConsoleGarage](/images/exercises/ConsoleGarageOverzicht.png)

#### Aanmaken nieuwe auto:
![ConsoleGarage](/images/exercises/ConsoleGarageAanmaken.png)
