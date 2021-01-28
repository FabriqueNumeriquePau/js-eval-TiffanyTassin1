console.log("Go Chuck !");

//Étape 1
let carreDiv= document.querySelector("div"); //Création variable 
carreDiv.onmouseover = function() {mouseOver()}; // Img de la div : souris sur image - Appel de la fonction MouseOver
carreDiv.onmouseout = function() {mouseOut()};  // Img de la div : souris sortante - Appel de la fonction MouseOut

function mouseOver() { // Quand la souris est sur l'image
   carreDiv.style.borderRadius = "0%"; // Pas de border radius
}

function mouseOut() { // Quand la souris n'est plus sur l'image
    carreDiv.style.borderRadius = "70%"; //70% border radius 
}

//Étape 2 
let picto = document.querySelectorAll("header");
let i;

for (i = 0; i < picto.length; i++) {
    picto[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.visibility === "hidden" || content.style.visibility === "" )
         {
            content.style.visibility = "visible"; 
            content.style.height = "auto";
        }  else {
            content.style.visibility = "hidden";
            content.style.height = "0px"
        }
    });
}

//Étape 3 
import Menu from "data/menu.json"

const xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", function(e){ 
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) { 
        console.log(JSON.parse(e.currentTarget.response));
        const data = JSON.parse(e.currentTarget.response);
        for (let menu of data){ 
            const men = new Menu(menu.nom, menu.lien, menu.sousmenus);
            const affichage = menu.getHTML();
            document.querySelector("header").appendChild("affichage");
        }
    }
});
xhr.open("get", "data/menu.json", true);
xhr.send();

// let picto = document.querySelector("img");
// let para = document.querySelector("p:first-of-type");
// console.log(para);

// // const picto2 = document.picto.nextElementSibling;
// // const para2 = document.para.nextElementSibling;
// // console.log(para2);


// para.style.display = "none"; /* Ne pas afficher le para */


// picto.addEventListener("click", (event) => { /* Click */
//     if (para.style.display == "none"){ /* Si la liste n'est pas affichée */
//         para.style.display = "block" /* Si on clique sur le bouton, afficher la liste*/
//     } else { 
//         para.style.display = "none" /* Si on reclique, ne pas afficher */
//     }
// })
