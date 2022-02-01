import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store'
import Posts from '../pages/posts/Posts'



test('renders Posts component', () => {
    render(
        <Provider store={store}>
            <Posts />);
        </Provider>
    );
});

