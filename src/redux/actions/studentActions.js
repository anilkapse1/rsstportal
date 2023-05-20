import axios from "axios";
import { GET_STUDENT } from "../utils/constants";


export const getStudent=()=>{
    return async(dispatch)=>{
        try{
            const vapiData = await axios.get("./data/vapi.json");
            const vapi = vapiData.data;

            const chalaData = await axios.get("./data/chala.json");
            const chala = chalaData.data;

            const vadoliData = await axios.get("./data/vadoli.json");
            const vadoli = vadoliData.data;

            const paliData = await axios.get("./data/pali.json");
            const pali = paliData.data;

            const phansaData = await axios.get("./data/phansa.json");
            const phansa = phansaData.data;

            const silvassaData = await axios.get("./data/silvassa.json");
            const silvassa = silvassaData.data;

            const karvadData = await axios.get("./data/karvad.json");
            const karvad = karvadData.data;

            const motapondhaData = await axios.get("./data/motapondha.json");
            const motapondha = motapondhaData.data;

            const zaroliData = await axios.get("./data/zaroli.json");
            const zaroli = zaroliData.data;

            const naroliData = await axios.get("./data/naroli.json");
            const naroli = naroliData.data;

            const vaghchhipaData = await axios.get("./data/vaghchhipa.json");
            const vaghchhipa = vaghchhipaData.data;

            const sukheshData = await axios.get("./data/sukhesh.json");
            const sukhesh = sukheshData.data;

            const sarigamData = await axios.get("./data/sarigam.json");
            const sarigam = sarigamData.data;

            const nanivahiyalData = await axios.get("./data/nanivahiyal.json");
            const nanivahiyal = nanivahiyalData.data;

            const dehriData = await axios.get("./data/dehri.json");
            const dehri = dehriData.data;

            const umargamData = await axios.get("./data/umargam.json");
            const umargam = umargamData.data;

            const khattalawadaData = await axios.get("./data/khattalawada.json");
            const khattalawada = khattalawadaData.data;

              // Combine the JSON files
            const data =[...vapi, ...chala, ...vadoli, ...pali, ...phansa,...silvassa,...karvad, ...motapondha,...zaroli,...naroli,...vaghchhipa,...sukhesh,...sarigam,...nanivahiyal,...dehri,...umargam,...khattalawada];
            console.log('from action');
            console.log(data);

            const datawithid = data.map((val,idx)=>{
                return {id:idx,...val}
            })
            dispatch(loadStudent(datawithid));
        }catch(error){
            console.log(error);
        }
    }
}

export const loadStudent=(student)=>({
    type:GET_STUDENT,
    student
});


