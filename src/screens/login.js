import React from 'react';
import {
  SafeAreaView,ActivityIndicator, View, StyleSheet,ImageBackground,Button 
} from 'react-native';
import { Text,TextInput} from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
const axios = require('axios');

import Titulo from '../components/titulo';

const AppContext = React.createContext({
  token: '',
  userName: ''
}); // creando el contexto

const validationSchema = yup.object().shape({
  userName: yup
    .string()
    .label('userName')
    .required(),
  contrasenia: yup
    .string()
    .label('contrasenia')
    .required()
    .min(2, 'Seems a bit short...')
    .max(10, 'We prefer insecure system, try a shorter password.'),
});

export default class Login extends React.Component {
  
  render(){
    return(
      <View style={styles.container}>
        
        <ImageBackground 
          source={require('../assets/blured.jpg')}
          style={{ flex: 1,
            width: null,
            height: null,
            }}>
            <AppContext.Provider value={AppContext}>
              <View style={styles.container2}>
                <Titulo content='Tripo' /> 
                <Text style={{ marginLeft: 30,fontSize:24,color:"#2a3078" }}>Login</Text>
                <SafeAreaView style={{ marginTop: 40 }}>
                  <Formik
                    initialValues={{ userName: '', contrasenia: '' }}
                    onSubmit={(values, actions) => {                  
                      axios.post('https://immense-scrubland-96694.herokuapp.com/login/signin', values)
                      .then((response) =>{
                        console.log(response.data.token);
                      })
                      .catch(function (error) {
                        console.log(error.response);
                      })
                      .then(function () {
                        // always executed
                      });  
                    }}
                    validationSchema={validationSchema}
                  >
                    {formikProps => (
                      <React.Fragment>
                        <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                          <Text style={{ marginBottom: 3 }}>Usuario</Text>
                          <TextInput
                            placeholder="johndoe@example.com" name='userName'
                            style={{
                              backgroundColor:"rgba(192,192,192,0.3)",
                              marginBottom: 3,
                            }}
                            onChangeText={formikProps.handleChange('userName')}
                            onBlur={formikProps.handleBlur('userName')}
                          // autoFocus
                          />
                          <Text style={{ color: 'darkred' }}>
                            {formikProps.touched.userName && formikProps.errors.userName}
                          </Text>
                        </View>

                        <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                          <Text style={{ marginBottom: 3 }}>Password</Text>
                          <TextInput
                            placeholder="password" name='contrasenia'
                            style={{
                              backgroundColor:"rgba(192,192,192,0.3)",
                              marginBottom: 3,
                            }}
                            onChangeText={formikProps.handleChange('contrasenia')}
                            onBlur={formikProps.handleBlur('contrasenia')}
                            secureTextEntry
                          />
                          <Text style={{ color: 'darkred' }}>
                            {formikProps.touched.contrasenia && formikProps.errors.contrasenia}
                          </Text>
                          <Text                  
                            style={styles.registerTextStyle}
                            onPress={this.props.irme}>
                            ¿No tenés cuenta? Registrate
                          </Text>
                        
                          
                        </View>

                        {formikProps.isSubmitting ? (
                          <ActivityIndicator />
                        ) : (
                          <View style={styles.inputs}>
                            <Button title="Iniciar Sesión" onPress={formikProps.handleSubmit} />
                          </View>
                        )}
                      </React.Fragment>
                    )}
                  </Formik>

                </SafeAreaView>
              </View>
            </AppContext.Provider>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex:1,
    justifyContent:"center",

  },
  container2: {
    flex:1,
    justifyContent:"center",

  },
  inputs:{
    marginTop:60, 
    flexDirection:'row',
    justifyContent: 'center'
  },
  registerTextStyle: {
    marginRight:10,
    color: '#334191',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 14,
  },
  
});
