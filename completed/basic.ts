//* Primitive Types
let name: string;
name = "hello";
name = 66; // This errors, leading to safer and more maintainable code

let age: number;
let isMale: boolean;

// Unions
let password: number | string;
password = 12345;
password = "password";

//* Arrays, Objects, Functions

type Person = {
	name: string;
	age: number;
	grade?: number; // Optional type
	// equivalent to number | undefined
};

export type Student = Person & {
	id: number;
	homeRoom: string;
};

type User = Person & {
	username: string;
	password: string;
};

const jill: User = {
	name: "jill",
	age: 33,
	username: "jill001",
	password: "password",
};

// Interfaces not recommended, but you do need to be able to recognize them
interface PersonInterface {
	name: string;
	age: number;
}

// Requires both properties to not throw an error
const alice: Person = {
	name: "alice",
	age: 8,
};

const names: string[] = [];
names.push(6); // This errors

const getName = (person: Person) => {
	return person.name;
};

const john = {
	name: "john",
	age: 9,
	height: 170,
};

// Types are computed based on intrinsic properties
console.log(getName(john));

// Enums, not recommended, but you need to be able to recognize them
export enum Role {
	Admin = "Admin",
	Manager = "Manager",
	User = "User",
}

// type unions, simpler and easier to use
export type Roles = "Admin" | "Manager" | "User";
