var header = document.querySelector('header');
var section = document.querySelector('section');

// fonction pour inserer le titre central de la page et son sous titre
function leHeader(jsonObj) {
    var bh1 = document.createElement('h1');
    bh1.textContent = 'Haras ' + jsonObj['nomHaras'];
    header.appendChild(bh1);

    var sstitre = document.createElement('p');
    sstitre.textContent = 'À ' + jsonObj['ville'] + " depuis " + jsonObj['dateCreation'];
    header.appendChild(sstitre);
}

//fonction pour afficher les différents chevaux 

function fiches(jsonObj) {
    var canasson = jsonObj['chevaux'];

    for (var i = 0; i < canasson.length; i++) {
        var fiche = document.createElement('article');
        var bh2 = document.createElement('h2');
        var lecuyer = document.createElement('p');
        var lage = document.createElement('p');
        var titrePrix = document.createElement('p');
        var listePrix = document.createElement('ul');

        bh2.textContent = canasson[i].nom;
        lage.textContent = 'Age: ' + canasson[i].age + ' ans';
        lecuyer.textContent = 'Ecuyer: ' + canasson[i].ecuyer;
        titrePrix.textContent = 'Prix remportés:';

        // rajouter methode de parcours foreach()

        var Prix = canasson[i].courses;
        for (var j = 0; j < Prix.length; j++) {
            var unPrix = document.createElement('li');
            unPrix.textContent = Prix[j];
            listePrix.appendChild(unPrix);
        }

        fiche.appendChild(bh2);
        fiche.appendChild(lage);
        fiche.appendChild(lecuyer);
        fiche.appendChild(titrePrix);
        fiche.appendChild(listePrix);

        section.appendChild(fiche);
    }
}


var myInit = {
    method: 'POST',
};

var p = fetch('https://alidjinou.needemand.com/json/haras.php', myInit)
p.then(function(response) {
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        var contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            return response.json() //on peut enlever le return cela marchera quand même, mais c'est pour que vous remarquiez bien qu'il y a un retour
                .then(function(contenu) {
                    leHeader(contenu);
                    fiches(contenu);
                })
        } else {

            console.log("le fichier envoyé n'est pas du json !");
        }


    })
    .catch(function(error) {
        console.log("le srv est inaccessible:");
        // Network Error!
        console.log(error);
    });