class heroStatusBar extends egret.DisplayObjectContainer {
    background: egret.Bitmap;
    role: egret.Bitmap;
    barname: egret.TextField;
    equipmentField: egret.DisplayObjectContainer;
    propertyField: egret.DisplayObjectContainer;


    constructor() {
        super();
        this.background = new egret.Bitmap();
        this.scaleX = 1.2;
        this.scaleY = 1.2;
        this.addChild(this.background);
        this.role = new egret.Bitmap();
        this.role.x = 30;
        this.role.y = 30;
        this.role.scaleX = 0.7;
        this.role.scaleY = 0.7;
        this.addChild(this.role);
        this.barname = new egret.TextField();
        this.barname.textColor = 0X000000;
        this.barname.y = 240;
        this.barname.x = 50;
        this.addChild(this.barname);

        this.equipmentField = new egret.DisplayObjectContainer();
        this.initEquipmentField();
        this.equipmentField.x = 50;
        this.equipmentField.y = 20;
        this.addChild(this.equipmentField);

        this.propertyField = new egret.DisplayObjectContainer();
        this.propertyField.x = 120;
        this.propertyField.y = 120;
        this.addChild(this.propertyField);
    }

    private initPropertyField(hero: Hero) {
        var level = new egret.TextField();
        level.text = "Level:  " + hero.level.toString();
        level.textColor = 0X000000;
        level.scaleX = 0.7;
        level.scaleY = 0.7;
        this.propertyField.addChild(level);

        var HeroATK = new egret.TextField();
        HeroATK.text = "ATK:  " + hero.ATK;
        HeroATK.textColor = 0X000000;
        HeroATK.x = 110;
        HeroATK.scaleX = 0.7;
        HeroATK.scaleY = 0.7;
        this.propertyField.addChild(HeroATK);

        var HeroHP = new egret.TextField();
        HeroHP.text = "HP: "+ hero.hp;
        HeroHP.textColor = 0X000000;
        HeroHP.x = 110;
        HeroHP.y = 50;
        HeroHP.scaleX = 0.7;
        HeroHP.scaleY = 0.7;
        this.propertyField.addChild(HeroHP);

    }

    private grids: Grid[];
    private gridX = 90;
    private gridY = 60;
    private gridOffset = 10;
    private initEquipmentField() {
        this.grids = [];
        for (var i = 0; i < Hero.length; i++) {
            var grid = new Grid();
            this.grids.push(grid);
        }
        this.grids[0].x = this.gridX;
        this.grids[0].y = this.gridY;
        this.equipmentField.addChild(this.grids[0]);
        for (var i = 1; i < Hero.length; i++) {
            this.grids[i].x = this.grids[i - 1].x + this.grids[i].width + this.gridOffset;
            this.grids[i].y = this.gridY;
            this.equipmentField.addChild(this.grids[i]);
        }
    }


    setInformation(hero: Hero) {
        this.role.texture = hero._bitmap.texture;
        this.role.x = 90;
        this.role.y = 160;
        //this.barname.text = hero.name;

        for (var i = 0; i < hero.E.length; i++) {
            this.grids[i].call(hero.E[i]._bitmap);
        }
        this.initPropertyField(hero);
    }

}

class Grid extends egret.DisplayObjectContainer {
    border: egret.Bitmap;

    content: egret.Bitmap;

    constructor() {
        super();
        this.border = new egret.Bitmap();
        this.addChild(this.border);
        this.content = new egret.Bitmap();
        this.addChild(this.content);
        this.border.texture = RES.getRes("Border_png");
        //tool.anch(this.border);
    }
    call(bitmap: egret.Bitmap) {
        this.content.texture = bitmap.texture;
        //tool.anch(this.content);
        var scale = this.border.texture.textureWidth / this.content.texture.textureWidth;
        this.content.scaleX = scale;
        this.content.scaleY = scale;
        //console.log(scale);
    }

}