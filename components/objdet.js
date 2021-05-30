import React, { useState, useEffect } from 'react';

//react native
import { Text, View, Image, StyleSheet, Button, Platform, Dimensions, TouchableOpacity } from 'react-native';


//Expo
import Constants from 'expo-constants';
import { Camera } from 'expo-camera';
import * as Speech from 'expo-speech';

//Tensorflow
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';

//disable yellow warnings on EXPO client!
console.disableYellowBox = true;

export default function Obj({ navigation }) {

    //------------------------------------------------
    //state variables for image/translation processing
    //------------------------------------------------
    const [obj, setObject] = useState('');
    const [predictionFound, setPredictionFound] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);

    //Tensorflow and Permissions
    const [mobilenetModel, setMobilenetModel] = useState(null);
    const [frameworkReady, setFrameworkReady] = useState(false);

    //defaults


    //TF Camera Decorator
    const TensorCamera = cameraWithTensors(Camera);

    //RAF ID
    let requestAnimationFrameId = 0;

    //performance hacks (Platform dependent)
    const textureDims = Platform.OS === "ios" ? { width: 1080, height: 1920 } : { width: 1600, height: 1200 };
    const tensorDims = { width: 152, height: 200 };

    //-----------------------------
    // Run effect once
    // 1. Check camera permissions
    // 2. Initialize TensorFlow
    // 3. Load Mobilenet Model
    //-----------------------------
    useEffect(() => {
        if (!frameworkReady) {
            (async () => {

                //check permissions
                const { status } = await Camera.requestPermissionsAsync();
                console.log(`permissions status: ${status}`);
                setHasPermission(status === 'granted');

                //we must always wait for the Tensorflow API to be ready before any TF operation...
                await tf.ready();

                //load the mobilenet model and save it in state
                setMobilenetModel(await loadMobileNetModel());

                setFrameworkReady(true);
            })();
        }
    }, []);

    //--------------------------
    // Run onUnmount routine
    // for cancelling animation 
    // if running to avoid leaks
    //--------------------------
    useEffect(() => {
        return () => {
            cancelAnimationFrame(requestAnimationFrameId);
        };
    }, [requestAnimationFrameId]);

    //---------------------------------------------------------------


    //-----------------------------------------------------------------
    // Loads the mobilenet Tensorflow model: 
    // https://github.com/tensorflow/tfjs-models/tree/master/mobilenet
    // Parameters:
    // 
    // NOTE: Here, I suggest you play with the version and alpha params
    // as they control performance and accuracy for your app. For instance,
    // a lower alpha increases performance but decreases accuracy. More
    // information on this topic can be found in the link above.  In this
    // tutorial, I am going with the defaults: v1 and alpha 1.0
    //-----------------------------------------------------------------
    const loadMobileNetModel = async () => {
        const model = await mobilenet.load();
        return model;
    }


    //----------------------------------------------------------------------------------------
    // MobileNet tensorflow model classify operation returns an array of prediction objects 
    // with this structure: prediction = [ {"className": "object name", "probability": 0-1 } ]
    // where:
    // className = The class of the object being identified. Currently, this model identifies 1000 different classes.
    // probability = Number between 0 and 1 that represents the prediction's probability 
    // Example (with a topk parameter set to 3 => default):
    // [
    //   {"className":"joystick","probability":0.8070220947265625},
    //   {"className":"screen, CRT screen","probability":0.06108357384800911},
    //   {"className":"monitor","probability":0.04016926884651184}
    // ]
    // In this case, we use topk set to 1 as we are interested in the higest result for
    // both performance and simplicity. This means the array will return 1 prediction only!
    //----------------------------------------------------------------------------------------
    const getPrediction = async (tensor) => {
        if (!tensor) { return; }

        //topk set to 1
        const prediction = await mobilenetModel.classify(tensor, 1);
        console.log(`prediction: ${JSON.stringify(prediction)}`);

        if (!prediction || prediction.length === 0) { return; }

        //only attempt prediction when confidence is higher than 50%
        if (prediction[0].probability > 0.5) {
            console.log(prediction[0].className)
            //stop looping!
            cancelAnimationFrame(requestAnimationFrameId);
            setPredictionFound(true);

            setObject(prediction[0].className)
        }
    }

    //------------------------------------------------------------------------------
    // Helper function to handle the camera tensor streams. Here, to keep up reading
    // input streams, we use requestAnimationFrame JS method to keep looping for 
    // getting better predictions (until we get one with enough confidence level).
    // More info on RAF:
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    //------------------------------------------------------------------------------
    const handleCameraStream = (imageAsTensors) => {

        const loop = async () => {
            const nextImageTensor = await imageAsTensors.next().value;
            await getPrediction(nextImageTensor);
            requestAnimationFrameId = requestAnimationFrame(loop);
        };
        if (!predictionFound) loop();
    }

    //------------------------------------------------------
    // Helper function to reset all required state variables 
    // to start a fresh new  routine! 
    //------------------------------------------------------
    const reset = () => {
        setObject('');
        setPredictionFound(false);
    }



    //--------------------------------------------------------------------------------
    // Helper function to show the Camera View. 
    //
    // NOTE: We are using TensorCamera component which is just a decorated expo.Camera 
    // component with extra functionality to stream Tensors, define texture dimensions
    // and other goods. For further research:
    // https://js.tensorflow.org/api_react_native/0.2.1/#cameraWithTensors
    //--------------------------------------------------------------------------------
    const renderCameraView = () => {
        return <View style={styles.cameraView}>
            <TensorCamera
                style={styles.camera}
                type={Camera.Constants.Type.back}
                zoom={0}
                cameraTextureHeight={textureDims.height}
                cameraTextureWidth={textureDims.width}
                resizeHeight={tensorDims.height}
                resizeWidth={tensorDims.width}
                resizeDepth={3}
                onReady={(imageAsTensors) => handleCameraStream(imageAsTensors)}
                autorender={true}

            />

        </View>;
    }
    console.log("object is called:", obj)


    //pronunciation of the returned object
    const speak = () => {
        Speech.speak(obj, { rate: 0.5 });

    };



    return (

        <View style={styles.container}>
        
                <Text style={styles.title}>
                    KNOW YOUR OBJECT
        </Text>
            

            <View style={styles.body}>

                {renderCameraView()}
                <View style={{ marginTop: 420, textAlign: 'center' }}>

                    <View style={{ marginTop:35, flexDirection: "row", alignContent: "space-between", alignItems: "center" }}>


                        <TouchableOpacity
                            title="DETECT" onPress={reset}>


                            <Image source={require("./screenspics/search.png")}
                                style={{ marginTop: -50, resizeMode: "contain", width: 100, height: 100, alignSelf: "flex-start" }}>
                            </Image>
                        </TouchableOpacity>


                        <Text style={{
            alignSelf:"center",
            flex: 1, 
            fontWeight: '300',
            fontSize: 20,
            letterSpacing: 0.3,
            textTransform: 'uppercase'}}>"{obj}"</Text>


                        <TouchableOpacity onPress={speak} >
                            <Image source={require("./screenspics/speaker.png")}
                                style={{ marginTop: -50, resizeMode: "contain", alignSelf: "flex-end", width: 100, height: 100 }}>
                            </Image>

                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        </View>

    );




}







const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ffb7ba',
    },

    title: {
        margin: 15,
        fontSize: 30,
        textAlign: 'center',
            fontWeight: '400',
            letterSpacing: 0.5,
            textTransform: 'uppercase',
            color:"white"
    },
    body: {
        paddingTop: 15
    },

    cameraView: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        width: '100%',
        height: '100%',
        paddingTop: 5,
        
    },
    camera: {
        width:Dimensions.get('window').width,
        height: Dimensions.get('window').height-275,
        zIndex: 1,
        borderWidth: 0,
        borderRadius: 0,
    },

    wordTextField: {
        textAlign: 'right',
        fontSize: 20,
        marginBottom: 50
    },

    legendTextField: {
        fontStyle: 'italic',
        color: '#888888'
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'purple',
        borderStyle: 'solid',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#ffffff'
    },
});

