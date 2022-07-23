from flask import Flask, render_template, request, redirect, url_for, session
import numpy as np
import joblib
app = Flask(__name__)
model = joblib.load('model.pkl')
@app.route('/')
def home():
	return render_template('index.html')
@app.route('/predict', methods=['POST'])
def predict():
    if request.method=='POST':
        f1 = float(request.form['f1'])
        f2 = float(request.form['f2'])
        f3 = float(request.form['f3'])
        f4 = float(request.form['f4'])
        f5 = float(request.form['f5'])
        f6 = float(request.form['f6'])
        f7 = float(request.form['f7'])
        f8 = float(request.form['f8'])
        f9 = float(request.form['f9'])
        f10 = float(request.form['f10'])
        f11 = float(request.form['f11'])
        f12 = float(request.form['f12'])
        f13 = float(request.form['f13'])
        feature_array = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13]
        feature = np.array(feature_array).reshape(1,-1)
        prediction = model.predict(feature)
        if prediction==0:
            prediction='No Heart Disease Found'
        else:
            prediction='Heart Disease Found'
        return render_template('index.html', prediction='{}'.format(prediction))
if __name__ == "__main__":
    app.run(debug=True)