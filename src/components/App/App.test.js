import React from 'react';
import App from './App';

import { shallow, mount } from 'enzyme';

import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';

describe('App component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the content correctly', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.contains('React Conf 2019')).toBe(true);
    });

    it('checkbox should disable input', () => {
        const wrapper = mount(<App />);
        const checkboxEl = wrapper.find(Checkbox).find('input');
        const inputEl = wrapper.find('#first-input').find('input');
        expect(inputEl.props().disabled).toBeFalsy();
        expect(checkboxEl.props().checked).toBeFalsy();
        checkboxEl.simulate('change');
        wrapper.setState({ inputDisabled: true });
        expect(wrapper.find('#first-input').find('input').props().disabled).toBe(true);
        expect(wrapper.find(Checkbox).find('input').props().checked).toBe(true);
    });
});
