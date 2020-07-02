import React, {useState}from 'react'
import {  View,
    StyleSheet,
    Text,
    Modal,
    Button,
    Dimensions,
    ScrollView,
    SafeAreaView,
<<<<<<< HEAD
    TextInput} from 'react-native'
//import MaterialText from '../components/material-textfieldFilled';
import IconAnt from 'react-native-vector-icons/AntDesign' 
//import Localizacion from '../components/Localizacion'
import MapaTripo from '../components/MapaTripo'
import { Formik } from 'formik';
import * as yup from 'yup';

=======
    TextInput,
    ActivityIndicator} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign' ;
import MapaTripo from '../components/MapaTripo';
import { Formik } from 'formik';
import * as yup from 'yup';


>>>>>>> moha
const validationSchema = yup.object().shape({
    horario: yup
    .string()
    .label('Horario')
    .required(),
    telefono: yup
<<<<<<< HEAD
    .string()
=======
    .number()
>>>>>>> moha
    .label('Telefono')
    .required(),
    web: yup
    .string()
    .label('Web')
<<<<<<< HEAD
    .required()
    .min(7, 'Seems a bit short...')
    .max(11, 'We prefer insecure system, try a shorter password.'),
    
=======
    .required(),
    ubicacion: yup
    .string()
    .label('Ubicacion')
    .required()
>>>>>>> moha
    
  });
function Description(props){

    const [open, setOpen ]=  useState(false);
    const [ubi, setUbi]= useState('test')

     function abrirMapa  () {
           return ( setOpen(true))
        
        
    }

   function okCoordenadas(){
    setOpen(false);
    let a = JSON.stringify(props.coordinate)
    setUbi(a)
    }
    
    return (
<<<<<<< HEAD
        
       

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
=======
       <View style={styles.container}> 
         <ScrollView>
            <SafeAreaView>
                 <View>
                <Text  style={{ marginLeft: 30,marginBottom: 30, fontSize:24,color:"#2a3078" }}>Datos de Publicación: </Text>
                </View>
             <Formik
                    initialValues={
                        {
                            horario :'', telefono: '', web:''
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
                            formikKey="horario"
                            placeholder="9-12 "
                        
                        />
                            <IconAnt name='phone' style={styles.icono}/>
                            <StyledInput
                            label="Teléfono"
                            formikProps={formikProps}
                            formikKey="telefono"
                            placeholder="11-35456678"
                        
                        />
                        <IconAnt name='tag' style={styles.icono}/>
                            <StyledInput
                            label="Web"
                            formikProps={formikProps}
                            formikKey="web"
                            placeholder="Centro Cultural Buenos Aires"
                        
                        />  

                        <IconAnt name='earth' style={styles.icono}/>
                            <StyledInput
                            label="Ubicacion"
                            formikProps={formikProps}
                            formikKey="ubicacion"
                            placeholder="seleciona un punto en el globo"
                            value={ubi}
                        />    
                            

                   <View  style={{alignContent: "center", marginLeft:100}}>
                        <IconAnt name='earth' style={{fontSize:40}} onPress={abrirMapa}/> 
                        <Text  style={{ marginLeft: 10,marginBottom: 10, fontSize:15,color:"#2a3078" }}>Agrega las coordenadas !{ubi}</Text>
                    </View>

                    {formikProps.isSubmitting ? (
                          <ActivityIndicator />
                        ) : (
                          <View style={styles.bot}>
                            <Button title="Publicar" onPress={formikProps.handleSubmit} />
                            </View>
                        )}
                   <Modal style={styles.container}
>>>>>>> moha
                                   animationType="slide"
                                   transparent={false}
                                   visible={open}
                                   >
<<<<<<< HEAD
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
=======

                            <Button title='Cancelar' style={{margin:10}} onPress={()=> setOpen(false)} />
                            <Button title='OK' style={{margin:10}} onPress={okCoordenadas}/>
                            <MapaTripo style={styles.mapStyle}/>
                               
                            
                            
                    </Modal>

                        
                   </React.Fragment>
                )}
                   

                 </Formik>
            </SafeAreaView>
         </ScrollView>
    </View>
    )}


const FieldWrapper = ({ children, label, formikProps, formikKey }) => (
    <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
    <Text style={{ marginBottom: 3 }}>{label}</Text>
    {children}
    <Text style={{ color: 'red' }}>
        {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
    </Text>
    </View>
);

const StyledInput = ({ label, formikProps, formikKey, ...rest }) => {
    const inputStyles = {
      borderWidth: 2,
      borderColor: 'grey',
      backgroundColor:"rgba(192,192,192,0.3)",
      marginBottom: 5,
      fontSize:20
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
>>>>>>> moha

  //establece el nombre del input y toma el valor del input

<<<<<<< HEAD
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
=======
  
>>>>>>> moha
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
        width:300, //Dimensions.get('window').width,
        height: 800,//Dimensions.get('window').height,
        marginTop:200
      },
      container3: {
        flex:1,
        justifyContent:"center",
    
      },
<<<<<<< HEAD
      container: {
        flex:1,
        justifyContent:"center",
    
      },
=======
>>>>>>> moha
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