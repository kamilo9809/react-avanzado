const saludar=(nombre)=>{
    return `hola ${nombre}`
}

const saludar1=(name)=>`hola ${name}`;

console.log(saludar(`camilo`));
console.log(saludar1(`camilo`));

const getUser = () =>
    ({
        id: '6352625374',
        username:'akjdsl'
    });

console.log(getUser());