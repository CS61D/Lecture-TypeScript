import type { Student } from "./basic";

// Generic function
const shiftRight = <T>(arr: T[], positions: number) => {
	return arr.map(
		(_val, index, array) => array[(index + positions) % arr.length],
	);
};

// Typing a set
const userNames = new Set<string>();
userNames.add("Aidan");

// Record
const myCipher = {
	a: "c",
	b: "d",
	c: "e",
	d: "f",
	e: "g",
};

const decode = (code: (keyof typeof myCipher)[]) => {
	return code.map((val) => myCipher[val]);
};

const decodeRecordDynamic = <T extends Record<string, string>>(
	cipher: T,
	code: Array<keyof T>,
) => {
	return code.map((val) => cipher[val]);
};

// Omit
const generateStudentId = (studentWithoutId: Omit<Student, "id">): Student => {
	const id = Math.floor(Math.random() * 100000);
	return { id, ...studentWithoutId };
};

//* Challenge 1: Construct a type StrictOmit which will throw a type error if you omit a property that does not exist on the record type
type StrictOmit<T, K extends keyof T> = Omit<T, K>;

// Test
type StudentWithoutId = StrictOmit<Student, "age" | "grade">;
type StudentOmitError = StrictOmit<Student, "random">; // Type Error

// Mapped Types
type OptionsFlags<Type> = {
	[Property in keyof Type]: boolean;
};
// Source: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content (TypesScript Handbook)

type Features = {
	darkMode: () => void;
	newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<Features>;
