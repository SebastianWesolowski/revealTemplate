# Iteracje w arrays

Cykl for można wykorzystywać dla iteracji wewnątrz tablicy, czyli «opracować» każdy element.

```js
const clients = ["Mango", "Ajax", "Poly"];

for (let i = 0; i < clients.length; i += 1) {
console.log(clients[i]);
}
```

Dostęp do elementów uzyskuje się za pomocą składni nawiasów kwadratowych tablica [index], gdzie index to wartość licznika cyklu od 0 do ostaniego indeksu tablicy.

---

# Cykl for...of

Konstrukcja `for...of` ogłasza cykl, iterujący się objektami w kolekcjach, takich jak tablice i wiersze. Ciało cyklu będzie wykonywać się dla wartości każego elementu. Jest to dobry sposób na zastąpienie cyklu `for` jeśli nie potrzebujemy licznika iteracji.

```js
for (const variable of iterable) {
// ciało pętli
}

* `variable` - zmienna, która będzie zawierać wartość elementu w każdej z iteracji.
* `iterable` - kolekcja, która ma elementy, np. array.
const clients = ["Mango", "Ajax", "Poly"];

for (const client of clients) {
console.log(client);
} 

const string = "javascript";

for (const character of string) {
console.log(character);
}
```

# Instrukcje break i continue

Poszukajmy imię klienta w tablicy, jeśli znaleźliśmy - przerywamy cykl, ponieważ nie ma sensu szukać dalej, mamy unikalne imiona.

```js
const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;

for (const client of clients) {
// W każdej iteracji sprawdzamy, czy element tablicy jest podobny
// do imienia klienta. Jeśli wszystko się zgadza, wtedy zapiszmy w message
// wiadomość o sukcesie i zróbmy break, aby przerwać poszukiwanie
if (client === clientNameToFind) {
message = "Klient z takim imieniem jest w bazie danych!";
break;
}

// Jeśli nie znajdziemy podobieństw, to zapiszmy do message wiadomość o braku imienia
message = "Nie znaleźliśmy takiego klienta w bazie danych!";
}

console.log(message); // "Klient z takim imieniem jest w bazie danych!"
```

Możesz na początku ustawić message na wartość błędu wyszukiwania, a w cyklu nadpisać go jeśli nazwa zostanie znaleziona. Ale break i tak się przyda, jakbyśmy mieli tablicę 10 000 klientów, a ten, którego potrzebujemy, byłby na pozycji 2, to nie ma sensu sprawdzać pozostałych 9998 pozycji.

```js
const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message = "Nie znaleźliśmy takiego klienta w bazie danych!";

for (const client of clients) {
if (client === clientNameToFind) {
message = "Klient z takim imieniem jest w bazie danych!";
break;
}
// Jeśli się nie zgadza, to w tej iteracji nic nie robimy
}

console.log(message); // Klient z takim imieniem jest w bazie danych!
```

Użyjmy cyklu do pokazania tylko liczb większych od określonej liczby.

```js
const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// Dla liczb mniejszych niż threshold działa continue, wykonanie ciała zostaje przerwane
// i przechodzi na następną iteracje.
for (let i = 0; i < numbers.length; i += 1) {
if (numbers[i] < threshold) {
continue;
}

console.log(`Liczba większa niż ${threshold}: ${numbers[i]}`); // 18, 29, 34
}
```
