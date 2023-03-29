import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import createDOM from './createDOM';

Enzyme.configure({ adapter: new Adapter() });
createDOM();
