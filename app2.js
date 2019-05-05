const http = require('http');
const hostname = 'localhost';
const port = 3007;

var friends2 = require("./friends2.json"); // Once for all times


const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html');
    response.write(
        '<!DOCTYPE html> \n' +
        '<html lang="en"> \n' +
        '        <head> \n' +
        '               <meta charset="utf-8"> \n' +
        '               <meta http-equiv="X-UA-Compatible" content="IE=edge"> \n' +
        '               <meta name="viewport" content="width=device-width, initial-scale=1"> \n' +
        '               <meta name="description" content="Home Page"> \n' +
        '               <meta name="author" content="Carlos Arias"> \n' +
        '               <title>Netcentric Computing Home Page</title> \n' +
        '               <!-- Bootstrap core CSS --> \n' +
		'				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">\n' +
        '       </head> \n' +
        '        <body> \n' +
        '               <div class="container" style="text-align: center"> \n' +
        '               <h1>Another Example of Node</h1><br> \n'

    );
	var currentDate = new Date();
    response.write(
        '               <p>Current time is: ' + currentDate + '</p>'
    );
    response.write(
        '               <table class="table table-bordered table-hover"> \n' +
        '                       <thead> \n' +
        '                               <tr> \n' +
        '                                       <th scope="col">First Name</th> \n' +
        '                                       <th scope="col">Last Name</th> \n' +
        '                                       <th scope="col">Phone</th> \n' +
        '                                       <th scope="col">Gender</th> \n' +
        '                               </tr> \n' +
        '                       </thead> \n' +
        '                       <tbody> \n'
    );

          for (var j in friends2["boys"])
            response.write(
                  '                               <tr> \n' +
                  '                                       <td>' + friends2["boys"][j]["firstName"] + '</td> \n' +
                  '                                       <td>' + friends2["boys"][j]["lastName"] + '</td> \n' +
                  '                                       <td>' + friends2["boys"][j]["phone"] + '</td> \n' +
                  '                                       <td>Boy</td> \n' +

                  '                               </tr> \n'
              );


            for (var f in friends2["girls"])
	            response.write(
	                '                               <tr> \n' +
	                '                                       <td>' + friends2["girls"][f]["firstName"] + '</td> \n' +
	                '                                       <td>' + friends2["girls"][f]["lastName"] + '</td> \n' +
	                '                                       <td>' + friends2["girls"][f]["phone"] + '</td> \n' +
                  '                                       <td>Girl</td> \n' +

	                '                               </tr> \n'
	            );

	    response.write(
	        '                       </tbody> \n' +
	        '               </table> \n'
	    );
	    response.write(
	        '       </body> \n' +
	        '</html> \n'
	    );
	    response.end();

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
