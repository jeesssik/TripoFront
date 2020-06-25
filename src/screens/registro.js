import React from 'react';
import {
  SafeAreaView,
  StyleSheet, ImageBackground,
  Button,
  ActivityIndicator,
  ScrollView,
  View,
  Switch,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Text,TextInput} from 'react-native-paper';
import Titulo from '../components/titulo';



const validationSchema = yup.object().shape({
  nombre: yup
  .string()
  .label('Nombre')
  .required(),
  apellido: yup
  .string()
  .label('Apellido')
  .required(),
  dni: yup
  .string()
  .label('DNI')
  .required()
  .min(7, 'Seems a bit short...')
  .max(11, 'We prefer insecure system, try a shorter password.'),
  usuario: yup
  .string()
  .label('Usuario')
  .required()
  .min(2, 'Un poco corto...')
  .max(10, 'Un poco largo...'),
  fnac: yup
  .date()
  .label('Fecha de Nacimiento')
  .required(),
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
  confirmPassword: yup
    .string()
    .required()
    .label('Confirm password')
    .test('passwords-match', 'Passwords must match ya fool', function(value) {
      return this.parent.password === value;
    }),
  agreeToTerms: yup
    .boolean()
    .label('Terms')
    .test(
      'is-true',
      'Must agree to terms to continue',
      value => value === true
    ),
});

export default class Registro extends React.Component {
  
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
            <SafeAreaView>
              <ScrollView>
                  <Titulo content='Tripo' /> 
                  <Text style={{ marginLeft: 30,marginBottom: 30, fontSize:24,color:"#2a3078" }}>Registro</Text>
          
                  <Formik
                    initialValues={{
                      nombre:'', apellido:'', dni:'', usuario:'', fnac:'',
                      email: '', password: '', confirmPassword: '',
                      agreeToTerms: false,
                    }}
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

                        <StyledInput
                          label="Nombre"
                          formikProps={formikProps}
                          formikKey="nombre"
                          placeholder="Pedro"
                        
                        />

                        <StyledInput
                          label="Apellido"
                          formikProps={formikProps}
                          formikKey="apellido"
                          placeholder="Pascal"
                        
                        />
                        <StyledInput
                          label="DNI"
                          formikProps={formikProps}
                          formikKey="dni"
                          placeholder="3.444.555"
                        
                        />
                        <StyledInput
                          label="Usuario"
                          formikProps={formikProps}
                          formikKey="usuario"
                          placeholder="Mandalorian"
                        
                        />

                        <StyledInput
                          label="Fecha de Nacimiento"
                          formikProps={formikProps}
                          formikKey="fnac"
                          placeholder="05/23/1987"
                        
                        />
                        <StyledInput
                          label="Email"
                          formikProps={formikProps}
                          formikKey="email"
                          placeholder="johndoe@example.com"
                          
                        />

                        <StyledInput
                          label="Password"
                          formikProps={formikProps}
                          formikKey="password"
                          placeholder="password"
                          secureTextEntry
                        />

                        <StyledInput
                          label="Confirm Password"
                          formikProps={formikProps}
                          formikKey="confirmPassword"
                          placeholder="confirm password"
                          secureTextEntry
                        />

                            <View  style={{marginLeft:40, marginTop:16, flexDirection:"row"}}>
                                <Text style={{ marginTop:10, color:"darkblue", textDecorationLine:"underline", width:200}}  onPress={this.props.onPress1}> Términos y condiciones</Text>
                               
                            </View>
                            <StyledSwitch
                            formikKey="agreeToTerms"
                            formikProps={formikProps}
                          />

                            
                        {formikProps.isSubmitting ? (
                          <ActivityIndicator />
                        ) : (
                          <View style={styles.bot}>
                            <Button title="Registrarme" onPress={formikProps.handleSubmit} />
                            </View>
                        )}
                      </React.Fragment>
                    )}
                  </Formik>
            </ScrollView>
            </SafeAreaView>
          </View>
      </ImageBackground>
    </View>

);
 }
 }

 //textos de error para los inputs
const FieldWrapper = ({ children, label, formikProps, formikKey }) => (
  <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
    <Text style={{ marginBottom: 3 }}>{label}</Text>
    {children}
    <Text style={{ color: 'red' }}>
      {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
    </Text>
  </View>
);

//estilo de los inputs
const StyledInput = ({ label, formikProps, formikKey, ...rest }) => {
  const inputStyles = {
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor:"rgba(192,192,192,0.3)",
    marginBottom: 3,
  };

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderColor = 'red';
  }

  return (
    <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
      <TextInput
        style={inputStyles}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
    </FieldWrapper>
  );
};

//establece el nombre del input y toma el valor del input
const StyledSwitch = ({ formikKey, formikProps, label, ...rest }) => (
  <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
    <Switch
      value={formikProps.values[formikKey]}
      onValueChange={value => {
        formikProps.setFieldValue(formikKey, value);
      }}
      {...rest}
    />
  </FieldWrapper>
);

const styles = StyleSheet.create({
  
  container: {
    flex:1,
    justifyContent:"center",

  },
  container2: {
    flex:1,
    justifyContent:"center",

  },
  bot:{
    marginTop:20, 
    marginBottom:20,
    flexDirection:'row',
    justifyContent: 'center'
},
  
});
