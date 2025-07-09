// On écoute l'événement "input" sur le champ du code postal (id = "zipcode")
    document.getElementById('zipcode').addEventListener('input', async (e) => {
        console.log("Événement input détecté sur le champ code postal");
        
      // On récupère la valeur entrée par l'utilisateur et on enlève les espaces autour
      const zipcode = e.target.value.trim();
      // On vérifie que la longueur du code postal est de 5 caractères
      if (zipcode.length === 5) {
        // On effectue une requête à l'API pour récupérer les villes associées à ce code postal
        const response = await fetch(`https://geo.api.gouv.fr/communes?codePostal=${zipcode}&fields=nom&format=json`);
        // On vérifie que la réponse est correcte
        const cities = await response.json();

        // On récupère la liste déroulante des villes (id = "city")
        const citySelect = document.getElementById('city');
        citySelect.innerHTML = ''; // Vide les anciennes options

        // On ajoute une option par défaut
        if (cities.length > 0) {
            // Pour chaque ville retournée par l'API          
          cities.forEach(city => {
            // On crée une nouvelle option pour la ville
            const option = document.createElement('option');
            // On met le nom de la ville comme valeur de l'option (ce qui sera envoyé au serveur)
            option.value = city.nom;
            // On définit le texte de l'option avec le nom de la ville
            option.textContent = city.nom;
            // On ajoute l'option à la liste déroulante
            citySelect.appendChild(option);
          });

        } else {
          // Si aucune ville n'est trouvée, on ajoute une option indiquant qu'aucune ville n'a été trouvée
          const option = document.createElement('option');
          
          option.textContent = 'Aucune ville trouvée';
          citySelect.appendChild(option);
        }
      }
    });