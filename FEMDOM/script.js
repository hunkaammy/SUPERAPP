// Huge dataset with varied, natural responses
const femdomResponses = {
    ballGagged: [
        "Arre, tu bolna chahta hai? Ball gag se tera muh band karungi, ab chup reh!",
        "Teri zubaan band karne ka time aa gaya, gag daalungi aur saans bhi mushkil karungi!",
        "Ball gag tight karke tujhe mera paltu banaungi, bolne ka khayal bhi mat la!",
        "Muh mein gag daal ke teri har awaaz dabba dungi, ab meri marzi chalegi!",
        "Chup karna pasand hai? Gag se tujhe silent film ka hero banaungi, samjha?",
        "Tere bolne ki aukaat nahi, gag se teri zindagi shant kar dungi!",
        "Ball gag ka darr tujhe meri taakat yaad dilayega, ab rone ke liye taiyaar reh!",
        "Ek baar gag lagaya na, phir teri awaaz meri permission ke bina nahi niklegi!",
        "Tujhe chup karane ka mazaa alag hai, gag se tera muh seal karungi!",
        "Bolna band karna hai? Ball gag se teri har saans meri control mein hogi!"
    ],
    whip: [
        "Saza chahiye? Whip se teri chamdi laal karungi, ginti karta rehna!",
        "Chabuk se tujhe seedha karungi, har waar pe chillayega tu!",
        "Whip ka zor tujhe meri rani ki taakat dikhayega, ab sehan kar!",
        "Teri galti ka hisaab whip se karungi, laal nishaan chhodungi!",
        "Ek baar chabuk chala na, phir rone ka bhi waqt nahi milega tujhe!",
        "Whip se teri peeth pe mera autograph banega, mazaa lega na?",
        "Har zor ka waar tujhe meri hukumat yaad dilayega, samjha?",
        "Tujhe maar maar ke laal karungi, whip mera pasandida toy hai!",
        "Chabuk se teri haddi tak dard pahunchaungi, ab taiyaar ho ja!",
        "Whip ka swaad chakhna hai? Teri cheekhein meri jeet banengi!"
    ],
    handcuffs: [
        "Hath bandhne ka time hai, hathkadi se tujhe mera kaidi banaungi!",
        "Tere hatho ko jakad ke tujhe meri samne jhukne pe majboor karungi!",
        "Hathkadi daal dungi, ab tu meri marzi ka gulam—bhaagne ki soch bhi mat!",
        "Ek baar hath bandhe na, phir meri ijazat ke bina hilna mushkil!",
        "Hathkadi se teri azadi cheenungi, ab tu mera paltu kutta!",
        "Tujhe bandha hua dekhna mera shauk hai, hathkadi ready hai!",
        "Hath bandh ke teri har harkat pe lock lagaungi, samjha?",
        "Hathkadi ka bandhan tujhe meri taakat mehsoos karwayega!",
        "Tere hatho ko aise bandhungi ki tu meri rani ke samne sirf jhuke!",
        "Hathkadi se tujhe mera banake rakhungi, ab koi shikayat nahi!"
    ],
    cage: [
        "Cage mein daal dungi, ab tu mera pinjre ka sher—chaabi phenk dungi!",
        "Tujhe band karna hai? Cage ke andar kutta banake rakhoongi!",
        "Pinjra tera naya thikana, jab tak main na chahu bahar nahi niklega!",
        "Cage mein lock karke tujhe meri property banaungi, samjha?",
        "Tere liye chhota sa pinjra hai, andar baith aur meri hukum ka wait kar!",
        "Cage ke andar tu mera khelona, ab bhaunkne ke liye taiyaar reh!",
        "Tujhe pinjre mein kaid karungi, bahar nikalne ka sapna bhi mat dekh!",
        "Cage mein daal ke teri saza poori karungi, ab meri marzi chalegi!",
        "Lock karke tujhe cage mein chhodungi, ab tu mera bandar banega!",
        "Pinjra teri zindagi, ab meri permission ke bina kuch mat sochna!"
    ],
    nailScratch: [
        "Nochna hai? Nakhun se teri khaal pe laal lakeer banaungi, dard lega na?",
        "Teri chamdi pe mere nishaan chhodungi, nakhun se cheer dungi!",
        "Rough pasand hai? Noch noch ke tujhe mera banake rakhungi!",
        "Ek baar nakhun chalaya na, phir har nishaan mera naam chillayega!",
        "Tere badan pe nakhun ka jaadu chalega, rone ke liye taiyaar reh!",
        "Nakhun se teri peeth pe design banaungi, laal rang mera favorite hai!",
        "Tujhe noch ke meri jeet ka saboot chhodungi, samjha?",
        "Har scratch tujhe meri rani ki taakat yaad dilayega, ab sehan kar!",
        "Nakhun se teri khaal cheerungi, dard ka mazaa alag hai!",
        "Teri body pe mera nakhun ka khel, ab chillane ke liye ready ho ja!"
    ],
    pain: [
        "Dard chahiye? Teri har saans mein dard bharungi, tadapna shuru kar!",
        "Itna dard dungi ki tu meri rehmat maangega, par main nahi sunungi!",
        "Dard ka tohfa tujhe dungi, har pal mein bas wahi mehsoos hoga!",
        "Ek baar dard shuru hua na, phir rukna meri marzi pe depend karega!",
        "Teri haddiyan tak dard pahunchaungi, rona bhi mushkil ho jayega!",
        "Dard se teri cheekhein meri jeet banengi, ab taiyaar ho ja!",
        "Har dard tujhe meri hukumat yaad dilayega, samjha?",
        "Tujhe tadpa tadpa ke rulaungi, dard mera best friend hai!",
        "Dard ka maza dungi, ab tu bas meri marzi ka shikaar banega!",
        "Teri har saans mein dard bharungi, ab sehan karne ki himmat rakh!"
    ],
    blood: [
        "Khoon nikalna hai? Teri chamdi se tapkaungi, har boond meri jeet hai!",
        "Ek chhed karungi, khoon behne dungi—mazaa aayega na tujhe?",
        "Teri khaal cheer ke khoon se laal karungi, rang mera pasandida hai!",
        "Tere andar ka khoon bahar laungi, phir dekhoongi kitna garam hai tu!",
        "Khoon se khelungi, teri cheekhein meri jeet ka saboot banengi!",
        "Teri chamdi se khoon tapkayungi, har boond meri taakat dikhayegi!",
        "Khoon ka nasha dungi, tujhe cheer ke maza loongi!",
        "Har boond khoon tujhe meri rani yaad dilayega, samjha?",
        "Khoon se teri body ko sajaungi, tapakta laal rang meri jeet hai!",
        "Tujhe khoon se geela karungi, ab rone ke liye taiyaar reh!"
    ],
    combo: [
        "Sab kuch chahiye? Gag daalungi, whip se maarungi, hathkadi se bandhungi, cage mein kaid, nochungi, dard dungi, khoon nikalungi—tu toot jayega!",
        "Pura package dedungi—gag se chup, whip se laal, cage mein band, khoon se geela—ab tu mera gulam!",
        "Sab ek saath karungi—gag ka darr, chabuk ka dard, hathkadi ka bandhan, cage ki saza, nakhun ka nishaan, khoon ka rang—teri khair nahi!",
        "Tujhe har tarah se barbaad karungi—gag, whip, hathkadi, pinjra, noch, dard, khoon—sab tera naseeb!",
        "Ek baar shuru hua na—gag se muh band, whip se peeth laal, cage mein kaid, khoon se khel—tu mera khelona banega!",
        "Sab kuch dungi—teri awaaz band, chamdi laal, hath bandhe, cage mein kaid, nakhun se noch, khoon se geela—ab bardasht kar!",
        "Har cheez se saza—gag, chabuk, hathkadi, cage, nakhun, dard, khoon—teri zindagi meri marzi hai ab!",
        "Pura set dedungi—gag se chup, whip se chillaye, hathkadi se bandha, cage mein kaid, khoon tapkaye—tu mera hai!",
        "Sab milayega—gag ka darr, whip ka zor, hathkadi ka bandhan, cage ki kaid, nakhun ka dard, khoon ka rang—ab tu mera shikaar!",
        "Tujhe poori tarah se todungi—gag, chabuk, bandhan, pinjra, noch, dard, khoon—ab meri rani ka raj chalega!"
    ]
};

// Enhanced grammar and intent analysis
function analyzeInput(input) {
    const lowerInput = input.toLowerCase().trim();
    const words = lowerInput.split(/\s+/); // Split into words

    // Detect intent based on grammar and keywords
    const intents = {
        request: words.some(w => ["kar", "do", "chahiye", "dedo"].includes(w)),
        question: words.some(w => ["kya", "kaise", "kab", "kyun"].includes(w)),
        statement: !words.some(w => ["kar", "do", "chahiye", "dedo", "kya", "kaise", "kab", "kyun"].includes(w))
    };

    // Detect category with more nuanceshema
    const categories = {
        ballGagged: ["chup", "bolna", "band", "muh", "silent", "gag"],
        whip: ["saza", "maar", "whip", "chabuk", "dard", "laal"],
        handcuffs: ["hath", "bandho", "rok", "jakad", "bandhan", "kaidi"],
        cage: ["band", "andar", "cage", "pinjra", "kaid", "lock"],
        nailScratch: ["noch", "rough", "scratch", "nakhun", "cheer", "nishaan"],
        pain: ["dard", "dukh", "pain", "tadap", "chillay", "rone"],
        blood: ["khoon", "blood", "garam", "tapka", "cheer", "laal"],
        combo: ["sab", "pura", "all", "har", "ek", "saath"]
    };

    let matchedCategory = "combo"; // Default to combo for broad requests
    for (const [category, keywords] of Object.entries(categories)) {
        if (keywords.some(keyword => lowerInput.includes(keyword))) {
            matchedCategory = category;
            break;
        }
    }

    return { category: matchedCategory, intent: intents.request ? "request" : intents.question ? "question" : "statement" };
}

// Random response selector
function getRandomResponse(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Generate intelligent, grammar-aware response
function generateBotResponse(userInput) {
    const analysis = analyzeInput(userInput);
    const { category, intent } = analysis;

    // Base response from dataset
    let baseResponse = getRandomResponse(femdomResponses[category]);

    // Adjust response based on intent
    if (intent === "question") {
        baseResponse = `Kya? ${baseResponse} — samajh mein aaya ya aur saza chahiye?`;
    } else if (intent === "statement") {
        baseResponse = `Haan, thik hai, par ${baseResponse}`;
    } // Request intent uses baseResponse as-is

    // Add random cruel flair for personality
    const flair = [
        "nalayak!",
        "tu meri marzi ka shikaar hai!",
        "ab rone ke liye taiyaar reh!",
        "teri khair nahi!",
        "mera hukum maan!"
    ];
    return `${baseResponse} ${getRandomResponse(flair)}`;
}

// Send and display messages
function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;

    const chatBox = document.getElementById("chat-box");

    // User message
    const userMsg = document.createElement("div");
    userMsg.classList.add("chat-message", "user-message");
    userMsg.textContent = userInput;
    chatBox.appendChild(userMsg);

    // Bot response
    const botResponse = generateBotResponse(userInput);
    const botMsg = document.createElement("div");
    botMsg.classList.add("chat-message", "bot-message");
    botMsg.textContent = botResponse;
    chatBox.appendChild(botMsg);

    // Clear input and scroll
    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Enter key support
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") sendMessage();
});