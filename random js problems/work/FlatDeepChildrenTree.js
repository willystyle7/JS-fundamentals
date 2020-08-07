let configs = require('./configs.json');

function getFlatChildren(configs) {
    return Object.keys(configs).map((webConfig) => {
        return {
            text: `${getWebConfigPath(webConfig)}`,
            data: {
                key: webConfig,
                type: 'json',
                platform: 'platform',
                path: getWebConfigPath(webConfig),
                schema: {}
            },
        };
    });
}

function getDeepChildren(configs) {
    let arrKeys = Object.keys(configs).map(webConfig => {
        let chunkedPath = webConfig.split('/ocweb/')[1].split('/');
        return {
            key: webConfig,
            chunkedPath: chunkedPath
        };
    });
    return getChildrenRecursive(arrKeys);
}

function getChildrenRecursive (arrKeys) {
    let children = [];
    let dirNodes = JSON.parse(JSON.stringify(arrKeys)).filter(config => config.chunkedPath.length > 1);
    let mapByFirstDir = {};
    // add directories
    dirNodes.forEach(conf => {
        // let firstDir = conf.chunkedPath.shift();
        let firstDir = conf.chunkedPath[0];
        conf.chunkedPath = conf.chunkedPath.slice(1);
        if (!mapByFirstDir.hasOwnProperty(firstDir)) {
            mapByFirstDir[firstDir] = [];
        }
        mapByFirstDir[firstDir].push(conf);
    });
    Object.keys(mapByFirstDir).forEach(dir => {
        children.push({
            text: dir,
            state: { expanded: true },
            data: { type: 'directory' },
            children: getChildrenRecursive(mapByFirstDir[dir])
        });
    });
    // add leaves json
    let leafNodes = arrKeys.filter(conf => conf.chunkedPath.length === 1).map(config => {
        return {
            text: config.chunkedPath[0],
            data: {
                key: config.key,
                type: 'json',
                platform: 'sdp', // ???
                path: getWebConfigPath(config.key),
                schema: {} // ???
            }
        }
    });
    leafNodes.forEach(config => {
        children.push(config);
    });
    // children = children.concat(leafNodes);
    return children
}

function getWebConfigPath (webConfig) {
    return '/ocweb/' + webConfig.split('/ocweb/')[1];
}

// console.log(getFlatChildren(configs));
console.log(JSON.stringify(getDeepChildren(configs), null, 4));
