const nome = 'pippo';
let cognome = 'ciao';
let age : number = 18
let hasPowers: boolean = true;

let children: string[]=["ciao","ss"]
let Person:{
    nome : string,
    age : number
}= {
    nome:"pippo",age:30
};

function go(direction:string="left",distance:number=100){

}

go("right");

go();

go("left",50);

function drive(param:any){

}
drive({distance:100})



function add(x :number=10, y: number=50):number{
    return x + y;
}

add(10,50)+100;

const add2= function(x){
    
};

const add3=(x)=>{

};
const multiply=(x)=>{
    return x*2;
};