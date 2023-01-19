Måndag, 02 januari 2023
Vi möts för att diskutera projektet och komma överens om ett tema. Alla får möjlighet att lägga fram förslag och vi enas till slut om att vi vill utveckla en lunch roulette applikation. Vi diskuterar hur vi vill arbeta i projektet (team norms) och de två rollerna som finns. Vi lägger till följande i vår backlog:
-	Lägga till API (hög prioritet).
-	Skapa hemsida (hög prioritet).
-	Integrera karta (hög prioritet).


Tisdag, 03 januari 2023
Vi diskuterar backlogen och tilldelar den följande story points:
-	Lägga till API – 5 poäng
-	Skapa hemsida – 3 poäng
-	Integrera karta – 1 poäng
Vi kommer överens om att parkoda (Liza & Oscar arbetar tillsammans med att skapa grunden för hemsidan och integrera kartan. Daniel och Edvin arbetar tillsammans med att lägga till APIet).
Rollfördelning:
Product owner: Liza Grapensparr
Scrum master: Daniel Mårtensson


Onsdag, 04 januari 2023 klockan 12:00
Vi har en avstämning kring de ingående delarna av backlogen och vad våra två grupper har åstadkommit under eftermiddagen. Grunden för startsidan är nu klar och APIet fungerar. Vi diskuterar vilka ytterligare funktioner vi vill ha i applikationen. Vi kommer överens om att fortsätta arbeta tillsammans i par, för att sedan mötas upp igen under eftermiddagen.
Vi lägger till följande i vår backlog:
-	Team-building funktion (låg prioritet).


Onsdag, 04 januari 2023 klockan 16:00
Vi diskuterar moduler och behovet av att städa upp koden. Det finns överlappande kod från de båda parkodningarna som vi behöver se över.
Vi diskuterar problem med projektidén. Vi upplever det som problematiskt att kringgå promten om att fråga användaren om tillåtelse att läsa av platsdata. Vi kommer därför inte att dela upp funktionerna för en startkarta och en separat plats-karta. Vi bestämmer oss för att skapa en fast presentationsruta med antingen en blurrad kartbild eller en introduktionstext. Diskussionen leder till att vi lägger till följande i vår backlog:
-	Placeholder-bild, eventuellt blurrat istället för en interaktiv karta på startsidan (hög prioritet).
-	Introduktionstext som beskriver projektet (låg prioritet).
-	Grid setup i CSS för att kunna placera element (hög prioritet).
-	Moduler (låg prioritet).
Avklarade punkter från backlogen:
-	Lägga till API (hög prioritet).
-	Skapa hemsida (hög prioritet).
-	Integrera karta (hög prioritet).


Torsdag, 05 januari 2023
Vi kikar igenom de ändringar som gjorts sedan det senaste mötet. Tillsammans fastställer vi en startkarta, samt omarbetar våra knappar på sidan. Vi kommer överens om att vi har en överflödig knapp och överväger att använda en switch för att fastställa området som vi söker inom. Vi lägger till följande i vår backlog:
-	Switch för positionering (hög prioritet).
-	Markörer för restauranger ska sättas ut på kartan (hög prioritet).
-	Informationsruta som guidar användaren (låg prioritet).
-	Lagring av resultat från sökningen (hög prioritet).
-	Inloggningsfunktion (låg prioritet).
-	Presentation (låg prioritet).
-	CSS styling (låg prioritet).
-	Möjlighet att lägga till omdöme (låg prioritet).
-	Lägga till fler användarval (låg prioritet).

Följande i vår backlog är inte längre aktuellt:
-	Placeholder-bild. Vi har lyckats få med en startkarta istället.

Avklarade punkter från backlogen:
-	Grid setup i CSS för att kunna placera element (hög prioritet).


Fredag, 06 januari 2023
Vi går igenom de ändringar och förbättringar som har gjorts under gårdagens arbetspass. Vi diskuterar möjligheten till att utveckla en mer visuell design för randomiseringen, exempelvis med ett hjul som snurrar, samt en lista på vilka restauranger som varit aktuella. Vi kodar fram en if statement istället för en switch, som talar om vilken radie användaren valt. Vi lägger till följande i vår backlog:
-	Spin-the-wheel funktion (hög prioritet).
-	Informationsruta som visar aktuella restauranger inom det sökta området (låg prioritet).
-	Localstorage för lagring av användarval (hög prioritet).
-	Filter för att endast visa öppna restauranger (hög prioritet).

Avklarade punkter från backlogen:
-	Markörer för restauranger ska sättas ut på kartan (hög prioritet).
-	Switch för positionering (hög prioritet) – Det blev en if-statement.


Retrospect för veckan:
Positivt:
-	Vi har hunnit med mer än vi planerat för.
-	Våra möten fungerar bra. Vi har bra diskussioner, alla kommer i tid och deltar under mötena.
-	Vi har ett bra samarbete. Parkodningen fungerar väl, vi utvecklar vår backlog kontinuerligt och betar av de punkter som finns i backlogen.
-	Demo av applikationen fungerar bra och vi hittar inga buggar i dagsläget.

Förbättringsmöjligheter:
-	Våra story-points stämde inte med verkligheten och den tänkta mängden uppgifter för denna sprint var för liten. Vi tar med oss detta till nästa vecka.
-	Vi behöver arbeta bättre med kodgranskningen och vara noga med att tillsätta en person för kodgranskning vid varje pull request.
-	Vi behöver förbättra vår konsensus när det kommer till koden, om vi exempelvis ska använda ’’ eller ””.