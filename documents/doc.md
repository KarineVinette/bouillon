Voici un exemple simple d'une application en HTML, CSS et JavaScript qui permet d'ajouter des produits à un panier de restaurant et de calculer le total.

### HTML (index.html)
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carte de Restaurant</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Carte du Restaurant</h1>
        <div class="menu">
            <!-- Liste des produits de la carte -->
        </div>
        <div class="panier">
            <h2>Panier</h2>
            <ul id="panier-items"></ul>
            <p id="total">Total: 0€</p>
            <button id="checkout" onclick="validerCommande()">Valider la commande</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### CSS (styles.css)
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    padding-top: 30px;
}

.container {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.menu {
    width: 60%;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.menu h2 {
    margin-bottom: 10px;
}

.menu-item {
    display: flex;
    justify-content: space-between;
    padding: 15px 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    transition: background-color 0.3s;
}

.menu-item:hover {
    background-color: #f0f0f0;
}

.panier {
    width: 30%;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#panier-items {
    list-style-type: none;
    margin-bottom: 20px;
}

#panier-items li {
    display: flex;
    justify-content: space-between;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #45a049;
}
```

### JavaScript (script.js)
```javascript
const produits = [
    { id: 1, nom: 'Burger', prix: 10 },
    { id: 2, nom: 'Pizza', prix: 12 },
    { id: 3, nom: 'Pâtes', prix: 8 },
    { id: 4, nom: 'Salade', prix: 6 },
    { id: 5, nom: 'Soda', prix: 3 },
    { id: 6, nom: 'Dessert', prix: 5 }
];

const panier = [];

function afficherMenu() {
    const menuContainer = document.querySelector('.menu');
    produits.forEach(produit => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('menu-item');
        itemElement.innerHTML = `
            <span>${produit.nom} - ${produit.prix}€</span>
            <button onclick="ajouterAuPanier(${produit.id})">Ajouter</button>
        `;
        menuContainer.appendChild(itemElement);
    });
}

function ajouterAuPanier(idProduit) {
    const produit = produits.find(p => p.id === idProduit);
    panier.push(produit);
    mettreAJourPanier();
}

function mettreAJourPanier() {
    const panierItems = document.getElementById('panier-items');
    panierItems.innerHTML = ''; // Vider le panier avant de le mettre à jour

    let total = 0;
    panier.forEach(produit => {
        const itemElement = document.createElement('li');
        itemElement.innerHTML = `${produit.nom} - ${produit.prix}€`;
        panierItems.appendChild(itemElement);
        total += produit.prix;
    });

    document.getElementById('total').textContent = `Total: ${total}€`;
}

function validerCommande() {
    if (panier.length > 0) {
        alert('Commande validée ! Merci pour votre achat.');
        panier.length = 0; // Vider le panier
        mettreAJourPanier();
    } else {
        alert('Votre panier est vide.');
    }
}

// Initialiser l'application
afficherMenu();
```

### Explications :
1. **HTML** : Ce fichier contient la structure de la page, avec un titre de carte de restaurant, une section pour afficher le menu, et une autre section pour afficher le panier et son total.
2. **CSS** : Les styles sont basiques pour rendre la page agréable avec une disposition de deux sections principales : la carte du restaurant et le panier.
3. **JavaScript** :
   - Un tableau `produits` contient des objets avec un `id`, un `nom` et un `prix`.
   - La fonction `afficherMenu` génère dynamiquement les éléments du menu à partir des données du tableau `produits`.
   - La fonction `ajouterAuPanier` permet d'ajouter un produit au panier et met à jour l'affichage du panier.
   - La fonction `mettreAJourPanier` met à jour la liste des produits dans le panier et calcule le total.
   - La fonction `validerCommande` vide le panier après la validation de la commande.

### Fonctionnement :
1. Quand vous cliquez sur un produit dans le menu, il est ajouté au panier.
2. Le total est recalculé à chaque ajout.
3. Vous pouvez valider la commande via un bouton "Valider la commande", qui vide le panier et affiche un message de confirmation.

N'hésitez pas à personnaliser les données ou à ajouter des fonctionnalités selon vos besoins !


Pour ajouter un bouton de suppression sur chaque ligne du panier, vous pouvez modifier le code JavaScript afin d'ajouter une fonctionnalité qui permet de supprimer un produit spécifique du panier. Voici comment vous pouvez le faire :

### HTML (index.html) :
Pas de changement nécessaire dans le fichier HTML, car l'ajout du bouton de suppression sera géré dans le JavaScript.

### CSS (styles.css) :
Ajoutez un style pour les boutons de suppression afin qu'ils apparaissent correctement dans le panier.

```css
button.supprimer {
    background-color: #f44336;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
}

button.supprimer:hover {
    background-color: #e53935;
}
```

### JavaScript (script.js) :
Modifiez le code JavaScript pour inclure un bouton "Supprimer" à côté de chaque produit dans le panier. Ce bouton supprimera l'élément lorsqu'il est cliqué.

```javascript
const produits = [
    { id: 1, nom: 'Burger', prix: 10 },
    { id: 2, nom: 'Pizza', prix: 12 },
    { id: 3, nom: 'Pâtes', prix: 8 },
    { id: 4, nom: 'Salade', prix: 6 },
    { id: 5, nom: 'Soda', prix: 3 },
    { id: 6, nom: 'Dessert', prix: 5 }
];

const panier = [];

function afficherMenu() {
    const menuContainer = document.querySelector('.menu');
    produits.forEach(produit => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('menu-item');
        itemElement.innerHTML = `
            <span>${produit.nom} - ${produit.prix}€</span>
            <button onclick="ajouterAuPanier(${produit.id})">Ajouter</button>
        `;
        menuContainer.appendChild(itemElement);
    });
}

function ajouterAuPanier(idProduit) {
    const produit = produits.find(p => p.id === idProduit);
    panier.push(produit);
    mettreAJourPanier();
}

function supprimerDuPanier(idProduit) {
    const index = panier.findIndex(p => p.id === idProduit);
    if (index !== -1) {
        panier.splice(index, 1);
        mettreAJourPanier();
    }
}

function mettreAJourPanier() {
    const panierItems = document.getElementById('panier-items');
    panierItems.innerHTML = ''; // Vider le panier avant de le mettre à jour

    let total = 0;
    panier.forEach(produit => {
        const itemElement = document.createElement('li');
        itemElement.innerHTML = `
            ${produit.nom} - ${produit.prix}€
            <button class="supprimer" onclick="supprimerDuPanier(${produit.id})">Supprimer</button>
        `;
        panierItems.appendChild(itemElement);
        total += produit.prix;
    });

    document.getElementById('total').textContent = `Total: ${total}€`;
}

function validerCommande() {
    if (panier.length > 0) {
        alert('Commande validée ! Merci pour votre achat.');
        panier.length = 0; // Vider le panier
        mettreAJourPanier();
    } else {
        alert('Votre panier est vide.');
    }
}

// Initialiser l'application
afficherMenu();
```

### Explications :
1. **CSS** : J'ai ajouté une classe `.supprimer` pour styliser le bouton de suppression. Le bouton est de couleur rouge et devient légèrement plus foncé lorsque vous survolez avec la souris.
   
2. **JavaScript** :
   - J'ai ajouté la fonction `supprimerDuPanier(idProduit)` qui permet de retirer un produit spécifique du panier en utilisant `findIndex` pour localiser le produit et `splice` pour le supprimer.
   - Dans la fonction `mettreAJourPanier()`, pour chaque produit dans le panier, un bouton de suppression est ajouté à côté du nom du produit. Le bouton appelle `supprimerDuPanier` avec l'ID du produit lorsque cliqué.
   
3. **Fonctionnement** : 
   - Le panier affiche maintenant un bouton "Supprimer" pour chaque produit ajouté.
   - Lorsque vous cliquez sur le bouton, le produit est supprimé du panier et le total est mis à jour.

### Test :
Lorsque vous ajoutez des produits au panier et que vous cliquez sur le bouton "Supprimer" à côté d'un produit, celui-ci est retiré du panier et le total recalculé en temps réel.

Cela permet d'avoir un panier fonctionnel avec la possibilité de supprimer des articles, tout en mettant à jour le total à chaque modification.