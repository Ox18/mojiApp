import {
  StatusBar
} from 'react-native';

const style = {
  
  buttonSearch: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#ABEBC6',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 20,
  },
  
  textSearch: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  textInputSearch: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
  },

  previewText : {
  marginBottom: 20,
  color: '#fff',
  fontSize: 20
  },

  previewImage : {
  width: 250,
  height: 250,
  marginTop: 20,
  marginBottom: 20,
  },

  preview:{
    marginTop: 20,
    backgroundColor: '#34495E',
    width: '100%',
    alignItems: 'center',
  },

  viewStyle: { 
    alignItems: 'center',
    justifyContent: 'center' 
  },

  imgStyle:{
    
    color: '#fff',
    fontSize: 20,
    width: 220,
    height: 200,
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    marginBottom: 15,
  },

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  item: {
    marginTop: 5,
    backgroundColor: '#34495E',
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginVertical: 40,
   
  },

  title: {
    fontSize: 30,
    marginVertical: 5,
    color: 'white',
    fontWeight: 'bold',
    
    
  },

  
  
};



export default style;
