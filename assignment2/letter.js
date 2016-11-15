//BUSINESS LETTER

var chance = require('chance').Chance(); 


var wrap = require('word-wrap');


const first = ['DEAR'];

const second = ['ALL', 'COLLEAGUE', 'BOSS', 'SIR/MADAM'];

const adjectives = ['ACCESSIBLE', 'ADVISABLE', 'AVAILABLE', 'BALANCED', 'CANDID', 'HONEST', 'CERTIFIED', 'COOPERATIVE', 'COORDINATED', 'CULTURED', 'DECISIVE', 'DEPLOYABLE', 'STRONG', 'EDUCATED', 'EFFICIENT', 'FAMOUS', 'PERFECT', 'ENTERTAINING', 'IMPATIENT', 'FUNCTIONAL', 'HARD-TO-FIND', 'INEXPANSIVE', 'INTELLIGENT', 'KNOWLEDGEABLE', 'LEARNABLE', 'SELECTIVE', 'STRATEGIC', 'SYMPATHETIC', 'SUSTAINABLE', 'TALENTED', 'THANKFUL', 'VALUABLE', 'WISE', 'EXPANSIVE'];

const nouns = ['ADVANTAGE', 'AGENDA', 'BILL', 'COMPETITION', 'DECISION', 'DIFFERENCE', 'PARTNER', 'EMPLOYEE', 'EMPLOYER', 'DEPARTMENT', 'EXPERIENCE', 'ENJOYMENT', 'FACTORY', 'INDUSTRY', 'KNOWLEDGE', 'MARKET', 'EQUIPMENT', 'PRODUCTION', 'SALARY', 'SALES', 'SCHEDULE', 'TRANSPORT', 'OPINION', 'MISTAKE', 'CUSTOMER', 'BRAND', 'COMMISSION', 'JUDGEMENT', 'DELIVERY', 'ENVIRONMENT', 'DECREASE', 'IMPROVEMENT', 'LIMIT', 'CREDITOR', 'OFFER', 'PAYMENT', 'RESPONSIBILITY', 'WORK'];

const determiner = ['YOUR', 'THE'];

const adverbs = ['FULLY', 'CONSTANTLY', 'PROPERLY', 'PRIMARILY', 'EXTREMELY', 'SLOWLY', 'FORCEFULLY', 'PAINFULLY', 'FREQUENTLY', 'HONESTLY', 'ENTIRELY', 'ABSOLUTELY', 'INTERMINABLY', 'IMPATIENTLY', 'NATURALLY', 'ESSENTIALLY', 'PERSONALLY', 'EFFECTIVELY', 'ORIGINALLY', 'OBVIOUSLY', 'AUTOMATICALLY'];

const verbs = ['ACCEPTS', 'APPROVES', 'BORROWS', 'BUYS', 'CHECKS', 'DECREASES','LOOKS FORWARD TO', 'HOPES FOR', 'DIVIDES', 'FIXES', 'IMPROVES', 'ADVISES', 'AUTHORIZES', 'MAINTAINS', 'REJECTS', 'SENDS', 'PRIZES', 'WRITES', 'PARTICIPATES', 'PROMOTES', 'OBTAINS', 'REDUCES', 'STRUCTURES', 'INFORMS', 'DEVELOPS', 'CALLS', 'BUILDS', 'AFFORDS', 'INVESTS', 'REPLIES'];

const last = ['YOURS'];

const last2 = ['KEENLY', 'FAITHFULLY', 'SINCERELY'];

const name = ['M. vd B', 'MAXIM VAN DEN BROEKE', 'YOUR EMPLOYER', 'YOUR COLLEAGUE'];

function choice(array) {
	var index = chance.natural({'min': 0, 'max': array.length - 1});
	return array[index];
}


function maybe(array) {
	if( chance.bool() ) {
		return choice(array);
	} else {
		return '';
	}
}


function short() {
	return choice(first) + ' ' + choice(second) + ' ';
}


function long() {

	return' MY ' + maybe(adjectives) + ' ' + choice(nouns) + ' ' +
					maybe(adverbs) + ' ' + choice(verbs) + ' ' +
					choice(determiner) + ' ' + maybe(adjectives) + ' ' + choice(nouns) + '. ';
}

function end() {
	return choice(last) + ' ' + choice(last2) + ', ' + '\r' + choice(name) + '. ';
}

function firstend() {
	return ': MY ' + choice(adjectives) + ' ' + choice(nouns) + '. ';
}

console.log('\n\n\n\n');

var text = '';

{
text += short() + '\n';
}
for(var i = 0; i < 4; i++) {

	text += long();
}
{
	text += firstend();
}
{
	text += '\n' + end();
}
console.log(wrap(text, {'width': 65}));

console.log('\n\n\n\n');
