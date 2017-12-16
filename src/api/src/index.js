let path = require("path"),
    merge = require("merge"),
    WebService = require("nrcom-ws-core"),
    env = (process.env.NODE_ENV || "dev"),
    basePathConfig = "../config/all/",
    baseEnvPathConfig = "../config/" + env.toLowerCase();

// merge des configurations utilisées par le core ws
let appConfig = new WebService.Utils.Config(merge.recursive(true,
    {},
    // configuration par env
    require(baseEnvPathConfig + "/keycloak.json"),
    require(baseEnvPathConfig + "/logger.json"),
    require(baseEnvPathConfig + "/mongo.json"),
    require(baseEnvPathConfig + "/rabbit.json"),
    require(baseEnvPathConfig + "/elastic.json"),
    // configuration multi env
    require(basePathConfig + "/global.json"),
    require(basePathConfig + "/keycloak.json")
));

// merge des configuration utilisées par l"application
let wsConfig = new WebService.Utils.Config(merge.recursive(true,
    {},
    require("./config/routes.json"),
    require("./config/services.json"),
    require("./config/controllers.json"),
    require("./config/models.json")
));

let ws = new WebService(appConfig);
ws.basePath = path.dirname(__filename);

module.exports = new Promise(function(success, reject) {
    // initialisation
    ws.init()
    .then(function() {
        // chargement de la config d'app
        ws.loadAppComponents(wsConfig);
        // démarrage
        ws.run()
        .then(function() {
            success(ws);
        })
        .catch(function(err) {
            let logger = ws.injector.resolve("Core.Logger");
            logger.error(err);
            reject(err);
        });
    })
    .catch(function(err) {
        let logger = ws.injector.resolve("Core.Logger");
        logger.error(err);
    });
});
