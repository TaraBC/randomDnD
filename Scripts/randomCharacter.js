'use strict';

/*All Races in Lists, separated by pack*/
var basicRaces=['Dragonborn','Dwarf','Elf','Gnome','Half-Elf','Halfling','Half-Orc','Human','Tiefling'];
var elementalEvilRaces=['Arakocra','Genasi','Goliath'];
var volosMonsterRaces=['Aasimar','Bugbear','Firbolg','Goblin','Hobgoblin','Kenku','Kobold','Lizardfolk','Orc','Tabaxi','Triton','Yuan-ti Pureblood'];
var swordCoastRaces=['Feral Tiefling'];
var tortleRaces=['Tortle'];
var mordenkainenRaces=['Gith'];
var eberronRaces=['Changeling','Kalashtar','Shifter','Warforged'];
var ravnicaRaces=['Centaur','Loxodon','Minotaur','Simic Hybrid','Vedalken'];
var acquisitionsRaces=['Verdan'];
var allRaces= basicRaces.concat(elementalEvilRaces,volosMonsterRaces,swordCoastRaces,tortleRaces,mordenkainenRaces,eberronRaces,ravnicaRaces,acquisitionsRaces);

/*All classes in Lists separated by pack*/
var basicClasses=['Barbarian','Bard','Cleric','Druid','Fighter','Monk','Paladin','Ranger','Rogue','Sorcerer','Warlock','Wizard'];
var unearthedArcanaClasses=['Artificer'];
var critRoleClasses=['Blood Hunter'];
var allClasses= basicClasses.concat(unearthedArcanaClasses,critRoleClasses);

/*All backgrounds in Lists separated by pack*/
var acquisitionsBacks=['Celebrity Adventurers Scion','Failed Merchant','Gambler','Plaintiff','Rival Intern'];
var basicBacks=['Acolyte','Charlatan','Criminal/Spy','Entertainer','Folk Hero','Gladiator','Guild Aritsan/Merchant','Hermit','Knight','Noble','Outlander','Pirate','Sage','Sailor','Soldier','Urchin'];
var strahdBacks=['Haunted Ones'];
var saltmarshBacks=['Fisher','Marine','Shipwright','Smuggler'];
var ravnicaBacks=['Azorius Functionary','Boros Legionnaire','Dimir Operative','Golgari Agent','Gruul Anarch','Izzet Engineer','Orzhov Representative','Rakdos Cultist','Selesnya Initiate','Simic Scientist'];
var swordCoastBacks=['City Watch/Investigator','Clan Crafter','Cloistered Scholar','Courtier','Faction Agent','Far Traveler','Inheritor','Knight Of The Order','Mercenary Veteran','Urban Bounty Hunter','Uthgardt Tribe Member','Waterdhavian Noble'];
var tombBacks=['Anthropologist','Archaeologist'];
var eberronBacks=['Cannith House Agent','Deneith House Agent','Ghallanda House Agent','Jorasco House Agent','Kundarak House Agent','Lyrandar House Agent','Medani House Agent','Orien House Agent','Phiarlan House Agent','Sivis House Agent','Tharashk House Agent','Thuranni House Agent','Vadalis House Agent'];
var allBacks=acquisitionsBacks.concat(basicBacks,saltmarshBacks,strahdBacks,ravnicaBacks,swordCoastBacks,tombBacks,eberronBacks);


/*Dice arrays*/
var D6 = Array(1,2,3,4,5,6);

/*addition for reduce*/
function addition(total,num){
	return total+num;
}

/*Simple Generation*/

function simpleGeneration(form){
	var playerName=form.player.value;
	if (!playerName){
		alert("Please enter a player name");
	}
	else{
		
	let newCharacter= new character(playerName);
	newCharacter.lvl=1;
	newCharacter.randomRace([]); 
	newCharacter.abilityScores();
	}
}


/*D&D character class*/
class character{
	constructor(playerName){
	/*Background info*/
	this.name;
	this.Class;
	this.background;
	this.lvl;
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
	
	/*METHOD: CALCULATE AND ASSIGN ABILITY SCORES*/
	abilityScores(){
	var diceList=[null,null,null,null,null,null];
	for (var i=0;i<6;i++){
		var tempList=new Array(null,null,null,null);
		for (var j=0;j<4;j++){
			tempList[j]=D6[Math.floor(Math.random()*6)];
		}
		var min=Math.min(...tempList);
		var found=false;
		var k=0;
		while (found==false){
			k+=1
			console.log(k);
			if (tempList[k]=min){
				found=true;
			}
			
		}
		diceList[i]=tempList.reduce(addition);
	}
	
	
	/*Assign all ability attributes*/
	if (this.str==''){
		this.str=diceList[0];
	}
	this.strmod=this.modCalc(this.str);
	if (this.dex == ''){	
	this.dex=diceList[1];
	}
	this.dexmod=this.modCalc(this.dex);
	if (this.con == ''){	
	this.con=diceList[2];
	}
	this.conmod=this.modCalc(this.con);
	if (this.intelligence==''){
	this.intelligence=diceList[3];
	}
	this.intmod=this.modCalc(this.intelligence);
	if (this.wis==''){
	this.wis=diceList[4];
	}
	this.wismod=this.modCalc(this.wis);
	if (this.cha==''){
	this.cha=diceList[5];
	}
	this.chamod=this.modCalc(this.cha);
	}
	
	/*METHOD: CALCULATE MODIFIERS*/
	modCalc(score){
		return ((score)/2)-5;
	}
	
	/*Chooses random race*/
	/*preferences is an array of chosen packs*/
	randomRace(preferences){
		if (this.race==''){
			if (preferences=[]){
				this.race= allRaces[Math.floor(Math.random()*allRaces.length)];
			}
		}
	}
}