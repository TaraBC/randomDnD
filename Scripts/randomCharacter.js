'use strict';

/*All Races in Lists, separated by pack*/
const basicRaces = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'];
const elementalEvilRaces = ['Arakocra', 'Genasi', 'Goliath'];
const volosMonsterRaces = ['Aasimar', 'Bugbear', 'Firbolg', 'Goblin', 'Hobgoblin', 'Kenku', 'Kobold', 'Lizardfolk', 'Orc', 'Tabaxi', 'Triton', 'Yuan-ti Pureblood'];
const swordCoastRaces = ['Feral Tiefling'];
const tortleRaces = ['Tortle'];
const mordenkainenRaces = ['Gith'];
const eberronRaces = ['Changeling', 'Kalashtar', 'Shifter', 'Warforged'];
const ravnicaRaces=['Centaur','Loxodon','Minotaur','Simic Hybrid','Vedalken'];
const acquisitionsRaces=['Verdan'];
const allRaces= basicRaces.concat(elementalEvilRaces,volosMonsterRaces,swordCoastRaces,tortleRaces,mordenkainenRaces,eberronRaces,ravnicaRaces,acquisitionsRaces);

/*All classes in Lists separated by pack*/
const basicClasses=['Barbarian','Bard','Cleric','Druid','Fighter','Monk','Paladin','Ranger','Rogue','Sorcerer','Warlock','Wizard'];
const unearthedArcanaClasses=['Artificer'];
const critRoleClasses=['Blood Hunter'];
const allClasses= basicClasses.concat(unearthedArcanaClasses,critRoleClasses);

/*All backgrounds in Lists separated by pack*/
const acquisitionsBacks=['Celebrity Adventurers Scion','Failed Merchant','Gambler','Plaintiff','Rival Intern'];
const basicBacks=['Acolyte','Charlatan','Criminal/Spy','Entertainer','Folk Hero','Gladiator','Guild Aritsan/Merchant','Hermit','Knight','Noble','Outlander','Pirate','Sage','Sailor','Soldier','Urchin'];
const strahdBacks=['Haunted Ones'];
const saltmarshBacks=['Fisher','Marine','Shipwright','Smuggler'];
const ravnicaBacks=['Azorius Functionary','Boros Legionnaire','Dimir Operative','Golgari Agent','Gruul Anarch','Izzet Engineer','Orzhov Representative','Rakdos Cultist','Selesnya Initiate','Simic Scientist'];
const swordCoastBacks=['City Watch/Investigator','Clan Crafter','Cloistered Scholar','Courtier','Faction Agent','Far Traveler','Inheritor','Knight Of The Order','Mercenary Veteran','Urban Bounty Hunter','Uthgardt Tribe Member','Waterdhavian Noble'];
const tombBacks=['Anthropologist','Archaeologist'];
const eberronBacks=['Cannith House Agent','Deneith House Agent','Ghallanda House Agent','Jorasco House Agent','Kundarak House Agent','Lyrandar House Agent','Medani House Agent','Orien House Agent','Phiarlan House Agent','Sivis House Agent','Tharashk House Agent','Thuranni House Agent','Vadalis House Agent'];
const allBacks=acquisitionsBacks.concat(basicBacks,saltmarshBacks,strahdBacks,ravnicaBacks,swordCoastBacks,tombBacks,eberronBacks);


/*Dice arrays*/
const D6 = Array(1,2,3,4,5,6);

/*addition for reduce*/
function addition(total,num){
	return total+num;
}

/*Simple Generation*/

function simpleGeneration(form){
	const playerName = form.player.value;
	if (!playerName){
		alert("Please enter a player name"); //input validation
	}
	else{
		
	let newCharacter= new character(playerName); //character initialisation
	newCharacter.lvl=1;
	newCharacter.randomRace([]); 
	newCharacter.abilityScores();
	newCharacter.profBonus=2;
	}
}


/*D&D character class*/
class character{
	/*Background info*/
	name = '';
	Class='';
	background='';
	lvl='';
	race='';
	alignment='';
	personalityTrait='';
	ideal='';
	bonds='';
	flaws='';
	/*Ability Scores*/
	str='';
	strmod='';
	dex='';
	dexmod='';
	con='';
	conmod='';
	intelligence='';
	intmod='';
	wis='';
	wismod='';
	cha='';
	chamod='';
	profBonus='';
	/*Ability Modifiers*/
	savingStr='';
	savingDex='';
	savingCon='';
	savingInt='';
	savingWis='';
	savingCha='';
	acrobatics='';
	animalHandling='';
	deception='';
	History='';
	insight='';
	intimidation='';
	investigation='';
	medicine='';
	nature='';
	perception='';
	performance='';
	persuasion='';
	religion='';
	sleightOfHand='';
	stealth='';
	survival='';
	/*Fight info*/
	AC='';
	initiative='';
	speed='';
	maxHP='';
	hitDice='';
	/*proficiencies and languages*/
	proficiencies=[];
	languages=[];
	/*Features and traits*/
	features=[];
	constructor(playerName){
		this.playerName=playerName;
	
	}
	
	/*METHOD: CALCULATE AND ASSIGN ABILITY SCORES*/
	abilityScores(){
		let diceList = [null, null, null, null, null, null];	//initialise attribute array
	for (let i=0; i<6; i++){	//for all attributes
		let tempList = [null, null, null, null];
		for (let j=0; j<4; j++) {
			tempList[j] = D6[Math.floor(Math.random() * 6)];
		}
		let min = Math.min(...tempList);
		for (let k=0; k<4; k++){			//remove lowest number
			if (tempList[k]===min){
				tempList.splice(k,1);
				break;
			}
		}
		diceList[i]=tempList.reduce(addition);		//add sum of the 3 numbers remaining to the diceList
	}
	
	
	/*Assign all ability attributes*/
	if (this.str===''){
		this.str=diceList[0];
	}
	this.strmod=character.modCalc(this.str);
	if (this.dex === ''){
	this.dex=diceList[1];
	}
	this.dexmod=character.modCalc(this.dex);
	if (this.con === ''){
	this.con=diceList[2];
	}
	this.conmod=character.modCalc(this.con);
	if (this.intelligence===''){
	this.intelligence=diceList[3];
	}
	this.intmod=character.modCalc(this.intelligence);
	if (this.wis===''){
	this.wis=diceList[4];
	}
	this.wismod=character.modCalc(this.wis);
	if (this.cha===''){
	this.cha=diceList[5];
	}
	this.chamod=character.modCalc(this.cha);
	}
	
	/*METHOD: CALCULATE MODIFIERS*/
	static modCalc(score){
		return Math.floor(((score)/2)-5);
	}
	
	/*Chooses random race*/
	/*preferences is an array of chosen packs*/
	randomRace(preferences){
		if (this.race===''){
			if (preferences === []){
				this.race= allRaces[Math.floor(Math.random()*allRaces.length)];		//Pick races
			}
		}
		/*Assign values based on race*/
		if (this.race==='Dragonborn'){
		}
	}
	
	randomClass(preferences){
		if (this.Class===''){
			if (preferences === []){
				this.Class=allClasses[Math.floor(Math.random()*allClasses.length)];
			}
		}
	}
}