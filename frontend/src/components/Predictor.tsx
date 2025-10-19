import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const Predictor: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setResult(null);
  };

  const handleSubmit = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://127.0.0.1:5000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(res.data.label);
    } catch {
      alert("Prediction failed. Check backend connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="predictor">
      <h2>Try It Yourself</h2>
      <p>Upload a potato leaf image and let DeepCrop detect the disease.</p>

      <label className="upload">
        <input type="file" accept="image/*" onChange={handleFile} />
        Choose Image
      </label>

      <button onClick={handleSubmit} className="btn" disabled={!file || loading}>
        {loading ? "Predicting..." : "Predict"}
      </button>

      {preview && <img src={preview} alt="preview" className="preview" />}
      {result && <h3 className="prediction">Prediction: {result}</h3>}
    </section>
  );
};

export default Predictor;
