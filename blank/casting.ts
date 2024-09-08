// Untyped response from external source
const getPikachuBaseXP = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
	const data = await response.json();
	return data.base_experience;
};
console.log((await getPikachuBaseXP()) + 2);

// Perils of any!

//! No error, major issue
