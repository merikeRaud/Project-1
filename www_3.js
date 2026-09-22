const http = require('http');
const dateTimeET = require('./public_html/src/dateET.js');
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Merike Raud, veevbiprogrammeerimine</title>\n</head>\n<body>\n';
const pageBody = '\t<h1>Merike Raud, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna Ülikoolis</a> ning ei sislda tõsiseltvõetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, peatselt programmeerime.</p>\n\t<hr>';
const pageFoot = '\n</body>\n</html>';

http.createServer(function(req, res){
	const nadalapaev = dateTimeET.weekDayET();
	const kuupaev = dateTimeET.dateFormattedET(1); // 1 = rahvakalendri kuunimi
	const kellaaeg = new Date().toLocaleTimeString('et-EE');

	const pageDate = '\t<p>Nädalapaev: ' + nadalapaev + '</p>\n\t<p>Kuupäev: ' + kuupaev + '</p>\n\t<p>Kellaaeg: ' + kellaaeg + '</p>\n';

	res.writeHead(200, {"Content-type": "text/html; charset=utf-8"});
	res.write(pageHead);
	res.write(pageBody);
	res.write(pageDate);
	res.write(pageFoot);

	return res.end();
}).listen(5202);