

const groupAdultsByAgeRange = (ageItems)=>{
    const olderthan20 = ageItems.filter((item)=> item.age>20)
    if(olderthan20.length ==0) return {}
    grouping=[
    {'20 and younger':olderthan20.filter((item)=> item.age<=20)},
    {'21-30':olderthan20.filter((item)=> item.age>20&&item.age<=30)},
    {'31-40':olderthan20.filter((item)=> item.age>30&&item.age<=40)},
    {'41-50':olderthan20.filter((item)=> item.age>40&&item.age<=50)},
    {'51 and older':olderthan20.filter((item)=> item.age>50)}]
        
    console.log(grouping.filter((group)=>group[Object.keys(group)].length>0))
   return grouping.filter((group)=>group[Object.keys(group)].length>0)
}



module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange