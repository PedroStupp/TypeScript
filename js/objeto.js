var cliente = {
    nome: "Maria",
    idade: "28",
    cargo: "Youtuber",
    videos: [
        "Dark souls 1 platinado",
        "Dark souls 2 gameplay",
        "Galinha pintadinha até a panela"
    ]
};
console.log("\"Nome:\" ".concat(cliente.nome));
console.log("\"Idade:\" ".concat(cliente.idade));
console.log("\"Cargo:\" ".concat(cliente.cargo));
console.log("Vídeos:");
for (var index = 0; index < cliente.videos.length; index++) {
    var video = cliente.videos[index];
    console.log("\t".concat(video));
}
