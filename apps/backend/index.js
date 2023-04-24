import fastify from "fastify";
import fastifyCors from "@fastify/cors"
import got from "got"
const app = fastify({ logger: true });

app.register(fastifyCors, { origin: true })

app.get('/playlists', async (request, reply) => {
    const response = await got('https://api.deezer.com/chart/0/playlists?limit=20')
    reply.send(response.body)
})

app.get('/playlist/:id', async (request, reply) => {
    const response = await got('https://api.deezer.com/playlist/' + request.params.id)
    reply.send(response.body)
})

app.listen({
    port: 3000,
}, (err, address) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`server listening on ${address}`)
})