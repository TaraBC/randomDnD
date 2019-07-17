/*All Races in Lists, separated by pack*/
basicRaces=['Dragonborn','Dwarf','Elf','Gnome','Half-Elf','Halfling','Half-Orc','Human','Tiefling'];
elementalEvilRaces=['Arakocra','Genasi','Goliath'];
volosMonsterRaces=['Aasimar','Bugbear','Firbolg','Goblin','Hobgoblin','Kenku','Kobold','Lizardfolk','Orc','Tabaxi','Triton','Yuan-ti Pureblood'];
swordCoastRaces=['Feral Tiefling'];
tortleRaces=['Tortle'];
mordenkainenRaces=['Gith'];
eberronRaces=['Changeling','Kalashtar','Shifter','Warforged'];
ravnicaRaces=['Centaur','Loxodon','Minotaur','Simic Hybrid','Vedalken'];
acquisitionsRaces=['Verdan'];
allRaces= basicRaces.concat(elementalEvilRaces,volosMonsterRaces,swordCoastRaces,tortleRaces,mordenkainenRaces,eberronRaces,ravnicaRaces,acquisitionsRaces);

/*All classes in Lists separated by pack*/
basicClasses=['Barbarian','Bard','Cleric','Druid','Fighter','Monk','Paladin','Ranger','Rogue','Sorcerer','Warlock','Wizard'];
unearthedArcanaClasses=['Artificer'];
critRoleClasses=['Blood Hunter'];
allClasses= basicClasses.concat(unearthedArcanaClasses,critRoleClasses);

/*All backgrounds in Lists separated by pack*/
acquisitionsBacks=['Celebrity Adventurers Scion','Failed Merchant','Gambler','Plaintiff','Rival Intern'];
basicBacks=['Acolyte','Charlatan','Criminal/Spy','Entertainer','Folk Hero','Gladiator','Guild Aritsan/Merchant','Hermit','Knight','Noble','Outlander','Pirate','Sage','Sailor','Soldier','Urchin'];
strahdBacks=['Haunted Ones'];
saltmarshBacks=['Fisher','Marine','Shipwright','Smuggler'];
ravnicaBacks=['Azorius Functionary','Boros Legionnaire','Dimir Operative','Golgari Agent','Gruul Anarch','Izzet Engineer','Orzhov Representative','Rakdos Cultist','Selesnya Initiate','Simic Scientist'];
swordCoastBacks=['City Watch/Investigator','Clan Crafter','Cloistered Scholar','Courtier','Faction Agent','Far Traveler','Inheritor','Knight Of The Order','Mercenary Veteran','Urban Bounty Hunter','Uthgardt Tribe Member','Waterdhavian Noble'];
tombBacks=['Anthropologist','Archaeologist'];
eberronBacks=['Cannith House Agent','Deneith House Agent','Ghallanda House Agent','Jorasco House Agent','Kundarak House Agent','Lyrandar House Agent','Medani House Agent','Orien House Agent','Phiarlan House Agent','Sivis House Agent','Tharashk House Agent','Thuranni House Agent','Vadalis House Agent'];
allBacks=acquisitionsBacks.concat(basicBacks,saltmarshBacks,strahdBacks,ravnicaBacks,swordCoastBacks,tombBacks,eberronBacks);

/*Simple Generation*/

function simpleGeneration(form){
	playerName=form.player.value;
	if (playerName=''){
		alert("Please enter a player name");
	}
	else{
		
	newCharacter= new character(playerName);
	newCharacter.lvl=1;
	newCharacter.randomRace(newCharacter); 
	newCharacter.abilityScores(newCharacter);
	}
}


/*D&D character class*/
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
	
	/*METHOD: CALCULATE AND ASSIGN ABILITY SCORES*/
	abilityScores(){
	diceList=[];
	/*for all 6 attributes*/
	for (i=0;i<6;i++){
		/*Create a temporary list of 4 numbers between 1 and 6*/
		tempList=[]
		for (j=0;j<4;i++){
			tempList.push(Math.floor(Math.random()*6));
		}
		/*Find and remove minimum*/
		min=Math.min(...tempList);
		found=false;
		k=0;
		sum=0;
		while (found=false){
			if (tempList[k]=min){
				tempList.splice(k,1);
				found=true
			}
			
		}
		/*Find sum of temporary numbers*/
		for (l=0;l<3;l++){
			sum+=tempList[l];
		}
		/*Push sum of temporary numbers to list of 6 attribute numbers*/
		diceList.push(sum);
	}
	
	/*Assign all ability attributes*/
	if (this.str = ''){	
		this.str=diceList[0];
	}
	this.strmod=modCalc(this.str);
	if (this.dex = ''){	
	this.dex=diceList[1];
	}
	this.dexmod=modCalc(this.dex);
	if (this.con = ''){	
	this.con=diceList[2];
	}
	this.conmod=modCalc(this.con);
	this.intelligence=diceList[3];
	this.intmod=modCalc(this.intelligence);
	this.wis=diceList[4];
	this.wismod=modCalc(this.wis);
	this.cha=diceList[5];
	this.chamod=modCalc(this.cha);
	}
	
	/*METHOD: CALCULATE MODIFIERS*/
	modCalc(score){
		return ((score)/2)-5;
	}
}