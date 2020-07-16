import React from 'react';
import {
  SafeAreaView,ActivityIndicator, View, StyleSheet,ImageBackground,Button, AsyncStorage 
} from 'react-native';
import { Text,TextInput} from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import api from '../apiconecc'
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
  //verificar con ivan la estructura de la clase 

  render(){
    
  const {navigation} = props;

  //le pagamos a servidor, guardamos el token, agregamos el token al config
  //usamos el metodo formik.handle que antes estaba en "iniciar sesion"
  //hacemos el navigate a la pantalla de publicaciones ! 
  const handleSub = async () =>{
  let r = api.get('/signIn?userName=' +userName.value + "&contrasenia="+contrasenia.value).
  then(function(res){
      if (res.data.status != "error"){
          let token = res.data.token
          api({
          method: 'get',
          url: '',
          headers:{
            Authorization: 'Bearer'+ token
          }
        }).then(function (response){
          formikProps.handleSubmit
          console.log(response.data)
          let userMD = response.data
          navigation.navigate('Publicaciones', {
            user: userMD, //le pasamos el token a la siguiente pantalla en este caso publicaciones
            token: token
          });
        }).catch(function(error){
          console.log(error)
        })
       
      }else {
        console.log(res.data.messages);
      }
    }).catch(function (error){
      console.log(error);
      
    })
  };
  
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
            initialValues={{ userName: '', contrasenia: '' }}
            onSubmit={(values, actions) => {
                let nav = this.props.navigation
                axios.post('https://immense-scrubland-96694.herokuapp.com/login/signin', values)
                
                .then(function(response) {
                  if (response.data.status != "error"){
                    let token = response.data.token
                    axios({
                      method: 'get',
                      url: 'https://immense-scrubland-96694.herokuapp.com/users/user/'+values.userName,
                      headers: { 
                        'Authorization': 'Bearer ' +  token,
                    }
                      
                }).then(function(res){

                  console.log(JSON.stringify(res.data));
                  nav.navigate('BotTabNav')

                  }).catch(function (error) {
                    console.log(error);
              });
                  }else {
                    console.log(res.data.messages);
                  }}).catch(function(e){
                    console.log(e);
                  });
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
                      <Button title="Iniciar Sesión" onPress={handleSub} />
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
