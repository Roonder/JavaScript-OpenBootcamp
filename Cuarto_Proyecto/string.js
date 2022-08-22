let nombre = 'Juliam';
let apellido = 'Aponte';

const estudiante = nombre.concat(' ', apellido);
console.log(estudiante)

const estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

const estudianteMinus = estudiante.toLowerCase();

const estudianteLength = estudiante.length;
console.log(estudianteLength);

const estudianteInicio = estudiante.charAt(0);
console.log(estudianteInicio);

const estudianteFin = estudiante.charAt(12);
console.log(estudianteFin);

const estudianteSinEspacios = estudiante.replace(/ /g, "");
console.log(estudianteSinEspacios);

const existeEstudiante = estudiante.includes(nombre);
console.log(existeEstudiante);