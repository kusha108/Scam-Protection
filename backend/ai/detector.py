from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


MODEL_PATH = os.path.join(os.path.dirname(__file__), 'model.pkl')


try:
    with open(MODEL_PATH, 'rb') as model_file:
        model, vectorizer = pickle.load(model_file)
    print("✅ Model and vectorizer loaded successfully!")
except Exception as e:
    print(f"❌ Error loading model: {e}")
    model, vectorizer = None, None



def is_scam(text):
    if not model or not vectorizer:
        return False, 0.0

    text_features = vectorizer.transform([text])
    prediction = model.predict(text_features)[0]
    probabilities = model.predict_proba(text_features)[0]
    scam_prob = float(probabilities[1] * 100)

    print("\n--- DEBUG INFO ---")
    print("Text:", text)
    print("Prediction:", prediction)
    print("Scam Probability:", scam_prob)

    
    return (scam_prob > 60), scam_prob


@app.route('/detect', methods=['POST'])
def detect():
    data = request.get_json()
    text = data.get('text', '').strip()

    if not text:
        return jsonify({"error": "No text provided"}), 400

    scam, scam_prob = is_scam(text)

    return jsonify({
        "isScam": bool(scam),        
        "probability": round(scam_prob, 2),
        "message": "⚠️ Scam detected!" if scam else "✅ This looks safe."
    })


if __name__ == '__main__':
    
    app.run(host='127.0.0.1', port=5001, debug=True)
