module.exports = (app) => {
    app.get("/", async (request, response) => {
        try {
            response.status(200).send('API-Listener is up !');
        } catch (error) {
            response.status(500).send(error);
        }
    })

    app.post("/api/run-jobs", async (request, response) => {
        try {
            console.log('/api/run-jobs is called..')
            console.log('Processing ', request.body, '\n')
        } catch (error) {
            response.status(500).send(error);
        }
    })
}