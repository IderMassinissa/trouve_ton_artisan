# Trouve ton artisan !

Plateforme web dédiée aux artisans de la région Auvergne-Rhône-Alpes,
permettant aux particuliers de trouver un artisan et de le contacter
via un formulaire de contact.

## Liens

- **Site en ligne** : https://trouve-ton-artisan-sable.vercel.app
- **API** : https://trouvetonartisan-production.up.railway.app

## Prérequis

- Node.js >= 18.x
- MySQL >= 8.x (ou MariaDB >= 10.x)
- npm >= 9.x

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/IderMassinissa/trouve_ton_artisan.git
cd trouve_ton_artisan
```

### 2. Base de données

Créer une base de données MySQL puis exécuter les scripts dans l'ordre :

```bash
mysql -u root -p trouve_ton_artisan < database/create.sql
mysql -u root -p trouve_ton_artisan < database/seed.sql
```

### 3. Backend

```bash
cd backend
cp .env.example .env
# Remplir les variables dans .env
npm install
npm start
```

### 4. Frontend

```bash
cd frontend
cp .env.example .env
# Remplir les variables dans .env
npm install
npm run dev
```

## Variables d'environnement

### Backend (`backend/.env`)

| Variable | Description |
|----------|-------------|
| PORT | Port du serveur (défaut: 3000) |
| DB_HOST | Hôte MySQL |
| DB_PORT | Port MySQL (défaut: 3306) |
| DB_NAME | Nom de la base de données |
| DB_USER | Utilisateur MySQL |
| DB_PASSWORD | Mot de passe MySQL |
| API_KEY | Clé secrète pour protéger l'API |
| FRONTEND_URL | URL du frontend (CORS) |

### Frontend (`frontend/.env`)

| Variable | Description |
|----------|-------------|
| VITE_API_URL | URL de l'API backend |
| VITE_API_KEY | Clé API pour les requêtes |

## Structure du projet

```
trouve_ton_artisan/
├── frontend/          # React + Bootstrap + Sass
├── backend/           # Node.js + Express + Sequelize
├── database/          # Scripts SQL (create.sql, seed.sql)
└── README.md
```

## Technologies

- **Frontend** : React, Bootstrap, Sass, Vite
- **Backend** : Node.js, Express, Sequelize
- **Base de données** : MySQL / MariaDB
- **Hébergement** : Vercel (frontend) + Railway (backend + BDD)
- **Versionning** : Git + GitHub
