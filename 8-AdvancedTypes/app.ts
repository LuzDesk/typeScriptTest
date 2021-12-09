class errorStatus{
    type?: 'Error';
    code?: number;
}

class successStatus{
    type?: 'Success';
    code?: number;
    response?: string;
}

// uniones
type Status = errorStatus | successStatus;
function get(status:Status){
    switch(status.type){
        case 'Error':
            console.log('Error in application LVD-System.');
        break;
        case 'Success':
            console.log(status.response);
        break;
    }
    console.log(status.code);
}

interface ErrorHadling{
    success: boolean;
    error?: string;
}

interface GameData{
    title: string;
}

interface ArtistData{
    name: string;
}

// intersección
type GamesResponse = GameData & ErrorHadling;
type ArtistResponse = ArtistData & ErrorHadling;

const game: GamesResponse = {
    title: 'WZ',
    success: true
}

const artist: ArtistResponse = {
    name: 'Luz Valdez',
    success: false,
    error: '404'
}

// la interseccion puede trabajar con varias intersecciones pero se queda al final con el tipo de dato que compartan ambas intersecciones.
type superString = string | number;
type superNumber = number | boolean;
type superType = superString & superNumber;
/* Como funcionan los toit wards: identifica el tipo de dato que se esta trabajando o recibiendo*/

function add(a: superString, b: superNumber){
    // toit wards
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    } else {
        return a.toFixed() + b ;
    }
}

type NetworkData = GameData | ErrorHadling;

function dowloadData(data: NetworkData){
    if('tittle' in data){
        console.log(data);
    }
    if('tittle' in data){
        console.log(data);
    }
}

dowloadData(game);
dowloadData(artist);
