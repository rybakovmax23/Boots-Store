import { Footer } from './components/footer/footer.components';
import { Main } from './components/main/main.components';
import { Header } from './components/header/header.components';
import './styles/style.scss';

const header = new Header();
const main = new Main();
const footer = new Footer();

header.init();
main.init();
footer.init();
