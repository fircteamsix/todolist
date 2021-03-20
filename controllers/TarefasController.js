const Tarefas = require('../models/Tarefas');
module.exports = {
    async store(req, res){
        const { id_condicao, descricao, data_criacao } = req.body;
        const tarefas = await Tarefas.create({ descricao, data_criacao, id_condicao});
        return res.json(tarefas)
    },
    async get(req, res) {
        const tarefas = await Tarefas.findAll();
        return res.json(tarefas)
    },
    async delete(req, res) {
        const { id } = req.params;
        const tarefas = await Tarefas.destroy({ where: { id } });
        return res.json(tarefas)
    },
    async update(req, res) {
        const { id, descricao, id_condicao } = req.body;
        const tarefas = await Tarefas.update({
            descricao,
            id_condicao
        },{
            where: {
                id
            }
        });
        return res.json(tarefas)
    }
}