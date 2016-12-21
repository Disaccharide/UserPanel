var Cache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {
    const getter = desc.get;
    desc.get = function () {
        return getter.apply(this);
    }
    return desc;
}

class User {
    id: String;
    cash = 0;
    gold = 0;
    level = 0;
    ATK = 0;
    H: Hero[] = [];

    constructor(ID: String) {
        this.id = ID;
    }

    get herosInTeam() {
        return this.H.filter(hero => hero.isInTeam)
    }

    @Cache
    public get maxLevel(): number {
        var result = 0;
        this.H.forEach(h => this.level += h.level);
        return this.level;
    }

    @Cache
    public get maxATK(): number {
        this.H.forEach(h => this.ATK += h.ATK);
        return this.level;
    }

}

//STR=力量，DEX=灵巧，VIT=耐力(影响hp)，INT=智力，MND=精神，PIE=信仰（影响mp）
class Hero {
    belong: User;
    name: String;
    level: number = 1;
    hp: number = 1;
    mp: number = 1;
    STR: number = 1;
    DEX: number = 1;
    VIT: number = 1;
    INT: number = 1;
    MND: number = 1;
    PIE: number = 1;
    ATK: number = 1;
    isInTeam: boolean = false;
    _bitmap:egret.Bitmap;
    E: Equipment[] = [];

    constructor(Belong: User, N: String, S: number, D: number, V: number, I: number, M: number, P: number, B:egret.Bitmap) {
        this.belong = Belong;
        this.name = N;
        this.STR = S;
        this.DEX = D;
        this.VIT = V;
        this.INT = I;
        this.MND = M;
        this.PIE = P;
        this._bitmap = B;
    }

    @Cache
    public get maxHp(): number {
        var result = 0;
        this.E.forEach(e => result += e.VIT);
        this.hp = result * 100;
        return this.hp;
    }

    @Cache
    public get maxMp(): number {
        var result = 0;
        this.E.forEach(e => result += e.PIE);
        this.mp = result * 100;
        return this.mp;
    }
    @Cache
    public get maxATK(): number {
        this.ATK = (this.STR + this.DEX + this.VIT + this.INT + this.MND + this.PIE) / 6;
        return this.ATK;
    }

    equip(equipment: Equipment) {

        this.E.push(equipment);
        this.heroInformationUpdate();
    }

    heroInformationUpdate() {
        this.E.forEach(e => this.STR += e.STR);
        this.E.forEach(e => this.DEX += e.DEX);
        this.E.forEach(e => this.VIT += e.VIT);
        this.E.forEach(e => this.INT += e.INT);
        this.E.forEach(e => this.MND += e.MND);
        this.E.forEach(e => this.PIE += e.PIE);
    }
}

class Equipment {
    belong: Hero;
    name: String;
    STR: number = 100;
    DEX: number = 100;
    VIT: number = 100;
    INT: number = 100;
    MND: number = 100;
    PIE: number = 100;
    Eq: number = 0;
    _bitmap:egret.Bitmap;
    J: Jewelry[] = [];

    constructor(Belong: Hero, N: String, S: number, D: number, V: number, I: number, M: number, P: number, B:egret.Bitmap) {
        this.belong = Belong;
        this.name = N;
        this.STR = S;
        this.DEX = D;
        this.VIT = V;
        this.INT = I;
        this.MND = M;
        this.PIE = P;
        this._bitmap = B;
    }

    public get Equality(): number {
        this.Eq = (this.STR + this.DEX + this.VIT + this.INT + this.MND + this.PIE) / 100;
        return this.Eq;
    }

    @Cache
    public get maxVIT(): number {
        this.J.forEach(j => this.VIT += j.VIT);
        return this.VIT;
    }

    @Cache
    public get maxPIE(): number {
        this.J.forEach(j => this.PIE += j.PIE);
        return this.PIE;
    }
}

class Jewelry {
    belong: Equipment;
    name: String;
    STR: number = 10;
    DEX: number = 10;
    VIT: number = 10;
    INT: number = 10;
    MND: number = 10;
    PIE: number = 10;
    Jq: number = 0;

    constructor(Belong: Equipment, N: String, S: number, D: number, V: number, I: number, M: number, P: number) {
        this.belong = Belong;
        this.name = N;
        this.STR = S;
        this.DEX = D;
        this.VIT = V;
        this.INT = I;
        this.MND = M;
        this.PIE = P;
    }

    public get Jquality(): number {
        this.Jq = (this.STR + this.DEX + this.VIT + this.INT + this.MND + this.PIE) / 10;
        return this.Jq;
    }

}

