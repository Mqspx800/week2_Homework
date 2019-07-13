

const groupAdultsByAgeRange = (ageItems) => {
    const olderthan18 = sortOutYoungerThan18(ageItems)
    if (olderthan18.length == 0) return {}

   return olderthan18.reduce((acc,ageObj)=>{
       if(ageObj.age <= 20) {
           if(!acc['20 and younger']) acc['20 and younger']=[]
           acc['20 and younger'].push(ageObj)
       }
       else if(ageObj.age>20 && ageObj.age<=30) {
            if(!acc['21-30']) acc['21-30']=[]
            acc['21-30'].push(ageObj)
    }
        else if(ageObj.age>30 && ageObj.age<=40) {
            if(!acc['31-40']) acc['31-40']=[]
        acc['31-40'].push(ageObj)
    }
        else if(ageObj.age>40 && ageObj.age<=50) {
            if(!acc['41-50']) acc['41-50']=[]
            acc['41-50'].push(ageObj)
    }
        else if(ageObj.age > 50) {
            if(!acc['51 and older']) acc['51 and older']=[]
            acc['51 and older'].push(ageObj)
    }
       return acc
    },{})
}


const sortOutYoungerThan18 =(data)=>{
   return data.filter((item) => item.age >= 18)
}


module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange