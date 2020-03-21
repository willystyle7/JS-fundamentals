// https://stackoverflow.com/questions/59769454/how-to-convert-array-of-objects-to-objects-as-required
let billHeader = [
    {
        billno: 'A1',
        companyid: 'AAAA',
        pending: 'Y',
        cancelled: 'N',
        salesman: 'admin',
        netamount: '225.0000',
        billdate: '2020-01-16',
        billtime: '11:15:29'
    },
    {
        billno: 'A2',
        companyid: 'AAAA',
        pending: 'Y',
        cancelled: 'N',
        salesman: 'admin',
        netamount: '1500.0000',
        billdate: '2020-01-16',
        billtime: '11:18:29'
    }
];

let billInfo = [
    {
        billno: 'A1',
        itemcode: '1002',
        companyid: 'AAAA',
        unitprice: '125.0000',
        itemname: 'MANCHOW NV SOUP',
        quantity: '1.0000',
        totalamount: '125.0000',
        categoryname: 'SOUP'
    },
    {
        billno: 'A1',
        itemcode: '1001',
        companyid: 'AAAA',
        unitprice: '100.0000',
        itemname: 'MANCHOW V SOUP',
        quantity: '1.0000',
        totalamount: '100.0000',
        categoryname: 'SOUP'
    },
    {
        billno: 'A2',
        itemcode: '1001',
        companyid: 'AAAA',
        unitprice: '300.0000',
        itemname: 'MANCHOW V SOUP',
        quantity: '2.0000',
        totalamount: '600.0000',
        categoryname: 'SOUP'
    },
    {
        billno: 'A2',
        itemcode: '1003',
        companyid: 'AAAA',
        unitprice: '300.0000',
        itemname: 'Name Item',
        quantity: '3.0000',
        totalamount: '6300.0000',
        categoryname: 'SOUP'
    }
];

function outletBills(billHeader, billInfo) {
    return {
        module: 'outletbills',
        status: 'success',
        billinfo: billHeader.map(billHeaderEntry => {
            return {
                ...billHeaderEntry,
                billitems: billInfo.filter(
                    billInfoEntry =>
                        billHeaderEntry.billno === billInfoEntry.billno
                )
            };
        })
    };
}

console.log(outletBills(billHeader, billInfo));
