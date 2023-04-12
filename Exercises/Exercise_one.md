## Exercise 1: Personen register

In deze oefening maken we een personen register voor de stad Pelt. De applicatie moet personen kunnen opslaan en verwijderen in een listbox.

Voor elke persoon slaan we de naam, leeftijd en adres op. Ook moet er een functie zijn om de tekst over de persoon te laten zien in de listbox.

![personenRegister](/images/exercises/personenRegister.png)

### Werken met een listbox

Om te werken met een listbox in WF kan je best een private lijst aanmaken in je Form class

```csharp
private List<Object> objectList = new List<Object>();
```

En een functie aanmaken die de listbox gelijksteld aan de list

```csharp
private void RefreshListBox()
{
    listBox.Items.Clear();
    foreach (var object in objectList)
    {
        listBox.Items.Add(object.ToString());
    }
}
```

Daarna kan je objects toevoegen of verwijderen van de listbox door ze eerst toetevoegen/te verwijderen van de lijst, en dan de functie uittevoeren:

```csharp
private void btnVoegPersoonToe_Click(object sender, EventArgs e)
{
    string name = txtObject.text;

    var object = new Object(name);

    objectList.Add( persoon );
    RefreshListBox();
}
```
