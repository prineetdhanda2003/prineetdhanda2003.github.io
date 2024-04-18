let LOCAL = false;

let HostName, URI;

if(LOCAL){

    URI = "mongodb://localhost/contacts";
    HostName = "localhost";

} else{
    HostName = "Mongo DB Atlas";
    URI= "mongodb+srv://Bency2506:5BcN72XQNux3vy2c@cluster0.5cz9mf3.mongodb.net/contacts?retryWrites=true&w=majority&appName=Cluster0"

}

export {HostName, URI}

export   const SessionSecret = "INFT2202SessionSecret";


