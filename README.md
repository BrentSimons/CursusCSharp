# CursusCSharp

Deze Vitepress-cursus bevat leermateriaal over C# OOP en werd gebruikt voor een trainingsessie aan de middelbare school Wico Campus Pelt. De cursus bevat 6 pagina's:

    - Syntax: Cheat sheet van C#.
    - OOP: Leerstof over C#.
    - Exercise 1: een console-oefening die de cursisten met OOP moesten aanvullen.
    - Exercise 2: een simpele OOP Windows Forms-oefening over een personenregister.
    - Exercise 3: een geavanceerde OOP Windows Forms-oefening over een receptenapplicatie.

De website is gehost op GitHub Pages op [brentsimons.github.io/CursusCSharp/](https://brentsimons.github.io/CursusCSharp/). Om de website te deployen, werd npm gh-pages gebruikt. Deze training werd gedaan voor het vak Professional Skills 2 van Thomas More Geel.

## Scripts

De volgende vijf scripts zijn beschikbaar in de repo:
| Script         | Beschrijving                                               |
| -------------- | ---------------------------------------------------------- |
| `docs:dev`     | Start de development server voor de Vitepress-cursus.      |
| `docs:build`   | Bouwt de Vitepress-cursus voor productie.                  |
| `docs:preview` | Start een lokale preview van de gebouwde Vitepress-cursus. |
| `predeploy`    | Voert het build-script uit voorafgaand aan deployment.     |
| `deploy`       | Deployt de gebouwde Vitepress-cursus naar GitHub Pages.    |
