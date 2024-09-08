import { type Roles, Role } from "./basic";

// Basic Function with typed inputs and return type
//! Don't define return types, let ts infer them
const permittedRole = (userRole: Role, requiredRole: Role): boolean => {
	if (requiredRole === "User") {
		return true;
	}

	if (requiredRole === "Manager") {
		return userRole === "Manager" || userRole === "Admin";
	}

	return userRole === "Admin";
};

const permittedRoles = (userRole: Roles, requiredRole: Roles) => {
	if (requiredRole === "User") {
		return true;
	}

	if (requiredRole === "Manager") {
		return userRole === "Manager" || userRole === "Admin";
	}

	return userRole === "Admin";
};

console.log(permittedRole(Role.Admin, Role.User));
console.log(permittedRoles("Admin", "User"));

// Return types are inferred from usage, not recommended to state explicitly

// Typing a higher order function
// Takes an array, and an function which takes a string and must return a string
const transformOdds = (array: string[], func: (input: string) => string ) => array.map((val, index) => index % 2 == 1 ? func(val) : val);

const toUpper = (word: string) => word.toUpperCase()

const getLength = (word: string) => word.length;

const names = ["Aidan", "Kyle", "Rayna", "Cady", "Elaine"]

console.log(transformOdds(names, toUpper))
console.log(transformOdds(names, getLength)) // gives us a type error, so we can retain expected output

// Void Type means function does not return a value
const greet = (name: string) => {
	console.log(`Hello ${name}`)
}