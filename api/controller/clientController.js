const clientService = require("../service/clientService");

exports.fetchAll = async (req, res) => {
    try{
        const clients = await clientService.findAll();
        res.status(200).json(clients)
    }
    catch(error){
        res.status(500).json(error)
    }
}
