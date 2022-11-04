export default {
    async balance(ctx, next) { // called by GET /hello 
        ctx.body = 'Hello World!'; // we could also send a JSON

        var teste = await strapi.db.query('api::transaction.transaction').findOne({ // uid syntax: 'api::api-name.content-type-name'

        })


        console.log(teste);

    },
};