var program = require('commander');


var Title1 = "Poems";
var Author1 = "Elizabeth Boshop";
var Price1 = 18.95;
var Kind1 = "Paperback"

var Title2 = "Why Grow Up?";
var Author2 = "Susan Neiman";
var Price2 = 16.95;
var Kind2 = "Paperback"

var Title3 = "De achtertuin";
var Author3 = "Jan Wolkers";
var Price3 = 5.00;
var Kind3 = "Hardcover"

var Title4 = "Berlijn";
var Author4 = "Rory MacLean";
var Price4 = 10.00;
var Kind4 = "Paperback"

var Title5 = "De greppel";
var Author5 = "Herman Koch";
var Price5 = 21.99;
var Kind5 = "Hardcover"


program
  .version('0.0.1')
  .option('-T, --Title [String]', 'Title of the book', 'null') 
  .option('--Author [String]', 'Author of the book', 'null')
  .option('-P, --Price', 'Price of the Book', 'null')
  .parse(process.argv);							

switch(program.Title) 
	{
	case(Title1):
		console.log(Title1);
		console.log(Author1);
		console.log(Price1);
		console.log(Kind1)
		break;
	case(Title2):
		console.log(Title2);
		console.log(Author2);
		console.log(Price2);
		console.log(Kind2)
		break;
	case(Title3):
		console.log(Title3);
		console.log(Author3);
		console.log(Price3);
		console.log(Kind3)
		break;
	case(Title4):
		console.log(Title4);
		console.log(Author4);
		console.log(Price4);
		console.log(Kind4)
		break;
	case(Title5):
		console.log(Title5);
		console.log(Author5);
		console.log(Price5);
		console.log(Kind5)
		break;
	default:
		console.log('empty');
		break;
	
	}

console.log("---->" + program.Author);

switch(program.Author) 
	{
	case(Author1):
		console.log("Title" + Title1);
		console.log(Author1);
		console.log(Price1);
		console.log(Kind1)
		break;
	case(Author2):
		console.log(Title2);
		console.log(Author2);
		console.log(Price2);
		console.log(Kind2)
		break;
	case(Author3):
		console.log(Title3);
		console.log(Author3);
		console.log(Price3);
		console.log(Kind3)
		break;
	case(Author4):
		console.log(Title4);
		console.log(Author4);
		console.log(Price4);
		console.log(Kind4)
		break;
	case(Author5):
		console.log(Title5);
		console.log(Author5);
		console.log(Price5);
		console.log(Kind5)
		break;
	case("null"):
		break;
	default:
		console.log('empty');
		break;

	}
switch(program.Price)
	{
	case(Price1):
		console.log(Title1);
		console.log(Author1);
		console.log(Price1);
		console.log(Kind1)
		break;
	case(Price2):
		console.log(Title2);
		console.log(Author2);
		console.log(Price2);
		console.log(Kind2)
		break;
	case(Price3):
		console.log(Title3);
		console.log(Author3);
		console.log(Price3);
		console.log(Kind3)
		break;
	case(Price4):
		console.log(Title4);
		console.log(Author4);
		console.log(Price4);
		console.log(Kind4)
		break;
	case(Price5):
		console.log(Title5);
		console.log(Author5);
		console.log(Price5);
		console.log(Kind5)
		break;
	default:
		console.log('empty');
		break;		
}