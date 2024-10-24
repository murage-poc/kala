import random
from flask import Flask

app = Flask(__name__)


quotes = [
    "The best way to predict the future is to invent it.",
    "Life is what happens when you're busy making other plans.",
    "You only live once, but if you do it right, once is enough.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
]


@app.route("/")
def home():
    quote = random.choice(quotes)
    # Probably add bell and whistles to the quote here 😋😋
    return quote


if __name__ == "__main__":
    app.run(debug=True)
