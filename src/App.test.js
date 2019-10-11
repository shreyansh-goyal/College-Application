import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow,mount} from "enzyme";

const defaultProps={};

const findElementByAttr=(wrapper,attribute)=>{
  return wrapper.find(`[data-test="${attribute}"]`);
}
const setup=(props)=>{
  const newProps={...defaultProps,...props}
  return shallow(<App/>)
}
describe("All components renders successfully and in the correct position",()=>{
  test("App component renders without any error",()=>{
    const wrapper = setup();
    expect(wrapper).toHaveLength(1);
  })
  test("LoginPage is rendered when the loggedIn is false",()=>{
    const wrapper = setup();
    wrapper.setState({loggedIn:false})
    const LoginPage = findElementByAttr(wrapper,"login-page");
    expect(LoginPage).toHaveLength(1); 
  })
  test("LoginPage is not rendered when the loggedIn is true",()=>{
    const wrapper = setup();
    wrapper.setState({loggedIn:true})
    const LoginPage = findElementByAttr(wrapper,"login-page");
    expect(LoginPage).toHaveLength(0); 
  })
  test("MainApp is not rendered when the loggedIn is false",()=>{
    const wrapper = setup();
    wrapper.setState({loggedIn:false})
    const MainPage = findElementByAttr(wrapper,"main-app-page");
    expect(MainPage).toHaveLength(0); 
  })
  test("MainApp is rendered when the loggedIn is true",()=>{
    const wrapper = setup();
    wrapper.setState({loggedIn:true})
    const MainPage = findElementByAttr(wrapper,"main-app-page");
    expect(MainPage).toHaveLength(1); 
  })
  test("Student Links are rendered when the role is student and none of the others",()=>{
    const wrapper =setup();
    wrapper.setState({role:"student",loggedIn:true});
    const StudentLinks = findElementByAttr(wrapper,'student');
    const AdminLinks = findElementByAttr(wrapper,'admin');
    const TeachersLinks = findElementByAttr(wrapper,'teacher');
    expect(StudentLinks).toHaveLength(1);
    expect(AdminLinks).toHaveLength(0);
    expect(TeachersLinks).toHaveLength(0);

  })
  test("Admin Links are rendered when the role is admin and none of the others",()=>{
    const wrapper =setup();
    wrapper.setState({role:"admin",loggedIn:true});
    const StudentLinks = findElementByAttr(wrapper,'student');
    const AdminLinks = findElementByAttr(wrapper,'admin');
    const TeachersLinks = findElementByAttr(wrapper,'teacher');
    expect(StudentLinks).toHaveLength(0);
    expect(AdminLinks).toHaveLength(1);
    expect(TeachersLinks).toHaveLength(0);

  })
  test("Teachers Links are rendered when the role is teacher and none of the others",()=>{
    const wrapper =setup();
    wrapper.setState({role:"teacher",loggedIn:true});
    const StudentLinks = findElementByAttr(wrapper,'student');
    const AdminLinks = findElementByAttr(wrapper,'admin');
    const TeachersLinks = findElementByAttr(wrapper,'teacher');
    expect(StudentLinks).toHaveLength(0);
    expect(AdminLinks).toHaveLength(0);
    expect(TeachersLinks).toHaveLength(1);

  })
  test("All Students links are rendered when the role is student",()=>{
    const wrapper =setup();
    wrapper.setState({role:"student",loggedIn:true});
    const StudentLinks = findElementByAttr(wrapper,'student-link');
    expect(StudentLinks).toHaveLength(1);
  })
  test("All Admin links are rendered when the role is admin",()=>{
    const wrapper =setup();
    wrapper.setState({role:"admin",loggedIn:true});
    const AdminLinks = findElementByAttr(wrapper,'admin-link');
    expect(AdminLinks).toHaveLength(9);
  })
  test("All Teachers links are rendered when the role is teacher",()=>{
    const wrapper =setup();
    wrapper.setState({role:"teacher",loggedIn:true});
    const TeachersLinks = findElementByAttr(wrapper,'teacher-link');
    expect(TeachersLinks).toHaveLength(2);
  })

})
describe("Testing all the event driven changes",()=>{
  test("",()=>{

  })
})
