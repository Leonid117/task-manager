angular.module('app').factory('cardFactory', function () {
    var service = {};

    var cards = [
        {
            id: 1,
            name: 'qweqwe',
            description: 'Fix bug in player',
            list_id: 1,
            priority: 'medium',
            time: '12 April 2018'
        },
        {
            id: 2,
            name: 'qweqwe1',
            description: 'Add feature with D3',
            list_id: 1,
            priority: 'high',
            time: '12 April 2018'
        },
        {
            id: 3,
            name: 'qweqwe2',
            description: 'Learn AngularJS',
            list_id: 3,
            priority: 'normal',
            time: '12 April 2018'
        },
        {
            id: 4,
            name: 'qweqwe1',
            description: 'Add feature with D3',
            list_id: 2,
            priority: 'high',
            time: '12 April 2018'
        },
        {
            id: 5,
            name: 'qweqwe1',
            description: 'Add feature with D3',
            list_id: 3,
            priority: 'high',
            time: '12 April 2018'
        },
        {
            id: 6,
            name: 'qweqwe1',
            description: 'Add feature with D3',
            list_id: 4,
            priority: 'high',
            time: '12 April 2018'
        },
        {
            id: 7,
            name: 'qweqwe1',
            description: 'Add feature with D3',
            list_id: 4,
            priority: 'high',
            time: '12 April 2018'
        },
        {
            id: 8,
            name: 'qweqwe1',
            description: 'Add feature with D3',
            list_id: 3,
            priority: 'high',
            time: '12 April 2018'
        },
        {
            id: 9,
            name: 'qweqwe1',
            description: 'Add feature with D3',
            list_id: 2,
            priority: 'high',
            time: '12 April 2018'
        },
        {
            id: 10,
            name: 'qweqwe1',
            description: 'Add feature with D3',
            list_id: 1,
            priority: 'high',
            time: '12 April 2018'
        }
    ];
    cardQty = cards.length;

    service.getCards = function (list) {
        console.log("list=",list);
       if(list) return _.filter(cards, {list_id: list.id});
       return cards;
    };

    service.createCard = function (list, cardDescription, cartName, cardPriority) {
        if (cartName.length > 0) {
            cards.push({
                id: _.uniqueId('card_'),
                name: cartName,
                description: cardDescription,
                list_id: list.id,
                priority: cardPriority
            });
        }
    };

    service.deleteCard = function (card) {
        return _.pull(cards, card);
    };

    service.updateCard = function (updatingCard, priority) {
        var card = _.findWhere(cards, {id: updatingCard.id});
        card.name = updatingCard.name;
        card.description = updatingCard.description;
        card.list_id = updatingCard.list_id;
        if (priority) card.priority = priority;
        // cardQty = cards.length;
    };









    return service;
});
