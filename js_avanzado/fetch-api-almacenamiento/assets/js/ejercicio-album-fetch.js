let $boton = document.querySelector('#boton');

$boton.addEventListener('click', () => {
    
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(resp => resp.json()).then(data => {
        console.log(data);

        let imagenes = document.createElement('img');
        let titulo = document.createElement('titulo');
        for(let i = 0; i < data.length; i++){
            titulo = data[i].title;
            imagenes.src = data[i].thumbnailUrl;
            document.body.appendChild(imagenes);
            document.body.append(titulo);
            document.write('<br>');
            
        }
    }) 

});