import { List } from 'ts-generic-collections-linq';

export enum Sex {
    M, 
    F
}

export default class Owner {
        private id$!: number;

        private age$!: number;

        private name$!:string;

        private sex$!: Sex;

        

        public get id(){
            return this.id$;
        }

        public set id(id$: number){
            this.id$ = id$;
        }

        public get name(){
            return this.name$;
        }

        public set name(name$: string){
            this.name$ = name$;
        }

        public get age(){
            return this.age$;
        }

        public set age(age$: number){
            this.age$ = age$;
        }

        public get sex(){
            return this.sex$;
        }

        public set sex(sex$: Sex){
            this.sex$ = sex$;
        }
}

const owners = new List<Owner>();

let owner = new Owner();
owner.id = 1;
owner.name = 'Jhon Doe';
owner.age = 23;
owner.sex = Sex.M;
owners.add(owner);

owner = new Owner();
owner.id = 2;
owner.name = 'Jane Doe';
owner.age = 17;
owner.sex = Sex.F;
owners.add(owner);

owner = new Owner();
owner.id = 3;
owner.name = 'Matt Damon';
owner.age = 16;
owner.sex = Sex.M;
owners.add(owner);

// * linq to entities
const maleAdults = owners.where((maleAdult)=> maleAdult.age > 18 && maleAdult.sex === Sex.M);

maleAdults.toArray().forEach((maleAdult)=>{
    console.log(maleAdult.name);
});
