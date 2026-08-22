// Բոլոր էջերի համար մեկ միասնական ցանկ
const titles = [
    "ՀԵՔԻԱԹ ԽՃԱՆԿԱՐԻՑ ԿՈՐՍՎԱԾ ԻՐԱԿԱՆՈՒԹՅԱՆ ՄԱՍԻՆ",
    "ՔԱՐԵՐԻ ՇՆՉՈՎ ՄԱՏՆԵՄԱՏ ԲԱՑՎԱԾ ԽՏԱՑՄԱՆ ԵԶԵՐՔ",
    "ԼԵԶՎԱՄՏԱԾՈՂ ԱՇԽԱՐՀԸ",
    "5 և, ՈՐՈՆՔ 60 ԵՆ ԿԱԶՄՈՒՈՄ, ԿԱՌՈՒՑԵԼՈՎ ԱՇԽԱՐՀԸ",
	"ԲԱԺԱՆԻՐ ԵՎ ՏԻՐԻՐ",
    "60 ԱԿԱՆ ՊԱՐԱԴԻԳՄԻ ԱՇԽԱՐՀԱԳՐՈՒԹՅՈՒՆԸ ԱՆԴԱՍՏԱՆՅԱՆ ԻՐԱԿԱՆՈՒԹՅԱՄԲ",
    "60 ԱԿԱՆ ՍԻՄՖՈՆԻԱՅԻՑ ԾՆԵԲԵԿՎԱԾ ՕՊԵՐԱՑԻՈՆ ՄԻՋՈՒԿԸ",
	"60 ԱԿԱՆ ՀԱՄԱԿԱՐԳԻ ՏԱՐԱԾՈՒԹՅԱՆ ՓԼԻԼՍՈՓԱՅԱԿԱՆ ՄՈԴԵԼԸ",
	"ԲԱՑԱՀԱՅՏՈՒՄ, ՈՐԸ ԿՐԿՆՕՐԻՆԱԿՈՒՄ Է ԱՐԱՏՏԱՆ ԿԱՄ ՏՐՈՅԱԿԱՆ ՀԵՂԻՆԵԻՑ ՄԻՆՉԵՎ ԻՆԱՆՆԱԿԱՆ ԱՐԱՏՏԱ ԱՇԽԱՐՀԱԳՐԱԿԱՆ ՆՈՒՅՆ ԼԱՅՆՈՒԹՅԱՄԲ",
	"ԲԱԶՄԱՃԱՃԱՆՉ ԻՄՊՈՒԼՍԻ ԱՂԲՅՈՒՐ ԱՐԱՏՏԱՆ",
	"ԻՆՔՆՈՒԹՅԱՆ 60 ԱԿԱՆ ԱՅՑԵՔԱՐՏԸ",
	"ԱՐԱՐՄԱՆ ԲԻԳ ԲԱՆԳԻՑ ՄՆԱՑԱԾ ՃԱՌԱԳԱՅԹՈՒՄԸ ՈՐ ԿՈՉՎՈՒՄ Է ԵՍ",
	"ԱՇԽԱՐՀԻ ՊԱԿԱՍՈՂ ՄԱՍԸ",
	"ԶՐՈՅԱԿԱՆ ՀԱՎԱՆԱԿԱՆՈՒԹՅՈՒՆԸ ՈՐՊԵՍ ԱՆՀՐԱԺԵՇՏՈՒԹՅՈՒՆ",
	"ԱՆՏԵՍԱՆԵԼԻ ԳՈՒՅՆ #7C0000FF, ՈՐԸ ԲԱՆ Է ՆՇԱՆԱԿՈՒՄ",
	"ՍՏԵՂԾԱԳՈՐԾԵԼՈՒ ՔԻՄԻԱՆ ՈՐՊԵՍ ԱՆՏԵՍԱՆԵԼԻ ՃԱՆԱՊԱՐՀ",
	"ԱՆՀԱՍԱՆԵԼԻ ԼՌՈՒԹՅԱՆ ՏԻԵԶԵՐՔԸ ",
	"ՍԵՓԱԿԱՆ ԳՈՅՈՒԹՅԱՆ ՄԵՋ ԱՊՐԱԾ ԺԱՄԱՆԱԿԸ",
	"ՉԳԻՏԵՄ ԹԵ ԻՆՉ ԵՄ ՈՒԶՈՒՄ, ԲԱՅՑ ԵՐԵՎԻ ԿԱՐՈՂ ԵՄ ԶԳԱԼ",
	"ՀԱՄԲԵՐՈՒԹՅԱՆ ԲԱԺԱԿԻ ԱՆԺԱՄԱՆԱԿ ՆԵՐԴԱՇՆԱԿ ԼՌՈՒԹՅՈՒՆԸ",
	"ԽՈՍՔԵՐԻ ՄԻՋԵՎ ՊԱՀՎԱԾ ԼՌՈՒԹՅԱՆ ԵՐԵՎԱԿՈՒՄԸ",
	"ՄԻ ԳԵՂԵՑԻԿ ԲԱՆ ԱՌԱՆՑ ՎԿԱՅԻ",
	"ԱՆՎԵՐՋՈՒԹՅԱՆ ԹԱՓԱՆՑԻԿ ԿՏՈՐՆԵՐԸ ՄՈՌԱՑՎԱԾ ԽՈՍՔԵՐԻ ՀՈՐԻԶՈՆՈՒՄ",
	"ՄՈՌԱՑՎԱԾ ԱՇԽԱՐՀԻ ԼՈՒՍԱԲԱՑԸ ՆԵՐՔՆԱՇԽԱՐՀԻ ՀԵՌՈՒՍՏԱՑՈՒՅՑՈՎ",
	"ԲԱՐԴԻՆԵՐԻ ՍՈՍԱՓԻ ՔԱՂԱՔԸ",
	"ԾԻՐԱՆԻ ԿՈՐԻԶԻ ՃԻՉԸ",
	"ԹՎԱՅԻՆ ԱՂՈԹՔ ՆՈՐ ԱՍՏՎԱԾՆԵՐԻՆ ԿԱՄ ԹՎԱՅԻՆ ԴԱՐԱՇՐՋԱՆԻ ՄԵՆՈՒԹՅԱՆ ԳԻՆԸ",
	"ՄԵՆԱԿՈՒԹՅԱՆ ՊԼԱՍՏԻԿ ԱՐՁԱԿԸ ԹՎԱՅԻՆ ԽՈՐԱՆԻ ՄԵՋ ՍՏԱՑՎԱԾ ԲՆԱԿԱՆ ԽՈՍՔԵՐԻՑ",
	"ԺԱՄԱՆԱԿԻ ՄԵՋ ՄՆԱՑԱԾ ՀԵՏՔԵՐԸ ՈՐՊԵՍ ԼՌԵԼՈՒ ՈՒՍՈՒՑԻՉՆԵՐ",
	"ԲԱՎԱԿԱՆՈՒԹՅԱՆ ՄԵՋ ԱՐԹՆԱՑԱԾԸ",
	"ՈՉԻՆՉ ՉԱՆԵԼՈՒ ԱՐՎԵՍՏԸ",
	"60-ԱԿԱՆ ՊԱՐԱԴԻԳՄԻ ՀՆՉՅՈՒՆԱԲԱՆԱԿԱՆ ԼԵԶՎԱՄՏԱԾՈՂՈՒԹՅՈՒՆԸ ՈՐՊԵՍ ՆՈՐԱԳՈՒՅՆ ԲԱՆԱԿԱՆՈՒԹՅԱՆ ԱՆՁՆԱԳԻՐ",
];

// Այստեղ որոշվում են Մասերի սկզբնական համարները (վաղը միայն սրանք կփոխես)
const part1Start = 1;
const part2Start = 14;
const part3Start = 23;
const part4Start = 32;

const listContainer = document.getElementById('sidebarList');

titles.forEach((title, index) => {
    const num = index + 1;

    // Ավտոմատ ավելացնում ենք ՄԱՍԵՐԻ վերնագրերը
    if (num === part1Start) {
        const sec = document.createElement('div');
        sec.className = 'sidebar-section-title';
        sec.innerText = 'Մաս Առաջին. 60-ական Պարադիգմ';
        listContainer.appendChild(sec);
    } else if (num === part2Start) {
        const sec = document.createElement('div');
        sec.className = 'sidebar-section-title';
        sec.innerText = 'Մաս Երկրորդ. Էության Ֆիզիկան';
        listContainer.appendChild(sec);
    } else if (num === part3Start) {
        const sec = document.createElement('div');
        sec.className = 'sidebar-section-title';
        sec.innerText = 'Մաս Երրորդ. Դատարկության Նվաճումը';
        listContainer.appendChild(sec);
		} else if (num === part4Start) {
        const sec = document.createElement('div');
        sec.className = 'sidebar-section-title';
        sec.innerText = 'Մաս Չորրորդ. Գործիքակազմ';
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