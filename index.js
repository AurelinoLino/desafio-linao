// Entrada nomeando 2 variaveis nome e xp (experiencia)

let nome = "Aurelino"

let XP = 1000

let nivel = "AVS"

//Repeticao

if (XP<1000) {nivel = "Ferro"
    
}

else if (xp>1000) and (xp<=2000) 

{ nivel = "Bronze"
    
} 

else if (xp>2001) and (xp<=5000)

{nivel = "Prata"}

else {"Vc esta fora do nivel"}

// 50001 7000 Ouro
// 7001 8000 Platina
// 8001 9000 Ascendente
// 9001 10000 Imortal
// 10001 Radiante


// Saida

console.log("O Herói de nome " + nome + "está no nivel de " + nivel)
