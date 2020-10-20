//Je maakt code in het bestand winkelwagen.js waarmee je het volgende kunt doen:


//Verschillende items opslaan (bijvoorbeeld Sneakers, T-shirts)
    //vooraad van een item in de winkel weergeven
    //aantal items in winkelmandje geplaatst
    //gekozen kleur van het item in het winkelmandje
    //maat van het gekozen item in het winkelmandje (bijvoorbeeld Medium, Small, Large)
//Je maakt hiervoor gebruik van objecten en variabelen (0,5 punt)   



class Artikel 

{
    constructor(item, aantal, maat){ 

        let VoorRaad = this; 

        VoorRaad.artikel = item; 

        VoorRaad.voorraad = parseFloat(aantal); 

        VoorRaad.maat = maat;
    } 

    showVoorraad(){
        console.log(` kleur = ${this.artikel} , maat = ${this.maat}`);
    }
         


     /*
            if((this.voorraad === parseFloat(0) || this.voorraad < parseFloat(0) || this.voorraad <= parseFloat(0) || this.voorraad - verlagenMulti.somAftrekken <= parseFloat(-1))){ 

                console.log("Geen voorraad beschikbaar voor dit artikel, verlaging kan niet plaatsvinden. Er zijn", this.voorraad, " op deze locatie beschikbaar. Wilt u nieuwe modellen bestellen ?    :    "); 

                 

                console.log("sec0"); 

            } 

            else if((this.voorraad <=parseFloat-1)){ 

                console.log("Geen voorraad beschikbaar voor dit artikel, verlaging kan niet plaatsvinden. Er zijn", this.voorraad, " op deze locatie beschikbaar. Wilt u nieuwe modellen bestellen ?    :    "); 

                console.log("sec1"); 

            }  

            else if(this.voorraad >=1 ){ 

                console.log((this.voorraad -= verlagenMulti.somAftrekken)); 

                console.log("sec2"); 
            } 

        } 
        */

 
 

        verhoogVoorraadMet(optellenMulti){ 

        let verhogerMulti = this; 

            verhogerMulti.optellenMulti = parseFloat(optellenMulti); 

            console.log((this.voorraad += verhogerMulti.optellenMulti)); 

        } 

          
} 
//Verschillende items opslaan (bijvoorbeeld Sneakers, T-shirts) + gekozen kleur van het item in het winkelmandje + maat -> check
let ArtikelVariabel = new Artikel("T-shirt classic rood", 1, "Small"); 
let ArtikelVariabel2 = new Artikel("T-shirt classic wit", 2, "Medium"); 
let ArtikelVariabel3 = new Artikel("T-shirt classic blauw", 3, ";Large"); 


//vooraad van een item in de winkel weergeven -> check
ArtikelVariabel.voorraad;

//Je maakt een method / functie waarmee je de kleur en de maat van een item kunt opvragen en in de console kunt tonen
ArtikelVariabel.showVoorraad();

//done