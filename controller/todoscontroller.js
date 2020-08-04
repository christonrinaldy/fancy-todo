const {Todo}=require('../models')
const bcrypt=require('bcrypt');
class Constroller{
    
    static postData(req,res){
        let obj={
            title:req.body.title,
            description:req.body.description
        }
        Todo.create(obj)
        .then(result=>{
            res.status(201).json(result)
        })
        .catch(err=>{
            res.status(500).json({massage:'Fail to Create'})
        })
    }
    static readData(req,res){
        Todo.findAll()
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    static readById(req,res){
        Todo.findByPk(req.params.id)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    static update(req,res){
        let obj={
            title:req.body.title,
            description:req.body.description,
            status:req.body.status,
            due_date:req.body.status.due_date
        }
        Todo.update(obj,{where:{id:req.params.id}})
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            console.log(err)
        })

    }
    static del(req,res){
        Todo.destroy({where:{id:req.params.id}})
        .then(data=>{
            return res.status(200).json(data)
        })
        .catch(err=>{
            console.log(err)
            return res.status(404).json({massage:'404 NOT FOUND'})
        })
    }
    static register(req,res){
        let obj={
            
        }
        Todo.create()
    }
}
module.exports=Constroller