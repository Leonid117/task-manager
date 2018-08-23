angular.module('app').controller('cardCtrl', function (cardFactory) {
    var cardCtrl = this;
    this.isEditing = false;
    this.editingCard = null;

    this.deleteCard = function (card) {
        cardFactory.deleteCard(card);
    };

    this.getCards = function () {
        return cardFactory.getCards();
    };
    this.editCard = function (card) {
        this.isEditing = true;
        this.editingCard = angular.copy(card);
        console.log('editingCard=', this.editingCard);
    };

    cardCtrl.updateCard = function (card, priority) {
        console.log('card=', card);
        cardFactory.updateCard(card, priority);
        cardCtrl.editingCard = null;
        cardCtrl.isEditing = false;
        console.log('priority=', priority);

    };

});
