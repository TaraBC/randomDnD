function simpleGeneration(form){
	playerName=form.player.value;
	newCharacter= new character(playerName);
}

class character{
	constructor(playerName){
	/*Background info*/
	this.name='';
	this.Class='';
	this.background='';
	this.lvl='';
	this.playerName=playerName;
	this.race='';
	this.alignment='';
	this.personalityTrait='';
	this.ideal='';
	this.bonds='';
	this.flaws='';
	/*Ability Scores*/
	this.str='';
	this.strmod='';
	this.dex='';
	this.dexmod='';
	this.con='';
	this.conmod='';
	this.intelligence='';
	this.intmod='';
	this.wis='';
	this.wismod='';
	this.cha='';
	this.chamod='';
	this.profBonus='';
	/*Ability Modifiers*/
	this.savingStr='';
	this.savingDex='';
	this.savingCon='';
	this.savingInt='';
	this.savingWis='';
	this.savingCha='';
	this.acrobatics='';
	this.animalHandling='';
	this.deception='';
	this.History='';
	this.insight='';
	this.intimidation='';
	this.investigation='';
	this.medicine='';
	this.nature='';
	this.perception='';
	this.performance='';
	this.persuasion='';
	this.religion='';
	this.sleightOfHand='';
	this.stealth='';
	this.survival='';
	/*Fight info*/
	this.AC='';
	this.initiative='';
	this.speed='';
	this.maxHP='';
	this.hitDice='';
	/*proficiencies and languages*/
	this.proficiencies=[]
	this.languages=[]
	/*Features and traits*/
	this.features=[]
	}
} 

