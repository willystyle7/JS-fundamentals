let nums = [];
for (let i1 = 0; i1 <= 20; i1++) {
    for (let i2 = 0; i2 <= 20; i2++) {
        for (let i3 = 0; i3 <= 20; i3++) {
            for (let i4 = 0; i4 <= 20; i4++) {
                let arr = [i1, i2, i3, i4];
                let uniquearr = [...new Set(arr)];
                if (uniquearr.length == 4) {
                    if (i1*i1*i1 + i2*i2*i2 === i3*i3*i3 + i4*i4*i4) {
                        console.log('num: ', i1*i1*i1 + i2*i2*i2, 'i1-',i1,'i2-',i2,'i3-',i3,'i4-',i4);
                    }
                }
            }
        }
    }
}