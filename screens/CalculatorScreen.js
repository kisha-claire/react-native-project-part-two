import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [firstValue, setFirstValue] = useState('');
  
    const handleNumberInput = (num) => {
      if (displayValue === '0') {
        setDisplayValue(num.toString());
      } else {
        setDisplayValue(displayValue + num);
      }
    };
  
    const handleOperatorInput = (operator) => {
      setOperator(operator);
      setFirstValue(displayValue);
      setDisplayValue('0');
    };
  
    const handleEqual = () => {
      const num1 = parseFloat(firstValue);
      const num2 = parseFloat(displayValue);
  
      if (operator === '+') {
        setDisplayValue((num1 + num2).toString());
      } else if (operator === '-') {
        setDisplayValue((num1 - num2).toString());
      } else if (operator === '*') {
        setDisplayValue((num1 * num2).toString());
      } else if (operator === '/') {
        setDisplayValue((num1 / num2).toString());
      }
  
      setOperator(null);
      setFirstValue('');
    };
  
    const handleClear = () => {
      setDisplayValue('0');
      setOperator(null);
      setFirstValue('');
    };
  
    const handleToggleSign = () => {
      setDisplayValue((parseFloat(displayValue) * -1).toString());
    };
  
    const handlePercentage = () => {
      setDisplayValue((parseFloat(displayValue) / 100).toString());
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.displayContainer}>
          <Text style={styles.displayText}>{displayValue}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.gridContainer}>
            <View style={styles.row}>
              {[7, 8, 9, 'C', '%'].map((num) => (
                <TouchableOpacity
                  key={num}
                  style={[
                    styles.button,
                    styles.circularButton,
                    (num === 'C' || num === '%' || num === '=') ? styles.orangeButton : null,
                  ]}
                  onPress={() => (num === 'C' ? handleClear() : num === '%' ? handlePercentage() : num === '=' ? handleEqual() : handleNumberInput(num))}
                >
                  <Text style={[styles.buttonText, styles.whiteText]}>{num}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.row}>
              {[4, 5, 6, '*', '/'].map((num) => (
                <TouchableOpacity
                  key={num}
                  style={[
                    styles.button,
                    styles.circularButton,
                    num === '*' || num === '/' ? styles.operatorButton : null,
                  ]}
                  onPress={() => (num === '*' ? handleOperatorInput('*') : num === '/' ? handleOperatorInput('/') : handleNumberInput(num))}
                >
                  <Text style={[styles.buttonText, num === '*' || num === '/' ? styles.operatorButtonText : styles.whiteText]}>{num}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.row}>
              {[1, 2, 3, '+', '-'].map((num) => (
                <TouchableOpacity
                  key={num}
                  style={[
                    styles.button,
                    styles.circularButton,
                    (num === '+' || num === '-') ? styles.orangeButton : null,
                  ]}
                  onPress={() => (num === '+' ? handleOperatorInput('+') : num === '-' ? handleOperatorInput('-') : handleNumberInput(num))}
                >
                  <Text style={[styles.buttonText, (num === '+' || num === '-') ? styles.whiteText : styles.operatorButtonText]}>{num}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={[styles.button, styles.circularButton]}
                onPress={() => (displayValue.includes('.') ? handleEqual() : handleNumberInput('.'))}
              >
                <Text style={[styles.buttonText, styles.whiteText]}>{displayValue.includes('.') ? '=' : '.'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.zeroButton]}
                onPress={() => handleNumberInput(0)}
              >
                <Text style={[styles.buttonText, styles.zeroButtonText, styles.whiteText]}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.circularButton, styles.orangeButton]}
                onPress={() => handleEqual()}
              >
                <Text style={[styles.buttonText, styles.whiteText]}>=</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.circularButton, styles.orangeButton]}
                onPress={() => handleToggleSign()}
              >
                <Text style={[styles.buttonText, styles.whiteText]}>+/-</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    displayContainer: {
      flex: 2,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      padding: 20,
    },
    displayText: {
      fontSize: 48,
      color: 'white',
    },
    buttonContainer: {
      flex: 3,
      width: '80%',
    },
    gridContainer: {
      flex: 1,
      flexDirection: 'column',
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#141414', 
      elevation: 3,
      margin: 5,
      padding: 20,
    },
    buttonText: {
      fontSize: 32,
    },
    circularButton: {
      borderRadius: 100,
      padding: 20, 
    },
    zeroButton: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#141414', 
      elevation: 3,
      margin: 5,
      padding: 20,
      borderRadius: 10,
    },
    zeroButtonText: {
      fontSize: 32,
      marginLeft: 10,
    },
    operatorButton: {
      backgroundColor: 'orange',
    },
    operatorButtonText: {
      color: 'white', 
    },
    orangeButton: {
      backgroundColor: 'orange',
    },
    whiteText: {
      color: 'white',
    },
  });
  
  export default Calculator;