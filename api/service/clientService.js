const Client = require("../models/client.model");

exports.findAll = async () => {
    return await Client.findAll();
}

