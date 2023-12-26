# Gestion-Acad-mique---Application-Web
Ce projet, utilisant React.js et Nest.js, simplifie l'administration des programmes à travers les facultés. Gérez les données des facultés, départements, enseignants, matières, étudiants, cours et notes. PostgreSQL est utilisé comme base de données. Consultez le README dans les répertoires frontend et backend pour les instructions d'installation.
# Fonctionnalités Principales
Backend avec Nest.js : Utilisation de Nest.js pour créer un backend évolutif, modulaire et facile à maintenir
Base de Données avec ostgreSQL 
Interface Utilisateur avec React.js : Développement d'une interface utilisateur réactive et conviviale grâce à React.js. Les composants sont conçus pour être réutilisables et personnalisables.
# Configuration 
Cloner le Projet
````
git clone https://github.com/hasnaerguig1999/Gestion-Acad-mique---Application-Web
````
aprés
````
cd Gestion-Acad-mique---Application-Web
````
aprés pour frontend
````
cd frontend
````
# Installer les Dépendances :
````
npm install
````

# Démarrez l'application en utilisant la commande
````
npm start
````
# pour Backend (Nest.js)
Le code du backend est situé dans le répertoire backend. Suivez ces étapes pour configurer et exécuter le backend :

1-Assurez-vous d'avoir Node.js et Nest.js installés localement.
2-Naviguez dans le répertoire backend via la ligne de commande.
````
cd backend
````
3-Installez les dépendances en exécutant la commande
````
npm install
````
4-Configurez la base de données PostgreSQL en modifiant le fichier avec les détails appropriés.
````
 config/database.config.ts
````
5-Exécutez le backend en utilisant la commande
````
npm run start
````
Le serveur backend sera accessible à l'adresse
````
http://localhost:3001
````

# Configuration pour backend
Créez un fichier .env à la racine du projet et ajoutez les variables d'environnement suivantes :
````
DB_CONNECTION_STRING=mongodb://localhost:27017/yourdatabase
JWT_SECRET=your_jwt_secret
PORT=8000
NODE_ENV=development
````

j'ai déja fait un exemple sur .env.example Pour ignorer les dossiers node_modules et le fichier .env en utilisant un fichier .gitignore, vous devez simplement ajouter leurs noms au fichier. Voici comment vous pouvez le faire : 4.Créez un fichier .gitignore à la racine de votre projet si vous n'en avez pas déjà un. 5.Ouvrez le fichier .gitignore et ajoutez les lignes suivantes :
````
node_modules/
.env
````


