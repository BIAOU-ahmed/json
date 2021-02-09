var section = document.querySelector("nav>ol");

function fiches(jsonObj) {
    var canasson = jsonObj;
    // console.log("length " + canasson.length)
    for (var i = 0; i < canasson.length; i++) {
        var fiche = document.createElement('li');
        fiche.className = "full"
        var content = document.createElement('label');
        // console.log(canasson[i].id)
        content.innerHTML = canasson[i].name;




        fiche.appendChild(content);
        section.appendChild(fiche);
    }
    var ling = document.querySelectorAll('li');
    console.log(ling.length)
    ling.forEach(element => {
        element.addEventListener('click', posts);
    });

}




var p = fetch('https://jsonplaceholder.typicode.com/users')
p.then(function(response) {
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        var contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {

            return response.json() //on peut enlever le return cela marchera quand même, mais c'est pour que vous remarquiez bien qu'il y a un retour
                .then(function(contenu) {
                    fiches(contenu)

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


function posts() {
    console.log("toto")
    var target = event.target;
    console.log(target.textContent)
    var p = fetch('https://jsonplaceholder.typicode.com/users')
    p.then(response => response.json())
        .then(data => {
            for (let user of data) {
                if (user.name == target.textContent) {
                    displayHeader(user);


                }

            }
        })

    // var p = fetch('https://jsonplaceholder.typicode.com/users')
    // p.then(function(response) {
    //         if (!response.ok) {
    //             throw new Error("HTTP error, status = " + response.status);
    //         }
    //         var contentType = response.headers.get("content-type");
    //         if (contentType && contentType.indexOf("application/json") !== -1) {

    //             return response.json() //on peut enlever le return cela marchera quand même, mais c'est pour que vous remarquiez bien qu'il y a un retour
    //                 .then(function(contenu) {

    //                     displayHeader(contenu)

    //                 })
    //         } else {

    //             console.log("le fichier envoyé n'est pas du json !");
    //         }


    //     })
    //     .catch(function(error) {
    //         console.log("le srv est inaccessible:");
    //         // Network Error!
    //         console.log(error);
    //     });

}



function displayHeader(contenu) {

    // var p1 = fetch('https://jsonplaceholder.typicode.com/users')
    // p.then(response => response.json())
    //     .then(data => {
    //         for (let data of data) {
    //             if (user.id == data.id) {
    //                 console.log(data.id)
    //             }

    //         }
    //     })

    console.log(contenu)
    var header = document.querySelector("header");
    var fiche = document.querySelector(".user-data");
    var head = document.createElement('h1');
    var span = document.createElement('span');
    fiche.className = "user-data"
    head.innerHTML = contenu.name
    span.innerHTML = contenu.username
    head.appendChild(span)
    fiche.innerHTML = "";
    fiche.append(head)
    header.appendChild(fiche)

}