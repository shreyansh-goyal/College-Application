import { jssPreset } from "@material-ui/styles";

export default {
    get:jest.fn(()=>Promise.resolve({data:null})),
    post:jest.fn(()=>Promise.resolve({data:null})),
    put:jest.fn(()=>Promise.resolve({data:null}))
};