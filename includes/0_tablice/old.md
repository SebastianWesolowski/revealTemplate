### TABLICE

Tablice są to struktury danych pozwalające na przechowywanie uporządkowanego zbioru elementów.

```js
const tablica = []; //pusta tablica
const tablica2 = [1, 2, 3, 4]; //tablica z 4 liczbami
const tablica3 = ["Jan", "Piotr", "Daniel", "Wojtek"]; //tablica z 4 elementami string
```

---

### TABLICE różne typy wartości

Tablica może przechowywać wartości różnych typów np.

```js
function foo() {
  console.log("Lorem ipsum");
}
const tablica = [1, "Wojtek", foo]; // tablica trzy-elementowa
```

---

### Odczyt danych z tablicy

Odczyt zawartości danej komórki osiągamy poprzez podanie jej indeksu w nawiasie kwadratowym:

```js
const tablica = [1, 2, 3, 4];
tablica[0]; // pierwszy element tablicy
tablica[3]; // czwarty element tablicy
```

---

# POPULARNE METODY

Tablice są obiektami, które posiadają bogate API. Niektóry z przydatnych metod, to:

- `push` - dodanie nowego elementu
- `pop` - usunięcie ostatniego elementu, a następnie zwrócenie tego elementu
- `shift` - usunięcie pierwszego elementu z tablicy, a następnie zwrócenie tego elementu
- `unshift` - dodaje element na początek tablicy
- `join` - łączenie kolejnych elementów w jeden tekst
- `reverse` - odwrócenie elementów tablicy
<!-- - `sort` - sortowanie elementów tablicy -->

---

# POPULARNE METODY

- `concat` - łączy tablice (dowolną ich liczbę, wykorzystujemy tzw. varargs) i zwraca nową, będącą połączeniem ich wszystkich
- `forEach` - pozwala wykonać określoną funkcję na każdym elemencie tablicy.
- `map` - tworzy nową tablicę zawierającą wyniki wywoływania podanej funkcji dla każdego elementu wywołującej tablicy
- `includes` - sprawdza, czy tablica zawiera dany element
- `filter` - zwraca nową tablicę z elementami, które spełniają test określony w funkcji.
- `indexOf` - zwraca pierwszy indeks, na którym znajduje się podana wartość. Zwraca wartość -1 jeśli element nie znajduje się w tablicy.

---

# POPULARNE METODY

- `slice` - tworzy kopię części tablicy i zwraca ją jako nowa tablica. Przyjmuje dwa argumenty – początek i koniec. Nie kopiuje indeksu podanego w argumencie koniec.
- `splice` - modyfikuje tablicę usuwając elementy i dodając nowe. Jeśli nie podamy nowych elementów, splice usunie tylko stare. Przyjmuje start, liczbę usuwanych elementów i elementy dodawane.

---

### Metody tablicy - `push`

- `push` - dodanie nowego elementu, na końcu zbioru

```js
const tablica = [1, 2, 3, 4];
tablica.push(5);

console.log(tablica);

> Array(5) [1, 2, 3, 4, 5]
```

---

### Metody tablicy - `pop`

- `pop` - usunięcie ostatniego elementu, a następnie zwrócenie tego elementu

```js
const tablica = [1, 2, 3, 4];
console.log(tablica);
let foo = tablica.pop();

console.log(tablica);
console.log(foo);

> Array(3) [1, 2, 3, 4]
> Array(3) [1, 2, 3]
> 4
```

---

### Metody tablicy - `shift`

- `shift` - usunięcie pierwszego elementu z tablicy, a następnie zwrócenie tego elementu

```js
const tablica = [1, 2, 3, 4];
let foo = tablica.shift();

console.log(tablica);
console.log(foo);

> Array(3) [2, 3, 4]
> 1
```

---

### Metody tablicy - `unshift`

- `unshift` - dodaje element na początek tablicy

```js
const tablica = [1, 2, 3, 4];
tablica.unshift(0);

console.log(tablica);

> Array(5) [0, 1, 2, 3, 4, 5]
```

---

### Metody tablicy - `join`

- `join` - łączenie kolejnych elementów w jeden tekst

Jako argument funkcji może przyjąć łańcuch znaków użyty do oddzielenia każdego z elementów tablicy.

```js
const tablica = [1, 2, 3, 4];
let foo = tablica.join();

console.log(foo);

> 1,2,3,4
```

---

### Metody tablicy - `reverse`

- `reverse` - odwrócenie elementów tablicy

```js
const tablica = [1, 2, 3, 4];
tablica.reverse();

console.log(tablica);

> Array(4) [4, 3, 2, 1]
```

---

<!--
### Metody tablicy - `sort`

- `sort` - sortowanie elementów tablicy

```js
const tablica = [11, 2, 13, 4];
tablica.sort();

console.log(tablica);

> Array(4) [11, 13, 2, 4]
```

--- -->

### Metody tablicy - `concat`

- `concat` – łączy tablice i zwraca nową, połączoną tablicę

```js
const tablica = [1, 2, 3, 4];
const tablica2 = [5, 6, 7, 8];
let foo = tablica.concat(tablica2);

console.log(foo);

> Array(8) [1, 2, 3, 4, 5, 6, 7, 8]
```

---

### Metody tablicy - `forEach`

- `forEach` – pozwala wykonać określoną funkcję na każdym elemencie tablicy.

```js
const tablica = [1, 2, 3, 4];
tablica.forEach((e) => {
  console.log(e);
});
```

---

### Metody tablicy - `map`

- `map` – tworzy nową tablicę zawierającą wyniki wywoływania podanej funkcji dla każdego elementu wywołującej tablicy.

```js
const tablica = [1, 2, 3, 4];
const tablica2 = tablica.map(function(e) {
    return e * e;
});

console.log(tablica2);

> Array(4) [1, 4, 9, 16]
```

---

### Metody tablicy - `includes`

- `includes` – sprawdza czy tablica zawiera dany element

```js
const tablica = [1, 2, 3, 4];
let foo = tablica.includes(3);

console.log(foo);

> true
```

---

### Metody tablicy - `filter`

- `filter` – zwraca nową tablicę z elementami, które spełniają test określony w funkcji.

```js
const tablica = [1, 2, 3, 4];
const tablica2 = tablica.filter(function(e) {
    return e % 2 == 0;
});

console.log(tablica2);

> Array(2) [2, 4]
```

---

### Metody tablicy - `indexOf`

- `indexOf` – zwraca pierwszy (najmniejszy) index, w którym znajduje się podana wartość. Zwraca -1 jeśli element nie znajduje się w tablicy.

```js
const tablica = [1, 2, 3, 4];
let foo = tablica.indexOf(2);

console.log(foo);

> 1
```

---

### Metody tablicy - `slice`

- `slice` – tworzy kopię części tablicy i zwraca ją jako nowa tablica. Przyjmuje dwa argumenty – początek i koniec. Nie kopiuje indexu podanego w argumencie koniec.

```js
const tablica = [1, 2, 3, 4, 5, 6];
const tablica2 = tablica.slice(0, 2);

console.log(tablica2);

> Array(2) [1, 2]
```

---

### Metody tablicy - `splice`

- `splice` – modyfikuje tablicę usuwając elementy i dodając nowe. Jeśli nie podamy nowych elementów, splice usunie tylko stare. Przyjmuje start, ilość usuwanych elementów i elementy dodawane.

```js
const tablica = [1, 2, 3, 4, 5, 6];
tablica.splice(0, 2, 9);

console.log(tablica);

> Array(5) [9, 3, 4, 5, 6]
```

---

## WŁAŚCIWOŚĆ `length`

Zwraca ilość elementów w tablicy.

```js
const tablica = [1, 2, 3, 4];
console.log(tablica.length);
```
