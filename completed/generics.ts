import type { Student } from "./basic";

// Narrowing + Type guards
const dirtyData: (string | null)[] = ["data1", null, "data2", "data3"];
const cleanData = dirtyData.filter((val) => typeof val === "string");

// Generic
const shiftRight = <T>(arr: T[], positions: number) => {
	return arr.map(
		(_val, index, array) => array[(index + positions) % arr.length],
	);
};

// Typing a set
const userNames = new Set<string>();
userNames.add("Aidan");

// Discriminated Unions
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

// Record
const myCipher = {
	a: "c",
	b: "d",
	c: "e",
	d: "f",
	e: "g",
};

const decode = (code: (keyof typeof myCipher)[]) => {
	return code.reduce((prev, cur) => prev + myCipher[cur], "");
};

const decodeRecord = <T extends Record<string, string>>(
	cipher: T,
	code: Array<keyof T & string>,
): string => {
	return code.reduce((prev, cur) => prev + cipher[cur], "");
};

const decodeRecordArray = <T extends Record<string, string>>(
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
