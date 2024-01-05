const usermodule=require('../model/usermodel')
const t=require('jsonwebtoken')
class userservice
    {
    static async registeruser(name,email,phoneno){
try{
    const create = await usermodule.create({name,email,phoneno})
    return create
}
catch(err)
{
    console.log(err);
}
    }
static async checkuser(email)
{
    try{
        return await usermodule.findOne({email})
    }
    catch(err)
    {
        console.log(err);
    }
}
static async generatetoken(tokendata,key)
{
    try{
        return await t.sign(tokendata,key,{expiresIn:'1h'})
    }
    catch(err)
    {
        console.log(err);
    }
}
static async userupdate(id,upDetails){
    try {
        return await usermodule.updateMany(
      { _id:id},
      {$set: upDetails },
      { returnOriginal: false }
      
    );

    } catch (err) {
        console.log(err);
    }
}
    }
    
    module.exports=userservice