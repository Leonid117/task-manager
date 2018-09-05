angular.module('app').controller('cardCtrl', function (cardFactory) {
    var cardCtrl = this;
    this.isEditing = false;
    this.editingCard = null;

    this.deleteCard = function (card) {
        cardFactory.deleteCard(card);
        cards = cardFactory.getCards();
        localStorage.setItem('qwe', JSON.stringify(cards));
    };

    this.getCards = function () {
        return cardFactory.getCards();
    };
    this.editCard = function (card) {
        this.isEditing = true;
        this.editingCard = angular.copy(card);
    };

    this.updateCard = function (card, priority) {
        cardFactory.updateCard(card, priority);
        cardCtrl.editingCard = null;
        cardCtrl.isEditing = false;
    };
});