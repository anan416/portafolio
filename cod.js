conoc = document.getElementById("conocimientos");
cur = document.getElementById("cursos");
pro = document.getElementById("proyectos");
cont = document.getElementById("contactame");
footer = document.querySelector("footer");
titulo = document.querySelector("h1");


function mostrar(){
    if (document.querySelector(".nuevo_nav").style.display == "block"){
        document.querySelector(".nuevo_nav").style.display = "none";
    }
    else{
        document.querySelector(".nuevo_nav").style.display = "block";
    }
}

function mover(){
    titulo.style.top = "-30px";
    titulo.style.fontSize = "50px";
}

function conocimientos(){
    conoc.style.display = "block";
    cur.style.display = "none";
    pro.style.display = "none";
    cont.style.display = "none";
    footer.style.display = "block";
}

function cursos(){
    conoc.style.display = "none";
    cur.style.display = "block";
    pro.style.display = "none";
    cont.style.display = "none";
    footer.style.display = "block";
}

function proyectos(){
    conoc.style.display = "none";
    cur.style.display = "none";
    pro.style.display = "block";
    cont.style.display = "none";
    footer.style.display = "block";
}

function contactame(){
    conoc.style.display = "none";
    cur.style.display = "none";
    pro.style.display = "none";
    cont.style.display = "block";
    footer.style.display = "block";
}