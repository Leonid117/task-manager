angular.module('app').factory('listFactory', function () {
    var service = {};

    var lists = [
        {
            id: 1,
            listName: 'Todo'
        },
        {
            id: 2,
            listName: 'Doing'
        },
        {
            id: 3,
            listName: 'Done'
        },
        {
            id: 4,
            listName: 'qweqwe'
        }
    ];

    service.getLists = function () {
        return lists;
    };

    return service;
});
