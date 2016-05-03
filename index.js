
words = "Assassination Attack SWAT Screening Lockdown Airport Ebola HAZMAT Cocaine Methamphetamine Zetas AMTRAK Narcos Pakistan MS13 Qaeda Palestine Ricin H1N1 PLF Subway Border FARC Colombia IRA Bomb Lab Heroin Afghanistan Hezbollah Jihad Taliban Al-Shabaab Riot Cops Nuclear Radioactive Chemical Anthrax Resistant Terror Azteca Nigeria Separatists Tehrik-i-Taliban Islamist Police explosive Homeland Detection Exposure Militia security Facility Infection Violence Marijuana Cartel Virus Enriched dirty Liberation weapons Suicide nitrate".split(' ');

var wordLookup = {};
words.forEach(function(w, i) {
	wordLookup[w.toLowerCase()] = i;
})

chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=';

function wordCode(text) {
	var w = [];
	for (var i=0; i<text.length; i++) {
		w.push(words[chars.indexOf(text[i])]);
	}
	return w.join(' ');
}

function wordDecode(text) {
	var c = "";
	text.split(' ').forEach(function(text) {
		c += chars[wordLookup[text.toLowerCase()]]
	})
	return c;
}

function encrypt() {
	var plain = document.getElementById('encrypt-plaintext').value;
	var password = document.getElementById('password').value;
	var cipher = sjcl.encrypt(password, plain);
	document.getElementById('encrypt-ciphertext').value = wordCode(btoa(cipher));// JSON.parse(cipher).ct;
}
function decrypt() {
	var cipher = atob(wordDecode(document.getElementById('decrypt-ciphertext').value));
	var password = document.getElementById('password').value;
	var plain = sjcl.decrypt(password, cipher);
	document.getElementById('decrypt-plaintext').value = plain;
}

// https://www.scribd.com/doc/150435756/How-the-DHS-Monitors-You-on-the-Internet#page=21