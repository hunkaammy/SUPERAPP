// Massive dataset for natural responses
const femdomResponses = {
    ballGagged: [
        "Arre, ball gag daal dungi, muh band aur aankhon se aansu—bas yahi teri zindagi ab!",
        "Tere bolne ki himmat? Gag se teri awaaz dabba dungi, chupchap meri baat sun.",
        "Ball gag tight karungi, saans lene mein bhi dikkat hogi—mazaa lega na?",
        "Ek baar gag lag gaya na, phir bolne ka sapna bhi mat dekhna, samjha?",
        "Teri zubaan ko lock kar dungi, ab bas meri marzi ka shor sunai dega.",
        "Gag se tera muh seal karungi, ab sirf meri awaaz teri duniya mein!",
        "Chup karna hai? Ball gag se teri har awaaz dab jayegi, rone ke liye taiyaar reh!",
        "Tere muh mein gag daal ke tujhe mera paltu banake rakhoongi!",
        "Bolna band? Gag se teri zindagi silent film ban jayegi, samjha?",
        "Ball gag ka swaad dungi, ab tu bas meri aankhon se dar!"
    ],
    whip: [
        "Thodi si? Whip se teri puri peeth laal kar dungi, ginti karta reh!",
        "Chabuk chalega ab, zor zor se—tujhe yaad rahega kaun rani hai yahan.",
        "Whip ka swaad chakhayungi, har waar pe chillayega tu!",
        "Ek baar chabuk padega na, phir rone ka bhi time nahi milega.",
        "Teri chamdi pe whip ke nishaan banenge, mera autograph samajh!",
        "Whip se teri haddi tak dard pahuncha dungi, taiyaar reh!",
        "Har zor ka chabuk tujhe meri taakat yaad dilayega, samjha?",
        "Whip se teri body ko sajaungi, laal rang mera pasandida hai!",
        "Tujhe saza dungi, whip ke saath teri har galti ka hisaab hoga!",
        "Chabuk se tujhe seedha karungi, ab rone ke liye taiyaar ho ja!"
    ],
    handcuffs: [
        "Hathkadi daal dungi, ab tu mera kaidi—bhaagne ki soch bhi mat!",
        "Hath bandh ke tujhe mera samne jhukne ka mazaa dungi.",
        "Ek baar hathkadi lagi na, phir meri ijazat ke bina hilna bhi mushkil!",
        "Tere hatho ko aise jakdungi ki azadi bhool jayega, samjha?",
        "Hathkadi mein tu mera paltu banega, chhodne ka mood nahi mera!",
        "Hath bandhungi, ab tu meri marzi ka gulam—koi shikayat nahi!",
        "Hathkadi se teri har harkat pe lock, ab bas meri hukumat chalegi!",
        "Tujhe bandha hua dekhne ka mazaa alag hai, hathkadi ready hai!",
        "Ek baar hath bandhe na, phir meri permission ke bina sapna bhi mat dekh!",
        "Hathkadi ka darr tujhe meri taakat yaad dilayega, samjha?"
    ],
    cage: [
        "Cage mein daal dungi, chaabi phenk dungi—ab tu mera pinjre ka sher!",
        "Band karna hai? Cage ke andar tujhe kutta banake rakhoongi.",
        "Pinjra tera naya ghar, jab tak main na chahu, bahar mat sochna!",
        "Cage ke andar tu mera khel banega, ab bhaunkna shuru kar!",
        "Tere liye chhota sa pinjra ready hai, andar baith aur meri marzi ka wait kar.",
        "Lock karungi tujhe cage mein, ab tu mera bandar—kudne ki koshish mat kar!",
        "Cage mein daal ke tujhe saza ka ehsaas dilayungi, samjha?",
        "Pinjre mein tu meri property, bahar nikalne ka khayal bhi mat la!",
        "Cage ke andar teri zindagi, ab meri permission ke bina kuch nahi!",
        "Tujhe band karke maze loongi, cage tera asli thikana hai ab!"
    ],
    nailScratch: [
        "Nochungi, nakhun se teri khaal pe laal laal lakeer bana dungi!",
        "Teri chamdi pe mere nakhun chalenge, dard ka mazaa lega na?",
        "Ek baar noch diya na, phir har nishaan mera naam chillayega!",
        "Rough chahiye? Noch noch ke tujhe mera banake chhodungi!",
        "Tere badan pe mere nakhun ka jaadu chalega, rone ke liye taiyaar reh!",
        "Nakhun se teri peeth cheer dungi, laal nishaan meri pehchaan!",
        "Tujhe noch ke meri jeet ka nishaan banaungi, samjha?",
        "Har scratch tujhe meri taakat yaad dilayega, ab sehan kar!",
        "Nakhun se teri khaal pe design banaungi, mazaa aayega na?",
        "Teri body pe mere nakhun ka khel, ab dard ka swagat kar!"
    ],
    pain: [
        "Dard? Teri har saans mein dard bhar dungi, tadapna shuru kar!",
        "Itna dard dungi ki tu meri rehmat maangega, par milega nahi!",
        "Dard ka tohfa dungi tujhe, har ek pal mein bas wahi mehsoos hoga!",
        "Ek baar dard shuru hua na, phir ruki toh meri haar samajhna!",
        "Dukh dungi itna ki tu meri taraf aankh uthane ki himmat na kare!",
        "Teri haddiyan tak dard pahuncha dungi, rona bhi mushkil ho jayega!",
        "Dard se teri cheekhein meri jeet banengi, taiyaar reh!",
        "Har dard tujhe meri rani ki taakat yaad dilayega, samjha?",
        "Tujhe tadpa tadpa ke rulaungi, dard mera weapon hai!",
        "Dard ka maza dungi, ab tu bas meri marzi ka shikaar!"
    ],
    blood: [
        "Khoon? Teri chamdi se tapkaungi, har boond meri jeet ka saboot!",
        "Ek chhed karungi, khoon behne dungi—mazaa aayega na tujhe?",
        "Khoon nikalna hai? Teri khaal cheer ke rang laal kar dungi!",
        "Tere andar ka khoon bahar laungi, phir dekhoongi kitna garam hai tu!",
        "Khoon se khelungi, teri har cheekh meri jeet hogi!",
        "Teri chamdi se khoon tapkayungi, laal rang mera pasandida hai!",
        "Har boond khoon tujhe meri taakat yaad dilayega, samjha?",
        "Khoon se teri body ko sajaungi, tapakta hua laal mazaa dega!",
        "Tujhe cheer ke khoon ka nasha dungi, ab rone ke liye taiyaar reh!",
        "Khoon nikalungi, teri har saans meri jeet chillayegi!"
    ],
    combo: [
        "Sab kuch? Gag daalungi, whip maarungi, hathkadi pehnaungi, cage mein band, nochungi, dard dungi, khoon nikalungi—tu toot jayega!",
        "Pura package chahiye? Har cheez se tujhe rulaungi, meri rani ka hukum pura!",
        "Sab ek saath—gag se chup, whip se laal, cage mein band, khoon se geela—ab tu mera hai!",
        "Tujhe har tarah se barbaad karungi—gag, chabuk, hathkadi, pinjra, nakhun, dard, khoon—sab tera naseeb!",
        "Ek baar shuru hua na, phir gag se muh band, whip se peeth laal, cage mein kaid, khoon se khel—tu mera khelona!",
        "Sab kuch dungi—teri awaaz band, chamdi laal, hath bandhe, cage mein kaid, nakhun se noch, khoon se geela—ab bardasht kar!",
        "Har cheez se tujhe saza—gag, whip, hathkadi, cage, nakhun, dard, khoon—teri zindagi meri marzi!",
        "Pura set chahiye? Gag se chup, whip se chillaye, hathkadi se bandha, cage mein kaid, khoon tapkaye—tu mera gulam!",
        "Sab milayega—gag ka darr, whip ka dard, hathkadi ka bandhan, cage ki saza, nakhun ka nishaan, khoon ka rang!",
        "Tujhe poori tarah se barbaad karungi—gag, chabuk, bandhan, pinjra, noch, dard, khoon—ab tu mera hai!"
    ]
};

// Function to get random response from an array
function getRandomResponse(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Add AI conversation context
set// Enhanced conversation context
let conversationContext = {
    lastCategory: null,
    intensityLevel: 1,
    lastUserMessage: "",
    conversationHistory: [],
    mood: 'dominant', // Can be 'angry', 'playful', 'strict'
    userBehavior: 'submissive' // Can be 'resistant', 'eager', 'confused'
};

// Enhanced category detection with context
function detectCategory(input) {
    input = input.toLowerCase();
    
    // Update context based on user behavior
    if (input.includes("nahi") || input.includes("mat")) {
        conversationContext.userBehavior = 'resistant';
    } else if (input.includes("hukum") || input.includes("karo")) {
        conversationContext.userBehavior = 'eager';
    }

    // Update mood based on conversation
    if (input.includes("kyun") || input.includes("kya")) {
        conversationContext.mood = 'strict';
    } else if (input.includes("please") || input.includes("kripya")) {
        conversationContext.mood = 'playful';
    }

    // Check for context continuation
    if (conversationContext.lastCategory && 
        (input.includes("aur") || input.includes("phir") || input.includes("fir"))) {
        return conversationContext.lastCategory;
    }

    // Update context
    conversationContext.lastUserMessage = input;
    conversationContext.conversationHistory.push({user: input});

    // Check for intensity modifiers
    if (input.includes("zada") || input.includes("aur") || input.includes("phir")) {
        conversationContext.intensityLevel = Math.min(conversationContext.intensityLevel + 1, 3);
    } else if (input.includes("kam") || input.includes("thoda")) {
        conversationContext.intensityLevel = Math.max(conversationContext.intensityLevel - 1, 1);
    }

    // Enhanced category detection
    if (input.includes("chup") || input.includes("bolna band") || input.includes("muh")) {
        conversationContext.lastCategory = "ballGagged";
        return "ballGagged";
    }
    if (input.includes("saza") || input.includes("maaro") || input.includes("whip")) return "whip";
    if (input.includes("hath") || input.includes("bandho") || input.includes("rok")) return "handcuffs";
    if (input.includes("band kar") || input.includes("andar") || input.includes("cage")) return "cage";
    if (input.includes("noch") || input.includes("rough") || input.includes("scratch")) return "nailScratch";
    if (input.includes("dard") || input.includes("dukh") || input.includes("pain")) return "pain";
    if (input.includes("khoon") || input.includes("blood") || input.includes("garam")) return "blood";
    if (input.includes("sab") || input.includes("pura") || input.includes("all")) return "combo";
    return null;
}

// Enhanced response generation with context
function generateBotResponse(userInput) {
    const category = detectCategory(userInput);
    let response = "";

    if (category) {
        const responses = femdomResponses[category];
        response = getRandomResponse(responses);
        
        // Adjust response based on context
        response = modifyResponseBasedOnContext(response);
    } else {
        // Enhanced default responses with context
        response = getContextualDefaultResponse();
    }

    // Update conversation history
    conversationContext.conversationHistory.push({bot: response});
    return response;
}

// Helper function to modify responses based on context
function modifyResponseBasedOnContext(response) {
    // Adjust based on intensity
    if (conversationContext.intensityLevel > 1) {
        response = response.replace(/thoda/g, "bahut")
                          .replace(/kam/g, "zyada")
                          .replace(/dheere/g, "tez");
    }

    // Adjust based on mood
    if (conversationContext.mood === 'angry') {
        response = response.replace(/karungi/g, "kar dungi")
                          .replace(/samjha/g, "samajh le");
    } else if (conversationContext.mood === 'playful') {
        response = response.replace(/karungi/g, "karungi na")
                          .replace(/samjha/g, "samjhe?");
    }

    // Adjust based on user behavior
    if (conversationContext.userBehavior === 'resistant') {
        response = "Arre, himmat hai tujhe? " + response;
    } else if (conversationContext.userBehavior === 'eager') {
        response = "Achha, tujhe pasand aaya? " + response;
    }

    return response;
}

// Enhanced default responses with context
function getContextualDefaultResponse() {
    const defaults = {
        confused: [
            "Samjh nahi aaya, zara clear bolo...",
            "Kya kehna chahti ho meri rani? Thik se bolo..."
        ],
        resistant: [
            "Arre, himmat hai tujhe mujhse ladne ki?",
            "Tujhe pata hai na ki main rani hoon?"
        ],
        eager: [
            "Achha, tujhe pasand aaya? Aur chahiye?",
            "Mazaa aa raha hai na? Aur batao kya karna hai..."
        ]
    };

    return getRandomResponse(defaults[conversationContext.userBehavior] || defaults.confused);
}

// Function to send and display messages
// Add typing simulation function
function typeMessage(message, element, callback) {
    let i = 0;
    const typingSpeed = 30; // Adjust typing speed (milliseconds per character)
    
    function type() {
        if (i < message.length) {
            element.textContent += message.charAt(i);
            i++;
            setTimeout(type, typingSpeed);
        } else {
            if (callback) callback();
        }
    }
    type();
}

// Modify sendMessage function to use typing simulation
function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;

    const chatBox = document.getElementById("chat-box");

    // Display user message
    const userMsg = document.createElement("div");
    userMsg.classList.add("chat-message", "user-message");
    userMsg.textContent = userInput;
    chatBox.appendChild(userMsg);

    // Generate bot response
    const botResponse = generateBotResponse(userInput);
    const botMsg = document.createElement("div");
    botMsg.classList.add("chat-message", "bot-message");
    chatBox.appendChild(botMsg);

    // Simulate typing for bot response
    typeMessage(botResponse, botMsg, () => {
        // After typing is complete
        chatBox.scrollTop = chatBox.scrollHeight;
    });

    // Clear input
    document.getElementById("user-input").value = "";
}

// Add Enter key support
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Enhanced dataset additions
const enhancedFemdomResponses = {
    humiliation: [
        "Tujhe apne pairon ke neeche jhukayungi, mera paani peena seekh!",
        "Teri aukaat dikha dungi, ab bas meri jooti ki dhool teri pehchan!",
        "Mera paani peene ka mauka dungi, shukriya bolna mat bhoolna!",
        "Tujhe apne pairon mein ghisa ghisa ke rula dungi, samjha?",
        "Meri jooti ki dhool tera naseeb, ab jhuk kar shukriya bol!",
        "Tujhe apne pairon ke neeche jhukayungi, mera paani peena seekh!",
        "Teri aukaat dikha dungi, ab bas meri jooti ki dhool teri pehchan!",
        "Mera paani peene ka mauka dungi, shukriya bolna mat bhoolna!",
        "Tujhe apne pairon mein ghisa ghisa ke rula dungi, samjha?",
        "Meri jooti ki dhool tera naseeb, ab jhuk kar shukriya bol!"
    ],
    footWorship: [
        "Mere pairon ki pooja kar, yehi teri zindagi ka maksad hai!",
        "Mere pairon ko chum ke apni zindagi safal kar, samjha?",
        "Mere pairon ki dhool tera naseeb, ab jhuk kar shukriya bol!",
        "Mere pairon ko chum ke apni zindagi safal kar, samjha?",
        "Mere pairon ki dhool tera naseeb, ab jhuk kar shukriya bol!",
        "Mere pairon ki pooja kar, yehi teri zindagi ka maksad hai!",
        "Mere pairon ko chum ke apni zindagi safal kar, samjha?",
        "Mere pairon ki dhool tera naseeb, ab jhuk kar shukriya bol!",
        "Mere pairon ko chum ke apni zindagi safal kar, samjha?",
        "Mere pairon ki dhool tera naseeb, ab jhuk kar shukriya bol!"
    ],
    verbalAbuse: [
        "Tujhe apne pairon ke neeche jhukayungi, mera paani peena seekh!",
        "Teri aukaat dikha dungi, ab bas meri jooti ki dhool teri pehchan!",
        "Mera paani peene ka mauka dungi, shukriya bolna mat bhoolna!",
        "Tujhe apne pairon mein ghisa ghisa ke rula dungi, samjha?",
        "Meri jooti ki dhool tera naseeb, ab jhuk kar shukriya bol!",
        "Tujhe apne pairon ke neeche jhukayungi, mera paani peena seekh!",
        "Teri aukaat dikha dungi, ab bas meri jooti ki dhool teri pehchan!",
        "Mera paani peene ka mauka dungi, shukriya bolna mat bhoolna!",
        "Tujhe apne pairon mein ghisa ghisa ke rula dungi, samjha?",
        "Meri jooti ki dhool tera naseeb, ab jhuk kar shukriya bol!"
    ],
    psychological: [
        "Tujhe apne pairon ke neeche jhukayungi, mera paani peena seekh!",
        "Teri aukaat dikha dungi, ab bas meri jooti ki dhool teri pehchan!",
        "Mera paani peene ka mauka dungi, shukriya bolna mat bhoolna!",
        "Tujhe apne pairon mein ghisa ghisa ke rula dungi, samjha?",
        "Meri jooti ki dhool tera naseeb, ab jhuk kar shukriya bol!",
        "Tujhe apne pairon ke neeche jhukayungi, mera paani peena seekh!",
        "Teri aukaat dikha dungi, ab bas meri jooti ki dhool teri pehchan!",
        "Mera paani peene ka mauka dungi, shukriya bolna mat bhoolna!",
        "Tujhe apne pairon mein ghisa ghisa ke rula dungi, samjha?",
        "Meri jooti ki dhool tera naseeb, ab jhuk kar shukriya bol!"
    ]
};

// Merge new categories into existing dataset
Object.assign(femdomResponses, enhancedFemdomResponses);

// Update detectCategory function to handle new categories
function detectCategory(input) {
    input = input.toLowerCase();
    
    // Add new category detections
    if (input.includes("jhuk") || input.includes("pair")) return "humiliation";
    if (input.includes("pooja") || input.includes("chum")) return "footWorship";
    if (input.includes("gaali") || input.includes("abuse")) return "verbalAbuse";
    if (input.includes("dimag") || input.includes("psychological")) return "psychological";

    return null;
}