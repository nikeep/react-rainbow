import React from 'react';
import { mount } from 'enzyme';
import TimePicker from '../';
import { SPACE_KEY, ENTER_KEY } from '../../../libs/constants';

describe('<TimePicker/>', () => {
    it('should fire onBlur with undefined when there is not value', () => {
        const onBlurMockFn = jest.fn();
        const component = mount(
            <TimePicker label="unit-testing-timePicker" onBlur={onBlurMockFn} />,
        );
        component.find('input').simulate('focus');
        component.find('input').simulate('blur');
        expect(onBlurMockFn).toHaveBeenCalledWith(undefined);
    });
    it('should fire onBlur with the value passed', () => {
        const onBlurMockFn = jest.fn();
        const component = mount(
            <TimePicker label="unit-testing-timePicker" value="18:35" onBlur={onBlurMockFn} />,
        );
        component.find('input').simulate('focus');
        component.find('input').simulate('blur');
        expect(onBlurMockFn).toHaveBeenCalledWith('18:35');
    });
    it('should fire onFocus with undefined when there is not value', () => {
        const onFocusMockFn = jest.fn();
        const component = mount(
            <TimePicker label="unit-testing-timePicker" onFocus={onFocusMockFn} />,
        );
        component.find('input').simulate('focus');
        expect(onFocusMockFn).toHaveBeenCalledWith(undefined);
    });
    it('should fire onFocus with the value passed', () => {
        const onFocusMockFn = jest.fn();
        const component = mount(
            <TimePicker label="unit-testing-timePicker" value="18:35" onFocus={onFocusMockFn} />,
        );
        component.find('input').simulate('focus');
        expect(onFocusMockFn).toHaveBeenCalledWith('18:35');
    });
    it('should set isOpen to true and fire onClick when readOnly is not passed', () => {
        const onClickMockFn = jest.fn();
        const component = mount(
            <TimePicker label="unit-testing-timePicker" value="18:35" onClick={onClickMockFn} />,
        );
        component.find('input').simulate('click');
        expect(onClickMockFn).toHaveBeenCalledTimes(1);
        expect(component.find('Modal').prop('isOpen')).toBe(true);
    });
    it('should not set isOpen to true and not fire onClick when readOnly is passed', () => {
        const onClickMockFn = jest.fn();
        const component = mount(
            <TimePicker
                readOnly
                label="unit-testing-timePicker"
                value="18:35"
                onClick={onClickMockFn}
            />,
        );
        component.find('input').simulate('click');
        expect(onClickMockFn).toHaveBeenCalledTimes(0);
        expect(component.find('Modal').prop('isOpen')).toBe(false);
    });
    it('should have the right class names when a custom className is passed', () => {
        const component = mount(
            <TimePicker label="unit-testing-timePicker" className="my-custom-class-name" />,
        );
        expect(
            component.find('div.rainbow-time-picker_container.my-custom-class-name').exists(),
        ).toBe(true);
    });
    it('should open the modal when enter key or space key is pressed while input is focused and readOnly is not passed', () => {
        const values = [ENTER_KEY, SPACE_KEY];
        values.forEach(value => {
            const component = mount(<TimePicker label="unit-testing-timePicker" />);
            const timePickerInput = component.find('input');
            timePickerInput.simulate('focus');
            timePickerInput.simulate('keyDown', { keyCode: value });
            expect(component.find('Modal').prop('isOpen')).toBe(true);
        });
    });
    it('should not open the modal when enter key or space key is pressed while input is focused and readOnly is passed', () => {
        const values = [ENTER_KEY, SPACE_KEY];
        values.forEach(value => {
            const component = mount(<TimePicker label="unit-testing-timePicker" readOnly />);
            const timePickerInput = component.find('input');
            timePickerInput.simulate('focus');
            timePickerInput.simulate('keyDown', { keyCode: value });
            expect(component.find('Modal').prop('isOpen')).toBe(false);
        });
    });
    it('should call to focusHourInput when the modal is open', () => {
        const component = mount(<TimePicker label="unit-testing-timePicker" />);
        component.find('input').simulate('click');
        component.instance().fieldRef.current.timeSelectRef.current.focusHourInput = jest.fn();
        setTimeout(() => {
            expect(
                component.instance().fieldRef.current.timeSelectRef.current.focusHourInput,
            ).toHaveBeenCalledTimes(1);
        }, 0);
    });
    it('should set the right input value when value change dynamically', () => {
        const component = mount(<TimePicker label="unit-testing-timePicker" value="22:59" />);
        component.setProps({ value: '23:01' });
        component.update();
        expect(component.find('input').prop('value')).toBe('11:01 PM');
    });
});
