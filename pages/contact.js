import Header from '../components/Header'
import Layout from '../components/Layout'
import Social from '../components/Social'
import Footer from '../components/Footer'

export default class extends React.Component {
	render() 
	{
	    return (
	    	<div>

 			<Header />
 			<div class="page-contact">
 			<div class="container">
	 			<div grid-row="" class="scroll-transition-fade below-viewport" grid-pad="2" grid-gutter="4" grid-responsive="">
	    			<div grid-col="12" grid-pad="2" class="">
	    					<h1 class="details-spread" style={{textAlign: 'center', fontSize: '5rem' }}>Time to get serious</h1>
	    			</div>
	    		</div>
	    		<div grid-row="" class="scroll-transition-fade below-viewport" grid-pad="2" grid-gutter="4" grid-responsive="">
	    			<div grid-col="4" grid-pad="2" class="">
	    					<h3 class="details-spread" style={{textAlign: 'center', fontSize: '2rem', fontFamily: 'Times New Roman' }}>Stay with me,</h3>
	    			</div>
	    			<div grid-col="4" grid-pad="2" class="">
	    					<h3 class="details-spread" style={{textAlign: 'center', fontSize: '2rem', fontFamily: 'Times New Roman' }}>Cause you are all I need...</h3>
	    			</div>
	    			<div grid-col="4" grid-pad="2" class="">
	    					<h3 class="details-spread" style={{textAlign: 'center', fontSize: '2rem', fontFamily: 'Times New Roman' }}>Darling...</h3>
	    			</div>
	    		</div>
    		</div>
    		</div>
    		<Social />
    		<Footer />
    		<div class="page-background-contact"></div>
  			</div>
	    )
	}
}
