import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Introduction from '../components/Introduction'
import fetch from 'isomorphic-unfetch'

const linkStyle = {
  marginRight: 15,
  color: '#000'
}

const pStyle = {
  marginRight: 15,
  color: '#cccccc'	
}

const Index = (props) => (
 <div>
 	<Header />
 	<Introduction />
 	<Footer />
 </div> 	
)



export default Index