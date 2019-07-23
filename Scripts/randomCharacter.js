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

/*alignments*/
const alignmentType=['Lawful','Neutral','Chaotic'];
const alignmentType2=['Good','Neutral','Evil'];

/*subclass arrays*/
const dragonbornFires=['Black','Blue','Brass','Bronze','Copper','Gold','Green','Red','Silver','White'];

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
		
	let newCharacter= new character(playerName,[],true,true); //character initialisation
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
	size='';
	age='';
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
	proficiencies=[[],[]];
	languages=[];
	/*Features and traits*/
	features=[];
	constructor(playerName,DLCPreferences,completeRandom,adultPreference){
		this.playerName=playerName;
        this.abilityScores();

        if (completeRandom===true){
			this.lvl=1;
			this.profBonus=2;
		}

		if (this.race==='') {
			this.randomRace(DLCPreferences,adultPreference);
		}

		if (this.class==='') {
			this.randomClass(DLCPreferences);
		}

        if (this.alignment===''){
            const alignment1 = alignmentType[Math.floor(Math.random()*alignmentType.length)];
            const alignment2 = alignmentType2[Math.floor(Math.random()*alignmentType2.length)];
            if (alignment1===alignment2){
                this.alignment='True Neutral';
            }
            else{
                alignment1.concat(' ',alignment2);
            }
        }

		this.strmod=this.modCalc(this.str);
		this.dexmod=this.modCalc(this.dex);
		this.conmod=this.modCalc(this.con);
		this.intmod=this.modCalc(this.intelligence);
		this.wismod=this.modCalc(this.wis);
		this.chamod=this.modCalc(this.cha);
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
	if (this.dex === ''){
	this.dex=diceList[1];
	}
	if (this.con === ''){
	this.con=diceList[2];
	}
	if (this.intelligence===''){
	this.intelligence=diceList[3];
	}
	if (this.wis===''){
	this.wis=diceList[4];
	}
	if (this.cha===''){
	this.cha=diceList[5];
	}
	}
	
	/*METHOD: CALCULATE MODIFIERS*/
	modCalc(score){
		return Math.floor(((score)/2)-5);
	}
	
	/*Chooses random race*/
	/*preferences is an array of chosen packs*/
	randomRace(DLCpreferences,adultPreference){
		if (this.race==='') {
			if (DLCpreferences === []) {
				this.race = allRaces[Math.floor(Math.random() * allRaces.length)];		//Pick races
			}
		}
		/*Assign values based on race*/
		if (this.race==='Dragonborn'){
			this.createDragonborn(adultPreference);
		}
		else if  (this.race==='Dwarf'){
		    this.createDwarf(adultPreference);
        }
		else if (this.race==='Elf'){

        }
		else if(this.race==='Gnome'){

        }
		else if (this.race==='Half-Elf'){

        }
		else if(this.race==='Halfling'){

        }
		else if (this.race==='Half-Orc'){

        }
		else if (this.race==='Human'){

        }
		else if (this.race==='Tiefling'){

        }
	}

	randomClass(preferences){
		if (this.Class===''){
			if (preferences === []){
				this.Class=allClasses[Math.floor(Math.random()*allClasses.length)];
			}
		}
	}

	//*Different race functions*//

	createDragonborn(adultPreference,firePreference){
		this.str+=2;
		this.cha+=1;
		this.size='Medium';
		this.speed=30;
		this.features.push('Draconic Ancestry','Breath Weapon','Damage Resistance');
		this.languages.push('Common','Draconic');
		if (!firePreference){
			this.fireType=dragonbornFires[Math.floor(Math.random()*dragonbornFires.length)];
		}
		if (this.age===''){
			if (adultPreference===true){
				this.age=Math.floor(Math.random()*(81-14)+15); //random number between 15 and 81
			}
			else{
				this.age=Math.floor(Math.random()*(81-2)+3);
			}
		}
	}

	createDwarf(adultPreference,toolPreference){
        this.con+=2;
        this.size='Medium';
        this.speed=25;
        this.features.push('Darkvision','Dwarven Resilience','Stonecunning');
        this.proficiencies[1].push('Battleaxe','Handaxe','Light Hammer','Warhammer');
        this.languages.push('Common','Dwarvish');
        if (!toolPreference){
            const tools=["Smith's tools","Brewer's Supplies","Mason's Tools"];
            this.proficiencies[0].push(tools[Math.floor(Math.random()*tools.length)]);
        }
        else{
            this.proficiencies[0].push(toolPreference);
        }
        if (adultPreference===true){
            this.age=Math.floor(Math.random()*((350-18)+18));
        }
        else{
            this.age=Math.floor(Math.random()*((350-10)+10))
        }
    }


}