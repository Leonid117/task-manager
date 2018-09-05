angular.module('app').factory('cardFactory', function () {
    var service = {};
    function ls() {
        localStorage.setItem('qwe', JSON.stringify(cards));
        // retriveCards = localStorage.getItem('qwe');
        // cards1 = JSON.parse(retriveCards);
        // console.log('cards1: ',cards1);
    }

    if(localStorage.key('qwe') !== null){
        retriveCards = localStorage.getItem('qwe');
        cards1 = JSON.parse(retriveCards);
        cards = cards1;
    }
    else {
        var cards = [
            {
                id: 1,
                name: 'qweqwe',
                description: 'Fix bug in player',
                list_id: 1,
                priority: 'medium',
                date: '15 April 2018'
            },
            {
                id: 2,
                name: 'qweqwe1',
                description: 'Add feature with D3',
                list_id: 4,
                priority: 'high',
                date: '12 April 2018'
            },
            {
                id: 3,
                name: 'qweqwe2',
                description: 'Learn AngularJS',
                list_id: 3,
                priority: 'normal',
                date: '12 April 2018'
            },
            {
                id: 4,
                name: 'qweqwe1',
                description: 'Add feature with D3',
                list_id: 2,
                priority: 'high',
                date: '12 April 2018'
            }
        ];
        ls();
    }




    service.getCards = function (list) {
       if(list) {return _.filter(cards, {list_id: list.id});}
       return cards;
    };


    service.deleteCard = function (card) {
        return _.pull(cards, card);
    };

    service.updateCard = function (updatingCard, priority, list) {
        var card = _.findWhere(cards, {id: updatingCard.id});
        card.name = updatingCard.name;
        card.description = updatingCard.description;
        card.list_id = updatingCard.list_id;
        if (priority) card.priority = priority;
        ls();

    };

    service.createCard = function (list, cardDescription, cartName) {
        ls();
            retriveCards = localStorage.getItem('qwe');
            cards = JSON.parse(retriveCards);
            if (cartName.length > 0) {
            ids = _.reduce(cards, function (memo, item) {
                memo.push(item.id);
                return memo;
            }, []);
            maxId = _.max(ids);
            console.log('cards = ', cards);
            cards.push({
                id: maxId+1,
                name: cartName,
                description: cardDescription,
                list_id: 1,
                priority: 'medium',
                date:  new Date()
            });
            ls();
        }

        // dragndrop after creating card

        (function ($) {
            'use strict';

            $(document).ready(function() {
                $('.m-tasks__items').each(function () {
                    Sortable.create(this, {
                        group: ".m-tasks__items",
                        sort: true,
                        handle: '.m-tasks__item-name',
                        animation: 150,
                        onEnd: function (evt) {
                            var itemEl = evt.item;  // dragged HTMLElement
                            evt.to;    // target list
                            evt.from;  // previous list
                            evt.oldIndex;  // element's old index within old parent
                            evt.newIndex;  // element's new index within new parent
                            var cardId = jQuery(itemEl).attr('id');

                            var curListId = jQuery(itemEl).closest('.m-tasks__column').attr('id');
                            function lsp() {
                                var retriveCards = localStorage.getItem('qwe');
                                var cards = JSON.parse(retriveCards);
                                var card = _.find(cards, function (item) {
                                    return item.id === + cardId;
                                });
                                card.list_id = +curListId;
                                localStorage.setItem('qwe', JSON.stringify(cards));
                            }
                            lsp();
                            console.log('curListId = ', curListId);
                        }
                    });
                });
            });
        })(jQuery);

    };
    return service;
});
