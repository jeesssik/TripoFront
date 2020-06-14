import * as React from 'react';
import 'react-native-gesture-handler';
import { Button,Text } from 'react-native-paper';
import {  View,StyleSheet,SafeAreaView, ScrollView,ImageBackground  } from 'react-native'
import Titulo from '../components/titulo';
import TxtImput from '../components/textimput'
import Chec from '../components/check'



class Registro extends React.Component{
 
    constructor(){
      super();
      this.state={
        usuario:'',
        password:'',
        userError:'',
        passwordError:'',
        email :'',
      }
    }
  
    submit(){
  
      if(this.state.nombre==undefined || this.state.nombre==""){
        this.setState({nombreError:"El nombre no puede estar vacio"})
      }else{
        this.setState({nombreError:""})
      }



      if(this.state.apellido==undefined || this.state.apellido==""){
        this.setState({apellidoError:"El apelldo no puede estar vacio"})
      }else{
        this.setState({apellidoError:""})
      }


      if(this.state.dni==undefined || this.state.dni==""){
        this.setState({dniError:"El dni no puede estar vacio"})
      }else{
        this.setState({dniError:""})
        TxtImput.estado='true'
      }

      if(this.state.fnac==undefined || this.state.fnac==""){
        this.setState({fnacError:"La fecha de nacimiento no puede estar vacio"})
      }
      else{
        this.setState({fnacError:""})
      }



      if(this.state.usuario==undefined ||this.state.usuario==""){
        this.setState({userError:"El usuario no puede estar vacio"})
      }else{
        this.setState({userError:""})
      }


      if(this.state.password==undefined || this.state.password==""){
        this.setState({passwordError:"El password no puede estar vacio"})
      }
      else{
        this.setState({passwordError:""})
      }

      if(this.state.email==undefined || this.state.email==""){
        this.setState({emailError:"El email no puede estar vacio"})
    }else{
        this.setState({emailError:""})
      }


    }
    
  
  
   
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
                    <SafeAreaView >
                        <ScrollView >
                        
                            <Titulo content='Registrarme' />
            
                            <TxtImput defecto='Nombre' valor={(text)=>{this.setState({nombre:text})}}  />
                            <Text style={{color:'darkred', marginLeft:40}}>{this.state.nombreError}</Text>
                            <TxtImput defecto='Apellido' valor={(text)=>{this.setState({apellido:text})}}/>
                            <Text style={{color:'darkred', marginLeft:40}}>{this.state.apellidoError}</Text>
                            <TxtImput defecto='DNI' valor={(text)=>{this.setState({dni:text})}}/>
                            <Text style={{color:'darkred', marginLeft:40}}>{this.state.dniError}</Text>
                            <TxtImput defecto='Fecha de Nacimiento' valor={(text)=>{this.setState({fnac:text})}}/>
                            <Text style={{color:'darkred', marginLeft:40}}>{this.state.fnacError}</Text>
                            <TxtImput defecto='Usuario'  valor={(text)=>{this.setState({usuario:text})}}  />
                            <Text style={{color:'darkred', marginLeft:40}}>{this.state.userError}</Text>
                            <TxtImput defecto='Contraseña' valor={(text)=>{this.setState({password:text})}} seguridad={true}/>
                            <Text style={{color:'darkred', marginLeft:40}}>{this.state.passwordError}</Text>
                            <TxtImput defecto='e-mail' valor={(text)=>{this.setState({email:text})}}/>
                            <Text style={{color:'darkred', marginLeft:40}}>{this.state.emailError}</Text>
                        
                            <View  style={{marginLeft:40, marginTop:16, flexDirection:"row"}}>
                                <Chec/>
                                <Text style={{marginLeft:4, marginTop:10, color:"darkblue", textDecorationLine:"underline"}}  onPress={this.props.onPress1}>Acepto Términos y condiciones</Text>
                            </View>
                            

                            <View style={styles.bot}>
                            <Button mode="text" onPress={()=>{this.submit()}} >
                                <Text style={{fontSize:17, color:'darkblue'}}>Registrarme</Text>
                            </Button>
        
                            </View>    
                            
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </ImageBackground> 
        </View>

  
    )
  }
}

const styles = StyleSheet.create({
  
    container: {
        flex:1,   

    },
    container2: {
        flex:1,
        justifyContent:"center",
  
      },
    bot:{
        marginTop:20, 
        flexDirection:'row',
        justifyContent: 'center'
    }
    
});

export default Registro