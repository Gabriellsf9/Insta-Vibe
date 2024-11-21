import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts(){
    const db = conexao.db("insta-vibe");
    const colecao = db.collection("post");
    return colecao.find().toArray();
}