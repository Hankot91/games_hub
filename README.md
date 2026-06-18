# Games Hub

A games catalog web app built with **vanilla JavaScript (ES Modules)**, HTML5 and CSS3. It consumes the [MMO Games API](https://rapidapi.com/) (via RapidAPI) to display games organized by genre, along with a news feed and ongoing giveaways.

**Live demo:** [47bc798df1msh660098dbc122703p11e06cjsn64cc64593f3b]

## Features

- **Genre catalog** — browse games across 12 categories (Anime, Battle Royale, Card games, Fantasy, Fighting, MMORPG, MOBA, Racing, Sci-fi, Shooter, Social, Strategy, Sports), each with a "view all" page.
- **Game detail view** — full info per game: description, platform, system requirements and screenshots.
- **Home banner** — auto-rotating carousel of current giveaways plus a live news feed, both pulled from the API.
- **Search bar** in the header.
- **Mock admin panel** — login screen and a "create game" form to demonstrate form handling and UI flows (front-end only, not connected to a persistent backend).
- Fully responsive UI built with Bootstrap 5 and Bootstrap Icons.

## Tech stack

- HTML5 / CSS3
- Vanilla JavaScript (ES Modules, no framework)
- [Bootstrap 5](https://getbootstrap.com/) + Bootstrap Icons + Font Awesome
- [MMO Games API](https://www.mmobomb.com/api) via RapidAPI

## Project structure

```
games_hub/
├── controller/    # Entry-point scripts per page (one per HTML view)
├── helpers/       # Small reusable utilities (date formatting, menu state, etc.)
├── hooks/         # Catalog rendering logic
├── pages/         # Page-level UI builders (banner, game detail, create-game form)
├── screens/       # Secondary HTML views (login, manage, view-all, game detail)
├── services/      # API client and game-related requests
├── styles/        # CSS per section
├── public/        # Static assets (favicon, images, icons)
└── index.html      # Home page
```

## Running it locally

This project has no build step, but it uses ES Modules and `fetch`, so it **must be served over HTTP** (opening `index.html` directly with `file://` will not work due to CORS/module restrictions).

1. Clone the repo:
   ```bash
   git clone https://github.com/Hankot91/games_hub.git
   cd games_hub
   ```
2. Get a free API key for the [MMO Games API on RapidAPI](https://rapidapi.com/) and add it in `services/api.js` (see note below).
3. Serve the folder with any static server, for example:
   ```bash
   npx serve .
   ```
   or use the "Live Server" extension in VS Code.
4. Open the printed local URL in your browser.

> **Note on the API key:** for simplicity this project currently reads the RapidAPI key directly from `services/api.js`. If you fork this project, generate your **own** key from RapidAPI and never commit it to a public repository — see [Roadmap](#-roadmap--possible-improvements) below for a safer approach.

## Roadmap / possible improvements

- [ ] Move the RapidAPI key out of the client-side bundle (e.g. proxy requests through a Netlify Function so the key never reaches the browser).
- [ ] Persist games created in the admin panel (currently logged to console only).
- [ ] Replace the mock login with real authentication.
- [ ] Add loading and empty/error states to the catalog carousels.
- [ ] Add basic unit tests for the helpers/services.

## Author

**Camilo Vanegas** ([@Hankot91](https://github.com/Hankot91))

## 📄 License

This project is open for learning purposes. Feel free to fork it.
