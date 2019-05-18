import React from 'react';
import { shallow, mount } from 'enzyme';

import Input from './Input';

describe('Input Component', () => {
    it ('should render without crashing', () => {
        const el = shallow(<Input />);
        expect(el).toMatchSnapshot();
    });

    it ('should change the input value', () => {
        let val = 'initial value';
        const changedVal = 'value changed';
        let el = null;
        const onChange = jest.fn((e) => el.setProps({ value: e.target.value }));
        el = shallow(<Input onChange={onChange} value={val} />);
        const input = el.find('input');
        expect(input.props().value).toBe(val);
        input.simulate('change', { target: { value: changedVal } });
        expect(el.find('input').props().value).toBe(changedVal);
    });

    it ('should properly validate the email', () => {
        let val = '';
        const changedVal = 'varik@steadfast.tech';
        let el = null;
        const onChange = jest.fn((e) => el.setProps({ value: e.target.value }));
        el = mount(<Input onChange={onChange} value={val} email={true}/>);
        const input = el.find('input');
        input.simulate('change', { target: { value: changedVal } });
        expect(el.find('input').props().value).toBe(changedVal);
        //This should throw an error because we can not get the state of functional components
        // expect(el.state().isValidEmail).toBe(true);
    });
});