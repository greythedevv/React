import './App.css'
import {Welcome} from './Welcome'
import {Button} from './Button'
import  {Product} from "./products"
import { Greeting } from './Greeting'
import {UserDetails} from './userDetails'
import { ProductList } from './productList'
import { NameList } from './nameList'
import { Alert } from './alert'
import {CustomButton} from "./customButton"
import { ActionButton } from './actionButton'
import { SubbmitButton } from './subbmitButton'
import { SuscribeButton } from './susscribeButton'

function App() {

  return <div>
    <SuscribeButton/>
    <ActionButton/>
    <SubbmitButton/>
    <CustomButton/>
    <Alert >Your changes have been saved!</Alert>
     <Alert type="error">Something went wrong!</Alert>
    <NameList/>
    <ProductList/>
    <UserDetails name='babatunde' isOnline={true} isPremium={true} isNew={true}/>
     <UserDetails name='Adewole' isOnline={false} />
    <Greeting name='Bruce' message='Good Morning'/>
    <Greeting name='Clark'/>
    <Greeting message='Welcome'/>
    <Greeting/>


    <h1>Welcome to react course</h1>
    <Welcome />
    <Product title ="how to become"
         price={200} 
         inStock={true} 
         categories={["Electronics","Computers", "Gaming"]}/>
    <Button/>
  </div>
   
}

export default App
