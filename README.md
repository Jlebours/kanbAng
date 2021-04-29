# TP10 Report
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.
## First step
You must run the TP5 (https://github.com/Jlebours/JaxRSOpenAPIby) following the instructions of the README.md

Without launching the rest server, our application will not be able to run correctly because it will not have a backend and then data to use.

## Next step 
### Clone git repository
https://github.com/Jlebours/kanbAng
## How to install
Check the installation of nodejs using nvm (see guid install) http://olivier.barais.fr/blog/posts/teaching/istic/m2/french/2018/09/10/Operation_portable_M2_ISTIC.html

### How to run
Run `npm start` for a dev server to run with the proxy. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## About
Vous arrivez tout d'abord sur une page principale, les routes ont été mises en place sur mon projet pour faciliter la navigation et savoir où nous sommes dans l'url du navigateur.

Les fonctionnalités fournies par cette applications sont en lien avec mon TP5, cad vous allez avoir la possibilité de modifier les utilisateurs :
- l'onglet Get User va vous permettre de pouvoir récupérer les informations de tous les utilisateurs qui ont été créés en base au préalable et même ceux que vous allez créer par la suite. 
Une fois sélectionné, si celui-ci est une utilisateur vous allez avoir la chance de pourvoir modifier son nom; ce qui ne sera pas le cas pour un admin, l'accès sera bloqué. 
- l'onglet New User va vous permettre de créer un nouvel utilisateur (non admin) de la manière la plus simple possible. Il n'y a pas de notification lors de la création, désolé :(.
- l'onglet Remove User vous fourni la liste de tous les utilisateurs, vous pourrez ainsi cliquer sur le bouton remove pour les enlever définitivement de la base. 

J'ai décider de pousser le design de l'application pour lui donner un aspect moderne en restant très simple grâce à PrimeNG et pouvoir découvrir d'avantage la force de ce framework.

TP extrêmement intéressant.

ATTENTION toutefois, si jamais le JSON est mal récupéré, veuillez refresh la page et regarder dans la console (F12), sur ma machine il arrivait parfois que d'un coup je ne récupère pas le JSON, la solution étant de relancer le serveur REST.

## Student
Johan LE BOURSICAUD
