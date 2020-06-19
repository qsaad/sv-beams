export default class Masonry {
	constructor({
		h = 12,
		w = 8,
		fm = 2500,
		fy = 60,
		sb = 32,
		rebar = "#5",
		location = "center"
	}) {
		this.h = h;
		this.w = w;
		this.t = w - 0.375;
		this.fm = fm;
		this.fy = fy;
		this.Es = 29000;
		this.sb = sb;
		this.rebar = rebar;
		this.location = location;
	} //CONSTRUCTOR

	b() {
		return Math.min(6 * this.t, this.sb, 72);
	}

	d() {
		if (this.location === "center") {
			return this.t / 2;
		} else {
			return this.t - 1.25 - 0.5 - this.db() / 2;
		}
	}

	db() {
		switch (this.rebar) {
			case "#3":
				return 0.375;
			case "#4":
				return 0.5;
			case "#5":
				return 0.625;
			case "#6":
				return 0.75;
			case "#7":
				return 0.875;
			case "#8":
				return 1.0;
			default:
				return 0.625;
		}
	} //REBAR DIAMETER

	Ab() {
		switch (this.rebar) {
			case "#3":
				return 0.11;
			case "#4":
				return 0.2;
			case "#5":
				return 0.31;
			case "#6":
				return 0.44;
			case "#7":
				return 0.6;
			case "#8":
				return 0.785;
			default:
				return 0.31;
		}
	} //REBAR DIAMETER

	rho() {
		return this.Ab() / (this.b() * this.db());
	}

	Em() {
		return 0.9 * this.fm;
	}
	n() {
		return this.Es / this.Em();
	}
	k() {
		let rn = this.rho() * this.n();
		return Math.pow(2 * rn + rn * rn, 0.5) - rn;
	}
	j() {
		return 1 - this.k() / 3;
	}

	Fb() {
		return 0.45 * this.fm;
	}

	Fs() {
		return 32000;
	}

	Mm() {
		return (
			(0.5 *
				this.Fb() *
				this.k() *
				this.j() *
				this.b() *
				Math.pow(this.d(), 2)) /
			12
		);
	}

	Ms() {
		return (this.Ab() * this.Fs() * this.j() * this.d()) / 12;
	}
} //CLASS
