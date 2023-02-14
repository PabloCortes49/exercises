// . Crea una función que se llame getUniqueId y devuelva el número de milisegundos que hay desde 1970 utilizando la función getTime de Date
// Esta función NO debe ser un Arrow function

const getUniqueId =()=>{
  return new Date().getTime()
}

// . Crea una función que se llame isString con un parámetro y devuelva si dicho parámetro es una cadena de texto
// Esta función NO debe ser un Arrow function

function isString (text) {
  return typeof text === 'string';   
}
isString(5)

const isString=(text)=>{
  return typeof Text === 'string';
 
  

}

// . Crea una función que se llame isEmpty con un parámetro y devuelva true si es una cadena de texto vacía.
// Esta función NO debe ser un Arrow function

const isEmpty = (text)=>{
  return  text === ""
}
isEmpty('uu')

// . Crea una función que se llame isValidText con un parámetro que te devuelva true si dicho parámetro es un texto Y no está vacío llamando a las dos funciones anteriores
const isValidText = (text)=>{
  return isString(text) && !isEmpty('text')
}
isValidText(1234)



// . Crea una función que se llame isNumber con un parámetro y devuelva si dicho parámetro es un número
// Esta función NO debe ser un Arrow function
function isNumber (text){
return typeof text === 'number';
}
isNumber(4)



// . Crea una función que se llame isGreatherThan10 con un parámetro y devuelva true si es mayor que 10
// Esta función NO debe ser un Arrow function

function isGreatherThan10 (text){
  return text > '10'
}

isGreatherThan10(11)

// . Crea una función que se llame isValidId con un parámetro que te devuelva true si dicho parámetro es un Número Y es mayor de 10 llamando a las dos funciones anteriores
// Esta función NO debe ser un Arrow function

function isValidId (text){
  return isNumber (text) && isGreatherThan10 (text);
}

isValidId(20) //true

// . Crea una función createTask con dós parámetros, un texto y un id único, y te devuelva un objeto con ambos parámetros.
// Esta función NO debe ser un Arrow function

// . Cambia la función anterior creando una nueva llamada createTaskWithTextValidation, que devuelva un string diciendo "Argumentos incorrectos" si el parámetro que guarda el texto no es una cadena de texto o está vacío
// Esta función NO debe ser un Arrow function
function createTaskWithTextValidation (text,id) {
if(!isValidText(text)) {
  return'Argumentos incorrectos';
}
return createTask(text, id)
}


// . Cambia la función anterior creando una nueva llamada createTaskWithValidation, para que además devuelva el string "Argumentos incorrectos" si el parámetro que guarda el ID no es un número y es menor o igual a 11
// Esta función NO debe ser un Arrow function

// Crea todas las funciones anteriores como ARROW functions, y llámalas exactamente igual que las originales pero con el sufijo Arrow, por ejemplo getUniqueId sería getUniqueIdArrow


// Recorre el array que está en la variable randomArray y te escriba en consola true si es el texto es válido utilizando isValidText
  const randomArray = [1, 2, '3', '4', '', 6, 7, '8'];

  
// Recorre el array que está en la variable randomArray y te escriba en consola true si es el texto es válido utilizando isValidTextArrow


// Crea una función que se llame generateRandomTasks con un parámetro, que te cree un array con el número de tasks. 


