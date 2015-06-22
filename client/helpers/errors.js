/**
 * Created by bradley on 6/8/15.
 */
Errors = new Mongo.Collection(null);

throwError = function(message){
    Errors.insert({message: message});
};