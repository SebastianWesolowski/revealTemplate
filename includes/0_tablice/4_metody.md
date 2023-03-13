# Metody tablicowe

Tablice są obiektami, które posiadają bogate API.

---
# Metody `split()` i `join()`
Metoda s`plit(delimiter)` przekształca ciąg znaków w tablicę, dzieląc go przez ogranicznik delimiter. Jeśli ogranicznik jest pustym ciągiem, zostanie uzyskana tablica pojedynczych znaków. Ogranicznikiem może być jeden lub więcej znaków.

```js
const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript jest ciekawy";
console.log(message.split(" ")); // ["JavaScript", "jest", "ciekawy"]
```

Metoda tablicowa join(delimiter) łączy elementy tablicy w ciąg. W ciągu elementy będą oddzielone znakiem lub grupą znaków określoną w delimiter. Jest to w jakimś sensie przeciwieństwo metody split(delimiter).

```js
const words = ["JavaScript", "jest", "ciekawy"];
console.log(words.join("")); // "JavaScriptjestciekawy"
console.log(words.join(" ")); // "JavaScript jest ciekawy"
console.log(words.join("-")); // "JavaScript-jest-ciekawy"
```
---

# Metoda `indexOf()`
`indexOf(value)` zwraca pierwszy indeks, pod którym znaleziono w tablicy element o wartości `value` lub liczbę `-1`, jeśli takiego elementu nie ma, użyj `indexOf`, gdy potrzebujesz bezpośrednio uzyskać indeks elementu.

```js
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1
```

---

# Metoda `includes()`
`includes(value)` sprawdza, czy w tablicy znajduje się element z wartością `value` i zwraca odpowiednio `true` lub `false`. Zakres użycia tej metody sprowadza się do sytuacji, w których konieczne jest sprawdzenie, czy w tablicy znajduje się element, a jego pozycja (indeks) nie jest istotna.


```js
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.includes("Poly")); // true
console.log(clients.includes("Monkong")); // false
```
**Sprawdzanie wielu warunków za pomocą `includes()`**
Na pierwszy rzut oka kod poniższego przykładu wygląda dobrze.

```js
const fruit = "apple";

if (fruit === "apple" || fruit === "strawberry") {
console.log("It is a red fruit!");
}
```

Co jednak, jeśli mamy więcej czerwonych owoców, takich jak wiśnie (cherry) lub żurawiny (cranberries)? Czy rozszerzymy warunek za pomocą dodatkowych ||?

```js
const fruit = "apple";

if (
fruit === "apple" ||
fruit === "strawberry" ||
fruit === "cherry" ||
fruit === "cranberries"
) {
console.log("It is a red fruit!");
}
```

Warunek możemy przepisać za pomocą metody includes(), jest to bardzo proste i skalowalne.

```js
// Przenieś opcje do tablicy
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";
// Sprawdź, czy element jest obecny
const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
console.log(`${fruit} is a red fruit!`);
}
```

# Metody `push()` i `pop()`
Dodają lub usuwają najbardziej zewnętrzne elementy tablicy. Działają tylko ze skrajnym lewym i prawym elementem i nie mogą umieszczać ani usuwać elementu z dowolnej pozycji.

![model dom](includes/0_tablice/src/array-6.png)

Metoda `push()` dodaje jeden lub więcej elementów na koniec tablicy, bez konieczności określania indeksów dodawanych elementów. Zwraca długość tablicy po dodaniu elementów.

![model dom](includes/0_tablice/src/array-7.png)

```js
const numbers = [];

numbers.push(1);
console.log(numbers); // [1]

numbers.push(2);
console.log(numbers); // [1, 2]

numbers.push(3);
console.log(numbers); // [1, 2, 3]

numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

numbers.push(5);
console.log(numbers); // [1, 2, 3, 4, 5]
```

Metoda `pop()` usuwa ostatni element z końca tablicy i zwraca usunięty element. Jeśli tablica jest pusta, metoda zwraca `undefined`.

![model dom](includes/0_tablice/src/array-8.png)

```js
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.pop()); //  5
console.log(numbers); // [1, 2, 3, 4]

console.log(numbers.pop()); //  4
console.log(numbers); // [1, 2, 3]

console.log(numbers.pop()); //  3
console.log(numbers); // [1, 2]

console.log(numbers.pop()); //  2
console.log(numbers); // [1]

console.log(numbers.pop()); //  1
console.log(numbers); // []
```
---

# Metoda `slice()`
`slice(begin, end)` zwraca nową tablicę zawierającą kopię części oryginalnej tablicy bez jej modyfikowania. Kopia jest tworzona od `begin` do, ale bez `end` - indeksów elementów oryginalnej tablicy.

![model dom](includes/0_tablice/src/array-9.png)

```js
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]
```

Jeśli `begin` i `end` nie są określone, zostanie utworzona kompletna kopia oryginalnej tablicy.

```js
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]
```

Jeśli nie określono `end`, kopiowanie będzie się odbywać od `start` do końca oryginalnej tablicy.

```js
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
console.log(clients.slice(2)); // ["Poly", "Kiwi"]
```

Jeśli wartość `start` jest ujemna, a `end` nie jest określona, to ostatnie elementy start zostaną skopiowane

```js
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(-2)); // ["Poly", "Kiwi"]
```

# Metoda `splice()`
Szwajcarski nóż do pracy z tablicami, jeśli oryginalna tablica wymaga modyfikacji, usuwa, dodaje i zastępuje elementy w dowolnym miejscu tablicy.

---

# Usuwanie

Aby usunąć elementy z tablicy, przekazywane są dwa argumenty.

```splice(position, num)```

* `position` - wskazuje pozycję (indeks) pierwszego elementu do usunięcia
* `num` - określa liczbę usuniętych elementów

Metoda splice modyfikuje oryginalną tablicę i zwraca tablicę zawierającą usunięte elementy. Na przykład mamy tablicę ocen zawierającą pięć liczb od 1 do 5.

```js
const scores = [1, 2, 3, 4, 5];

// Usuń trzy elementy tablicy, zaczynając od pierwszego elementu (indeks 0)
const deletedScores = scores.splice(0, 3);

// Tablica scores zawiera teraz dwa elementy
console.log(scores); // [4, 5]

// Tablica deletedScores zawiera trzy usunięte elementy
console.log(deletedScores); // [1, 2, 3]
```

Rysunek przedstawia wywołanie metody score.splice(0, 3) z przykładu.

![model dom](includes/0_tablice/src/array-10.png)

```
INTERESUJĄCE
W praktyce wartość zwracana (tablica usuniętych elementów) jest rzadko używana. Zasadniczo wystarczy usunąć elementy z tablicy.
```

---

# Dodawanie

Aby dodać jeden lub więcej elementów do tablicy, należy przekazać trzy lub więcej argumentów, a drugi argument musi być równy zero.

`splice(position, 0, new_element_1, new_element_2, ...)`

* Argument position określa pozycję początkową w tablicy, w której zostaną wstawione nowe elementy.
* Drugi argument to zero, mówi metodzie, aby nie usuwała elementów w miejscu dodawania nowych.
* Trzeci, czwarty i wszystkie kolejne argumenty to nowe elementy dodawane do tablicy.

Na przykład mamy tablicę nazw kolorów. Dodajmy nowy kolor przed elementem o indeksie 2.

```js
const colors = ["red", "green", "blue"];

colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]
```

Rysunek przedstawia wywołanie metody colors.splice(2, 0, 'purple') z przykładu.

![model dom](includes/0_tablice/src/array-12.png)

Możesz dodać dowolną liczbę elementów, przekazując czwarty, piąty argument i tak dalej.

```js
const colors = ["red", "green", "blue"];

colors.splice(1, 0, "yellow", "pink");
console.log(colors); // ["red", "yellow", "pink", "green", "blue"]
```

---

# Zamiana
Zamiana to operacja dodawania, w której elementy są usuwane w momencie dodawania nowych. Aby to zrobić, musisz przekazać co najmniej trzy argumenty. Liczba elementów usuniętych i dodanych może nie być taka sama.

```
splice(position, num, new_element_1, new_element_2, ...)
```

* `position` - wskazuje pozycję (indeks) pierwszego elementu do usunięcia
* `num` - określa liczbę usuniętych elementów
* Trzeci, czwarty i wszystkie kolejne argumenty to nowe elementy dodawane do tablicy.

Na przykład mamy tablicę języków programowania składającą się z czterech elementów.

```js
const languages = ["C", "C++", "Java", "JavaScript"];

// Zmieniamy element o indeksie 1 na nowy
languages.splice(1, 1, "Python");
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Zmieniamy jeden element (z indeksem 2) na kilka
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
```

Rysunek przedstawia wywołanie metody `languages.splice(1, 1, 'Python')` z przykładu.

![model dom](includes/0_tablice/src/array-12.png)

---

# Metoda `concat()`

Łączy dwie lub więcej tablic w jedną. Nie zmienia tablicy, na której jest wywoływana, ale zwraca nową. Kolejność argumentów metody wpływa na kolejność elementów w nowej tablicy.

```js
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]
```
