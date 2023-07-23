/* 
@files          script.js
@author         Marin Barbaud
@date           23/07/2023
@modify         ~
*/

// Les variables dont on a besoins
let sp, btn_start, btn_stop, t, ms, s, mn, h

// Fonction pour initialiser les variables quand la page se charge
window.onload = function(){
    sp = document.getElementsByTagName('span')
    btn_start = document.getElementById('start')
    btn_stop = document.getElementById('stop')
    t;
    ms = 0, s = 0, mn = 0, h = 0;
}

// Fonction qui permet de mettre en place le compteur
function update_chrono(){
    ms += 1

    if(ms === 10){
        ms = 1
        s +=1
    }
    if(s === 60){
        s = 1
        min += 1
    }
    if(mn === 60){
        mn = 1
        h += 1
    }

    // Insertion des valeurs dans les spans 
    // [0] permet de selectionner le premier span
    // [1] permet de selectionner le deuxième span etc ...
    sp[0].innerHTML = h + "h"
    sp[1].innerHTML = mn + "mn"
    sp[2].innerHTML = s + "s"
    sp[3].innerHTML = ms + "ms"
}

// Fonction qui permet de démarer le compteur
function start(){
    // cette ligne de code execute la function update_chrono() toute les 100 ms
    t =  setInterval(update_chrono, 100) 
    btn_start.disabled = true
}

// Fonction qui permet de stoper le compteur
function stop(){
    // suppression de l'interval t 
    clearInterval(t)
    btn_start.disabled = false
}

// Fonction qui permet de clear le compteur
function reset(){
    clearInterval(t)
    btn_start.disabled = false
    ms = 0, s = 0, mn = 0, h = 0

    // Insertion des valeurs dans les spans 
    sp[0].innerHTML = h + "h"
    sp[1].innerHTML = mn + "mn"
    sp[2].innerHTML = s + "s"
    sp[3].innerHTML = ms + "ms"
}