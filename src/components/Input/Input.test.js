import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

describe('Input Component', () => {
    it ('should render without crashing', () => {
        const el = shallow(<Input />);
        expect(el).toMatchSnapshot();
    });

    it ('should check the checkbox', () => {
        let val = 'initial value';
        const changedVal = 'value changed';
        let el = null;
        const onChange = jest.fn((e) => el.setProps({ value: e.target.value }));
        el = shallow(<Input onChange={onChange} value={val} />);
        expect(el.props().value).toBe(val);
        el.simulate('change', { target: { value: changedVal } });
        expect(el.props().value).toBe(changedVal);
    });
});