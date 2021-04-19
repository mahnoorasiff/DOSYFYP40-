import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";


import HeaderForCalorie from "../components/HeaderCalorie";


export default function bmi_calc() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [bmi, setBmi] = useState();
  const [bmiMessage, setBmiMessage] = useState();
  const [start_weight, setStart_weight] = useState();
  const [end_weight, setEnd_weight] = useState();

  const updateWeight = (val) => {
    if (val > 0 || val == "") {
      setWeight(val * 1);
    } else {
      alert("Please enter value greater then 0");
    }
  };

  const updateHeight = (val) => {
    if (val > 0 || val == "") {
      setHeight(val * 1);
    } else {
      alert("Please enter value greater then 0");
    }
  };

  const calculateBMI = () => {
    ans = weight / (height * height);
    ans = Math.round(ans * 10) / 10;
    s_weight = 18.5 * (height * height);
    e_weight = 24.9 * (height * height);
    s_weight = Math.round(s_weight * 100) / 100;
    e_weight = Math.round(e_weight * 100) / 100;
    setBmi(ans);
    setStart_weight(s_weight);
    setEnd_weight(e_weight);

    if (ans >= 18.5 && ans <= 24.9) {
      setBmiMessage("Normal Weight");
    } else if (ans <= 18.4) {
      setBmiMessage("Under Weight");
    } else if (ans >= 25 && ans <= 29.9) {
      setBmiMessage("Over Weight");
    } else if (ans >= 30 && ans <= 34.9) {
      setBmiMessage("Obesity (Class 1)");
    } else if (ans >= 35 && ans <= 39.9) {
      setBmiMessage("Obesity (Class 2)");
    } else if (ans >= 40) {
      setBmiMessage("Obesity (Class 3)");
    }
    setShowModal(true);
  };

  return (
    <View style={styles.container}>
      <HeaderForCalorie title="BMI Calculator" />

      <Modal
        visible={showModal}
        transparent
        onRequestClose={() => setShowModal(false)}
        animationType="fade"
      >
        <View style={styles.centered_model}>
          <View style={styles.modalmainview}>
            <View style={styles.modal_title}>
              <Text
                style={{ fontWeight: "bold", fontSize: 25, color: "white" }}
              >
                BMI
              </Text>
            </View>
            <View style={styles.modal_body}>
              <View style={styles.cvalueModal}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>{bmi}</Text>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  {bmiMessage}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    textAlign: "center",
                    color: "#b8b4b4",
                    marginTop: 5,
                    padding: 15,
                  }}
                >
                  Your Normal Weight Range is {start_weight}
                  kg to {end_weight} kg
                </Text>
              </View>
            </View>
            <Pressable
              style={styles.goback_modalbutton}
              onPress={() => setShowModal(false)}
              android_ripple={{ color: "#fff" }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  alignSelf: "center",
                }}
              >
                GO BACK
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.card2}>
            <Text
              style={{ alignSelf: "center", fontWeight: "bold", fontSize: 15 }}
            >
              Enter Weight :
            </Text>
          </View>
          <TextInput
            keyboardType="numeric"
            style={styles.inputStyle}
            placeholder="in kg"
            onChangeText={(val) => updateWeight(val)}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.card2}>
            <Text
              style={{ alignSelf: "center", fontWeight: "bold", fontSize: 15 }}
            >
              Enter Height :
            </Text>
          </View>
          <TextInput
            keyboardType="numeric"
            style={styles.inputStyle}
            placeholder="in m"
            onChangeText={(val) => updateHeight(val)}
          />
        </View>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            calculateBMI();
          }}
          //style={styles.touchbutton}
          style={
            !weight || !height ? styles.disabledbutton : styles.touchbutton
          }
          disabled={!weight || !height}
        >
          <View>
            <Text style={styles.buttontext}>Calculate</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEFBDD", //pastel green background
  },

  inputHandling: {
    flexDirection: "row",
  },

  calculateCal: {
    marginTop: "10%",
    padding: "3%",
    backgroundColor: "#AFDAA3",
    width: "35%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "30%",
    borderRadius: 10,
    color: "white",
  },

  dropLow: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  picker: {
    width: 300,
    height: 50,
    borderColor: "black",
    borderWidth: 2,
  },
  inputStyle: {
    borderColor: "#4f6349",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginLeft: 50,
    marginBottom: 1,
    width: 150,
    alignSelf: "center",
  },
  card2: {
    //shadowColor: "black",
    //shadowOffset: { width: 0, height: 2 },
    //shadowRadius: 10,
    //shadowOpacity: 0.26,
    //elevation: 5, //android shadow property
    backgroundColor: "#EEFBDD",
    padding: 7,
    margin: 10,
    borderRadius: 10,
    width: 153,
    color: "#4f6349",
  },
  pick: {
    width: 150,
    borderColor: "blue",
    borderWidth: 2,
    textAlign: "center",
    alignSelf: "center",
    padding: 20,
  },
  pickview: {
    borderWidth: 1,
    borderColor: "black",
    //borderRadius: 4
    alignSelf: "center",
    width: 150,
    marginLeft: 50,
  },
  touchbutton: {
    marginTop: "10%",
    padding: "3%",
    backgroundColor: "#4f6349", //dark green
    width: "35%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "33%",
    marginTop: "20%",
    borderRadius: 10,
    color: "white",
    borderColor: "blue",
  },
  disabledbutton: {
    marginTop: "10%",
    padding: "3%",
    backgroundColor: "#6b8563",
    width: "35%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "33%",
    marginTop: "20%",
    borderRadius: 10,
    color: "white",
    borderColor: "blue",
  },
  buttontext: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },

  modalmainview: {
    width: 300,
    height: 300,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#AFDAA3",
    borderRadius: 20,
  },
  centered_model: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  modal_title: {
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AFDAA3", //#AFDAA3 pastel green
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modal_body: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AFDAA3",
  },
  goback_modalbutton: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4f6349",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  cvalueModal: {
    backgroundColor: "white",
    width: 240,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#d4d2d2",
  },
});
