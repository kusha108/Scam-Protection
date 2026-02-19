import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

# ---- Expanded Dataset ----
scam_messages = [
    "Your bank account has been suspended. Verify immediately.",
    "Click here to claim your reward of $1000.",
    "Urgent: Your ATM card will be blocked. Update KYC now.",
    "Pay Rs.199 to release your courier package.",
    "Your Paytm KYC expired. Update now to avoid suspension.",
    "Confirm your password now to secure your account.",
    "You have won a free iPhone. Click here to claim.",
    "Suspicious login detected. Verify your identity.",
    "Claim your tax refund by entering your bank details.",
    "Your parcel is on hold. Pay customs fee immediately."
]

safe_messages = [
    "Your order has been shipped successfully.",
    "Meeting scheduled tomorrow at 11 AM.",
    "Please find attached your payslip for September.",
    "Lunch at 1 PM in cafeteria.",
    "Payment of Rs.450 received successfully.",
    "Project update meeting moved to 4 PM.",
    "Your OTP is 928351. Do not share it with anyone.",
    "Your subscription renewal has been processed.",
    "Invoice attached for your recent purchase.",
    "Welcome to your new job at TechCorp!"
]

messages = scam_messages + safe_messages
labels = [1] * len(scam_messages) + [0] * len(safe_messages)  # 1 = scam, 0 = safe

# ---- TF-IDF with bigrams ----
vectorizer = TfidfVectorizer(stop_words='english', ngram_range=(1, 2))
X = vectorizer.fit_transform(messages)

# ---- Naive Bayes model ----
model = MultinomialNB()
model.fit(X, labels)

# ---- Save model + vectorizer ----
with open('model.pkl', 'wb') as file:
    pickle.dump((model, vectorizer), file)

print("✅ Model trained successfully and saved as 'model.pkl'")
