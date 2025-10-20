
# 🌿 DeepCrop: AI-Powered Potato Disease Detection

**DeepCrop** is a web app that detects **potato leaf diseases** — *Healthy*, *Early Blight*, or *Late Blight* — using a deep learning model built with **TensorFlow**.  
It features a **React + TypeScript** frontend (Netlify) and a **Gradio backend** (Hugging Face Spaces).

---

## 🚀 Overview

DeepCrop helps farmers and researchers identify potato leaf conditions quickly using image-based AI.  
The user uploads a potato leaf image, and the AI model predicts the disease type with confidence.

**Tech Stack**
| Layer | Tools |
|-------|-------|
| Frontend | React · TypeScript · Vite · Axios |
| Backend | Python · TensorFlow · Gradio |
| Hosting | Netlify (UI) · Hugging Face (Model) |

---

## 🧩 Architecture

```text
📸 Upload leaf image
        ↓
🌐 React frontend (Axios)
        ↓
☁️ Hugging Face API (Gradio + TensorFlow)
        ↓
🧠 Model prediction (JSON)
        ↓
✅ Displayed on UI
````

---

## 🖥️ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Build for production

```bash
npm run build
```

### API Call (inside `Predictor.tsx`)

```ts
const res = await axios.post(
  "https://farhan2127-deepcrop.hf.space/run/predict",
  formData,
  { headers: { "Content-Type": "multipart/form-data" } }
);
```

**Live Frontend:**
🔗 [Netlify App](https://68f5f3ba15329b6a118caad3--deep-crop-potato-disease-detection.netlify.app/)

---

## 🤖 Backend (Gradio on Hugging Face)

```python
import gradio as gr
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np

model = load_model("model.keras")
labels = ["Healthy", "Early Blight", "Late Blight"]

def predict(img):
    img = img.resize((128, 128))
    arr = np.expand_dims(image.img_to_array(img) / 255.0, axis=0)
    preds = model.predict(arr)
    idx = np.argmax(preds[0])
    conf = np.max(preds[0]) * 100
    return {"label": labels[idx], "confidence": f"{conf:.2f}%"}

demo = gr.Interface(
    fn=predict,
    inputs=gr.Image(type="pil", label="Upload Potato Leaf"),
    outputs="json",
    title="🌿 DeepCrop: AI Potato Disease Detector",
    description="Upload a potato leaf image to detect Early Blight, Late Blight, or Healthy.",
)

if __name__ == "__main__":
    demo.launch()
```

**Live Model:**
🧠 [Hugging Face Space](https://huggingface.co/spaces/farhan2127/DeepCrop)

---

## 🧰 Folder Structure

```
DeepCrop/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Predictor.tsx
│   │   │   └── InfoSection.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   └── package.json
├── model.keras
├── app.py
├── requirements.txt
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome!

```bash
git clone https://github.com/farhann-saleem/DeepCrop.git
cd DeepCrop/frontend
npm install
npm run dev
```

---

## 📄 License

Released under the **MIT License** — free to use and modify for research or learning.

