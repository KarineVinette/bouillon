const produits = [
     { id: 100, nom: 'Coca', prix: 2.5, categorie: 'Boissons' },
    { id: 101, nom: 'Fanta', prix: 2.5, categorie: 'Boissons' },
    { id: 102, nom: 'Biere', prix: 3.5, categorie: 'Boissons' },
     
    

    { id: 1, nom: 'Marguerita S', prix: 6, categorie: 'Pizzas' },
    { id: 2, nom: 'Marguerita M', prix: 9, categorie: 'Pizzas' },
    { id: 3, nom: 'Marguerita L', prix: 11, categorie: 'Pizzas' },
    { id: 4, nom: 'Elyna S', prix: 9, categorie: 'Pizzas' },
    { id: 5, nom: 'Elyna M', prix: 12, categorie: 'Pizzas' },
    { id: 6, nom: 'Elyna L', prix: 14, categorie: 'Pizzas' },
    { id: 7, nom: 'Calzone S', prix: 8.5, categorie: 'Pizzas' },
    { id: 8, nom: 'Calzone M', prix: 11, categorie: 'Pizzas' },
    { id: 9, nom: 'Calzone L', prix: 13, categorie: 'Pizzas' },
    { id: 10, nom: 'Francesco S', prix: 8.5, categorie: 'Pizzas' },
    { id: 11, nom: 'Francesco M', prix: 11, categorie: 'Pizzas' },
    { id: 12, nom: 'Francesco L', prix: 13, categorie: 'Pizzas' },
    { id: 13, nom: '4 Fromages S', prix: 8.5, categorie: 'Pizzas' },
    { id: 14, nom: '4 Fromages M', prix: 11, categorie: 'Pizzas' },
    { id: 15, nom: '4 Fromages L', prix: 13, categorie: 'Pizzas' },
    { id: 16, nom: 'Calabrese S', prix: 9, categorie: 'Pizzas' },
    { id: 17, nom: 'Calabrese M', prix: 11.5, categorie: 'Pizzas' },
    { id: 18, nom: 'Calabrese L', prix: 13.5, categorie: 'Pizzas' },
    { id: 19, nom: 'Giuseppe S', prix: 9, categorie: 'Pizzas' },
    { id: 20, nom: 'Giuseppe M', prix: 11, categorie: 'Pizzas' },
    { id: 21, nom: 'Giuseppe L', prix: 13, categorie: 'Pizzas' },
    
    { id: 22, nom: 'Berrichonne S', prix: 9, categorie: 'Pizzas' },
    { id: 23, nom: 'Berrichonne M', prix: 12, categorie: 'Pizzas' },
    { id: 24, nom: 'Berrichonne L', prix: 14, categorie: 'Pizzas' },
    
    { id: 25, nom: 'Mortadella S', prix: 9.5, categorie: 'Pizzas' },
    { id: 26, nom: 'Mortadella M', prix: 12, categorie: 'Pizzas' },
    { id: 27, nom: 'Mortadella L', prix: 14, categorie: 'Pizzas' },
    
    { id: 28, nom: 'Enfant', prix: 5, categorie: 'Pizzas' },



    { id: 40, nom: 'Tomates cerises', prix: 0.9, categorie: 'Suppléments' },
    { id: 41, nom: 'Pommes de terre', prix: 0.5, categorie: 'Suppléments' },
    { id: 42, nom: 'Champignons', prix: 1, categorie: 'Suppléments' },
    { id: 43, nom: 'Olives', prix: 0.8, categorie: 'Suppléments' },
    { id: 44, nom: 'Roquette', prix: 0.8, categorie: 'Suppléments' },
    { id: 45, nom: 'Poivrons', prix: 0.7, categorie: 'Suppléments' },
    { id: 46, nom: 'Oignons', prix: 0.7, categorie: 'Suppléments' },
    { id: 47, nom: 'Avocat', prix: 2, categorie: 'Suppléments' },
    { id: 48, nom: 'Parmesan', prix: 1, categorie: 'Suppléments' },
    { id: 49, nom: 'Chèvre', prix: 2.5, categorie: 'Suppléments' },

    { id: 50, nom: 'Cheddar', prix: 2, categorie: 'Suppléments' },
    { id: 51, nom: 'Buratta', prix: 3.5, categorie: 'Suppléments' },
    { id: 52, nom: 'Mozza di Latte', prix: 2.5, categorie: 'Suppléments' },
    { id: 53, nom: 'Mozza di Buffala', prix: 3, categorie: 'Suppléments' },
    { id: 54, nom: 'Emmental', prix: 1.5, categorie: 'Suppléments' },
    { id: 55, nom: 'Creme', prix: 1, categorie: 'Suppléments' },
    { id: 56, nom: 'Beurre persillé', prix: 1.5, categorie: 'Suppléments' },
    { id: 57, nom: 'Poulet', prix: 2.5, categorie: 'Suppléments' },
    { id: 58, nom: 'Viande haché', prix: 3, categorie: 'Suppléments' },
    { id: 59, nom: 'Jambon poulet', prix: 2.5, categorie: 'Suppléments' },

    { id: 60, nom: 'Jambon cru', prix: 3, categorie: 'Suppléments' },
    { id: 61, nom: 'Merguez', prix: 2.8, categorie: 'Suppléments' },
    { id: 62, nom: 'Chorizo Boeuf Mouton', prix: 2.8, categorie: 'Suppléments' },
    { id: 63, nom: 'Lardons Volaille', prix: 2.6, categorie: 'Suppléments' },
    { id: 64, nom: 'Mortadella', prix: 2.8, categorie: 'Suppléments' },

    { id: 65, nom: 'Thon', prix: 2.6, categorie: 'Suppléments' },
    { id: 66, nom: 'Oeuf', prix: 1, categorie: 'Suppléments' },
    { id: 67, nom: 'Miel', prix: 0.5, categorie: 'Suppléments' },


    { id: 90, nom: 'Tiramisu', prix: 4.5, categorie: 'Desserts' },
    { id: 91, nom: 'Tiramisu fruit', prix: 4.8, categorie: 'Desserts' },


];

const panier = [];

function afficherMenu() {
    const categories = ['Boissons', 'Pizzas', 'Suppléments', 'Desserts'];
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
