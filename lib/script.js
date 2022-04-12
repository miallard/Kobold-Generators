// DOM Variables

var resetButton = document.getElementById('reset-button'),
    koboldName = document.getElementById('name'),
    textarea = document.getElementById('textarea'),
    textarea2 = document.getElementById('textarea2'),
    generate = document.getElementById('gen-button'),
    tacticsButton = document.getElementById('talk-button'),
    tacticsText = document.getElementById('tactics-text');

// Variables
var kobold = {
    name: 'Name',
    age: 0,
    gender: 'M',
    colour: 'Brown',
    quirk: 'Quirky',
    stats: {
        LIF: 5,
        ATK: 1,
        SPD: 1,
        MAG: 1,
    },
};

//Appearance
var firstName = [
    'Snap',
    'Pop',
    'Fzz',
    'Krak',
    'Jib',
    'Jab',
    'Naz',
    'Krast',
    'Kik',
    'Kek',
    'Broz',
    'Jaw',
    'Yelp',
    'Nob',
    'Spike',
    'Swish',
];
var lastName = [
    'snout',
    'scale',
    'dragon',
    'bump',
    'chk',
    'orf',
    'old',
    'nab',
    'ant',
    'chiz',
    '-kek',
    'snib',
    'tail',
    'snap',
    'krik',
    'snip',
];
var gender = 'unassigned';
var age = 0;
var textureList = [
    'Smooth',
    'Soft',
    'Greasy',
    'Slimy',
    'Well-kept',
    'Clean',
    'Dirty',
    'Neat',
    'Tough',
    'Rigged',
    'Bright',
    'Ugly',
    'Unkempt',
    'Jagged',
    'Shiny',
    'Short',
    'Sharp',
    'Dazzling',
    'Shaggy',
];
var colourList = [
    'Red',
    'Brown',
    'Sandy',
    'Blue',
    'Green',
    'Yellow',
    'Teal',
    'Black',
    'Gold',
    'Silver',
    'Grey',
];
var quirkList = [
    'Afraid of the dark',
    'Scared of humans',
    'Thinks they are a real dragon',
    'Wants to take over the world',
    'Wears a boot on their head',
    'Bites their tail nervously',
    'Professional Sheep Chaser',
    'In love with themselves',
    'Uses a weapon much bigger than they are',
    'Single and ready to mingle',
    'Made a dark pact',
    'Lost their tail in a trap',
    'Not aware of their size',
    'Has traveled great distances',
    'Seeks vengeance for the death of their father',
    'Wears a long cloak',
    'Speaks Common',
    'Knows how to read',
    'Wants to be a wizard',
    "Doesn't know the difference between right and wrong",
    'Was once a pirate',
    'Seeks many adventures',
    'Has been chosen for a great destiny'
];

// Stats
var atkStat = 1,
    lifStat = 1,
    spdStat = 1,
    magStat = 1;

// Generators
var genColour = undefined;
var genTexture = undefined;

koboldName.style.display = 'none';
textarea.style.display = 'none';
textarea2.style.display = 'none';

// Reset
resetButton.addEventListener('click', function(){
    textarea.innerText = "";
    textarea2.innerText = "";
    tacticsText.innerText = "";
})

// Kobold Generator
function nameGenerator() {
    let genFirst = Math.random() * firstName.length;
    genFirst = Math.trunc(genFirst);
    let genLast = Math.random() * lastName.length;
    genLast = Math.trunc(genLast);
    genName = firstName[genFirst] + lastName[genLast];
}

function appearanceGenerator() {
    //gender generator (Male, Female, NB)
    gender = Math.random() * 3;
    gender = Math.trunc(gender);
    if (gender === 1) {
        gender = 'Male';
    } else if (gender === 2) {
        gender = 'Female';
} else { 
gender = 'Non-Binary';
    }

    //age generator (between 12-30)
    age = Math.random() * 20;
    age = Math.trunc(age) + 12;

    //scale and style generator
    var genColour = Math.random() * colourList.length;
    genColour = Math.trunc(genColour);
    var genTexture = Math.random() * textureList.length;
    genTexture = Math.trunc(genTexture);
    genDescription =
        genName +
        ' has ' +
        textureList[genTexture].toLowerCase() +
        ' ' +
        colourList[genColour].toLowerCase() +
        ' ' +
        'scales';
}

function quirkGenerator() {
    koboldQuirk = Math.random() * quirkList.length;
    koboldQuirk = Math.trunc(koboldQuirk);
}

function statsGenerator() {
    // generates stats based on kobold appearance
    genTexture = textureList[genTexture];
    genColour = colourList[genColour];

    switch (genColour) {
        case 'Red':
            atkStat = atkStat + 2;
            break;
        case 'Blue':
            magStat = magStat + 2;
            break;
        case 'Brown':
            magStat = magStat + 2;
            break;

        default:
            (atkStat = atkStat),
                (lifStat = lifStat),
                (spdStat = spdStat),
                (magStat = magStat);
    }
}

generate.addEventListener('click', function() {
    nameGenerator();
    appearanceGenerator();
    quirkGenerator();
//  statsGenerator();
    textarea.style.display = 'block';
    textarea.innerText =
        'Name: ' +
        genName +
        '\n Gender: ' +
        gender +
        '\n Age: ' +
        age +
        '\n Description: ' +
        genDescription +
        '\n Quirk: ' +
        quirkList[koboldQuirk];
    textarea2.style.display = 'block';
/*  textarea2.innerText =
        'Stats:' +
        '\n ATTACK: ' +
        atkStat +
        '\n LIFE: ' +
        lifStat +
        '\n SPEED: ' +
        spdStat +
        '\n MAGIC: ' +
        magStat; 
*/
});


// Tactics Generator
tacticsButton.addEventListener('click', function(){
    generateCommand();
})

var cinematic = [       /*0*/   "You hold your head high and say: ", 
        /*1*/   "You ponder it for a moment, then suggest: ",
        /*2*/   "Thinking quickly, you say: ", 
        /*3*/   "With no time to lose, you cry: ", 
        /*4*/   "You adjust your armour and call: ",
        /*5*/   "Waving your sword, you wail: ", 
        /*6*/   "After sizing up your enemy, you yell: ",
        /*7*/   "The sun shining on your scales, you squeak: ", 
        /*8*/   "The rain on your back, you respond: ",
        /*9*/   "You're confident of the best course of action!", 
        /*10*/  "You let out a whoop! ", 
        /*11*/  "Trying not to look stupid, you mutter: ", 
        /*12*/  "Shivering in fright, you whimper: ",
        /*13*/  "You hold your breath and utter: ",
        /*14*/  "You look to the skies and cauterwaul: ",
        /*15*/  "A wry grin on your muzzle, you cackle: ",
        /*16*/  "Convinced things can't possibly get worse, you sigh: ",
        /*17*/  "You quote your father's wise words: ",
        /*18*/  "You bestow some sagely advice: ",
        /*19*/  "You cower behind the nearest rock and yell: ",
        /*20*/  "With no other options, you shut your eyes and scream: "
];
var shouts = [
        /*0*/   'Break their ', 
        /*1*/   'Grab their ',
        /*2*/   'Aim for their ',
        /*3*/   'Kick them in the ',
        /*4*/   'Knock off their ', 
        /*5*/   'Get their ', 
        /*6*/   'Smack \'em in the ',
        /*7*/   'Bash them with your ', 
        /*8*/   'Look out for their ',
        /*9*/   'Take out their ',
        /*10*/  'Boil their ',
        /*11*/  'Watch out for their ',
        /*12*/  'Don\'t underestimate their ',
        /*13*/  'We need to hit their ',
        /*14*/  'We should follow their ',
        /*15*/  'Aim just below their ',
        /*16*/  'Swing for their ',
        /*17*/  'Throw something at their ',
        /*18*/  'Avoid their ',
        /*19*/  'Don\'t worry about their ',
        /*20*/  'Just focus on their '
  ];
var  targets = [
        /*0*/   'Butt', 
        /*1*/   'Shoes',
        /*2*/   'Eyebrows',
        /*3*/   'Arms',
        /*4*/   'Legs',
        /*5*/   'Shins', 
        /*6*/   'Bones',
        /*7*/   'Skulls',
        /*8*/   'Weapons',
        /*9*/   'Coin Purse', 
        /*10*/  'Face',
        /*11*/  'Ears',
        /*12*/  'Nose',
        /*13*/  'Heart',
        /*14*/  'Bag',
        /*15*/  'Feet',
        /*16*/  'Nethers',
        /*17*/  'Big One',
        /*18*/  'Heart',
        /*19*/  'Little One',
        /*20*/  'Thing'
  ];
  
function generateCommand(){
    var genCinematic = Math.random()*cinematic.length;
        genCinematic = Math.trunc(genCinematic);
        genShout = Math.random()*shouts.length;
        genShout = Math.trunc(genShout);
        genTarget = Math.random()*targets.length;
        genTarget = Math.trunc(genTarget);

    tacticsText.innerText = cinematic[genCinematic] + '\n' + '\n  "' + shouts[genShout] + targets[genTarget].toLowerCase() + '!"';    
}  
