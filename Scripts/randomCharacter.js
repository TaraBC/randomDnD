'use strict';

/*All Races in Lists, separated by pack*/
const basicRaces = ['Dragonborn', 'Hill Dwarf','Mountain Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'];
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

/*basic arrays*/
const genders=['Male','Female'];
const truths=[true,false]

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

////////*SIMPLE GENERATION*////////

function simpleGeneration(form){
	const playerName = form.player.value;
	if (!playerName){
		alert("Please enter a player name"); //input validation
	}
	else{
		
	let newCharacter= raceAssign('Dragonborn',true,'Tara'); //character initialisation
	console.log(newCharacter.name,newCharacter.gender);
	}

}


//////RANDOM RACE ASSIGNMENT/////////
function randomRace(DLCpreferences,adultPreference,playerName) {
	let race;
	if (DLCpreferences === []) {
		race = allRaces[Math.floor(Math.random() * allRaces.length)];		//Pick races
	}

	return raceAssign(race,adultPreference,playerName);
}


/*Assign values based on race*/


function raceAssign(race,adultPreference,playerName){
	if (race==='Dragonborn'){
		return new Dragonborn(playerName,adultPreference,true);
	}
	else if  (race==='Hill Dwarf'){
		return new hillDwarf(playerName,adultPreference,true);
	}
	else if (race==='Mountain Dwarf'){
		return new mountainDwarf(playerName,adultPreference,true);
	}
	else if (race==='Elf'){

	}
	else if(race==='Gnome'){

	}
	else if (race==='Half-Elf'){

	}
	else if(race==='Halfling'){

	}
	else if (race==='Half-Orc'){

	}
	else if (race==='Human'){

	}
	else if (race==='Tiefling'){

	}
}


///////RANDOM CLASS ASSIGNMENT//////
function randomClass(DLCpreferences){
	if (this.Class===undefined){
		if (DLCpreferences === []){
			this.Class=allClasses[Math.floor(Math.random()*allClasses.length)];
		}
	}
}

/*D&D character class*/
class character{
	/*Background info*/
	name;
	Class;
	background;
	lvl;
	race;
	alignment;
	personalityTrait;
	ideal;
	bonds;
	flaws;
	size;
	age;
	gender;
	/*Ability Scores*/
	str;
	strmod;
	dex;
	dexmod;
	con;
	conmod;
	intelligence;
	intmod;
	wis;
	wismod;
	cha;
	chamod;
	profBonus;
	/*Ability Modifiers*/
	savingStr;
	savingDex;
	savingCon;
	savingInt;
	savingWis;
	savingCha;
	acrobatics;
	animalHandling;
	deception;
	History;
	insight;
	intimidation;
	investigation;
	medicine;
	nature;
	perception;
	performance;
	persuasion;
	religion;
	sleightOfHand;
	stealth;
	survival;
	/*Fight info*/
	AC;
	initiative;
	speed;
	maxHP;
	hitDice;
	house;
	/*proficiencies and languages*/
	proficiencies=[[],[],[],[]];
	languages=[];
	/*Features and traits*/
	features=[];
	spells=[[],[],[],[],[],[],[],[],[],[]];	//index 0 is cantrips, index 1 is 1st level spells, index 2 is 2nd level...etc.
	spellSlots=[0,0,0,0,0,0,0,0,0,0];	//above applies for spellSlots
	constructor(playerName,completeRandom,preferredName,preferredGender) {
		this.playerName = playerName;
		if (preferredName !== undefined){
			this.name=preferredName;
		}

		if (preferredGender!==undefined){
			this.gender=preferredGender;
		}
		else{
			this.gender=genders[Math.floor(Math.random()*genders.length)];
		}

		if (completeRandom === true) {
			this.lvl = 1;
			this.profBonus = 2;
		}
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
	if (this.str===undefined){
		this.str=diceList[0];
	}
	if (this.dex === undefined){
	this.dex=diceList[1];
	}
	if (this.con === undefined){
	this.con=diceList[2];
	}
	if (this.intelligence===undefined){
	this.intelligence=diceList[3];
	}
	if (this.wis===undefined){
	this.wis=diceList[4];
	}
	if (this.cha===undefined){
	this.cha=diceList[5];
	}
	}
	
	/*METHOD: CALCULATE MODIFIERS*/
	modCalc(score){
		return Math.floor(((score)/2)-5);
	}

	/*Assign random alignment*/


    randomAlignment() {
		if (this.alignment === undefined) {
			const alignment1 = alignmentType[Math.floor(Math.random() * alignmentType.length)];
			const alignment2 = alignmentType2[Math.floor(Math.random() * alignmentType2.length)];
			if (alignment1 === alignment2) {
				this.alignment = 'True Neutral';
			} else {
				alignment1.concat(' ', alignment2);
			}
		}
	}

	randomAge(adultPreference,maxAge,minAdultAge,minChildAge){
    	if (adultPreference===true){
    		this.age=Math.floor(Math.random()*(maxAge-minAdultAge)+minAdultAge);
		}
    	else{
    		this.age=Math.floor(Math.random()*(maxAge-minAdultAge)+minChildAge);
		}
	}


}

//////RACE SUBCLASS//////
class Race extends character{

	raceHP=0;
	raceFeatures=[];
	raceLanguages=[];
	raceProficiencies=[[],[],[],[]];			//workAround for proficiencies,languages and features
	raceSpells=[[],[],[],[],[],[],[],[],[],[]];
	childNames=[];
	maleNames=[];
	femaleNames=[];					//List of potential names
	clanNames=[];
	constructor(playerName,completeRandom){
		super(playerName,completeRandom);
		this.randomAlignment();
		this.abilityScores();
	}
	randomName(adultAge){				//random name picker, if child names are not applicable, input 0 as adultAge
		let fName;
		let lName;
		if (this.name===undefined){
			if (this.age>adultAge) {
				if (this.gender === 'Female') {
					fName = this.femaleNames[Math.floor(Math.random() * this.femaleNames.length)];
				} else if (this.gender === 'Male') {
					fName = this.maleNames[Math.floor(Math.random() * this.maleNames.length)];
				}
			}
			else{
				fName=this.childNames[Math.floor(Math.random() * this.childNames.length)];
			}
			lName=this.clanNames[Math.floor(Math.random()*this.clanNames.length)];
			this.name= fName.concat(' ',lName);
		}
	}
}

//////SUBCLASSES FOR RACE///////

class Dragonborn extends Race{
	fireType;
	constructor(playerName,adultPreference,completeRandom,firePreference) {
		super(playerName,completeRandom);
		this.maleNames.push('Arjhan', 'Balasar', 'Bharash', 'Donaar', 'Ghesh', 'Heskan', 'Kriv', 'Medrash', 'Mehen', 'Nadarr', 'Pandjed', 'Patrin', 'Rhogar', 'Shamash', 'Shedinn', 'Tarhun', 'Torinn');
		this.femaleNames.push('Akra', 'Biri', 'Daar', 'Farideh', 'Harann', 'Havilar', 'Jheri', 'Kava', 'Korinn', 'Mishann', 'Nala', 'Perra', 'Raiann', 'Sora', 'Surina', 'Thava', 'Uadjit');
		this.childNames.push('Climber', 'Earbender', 'Leaper', 'Pious', 'Shieldbiter', 'Zealous');
		this.clanNames.push(' Clethtinthiallor', 'Daardendrian', 'Delmirev', 'Drachedandion', 'Fenkenkabradon', 'Kepeshkmolik', 'Kerrhylon', 'Kimbatuul', 'Linxakasendalor', 'Myastan', 'Nemmonis', 'Norixius', 'Ophinshtalajiir', 'Prexijandilin', 'Shestendeliath', 'Turnuroth', 'Verthisathurgiesh', 'Yarjerit')
		this.str += 2;
		this.cha += 1;
		this.size = 'Medium';
		this.speed = 30;
		this.raceFeatures.push('Draconic Ancestry', 'Breath Weapon', 'Damage Resistance');
		this.raceLanguages.push('Common', 'Draconic');
		this.fireSelector(firePreference);
		this.randomAge(adultPreference,81,14,2);
		this.randomName(14);

	}

	fireSelector(firePreference){
		if (!firePreference) {
			this.fireType = dragonbornFires[Math.floor(Math.random() * dragonbornFires.length)];
		}
	}
}


class Dwarf extends Race{
	toolProficiencies=["Smith's Tools","Brewer's Supplies","Mason's Tools"];
	constructor(playerName,adultPreference,completeRandom,toolPreference,housePreference){ ///housePreference is an array - index 0 is whether house DLC is included, index 1 is whether user cares if character is in the house.
		super(playerName,completeRandom);
		this.maleNames.push('Adrik', 'Alberich', 'Baern', 'Barendd', 'Brottor', 'Bruenor', 'Dain', 'Darrak', 'Delg', 'Eberk', 'Einkil', 'Fargrim', 'Flint', 'Gardain', 'Harbek', 'Kildrak', 'Morgran', 'Orsik', 'Oskar', 'Rangrim', 'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Veit', 'Vondal');
		this.femaleNames.push('Amber', 'Artin', 'Audhild', 'Bardryn', 'Dagnal', 'Diesa', 'Eldeth', 'Falkrunn', 'Finellen', 'Gunnloda', 'Gurdis', 'Helja', 'Hlin', 'Kathra', 'Kristryd', 'Ilde', 'Liftrasa', 'Mardred', 'Riswynn', 'Sannl', 'Torbera', 'Torgga', 'Vistra');
		this.clanNames.push('Balderk', 'Battlehammer', 'Brawnanvil', 'Dankil', 'Fireforge', 'Frostbeard', 'Gorunn', 'Holderhek', 'Ironfist', 'Loderr', 'Lutgehr', 'Rumnaheim', 'Strakeln', 'Torunn', 'Ungart' );
		this.randomAge(adultPreference,351,17,9);
		this.randomName(0);
		this.con+=2;
		this.size='Medium';
		this.speed=25;
		this.raceFeatures.push('No reduction in speed by heavy armour','Darkvision','Dwarven Resilience');
		this.raceProficiencies[1].push('Battleaxe','Handaxe','Light Hammer','Warhammer');
		this.languages.push('Common','Dwarvish');
		this.toolSelector(toolPreference);
		this.houseSelector(housePreference);


	}

	houseCreator(){
		this.house='House Kundarak';
		this.dex+=1;
		this.intelligence+=1;
		this.raceFeatures.push('Master Of Locks');
		this.raceSpells[1].push('Alarm');
	}

	houseSelector(housePreference){
	if (housePreference[0]===true){					//Whether in House Kundarak or not
		if (housePreference[1]===true){
			this.houseCreator()
		}
		else{
			const YN= truths[Math.floor(Math.random()*truths.length)];
			if (YN===true) {
				this.houseCreator()
			}
		}
	}
	}

	toolSelector(toolPreference){
		if (toolPreference === undefined) {
			const tool =this.toolProficiencies[Math.floor(Math.random()*this.toolProficiencies.length)];
			this.raceProficiencies[0].push(tool);
		} else {
			this.raceProficiencies[0].push(toolPreference);
		}
	}
}

class hillDwarf extends Dwarf{
	constructor(playerName,adultPreference,completeRandom,toolPreference,housePreference){
		super(playerName,adultPreference,completeRandom,toolPreference,housePreference);
		this.wis+=1;
		this.raceHP+=1;
	}
}

class mountainDwarf extends Dwarf{
	constructor(playerName,adultPreference,completeRandom,toolPreference,housePreference){
		super(playerName,adultPreference,completeRandom,toolPreference,housePreference);
		this.str+=2;
		this.raceProficiencies[2].push('Light Armour','Medium Armour');
	}
}

//ELF

class elf extends Race{
	constructor(playerName,completeRandom,adultPreference) {
		super(playerName, completeRandom);
		this.childNames.push('Ara', 'Bryn', 'Del', 'Eryn', 'Faen', 'Innil', 'Lael', 'Mella', 'Naill', 'Naeris', 'Phann', 'Rael', 'Rinn', 'Sai', 'Syllin', 'Thia', 'Vall');
		this.femaleNames.push('Adrie', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Bethrynna', 'Birel', 'Caelynn', 'Drusilia', 'Enna', 'Felosial', 'Ielenia', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Meriele', 'Mialee', 'Naivara', 'Quelenna', 'Quillathe', 'Sariel', 'Shanairra', 'Shava', 'Silaqui', 'Theirastra', 'Thia', 'Vadania', 'Valanthe', 'Xanaphia');
		this.maleNames.push('Adran', 'Aelar', 'Aramil', 'Arannis', 'Aust', 'Beiro', 'Berrian', 'Carric', 'Enialis', 'Erdan', 'Erevan', 'Galinndan', 'Hadarai', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Laucian', 'Mindartis', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Thamior', 'Tharivol', 'Theren', 'Varis');
		this.clanNames.push('Amakiir (Gemflower)', 'Amastacia (Starflower)', 'Galanodel (Moonwhisper)', 'Holimion (Diamonddew)', 'Ilphelkiir (Gemblossom)', 'Liadon (Silverfrond)', 'Meliamne (Oakenheel)', 'Naïlo (Nightbreeze)', 'Siannodel (Moonbrook)', 'Xiloscient (Goldpetal)');
		this.dex+=2;
		this.randomAge(adultPreference,751,99,10);
		this.size='Medium';
		this.speed=30;
		this.raceFeatures.push('Darkvision','Fey Ancestry','Trance');
		this.raceLanguages.push('Common','Elven');
	}


}

class darkElf extends elf{
	constructor(playerName,completeRandom,adultPreference){
		super(playerName,completeRandom,adultPreference);
		this.cha+=1;
		this.raceSpells[0].push('Dancing Lights');
		this.raceProficiencies.push[3]('Perception');
		this.raceFeatures[0]='Superior Darkvision';
		this.raceFeatures.push('Sunlight Sensitivity');
	}
}

class eladrin extends elf {
	characterSeasons = ['Autumn', 'Winter', 'Spring', 'Summer'];
	abilityScoreOptions = ['Int', 'Cha'];
	autumnTraits = ['If someone is in need, you never withhold aid', 'You share what you have, with little regard to your own needs',
		'There are no simple meals, only lavish feasts', 'You stock up on fine food and drink. You hate going without such comforts'];
	autumnFlaws = ['You trust without thought', 'You give too much, leaving yourself without necessary supplies',
		'Everyone is your friend, or potential friend', 'You spend excessively on creature comforts'];
	winterTraits = ['Worst case is the most likely case', 'You preserve what you have, better to be hungry now and have food tomorrow',
		'You are always on guard', 'Frugal'];
	winterFlaws = ['Everything dies eventually, why bother building anything to last?', 'Nothing matters. You only allow others to guide actions',
		'Your needs come first', 'You only speak to point out flaws in plans'];
	springTraits = ['Every day is the best day of your life', 'You do everything with enthusiasm',
		'You love music and song', "You can't stay still"];
	springFlaws = ['You overdrink', 'You hate toiling. Life should be a life of pleasure',
		'You get infatuated easily and quickly, but that fades just as fast', 'You overdo everything'];
	summerTraits = ['You believe direct confrontation is the best way to solve problems',
		'Overwhelming force can solve anything', 'You stand tall and strong so others can lean on you',
		'You maintain an intimidating front to prevent fights'];
	summerFlaws = ['Stubborn', 'The best option is swift, unexpected and overwhelming', 'Punch first, talk later',
		'Your fury can carry you through everything'];
	season;
	ability;

	constructor(playerName, completeRandom, adultPreference, seasonPreference, presetTraits, presetFlaws, abilityPreference) {
		super(playerName, completeRandom, adultPreference);
		this.raceFeatures.push('Fey Step','Shifting Seasons');
		this.raceSpells.push('Friends', 'Chill Touch', 'Minor Illusion', 'Firebolt', 'See Shifting Seasons trait');
		this.abilitySelector(abilityPreference);
		this.seasonSelector(seasonPreference);
		this.traitSelector(presetTraits);
		this.flawSelector(presetFlaws);



	}

	seasonSelector(seasonPreference){
		if (seasonPreference === undefined) {
			this.season = this.characterSeasons[Math.floor(Math.random() * this.characterSeasons.length)];
		} else {
			this.season = seasonPreference;
		}

	}

	traitSelector(presetTraits) {
		if (presetTraits === false) {
			if (this.season === 'Autumn') {
				this.personalityTrait = this.autumnTraits[Math.floor(Math.random() * this.autumnTraits.length)];
			} else if (this.season === 'Spring') {
				this.personalityTrait = this.springTraits[Math.floor(Math.random() * this.springTraits.length)];
			} else if (this.season === 'Winter') {
				this.personalityTrait = this.winterTraits[Math.floor(Math.random() * this.winterTraits.length)];
			} else if (this.season==='Summer'){
				this.personalityTrait=this.summerTraits[Math.floor(Math.random() * this.summerTraits.length)];
			}
		}
	}

	flawSelector(presetFlaws){
		if (presetFlaws===false){
			if (this.season === 'Autumn') {
				this.flaws = this.autumnFlaws[Math.floor(Math.random() * this.autumnFlaws.length)];
			} else if (this.season === 'Spring') {
				this.flaws = this.springFlaws[Math.floor(Math.random() * this.springFlaws.length)];
			} else if (this.season === 'Winter') {
				this.flaws = this.winterFlaws[Math.floor(Math.random() * this.winterFlaws.length)];
			} else if (this.season==='Summer'){
				this.flaws=this.summerFlaws[Math.floor(Math.random() * this.summerFlaws.length)];
			}
		}
	}

	abilitySelector(abilityPreference) {
		if (abilityPreference === undefined) {		//if this doesnt have preference
			this.ability = this.abilityScoreOptions[Math.floor(Math.random() * this.abilityScoreOptions.length)];

		} else {
			this.ability = abilityPreference;
		}
		if (this.ability === 'Int') {					//ASSIGN Ability Scores
			this.intelligence += 1;
		} else {
			this.cha += 1;
		}
	}
}
