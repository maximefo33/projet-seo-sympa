# projet-seo-sympa
## Cahier des charges
 La présentation du projet
 La définition des besoins (problèmes auxquels répond le projet) et des objectifs (solutions qu'apporte le projet) du projet
Les fonctionnalités du projet (spécifications fonctionnelles)
 Le MVP (Minimum Viable Product) :
Le projet va faire l'objet de plusieurs étapes : l'idée c'est qu'à chaque étape le produit fonctionne, même si ce n'est pas avec toutes les fonctionnalités qui étaient prévues
Il faut se poser la question : pour que mon projet marche, est-ce que telle fonctionnalité doit marcher (MVP) ou être une fonctionnalité annexe ?
 Les évolutions potentielles (ce qui ne sera pas terminé) : tout ce qui est prévu mais ne fait pas partie du MVP
 La liste des technologies utilisées pour le projet, avec justification (spécifications techniques)
 La définition de la cible du projet (le public visé) : ça permettra entre autres choses d'anticiper certaines contraintes visuelles/ergonomiques/techniques
 Les navigateurs compatibles
 L'arborescence de l'application (le chemin de l'utilisateur, correspondra aux routes front)
 La liste des routes prévues (les routes front sont couvertes par l'arborescence en toute logique, restent les endpoints de votre API)
 La liste des User stories : micro scénarios “en tant que tel utilisateur, je dois pouvoir effectuer telle action depuis tel endroit” (chaque action sera redécoupée en différentes fonctionnalités)
 La liste des rôles de chacun


### Les fonctionnalités du projet (spécifications fonctionnelles)
    Le MVP (Minimum Viable Product) :
     Le projet va faire l'objet de plusieurs étapes : l'idée c'est qu'à chaque étape le produit fonctionne, même si ce n'est pas avec toutes les fonctionnalités qui étaient prévues
        Il faut se poser la question : pour que mon projet marche, est-ce que telle fonctionnalité doit marcher (MVP) ou être une fonctionnalité annexe ?


## FONCTIONNALITES QUI DOIVENT MARCHER


**global (présent sur chaque page)**


- [Header]
        [logo] cliquable lien vers accueil
        navigation - menu burger
         [ nav avec liens vers les pages ]
        rechercher
            [barre de recherche avec mots clefs] (recherche générale)
            [ liste experts SEO => liens vers leur pages de profil]
                [formulaires] recherche
                    => soit trouver des experts SEO de son domaine
                    => soit trouver de potentiels clients en demande d’expertise SEO.




        [bouton création du compte authentification connexion / inscription]
                    => formulaires d'inscription - demande de connexion => si oui - gestion d'erreur de connexion => 404
                            - connexion client et connexion éditeurs pour les propriétaires de sites web, les blogueurs et rédacteurs de contenu.
                            - connexion professionnnels du référencement pour les spécialistes du SEO, les agences de marketing.
        [ bouton quand connecté ] => accès au profil (tableau de bord) pour suivi
        [logo connecté / déconnecté]
        [bouton aide (optionnel : chatbot qui répond à quelques questions génériques? avec réponses auto = liste FAQ (foire aux questions)]


- [main]
        mini descriptif de l'activité de SEO Sympa, [lien] vers page à propos




- [footer] : nos réseaux sociaux - partenaires qui nous ont fait confiance
        lien vers page plan du site (sitmap)
        lien vers page contact
        lien vers rgpd / mentions légales / cookies




**les autres pages :**


        [page d'accueil]
           [bouton menu dépliant] présentation de l'activité version mini + maxi
            tout ce qui est dans le global
            témoignages fictifs - avec avis notés étoiles
            2/3 types profils types en [cards] (style carrousel)


               [page profil] (accessible uniquement quand connecté)
                quasiment identiques selon si clients ou professionnels


        [page à propos]
                historique
                concept
                secteur d'activité
                zone de clientèle
                [lien] vers page contact / formulaire


        [page blog]
            actu
            derniers clients en image


**les pages annexes**


        [page plan du site] (sitmap)
        [page contact]
            formulaire
        [rgpd / mentions légales /accessibilité/ cookies]
            liens vers rgpd...


        [page profil]
            édition (modification) de profil (mise à jour, suppression...)
            card globale
                    1 card client


            freelance / agence
            portefeuille client (nombre de réf, qualité de son service, commentaires reçus)
            demandes de connexion, réponse à une demande de connexion, liste des relations.
            réseaux sociaux / liens / pages pros
            système de messagerie :
                première prise de contact par formulaire
                si demande de contact acceptée, connexion = échange entre utilisateurs (sans websockets dans un premier temps).


        [page d'erreur 404]


## FONCTIONNALITES ANNEXE / BONUS


- idées proposées dans l'énoncé :
        Suivi des sites : ajout, modification, suppression, détails.
        Évolution du tableau de bord : gestion des sites.
        Système de notifications : notifications pour les réponses aux demandes de partenariat, pour les mises à jour de sites.
        Suivi de l’évolution des scores de référencement de ses sites.
        Système de messagerie : utilisation de websockets pour des échanges instantanés.


- idées venues au fil de nos réflexions
        page newsletter
        page langues :changer de langues sur le site, sur toutes les pages une fois le choix de langue fait
        système de messagerie : utilisation de websockets pour des échanges instantanés.
        page pour faire devis chiffré
        page formulaire pour l'aide
        footer :
           lien vers tuto pour naviguer sur le site
           proposer de commencer un essai gratuit
        bouton thème foncé / thème clair
        avis global de l'ergonomie site => comment recueillir les avis ?

## attention !!!
    lois & droits européens
    SEO / référencement
    accessibilité

**********************
    Les évolutions potentielles (ce qui ne sera pas terminé) : tout ce qui est prévu mais ne fait pas partie du MVP
 La liste des technologies utilisées pour le projet, avec justification (spécifications techniques)
 La définition de la cible du projet (le public visé) : ça permettra entre autres choses d'anticiper certaines contraintes visuelles/ergonomiques/techniques
 Les navigateurs compatibles
 L'arborescence de l'application (le chemin de l'utilisateur, correspondra aux routes front)
 La liste des routes prévues (les routes front sont couvertes par l'arborescence en toute logique, restent les endpoints de votre API)
 La liste des User stories : micro scénarios “en tant que tel utilisateur, je dois pouvoir effectuer telle action depuis tel endroit” (chaque action sera redécoupée en différentes fonctionnalités)
 La liste des rôles de chacun


## Documents relatifs à la BDD
 MCD

 
 MLD
 Dictionnaire des données

 
## Eléments graphiques
 Wireframes
 Maquettes
 Charte graphique
