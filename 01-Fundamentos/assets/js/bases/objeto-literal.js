let personajes = {
    nombre: 'Tony stark',
    codeName: 'Iron man',
    vivo:false,
    edad:40,
    corords: {
        lat : 40.416775,
        long: -3.703790
    },
    trajes: ['Mark I','mark V','Hulkbuster'],
    direccion: {
        zip: '0800, 90265',
        ubicacion: 'malibud california'
        
    },
    'ultimaPelicula': 'Avengers: Endgame',
    
};
console.log(personajes);
console.log('nombre',personajes.nombre);
console.log('codeName',personajes['nombre']);
console.log('edad',personajes.edad);
console.log('lat',personajes.corords.lat);
personajes.trajes.push('Mark III');
console.log('Numero de trajes ',personajes.trajes.length);
console.log('Numero de trajes ',personajes.trajes[personajes.trajes.length-1]);

const x = 'vivo';
console.log('vivo',personajes[x]);
console.log('ultimaPelicula',personajes['ultimaPelicula']);