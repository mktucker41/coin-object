let coin = {
    state: 0,
    flip: function () {
        this.state = Math.round(Math.random())
    },
    toString: function () {
        if (this.state) {
            return "Heads"
        } else {
            return "Tails"
        }
    },
    toHTML: function () {
        let image = document.createElement('img');
        if (this.state) {
            image.src = "images/heads.jpg"
        } else {
            image.src = "images/tails.jpg"
        }
        return image;
    }
};
function display20Flips() {
    for (let index = 0; index < 20; index++) {
        coin.flip()
        document.body.append(coin.toString(), " ")
    }
}
display20Flips()
function display20Images() {
    for (let index = 0; index < 20; index++) {
        coin.flip()
        document.body.append(coin.toHTML())
    }
}
display20Images()