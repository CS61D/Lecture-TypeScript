import { type Roles, Role } from "./basic";

// Function
//! Don't define return types, let ts infer them
const permittedRole = (userRole: Role, requiredRole: Role) => {
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
