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
})
function Buscar(){
    return(
        <View style={styles.container}>
         <SafeAreaView >
                <ScrollView>
                <Text style={{ margin: 30, fontSize:24,color:"#2a3078" }}>Buscar Publicacion</Text>
          
          <Formik
            initialValues={{
              nombre:'',
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
                  placeholder="Barito"
                
                />

                   
                {formikProps.isSubmitting ? (
                  <ActivityIndicator />
                ) : (
                  <View style={styles.bot}>
                    <Button title="Buscar" onPress={formikProps.handleSubmit} />
                    </View>
                )}
              </React.Fragment>
            )}
          </Formik>
                  
               
                </ScrollView>
            </SafeAreaView>  
                    

        </View>
    )
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
        overflow: 'hidden',
        margin: 10,
        flex:1,

    },
    detalles:{
        marginTop:20,
        marginBottom:20,
    },
    titleBar:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16,
        alignSelf: 'flex-end',
        marginTop:10
      },
    
});