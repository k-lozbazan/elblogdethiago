//* console.log("1"); *//

(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () { //
        //console.log("2");

        // Tipo de Selector => getElementById
        /*
  var logo = document.getElementById('logo');
  var navegacion = document.getElementById('navegacion');

  navegacion.style.display="none"; //** desaparece la barra de navgacion
  */


        // Tipo de Selector => getElementsByClassName
        /*
        var navegacion = document.getElementsByClassName('navegacion');
        console.log(navegacion[0]);
    
        var contenido = document.getElementsByClassName('contenido');
        console.log(contenido);	
    
        contenido[0].style.display="none";
        */

        // Tipo de Selector => getElementsByTagName
        /*
        var enlaces = document.getElementsByTagName('a');
        console.log(enlaces.length);
    
        for(var i=0; i < enlaces.length; i++){
            enlaces[i].setAttribute('target', '_blank');
        }
    
        var enlacesSidevar = document.getElementById('sidebar').getElementsByTagName('a');
        console.log(enlacesSidevar);
    
        for(var i=0; i < enlacesSidevar; i++){
            enlacesSidevar[1].setAttribute('href', 'http://www.google.com.pe');
        }
        */

        // Tipo de Selector => querySelectorAll
        /*
        var logo = document.querySelector('.logo');
        console.log(logo);
    
        var encabezado = document.querySelectorAll('h2, footer p');
        console.log(encabezado);	
    
        var enlaces = document.querySelectorAll('a');
        console.log(enlaces);
        */
        /*
        var enlace = document.querySelectorAll('a');
    
        for(var i=0; i < enlace.length; i++){
            console.log(enlace[i].innerText);
        }
        */
        /*
        var enlaces = document.querySelectorAll('#menu ul li a')[0];
        console.log(enlaces.nodeType);
        console.log(enlaces.nodeName);
        console.log(enlaces.attributes);
        console.log(enlaces.firstChild);
        console.log(enlaces.firstChild.nodeValue);
    
        enlaces.firstChild.nodeValue="home";
        enlaces.id="mi_id";
        */

        // Crear contenido
        /*
        var sidebar = document.querySelector('#sidebar');
        var nuevoElemento = document.createElement("H1");
        var nuevoTexto = document.createTextNode("Hola Mundo");
        nuevoElemento.appendChild(nuevoTexto);
        sidebar.appendChild(nuevoElemento);
    
        // Agregar entrada 6
        var enlaceSidebar = document.querySelectorAll('#sidebar ul');
        // Creando el enlace
        var nuevoEnlace = document.createElement('A');
        nuevoEnlace.setAttribute
        var textEnlace = document.createTextNode('Entrada 6');
        nuevoEnlace.appendChild(textEnlace);
        // Creando Lista
        var nuevaLista = document.createElement("LI");
        nuevaLista.appendChild(nuevoEnlace);
        // lo agregamos al mnu
        enlaceSidebar[0].appendChild(nuevaLista);
        */

        // Clonar contenido de Nodo con insertBefore
        /*
        var contenido = document.querySelectorAll('main');
        var nuevoContenido = contenido[0].cloneNode(true);
    
        var sidebar = document.querySelector('aside');
    
        sidebar.insertBefore(nuevoContenido, sidebar.childNodes[5]);
        */


        // Creando lista de post populares
        /*
        var sidebar = document.querySelector('aside');
    
        var masVisitados = document.createElement('H2');
        var textoVisitados = document.createTextNode('Post más visitados');
        masVisitados.appendChild(textoVisitados);
        sidebar.insertBefore(masVisitados, sidebar.childNodes[0]);
    
        var contenido = document.querySelectorAll('main h2');
    
        for(var i = 0; i < contenido.length; i++){
            var nuevoElemento = document.createElement('LI');
            var nuevoTexto = document.createTextNode(contenido[i].firstChild.nodeValue);
            nuevoElemento.appendChild(nuevoTexto);
            sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1]);
        }
        */

        // Eliminar Nodos
        /*
        var primerPost = document.querySelector('main article');
        console.log(primerPost);
    
        primerPost.parentNode.removeChild(primerPost);
    
        var enlaces = document.querySelectorAll('#navegacion nav ul li a')[10];
        console.log(enlaces);
        enlaces.parentNode.removeChild(enlaces);
        */
        /*
        var viejoNodo = document.querySelector('main h2');
        var = nuevoNodo = document.querySelector('Thiago Favio');
        viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo);
        */

        // Reemplazar nodo con uno nuevo
        /*
        var nuevoTitulo = document.createElement('h2');
        var nuevoTexto = document.createTextNode('Carlos Kloz');
        nuevoTitulo.appendChild(nuevoTexto);
    
        var viejoNodo = document.querySelector('main h2');
        viejoNodo.parentNode.replaceChild(nuevoTitulo, viejoNodo);
        */











    });

})();
