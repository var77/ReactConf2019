import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './Checkbox';

describe('Checkbox Component', () => {
    it ('should render without crashing', () => {
        const el = shallow(<Checkbox />);
        expect(el).toMatchSnapshot();
    });

    it ('should check the checkbox', () => {
        let checked = false, el = null;
        const onCheck = jest.fn(() => el.setProps({ checked: !el.prop('checked') }));
        el = shallow(<Checkbox onCheck={onCheck} checked={checked} />);
        expect(el.prop('checked')).toBe(false);
        el.simulate('change');
        expect(onCheck).toHaveBeenCalledTimes(1);
        expect(el.props().checked).toBe(true);
    });
});