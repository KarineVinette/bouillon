const produits = [
    { id: 1, nom: 'Ricard', prix: 2.5, categorie: 'Boissons' },
    { id: 2, nom: 'Martini', prix: 3.5, categorie: 'Boissons' },
    { id: 3, nom: 'Porto', prix: 3.5, categorie: 'Boissons' },
    { id: 5, nom: 'Kir', prix: 2.5, categorie: 'Boissons' },
    { id: 4, nom: 'Vin', prix: 3.5, categorie: 'Boissons' },
    { id: 6, nom: 'Tigre 25cl', prix: 3.5, categorie: 'Boissons' },
    { id: 7, nom: 'Tigre 50cl', prix: 6, categorie: 'Boissons' },
    { id: 8, nom: 'Grim 25cl', prix: 4, categorie: 'Boissons' },
    { id: 9, nom: 'Grim 50cl', prix: 7, categorie: 'Boissons' },
    { id: 10, nom: 'Picon', prix: 4, categorie: 'Boissons' },
    { id: 11, nom: 'Soda, Pago', prix: 3.5, categorie: 'Boissons' },
    { id: 12, nom: 'EAU', prix: 1.5, categorie: 'Boissons' },
   
    { id: 17, nom: 'Menetou 75cl', prix: 18, categorie: 'Boissons' },
    { id: 18, nom: 'Menetou 12.5cl', prix: 3.5, categorie: 'Boissons' },
    { id: 19, nom: 'Reuilly 75cl', prix: 20, categorie: 'Boissons' },
    { id: 20, nom: 'Reuilly 12.5cl', prix: 3.5, categorie: 'Boissons' },
    { id: 21, nom: 'Sancerre 75cl', prix: 28, categorie: 'Boissons' },
    { id: 22, nom: 'Sancerre 12.5cl', prix: 4, categorie: 'Boissons' },

    { id: 23, nom: 'Carottes', prix: 1, categorie: 'Entrées' },
    { id: 24, nom: 'Oeufs mayo', prix: 2.5, categorie: 'Entrées' },
    { id: 25, nom: 'Oeufs pochés', prix: 6, categorie: 'Entrées' },
    { id: 26, nom: 'Harengs', prix: 5, categorie: 'Entrées' },
    { id: 27, nom: 'Terrine', prix: 5, categorie: 'Entrées' },
    { id: 28, nom: 'Gésiers', prix: 6, categorie: 'Entrées' },
    { id: 29, nom: 'Foie gras', prix: 15, categorie: 'Entrées' },
    { id: 30, nom: 'Escargots', prix: 10, categorie: 'Entrées' },

    { id: 41, nom: 'Andouillette', prix: 14, categorie: 'Plats' },
    { id: 42, nom: 'Poulet', prix: 14, categorie: 'Plats' },
    { id: 43, nom: 'Broché', prix: 14, categorie: 'Plats' },
    { id: 44, nom: 'Plat du jour', prix: 12, categorie: 'Plats' },
    { id: 45, nom: 'Burger', prix: 15, categorie: 'Plats' },
    { id: 46, nom: 'Pavé boeuf', prix: 15.5, categorie: 'Plats' },

    { id: 50, nom: 'Riz au lait', prix: 3.5, categorie: 'Desserts' },
    { id: 51, nom: 'Crème brulée', prix: 3.5, categorie: 'Desserts' },
    { id: 52, nom: 'Mousse choco', prix: 3.5, categorie: 'Desserts' },
    { id: 53, nom: 'Tiramisu', prix: 5, categorie: 'Desserts' },
    { id: 54, nom: 'Fromagée', prix: 4, categorie: 'Desserts' },

    { id: 13, nom: 'Café', prix: 1.3, categorie: 'Desserts' },
    { id: 14, nom: 'Grand café', prix: 2.5, categorie: 'Desserts' },
    { id: 15, nom: 'Choco', prix: 3, categorie: 'Desserts' },
    { id: 16, nom: 'Thé', prix: 2.8, categorie: 'Desserts' },

];

const panier = [];

function afficherMenu() {
    const categories = ['Boissons', 'Entrées', 'Plats', 'Desserts'];
    const menuContainer = document.querySelector('.menu');

    categories.forEach(categorie => {
        // Créer un conteneur pour chaque catégorie
        const categorieContainer = document.createElement('div');
        categorieContainer.classList.add('categorie-container');

        // Ajouter un titre pour la catégorie
        const titre = document.createElement('h3');
        titre.textContent = categorie;
        categorieContainer.appendChild(titre);

        // Ajouter un menu déroulant
        const menuDeroulant = document.createElement('div');
        menuDeroulant.classList.add('menu-deroulant');

        // Ajouter les produits de la catégorie
        produits.filter(p => p.categorie === categorie).forEach(produit => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('menu-item');
            itemElement.innerHTML = `
                <span>${produit.nom} - ${produit.prix}€</span>
                <button onclick="ajouterAuPanier(${produit.id})">Ajouter</button>
            `;
            menuDeroulant.appendChild(itemElement);
        });

        categorieContainer.appendChild(menuDeroulant);
        menuContainer.appendChild(categorieContainer);
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
