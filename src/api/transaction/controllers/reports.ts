export default {
    async balance(ctx, next) { // called by GET /hello 

        //@ts-ignore
        var a = await strapi.db.connection.raw(`
            select 
                sum(value)
            from transactions t 
            
            inner join transactions_bank_links tbl on tbl.transaction_id  = t.id 

            where tbl.bank_id = ${ctx.request.params['bankId']}
            `)


        ctx = {
            'balance': a.rows[0]['sum']
        }




        return ctx;
    },
};