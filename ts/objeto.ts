let cliente = {
    nome: "Maria",
    idade: "28",
    cargo: "Youtuber",
    videos: [
        "Dark souls 1 platinado",
        "Dark souls 2 gameplay",
        "Galinha pintadinha até a panela"
    ]
}

console.log(`"Nome:" ${cliente.nome}`)
console.log(`"Idade:" ${cliente.idade}`)
console.log(`"Cargo:" ${cliente.cargo}`)

console.log("Vídeos:");
for (let index = 0; index < cliente.videos.length; index++) {
    const video = cliente.videos[index];
    console.log(`\t${video}`) 
}
