// 1. Get the character from URL
const params = new URLSearchParams(window.location.search);
const char = params.get("char");

// 2. Character database
const characters = {
    m1: {
        name: "Morty Smith",
        desc: "Morty is a nervous but big-hearted teen who constantly gets dragged into Rick’s impossible cosmic disasters. He’s clumsy, panics easily, and often complains — but when things get intense, Morty shows real courage and surprising emotional intelligence. He tries to balance school, crushes, and universe-threatening missions… usually failing dramatically.",
        img: "assets/fmorty.png",
        color: "#00E5FF",    // text color
        stroke: "#ffffffff", // stroke color
        evolution: [
            "Morty starts his first interdimensional adventure with Rick.",
            "Morty faces new alien threats and learns to act bravely.",
            "Morty begins to question Rick's choices and gains confidence.",
            "Morty takes leadership in critical missions and shows growth."
        ]
    },
    m2: {
        name: "Summer Smith",
        desc: "Summer Smith is Morty’s confident and resourceful older sister. Often underestimated, she proves time and again that she can handle high-stakes adventures with courage and cleverness. Though she sometimes clashes with Rick’s reckless genius, Summer has her own brand of intelligence and wit, navigating the chaos of interdimensional escapades while managing the challenges of teenage life, social pressures, and family drama.",
        img: "assets/fsummer.png",
        color: "#FF69B4",
        stroke: "#FFF",
        evolution: [
            "Summer joins Rick and Morty on their first chaotic mission.",
            "Summer proves her cleverness and bravery during crises.",
            "Summer navigates interdimensional chaos while helping Morty.",
            "Summer takes charge and shows her growth as a true adventurer."
        ]
    },
    m3: {
        name: "Jerry Smith",
        desc: "Jerry Smith is Morty and Summer’s well-meaning but often hapless father. He struggles to keep up with the chaos brought on by Rick’s interdimensional adventures and his own insecurities. Jerry is clumsy, naive, and constantly seeks approval, yet his sincerity and occasional bursts of courage make him unexpectedly endearing. Despite his frequent failures, he tries to hold his family together, often finding himself in absurd, universe-bending situations he can’t possibly handle.",
        img: "assets/mortydad.png",
        color: "#FFA500",
        stroke: "#ffffffff",
        evolution: [
            "Jerry tries to support his family but often fails hilariously.",
            "Jerry learns to cope with interdimensional chaos.",
            "Jerry begins to show small moments of courage.",
            "Jerry finds unexpected ways to help his family in critical moments."
        ]
    },
    m4: {
        name: "Pickle Rick",
        desc:"Pickle Rick is Rick Sanchez in one of his most outrageous and iconic forms — turned into a pickle to avoid family therapy. Despite being a pickle, he demonstrates his genius-level intellect, resourcefulness, and ruthless determination, taking on deadly traps, rodents, and enemies with makeshift weapons. This form showcases Rick’s chaotic creativity, dark humor, and complete disregard for normal limits, turning a simple pickle into a terrifyingly clever force of nature.",
        img: "assets/picklerick1.png",
        color: "#8B1FD4",
        stroke: "#ffffffff",
        evolution: [
            "Rick turns himself into a pickle to skip therapy.",
            "Pickle Rick fights off deadly rats and enemies in the sewers.",
            "Pickle Rick constructs improvised weapons to survive.",
            "Pickle Rick triumphs in an outrageous and chaotic adventure."
        ]
    }
};

// 3. Get the data for the selected character
const data = characters[char];

// 4. Inject into HTML
const nameEl = document.querySelector(".charchtername");
const descEl = document.querySelector(".chardes");
const charDiv = document.querySelector(".charchterdiv");

nameEl.textContent = data.name;
nameEl.style.color = data.color;
nameEl.style.webkitTextStrokeColor = data.stroke;

descEl.textContent = data.desc;

charDiv.style.backgroundImage = `url(${data.img})`;
charDiv.style.backgroundSize = "contain";
charDiv.style.backgroundPosition = "center";
charDiv.style.backgroundRepeat = "no-repeat";

// 5. Inject Character Evolution for each season
const otEls = document.querySelectorAll(".ot");
if (data.evolution) {
    otEls.forEach((el, i) => {
        el.textContent = data.evolution[i] || "";
    });
}

