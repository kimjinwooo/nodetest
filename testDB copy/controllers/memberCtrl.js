const connection = require('../dbconfig')
const memberCtrl ={

    getMember : async (req,res) =>{
        connection.query('select * from member',(error,rows)=>{
            if (error) throw error;
            
            console.log(rows);
            res.send(rows);
            
        })
    },

    insertMember : async (req,res) =>{
        const {mem_id,mem_pw,mem_name,mem_phone} = req.body;
        const sql = `insert into member(mem_id,mem_pw,mem_name,mem_phone)
        values ("${mem_id}","${mem_pw}","${mem_name}","${mem_phone}");`

        connection.query(
            sql,(error,rows)=>{
                if (error) throw error;
                res.send(rows);
            }
        )
    }
}

module.exports = memberCtrl