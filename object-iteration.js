// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/

/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/
// MORE HOOTING AND HOLLARING I TELL YOU
export function makeMoreScreamingKeys(someObject) {
    const moreScreamingBois = {};
    for(let key in someObject) {
        let value = someObject[key];
        let upperCaseKey = key.toUpperCase();
        moreScreamingBois[upperCaseKey] = value;
    }
    return moreScreamingBois;
}

/*
Output:
`8truckvroom`
or
`truckvroom8`
or
`truck8vroom`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
}


/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
}
