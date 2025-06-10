# Process Git pour l'apothéose

*Workflow Git très complet, vous pouvez bien sûr prendre vos propres notes de ces notes une fois que vous avez compris l'idée.*

## Mise en place du projet

Mickael et Alexis travaillent sur un projet ensemble.

Ils décident de ne jamais travailler sur la branche `main` et d'y mettre seulement leur code quand ils auront testé leur fonctionnalités.

Depuis `main` ils créent donc la branche `dev` avec la commande `git checkout -b dev`.

> À ce stade là, voyez `main` comme la branche de *prod* et `dev` comme la branche de *préprod*

Une fois cette mise en place faite, il n'y a plus besoin de la toucher et on peut rentrer dans le process quotidien :

## Création d'une feature

Mickaël code une nouvelle feature pour la page d'accueil de leur site sur une nouvelle branche, à partir de la branche `dev`.

- `git checkout dev`  => basculement sur la branche de dev
- `git pull`  => récupération d'éventuelles modifications sur la branche `dev` distante, pour être à jour avec tout le monde
- `git checkout -b feature-home` => création de la nouvelle branche

Il code ensuite en faisant régulièrement des commits (`git commit -m "home block header done"`) sur cette branche, et de temps en temps des push (`git push`) pour sauvegarder son travail. La première fois qu'il fera un push, ça ne marchera pas car Git ne connait pas la branche distante, mais on peut lui demander de la créer avec la commande qui apparait dans le terminal une fois le push tenté. (`git push -u origin feature-home`)

## Pull Request et Merge sur dev

Une fois que Mickaël est content de son travail (et en admettant que c'est lui qui a fini sa feature avant Alexis, sinon voir plus bas la partie "Alexis"), il crée une pull request (PR) et prévient Alexis pour qu'ils regardent ensemble le travail accompli. Pour faire la PR, il va sur GitHub et suiy les indications sur le repo :
- Clic sur *Compare & pull request*
- Sélection de la branche dans laquelle merger la feature (`dev`) et vérification que la deuxième branche sélectionnée est celle de la feature (`feature-home`).
- Clic sur *create pull request*

Alexis et Mickaël vérifient ensemble le code de Mickaël et s'i 'ils sont d'accord, ils mergent sur `dev` toujours via l'interface de Github.

Il est possible de supprimer la branche de la feature pendant le merge, mais vous pouvez le faire ensuite. En tous les cas, c'est toujours une bonne idée de la supprimer, pour plus de propreté. Assurez-vous simplement au préalable que la branche de dev est toujours fonctionnelle après le merge ! En cas de souci, vous pourrez revenir sur un commit précédent sur dev (avant le merge, donc) et corriger la branche de feature avant de refaire un merge.

⚠️ ***À partir de là, process différent pour Mickaël et Alexis***

*-Mickaël-*

Maintenant qu'il a fini cette feature, il va en attaquer une nouvelle. Il reprend donc le processus depuis "Création d'une feature"

*-Alexis-*

Alexis travaille sur sa feature `feature-404` et sait que Mickaël vient de merger la sienne sur `dev`. Alors, pour s'assurer que le travail qu'il est en train de faire est bien compatible avec celui de Mickaël, il va faire les opérations suivantes :

- Commiter son travail sur sa branche `feature-404` à lui
- `git checkout dev`  => basculer sur la branche `dev`
- `git pull`  => récupérer les dernières modifications depuis la branche distante `dev`
- `git checkout feature-404`  => rebasculer sur sa branche à lui
- `git merge dev`  => récupérer le travail de `dev` et le mettre sur sa branche à lui
- Vérifier que tout fonctionne bien, sinon résoudre les conflits en allant manuellement dans les fichiers indiqués par le terminal et accepter les modifications entrantes (de Mickaël) ou sortantes (d'Alexis) en fonction de ce qui est bon ou pas. Alexis peut aussi choisir de conserver les deux temporairement pour corriger son code en conflit et le rendre compatible avec celui de Mickaël.
- Une fois fait, Alexis peut finir son travail, commiter, pusher. Et aller à l'étape "Pull Request et Merge sur dev"

---
**En suivant ce process, vous ne devriez jamais avoir de conflits à régler sur Github !** 🥳