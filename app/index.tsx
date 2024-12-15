import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'

const index: React.FC = () => {
  const [ft, setft] = useState('')
  const [inch, setinch] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState('')

  const totalInches = (): number => {
    const convertedInches = parseInt(ft) * 12 || 0
    const inputInches = parseInt(inch) || 0
    const total = inputInches + convertedInches
    return total
  }

  const convertedHeight = (): number => {
    const heightInMeter = totalInches() * 0.0254
    return heightInMeter
  }

  const calculateBmi = () => {
    const heightSquare = Math.pow(convertedHeight(), 2)
    const result = parseFloat(weight) / heightSquare
    if (isNaN(result) || !isFinite(result)) {
      setBmi('invalid input')
    } else {
      setBmi(result.toFixed(2))
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <View style={styles.inputSection}>
        <View style={styles.heightContainer}>
          <Text style={styles.label}>Height</Text>
          <View style={styles.heightInputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Feet"
              keyboardType="numeric"
              value={ft}
              onChangeText={setft}
            />
            <TextInput
              style={styles.input}
              placeholder="Inches"
              keyboardType="numeric"
              value={inch}
              onChangeText={setinch}
            />
          </View>
        </View>
        <View style={styles.weightContainer}>
          <Text style={styles.label}>Weight (KG)</Text>
          <TextInput
            style={styles.input}
            placeholder="Weight"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={calculateBmi}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
      <Text style={styles.result}>Your BMI is: {bmi}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  inputSection: {
    width: '100%',
    marginBottom: 30,
  },
  heightContainer: {
    marginBottom: 20,
  },
  heightInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weightContainer: {
    height: 90,
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    color: '#555',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: '500',
    color: '#333',
  },
})

export default index
