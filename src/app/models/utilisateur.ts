export class Utilisateur {
    id?:number;
    prenom?:string;
    nom?:string;
    motDePasse:string;
	email:string;
	statut?:string;
	biographie?:string;
	popularite?:number;
	photo?:string;
	dateInscription?:Date;
	dateNaissance?:Date;
}