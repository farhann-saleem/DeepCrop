from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np, os

app = Flask(__name__)
CORS(app)  # Allow React frontend to talk to Flask backend

model = load_model("model.keras")
labels = ["Healthy", "Early Blight", "Late Blight"]

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    f = request.files["file"]
    fpath = os.path.join("temp", f.filename)
    os.makedirs("temp", exist_ok=True)
    f.save(fpath)

    img = image.load_img(fpath, target_size=(128, 128))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, 0) / 255.0

    preds = model.predict(img_array)
    idx = int(np.argmax(preds[0]))
    conf = float(np.max(preds[0]))

    return jsonify({
        "label": labels[idx],
        "confidence": round(conf * 100, 2)
    })

if __name__ == "__main__":
    app.run(port=5000, debug=True)
