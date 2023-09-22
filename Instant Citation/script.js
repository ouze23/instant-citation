const Citations = [ 
    "Youssoupha-.png","Albert.png","DENSELY.png","DENSELY1.png",
    "Nelson-1.png", "Nelson-2.png","DENSELY2.png", "Nelson-3.png",
    "Nelson-4.png", "Nelson-5.png","Leopold.png", "Nelson-.png",
    "Madara.png","Thomas Sankara.png","Thomas sankara1.png",
    "Winston Churchill.png","Youssoupha-1.png","Youssoupha-2.png",
    "Youssoupha-3.png","Youssoupha-4.png",
];
function usman() {

    let randomIndex = Math.floor(
        Math.random() * Citations.length
        );
    citation.src = Citations[randomIndex]
    document.getElementById('lien').innerHTML = Citations[randomIndex]
}