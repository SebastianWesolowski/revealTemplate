
# Tablice (`arrays`)

* `Array` - struktura danych do przechowywania i manipulowania indeksowanym zbiorem wartości.

Służy do przechowywania kolekcji uporządkowanych według kolejności danych, takich jak lista hoteli, towarów, klientów hoteli itp.

Note: Struktury w programowaniu nie tylko w js

wystepuje w większoći języków programowania

Stuktury danyhc mają domyślne zachowań i spodziewane elemnty

inne: obiekty, listy, kolejki 

wyobrażcie sobie że macie pólke z ksiażkami i caly zbior ksiazek to tablica a kazda ksiazka to zmienna  

---

# Tworzenie
`Array` (tablicę) deklarujemy otwierającym i zamykającym kwadratowym nawiasem `[]` - literał tablicowy. Wewnątrz nawiasów każdy element rozdzielamy przecinkiem.

<span class="fragment fade-up">

```js
const clients = [];
```
</span><br/>

<span class="fragment fade-up">

```js
const clients = ["Mango", "Poly", "Ajax"]; 
```
</span><br/>

Note:
inne możliwości tworzenia tablic

1. Obiekt Literału
   ```const owoce = ['kiwi', 'mango'];```
2. Konstruktora
   ```const owoce = new Array("kiwi","mango");```
3. Metoda Array.of
   ```const owoce = Array.of("kiwi","mango");```
4. Metoda Array.from
   ```const owoce = Array.from("kiwi","mango");```

---

# Dostęp do elementów

Dla dostępu do wartości elementu tablicy wykorzystuję się składnię nawiasów kwadratowych `array[index]`. Pomiędzy nazwą zmiennej, która znajduję się w tablicy i nawiasami nie powinno być żadnych spacji.

```js
const clients = ["Mango", "Poly", "Ajax"];
```

<span class="fragment fade-up">

```js 
// Podając indeks elementu w nawiasie, otrzymujemy jego wartość
console.log(clients[0]); // Mango
console.log(clients[1]); // Poly
console.log(clients[2]); // Ajax
```
</span><br/>


---

# Dostęp do elementów

Indeksowanie elementów tablicy zaczyna się od **zera**.

![model dom](includes/0_tablice/src/array-1.png)

Note: Pierwszym językiem z indeksowaniem od zera był BCPL to oszczędzało to parę cykli, które w tamtych czasach były znacznie cenniejsze.

--- 

# Edycja Tablicy

W przeciwieństwie do wierszy, elementy tablicy można zmieniać, odwołując się do nich za pomocą indeksu, aby przypisać inną wartość.

<span class="fragment fade-up">

```js
const clients = ["Mango", "Poly", "Ajax"];
clients[0] = "Kiwi";
clients[1] = "Pango";
console.log(clients); // ["Kiwi", "Pango", "Ajax"]
```

</span><br/>
Note:

!Przypisanie wartości - const

https://codesandbox.io/s/tablice-edycja-tablic-pgz871?file=/script.js

```js
const clients = ["Mango", "Poly", "Ajax"];
console.log(clients)
// clients = ["Tomato", "Poly", "Ajax"]; - x
// -
// let clients = ["Mango", "Poly", "Ajax"];
// clients = ["Tomato", "Poly", "Ajax"]; - ok
// -
// clients[0] = "Tomato";
// console.log(clients)
```


---


# Tablice są "obiektami"

<span class="fragment fade-up">

```js
console.log(typeof []);
```
</span><br/>

Note:


- typy prymitywne (proste) - służą do zapisywania prostych danych.
- typy referencyjne – służą do zapisywania złożonych obiektów.

Mamy różne type danych w JS `string`, `number`, `boolean`  

- `array` – Tablice mogą przechowywać różne typy danych, różnica między tablicą a obiektem leży w dostępie do wartości, a także tym, że tablica jest iterowalna.

https://codesandbox.io/s/tablice-api-tablic-3dyuom?file=/script.js

Tablice są obiektami w js tutaj mamy dowód

typeof []

console.log(typeof []);
console.log(typeof {});
console.log(typeof "[]");

Array.isArray([]); 


---

# Długość array

Długość, czyli liczba elementów, z których składa się tablica, zapisuje się we właściwości `length`. Jest to dynamiczna liczba, która zmienia się automatycznie przy dodaniu lub usunięciu elementów.

<span class="fragment fade-up">

```js
const clients = ["Mango", "Poly", "Ajax"];
console.log(clients.length); // 3
```
</span><br/>

Note:

dlatego mamy rozbudowane API związane z tablicami. 

js ma male programy ktore sa zaszyte w samym jezyku JS - metody.

https://codesandbox.io/s/tablice-metody-fyeogn?file=/script.js

`console.dir` - jest sposobem na zobaczenie wszystkich właściwości określonego obiektu JavaScript
Tablice są obiektami w js tutaj mamy dowód 

typeof []

console.log(typeof []);
console.log(typeof {});
console.log(typeof "[]");


---

# Wartość ostatniego elementu
<span class="fragment fade-up" style="text-align: left;">

<p>Co wiemy:</p>

* Długość tablicy jest zawsze `+1` większa niż indeks ostatniego elementu.

</span>
<span class="fragment fade-up" style="text-align: left;">

* Tablice mają metody oraz wartości, które nam pomagają

</span><br/>

<span class="fragment fade-up" style="text-align: left;">

* Za pomocą formuły `długość_tablicy - 1` możemy otrzymać wartość ostatniego elementu tablicy dowolnej długości.

</span>
<span class="fragment fade-up" style="text-align: left;">

* Prosimy tablice o wyliczony index

</span><br/>

Note:

Najczęściej nie wiemy z góry, jaka będzie długość tablicy. Aby dowiedzieć o wartości ostatniego elementu, stosuje się następujące podejście


---
# Wartość ostatniego elementu

<span class="fragment fade-up">

```js [1|2|3|4|]
const clients = ["Mango", "Poly", "Ajax"];
const lastElementIndex = clients.length - 1;
console.log(lastElementIndex); // 2
console.log(clients[lastElementIndex]); // "Ajax"
```

</span><br/>

Note:

* Długość tablicy jest zawsze `+1` większa niż indeks ostatniego elementu.
* Tablice mają metody oraz wartości, które nam pomagają
* Za pomocą formuły `długość_tablicy - 1` możemy otrzymać wartość ostatniego elementu tablicy dowolnej długości.
* Prosimy tablice o wyliczony index

