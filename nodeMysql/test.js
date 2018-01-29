var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  port     :'3306',
  database : 'test'
});
connection.connect();
/**
 * 查询所有的
 */
// var search = "SELECT * FROM USER;";
// connection.query(search, function (error, results, fields) {
//     if (error) throw error;
//     console.log('--------------------------SELECT----------------------------');
//     console.log(results);
//     console.log('------------------------------------------------------------\n\n');
// });

/**
 * 插入数据
*/
// var addSql = 'INSERT INTO USER(id,NAME,age,sex) VALUES(?,?,?,?)';
// var addSqlParams = [4,'lff',24,'man'];
// connection.query(addSql,addSqlParams,function(err,results){
//     if(err){
//         console.log('[INSERT ERROR] - ',err.message);
//         return;
//     }       
//     console.log('--------------------------INSERT----------------------------');
//     //console.log('INSERT ID:',result.insertId);        
//     console.log('INSERT ID:',results);        
//     console.log('-----------------------------------------------------------------\n\n');  
// })

/** 
 * 修改
*/
// var modSql = 'UPDATE USER SET NAME = ? WHERE Id = ?';
// var modSqlParams = ['lc',2];
// connection.query(modSql,modSqlParams,function(err,results){
//         if(err){
//             console.log('err=',err.message);
//             return;
//         }
//             console.log('--------------------------INSERT----------------------------');
//         //console.log('INSERT ID:',result.insertId);        
//         console.log('UPDATA:',results);        
//         console.log('-----------------------------------------------------------------\n\n');  
// })  

/**
 * 删除
 */
var deleSql = 'DELETE FROM USER WHERE id = ?' 
var deleSqlParams = [3];
connection.query(deleSql,deleSqlParams,function(err,data){
    if(err){
        console.log('err',err.message);
    };
    console.log('----------------------------DELE---------------------');
    // data.protocol41在成功的情况下是true;
    console.log('dele',data);
    console.log('-----------------------------------------------------------------\n\n');
})
connection.end();
