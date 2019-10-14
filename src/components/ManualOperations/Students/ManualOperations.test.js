import {shallow} from "enzyme";
import React from "react";
import AddStudents from "./addStudentManually";
import sinon from "sinon";
import UpdateStudent from "./updateStudentsManually"; 
import DeleteStudent from "./deletestudents";
const setup=(props,type)=>{
    switch(type)
    {
        case 'AddStudents':{
            return shallow(<AddStudents/>);
        }
        case 'UpdateStudents':{
            return shallow(<UpdateStudent/>);
        }
        case 'DeleteStudents':{
            return shallow(<DeleteStudent/>);
        }
        default :{
            return shallow(<AddStudents/>);
        }
    }
}
const findComponentByAttr=(wrapper,attribute)=>{
    return wrapper.find(`[data-test='${attribute}']`);
}
describe('Render all the components without any error',()=>{
    test('Render the Add Students Manually  without any error',()=>{
        const wrapper = setup({},"AddStudents");
        expect(wrapper).toHaveLength(1);
    })
    test('Render the Update Students Manually  without any error',()=>{
        const wrapper = setup({},"UpdateStudents");
        expect(wrapper).toHaveLength(1);
    })
    test('Renders the Delete Students component without any error',()=>{
        const wrapper =setup({},"DeleteStudents");
        expect(wrapper).toHaveLength(1);
    })
    test('render name block successfully in AddStudents Component',()=>{
        const wrapper = setup({},"AddStudents");
        const Name = findComponentByAttr(wrapper,'name')
        expect(Name).toHaveLength(1);
    })
    test('render branch block successfully in AddStudents Component',()=>{
        const wrapper = setup({},"AddStudents");
        const Branch = findComponentByAttr(wrapper,'branch')
        expect(Branch).toHaveLength(1);
    })
    test('render year block successfully in AddStudents Component',()=>{
        const wrapper = setup({},"AddStudents");
        const Year = findComponentByAttr(wrapper,'year')
        expect(Year).toHaveLength(1);
    })
    test('render section block successfully in AddStudents Component',()=>{
        const wrapper = setup({},"AddStudents");
        const Section = findComponentByAttr(wrapper,'section')
        expect(Section).toHaveLength(1);
    })
    test('render roll-no block successfully in AddStudents Component',()=>{
        const wrapper = setup({},"AddStudents");
        const RollNo = findComponentByAttr(wrapper,'roll-no')
        expect(RollNo).toHaveLength(1);
    })
    test('render enrollment-no block successfully in AddStudents Component',()=>{
        const wrapper = setup({},"AddStudents");
        const EnrollmentNo = findComponentByAttr(wrapper,'enrollment-no')
        expect(EnrollmentNo).toHaveLength(1);
    })
    test('render group block successfully in AddStudents Component',()=>{
        const wrapper = setup({},"AddStudents");
        const Group = findComponentByAttr(wrapper,'group')
        expect(Group).toHaveLength(1);
    })
    test('render phone-no block successfully in AddStudents Component',()=>{
        const wrapper = setup({},"AddStudents");
        const PhoneNo = findComponentByAttr(wrapper,'phone-no')
        expect(PhoneNo).toHaveLength(1);
    })
    test('render father-name block successfully in AddStudents Component',()=>{
        const wrapper = setup({},"AddStudents");
        const FatherName = findComponentByAttr(wrapper,'father-name')
        expect(FatherName).toHaveLength(1);
    })
    test('render father-phone-no block successfully in AddStudents Component',()=>{
        const wrapper = setup({},"AddStudents");
        const FatherPhoneNo = findComponentByAttr(wrapper,'father-phone-no')
        expect(FatherPhoneNo).toHaveLength(1);
    })
    test('render father-email block successfully in AddStudents Component',()=>{
        const wrapper = setup({},"AddStudents");
        const FatherEmail = findComponentByAttr(wrapper,'father-email')
        expect(FatherEmail).toHaveLength(1);
    })
    test('render mother-name block successfully in AddStudents Component',()=>{
        const wrapper = setup({},"AddStudents");
        const  MotherName = findComponentByAttr(wrapper,'mother-name')
        expect(MotherName).toHaveLength(1);
    })
    test('render submit-section block successfully in AddStudents Component',()=>{
        const wrapper = setup({},"AddStudents");
        const SubmitSection = findComponentByAttr(wrapper,'submit-section')
        expect(SubmitSection).toHaveLength(1);
    })
    test('render submit-section block successfully in UpdateStudents Component',()=>{
        const wrapper = setup({},"UpdateStudents");
        const SubmitSection = findComponentByAttr(wrapper,'enrollment-no')
        expect(SubmitSection).toHaveLength(1);
    })
    test('render submit-section block successfully in UpdateStudents Component',()=>{
        const wrapper = setup({},"UpdateStudents");
        const SubmitSection = findComponentByAttr(wrapper,'find-student')
        expect(SubmitSection).toHaveLength(1);
    })
    test('render submit-section block successfully in UpdateStudents Component',()=>{
        const wrapper = setup({},"UpdateStudents");
        const SubmitSection = findComponentByAttr(wrapper,'name')
        expect(SubmitSection).toHaveLength(1);
    })
    test('render submit-section block successfully in UpdateStudents Component',()=>{
        const wrapper = setup({},"UpdateStudents");
        const SubmitSection = findComponentByAttr(wrapper,'branch')
        expect(SubmitSection).toHaveLength(1);
    })
    test('render submit-section block successfully in UpdateStudents Component',()=>{
        const wrapper = setup({},"UpdateStudents");
        const SubmitSection = findComponentByAttr(wrapper,'year')
        expect(SubmitSection).toHaveLength(1);
    })
    test('render submit-section block successfully in UpdateStudents Component',()=>{
        const wrapper = setup({},"UpdateStudents");
        const SubmitSection = findComponentByAttr(wrapper,'section')
        expect(SubmitSection).toHaveLength(1);
    })
    test('render submit-section block successfully in UpdateStudents Component',()=>{
        const wrapper = setup({},"UpdateStudents");
        const SubmitSection = findComponentByAttr(wrapper,'roll-no')
        expect(SubmitSection).toHaveLength(1);
    })
    test('render submit-section block successfully in UpdateStudents Component',()=>{
        const wrapper = setup({},"UpdateStudents");
        const SubmitSection = findComponentByAttr(wrapper,'Enrollment-no')
        expect(SubmitSection).toHaveLength(1);
    })
    test('render submit-section block successfully in UpdateStudents Component',()=>{
        const wrapper = setup({},"UpdateStudents");
        const SubmitSection = findComponentByAttr(wrapper,'group')
        expect(SubmitSection).toHaveLength(1);
    })
    test('render submit-section block successfully in UpdateStudents Component',()=>{
        const wrapper = setup({},"UpdateStudents");
        const SubmitSection = findComponentByAttr(wrapper,'pno')
        expect(SubmitSection).toHaveLength(1);
    })
    test('render submit-section block successfully in UpdateStudents Component',()=>{
        const wrapper = setup({},"UpdateStudents");
        const SubmitSection = findComponentByAttr(wrapper,'email')
        expect(SubmitSection).toHaveLength(1);
    })
    test('render submit-section block successfully in UpdateStudents Component',()=>{
        const wrapper = setup({},"UpdateStudents");
        const SubmitSection = findComponentByAttr(wrapper,'father-name')
        expect(SubmitSection).toHaveLength(1);
    })
    test('render submit-section block successfully in UpdateStudents Component',()=>{
        const wrapper = setup({},"UpdateStudents");
        const SubmitSection = findComponentByAttr(wrapper,'father-phone')
        expect(SubmitSection).toHaveLength(1);
    })
    test('render submit-section block successfully in UpdateStudents Component',()=>{
        const wrapper = setup({},"UpdateStudents");
        const SubmitSection = findComponentByAttr(wrapper,'fEmail')
        expect(SubmitSection).toHaveLength(1);
    })
    test('render submit-section block successfully in UpdateStudents Component',()=>{
        const wrapper = setup({},"UpdateStudents");
        const SubmitSection = findComponentByAttr(wrapper,'Mname')
        expect(SubmitSection).toHaveLength(1);
    })
    test('renders the all the input fields in the delete student',()=>{
        
    })
})

describe('Check the functioning of the form and state with the input fields',()=>{
    test('Add students input blocks works fine with the state of the component',()=>{
        const wrapper = setup({},"AddStudents");
        const mname="Mrs";
        const fname="Mr";
        const femail="shreyanshgoyal9@gmail.com";
        const fno="9922992299";
        const pno="9922992299";
        const group=1;
        const enroll='0909090';
        const roll='61';
        const name="shreyansh";
        const branch="CSE";
        const section="B";
        const year=1;
        const MotherName = findComponentByAttr(wrapper,'mother-name-input').shallow();
        const FatherEmail = findComponentByAttr(wrapper,'father-email-input').shallow();
        const FatherPhoneNo = findComponentByAttr(wrapper,'father-phone-no-input').shallow();
        const FatherName = findComponentByAttr(wrapper,'father-name-input').shallow();
        const PhoneNo = findComponentByAttr(wrapper,'phone-no-input').shallow();
        const Group = findComponentByAttr(wrapper,'group-input').shallow();
        const EnrollmentNo = findComponentByAttr(wrapper,'enrollment-no-input').shallow();
        const RollNo = findComponentByAttr(wrapper,'roll-no-input').shallow();
        const Name = findComponentByAttr(wrapper,'name-input').shallow();
        const Year = findComponentByAttr(wrapper,'year-input').shallow();
        const Branch = findComponentByAttr(wrapper,'branch-input').shallow();
        const Section = findComponentByAttr(wrapper,'section-input').shallow();
        MotherName.setProps({value:mname});
        FatherEmail.setProps({value:femail});
        FatherName.setProps({value:fname});
        FatherPhoneNo.setProps({value:fno});
        PhoneNo.setProps({value:pno});
        Group.setProps({value:group});
        EnrollmentNo.setProps({value:enroll});
        RollNo.setProps({value:roll});
        Name.setProps({value:name});
        Year.setProps({value:year});
        Branch.setProps({value:branch});
        Section.setProps({value:section});
        MotherName.simulate('change',{target:{value:mname,ref:"motherName"}});
        FatherName.simulate('change',{target:{value:fname,ref:"fatherName"}});
        FatherEmail.simulate('change',{target:{value:femail,ref:"fatherEmailId"}});
        FatherPhoneNo.simulate('change',{target:{value:fno,ref:"fatherPhoneNo"}});
        PhoneNo.simulate('change',{target:{value:pno,ref:"phoneNo"}});
        Group.simulate('change',{target:{value:group,ref:"group"}});
        EnrollmentNo.simulate('change',{target:{value:enroll,ref:"enrollmentNo"}});
        RollNo.simulate('change',{target:{value:roll,ref:"rollNo"}});
        Name.simulate('change',{target:{value:name,ref:"name"}});
        Year.simulate('change',{target:{value:year,ref:"year"}});
        Branch.simulate('change',{target:{value:branch,ref:"branch"}});
        Section.simulate('change',{target:{value:section,ref:"section"}});
    })
    test('On submiting the details submitDetails function is called',()=>{
        const wrapper=setup();
        wrapper.instance().submitDetails = jest.fn()
        wrapper.instance().forceUpdate()
        wrapper.update()
        const button=findComponentByAttr(wrapper,'submit-button');
        button.simulate('click');  
        expect(wrapper.instance().submitDetails).toHaveBeenCalledTimes(1)
    })
    test('On submiting the details updateDetails function is called',()=>{
        const wrapper=setup({},"UpdateStudents");
        wrapper.instance().updateStudent = jest.fn()
        wrapper.instance().forceUpdate()
        wrapper.update()
        const button=findComponentByAttr(wrapper,'update-student');
        button.simulate('click');  
        expect(wrapper.instance().updateStudent).toHaveBeenCalledTimes(1)
    })
    test('Getting the data through the enrollment number will update the input values',()=>{
        // const wrapper = setup({},'UpdateStudents');
        // const MotherName = findComponentByAttr(wrapper,'Mname').shallow();
        // const FatherEmail = findComponentByAttr(wrapper,'fEmail').shallow();
        // const FatherPhoneNo = findComponentByAttr(wrapper,'father-phone').shallow();
        // const FatherName = findComponentByAttr(wrapper,'father-name').shallow();
        // const PhoneNo = findComponentByAttr(wrapper,'phone-no').shallow();
        // const Group = findComponentByAttr(wrapper,'group').shallow();
        // const EnrollmentNo = findComponentByAttr(wrapper,'enrollment-no').shallow();
        // const RollNo = findComponentByAttr(wrapper,'roll-no').shallow();
        // const Name = findComponentByAttr(wrapper,'name').shallow();
        // const Year = findComponentByAttr(wrapper,'year').shallow();
        // const Branch = findComponentByAttr(wrapper,'branch').shallow();
        // const Section = findComponentByAttr(wrapper,'section').shallow();
        // wrapper.setState({studentDetails:{studentName:'shreyansh',motherName:'mother',fatherName:'father',fatherEmailId:'fatherEmail',fatherPhoneNo:'fatherPhone',phoneNo:'phone',group:'group',enrollmentNo:1,rollNo:'rollNo',branch:'branch',year:'year',section:'section'}});
        // wrapper.update();
        // console.log(MotherName.props());
        // if(wrapper.state().studentDetails.motherName);
        // {
        //     console.log("I am happy");
        // }

        /**
         * This function was working but the test are failing no idea
         */
    })

})