import React from 'react';
import {Provider} from 'react-redux';
import {store, persist} from './src/store';
import {PersistGate} from 'redux-persist/es/integration/react';
import AppNavigator from './src/navigator';

const App = () => {
    const onBeforeLift = () => {
        // take some action before the gate lifts
    };
    return (
        <Provider store={store}>
            <PersistGate
                loading={null}
                onBeforeLift={onBeforeLift}
                persistor={persist}>
                <AppNavigator />
            </PersistGate>
        </Provider>
    );
};

export default App;
