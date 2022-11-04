export default {
    async balanceQuery(ctx, next) { // called by GET /hello 

        //@ts-ignore
        var a = await strapi.db.connection.raw(`
            select 
                sum(value) as "soma"
            from transactions t 
            
            inner join transactions_bank_links tbl on tbl.transaction_id  = t.id 

            where tbl.bank_id = ${ctx.request.params['bankId']}
            `)


        ctx = {
            'balance': a.rows[0]['soma']
        }

        return ctx;
    },

    async balanceCustom(ctx, next) { // called by GET /hello 

        ctx.body = "teste";
        var teste = await strapi.db.query('api::transaction.transaction').findMany({ // uid syntax: 'api::api-name.content-type-name'
            populate: [

            ],
            where: {

            }

        });
        return ctx;
    }
};