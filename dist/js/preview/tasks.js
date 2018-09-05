(function ($) {
  'use strict';
    var newListId;
    window.onload = function() {


    $('.m-tasks__items').each(function () {
      Sortable.create(this, {
        group: ".m-tasks__items",
          // sort: true,
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
              function ls() {
                  var retriveCards = localStorage.getItem('qwe');
                  var cards = JSON.parse(retriveCards);
                  var card = _.find(cards, function (item) {
                      return item.id === + cardId;
                  });
                  card.list_id = +curListId;
                  localStorage.setItem('qwe', JSON.stringify(cards));
              }
              ls();

              console.log('curListId = ', curListId);
          }
      });
    });

  }
})(jQuery);
