function Atom(
	symbol, charge
) {
	this.symbol = symbol;
	this.charge = charge;
}

function PieceType(
	name, charge, 
	arrangement
) {
	this.name = name;
	this.charge = charge;
	this.arrangement = arrangement;
}


const SODIUM = new PieceType(
	"Sodium", 1,
	[
		[new Atom("Na",1)]
	]
);

const CALCIUM = new PieceType(
	"Calcium", 2,
	[
		[new Atom("Ca",2)]
	]
);

const IRON3 = new PieceType(
	"Iron (III)", 3,
	[
		[new Atom("Fe",3)]
	]
);

const AMMONIUM = new PieceType(
	"Ammonium", 1,
	[
		[null,				new Atom("H",0),	null],
		[new Atom("H",1),	new Atom("N",1),	new Atom("H",0),],
		[null,				new Atom("H",1),	null],
	]
);

const CHLORIDE = new PieceType(
	"Chloride", -1,
	[
		[new Atom("Cl",-1)]
	]
);

const PHOSPHATE = new PieceType(
	"Phosphate", -3,
	[
		[null,				new Atom("O",0),	null],
		[new Atom("O",-1),	new Atom("P",0),	new Atom("O",-1),],
		[null,				new Atom("O",-1),	null],
	]
);

const NITRATE = new PieceType(
	"Nitrate", -1,
	[
		[null,				new Atom("O",0),	null],
		[new Atom("O",-1),	new Atom("N",1),	new Atom("O",-1),]
	]
);

const PIECE_TYPES = [
	SODIUM, CALCIUM, IRON3, AMMONIUM,
	CHLORIDE, PHOSPHATE, NITRATE
]