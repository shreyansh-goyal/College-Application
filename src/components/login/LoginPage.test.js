import React from "react";
import {shallow,mount} from "enzyme";
import LoginPage from"./LoginPage";
import {findTestByAttr} from "../../../test/test.utils";
const defaultProps={success:true}
/**
 * 
 * @param {Object} props
 * @return {ShallowWrapper} 
 */
const setup=(props={})=>{
    const newProps={...props,...defaultProps};
    return shallow(<LoginPage {...newProps}/>)
}

const setAttrValue=(wrapper,attribute,property,value)=>{
        wrapper.find(`[data-test='${attribute}']`).prop(property)(value);   
}
describe("testing that all the components of the login page is rendered successfully",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=setup();
    })
    test("renders the component without any error",()=>{
        expect(wrapper).toHaveLength(1);
    })
    test("renders the header without any error",()=>{
        const header= findTestByAttr(wrapper,'header');
        expect(header).toHaveLength(1);
    })    
    test("renders the Background of login card without any error",()=>{
        const background= findTestByAttr(wrapper,'login-background');
        expect(background).toHaveLength(1);
    })    
    test("renders the Login card without any error",()=>{
        const card= findTestByAttr(wrapper,'login-card');
        expect(card).toHaveLength(1);
    })
    test("renders the Signup-card without any error",()=>{
        const signupWrapper =  setup({signup:true})
        const signUpCard= findTestByAttr(signupWrapper,'signup-card');
        expect(signUpCard).toHaveLength(1);
    })   
    test("renders the BPIT logo in the header",()=>{
        const logo= findTestByAttr(wrapper,'logo');
        expect(logo).toHaveLength(1);
    })  
    test("renders the heading of the institute",()=>{
        const heading= findTestByAttr(wrapper,'heading');
        expect(heading).toHaveLength(1);
    })   
    test("renders the side logo",()=>{
        const sideLogo= findTestByAttr(wrapper,'side-logo');
        expect(sideLogo).toHaveLength(1);
    })   
    test("login panel heading is Login Here",()=>{
        const loginHeading= findTestByAttr(wrapper,'login-heading');
        expect(loginHeading.text()).toEqual("Login Here");
    })   
    test("renders the login panel's input-login without any error",()=>{
        const loginId= findTestByAttr(wrapper,'login-loginId');
        expect(loginId).toHaveLength(1);
    }) 
    test("renders the login panel's input-login without any error",()=>{
        const password= findTestByAttr(wrapper,'login-password');
        expect(password).toHaveLength(1);
    })
    test("renders the signup panel's input-password without any error",()=>{
        let wrapper=setup({signup:true});
        const password= findTestByAttr(wrapper,'signup-password');
        expect(password).toHaveLength(1);
    })
    test("renders the signup panel's input-enrollment without any error",()=>{
        let wrapper=setup({signup:true});
        const enrollment= findTestByAttr(wrapper,'signup-username');
        expect(enrollment).toHaveLength(1);
    })    
})
describe("Testing the functionality of the Login/Signup Page",()=>{
    test("Check that state value updates when the login id is updated",()=>{
        const wrapper = setup();
        const value="Login Id"
        const LoginIdForm = findTestByAttr(wrapper,'login-username').dive();
        LoginIdForm.simulate('change',{target:{value}});
        expect(wrapper.state()).toEqual({loginId:value,password:''})        
    })
    test("Check that state value updates when the login password is updated",()=>{
        const wrapper = setup();
        const value="password"
        const LoginIdForm = findTestByAttr(wrapper,'login-password').dive();
        LoginIdForm.simulate('change',{target:{value}});
        expect(wrapper.state()).toEqual({loginId:'',password:value})        
    })
    // test("Clicking on the login button makes call to server request",()=>{
    //     const wrapper = setup();
    //     const LoginButton = findTestByAttr(wrapper,'login-button');
    //     const instance = wrapper.instance();
    //     jest.spyOn(instance,"login");
    //     wrapper.update();
    //     LoginButton.simulate('click');
    //     expect(instance.login).toHaveBeenCalled();
    // })
    test("Check that state value updates when the signup id is updated",()=>{
        const wrapper = setup({signup:true});
        const value="Login Id"
        const LoginIdForm = findTestByAttr(wrapper,'signup-username').dive();
        LoginIdForm.simulate('change',{target:{value}});
        expect(wrapper.state()).toEqual({loginId:value,password:''})        
    })
    test("Check that state value updates when the signup password is updated",()=>{
        const wrapper = setup({signup:true});
        const value="password"
        const LoginIdForm = findTestByAttr(wrapper,'signup-password').dive();
        LoginIdForm.simulate('change',{target:{value}});
        expect(wrapper.state()).toEqual({loginId:'',password:value})        
    })
    // test("Check Whether the changeView function is called when the server request is made",()=>{
    //     const wrapper=shallow(<LoginPage changeView={()=>{console.log("hello")}}/>);
    //     wrapper.find('[data-test="login-username"]').simulate('click',{target:{value:"shreyansh"}});
    //     console.log(wrapper.props()); 
    // })
})