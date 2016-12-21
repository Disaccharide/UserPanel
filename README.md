<<<<<<< HEAD
###四层结构：  
用户->英雄->装备->宝石  

###用户：  
id=用户名  
cash=人民币  
gold=游戏币  
ATK=攻击力  
高级属性：总等级，总攻击力  

###英雄：  
belong=此英雄属于哪个用户  
name=名称  
level=等级  
hp=血量  
mp=魔力  
isInTeam=是否在队伍中  
STR=力量  
DEX=灵巧  
VIT=耐力(影响hp)  
INT=智力  
MND=精神  
PIE=信仰（影响mp）  
ATK=攻击力  
高级属性：总血量，总魔力，总攻击力  

###装备：
belong=此装备属于哪个英雄  
name=名称   
STR=力量  
DEX=灵巧  
VIT=耐力(影响hp)  
INT=智力  
MND=精神  
PIE=信仰（影响mp）  
高级属性：总耐力，总信仰  

###珠宝：
STR=力量  
DEX=灵巧  
VIT=耐力(影响hp)  
INT=智力  
MND=精神  
PIE=信仰（影响mp）  

###战斗力统计公式：  
（力量+灵巧+耐力+智力+精神+信仰）/6