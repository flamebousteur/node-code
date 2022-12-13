class nodeFunction {
	name = "";
	funct = null;
	inputs = [];
	outputs = [];

	constructor(name, funct, {inputs = [], outputs = []} = {}) {
		if (typeof funct !== "function") {}
		this.name = name;
		this.funct = funct;
		this.inputs = inputs;
		this.outputs = outputs;
	}

	call(inp) {}
}