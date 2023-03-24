import Header from '../../components/header';
import Slider from '../../components/slider';
import Articles from '../../components/articles';
import Footer from '../../components/footer';

const Website = () => {
    return (
        <div>
            <Header title={'Your profile'} />
            <Slider />
            <Articles />
            <Footer />
        </div>
    )
}
export default Website;