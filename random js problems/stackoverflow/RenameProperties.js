// https://stackoverflow.com/questions/60282315/renaming-object-properties-in-an-array-of-objects/
const data = {
    invoices: [
        {
            Date: '2018-12-18T00:00:00.000Z',
            InvoiceNumber: '59'
        },
        {
            Date: '2018-12-18T00:00:00.000Z',
            InvoiceNumber: '59'
        }
    ]
};

function renameProperty(arr) {}

var changed = data.invoices.map(function(item) {
    return {
        Date: item.Date,
        CreditNoteNumber: item.InvoiceNumber
    };
});

// beautiful variant
// var changed = data.invoices.map(
//     ({ Date, InvoiceNumber: CreditNoteNumber }) => ({ Date, CreditNoteNumber })
// );

console.log(changed);
