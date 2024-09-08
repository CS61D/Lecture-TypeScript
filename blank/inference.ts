// Types are computed based on intrinsic properties

// Narrowing + Type guards

// Type inference within a function
// ctrl / cmd + . to open possible options based on type

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
