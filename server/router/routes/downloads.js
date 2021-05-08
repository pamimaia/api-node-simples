'use strict';


module.exports = (app, db) => {

    // GET all downloads
    app.get('/downloads', (req, res) => {
        db.downloads.findAll()
            .then(downloads => {
                res.json(downloads);
            });
    });

    // GET one download by id
    app.get('/downloads/:id', (req, res) => {
        const id = req.params.id;
        db.downloads.findOne({
            where: {id: id}
        })
            .then(site => {
                res.json(site);
            });
    });

    // GET download by type
    app.get('/downloads/type/:type', (req, res) => {
        const type = req.params.type;
        db.downloads.findAll({
            where: {type: type}
        })
            .then(download => {
                res.json(download);
            });
    });

    // POST single download
    app.post('/downloads', (req, res) => {
        db.downloads.create(req.body)
            .then(newDownload => {
                res.json(newDownload);
            })
    });

    // PATCH single download
    app.put('/downloads/:id', async (req, res) => {
        const queryById = {where: {id: req.params.id}}
        await db.downloads.update(req.body, queryById)
        const download = await db.downloads.findOne(queryById)
        res.json(download)
    });

    // DELETE single download
    app.delete('/download/:id', (req, res) => {
        const id = req.params.id;
        db.downloads.destroy({
            where: {id: id}
        })
            .then(deletedDownload => {
                res.json(deletedDownload);
            });
    });
};
