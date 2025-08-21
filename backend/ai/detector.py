from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)

# Load the trained model and vectorizer
with open('model.pkl', 'rb') as model_file:
    model, vectorizer = pickle.load(model_file)

# Define the detection function
def is_scam(text):
    text_features = vectorizer.transform([text])
    prediction = model.predict(text_features)
    return prediction[0] == 1

@app.route('/detect', methods=['POST'])
def detect():
    data = request.json
    text = data.get('text', '')
    scam = is_scam(text)
    return jsonify({'isScam': scam, 'message': 'Scam detected!' if scam else 'This looks safe.'})

if __name__ == '__main__':
    app.run(port=5001)
