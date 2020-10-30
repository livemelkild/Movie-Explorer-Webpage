**Løsning** <br/>
Vi har valgt å lage en nettside der man kan få opp 62 058 filmer. 
Nettsiden har en startside som presenterer temaet. Når man kommer inn på siden lastes filmene i 
tilfeldig rekkefølge og man kan navigere seg mellom sider og komme tilbake til første side med knappene 
nederst. I søkefeltet kan man søke på enkelte filmer med små og store bokstaver, eller deler av en tittel 
som lister opp alle filmer som inneholder denne strengen. Etter at søket er utført kan man sortere filmene 
etter utgivelsesår. Her har vi observert at noen filmer ikke har en verdi for utgivelsesår. Vi vurderte om 
de skulle filtreres bort, men valgt heller å ha dem der ettersom vi ikke ville fjerne noe av innholdet som 
brukeren ønsker å se. For filtrering har vi valgt ut noen av de vanligste sjangrene. Alle filmene som inneholder 
denne sjangeren blir listet opp ved filtreringen. Dersom man ønsker mer informasjon om en film kan dette sees ved 
å trykke på “info”-knappen for hver film. På nettsiden har man også mulighet til å up- og down vote filmene. Dette 
blir lagret i databasen, så ratingen som står på siden er sammenlagt fra alle brukerne. Man har kun muligheten til å
up- eller down vote en film én gang.

**Backend**
Da vi skulle velge backend teknologi tok vi utgangspunkt i det medlemmene av gruppa hadde vært innom i Programvareutvikling. Dermed sto vi mellom SQLite og MongoDB. 
Etter å ha undersøkt dette fant vi ut at MongoDB ville være mest hensiktsmessig for gruppen. Fordi  MongoDB er en database som ikke har like mange begrensninger som MySQL. Det gjelder begrensninger som omhandler databaseskjema og datamodellering som kan senke utviklingen. Dette er en av grunnene til at gruppen valgte å bruke mongoDB, samt. at databasen er skalerbar og kan dermed ta i mot datasett, fremfor at man må legge inn data manuelt.

**API**
Ved valg av API gjorde vi en vurdering der vi landet på REST api. Hovedforskjellen er et GraphQL bare har et endepunkt, mens REST api har flere. Med GraphQL kan man spesifisere hvilke felt med informasjon man vil hente fra databasen. REST api har flere endepunkter. RESTapi er den mest brukte i dag, dette anså vi som en stor fordel ettersom det er god dokumentasjon og gode guider på hvordan vi kan sette det opp. Det er essensielt for oss ettersom ingen har satt opp en API kobling før. Vi implementerte RESTapi sammen med node.js, express og mongoose. 
Vi har implementert tre endepunkter. app.get(“/api/movie”), put(api/upVote/:title) og put(api/downVote/:title). Det var hensiktsmessig med et get-punkt ettersom filtrering og sortering skulle bli gjort på søkeresultatet. Da var det enkelt å utføre filtrering/sortering dersom det var et search-filter, og ellers returnere all dataen i databasen.
