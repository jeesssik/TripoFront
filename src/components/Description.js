
import React, {useState}from 'react'
import {  View,
    StyleSheet,
    Text,
    Modal,
    Button,
    Dimensions,
    ScrollView,
    SafeAreaView,
    TextInput} from 'react-native'
//import MaterialText from '../components/material-textfieldFilled';
import IconAnt from 'react-native-vector-icons/AntDesign' 
//import Localizacion from '../components/Localizacion'
import MapaTripo from '../components/MapaTripo'
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    horario: yup
    .string()
    .label('Horario')
    .required(),
    telefono: yup
    .string()
    .label('Telefono')
    .required(),
    web: yup
    .string()
    .label('Web')
    .required()
    .min(7, 'Seems a bit short...')
    .max(11, 'We prefer insecure system, try a shorter password.'),
    
    
  });
function Description(props){

    const [open, setOpen ]=  useState(false);


     function abrirMapa  () {
           return ( setOpen(true))
        
        
    }
    return (
        
       

        <View style={styles.container}> 
        <ScrollView>
            <SafeAreaView>
            <View>
                <Text  style={styles.text}>Datos de Publicación: </Text>
            </View>
            <Formik
            initialValues={
                {
                    hora :'', telefono: '', web:''
                }
            }
           
            onSubmit={(values, actions) => {
                alert(JSON.stringify(values));
                setTimeout(() => {
                  actions.setSubmitting(false);
                }, 1000);
              }}
              validationSchema={validationSchema}
            >
                {formikProps =>(
                    <React.Fragment>
                    <IconAnt name='clockcircle' style={styles.icono}/>
                    <StyledInput
                     label="Horario"
                     formikProps={formikProps}
                     formikKey="Horario"
                     placeholder="9-12 "
                   
                   />
                    <IconAnt name='phone' style={styles.icono}/>
                    <StyledInput
                     label="Telefono"
                     formikProps={formikProps}
                     formikKey="Telefono"
                     placeholder="11-35456678"
                   
                   />
                   <IconAnt name='tag' style={styles.icono}/>
                    <StyledInput
                     label="Web"
                     formikProps={formikProps}
                     formikKey="Web"
                     placeholder="Centro Cultural Buenos Aires"
                   
                   />    
                   <View  style={{alignContent: "center", marginLeft:130}}>
                        <IconAnt name='earth' style={{fontSize:40}} onPress={abrirMapa}/> 
                    </View>

                   <Modal style={styles.mapStyle}
                                   animationType="slide"
                                   transparent={false}
                                   visible={open}
                                   >
                            <MapaTripo style={styles.mapStyle}>
                               <Button title='Cancelar' style={{margin:10}} onPress={()=> setOpen(false)} />
                               <Button title='OK' style={{margin:10}} onPress={()=> setOpen(false)}/>
                            </MapaTripo>
                       
                        </Modal>

                        {formikProps.isSubmitting ? (
                          <ActivityIndicator />
                        ) : (
                          <View style={styles.bot}>
                            <Button title="Publicar" onPress={formikProps.handleSubmit} />
                            </View>
                        )}
                   </React.Fragment>
                )}
                   

            </Formik>
            </SafeAreaView>
            </ScrollView>
        </View>
    
      )  }


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
/*const StyledSwitch = ({ formikKey, formikProps, label, ...rest }) => (
  <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
    <Switch
      value={formikProps.values[formikKey]}
      onValueChange={value => {
        formikProps.setFieldValue(formikKey, value);
      }}
      {...rest}
    />
  </FieldWrapper>
);*/
const styles = StyleSheet.create({
  
    container: {
      flex:1,
      flexDirection:'column'
    },
    icono:{
        fontSize:20
    },
    iconosInputs:{
        flex:1
    },
    text: {
        
        fontSize:25,
        color: 'black'

    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
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

export default Description