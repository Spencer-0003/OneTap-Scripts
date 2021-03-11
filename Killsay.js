// Kinda wish I had a skeet invite :cry:

/**
 * Insults
 * @type {object}
 */

const messages = {
    normal: [
        "{victim}, I'd say your aim is cancer but that can actually kill things LOL",
        "NICE AA, RETARD!",
        "Anti aim broken again? LMAO",
        "How's skeet.dmp?",
        "You need to fix your problems, get a rope and a chair you ugly shit",
        "Skill issue",
        "How the fuck did your retarded ass get in my lobby?",
        "HACKER",
        "Hitting P at 3am challenge GONE WRONG GONE SEXUAL AT 3AM!!!",
        "1, 2, 7, 3. COME BEAT THE KIDS WITH ME!"
    ],

    headshot: [
        "Yikes, {victim}, I kinda think your cheat is pasted...",
        "GET ONE TAPPED BITCH.",
        "{victim} can't even hit P.",
        "{victim} gets abused by their parents.",
        "I bet you use LuckyCharms, stupid bastard.",
        "Based",
        "Go take some estrogen tranny",
        "Retard go brr",
        "Holy shit consider refunding your trash paste rofl",
        "OMG STOP HACKING!!!",
        "You like her because she looks like a child, not because she's a loli, fucking nonce."
    ]
};

/**
 * 
 * @param {*} array 
 * @returns string
 */

const getRandomMessage = array => {
    return array[Math.floor(Math.random() * array.length)];
};

/**
 * Insult players in game
 */

const on_player_death = () => {
    let victim = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    let attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
    let headshot = (Event.GetInt("headshot") == 1);

    if (!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Kill Say") || !Entity.IsLocalPlayer(attacker) || attacker === victim) return;

    let message = getRandomMessage(headshot ? messages.headshot : messages.normal).replace("{victim}", Entity.GetName(victim));
    Cheat.ExecuteCommand("say " + message);
};

/* Add UI elements */

UI.AddCheckbox("Kill Say");
Cheat.RegisterCallback("player_death", "on_player_death");
Cheat.print("Kill say loaded. You can now go act like a fucking 12 year old, you sad piece of shit :)");