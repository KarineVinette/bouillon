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
