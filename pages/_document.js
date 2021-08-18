import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Script from "next/script";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang="pl">
                <Head>
                    <meta name="description" content="Emmerson Zarządzanie sp. z o.o. to sprawnie funkcjonujący zespół specjalistów działających w różnych sektorach rynku nieruchomości. Doświadczenie, wiedza i zaangażowanie pracowników tworzą prawdziwy kapitał naszej firmy." />
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Anton&display=swap" as="style"/>
                    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
                    <link  rel="preload" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                          disabled
                          crossOrigin=""
                          as="style"
                    />
                    <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' disabled/>
                    <Script
                        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDK8yuIeWDleZOdRCgY0rDyZH8TUTp8C6c&libraries=places"
                        type="application/javascript"
                        strategy="beforeInteractive"
                    />
                    <Script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                            integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
                            crossOrigin=""
                    />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}