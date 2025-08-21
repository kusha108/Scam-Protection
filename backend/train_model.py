import pickle
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

# Sample data (you'll need much more data for real-world usage)
messages = [
    "You won a $1000 gift card!",
    "Important account verification needed!",
    "Your package has been shipped.",
    "Click here to claim your free iPhone!"
]
labels = [1, 1, 0, 1]  # 1 for scam, 0 for non-scam

# Convert text to features using CountVectorizer
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(messages)

# Train the model
model = MultinomialNB()
model.fit(X, labels)

# Save the trained model and vectorizer
with open('model.pkl', 'wb') as model_file:
    pickle.dump((model, vectorizer), model_file)

print("Model trained and saved as 'model.pkl'")
