export interface Article {
// - Título: texto com no máximo 50 caracteres
    title: string,
// - Conteúdo: texto com no máximo 5000 caracteres
    content: string,
// - Data: um timestamp que indica o dia de publicação ou da última atualização
    date: Date,
// - Tag: texto com no máximo 16 caracteres e sem espaço, este campo é o único opcional
    tag: string

    id: number
}