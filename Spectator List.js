/**
 * Spectator list
 * @type {array}
 */

var spectators = [];

/**
 * Add spectators to list
 */

const getSpectators = () => {
    let players = Entity.GetPlayers();
    let client = Entity.GetLocalPlayer();
    let clientTarget = Entity.GetProp(client, "DT_BasePlayer", "m_hObserverTarget");

    spectators = [];

    for (let i = 0; i < players.length; i++) {
        let player = players[i];

        if (!player || Entity.IsAlive(player)) continue;
        let spectator = Entity.GetProp(player, "DT_BasePlayer", "m_hObserverTarget");
        if (!spectator || spectator == "m_hObserverTarget") continue;

        if (Entity.IsAlive(client)) {
            if (spectator == client) spectators.push(Entity.GetName(player));
        } else {
            if (spectator == clientTarget) spectators.push(Entity.GetName(player));
        };
    };
};

/**
 * Draw spectators on screen
 */

const drawSpectators = () => {
    let screen = Render.GetScreenSize();
	let font = Render.AddFont("Verdana", 8, 100);

	for (let i = 0; i < spectators.length; i++){
		let name = spectators[i];
		let size = Render.TextSizeCustom(name, font);
		Render.StringCustom((screen[0] - size[0] - 15, (i * 20) + 5), 0, name, [255, 255, 255, 255], font);
	};
};

/**
 * Reset spectators at end of round.
 */

const onRoundStart = () => {
    spectators = [];
};

/**
 * Register callbacks in OneTap
 */

Cheat.RegisterCallback("Draw", "getSpectators");
Cheat.RegisterCallback("Draw", "drawSpectators");
Cheat.RegisterCallback("round_start", "onRoundStart");