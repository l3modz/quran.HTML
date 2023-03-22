let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');


let timer;
let autoplay = 0;

let index_no = 0;
let Playing_surah = false;

//create a audio Element
let track = document.createElement('audio');


//All surah list
let All_surah = [{
		name: "001. Surah Al-Fatihah",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "002. Surah Al-Baqarah",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/002.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "003. Surah Ali 'Imran",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/003.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "004. Surah An-Nisa",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/004.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "005. Surah Al-Ma'idah",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/005.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "006. Surah Al-An'am",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/006.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "007. Surah Al-A'raf",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/007.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "008. Surah Al-Anfal",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/008.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "009. Surah At-Tawbah",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/009.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "010. Surah Yunus",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/010.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "011. Surah Hud",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/011.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "012. Surah Yusuf",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/012.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "013. Surah Ar-Ra'd",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/013.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "014. Surah At-Takwir",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/014.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "015. Surah Ibrahim",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/015.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "016. Surah An-Nahl",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/016.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "017. Surah Al-Isra",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/017.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "018. Surah Al-Kahf",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/018.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "019. Surah Maryam",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/019.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "020. Surah Ta-Ha",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/020.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "021. Surah Al-Anbiya",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/021.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "022. Surah Al-Hajj",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/022.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "023. Surah Al-Mu'minun",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/023.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "024. Surah An-Nur",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/024.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "025. Surah Al-Furqan",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/025.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "026. Surah Ash-Shu'ara",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/026.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "027. Surah An-Naml",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/027.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "028. Surah Al-Qasas",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/028.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "029. Surah Al-Ankabut",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/029.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "030. Surah Ar-Rum",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/030.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "031. Surah Luqmaan",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/031.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "032. Surah As-Sajdah",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/032.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "033. Surah Al-Ahzaab",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/033.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "034. Surah Saba",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/034.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "035. Surah Faatir",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/035.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "036. Surah Ya-Sin",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/036.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "037. Surah As-Saaffaat",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/037.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "038. Surah Saad",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/038.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "039. Surah Az-Zumar",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/039.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "040. Surah Ghafir",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/040.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "041. Surah Fussilat",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/041.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "042. Surah Ash-Shura",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/042.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "043. Surah Az-Zukhruf",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/043.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "044. Surah Ad-Dukhaan",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/044.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "045. Surah Al-Jaathiyah",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/045.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "046. Surah Al-Ahqaaf",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/046.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "047. Surah Muhammad",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/047.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "048. Surah Al-Fath",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/048.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "049. Surah Al-Hujuraat",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/049.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "050. Surah Qaaf",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/050.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "051. Surah Adh-Dhaariyaat",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/051.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "052. Surah At-Toor",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/052.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "053. Surah An-Najm",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/053.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "054. Surah Al-Qamar",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/054.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "055. Surah Ar-Rahman",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/055.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "056. Surah Al-Waqi'ah",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/056.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "057. Surah Al-Hadeed",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/057.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "058. Surah Al-Mujadila",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/058.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "059. Surah Al-Hashr",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/059.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "060. Surah Al-Mumtahanah",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/060.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "061. Surah As-Saff",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/061.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "062. Surah Al-Jumu'ah",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/062.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "063. Surah Al-Munafiqoon",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/063.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "064. Surah At-Taghabun",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/064.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "065. Surah At-Talaq",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/065.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "066. Surah At-Tahreem",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/066.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "067. Surah Al-Mulk",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/067.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "068. Surah Al-Qalam",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/068.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "069. Surah Al-Haaqqa",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/069.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "070. Surah Al-Ma'aarij",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/070.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "071. Surah Nuh",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/071.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "072. Surah Al-Jinn",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/072.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "073. Surah Al-Muzzammil",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/073.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "074. Surah Al-Muddaththir",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/074.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "075. Surah Al-Qiyamah",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/075.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "076. Surah Al-Insaan",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/076.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "077. Surah Al-Mursalaat",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/077.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "078. Surah An-Naba'",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/079.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "079. Surah An-Naazi'aat",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/079.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "080. Surah Abasa",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/080.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "081. Surah At-Takwir",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/081.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "082. Surah Al-Infitar",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/082.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "083. Surah Al-Mutaffifin",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/083.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "084. Surah Al-Inshiqaq",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/084.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "085. Surah Al-Burooj",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/085.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "086. Surah At-Taariq",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/086.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "087. Surah Al-A'la",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/087.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "088. Surah Al-Ghaashiyah",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/088.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "089. Surah Al-Fajr",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/089.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "090. Surah Al-Balad",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/090.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "091. Surah Ash-Shams",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/091.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "092. Surah Al-Layl",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/092.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "093. Surah Ad-Dhuha",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/093.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "094. Surah Ash-Sharh",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/094.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "095. Surah At-Tin",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/095.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "096. Surah Al-Alaq",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/096.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "097. Surah Al-Qadr",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/097.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "098. Surah Al-Bayyinah",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/098.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "099. Surah Az-Zalzalah",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/099.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "100. Surah Al-'Aadiyat",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/100.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "101. Surah Al-Qaari'ah",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/101.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "102. Surah At-Takaathur",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/102.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "103. Surah Al-'Asr",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/103.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "104. Surah Al-Humazah",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/104.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "105. Surah Al-Feel",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/105.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "106. Surah Quraish",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/106.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "107. Surah Al-Maa'oon",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/107.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "108. Surah Al-Kawthar",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/108.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "109. Surah Al-Kaafiroon",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/109.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "110. Surah An-Nasr",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/110.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "111. Surah Al-Masad",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/111.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "112. Surah Al-Ikhlas",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/112.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "113. Surah Al-Falaq",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/113.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	},
	{
		name: "114. Surah An-Naas",
		path: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/114.mp3",
		img: "img/readQuran.jpg",
		singer: "Mishari Rashid al-`Afasy"
	}
];


// All functions


// function load the track
function load_track(index_no) {
	clearInterval(timer);
	reset_slider();

	track.src = All_surah[index_no].path;
	title.innerHTML = All_surah[index_no].name;
	track_image.src = All_surah[index_no].img;
	artist.innerHTML = All_surah[index_no].singer;
	track.load();

	timer = setInterval(range_slider, 1000);
	total.innerHTML = All_surah.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound() {
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}



// reset surah slider
function reset_slider() {
	slider.value = 0;
}

// play surah
function playsurah() {
	track.play();
	Playing_surah = true;
	play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause surah
function pausesurah() {
	track.pause();
	Playing_surah = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

// checking.. the surah is playing or not
function justplay() {
	if (Playing_surah == false) {
		playsurah();

	} else {
		pausesurah();
	}
}
//^_^ ^_^ ^_^
// next surah
function next_surah() {
	if (index_no < All_surah.length - 1) {
		index_no += 1;
		load_track(index_no);
		playsurah();
	} else {
		index_no = 0;
		load_track(index_no);
		playsurah();

	}
}


// previous surah
function previous_surah() {
	if (index_no > 0) {
		index_no -= 1;
		load_track(index_no);
		playsurah();

	} else {
		index_no = All_surah.length;
		load_track(index_no);
		playsurah();
	}
}


// change volume
function volume_change() {
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration() {
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch() {
	if (autoplay == 1) {
		autoplay = 0;
		auto_play.style.background = "rgba(255,255,255,0.2)";
	} else {
		autoplay = 1;
		auto_play.style.background = "#FF8A65";
	}
}


function range_slider() {
	let position = 0;

	// update slider position
	if (!isNaN(track.duration)) {
		position = track.currentTime * (100 / track.duration);
		slider.value = position;
	}


	// function will run when the surah is over
	if (track.ended) {
		play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
		if (autoplay == 1) {
			index_no += 1;
			load_track(index_no);
			playsurah();
		}
	}
}
