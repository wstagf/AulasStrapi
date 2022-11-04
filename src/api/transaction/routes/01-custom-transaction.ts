
export default {
    routes: [
        {
            method: 'GET',
            path: '/transaction/report/:bankId',
            handler: 'reports.balanceQuery',
        },
        {
            method: 'GET',
            path: '/transaction/reportCustom/:bankId',
            handler: 'reports.balanceCustom',
        }
    ]
}