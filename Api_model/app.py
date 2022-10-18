import warnings
import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt
warnings.filterwarnings("ignore")
from graph import distplots,scatterplots
from flask_cors import CORS
from flask  import Flask,send_file




app = Flask(__name__, static_folder='Front_model/build', static_url_path='')
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/api/dataset')
def read_data():
    df = pd.read_excel('Api_model\Datafile.xlsx', sheet_name= 'Generation')
    data = df.to_json(orient='records')
    return data


@app.route('/api/graph1')
def distplot():
    bytes_obj = distplots()
    return send_file(bytes_obj,download_name='plot.png',mimetype='image/png')


@app.route('/api/graph2')
def scatterplot():
    bytes_obj = scatterplots()
    return send_file(bytes_obj,download_name='plot.png',mimetype='image/png')
    
   


if __name__=="__main__":
    app.run(debug = True)