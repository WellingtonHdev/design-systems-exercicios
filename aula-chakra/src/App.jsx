import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import SocialProfileSimple from './Card'
import { useState } from 'react'

function App() {
const items = [{
  name:"shaolim",
  instagram: "@ShaolimMatadorDePorco",
  about: "matando porcos desde 2002",
  tag: "#freefire",
  img:"https://pbs.twimg.com/profile_images/1357046854404440066/91tMgDgx_400x400.jpg"
}, {
  name:"Jusefa",
  instagram: "@JusefaCostureira",
  about: "A filha de maria ta grávida e não sabe quem é o pai",
  tag: "#fifi",
  img:"https://fikiwiki.com/uploads/posts/2022-02/1644711744_31-fikiwiki-com-p-prikolnie-kartinki-pro-videonablyudenie-37.jpg"
}, {
  name:"Tião",
  instagram: "@Tião",
  about: "Tião",
  tag: "#djabeisso",
  img: "https://1.bp.blogspot.com/-lSnW_6usRc8/VPdAGXOnvZI/AAAAAAAA7TA/OBykEfnJvwE/s1600/Ti%C3%A3o%2BCarreiro%2B(Capa).jpg"
}];

const [newCard , setnewCard] = useState(items)

const mapCard = newCard.map(items => {
  return (
  <SocialProfileSimple
  name={items.name}
  instagram={items.instagram}
  about={items.about}
  tag={items.tag}
  img={items.img}/>
  )
})

  return (

    <ChakraProvider>
      {mapCard}
      
      <Button colorScheme='blue'>Button</Button>
       
    </ChakraProvider>

  )
}

export default App
