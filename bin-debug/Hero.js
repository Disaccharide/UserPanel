var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Cache = function (target, propertyName, desc) {
    var getter = desc.get;
    desc.get = function () {
        return getter.apply(this);
    };
    return desc;
};
var User = (function () {
    function User(ID) {
        this.cash = 0;
        this.gold = 0;
        this.level = 0;
        this.H = [];
        this.id = ID;
    }
    var d = __define,c=User,p=c.prototype;
    d(p, "herosInTeam"
        ,function () {
            return this.H.filter(function (hero) { return hero.isInTeam; });
        }
    );
    d(p, "maxLevel"
        ,function () {
            var _this = this;
            var result = 0;
            this.H.forEach(function (h) { return _this.level += h.level; });
            return this.level;
        }
    );
    __decorate([
        Cache
    ], p, "maxLevel", null);
    return User;
}());
egret.registerClass(User,'User');
//STR=力量，DEX=灵巧，VIT=耐力(影响hp)，INT=智力，MND=精神，PIE=信仰（影响mp）
var Hero = (function () {
    function Hero(Belong, N, S, D, V, I, M, P) {
        this.level = 1;
        this.hp = 1;
        this.mp = 1;
        this.STR = 1;
        this.DEX = 1;
        this.VIT = 1;
        this.INT = 1;
        this.MND = 1;
        this.PIE = 1;
        this.isInTeam = false;
        this.E = [];
        this.belong = Belong;
        this.name = N;
        this.STR = S;
        this.DEX = D;
        this.VIT = V;
        this.INT = I;
        this.MND = M;
        this.PIE = P;
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "maxHp"
        ,function () {
            var result = 0;
            this.E.forEach(function (e) { return result += e.VIT; });
            this.hp = result * 100;
            return this.hp;
        }
    );
    d(p, "maxMp"
        ,function () {
            var result = 0;
            this.E.forEach(function (e) { return result += e.PIE; });
            this.mp = result * 100;
            return this.mp;
        }
    );
    p.equip = function (equipment) {
        this.E.push(equipment);
        this.heroInformationUpdate();
    };
    p.heroInformationUpdate = function () {
        var _this = this;
        this.E.forEach(function (e) { return _this.STR += e.STR; });
        this.E.forEach(function (e) { return _this.DEX += e.DEX; });
        this.E.forEach(function (e) { return _this.VIT += e.VIT; });
        this.E.forEach(function (e) { return _this.INT += e.INT; });
        this.E.forEach(function (e) { return _this.MND += e.MND; });
        this.E.forEach(function (e) { return _this.PIE += e.PIE; });
    };
    __decorate([
        Cache
    ], p, "maxHp", null);
    __decorate([
        Cache
    ], p, "maxMp", null);
    return Hero;
}());
egret.registerClass(Hero,'Hero');
var Equipment = (function () {
    function Equipment(Belong, N, S, D, V, I, M, P) {
        this.STR = 100;
        this.DEX = 100;
        this.VIT = 100;
        this.INT = 100;
        this.MND = 100;
        this.PIE = 100;
        this.Eq = 0;
        this.J = [];
        this.belong = Belong;
        this.name = N;
        this.STR = S;
        this.DEX = D;
        this.VIT = V;
        this.INT = I;
        this.MND = M;
        this.PIE = P;
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "Equality"
        ,function () {
            this.Eq = (this.STR + this.DEX + this.VIT + this.INT + this.MND + this.PIE) / 100;
            return this.Eq;
        }
    );
    d(p, "maxVIT"
        ,function () {
            var _this = this;
            this.J.forEach(function (j) { return _this.VIT += j.VIT; });
            return this.VIT;
        }
    );
    d(p, "maxPIE"
        ,function () {
            var _this = this;
            this.J.forEach(function (j) { return _this.PIE += j.PIE; });
            return this.PIE;
        }
    );
    __decorate([
        Cache
    ], p, "maxVIT", null);
    __decorate([
        Cache
    ], p, "maxPIE", null);
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
var Jewelry = (function () {
    function Jewelry(Belong, N, S, D, V, I, M, P) {
        this.STR = 10;
        this.DEX = 10;
        this.VIT = 10;
        this.INT = 10;
        this.MND = 10;
        this.PIE = 10;
        this.Jq = 0;
        this.belong = Belong;
        this.name = N;
        this.STR = S;
        this.DEX = D;
        this.VIT = V;
        this.INT = I;
        this.MND = M;
        this.PIE = P;
    }
    var d = __define,c=Jewelry,p=c.prototype;
    d(p, "Jquality"
        ,function () {
            this.Jq = (this.STR + this.DEX + this.VIT + this.INT + this.MND + this.PIE) / 10;
            return this.Jq;
        }
    );
    return Jewelry;
}());
egret.registerClass(Jewelry,'Jewelry');
//# sourceMappingURL=Hero.js.map