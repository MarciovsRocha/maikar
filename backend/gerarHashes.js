const bcrypt = require('bcryptjs');

async function gerarHashes() {
    const senha1 = await bcrypt.hash('hashedpass1', 10);
    const senha2 = await bcrypt.hash('hashedpass2', 10);
    const senha3 = await bcrypt.hash('hashedpass3', 10);
    const senha4 = await bcrypt.hash('hashedpass4', 10);
    const senha5 = await bcrypt.hash('hashedpass5', 10);
    console.log({ senha1, senha2, senha3, senha4, senha5 });[]
}

gerarHashes();
