import type { Person } from "./basic";

// Basic function
const getName = (person: Person) => {
	return person.name;
};

const john = {
	name: "john",
	age: 9,
	height: 170,
};

// Types are computed based on intrinsic properties, don't have to label John as a person
console.log(getName(john));

// Narrowing + Type guards
const dirtyData: (string | null)[] = ["data1", null, "data2", "data3"];
const cleanData = dirtyData.filter((val) => typeof val === "string"); // typeof only detects primitive types

// Type inference within a function
// ctrl / cmd + . to open possible options based on type
const birthdayWish = (person: Person | null) => {
	if (person === null) {
		return "Happy Birthday Stranger";
	}
	return `Happy ${person.age}th birthday ${person.name}`;
};

// Discriminated Unions, more detailed inference
type ErrorResponse =
	| {
			code: 403;
			message: string;
			requiredPermission: string;
	  }
	| {
			code: 429;
			message: string;
			retryAfter: string;
	  };

const handleError = (error: ErrorResponse) => {
	if (error.code === 403) {
		console.log(`You need permission ${error.requiredPermission}`);
	} else {
		console.log(`Too many requests, try again at ${error.retryAfter}`);
	}
	return error.message;
};
