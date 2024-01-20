import {watch,ref} from 'vue';
export default function useInputCode(initail=null){
    const one = ref(initail)

    watch(one,(v,o)=>{
        if(v.toString().length>1){
            one.value=v.toString().split('').reverse()[0];
        }
    })


    return one
}