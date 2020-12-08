let pathMask = '/aux0/customer/platform/nodes*.xml';

let patternMask = `^${pathMask.replace(/[.\/]/g, '\\$&').replace(/\*/g, '[^\\/*]*')}$`;

console.log(patternMask);

let rgx = new RegExp(patternMask);

console.log(rgx.test('/aux0/customer/platform/nodes7.xml'));
console.log(rgx.test('vdvdv'));