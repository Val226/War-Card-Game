/***
 * @param: War Card Game
 * @class: Need Card, Deck, Player
 * Also need properies and methods included
 * 
 * Deck:
 *      - 52 cards
 *      - Ace, 2-10, J, Q, K
 *      - Suits: Spades, Hearts, Diamonds, Clubs
 * Need Values
 * Need a way to shuffle
 * Need a way to pass out cards to players
 * 
 * Players:
 *      - Name
 *      - Score
 *      - Hand
 * 
 * Game:
 *      - Need to compare the cards
 * 
 * The completed game should:
 * Deal 26 cards to each player from a deck of 52 cards
 * Iterate through the turns where each Player plays a card
 * The player who played the higher card is awarded a point - Ties result in 0
 * After all cards have been played, display the score and declare the winner
 * 
 */

/**
 * Deck Class Should have:
 *      - An array to store the cards
 *      - An array to store the card ranks
 *      - An array to store all the suits (See Above)
 */


class Deck {
    constructor() {
        this.deck = [];
        this.ranks = [
            "Ace", 
            "2", 
            "3", 
            "4", 
            "5", 
            "6", 
            "7", 
            "8", 
            "9", 
            "10", 
            "Jack", 
            "Queen", 
            "King"
        ];
        this.suits = [
            "Spades ⚔️", 
            "Hearts 💜", 
            "Diamonds 💎", 
            "Clubs ♣️"
        ];
        this.createDeck(); // Create the deck upon initialization
        this.shuffleDeck(); // Shuffle the deck upon initialization
    }
// Time to create the deck!
    createDeck() {
        for (let suit of this.suits) {   // For the suits
            for (let rankIndex = 0; rankIndex < this.ranks.length; rankIndex++) { // Iterate through each rank
                let card = {
                    name: `${this.ranks[rankIndex]} of ${suit}`,
                    value: rankIndex + 1
                };
                this.deck.push(card);
            }
        }
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
}
/**
 * Players, Score & Hand
 * Needs:
 *  - A deck
 *  - Create the deck, shuffle the deck, Pass the deck
 *  - Game Logic:
 *      - Turn based -> How many turns are there?
 *      - How to determine the winner?
 *  - Players (2 Players)
 *        - Name
 *        - Score
 *        - Hand 
 */
class Game {
    constructor() {
        this.deck = new Deck();
        this.player1 = {
            name: "Val",
            score: 0,
            hand: []
        };
        this.player2 = {
            name: "Connor",
            score: 0,
            hand: []
        };
    }
/**
 * Method to play the game:
 * - Passout cards to each player
 * - Take x # of turns
 * - Award points based on the card value
 * - Who is the winner?
 */
    playWar() {
        while (this.deck.deck.length > 0) {
            this.player1.hand.push(this.deck.deck.shift());
            this.player2.hand.push(this.deck.deck.shift());
        }

        for (let i = 0; i < this.player1.hand.length; i++) {
            this.awardPoints(i);
        }

        this.declareWinner();
    }
// Let's Play!
    awardPoints(index) {
        const card1 = this.player1.hand[index];
        const card2 = this.player2.hand[index];

        console.log(`Player 1 Card: ${card1.name}`);
        console.log(`Player 2 Card: ${card2.name}`);

        if (card1.value > card2.value) {
            this.player1.score++;
            console.log('Player 1 wins a point!');
        } else if (card2.value > card1.value) {
            this.player2.score++;
            console.log('Player 2 wins a point!');
        } else {
            console.log('Tie: No points are awarded');
        }

        console.log(`Current Score: Player 1: ${this.player1.score}, Player 2: ${this.player2.score}\n`);
    }

    // Who is the winner?
    declareWinner() {
        if (this.player1.score > this.player2.score) {
            console.log('Player 1 Wins!');
        } else if (this.player1.score < this.player2.score) {
            console.log('Player 2 Wins!');
        } else {
            console.log('It\'s a Tie!');
        }
    }
}

// Let's Play War!
const game = new Game();
game.playWar();
