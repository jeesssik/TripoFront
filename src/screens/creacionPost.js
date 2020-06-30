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

  direccion: yup
  .string()
  .label('Direccion')
  .required(),

  horario: yup
  .string()
  .label('Horario'),

  descripcion: yup
  .string()
  .label('Descripcion')
  .required(),
  
    
  
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
                  <Text style={{ margin: 30, fontSize:24,color:"#2a3078" }}>Nuevo Lugar</Text>
          
                  <Formik
                    initialValues={{
                      nombre:'', direccion:'', horario:'', descripcion:'',
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
                          placeholder="Barisidro"
                        
                        />

                        <StyledInput
                          label="Dirección"
                          formikProps={formikProps}
                          formikKey="direccion"
                          placeholder="Roque Sáenz Peña 1601"
                        
                        />
                        <StyledInput
                          label="Horario"
                          formikProps={formikProps}
                          formikKey="horario"
                          placeholder="9-23hs"
                        
                        />
                        <StyledInput
                          label="Descripción"
                          multiline={true}
                            numberOfLines={4}
                            blurOnSubmit={true}
                          formikProps={formikProps}
                          formikKey="descripcion"
                          placeholder="Este lugar es la representación de San isidro. La vista al rio es lo mejor; un rio imponente con botes y veleros y una vegetación intacta, autóctona, agreste! Barisidro ofrece esto y su comida es simple pero con buenos ingredientes. El cafe es bueno, los tragos no escatiman bebidas, los platos son abundantes."
                        
                        />

                        

                            
                        {formikProps.isSubmitting ? (
                          <ActivityIndicator />
                        ) : (
                          <View style={styles.bot}>
                            <Button title="Recomendar" onPress={formikProps.handleSubmit} />
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
