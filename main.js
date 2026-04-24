// i'm a writer not a programmer
const natoAlphabet = ['ALPHA','BRAVO','CHARLIE','DELTA','ECHO','FOXTROT','GOLF','HOTEL','INDIA','JULIETT','KILO','LIMA','NOVEMBER','OSCAR','PAPA','QUEBEC','ROMEO','SIERRA','TANGO','UNIFORM','VICTOR','WHISKEY','WHISKY','YANKEE','ZULU']
const allNames = document.getElementsByClassName("name");
function hasPeriod(s) {
  return s.indexOf('.') >= 0;
}
for(const el of allNames) {
	var classToAdd;
	console.log(el.textContent);
	switch(el.textContent) {
		case "PROVOST":
			classToAdd = "nameProvost"
			break;
		case "SUPERVISOR":
			classToAdd = "nameSupervisor"
			break;
		case "ARCHIVE":
			classToAdd = "nameArchive"
			break;
		case "SPKFLD":
			classToAdd = "nameSpikefield"
			break;
		case "BULLETIN":
			classToAdd = "nameBulletin"
			break;
		default:
			var nameOnlyLetters = el.textContent.replace(/[^a-zA-Z]+/g, '');
			if(natoAlphabet.includes(nameOnlyLetters)) {
				classToAdd = "nameAutounit"
				break;
			}
			if(hasPeriod(el.textContent)){
				classToAdd = "nameHuman"
				break;
			}
			classToAdd = "nameRoomIntelligence"
	}
	
	el.classList.add(classToAdd)
}