const regex_rule = /\b(Apple)+\b/g

const fruit = 'Apple, Banana, Kiwi, Apple, Orange'

for (const match of fruit.matchAll(regex_rule)){
    console.log(match)
}

// Would print 2 findings because Apple is there two times