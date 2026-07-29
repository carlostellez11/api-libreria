const requiredVariables = [
    "MONGO_URI",
    "PORT",
    "APP_TOKEN"
];

requiredVariables.forEach(variable => {

    if(!process.env[variable]){
        console.error(`Missing environment variable: ${variable}`);
        process.exit(1);
    }

});