const { AoiClient, LoadCommands } = require("aoi.js"); // Elleme

const bot = new AoiClient({
    token: "", // " MTA4NDQ5NTg5MDI4ODQ4MDI1Nw.GgpTCW.r3scC8Uo0jKtL87cQvQCs8JG5hlzSiHkBSBmuI
    prefix: "", // " bünyamjn
    intents: ["Guilds", "GuildMessages", "MessageContent"], // İntentler
    events: ["onMessage", "onInteractionCreate"], // Eventler
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./komutlar/") // Komutları Yükler

// Değiskenler
bot.variables ({
  xp:"0"
})
