const superagent = require('superagent')
const getTatooineResidents =()=>{
    const myPromise =  new Promise((resolve,reject)=>{
            superagent
                .get('https://swapi.co/api/planets/1/')
                .then(res => {
                    resolve(res.body.residents)
                })
                .catch(err => {
                    reject(err.message)
                })
        
    })
    return myPromise
}

const promiseMeAString=(message)=>{
    return new Promise((resolve,reject)=>{
            if(message!=null)
                resolve('You kept the Promise!')
            else reject('You have failed me!')
    }
    )
}

// const getBook = async function(){
//     const data = await superagent.get('https://swapi.co/api/planets/1/')
//             console.log(data.body.residents)
//         return data.body.residents
     
//   }
  




module.exports = {getTatooineResidents,promiseMeAString}