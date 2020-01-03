export function titleCase(str)
{
        let a=str.split(" ");
        str="";
        for(let i of a)
        {
          i= i.charAt(0).toUpperCase()+i.slice(1);
          str=str+i+" ";
        }
        return str;
}
export function jwtToken(){
  let token = localStorage.getItem("token");
  return `Bearer ${token}`
}