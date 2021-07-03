# load Flask
import flask, os
import random
import boto3
import numpy as np
import pandas as pd
#import tensorflow as tf
#import keras
from tensorflow.keras.models import load_model
import cv2
#from keras.optimizers import SGD
from flask import Flask, request
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

application = flask.Flask(__name__)
#CORS(application)

#AWS_ACCESS_KEY_NW = os.environ['AWS_ACCESS_KEY_NW']
#AWS_SECRET_ACCESS_NW = os.environ['AWS_SECRET_ACCESS_NW']
AWS_ACCESS_KEY_NW = os.getenv("AWS_ACCESS_KEY_NW")
AWS_SECRET_ACCESS_NW = os.getenv("AWS_SECRET_ACCESS_NW")


s3_resource = boto3.resource(
    service_name = 's3',
    region_name = 'us-east-2',
    aws_access_key_id = AWS_ACCESS_KEY_NW,
    aws_secret_access_key= AWS_SECRET_ACCESS_NW
)


df=pd.read_excel('./Labels_Automated3.xls')

label_string = [
        "Bird",
        "Carnivore",
        "Rodent or Marsupial",
        "Primate",
        "Even - Toed Ungulate",
        "Other(Mammal)",
        "Reptile"
    ]


#load the model
#global graph
#graph = tf.compat.v1.get_default_graph()
model = load_model('AnimalEyeModel5.h5')

#function to prep data for prediction
#def prepare(filepath):
#    img_size = 128
#    img_array = cv2.imread(filepath)
#    new_array = cv2.resize(img_array, (img_size, img_size))
#    return new_array.reshape(-1, img_size, img_size, 3)

def prepare(img_array):
    img_size = 128
    new_array = cv2.resize(img_array, (img_size, img_size))
    return new_array.reshape(-1, img_size, img_size, 3)



categories= [
"Bird",
"Mammal - Carnivora",
"Mammal - Rodentia/Marsupial and similar (Rabbits, Hedgehogs, Moles, Rats, Squirrels, Kangaroos, etc.",
"Mammal - Primates (Apes, Monkeys, Gorillas, Macaque, People, etc.)",
"Mammal - Even-Toed Ungulates and similar (Horses, Deers, Giraffes, Antelopes, Zebras, Cows, Sheep, Pigs, Elephants, Hippos, Rhinos, etc.)",
"Mammal - Other (Whales, Dolphins, Bats, Platypus, Aardvark, Manatees, etc.)",
"Reptile"]

# define a predict function as an endpoint
@application.route("/api/predict", methods=["GET","POST"])
def predict():
    data = {"success": False}

    # get the request parameters
    params = flask.request.json
    if (params == None):
        params = flask.request.args

    # if parameters are found, echo the msg parameter
    if (params != None):
        data["response"] = params.get("msg")
        data["success"] = True

    # if parameters are found, return a prediction
    if (params != None):
        name = request.args['eye_image_name']
        #x = prepare('../data_subset_eye3/monkey_19.jpg')
        bucket= s3_resource.Bucket("animaleyeimages")
        img = bucket.Object(name).get().get('Body').read()
        nparray = cv2.imdecode(np.asarray(bytearray(img)), cv2.IMREAD_COLOR)
        x = prepare(nparray)
        #with graph.as_default():
        #    data["prediction"] = str(model.predict([x]))
        #    data["success"] = True
        prediction = model.predict([x])
        pred=[]
        print(prediction)
        for a in prediction[0]:
            string_pred = str(round(round(float(a),3)*100,3)) + "%"
            pred.append(string_pred)
        data["prediction"] = pred
        data["success"] = True

    # return a response in json format
    #return flask.jsonify(data)
    return data


# define a score function as an endpoint
@application.route("/api/score", methods=["GET","POST"])
def score():
    data = {"success": False}

    # get the request parameters
    params = flask.request.json
    if (params == None):
        params = flask.request.args

    # if parameters are found, echo the msg parameter
    if (params != None):
        data["response"] = params.get("msg")
        data["success"] = True

    # if parameters are found, return a prediction
    if (params != None):
        print("User Guess IS:::::::")
        print(request.args['user_guess'])
        name = request.args['eye_image_name']
        name_clean = name.split(".")[0].split("_")[0]
        try:
            label = int(df.loc[df['Animal'] == name_clean]["Label"].values)
            description = str(df.loc[df['Animal'] == name_clean]["Description"].values)
            show_name = str(df.loc[df['Animal'] == name_clean]["Name"].values)
            order = str(df.loc[df['Animal'] == name_clean]["Order"].values)

            if label == 2:
                label = 1
            elif label == 4:
                label= 2
            elif label ==5:
                label = 3
            elif label ==6:
                label = 4
            elif label ==7:
                label = 5
            elif label ==8:
                label = 6
            elif label ==9:
                label = 7
            if label == int(request.args['user_guess']):
                score = "Correct"
            elif label != int(request.args['user_guess']):
                score = "Incorrect"
            label_name = label_string[int(label - 1)]
        except Exception as err:
            print(err)
            description = "There was an error"
            show_name = "Error"
            order = ""
            score = ""
            label_name = ""
        data["label_name"] = label_name
        data["description"] = description
        data["show_name"] = show_name
        data["order"] = order
        data["score"] = score
        data["success"] = True

    # return a response in json format
    #return flask.jsonify(data)
    return data



def get_new_eye_image():
    filenum = random.randint(1, 3974)
    with open("list_of_eye_images.txt", 'r') as fp:
        for i, line in enumerate(fp):
            if i == filenum:
                filename = line
                break
    return filename.strip('\n')

def get_new_full_image(filename):
    filename2=""
    if filename.endswith("_left.jpg"):
        filename2 = filename.split("_left")[0]
        filename2 = filename2 + '.jpg'
    elif filename.endswith("_right.jpg"):
        filename2 = filename.split("_right")[0]
        filename2 = filename2 + '.jpg'
    return filename2.strip('\n')

@application.route("/api/get_new_im_path", methods=["GET"])
def get_new_im_path():
    data = {"success": False}

    # get the request parameters
    params = flask.request.json
    if (params == None):
        params = flask.request.args

    # if parameters are found, echo the msg parameter
    if (params != None):
        data["response"] = params.get("msg")
        data["success"] = True

    # if parameters are found, return a prediction
    if (params != None):
        print(params)
        new_eye_image_name = str(get_new_eye_image())
        new_full_image_name =str(get_new_full_image(new_eye_image_name))
        if new_eye_image_name =="" or new_full_image_name =="":
            new_eye_image_name = "leopard_65_left.jpg"
            new_full_image_name = "leopard_65.jpg"
        data["new_eye_image_name"] = new_eye_image_name
        data["new_full_image_name"] = new_full_image_name
        #number2= random.randint(1,4)
        #if number2 > 2:
        #    data["new_eye_image_name"] = new_eye_image_name
        #    data["new_full_image_name"] = new_full_image_name
        #else:
        #    data["new_eye_image_name"] = "vervetmonkey_6_left.jpg"
        #    data["new_full_image_name"] = "vervetmonkey_6.jpg"
        data["success"] = True
    return data

# start the flask app, allow remote connections
#app.run(host='0.0.0.0')

if __name__ == "__main__":
    application.run(port=8080)

    #app.run(host='127.0.0.1', port=8001, debug=True)
	#app.run(debug=True)
#for AWS ec2 instance:
#if __name__ == "__main__":
# 	app.run(host= '0.0.0.0', port=8080) # running the app
