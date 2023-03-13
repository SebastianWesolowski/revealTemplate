# Przypisanie wartości za pomocą linku lub znaczenia

Podstawowa różnica między typami złożonymi, a prymitywnymi polega na tym, w jaki sposób są one przechowywane i kopiowane. Prymitywy: `wiersze`, `liczby`, `booleans`, `null` i `undefined`, jeśli są przypisane to są kopiowane w całości, **według wartości (by value).**

Nie dotyczy to typów złożonych. W zmiennej, do której przypisano tablicę lub obiekt, nie jest przechowywana sama wartość, ale również adres jej miejsca w pamięci, innymi słowy - link (wskaźnik) do niego i są one **przekazywane przez link (by reference).**

Wyobraźmy sobie zmienną, jako kartkę papieru. Jej wartość reprezentujemy w formie wpisu na tym arkuszu.

![model dom](includes/0_tablice/src/array-2.png)

Zmienna i jej wartość
Jeśli chcemy przekazać użytkownikom treść tego postu, możemy zrobić to za pomocą utworzenia fizycznej kopii i przekazania jej wszystkim, czyli utworzyć **wiele** niezależnych kopii (przypisanie według wartości).

![model dom](includes/0_tablice/src/array-3.png)

Przypisanie przez wartość
Inaczej mówiąc, można umieścić obiekt w zamkniętym pokoju i dać komuś klucz do tego pokoju, czyli jeden egzemplarz z ogólnym dostępem (przypisanie przez odwołanie/link).

![model dom](includes/0_tablice/src/array-4.png)

Przypisanie przez link
Zmieńmy teraz dane na kartce papieru - wartość zmiennej. To oczywiste, że osoby odwiedzające pokój zawsze będą widzieć wprowadzane zmiany, ponieważ oryginał jest zmieniony, a oni mają do niego dostęp. Również oczywiste jest, że właściciele kopii papierowej nie zauważą zmiany patrząc na swoje kopie.

![model dom](includes/0_tablice/src/array-5.png)

Różnica między przypisaniem przez link a przypisaniem przez wartość
Podczas przekazywania przez wartość zmienne są przydzielane do nowej lokalizacji w pamięci, do której kopiowane są dane. Analogia z wieloma kopiami kartki papieru ma bardzo prostą reprezentację, osobna kartka dla każdego egzemplarza.

Podczas przekazywania przez link, zamiast tworzenia nowego obiektu, przypisywany jest link zmiennej (wskaźnik) do już istniejącego obiektu, czyli do jego miejsca w pamięci. W ten sposób wiele zmiennych może wskazywać na ten sam obiekt, analogicznie do zamkniętego pokoju, one posiadają klucz dostępu do oryginalnego arkusza.

Wszystkie typy prymitywne przypisane są przez wartość, czyli tworząc kopię.

```js
let a = 5;
// Przypisanie przez wartość, w pamięci zostanie utworzona
// kopia, do której przekopiuje się wartość 5
let b = a;
console.log(a); // 5
console.log(b); // 5

// Zmieńmy wartość a
a = 10;
console.log(a); // 10
// Wartość b się nie zmieniała, bo jest odzielną kopią
console.log(b); // 5
```

Złożone typy - obiekty, arays, funkcje są przypisane za pomocą linku, czyli zmienna po prostu korzysta z już istniejącego obiektu.

```js
const a = ["Mango"];
// Ponieważ a to jest array, w b zapisuję się link na już istniejący
// array w pamięci. Teraz a i b wskazują na ten sam array.
const b = a;
console.log(a); // ["Mango"]
console.log(b); // ["Mango"]

// Zmieńmy array, dodając jeszcze jeden element wykorzystując wskaźnik z a
a.push("Poly");
console.log(a); // ["Mango", "Poly"]

// b też się zmieniło, ponieważ b, jak i a,
// po prostu zawiera link na to samo miejsce w pamięci
console.log(b); // ["Mango", "Poly"]

// Rezultat powtarza się
b.push("Ajax");
console.log(a); // ["Mango", "Poly", "Ajax"]
console.log(b); // ["Mango", "Poly", "Ajax"]
```
