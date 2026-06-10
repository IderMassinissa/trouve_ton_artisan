CREATE DATABASE IF NOT EXISTS trouve_ton_artisan
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE trouve_ton_artisan;

CREATE TABLE categorie (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL
);

CREATE TABLE specialite (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    id_categorie INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_categorie) REFERENCES categorie(id)
);

CREATE TABLE artisan (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(150) NOT NULL,
    note DECIMAL(2,1) NOT NULL,
    ville VARCHAR(100) NOT NULL,
    a_propos TEXT,
    email VARCHAR(150) NOT NULL,
    site_web VARCHAR(255),
    top BOOLEAN DEFAULT FALSE,
    id_specialite INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_specialite) REFERENCES specialite(id)
);