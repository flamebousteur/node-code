class nodeError extends Error {
	constructor(message, causeCode = 0, patch = "") {
		super(message);
		this.causeCode = causeCode;
		this.patch = patch;
		console.error("Node Error: ", message, " (" + nodeError.getCauseCode(causeCode), ")", patch);
	}

	static getCauseCode(cc) {
		switch (cc) {
			case 0: return "no problem";
			case 1: return "node a valid";
			case 2: return "node not found"
			case 3: return "node input not valid";
			default: return "Unknown cause code";
		}
	}
}