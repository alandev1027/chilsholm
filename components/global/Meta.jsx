import { colors } from '../../styles/variables'
import Head from 'next/head'
import '../../styles/scss/global.scss'
import NProgress from 'nprogress'
import Link from 'next/link'
import Router from 'next/router'

Router.onRouteChangeStart = (url) => {
    console.log(`Loading: ${url}`)
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


export default () => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="stylesheet" href="https://use.typekit.net/gin2nns.css" />
            <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0"/>        
        </Head>
    </div>
)