# E-shop (React + Vite)

Tento projekt je moderní e-shop zaměřený na prodej elektroniky, zejména počítačových komponent. Aplikace je postavena na moderních webových technologiích a využívá React pro dynamický a rychlý frontend.

## 🛠 Použité technologie

Projekt využívá následující knihovny a nástroje:

- **[React 19](https://react.dev/)**: Hlavní knihovna pro tvorbu uživatelského rozhraní.
- **[Vite](https://vitejs.dev/)**: Rychlý nástroj pro sestavení a vývojové prostředí.
- **[React Router Dom](https://reactrouter.com/)**: Knihovna pro směrování (routing) v aplikaci.
- **[Typed.js](https://github.com/mattboldt/typed.js/)**: Knihovna pro efekt psacího stroje (použito na domovské stránce).
- **ESLint**: Nástroj pro analýzu kvality kódu.

## 🚀 Instalace a spuštění

Pro spuštění projektu na vašem lokálním stroji postupujte podle následujících kroků:

1. **Naklonujte repozitář** (pokud již nemáte staženo).
2. **Nainstalujte závislosti**:
   Otevřete terminál ve složce projektu a spusťte:
   ```bash
   npm install
   ```
3. **Spusťte vývojový server**:
   ```bash
   npm run dev
   ```
   Aplikace bude dostupná na adrese, kterou vám vypíše terminál (obvykle `http://localhost:5173`).

## 📂 Struktura projektu

Stručný popis adresářové struktury:

- **`src/`**: Zdrojové kódy aplikace.
  - **`components/`**: Znovupoužitelné komponenty (např. `Header`, `Footer`, `Layout`).
  - **`pages/`**: Komponenty představující jednotlivé stránky (`Home`, `Shop`, `Blog`, `About`).
  - **`assets/`**: Statické soubory importované přímo do kódu.
  - **`styles/`**: CSS styly.
- **`public/`**: Veřejně dostupné statické soubory (obrázky produktů atd.).

## ✨ Hlavní funkcionality

- **Domovská stránka**: Obsahuje úvodní banner s animací, sekce s výhodami nákupu a přehled "vlajkových lodí" (prémiové produkty).
- **Obchod**: Stránka s výpisem produktů (ve vývoji).
- **Blog**: Sekce pro články a novinky.
- **Responzivita**: Design je přizpůsoben pro různá zařízení.

## 📝 Poznámky k vývoji

- Projekt využívá moderní React hooky (`useEffect`, `useRef`).
- Pro routování se používá `BrowserRouter` (v `main.jsx`) a komponenty `Routes` a `Route` (v `App.jsx`).
