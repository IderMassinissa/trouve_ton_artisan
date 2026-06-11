# Modèle Conceptuel de Données (MCD)

## Entités et attributs

### CATEGORIE
- **id** (PK)
- nom

### SPECIALITE
- **id** (PK)
- nom

### ARTISAN
- **id** (PK)
- nom
- note
- ville
- a_propos
- email
- site_web
- top

## Relations

- Une **CATEGORIE** contient une ou plusieurs **SPECIALITE** (1,n)
- Une **SPECIALITE** appartient à une seule **CATEGORIE** (1,1)
- Une **SPECIALITE** regroupe zéro ou plusieurs **ARTISAN** (0,n)
- Un **ARTISAN** appartient à une seule **SPECIALITE** (1,1)

```
CATEGORIE (1,n) ----< SPECIALITE (1,1)
SPECIALITE (0,n) ----< ARTISAN (1,1)
```

---

# Modèle Logique de Données (MLD)

```
categorie (id, nom)

specialite (id, nom, #id_categorie)
  → id_categorie référence categorie(id)

artisan (id, nom, note, ville, a_propos, email, site_web, top, #id_specialite)
  → id_specialite référence specialite(id)
```

---

# Modèle Physique de Données (MPD)

```sql
CREATE TABLE categorie (
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom         VARCHAR(100) NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE specialite (
    id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom          VARCHAR(100) NOT NULL,
    id_categorie INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_categorie) REFERENCES categorie(id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE artisan (
    id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom          VARCHAR(150) NOT NULL,
    note         DECIMAL(2,1) NOT NULL,
    ville        VARCHAR(100) NOT NULL,
    a_propos     TEXT,
    email        VARCHAR(150) NOT NULL,
    site_web     VARCHAR(255),
    top          BOOLEAN DEFAULT FALSE,
    id_specialite INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_specialite) REFERENCES specialite(id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
