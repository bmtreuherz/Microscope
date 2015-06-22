/**
 * Created by bradley on 6/18/15.
 */
Template.postPage.helpers({
    comments: function(){
        return Comments.find({postId: this._id});
    }
});