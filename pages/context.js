import Header from '../components/Header'
import Footer from '../components/Footer'

const Context = () => (
 <div>
 	<Header />
    <div class="context-container scroll-transition-fade below-viewport">
    	<div grid-row="" grid-pad="2" grid-gutter="4" grid-responsive="">
			<div grid-col="8" grid-pad="2" class="">
				<img src="/static/candles.png" class="responsive" alt="context 1" />
			</div>
			<div grid-col="4" grid-pad="2" class="context-thumb">
				<div class="context-img-container">
					<img style={{padding:'20px 0'}}src="/static/frege_type.jpg" class="responsive" alt="context 1" />
				</div>
				<h3>The father of formal semantics</h3>
				<p>German philosopher, logician, and mathematician. He is understood by many to be the father of analytic philosophy, 
				concentrating on the philosophy of language and mathematics. Though largely ignored during his lifetime, 
				Giuseppe Peano (1858–1932) and Bertrand Russell (1872–1970) introduced his work to later generations of logicians 
				and philosophers.</p>
			</div>
			
			<div grid-col="4" grid-pad="2" class="context-thumb">
				<div class="context-img-container">
					<img style={{padding:'20px 0'}} src="/static/tarski.gif" class="responsive" alt="context 1" />
				</div>
				<h3>Tarskian semantics</h3>
				<p>Polish-American logician and mathematician of Polish-Jewish descent.
				Educated in Poland at the University of Warsaw, and a member of the Lwów–Warsaw school of logic and the 
				Warsaw school of mathematics, he immigrated to the United States in 1939 where he became a naturalized citizen in 1945.
				 Tarski taught and carried out research in mathematics at the University of California, Berkeley, 
				 from 1942 until his death in 1983</p>
			</div>
			<div grid-col="8" grid-pad="2" class="">
				<img src="/static/frege_context_splash.jpg" class="responsive" alt="context 1" />
			</div>


		</div>





    </div>
    <Footer />
  </div>
)

export default Context