# Projet SEO Sympa - Cahier des charges V4 (03/06/25)

## Présentation générale du projet

### Nom du projet : SEO Sympa 

SEO Sympa est une plateforme qui a pour vocation de mettre en relation des professionnels experts du SEO (SEO = Search Engine Optimization) avec des potentiels partenaires ayant besoin de services de référencement, afin d’optimiser leur visibilité sur le web.

Les spécialistes du SEO et les agences marketing pourront grâce à cette plateforme développer leur activité avec efficacité et gain de temps. Pour cela, ils accèderont à une base de clients potentiels clefs en main !

En se mettant en relation avec les experts du SEO, les propriétaires de sites web, les blogueurs et rédacteurs de contenu pourraient améliorer leur visibilité et le trafic sur leur plateforme. 

Nous avons la volonté que les échanges créés soient mutuellement bénéfiques.

L’équipe de SEO Sympa, composée de 4 développeurs web,  est chargée du développement de cette plateforme. Pour ce projet, elle dispose d’un délai de 8 semaines, partagé par 4 sprints. 

## Définition des besoins et des objectifs du projet

La visibilité sur le web est un enjeu crucial pour toute plateforme commerciale ou non présente sur le web.

Les spécialistes du SEO, les agences de marketing ont besoin de gagner en clientèle. Les propriétaires de sites web, les blogueurs et rédacteurs de contenu ont besoin de gagner en visibilité sur leur plateforme.

Notre plateforme SEO Sympa souhaite apporter une solution à ce problème en proposant à ces  professionnels  d’entrer en relation. 

## Les fonctionnalités du projet (spécifications fonctionnelles)

### Le MVP (Minimum Viable Product) :

#### Nos pages statiques :
* une page à propos avec présentation de notre plateforme, historique, concept, quelques témoignages (forme ? *témoignage par mails mis en statique ? bdd / formulaire ? FAQ*)
<!-- à préciser ci dessus -->
* une page mentions légales & rgpd 
* une page accessibilité
* une page des conditions générales du service (lorem ipsum… ou modèle…!! et dans le formulaire = case à cocher lien vers ces conditions)
* une page plan du site

#### Nos pages dynamiques : 

* une page d’accueil avec présentation du site, inscription, connexion, recherche par mots-clefs, “cards” sous format carrousel de quelques professionnels (qui met-on en avant ? = 3 profils d’experts SEO récents et le 4e en random)
* une page contact avec formulaire
* une page profil avec des informations visibles (publiques) , un tableau de bord (privé pour éditer / compléter son profil), un formulaire de prise de contact et une messagerie
* une page d'erreur 404 (à prévoir même si pas dans arborescence)

### FONCTIONNALITÉS ANNEXES / BONUS
Les évolutions potentielles (ce qui ne sera pas terminé) : tout ce qui est prévu mais ne fait pas partie du MVP
#### **Idées proposées dans l'énoncé :**
* Suivi des sites : ajout, modification, suppression, détails. => *intéressante ++, + value*
* Évolution du tableau de bord : gestion des sites.
* Système de notifications : notifications pour les réponses aux demandes de partenariat, pour les mises à jour de sites.
* Suivi de l’évolution des scores de référencement de ses sites.
* Système de messagerie : utilisation de websockets pour des échanges instantanés.

#### Idées venues au fil de nos réflexions (évolutions)

* une newsletter proposée en abonnement sur la page blog, pour connaître les dernières actualités…
* système de messagerie : utilisation de websockets pour des échanges instantanés.
* page formulaire pour une demande d’aide         
* dans la page à propos : “vos avis sur le site” 
* témoignages fictifs - avec avis notés étoiles
* chatbot pour réponses aux demandes d’aides
* une page blog (+ commentaires à gérer) avec les actualités OU une page actualités
* user administrateur (page privée) : 
            - gestion technique du site tout en répondant à certaines problématiques soumises par les utilisateurs
            - gestion contenu global du site ( modifications de l’interface graphique)
            - vérification et modération régulières des contenus proposés par les utilisateurs (conformité aux conditions générales et mentions légales…).

## La liste des technologies utilisées pour le projet, avec justification (spécifications techniques)

### Pour notre travail d’équipe / gestion de projet  :

Google Drive => pour partager et pouvoir tous éditer les fichiers / documents créés
Github Project => pour gérer l’avancée du projet, le suivi des tâches, le calendrier, l’organisation globale
Discord => pour notre communication (nos échanges écrits et vocaux, réunions avec notre référente) et travailler en équipe en temps réel (partage d’écran, messagerie instantanée)

VS code est notre éditeur de code dans ce projet. C’est l’éditeur de code le plus connu et il est gratuit.

### Front-end  :
Nous utilisons le langage HTML 5 car c’est le standard actuel du web. Il permet une structure claire, moderne et bien organisée, et améliore le référencement (SEO) grâce à ses balises sémantiques.

Nous avons opté pour le langage de feuille de style CSS (SCSS, structuré par SASS afin de rendre le code CSS plus organisé, maintenable et réutilisable grâce à ses fonctionnalités avancées (variables, mixins, boucles…). Cela va nous permettre de mieux adapter notre site aux contraintes du responsive web design (avec les media queries par exemple). 

Nous avons choisi Javascript (JS) car c’est le langage de programmation que nous avons appris. Il rend l’interface dynamique et permet de gérer les évènements (clic, formulaire…).

Notre choix s’est porté sur Parcel car c’est un bundler (outil pour fusionner nos fichiers) rapide, facile à configurer et à prendre en main. Il va prendre en charge SCSS, HTML et JS.

Npm est le gestionnaire de paquets par défaut de JS et Node.js. Nous l’utilisons dans ce projet.

Nous avons vérifié la validité et la conformité aux normes du web de notre code html avec l’outil W3C.

L’outil Cypress nous permet de tester notre code.

### Back-end  :

Nous optons pour l’environnement Node.js qui est un environnement d’exécution JavaScript multiplateforme. Il permet aux développeurs de créer des applications réseaux et côté serveur en utilisant JavaScript.

En effet, Javascript est réutilisé côté back, car ce langage de programmation fait le lien entre le back et le front, simplifie la communication entre eux de façon cohérente.

Nous employons le framework Express, actuellement le plus populaire dans Node. 

Grâce à Node/npm, nous accédons à un grand nombre de bibliothèques, telles que helmet (accessibilité), pg (base de données) ou cors.

Nous utilisons postgreSQL pour gérer nos bases de données. 

Nous utilisons EJS (template engine) pour intégrer aisément du JavaScript dans nos vues HTML. Ce moteur de templates nous permet d’afficher des données dynamiques et d’assurer la lisibilité et l’efficacité du code.

Comme en front-end, npm nous permet de gérer toutes les dépendances nécessaires au back-end (comme Express et EJS). Cela garantit une bonne organisation, une gestion des versions, et une installation rapide des outils.

Nous nous orientons sur l’outil de test vitest pour vérifier que les fonctions de notre application se comportent comme prévu.

Nous serons vigilants tout au long du projet au fait de produire un code le plus accessible possible, ainsi qu’à avoir un référencement optimal.

## Définition de la cible du projet (le public visé) 

Nos cibles principales sont : 
- les propriétaires de site web ou de plateformes web qui ont besoin d’améliorer et d’optimiser leur référencement (SEO);
-  les spécialistes du référencement tels que des freelance SEO, des agences marketings SEO, des experts SEO.

## Les navigateurs compatibles

Nous allons faire en sorte que notre site soit accessible par le plus grand nombre tous supports confondus.
Navigateurs principaux ciblés : Chrome + Safari + Mozilla Firefox

Nous vérifierons la compatibilité avec  https://caniuse.com/webp ainsi qu’avec la documentation sur le site de mdn.

## L'arborescence de l'application (le chemin de l'utilisateur, correspondra aux routes front)

![!image/SEO Sympa - Arborescence générale (3).png](<image/SEO Sympa - Arborescence générale (3).png>)

La liste des routes prévues (les routes front sont couvertes par l'arborescence en toute logique, restent les endpoints de votre API) 
= à détailler routes back-end, à faire
<!-- à reprendre -->
RECHERCHE
FORMULAIRE DE CONTACT 
GET 
POST
PUT
PATCH
DELETE

## User Stories 

|En tant que…|J’ai besoin de…|Afin de…|
|:-----------|:------------------:|:-------------------------|
|tout visiteur non authentifié|pouvoir créer un compte|accéder aux fonctionnalités réservées aux utilisateurs authentifiés. |
|tout visiteur authentifié ou non|pouvoir faire une recherche par critères|trouver des partenaires commerciaux qui correspondent à mon domaine d’activité. |
|utilisateur authentifié |pouvoir me connecter à mon compte | accéder à mon tableau de bord. |
|utilisateur authentifié |pouvoir modifier mes informations |garder le contrôle sur mes données personnelles. |
|utilisateur authentifié | pouvoir me déconnecter de mon compte | mettre fin à la session et protéger l’accès à mon compte |
|utilisateur authentifié | pouvoir supprimer mon compte | ne pas laisser mes données personnelles sur le service proposé. |
|utilisateur authentifié | pouvoir envoyer une demande de mise en relation  | trouver de nouvelles opportunités professionnelles . |
|utilisateur authentifié | pouvoir accepter ou refuser une demande de mise en relation | garder le contrôle sur mes engagements .|
|utilisateur authentifié | pouvoir arrêter (supprimer) une relation | gérer mon réseau de partenaires commerciaux.|
|utilisateur authentifié | pouvoir échanger à l’écrit avec les autres utilisateurs | m’assurer que mon interlocuteur peut mener à bien mon projet (demandeurs) / m’assurer que le projet proposé est dans mon domaine de compétences. |

## Liste des rôles de chacun

Product Owner (PO) : Maxime et Gulnur en appui
Scrum Master : Elise et Gulnur en appui
Lead Dev : Alexandre et Elise en appui

## Documents relatifs à la BDD

### Dictionnaire de données – projet SEO Sympa 

##### UTILISATEUR (USER)

|Nom|Description|Format|Contrainte|
|:-----------|:-----------|:-----|:------|
|email|mail de l’utilisateur de la plateforme|alphanumérique |obligatoire, unique|
| mot de passe |mot de passe de l’utilisateur|alphanumérique|obligatoire |
|Rôle|Rôle de l’utilisateur|alphabétique |obligatoire|
|date de création|date d’inscription sur le site|date |obligatoire|

#### PROFIL (PROFILE) :

|Nom|Description|Format|Contrainte|
|:-----------|:-----------|:-----|:------|
|nom|nom de l’utilisateur|alphabétique |obligatoire|
|prénom|prénom de l’utilisateur|alphabétique |obligatoire|
|adresse |adresse (n° et rue…)|alphanumérique |obligatoire|
|code postal|code postal|numérique |obligatoire|
|ville|ville|alphabétique |obligatoire|
|description|détail du service proposé/demande proposée|alphanumérique |obligatoire|
|nom d’affichage|nom du profil|alphanumérique |obligatoire|
|n° de SIRET|numéro de SIRET|numérique |facultatif|

#### MESSAGE  :

|Nom|Description|Format|Contrainte|
|:-----------|:-----------|:-----|:------|
|Envoi message|Date d’envoi|date |obligatoire|
|Réception message|Date de lecture|date |facultatif|
|Contenu message|Contenu du message|alphanumérique|obligatoire|

#### RELATION:

|Nom|Description|Format|Contrainte|
|:-----------|:-----------|:-----|:------|
|Date de demande|date de la demande|date |obligatoire|
|Date d’acceptation|date d’acceptation de la demande (relation acceptée)|date |obligatoire|
|date de suppression|date du refus de la demande / suppression de la demande|date |obligatoire|
|statut|statut de la demande (en attente, acceptée, refusée, supprimée)|alphabétique |obligatoire|

### MCD : modèle conceptuel de données

![MCD seo sympa (1)]

![alt text](<image/MCD.png>)

### MLD : modèle logique de données

![alt text](<image/MLD.png>)

### MPD : modèle physique de données

![alt text](<image/MPD.png>)

### Wireframes

#### Wireframes version mobile (mobile first)

![wireframe page accueil](<image/wireframes/Page_Accueil_Mobile.png>)
![wireframe exemple page statique](<image/wireframes/Exemple_page_statique.png>)
![wireframes pages inscription et connexion](<image/wireframes/Pages_Inscription_Connexion.png>)
![wireframe pages profil et recherche](<image/wireframes/Resultats_recherche_DisplayProfile_Tableau_de_bord.png>)

#### Wireframes version desktop 

<!-- A ajouter -->

### Maquettes

<!-- A ajouter -->

### Charte graphique

page 1 : 
![charte graphique 1ère page](<image/charte-graphp1.png>)
page 2 :
![charte graphique 2ème page](<image/charte-graphp2.png>)