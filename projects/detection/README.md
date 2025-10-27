# DeepCrop - AI Potato Disease Detection

## Description
DeepCrop is an advanced machine learning application designed for real-time detection of potato plant diseases. Using deep learning technology, it accurately identifies three conditions: Early Blight, Late Blight, and Healthy potato plants, providing farmers and agriculturists with an efficient tool for crop monitoring and disease management.

## Project Structure
```
DeepCrop/
├── data/                    # Dataset and test images
│   └── test_images/        # Test images for validation
├── notebooks/              # Jupyter notebooks
│   ├── pred.ipynb         # Prediction notebook
│   └── test.ipynb         # Testing and validation notebook
├── src/                   # Source code
│   ├── backend/          # Flask API server
│   │   ├── app.py       # Main server file
│   │   └── requirements.txt
│   └── frontend/        # React TypeScript frontend
│       ├── src/        # Frontend source code
│       ├── public/     # Static assets
│       └── package.json
├── models/              # Trained model files
│   └── model.keras     # Trained Keras model
└── requirements.txt    # Project dependencies
```

## Dataset
The model is trained on the [Plant Village dataset from Kaggle](https://www.kaggle.com/datasets/arjuntejaswi/plant-village), which includes high-quality images of potato plants in various conditions:
- Healthy potato plants
- Early Blight infected plants
- Late Blight infected plants

The dataset ensures robust model performance across different lighting conditions and plant orientations.

Original project repository: [DeepCrop by Farhan Saleem](https://github.com/farhann-saleem/DeepCrop)

## Installation

### Backend Setup
```bash
cd src/backend
pip install -r requirements.txt
```

### Frontend Setup
```bash
cd src/frontend
npm install
```

## Usage

1. Start the backend server:
```bash
cd src/backend
python app.py
```

2. Launch the frontend development server:
```bash
cd src/frontend
npm run dev
```

3. Access the application at `http://localhost:5173`

## Model Details
- Architecture: Convolutional Neural Network (CNN)
- Framework: TensorFlow/Keras
- Input Specifications: 128x128px RGB images
- Output Classes: 3 (Healthy, Early Blight, Late Blight)
- Model Performance:
  - Accuracy: ~96% on test set
  - Low false positive rate
  - Real-time inference capabilities

## Results
The model demonstrates exceptional performance in distinguishing between healthy and diseased potato plants:
- High accuracy in disease detection
- Real-time processing capability
- Robust performance across various lighting conditions
- User-friendly web interface for easy access

## Live Demo
Experience the application in action: [DeepCrop Web App](https://deepcrop.netlify.app)

**Note:** The web deployment currently faces some challenges with model performance and accuracy. We welcome contributions to improve these aspects!

## Contributing
We welcome contributions to improve DeepCrop! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature
3. Follow our coding standards (PEP 8 for Python)
4. Add appropriate documentation and comments
5. Submit a pull request with a clear description of your changes

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Plant Village Dataset providers
- Contributors and maintainers
- Open source community