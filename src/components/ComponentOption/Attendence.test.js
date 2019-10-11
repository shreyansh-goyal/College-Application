import {shallow,mount} from "enzyme";
import React from "react";
import  Attendence from "./Attendence";
const defaultProps={
    location:{pathname:"/upload/students"},
    match:{url:"/upload/students"}
};

const setup=(props)=>{
    const newProps={...defaultProps,...props}
    return shallow(<Attendence {...newProps}/>);
}
const findComponentByAttribute=(wrapper,attribute)=>{
        return wrapper.find(`[data-test='${attribute}']`);
}
describe('Testing the Component Option rendering inside the application', () => {
    test('Renders the component option without any error',()=>{
        const wrapper =setup();
        expect(wrapper).toHaveLength(1);
    })
    test('Renders the manual section in the component option',()=>{
        const wrapper = setup();
        const ManualPanel = findComponentByAttribute(wrapper,'manual-section');
        expect(ManualPanel).toHaveLength(1);
    })
    test('Renders the excel section in the component option',()=>{
        const wrapper = setup();
        const ExcelPanel = findComponentByAttribute(wrapper,'excel-section');
        expect(ExcelPanel).toHaveLength(1);
    })
    test('Renders the manual icon in the component option',()=>{
        const wrapper = setup();
        const ManuaIcon = findComponentByAttribute(wrapper,'manual-icon');
        expect(ManuaIcon).toHaveLength(1);
    })
    test('Renders the manual button in the component option',()=>{
        const wrapper = setup();
        const ExcelIcon = findComponentByAttribute(wrapper,'manual-button');
        expect(ExcelIcon).toHaveLength(1);
    })
    test('Renders the excel button in the component option',()=>{
        const wrapper = setup();
        const ExcelIcon = findComponentByAttribute(wrapper,'excel-button');
        expect(ExcelIcon).toHaveLength(1);
    })
    test('Heading are rendered depending upon the props we pass to the ComponentOption',()=>{
        const wrapper = setup({
            location:{pathname:"/upload/Add Students"},
            match:{url:"/upload/Add Students"}
        });
        const ExcelButtonInput = findComponentByAttribute(wrapper,'excel-button');
        expect(ExcelButtonInput.text()).toBe('Add Students Through Excel');
        const ManualButtonInput = findComponentByAttribute(wrapper,'manual-button');
        expect(ManualButtonInput.text()).toBe('Add Student Through Forms');
    })
    test("Heading are rendered depending upon the props we pass to the ComponentOption 1",()=>{
        const wrapper = setup({
            location:{pathname:"/upload/Update Students"},
            match:{url:"/upload/Update Students"}
        });
        const ExcelButtonInput = findComponentByAttribute(wrapper,'excel-button');
        expect(ExcelButtonInput.text()).toBe('Update Students Through Excel');
        const ManualButtonInput = findComponentByAttribute(wrapper,'manual-button');
        expect(ManualButtonInput.text()).toBe('Update Student Through Forms');
    })
    test("Heading are rendered depending upon the props we pass to the ComponentOption 2",()=>{
        const wrapper = setup({
            location:{pathname:"/upload/Elective Subjects"},
            match:{url:"/upload/Elective Subjects"}
        });
        const ExcelButtonInput = findComponentByAttribute(wrapper,'excel-button');
        expect(ExcelButtonInput.text()).toBe('Upload Elective Subjects Through Excel');
        const ManualButtonInput = findComponentByAttribute(wrapper,'manual-button');
        expect(ManualButtonInput.text()).toBe('Upload Elective Subject Through Forms');
    })
    test("Heading are rendered depending upon the props we pass to the ComponentOption 3",()=>{
        const wrapper = setup({
            location:{pathname:"/upload/Delete Subject"},
            match:{url:"/upload/Delete Subject"}
        });
        const ExcelButtonInput = findComponentByAttribute(wrapper,'excel-button');
        expect(ExcelButtonInput.text()).toBe('Delete Subjects Through Excel');
        const ManualButtonInput = findComponentByAttribute(wrapper,'manual-button');
        expect(ManualButtonInput.text()).toBe('Delete Subject Through Forms');
    })
    test("Heading are rendered depending upon the props we pass to the ComponentOption 4",()=>{
        const wrapper = setup({
            location:{pathname:"/upload/Add Subject"},
            match:{url:"/upload/Add Subject"}
        });
        const ExcelButtonInput = findComponentByAttribute(wrapper,'excel-button');
        expect(ExcelButtonInput.text()).toBe('Add Subjects Through Excel');
        const ManualButtonInput = findComponentByAttribute(wrapper,'manual-button');
        expect(ManualButtonInput.text()).toBe('Add Subject Through Forms');
    })
    test("Heading are rendered depending upon the props we pass to the ComponentOption 5",()=>{
        const wrapper = setup({
            location:{pathname:"/upload/Delete Teachers"},
            match:{url:"/upload/Delete Teachers"}
        });
        const ExcelButtonInput = findComponentByAttribute(wrapper,'excel-button');
        expect(ExcelButtonInput.text()).toBe('Delete Teachers Through Excel');
        const ManualButtonInput = findComponentByAttribute(wrapper,'manual-button');
        expect(ManualButtonInput.text()).toBe('Delete Teacher Through Forms');
    })
    test("Heading are rendered depending upon the props we pass to the ComponentOption 6",()=>{
        const wrapper = setup({
            location:{pathname:"/upload/Update Teachers"},
            match:{url:"/upload/Update Teachers"}
        });
        const ExcelButtonInput = findComponentByAttribute(wrapper,'excel-button');
        expect(ExcelButtonInput.text()).toBe('Update Teachers Through Excel');
        const ManualButtonInput = findComponentByAttribute(wrapper,'manual-button');
        expect(ManualButtonInput.text()).toBe('Update Teacher Through Forms');
    })
    test("Heading are rendered depending upon the props we pass to the ComponentOption 7",()=>{
        const wrapper = setup({
            location:{pathname:"/upload/Add Teachers"},
            match:{url:"/upload/Add Teachers"}
        });
        const ExcelButtonInput = findComponentByAttribute(wrapper,'excel-button');
        expect(ExcelButtonInput.text()).toBe('Add Teachers Through Excel');
        const ManualButtonInput = findComponentByAttribute(wrapper,'manual-button');
        expect(ManualButtonInput.text()).toBe('Add Teacher Through Forms');
    })
    test("Heading are rendered depending upon the props we pass to the ComponentOption 8",()=>{
        const wrapper = setup({
            location:{pathname:"/upload/Delete Students"},
            match:{url:"/upload/Delete Students"}
        });
        const ExcelButtonInput = findComponentByAttribute(wrapper,'excel-button');
        expect(ExcelButtonInput.text()).toBe('Delete Students Through Excel');
        const ManualButtonInput = findComponentByAttribute(wrapper,'manual-button');
        expect(ManualButtonInput.text()).toBe('Delete Student Through Forms');
    })

});
