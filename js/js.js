function cargarNoticias(){ficheroCargado<nombreFichero.length&&cargarFichero(nombreFichero[ficheroCargado])?ficheroCargado++:$("#btnLoad").html("No hay más noticias")}function cargarFichero(e){var a=e;return $.getJSON(a,function(a){addNoticia(a,e)}),!0}function addNoticia(e,a){var t=document.getElementById("cargarNoticias"),o=document.createElement("div");o.id="row"+a,o.className="row",t.appendChild(o),$.each(e,function(a,t){var n=document.createElement("div");n.className="col col-sm-6";var i=document.createElement("a");i.setAttribute("href","#");var c=document.createElement("h3");c.className="notTitle",c.textContent=e[a].title;var r=document.createElement("h5");r.className="date",r.textContent=e[a].date;var d=document.createElement("div");d.className="not img-rounded";var l=document.createElement("img");$(window).width()<900?l.src=e[a].imgmid:l.src=e[a].imgbig,l.alt="image New";var m=document.createElement("p");m.className="desc",m.textContent=e[a].desc,d.appendChild(l),i.appendChild(c),i.appendChild(d),i.appendChild(m),i.appendChild(r),n.appendChild(i),o.appendChild(n)})}var nombreFichero=["data/1.json","data/2.json","data/3.json"],ficheroCargado=0;$(document).ready(function(){$("html, body").animate({scrollTop:0}),$("#btnLoad").click(function(){cargarNoticias()}),$(window).scroll(function(){$(window).scrollTop()+$(window).height()===$(document).height()&&cargarNoticias(),$(window).scrollTop()>$("#jumboTron").outerHeight()&&$("#navbarfixed").addClass("affix"),$(window).scrollTop()<$("#jumboTron").outerHeight()&&$("#navbarfixed").removeClass("affix")})});
