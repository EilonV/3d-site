import Spline from '@splinetool/react-spline';
import { Loader } from '../components/loader';
import { Contact } from '../components/contact';


export const Home = () => {
    return <section className="home">
        <Loader />
        <Spline scene="https://prod.spline.design/4ASkNwaTapVINXuS/scene.splinecode" />
        <Contact />
    </section>
}