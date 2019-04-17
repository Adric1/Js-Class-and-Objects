let Person = require("./person");
let person1 = new Person("Natheros",1000);
let person2 = new Person("Falcon",2500);
let person3 = new Person("Wilder",500);
let people = [person1,person2,person3];

for(i = 0;i < 2; i++)
{
    for(j = 0; j < people.length; j++)
    {
        people[j].intro();
    }
}



