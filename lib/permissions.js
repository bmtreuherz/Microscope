/**
 * Created by bradley on 6/8/15.
 */
//checks taht the userId specefied owns the documents
ownsDocument = function(userId, doc){
    return doc && doc.userId === userId;
}