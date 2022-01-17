yo = document.getElementById("sobreMi");
conoc = document.getElementById("conocimientos");
cur = document.getElementById("cursos");
pro = document.getElementById("proyectos");
cont = document.getElementById("contactame");
footer = document.querySelector("footer");


function mostrar(){
    if (document.querySelector(".nuevo_nav").style.display == "block"){
        document.querySelector(".nuevo_nav").style.display = "none";
    }
    else{
        document.querySelector(".nuevo_nav").style.display = "block";
    }
}

function sobreMi(){
    yo.style.display = "block";
    conoc.style.display = "none";
    cur.style.display = "none";
    pro.style.display = "none";
    cont.style.display = "none";
    footer.style.display = "block";
}

function conocimientos(){
    yo.style.display = "none";
    conoc.style.display = "block";
    cur.style.display = "none";
    pro.style.display = "none";
    cont.style.display = "none";
    footer.style.display = "block";
}

function cursos(){
    yo.style.display = "none";
    conoc.style.display = "none";
    cur.style.display = "block";
    pro.style.display = "none";
    cont.style.display = "none";
    footer.style.display = "block";
}

function proyectos(){
    yo.style.display = "none";
    conoc.style.display = "none";
    cur.style.display = "none";
    pro.style.display = "block";
    cont.style.display = "none";
    footer.style.display = "block";
}

function contactame(){
    yo.style.display = "none";
    conoc.style.display = "none";
    cur.style.display = "none";
    pro.style.display = "none";
    cont.style.display = "block";
    footer.style.display = "block";
}