var quotes = [
	'Câteodată greșesc intenționat numele tipilor cu care ies, să nu uite cât de neimportanți sunt pentru mine.',
	'Întrebarea nu este de ce nu te mai caut, întrebarea este dacă tu ești o persoană care merită găsită.',
	'M-am hotărât să nu mai ascult sfaturile altora. Decizii proaste pot să iau și singură.',
	'Toată lumea are idei proaste. Diferența este că eu le și pun în practică...',
	'Știi cum e ea? E genul de tipă care se supăra dacă nu o suni, iar dacă o suni nu răspunde...',
	'Decât să îmi spui de 1000 de ori că mă iubești, mai bine îmi demonstrezi o singura dată.',
	'Ce nu înțeleg băieții: Nu trebuie să propui tu să merg la tine, ci să mă tratezi în așa fel încât să-ți cer eu să vin...',
	'Vine un moment în viață când îți dai seama că, dacă vrei cadouri de ziua ta, trebuie să ți le cumperi singur.',
	'Să fiu single a fost o alegere personală. Nu a mea, din păcate, dar oricum o alegere personală.',
	'Băieții spun că sunt greu de mulțumit, eu zic că au altele standardele prea joase.',

]

function newQuote() {
	var randomNumber = Math.floor(Math.random()*(quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
