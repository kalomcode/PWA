// Service Worker

if('serviceWorker' in navigator){
    console.log('puedes usarlo')
    navigator.serviceWorker.register('./sw.js')
                            .then(res => console.log('serviceWorker cargado correctamente',res))
                            .catch(err => console.log('error en la carga del serviceWorker',err))
}else{
    console.log('NO PUEDES USARLO')
}

// Scroll suavizado
$(document).ready(function(){
    
    $("#menu a").click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        },700 + (($($(this).attr('href')).offset().top)/2))

        return false;
    })

})