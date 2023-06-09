import Spline from '@splinetool/react-spline';
import { Loader } from '../components/loader';

export const Home = () => {
    return <section className="home">
        <Loader />
        <Spline scene="https://prod.spline.design/4ASkNwaTapVINXuS/scene.splinecode" />
    </section>
}