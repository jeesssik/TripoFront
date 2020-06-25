import React from 'react';
import {
  SafeAreaView,ActivityIndicator, View, StyleSheet,ImageBackground,Button 
} from 'react-native';
import { Text,TextInput} from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';


import Titulo from '../components/titulo';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .label('Email')
    .email()
    .required(),
  password: yup
    .string()
    .label('Password')
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
        <View style={styles.container2}>
          <Titulo content='Tripo' /> 
          <Text style={{ marginLeft: 30,fontSize:24,color:"#2a3078" }}>Login</Text>
          <SafeAreaView style={{ marginTop: 40 }}>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(values, actions) => {
                alert(JSON.stringify(values));
                setTimeout(() => {
                  actions.setSubmitting(false);
                }, 1000);
              }}
              validationSchema={validationSchema}
            >
              {formikProps => (
                <React.Fragment>
                  <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                    <Text style={{ marginBottom: 3 }}>Email</Text>
                    <TextInput
                      placeholder="johndoe@example.com"
                      style={{
                        backgroundColor:"rgba(192,192,192,0.3)",
                        marginBottom: 3,
                      }}
                      onChangeText={formikProps.handleChange('email')}
                      onBlur={formikProps.handleBlur('email')}
                     // autoFocus
                    />
                    <Text style={{ color: 'darkred' }}>
                      {formikProps.touched.email && formikProps.errors.email}
                    </Text>
                  </View>

                  <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                    <Text style={{ marginBottom: 3 }}>Password</Text>
                    <TextInput
                      placeholder="password"
                      style={{
                        backgroundColor:"rgba(192,192,192,0.3)",
                        marginBottom: 3,
                      }}
                      onChangeText={formikProps.handleChange('password')}
                      onBlur={formikProps.handleBlur('password')}
                      secureTextEntry
                    />
                    <Text style={{ color: 'darkred' }}>
                      {formikProps.touched.password && formikProps.errors.password}
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
  social:{ 
    marginTop: 30, 
    marginLeft:70, 
    marginRight:70,
    marginBottom:30, 
    backgroundColor:'rgba(18, 44, 44, 0.1)', 
    paddingLeft:20, 
    paddingRight:20, 
    paddingBottom:20,
    borderRadius:8,
  },
  Tsocial:{ 
    paddingBottom:20,
    alignSelf : "center" 
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
