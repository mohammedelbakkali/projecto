export interface ObjectifResult {
    ObjectifOuResultat: string;
    GlobalOuSpecifique: string;
    Titre: string;//
    Descriptif: string;//
    Indice: number;
    ResultatAssocie:ObjectifResult[];//
    ObjectifSpecifique:ObjectifResult;//
}
