import Newsblock from "@/components/NewsBlock/Newsblock"

export async function generateMetadata() {

    return {
        alternates: {
            canonical: `/news`,
            languages: {
                'ru': `/ru/news`,
                'ua': `/ua/news`,
                'x-default':'/news',
                'en': '/news'
            }
        },
        openGraph: {
            url: `/news`
        }
    }
}

const Newspage = () => {


    return (
        <main>
            <Newsblock />
        </main>
    )
}

export default Newspage