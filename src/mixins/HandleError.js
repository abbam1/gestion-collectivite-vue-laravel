export default {
    methods: {
        getErrorMessage(data){
          let message = ""
          if (typeof data.message === 'string' ){
            message= data.message
          }else{
            let entries = Object.entries(data.message)
          // console.log(entries)

            entries.forEach((val)=>{
              message += val[1][0] + "\n"
            })
          }
          return message;
        }
    },
}