# 📘 Guida Completa a React e React Router DOM

Benvenuto.

Qui trovi una spiegazione chiara e strutturata di:

* Components
* Pages
* Layout
* Outlet
* React Router DOM
* BrowserRouter
* Routes
* Route

Scritta come se fossimo a lezione.

---

# 🧩 Components

## 📌 Cosa sono

I **components** sono i mattoni fondamentali di React.

Un componente è una funzione che restituisce JSX (HTML + JavaScript).

```jsx
function Button() {
  return <button>Cliccami</button>
}
```

## 🎯 Perché esistono

React ragiona in modo modulare.

Invece di scrivere codice duplicato:

* Crei un componente
* Lo riusi
* Lo mantieni facilmente

Esempi di componenti:

* Navbar
* Card
* Button
* Footer
* Form

👉 I componenti sono **riutilizzabili e indipendenti**.

---

# 📄 Pages

## 📌 Cosa sono

Le **pages** sono componenti che rappresentano un'intera schermata.

Se i componenti sono i mattoni,
le pages sono le stanze della casa.

Esempi:

* Home
* About
* Movies
* MovieDetail

Una pagina di solito:

* Contiene più componenti
* È collegata a una rotta

---

# 🏗 Layout

## 📌 Cos’è

Il **layout** è la struttura fissa dell’app.

È tutto ciò che rimane visibile mentre navighi:

* Header
* Navbar
* Sidebar
* Footer

## 🎯 Perché usarlo

Senza layout:

* Ripeti codice in ogni pagina
* Il progetto diventa disordinato

Con layout:

* Scrivi la struttura una volta
* Le pagine cambiano solo nel contenuto

Concetto chiave:

```
Layout = Cornice
Pages = Contenuto dinamico
```

---

# 🚪 Outlet

`<Outlet />` è un segnaposto.

È il punto dove React Router inserisce le pagine figlie.

Esempio:

```jsx
import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  )
}
```

Se vai su `/about`, dentro `<Outlet />` verrà renderizzato il componente About.

⚠️ Senza `<Outlet />`, le route annidate non vengono mostrate.

---

# 🧭 React Router DOM

## 📌 A cosa serve

React di base non gestisce il cambio pagina.

È una **Single Page Application (SPA)**.

React Router DOM serve a:

* Gestire gli URL
* Cambiare pagina senza ricaricare il browser
* Collegare URL a componenti

Installa con:

```bash
npm install react-router-dom
```

---

# 🌍 BrowserRouter

È il contenitore principale del routing.

Avvolge tutta l'applicazione.

```jsx
import { BrowserRouter } from "react-router-dom"

<BrowserRouter>
  <App />
</BrowserRouter>
```

Senza di lui, il routing non funziona.

Usa la History API del browser per gestire la navigazione.

---

# 🛣 Routes

È il contenitore delle rotte.

Dentro `<Routes>` dichiari tutte le strade della tua applicazione.

```jsx
<Routes>
  {/* Qui dentro metti le Route */}
</Routes>
```

---

# 📍 Route

È la singola regola di navigazione.

Ogni Route collega un URL a un componente.

```jsx
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/movies/:id" element={<MovieDetail />} />
```

## 🔎 Tipi di route

### 1️⃣ Statica

```
/about
```

### 2️⃣ Dinamica

```
/movies/:id
```

Permette di leggere parametri dall’URL.

### 3️⃣ Annidata

```jsx
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
</Route>
```

Usa `<Outlet />` nel Layout.

---

# 🧠 Visione Completa

| Concetto      | Significato                         |
| ------------- | ----------------------------------- |
| Components    | Blocchi riutilizzabili              |
| Pages         | Schermate complete                  |
| Layout        | Struttura fissa                     |
| Outlet        | Punto di render delle pagine figlie |
| BrowserRouter | Abilita il routing                  |
| Routes        | Contiene le rotte                   |
| Route         | Definisce una rotta                 |

---

# 🎓 Conclusione

Se non separi Components, Pages e Layout:

* Il codice diventa enorme
* Difficile da mantenere
* Poco scalabile

Se non capisci Outlet:

* Non capisci il routing annidato

Se non capisci React Router:

* Non stai costruendo un’app vera
* Stai solo mostrando componenti

Un buon sviluppatore non scrive solo codice.
Progetta la struttura prima ancora di digitare.

Quando la struttura è chiara,
il codice diventa semplice.

---

**Fine lezione.**

