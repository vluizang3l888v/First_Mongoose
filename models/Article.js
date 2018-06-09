const mongoose = require("mongoose");
// go to library. 

// structure to access DB. 

let Schema = mongoose.Schema;
// go to page in book. 

// bluePrint. 
// new Schema , new MLA. write in this style. 
let ArticleSchema = new Schema({
    title:{
        type: String, 
        required: true
    },

    link: {
        type: String,
        required: true
    }
    
    // notes: {
    //     //object id, this is the type of data that it is. 
    //     type: Schema.Types.ObjectID,
    //     ref: "Note"

    // }
});
// print this now. 
// now you can use this data. 
let Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;



