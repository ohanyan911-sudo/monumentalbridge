// Բոլոր էջերի համար մեկ միասնական ցանկ
const titles = [
    "ՀԵՔԻԱԹ ԽՃԱՆԿԱՐԻՑ ԿՈՐՍՎԱԾ ԻՐԱԿԱՆՈՒԹՅԱՆ ՄԱՍԻՆ",
    "ՔԱՐԵՐԻ ՇՆՉՈՎ ՄԱՏՆԵՄԱՏ ԲԱՑՎԱԾ ԽՏԱՑՄԱՆ ԵԶԵՐՔ",
    "ԼԵԶՎԱՄՏԱԾՈՂ ԱՇԽԱՐՀԸ",
    "5 և, ՈՐՈՆՔ 60 ԵՆ ԿԱԶՄՈՒՈՄ, ԿԱՌՈՒՑԵԼՈՎ ԱՇԽԱՐՀԸ",
    "60 ԱԿԱՆ ՊԱՐԱԴԻԳՄԻ ԱՇԽԱՐՀԱԳՐՈՒԹՅՈՒՆԸ ԱՆԴԱՍՏԱՆՅԱՆ ԻՐԱԿԱՆՈՒԹՅԱՄԲ",
    "60 ԱԿԱՆ ՍԻՄՖՈՆԻԱՅԻՑ ԾՆԵԲԵԿՎԱԾ ՕՊԵՐԱՑԻՈՆ ՄԻՋՈՒԿԸ",
	"60 ԱԿԱՆ ՀԱՄԱԿԱՐԳԻ ՏԱՐԱԾՈՒԹՅԱՆ ՓԼԻԼՍՈՓԱՅԱԿԱՆ ՄՈԴԵԼԸ",
	"ԲԱՑԱՀԱՅՏՈՒՄ, ՈՐԸ ԿՐԿՆՕՐԻՆԱԿՈՒՄ Է ԱՐԱՏՏԱՆ ԿԱՄ ՏՐՈՅԱԿԱՆ ՀԵՂԻՆԵԻՑ ՄԻՆՉԵՎ ԻՆԱՆՆԱԿԱՆ ԱՐԱՏՏԱ ԱՇԽԱՐՀԱԳՐԱԿԱՆ ՆՈՒՅՆ ԼԱՅՆՈՒԹՅԱՄԲ",
	"ԲԱԶՄԱՃԱՃԱՆՉ ԻՄՊՈՒԼՍԻ ԱՂԲՅՈՒՐ ԱՐԱՏՏԱՆ",
	"ԻՆՔՆՈՒԹՅԱՆ 60 ԱԿԱՆ ԱՅՑԵՔԱՐՏԸ",
	"ԱՐԱՐՄԱՆ ԲԻԳ ԲԱՆԳԻՑ ՄՆԱՑԱԾ ՃԱՌԱԳԱՅԹՈՒՄԸ ՈՐ ԿՈՉՎՈՒՄ Է ԵՍ",
	"ԱՇԽԱՐՀԻ ՊԱԿԱՍՈՂ ՄԱՍԸ",
	"Գործ 13",
	"Գործ 14",
	"Գործ 15",
	"Գործ 16",
	"Գործ 17",
	"Գործ 18",
	"Գործ 19",
	"Գործ 20",
	"Գործ 21",
	"Գործ 22",
	"Գործ 23",
	"Գործ 24",
	"Գործ 25",
	"Գործ 26",
	"Գործ 27",
	"Գործ 28",
	"Գործ 29",
	"Գործ 30",
];

// Այստեղ որոշվում են Մասերի սկզբնական համարները (վաղը միայն սրանք կփոխես)
const part1Start = 1;
const part2Start = 13;
const part3Start = 23;

const listContainer = document.getElementById('sidebarList');

titles.forEach((title, index) => {
    const num = index + 1;

    // Ավտոմատ ավելացնում ենք ՄԱՍԵՐԻ վերնագրերը
    if (num === part1Start) {
        const sec = document.createElement('div');
        sec.className = 'sidebar-section-title';
        sec.innerText = 'Մաս Առաջին';
        listContainer.appendChild(sec);
    } else if (num === part2Start) {
        const sec = document.createElement('div');
        sec.className = 'sidebar-section-title';
        sec.innerText = 'Մաս Երկրորդ';
        listContainer.appendChild(sec);
    } else if (num === part3Start) {
        const sec = document.createElement('div');
        sec.className = 'sidebar-section-title';
        sec.innerText = 'Մաս Երրորդ';
        listContainer.appendChild(sec);
    }

    const a = document.createElement('a');
    a.href = `work${num}.html`;
    a.className = 'sidebar-item';
    
    // Որոշում ենք՝ որ էջն է ակտիվ (վերցնում է հենց էջում հայտարարված currentWorkNumber-ից)
    if (typeof currentWorkNumber !== 'undefined' && num === currentWorkNumber) {
        a.className += ' active';
    }
    
    a.innerHTML = `<span class="sidebar-num">${num}.</span>${title}`;
    listContainer.appendChild(a);
});