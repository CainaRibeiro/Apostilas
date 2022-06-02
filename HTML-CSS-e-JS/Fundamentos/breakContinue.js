//break e continue -> Evitar, mas pode usar o break por exemplo quando for pra procurar um elemento
//break: influencia dentro do for, while e switch
//continue: inlfuencia dentro do for e while
//OBS: tomar cuidado com a variável de controle caso use o continue dentro do while, pois se ela não for colocada antes do continue, terermos um loop infinito pois a variável nunca será incrementada ou decrementada e continuará no loop

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums){
    if(x == 5) { // vai sair do for e parar a execução do comando quando o x for igual a 5;
        break;
    }
    console.log(`${x} = ${nums[x]}`)
}
console.log();

for(let y in nums){
    if(y == 5) { // vai pular quando chegar no índice 5
        continue;
    }
    console.log(`${y} = ${nums[y]}`)
} console.log()

//Pode-se criar um rótulo para que o for interno consiga sair do externo como abaixo:
externo: for(let a in nums){
    for(let b in nums){
        if(a == 2 && b == 3){
            break externo // é usado assim para sair do for externo através do rótulo
        }
        console.log(`Par = ${a}, ${b}`);
    }
}