
export default {
    routes: [
        {
            method: 'GET',
            path: '/transaction/report/:bankId',
            handler: 'reports.balance',
        }
    ]
}