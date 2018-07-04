var sidebar = require('../helpers/sidebar'),
    ImageModel = require('../models').Image;
    
module.exports = {
    index: function(req, res){
        var viewModel = {
            images: []
        };

        ImageModel.find({},{},{sort: {timestamp: -1}},
            function(err, images){
                if(err){throw err;}
                viewModel.images = images;
                sidebar(viewModel, function(viewModel){
                    res.render('index', viewModel);
                });
        });   
    }
};
// var viewModel ={
        //     images: [
        //         {
        //             uniqueId: 1,
        //             title: 'Sample Image 1',
        //             description: 'First Image',
        //             filename: 'sample1.jpg',
        //             views: 0,
        //             likes: 0,
        //             timestamp: Date.now
        //         },
        //         {
        //             uniqueId: 2,
        //             title: 'Sample Image 2',
        //             description: 'Second Image',
        //             filename: 'sample2.jpg',
        //             views: 0,
        //             likes: 0,
        //             timestamp: Date.now
        //         },
        //         {
        //             uniqueId: 3,
        //             title: 'Sample Image 3',
        //             description: 'Third Image',
        //             filename: 'sample3.jpg',
        //             views: 0,
        //             likes: 0,
        //             timestamp: Date.now
        //         },
        //         {
        //             uniqueId: 4,
        //             title: 'Sample Image 4',
        //             description: 'Fourth Image',
        //             filename: 'sample4.jpg',
        //             views: 0,
        //             likes: 0,
        //             timestamp: Date.now
        //         }
        //     ]
        // };