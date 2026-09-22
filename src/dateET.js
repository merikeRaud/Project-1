exports.dateFormattedET = function(){
//exports.dateFormattedET = function(kalendrityyp){
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();

	let monthNamesET = ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'];
	let monthNamesRahvakalender = ['näärikuu', 'küünlakuu', 'paastukuu', 'jürikuu', 'lehekuu', 'niinekuu', 'heinakuu', 'lõikuskuu', 'mihklikuu', 'mardikuu', 'talvekuu', 'jõulukuu'];

	// Juhuslikult 0 või 1
    let kalendriTyyp = Math.floor(Math.random() * 2);

	let monthName = (kalendriTyyp === 1) ? monthNamesRahvakalender[monthNow] : monthNamesET[monthNow];

	return dateNow + '. ' + monthName + ' ' + yearNow;
}

exports.weekDayET = function(){
	let timeNow = new Date();
	let dayNow = timeNow.getDay();
	let weekDaysET = ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev'];
	return weekDaysET[dayNow];
}

