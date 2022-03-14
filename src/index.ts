let Var1:boolean = false;

function greet(person: string, date: Date) {
  if(Var1 == true){
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }else {
    console.log("Aucune informations")
  }
  //console.log(typeof Date)
}

greet("Brendan", new Date());
