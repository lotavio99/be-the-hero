const connection = require('../database/conection');
module.exports = {
    async create(request, response){
        const { id } = request.query;
        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();
        if (!ong){
            return response.status(400).send({error: 'No ONG found with this ID'})
        }
        return response.json(ong.name);
    }
}