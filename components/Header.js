import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/Nav'
import Logo from '../components/Logo'

const Header = () => (
    <div class="header">
    <Head>
      <title>Frege Pulp</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <Head>
      <meta name="viewport" content="initial-scale=1.2, width=device-width" key="viewport" />
    </Head>
    <Head>
      <link rel="stylesheet" href="/static/style.css" />
    </Head>
    <Head>
      <link rel="stylesheet" href="/static/global.css" />
    </Head>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Rubik:400,500" rel="stylesheet" /> 
    </Head>
    <Head>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Head>
    <div class="row">
	    <Logo />
	   	<Nav />
   	</div>
    </div>
)
export default Header